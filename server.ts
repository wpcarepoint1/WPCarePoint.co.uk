import express from 'express';
import dns from 'node:dns';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type {
  DnsDiagnostics,
  DomainDiagnosticReport,
  ExtractedWaybackContent,
  HttpDiagnostics,
  LossScenarioId,
  RdapDiagnostics,
  WaybackDiagnostics,
  WaybackSnapshot,
} from './src/types/recovery.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

function normalizeDomain(raw: string): string | null {
  const cleaned = raw
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .split('/')[0]
    .split('?')[0]
    .split('#')[0]
    .replace(/:\d+$/, '');

  // Strict hostname validation to prevent SSRF or invalid lookups
  if (
    !cleaned ||
    cleaned.length > 253 ||
    !/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,24}$/.test(cleaned)
  ) {
    return null;
  }

  if (
    cleaned === 'localhost' ||
    cleaned.endsWith('.local') ||
    cleaned.endsWith('.internal')
  ) {
    return null;
  }

  return cleaned;
}

function formatWaybackTimestamp(ts: string): string {
  if (!/^\d{14}$/.test(ts)) return ts;
  const year = ts.slice(0, 4);
  const month = ts.slice(4, 6);
  const day = ts.slice(6, 8);
  return `${year}-${month}-${day}`;
}

async function fetchWithTimeout(
  url: string,
  timeoutMs = 7000,
  init: RequestInit = {}
): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, {
      ...init,
      signal: controller.signal,
      headers: {
        'User-Agent': 'SiteRecover-Diagnostic/1.0 (+https://archive.org)',
        ...(init.headers || {}),
      },
    });
  } finally {
    clearTimeout(timer);
  }
}

async function checkDns(domain: string): Promise<DnsDiagnostics> {
  const resolver = new dns.promises.Resolver();
  resolver.setServers(['1.1.1.1', '8.8.8.8']);

  try {
    const [aRes, aaaaRes, nsRes, mxRes, txtRes] = await Promise.allSettled([
      resolver.resolve4(domain),
      resolver.resolve6(domain),
      resolver.resolveNs(domain),
      resolver.resolveMx(domain),
      resolver.resolveTxt(domain),
    ]);

    const aRecords = aRes.status === 'fulfilled' ? aRes.value : [];
    const aaaaRecords = aaaaRes.status === 'fulfilled' ? aaaaRes.value : [];
    const nsRecords = nsRes.status === 'fulfilled' ? nsRes.value : [];
    const mxRecords = mxRes.status === 'fulfilled' ? mxRes.value : [];
    const txtRecords =
      txtRes.status === 'fulfilled'
        ? txtRes.value.map((chunks) => chunks.join(''))
        : [];

    const hasAny =
      aRecords.length > 0 ||
      aaaaRecords.length > 0 ||
      nsRecords.length > 0 ||
      mxRecords.length > 0;

    if (!hasAny) {
      const firstErr = [aRes, nsRes]
        .find((r) => r.status === 'rejected') as PromiseRejectedResult | undefined;
      const errCode = (firstErr?.reason as NodeJS.ErrnoException | undefined)?.code;
      return {
        status: errCode === 'ENOTFOUND' || errCode === 'ENODATA' ? 'nxdomain' : 'error',
        aRecords: [],
        aaaaRecords: [],
        nsRecords: [],
        mxRecords: [],
        txtRecords: [],
        error: errCode ? `DNS lookup returned ${errCode}` : 'No active DNS records found',
      };
    }

    return {
      status: 'resolved',
      aRecords,
      aaaaRecords,
      nsRecords,
      mxRecords: mxRecords.sort((a, b) => a.priority - b.priority),
      txtRecords,
    };
  } catch (err) {
    return {
      status: 'error',
      aRecords: [],
      aaaaRecords: [],
      nsRecords: [],
      mxRecords: [],
      txtRecords: [],
      error: err instanceof Error ? err.message : 'DNS lookup failed',
    };
  }
}

interface RdapEntity {
  roles?: string[];
  vcardArray?: [string, Array<[string, Record<string, unknown>, string, string]>];
}

interface RdapEvent {
  eventAction?: string;
  eventDate?: string;
}

interface RdapPayload {
  ldhName?: string;
  status?: string[];
  events?: RdapEvent[];
  nameservers?: Array<{ ldhName?: string }>;
  entities?: RdapEntity[];
}

function extractRegistrar(entities?: RdapEntity[]): string | undefined {
  if (!entities) return undefined;
  const registrar = entities.find((e) => e.roles?.includes('registrar'));
  if (!registrar?.vcardArray?.[1]) return undefined;
  const fnEntry = registrar.vcardArray[1].find((item) => item[0] === 'fn');
  return typeof fnEntry?.[3] === 'string' ? fnEntry[3] : undefined;
}

async function checkRdap(domain: string): Promise<RdapDiagnostics> {
  const isUk = domain.endsWith('.uk');
  const rdapUrl = isUk
    ? `https://rdap.nominet.uk/uk/domain/${encodeURIComponent(domain)}`
    : `https://rdap.org/domain/${encodeURIComponent(domain)}`;

  try {
    const response = await fetchWithTimeout(rdapUrl, 7000, {
      headers: { Accept: 'application/rdap+json, application/json' },
    });

    if (response.status === 404) {
      return {
        status: 'not-found',
        statuses: [],
        nameservers: [],
        rdapUrl,
        error: 'Domain is not currently registered or has been deleted from the registry.',
      };
    }

    if (!response.ok) {
      return {
        status: 'error',
        statuses: [],
        nameservers: [],
        rdapUrl,
        error: `Registry RDAP responded with HTTP ${response.status}`,
      };
    }

    const data = (await response.json()) as RdapPayload;
    const events = data.events || [];
    const findEvent = (action: string) =>
      events.find((e) => e.eventAction?.toLowerCase().includes(action))?.eventDate;

    return {
      status: 'found',
      registrar: extractRegistrar(data.entities),
      statuses: data.status || [],
      registeredAt: findEvent('registration'),
      expiresAt: findEvent('expiration'),
      updatedAt: findEvent('last changed') || findEvent('last update'),
      nameservers: (data.nameservers || [])
        .map((ns) => ns.ldhName?.toLowerCase())
        .filter((v): v is string => Boolean(v)),
      rdapUrl,
    };
  } catch (err) {
    return {
      status: 'error',
      statuses: [],
      nameservers: [],
      rdapUrl,
      error: err instanceof Error ? err.message : 'RDAP query timed out',
    };
  }
}

async function checkHttp(domain: string): Promise<HttpDiagnostics> {
  const start = Date.now();
  const targetUrl = `https://${domain}`;
  try {
    const response = await fetchWithTimeout(targetUrl, 7000, {
      redirect: 'follow',
    });
    const elapsed = Date.now() - start;
    const contentType = response.headers.get('content-type') || undefined;
    const serverHeader = response.headers.get('server') || undefined;

    let title: string | undefined;
    let isWordPressHint = false;
    if (contentType?.includes('text/html')) {
      const body = (await response.text()).slice(0, 32000);
      const titleMatch = body.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      if (titleMatch?.[1]) {
        title = titleMatch[1].replace(/\s+/g, ' ').trim().slice(0, 140);
      }
      isWordPressHint =
        body.includes('wp-content') ||
        body.includes('wp-includes') ||
        /generator["'][^>]*WordPress/i.test(body);
    }

    return {
      status: response.ok ? 'reachable' : 'http-error',
      httpCode: response.status,
      finalUrl: response.url,
      serverHeader,
      contentType,
      title,
      isWordPressHint,
      responseTimeMs: elapsed,
      error: response.ok ? undefined : `Site returned HTTP ${response.status}`,
    };
  } catch (err) {
    const elapsed = Date.now() - start;
    const msg =
      err instanceof Error
        ? err.name === 'AbortError'
          ? 'Connection timed out after 7s'
          : err.message
        : 'Connection failed';
    return {
      status: 'unreachable',
      responseTimeMs: elapsed,
      error: msg,
    };
  }
}

interface WaybackAvailablePayload {
  archived_snapshots?: {
    closest?: {
      available?: boolean;
      url?: string;
      timestamp?: string;
      status?: string;
    };
  };
}

async function checkWayback(domain: string): Promise<WaybackDiagnostics> {
  try {
    const [availRes, cdxRes] = await Promise.allSettled([
      fetchWithTimeout(
        `https://archive.org/wayback/available?url=${encodeURIComponent(domain)}`,
        8000
      ),
      fetchWithTimeout(
        `https://web.archive.org/cdx/search/cdx?url=${encodeURIComponent(
          domain
        )}/*&output=json&limit=35&filter=statuscode:200&filter=mimetype:text/html&collapse=urlkey`,
        12000
      ),
    ]);

    let closestSnapshotUrl: string | undefined;
    let closestTimestamp: string | undefined;

    if (availRes.status === 'fulfilled' && availRes.value.ok) {
      const availData = (await availRes.value.json()) as WaybackAvailablePayload;
      const closest = availData.archived_snapshots?.closest;
      if (closest?.available && closest.url && closest.timestamp) {
        closestSnapshotUrl = closest.url;
        closestTimestamp = closest.timestamp;
      }
    }

    const pages: WaybackSnapshot[] = [];
    if (cdxRes.status === 'fulfilled' && cdxRes.value.ok) {
      const rows = (await cdxRes.value.json()) as string[][];
      if (Array.isArray(rows) && rows.length > 1) {
        const headers = rows[0];
        const tsIdx = headers.indexOf('timestamp');
        const origIdx = headers.indexOf('original');
        const mimeIdx = headers.indexOf('mimetype');
        const statusIdx = headers.indexOf('statuscode');

        for (const row of rows.slice(1)) {
          const timestamp = row[tsIdx] || '';
          const original = row[origIdx] || '';
          if (!timestamp || !original) continue;
          pages.push({
            url: original,
            timestamp,
            formattedDate: formatWaybackTimestamp(timestamp),
            archiveUrl: `https://web.archive.org/web/${timestamp}/${original}`,
            mimeType: row[mimeIdx] || 'text/html',
            statusCode: row[statusIdx] || '200',
          });
        }
      }
    }

    if (pages.length === 0 && closestSnapshotUrl && closestTimestamp) {
      pages.push({
        url: `https://${domain}/`,
        timestamp: closestTimestamp,
        formattedDate: formatWaybackTimestamp(closestTimestamp),
        archiveUrl: closestSnapshotUrl.replace(/^http:\/\//, 'https://'),
        mimeType: 'text/html',
        statusCode: '200',
      });
    }

    if (!closestSnapshotUrl && pages.length === 0) {
      return {
        status: 'none',
        pages: [],
      };
    }

    return {
      status: 'archived',
      closestSnapshotUrl: closestSnapshotUrl || pages[0]?.archiveUrl,
      closestTimestamp: closestTimestamp || pages[0]?.timestamp,
      closestFormattedDate: formatWaybackTimestamp(
        closestTimestamp || pages[0]?.timestamp || ''
      ),
      pages,
    };
  } catch (err) {
    return {
      status: 'error',
      pages: [],
      error: err instanceof Error ? err.message : 'Wayback Machine query failed',
    };
  }
}

function deriveRecommendation(
  domain: string,
  dnsRes: DnsDiagnostics,
  rdapRes: RdapDiagnostics,
  httpRes: HttpDiagnostics,
  waybackRes: WaybackDiagnostics
): {
  recommendedScenario: LossScenarioId;
  summaryHeadline: string;
  summaryDetail: string;
} {
  const archivedCount = waybackRes.pages.length;
  const archiveNote =
    waybackRes.status === 'archived'
      ? `Wayback Machine holds recoverable snapshots${
          archivedCount > 0 ? ` (${archivedCount} HTML pages indexed)` : ''
        }.`
      : 'Check your hosting provider and local backups immediately.';

  const isExpired =
    rdapRes.status === 'not-found' ||
    (rdapRes.expiresAt ? new Date(rdapRes.expiresAt).getTime() < Date.now() : false) ||
    rdapRes.statuses.some((s) =>
      /pendingdelete|redemption|inactive|hold|expired/i.test(s)
    );

  if (isExpired) {
    return {
      recommendedScenario: 'domain-expired',
      summaryHeadline: `${domain} appears expired or suspended at the domain registry`,
      summaryDetail: `Registry status indicates a registration lapse or hold. Renewing with the registrar before deletion is the top priority. ${archiveNote}`,
    };
  }

  if (dnsRes.status !== 'resolved' || httpRes.status === 'unreachable') {
    return {
      recommendedScenario: 'hosting-lost',
      summaryHeadline: `${domain} is registered, but the web server or DNS is unreachable`,
      summaryDetail: `Your domain registration is intact, which means your website files or hosting plan disconnected or expired. ${archiveNote}`,
    };
  }

  if (httpRes.status === 'http-error') {
    return {
      recommendedScenario: 'wordpress-broken',
      summaryHeadline: `${domain} reached a server, but returned HTTP ${httpRes.httpCode ?? 'error'}`,
      summaryDetail: `The server is responding with an application or database error. Your WordPress files or wp-config.php database link can likely be repaired. ${archiveNote}`,
    };
  }

  return {
    recommendedScenario: 'migration-accident',
    summaryHeadline: `${domain} responds online (${httpRes.httpCode ?? 200}), verify if content is missing or replaced`,
    summaryDetail: `If the live page shows a default hosting page, parked page, or empty WordPress install, restore from your host backup or Wayback archive. ${archiveNote}`,
  };
}

async function startServer() {
  const app = express();
  app.use(express.json());

  app.get('/api/diagnose', async (req, res) => {
    const rawDomain = typeof req.query.domain === 'string' ? req.query.domain : '';
    const domain = normalizeDomain(rawDomain);

    if (!domain) {
      res.status(400).json({
        error: 'Please enter a valid domain name such as wpcarepoint.co.uk.',
      });
      return;
    }

    const [dnsRes, rdapRes, httpRes, waybackRes] = await Promise.all([
      checkDns(domain),
      checkRdap(domain),
      checkHttp(domain),
      checkWayback(domain),
    ]);

    const { recommendedScenario, summaryHeadline, summaryDetail } =
      deriveRecommendation(domain, dnsRes, rdapRes, httpRes, waybackRes);

    const report: DomainDiagnosticReport = {
      domain,
      checkedAt: new Date().toISOString(),
      recommendedScenario,
      summaryHeadline,
      summaryDetail,
      dns: dnsRes,
      rdap: rdapRes,
      http: httpRes,
      wayback: waybackRes,
    };

    res.json(report);
  });

  app.get('/api/wayback-extract', async (req, res) => {
    const rawUrl = typeof req.query.url === 'string' ? req.query.url.trim() : '';
    let parsed: URL;
    try {
      parsed = new URL(rawUrl);
    } catch {
      res.status(400).json({ error: 'Invalid Wayback snapshot URL.' });
      return;
    }

    if (
      parsed.hostname !== 'web.archive.org' ||
      !parsed.pathname.startsWith('/web/')
    ) {
      res
        .status(400)
        .json({ error: 'Only web.archive.org/web/* snapshot URLs are allowed.' });
      return;
    }

    // Use id_ flag on Wayback URL so Archive.org serves original HTML without toolbar injection
    const rawArchiveUrl = rawUrl.replace(
      /^(https?:\/\/web\.archive\.org\/web\/\d+)(\/)/,
      '$1id_$2'
    );

    try {
      const response = await fetchWithTimeout(rawArchiveUrl, 12000);
      if (!response.ok) {
        res.status(502).json({
          error: `Wayback Machine returned HTTP ${response.status} for this snapshot.`,
        });
        return;
      }

      const html = (await response.text()).slice(0, 500_000);
      const decodeEntities = (str: string) =>
        str
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&quot;/g, '"')
          .replace(/&#039;|&#39;/g, "'")
          .replace(/&#8211;|&ndash;/g, '–')
          .replace(/&#8212;|&mdash;/g, '—')
          .replace(/&nbsp;/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();

      const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      const title = titleMatch?.[1] ? decodeEntities(titleMatch[1]) : 'Untitled Page';

      const metaMatch =
        html.match(
          /<meta[^>]+name=["']description["'][^>]+content=["']([\s\S]*?)["'][^>]*>/i
        ) ||
        html.match(
          /<meta[^>]+content=["']([\s\S]*?)["'][^>]+name=["']description["'][^>]*>/i
        );
      const metaDescription = metaMatch?.[1] ? decodeEntities(metaMatch[1]) : '';

      const cleanedHtml = html
        .replace(/<script[\s\S]*?<\/script>/gi, ' ')
        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
        .replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ')
        .replace(/<!--[\s\S]*?-->/g, ' ');

      const stripTags = (s: string) => decodeEntities(s.replace(/<[^>]+>/g, ' '));

      const headings: string[] = [];
      for (const m of cleanedHtml.matchAll(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/gi)) {
        const text = stripTags(m[1]);
        if (text && text.length > 1 && !headings.includes(text)) {
          headings.push(text);
        }
        if (headings.length >= 25) break;
      }

      const paragraphs: string[] = [];
      for (const m of cleanedHtml.matchAll(/<(p|li)[^>]*>([\s\S]*?)<\/\1>/gi)) {
        const text = stripTags(m[2]);
        if (text && text.length >= 25 && !paragraphs.includes(text)) {
          paragraphs.push(text);
        }
        if (paragraphs.length >= 45) break;
      }

      const imageUrls: string[] = [];
      for (const m of cleanedHtml.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)) {
        const src = m[1]?.trim();
        if (src && !src.startsWith('data:') && !imageUrls.includes(src)) {
          imageUrls.push(src);
        }
        if (imageUrls.length >= 20) break;
      }

      const payload: ExtractedWaybackContent = {
        archiveUrl: rawUrl,
        title,
        metaDescription,
        headings,
        paragraphs,
        imageUrls,
      };

      res.json(payload);
    } catch (err) {
      res.status(504).json({
        error:
          err instanceof Error
            ? err.message
            : 'Timed out fetching archived page from Wayback Machine.',
      });
    }
  });

  app.post('/api/contact', (req, res) => {
    const body = (req.body || {}) as Record<string, unknown>;
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const websiteUrl =
      typeof body.websiteUrl === 'string' ? body.websiteUrl.trim() : '';
    const servicePlan =
      typeof body.servicePlan === 'string' ? body.servicePlan.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      res.status(400).json({
        error: 'Please provide your name and a valid business email address.',
      });
      return;
    }

    const reference = `WPC-${Date.now().toString(36).toUpperCase()}`;
    res.status(201).json({
      ok: true,
      reference,
      receivedAt: new Date().toISOString(),
      summary: {
        name,
        email,
        websiteUrl,
        servicePlan,
        messageLength: message.length,
      },
    });
  });

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use((_req, res, next) => {
      res.setHeader('Content-Language', 'en-GB');
      next();
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(
      express.static(distPath, {
        index: false,
      })
    );
    app.get('*', (req, res) => {
      res.setHeader('Content-Language', 'en-GB');

      const cleanPath = req.path.toLowerCase();
      let targetFile = path.join(distPath, 'index.html');

      if (/^\/wordpress-speed-optimisation\/?$/i.test(cleanPath)) {
        const speedFile = path.join(distPath, 'wordpress-speed-optimisation', 'index.html');
        if (fs.existsSync(speedFile)) {
          targetFile = speedFile;
        }
      } else if (/^\/contact\/?$/i.test(cleanPath)) {
        const contactFile = path.join(distPath, 'contact', 'index.html');
        if (fs.existsSync(contactFile)) {
          targetFile = contactFile;
        }
      } else {
        const serviceMatch = cleanPath.match(/^\/services\/([a-z0-9-]+)\/?$/i);
        if (serviceMatch) {
          const folderIndex = path.join(
            distPath,
            'services',
            serviceMatch[1],
            'index.html'
          );
          const flatFile = path.join(distPath, 'services', `${serviceMatch[1]}.html`);
          if (fs.existsSync(folderIndex)) {
            targetFile = folderIndex;
          } else if (fs.existsSync(flatFile)) {
            targetFile = flatFile;
          }
        }
      }

      if (!fs.existsSync(targetFile)) {
        res.status(404).send('Not found');
        return;
      }

      const rawHtml = fs.readFileSync(targetFile, 'utf-8');
      res.type('html').send(rawHtml);
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`SiteRecover server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
