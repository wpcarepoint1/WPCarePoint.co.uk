import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import net from 'node:net';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const { chromium } = require('/usr/local/share/bun-global/node_modules/playwright');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

function getFreePort() {
  return new Promise((resolve, reject) => {
    const srv = net.createServer();
    srv.unref();
    srv.on('error', reject);
    srv.listen(0, '127.0.0.1', () => {
      const addr = srv.address();
      const port = typeof addr === 'object' && addr ? addr.port : 4173;
      srv.close(() => resolve(port));
    });
  });
}

let QA_PORT = Number(process.env.QA_PORT || 0);
let BASE_URL = `http://127.0.0.1:${QA_PORT || 4173}`;

const APPROVED_ROUTES = [
  '/',
  '/services/',
  '/about/',
  '/contact/',
  '/site-map/',
  '/wordpress-speed-optimisation/',
  '/services/website-development/',
  '/services/ecommerce-development/',
  '/services/ai-business-automation/',
  '/services/website-care-support/',
  '/services/ai-search-optimisation/',
  '/services/search-engine-optimisation/',
  '/services/custom-web-solutions-integrations/',
  '/services/ai-powered-website-development/',
  '/services/branding-brand-identity/',
  '/services/digital-marketing-online-growth/',
];

const UNKNOWN_ROUTES = [
  '/non-existent-route-qa/',
  '/random-typo',
  '/fatpirate-promo-code-review-2026-uk-bonus-payments-mobile-guide/',
  '/rgc/about-us/',
  '/privacy-policy/',
  '/blog/missing-legacy-post/',
];

const VIEWPORTS = [
  { width: 1440, height: 900 },
  { width: 1280, height: 800 },
  { width: 1024, height: 768 },
  { width: 768, height: 1024 },
  { width: 390, height: 844 },
  { width: 375, height: 812 },
  { width: 320, height: 640 },
];

async function waitForServer(url, timeoutMs = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // retry
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error(`Timed out waiting for server at ${url}`);
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function runHttpChecks() {
  for (const route of APPROVED_ROUTES) {
    const res = await fetch(`${BASE_URL}${route}`, { redirect: 'manual' });
    assert(res.status === 200, `Expected HTTP 200 on ${route}, got ${res.status}`);
    const html = await res.text();
    assert(
      /<meta[^>]+name="robots"[^>]+content="index,\s*follow/i.test(html),
      `Missing index, follow meta on ${route}`
    );
    assert(
      html.includes(`href="https://wpcarepoint.co.uk${route}"`),
      `Missing canonical URL on ${route}`
    );
  }

  for (const route of UNKNOWN_ROUTES) {
    const res = await fetch(`${BASE_URL}${route}`, {
      redirect: 'manual',
      headers: { Accept: 'text/html' },
    });
    assert(res.status === 404, `Expected HTTP 404 on ${route}, got ${res.status}`);
    const xRobots = res.headers.get('x-robots-tag') || '';
    assert(
      xRobots.toLowerCase().includes('noindex') && xRobots.toLowerCase().includes('nofollow'),
      `Missing X-Robots-Tag: noindex, nofollow on 404 route ${route} (got "${xRobots}")`
    );
    const html = await res.text();
    assert(
      /<meta\s+name="robots"\s+content="noindex,\s*nofollow"\s*\/?>/i.test(html),
      `Missing robots noindex, nofollow meta in 404 HTML for ${route}`
    );
    assert(!/<link\s+rel="canonical"/i.test(html), `Unexpected canonical link in 404 HTML for ${route}`);
    assert(!/<link\s+rel="alternate"/i.test(html), `Unexpected hreflang link in 404 HTML for ${route}`);
    assert(!/<meta\s+property="og:url"/i.test(html), `Unexpected og:url meta in 404 HTML for ${route}`);
    assert(
      !html.includes('<h1>Building, improving and supporting digital businesses.</h1>'),
      `404 HTML for ${route} leaked homepage H1`
    );
  }

  const sitemapRes = await fetch(`${BASE_URL}/sitemap.xml`);
  assert(sitemapRes.status === 200, `Expected 200 on /sitemap.xml, got ${sitemapRes.status}`);
  const sitemapText = await sitemapRes.text();
  const locCount = (sitemapText.match(/<loc>/g) || []).length;
  assert(
    locCount === APPROVED_ROUTES.length,
    `Expected ${APPROVED_ROUTES.length} <loc> entries in /sitemap.xml, got ${locCount}`
  );

  for (const staticFile of ['/robots.txt', '/llms.txt', '/llms-full.txt']) {
    const r = await fetch(`${BASE_URL}${staticFile}`);
    assert(r.status === 200, `Expected 200 on ${staticFile}, got ${r.status}`);
  }
}

async function runPlaywrightChecks() {
  const browser = await chromium.launch({
    executablePath:
      '/ms-playwright/chromium_headless_shell-1247/chrome-headless-shell-linux64/chrome-headless-shell',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    // 1. Matrix check: 16 routes x 7 viewports (112 pairs)
    for (const vp of VIEWPORTS) {
      const context = await browser.newContext({ viewport: vp });
      const page = await context.newPage();

      const consoleErrors = [];
      const pageErrors = [];
      const failedRequests = [];

      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          consoleErrors.push(msg.text());
        }
      });
      page.on('pageerror', (err) => pageErrors.push(err.message));
      page.on('response', (res) => {
        if (res.status() >= 400 && res.url().startsWith(BASE_URL)) {
          failedRequests.push(`${res.status()} ${res.url()}`);
        }
      });

      for (const route of APPROVED_ROUTES) {
        await page.goto(`${BASE_URL}${route}`, { waitUntil: 'load' });
        const audit = await page.evaluate(() => {
          const overflow = document.documentElement.scrollWidth > window.innerWidth + 1;
          const brokenImages = [...document.querySelectorAll('img')]
            .filter((img) => img.complete && img.naturalWidth === 0)
            .map((img) => img.getAttribute('src'));
          const h1Text = document.querySelector('h1')?.textContent?.trim() || '';
          const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '';
          const robots = document.querySelector('meta[name="robots"]')?.getAttribute('content') || '';
          const jsonLdCount = document.querySelectorAll('script[type="application/ld+json"]').length;
          const internalLinks = [...document.querySelectorAll('a[href^="/"]')]
            .map((a) => a.getAttribute('href') || '')
            .filter((href) => !href.startsWith('//'));
          return { overflow, brokenImages, h1Text, canonical, robots, jsonLdCount, internalLinks };
        });

        assert(!audit.overflow, `Horizontal overflow at ${route} (${vp.width}px)`);
        assert(
          audit.brokenImages.length === 0,
          `Broken images at ${route} (${vp.width}px): ${audit.brokenImages.join(', ')}`
        );
        assert(audit.h1Text.length > 0, `Missing H1 at ${route} (${vp.width}px)`);
        assert(
          audit.canonical === `https://wpcarepoint.co.uk${route}`,
          `Canonical mismatch at ${route} (${vp.width}px): ${audit.canonical}`
        );
        assert(
          audit.robots.includes('index') && audit.robots.includes('follow'),
          `Robots mismatch at ${route} (${vp.width}px): ${audit.robots}`
        );
        assert(audit.jsonLdCount === 1, `Expected 1 JSON-LD tag at ${route}, got ${audit.jsonLdCount}`);

        const bodyCheck = await page.evaluate(() => {
          const text = document.body?.innerText || '';
          const unverifiedClaims = /\b300\+\b|\b5\.0\/5\b|\b4\.9\/5\b|\b2019\b/i.test(text);
          const unloadedVisibleImgs = [...document.querySelectorAll('img')]
            .filter((img) => {
              const rect = img.getBoundingClientRect();
              return rect.top < window.innerHeight && (!img.complete || img.naturalWidth === 0);
            })
            .map((img) => img.getAttribute('src'));
          return { unverifiedClaims, unloadedVisibleImgs };
        });
        assert(
          !bodyCheck.unverifiedClaims,
          `Unverified or disallowed numeric/date claim detected at ${route} (${vp.width}px)`
        );
        assert(
          bodyCheck.unloadedVisibleImgs.length === 0,
          `Unloaded above-the-fold image at ${route} (${vp.width}px): ${bodyCheck.unloadedVisibleImgs.join(', ')}`
        );

        const approvedSet = new Set(APPROVED_ROUTES);
        for (const href of audit.internalLinks) {
          const clean = href.split('#')[0].split('?')[0] || '/';
          const normalized = clean === '/' ? '/' : clean.endsWith('/') ? clean : `${clean}/`;
          assert(
            approvedSet.has(normalized),
            `Unexpected internal link "${href}" on ${route} (${vp.width}px)`
          );
        }
      }

      assert(
        consoleErrors.length === 0,
        `Console errors at ${vp.width}px: ${consoleErrors.join(' | ')}`
      );
      assert(
        pageErrors.length === 0,
        `Page errors at ${vp.width}px: ${pageErrors.join(' | ')}`
      );
      assert(
        failedRequests.length === 0,
        `Failed network requests at ${vp.width}px: ${failedRequests.join(' | ')}`
      );
      await context.close();
    }

    // 2. 404 Page, Round-Trip SPA Canonical Restoration & Interactive Navigation Checks
    const interactiveCtx = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      reducedMotion: 'reduce',
    });
    const page = await interactiveCtx.newPage();

    // Verify official Fiverr proof links on /, /about/, and /services/ with safe rel attributes
    for (const proofRoute of ['/', '/about/', '/services/']) {
      await page.goto(`${BASE_URL}${proofRoute}`, { waitUntil: 'load' });
      const proofLinks = await page.evaluate(() => {
        const anchors = [...document.querySelectorAll('a[href*="fiverr.com"]')];
        return anchors.map((a) => ({
          href: a.getAttribute('href') || '',
          target: a.getAttribute('target') || '',
          rel: a.getAttribute('rel') || '',
        }));
      });
      const hasProfile = proofLinks.some((l) => l.href === 'https://www.fiverr.com/hdhiren');
      const hasPortfolio = proofLinks.some(
        (l) => l.href === 'https://www.fiverr.com/users/hdhiren/portfolio'
      );
      assert(hasProfile, `Missing official Fiverr profile link on ${proofRoute}`);
      assert(hasPortfolio, `Missing official Fiverr portfolio link on ${proofRoute}`);
      for (const l of proofLinks) {
        assert(
          l.target === '_blank' && l.rel.includes('noopener') && l.rel.includes('noreferrer'),
          `Unsafe Fiverr link attributes on ${proofRoute}: ${JSON.stringify(l)}`
        );
      }
    }

    // Measure CLS and keyboard Tab traversal on /
    await page.addInitScript(() => {
      window.__wpcCls = 0;
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            window.__wpcCls += entry.value;
          }
        }
      }).observe({ type: 'layout-shift', buffered: true });
    });
    await page.goto(`${BASE_URL}/`, { waitUntil: 'load' });
    await page.waitForSelector('#main-content h1');
    await page.waitForTimeout(300);
    const clsScore = await page.evaluate(() => window.__wpcCls || 0);
    assert(clsScore < 0.05, `Elevated layout shift detected on /: CLS=${clsScore}`);

    await page.keyboard.press('Tab');
    const firstFocusedTag = await page.evaluate(() => document.activeElement?.tagName || '');
    assert(firstFocusedTag === 'A' || firstFocusedTag === 'BUTTON', `Expected keyboard Tab focusable control, got ${firstFocusedTag}`);

    const notFoundResp = await page.goto(`${BASE_URL}/non-existent-route-qa/`, {
      waitUntil: 'load',
    });
    assert(notFoundResp?.status() === 404, `Expected 404 status in browser, got ${notFoundResp?.status()}`);
    await page.waitForSelector('#main-content h1');
    const notFoundAudit = await page.evaluate(() => ({
      h1: document.querySelector('h1')?.textContent?.trim() || '',
      robots: document.querySelector('meta[name="robots"]')?.getAttribute('content') || '',
      canonical: document.querySelector('link[rel="canonical"]'),
      hreflang: document.querySelectorAll('link[rel="alternate"][hreflang]').length,
      ogUrl: document.querySelector('meta[property="og:url"]'),
    }));
    assert(
      notFoundAudit.h1 === 'The page you requested could not be found.',
      `Unexpected 404 H1: ${notFoundAudit.h1}`
    );
    assert(notFoundAudit.robots === 'noindex, nofollow', `Unexpected 404 robots: ${notFoundAudit.robots}`);
    assert(notFoundAudit.canonical === null, '404 DOM must not contain link[rel="canonical"]');
    assert(notFoundAudit.hreflang === 0, '404 DOM must not contain hreflang links');
    assert(notFoundAudit.ogUrl === null, '404 DOM must not contain og:url meta');

    // Click Return to Homepage from 404 and confirm canonical + index, follow are cleanly restored
    await page.getByRole('button', { name: /Return to Homepage/i }).click();
    await page.waitForFunction(
      () => document.querySelector('link[rel="canonical"]')?.getAttribute('href') === 'https://wpcarepoint.co.uk/'
    );
    const homeRobots = await page.evaluate(() =>
      document.querySelector('meta[name="robots"]')?.getAttribute('content')
    );
    assert(homeRobots?.includes('index, follow'), `Expected restored index, follow on home, got ${homeRobots}`);

    // Navigate via Services Hub and test FAQ accordion + Contact page email-only lock
    await page.goto(`${BASE_URL}/services/`, { waitUntil: 'load' });
    await page.waitForSelector('#main-content button[aria-expanded]');
    const faqButton = page.locator('button[aria-expanded]').first();
    const initialExpanded = await faqButton.getAttribute('aria-expanded');
    await faqButton.click();
    const nextExpanded = await faqButton.getAttribute('aria-expanded');
    assert(initialExpanded !== nextExpanded, 'FAQ accordion failed to toggle aria-expanded');

    await page.goto(`${BASE_URL}/contact/`, { waitUntil: 'load' });
    await page.waitForSelector('#main-content h1');
    const formCount = await page.locator('form').count();
    assert(formCount === 0, `Expected 0 <form> elements on /contact/, found ${formCount}`);

    // Verify /site-map/ represents all 16 approved routes cleanly and excludes legal/blog links
    await page.goto(`${BASE_URL}/site-map/`, { waitUntil: 'load' });
    await page.waitForSelector('#main-content a[href="/"]');
    const siteMapHrefs = await page.evaluate(() =>
      [...document.querySelectorAll('#main-content a[href^="/"]')]
        .map((a) => a.getAttribute('href') || '')
        .map((href) => {
          const clean = href.split('#')[0].split('?')[0] || '/';
          return clean === '/' ? '/' : clean.endsWith('/') ? clean : `${clean}/`;
        })
    );
    const siteMapHrefSet = new Set(siteMapHrefs);
    for (const approvedRoute of APPROVED_ROUTES) {
      assert(
        siteMapHrefSet.has(approvedRoute),
        `/site-map/ is missing required canonical link to ${approvedRoute}`
      );
    }
    for (const forbidden of ['/privacy-policy/', '/cookie-policy/', '/terms-and-conditions/', '/blog/']) {
      assert(
        !siteMapHrefSet.has(forbidden),
        `/site-map/ must NOT link to excluded route ${forbidden}`
      );
    }

    // Mobile drawer regression check (390px)
    const mobileCtx = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const mobilePage = await mobileCtx.newPage();
    await mobilePage.goto(`${BASE_URL}/`, { waitUntil: 'load' });
    const menuBtn = mobilePage.getByRole('button', { name: /Open navigation menu/i });
    await menuBtn.click();
    await mobilePage.getByRole('link', { name: /About/i }).first().waitFor({ state: 'visible' });
    await mobileCtx.close();

    await interactiveCtx.close();
  } finally {
    await browser.close();
  }
}

async function main() {
  if (!QA_PORT) {
    QA_PORT = await getFreePort();
  }
  BASE_URL = `http://127.0.0.1:${QA_PORT}`;

  const tsxBin = path.join(ROOT_DIR, 'node_modules', '.bin', 'tsx');
  const serverProc = spawn(tsxBin, ['server.ts'], {
    cwd: ROOT_DIR,
    detached: true,
    env: {
      ...process.env,
      NODE_ENV: 'production',
      PORT: String(QA_PORT),
    },
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  let serverLogs = '';
  serverProc.stdout.on('data', (d) => {
    serverLogs += d.toString();
  });
  serverProc.stderr.on('data', (d) => {
    serverLogs += d.toString();
  });

  try {
    await waitForServer(`${BASE_URL}/`);
    await runHttpChecks();
    console.log(
      `✅ HTTP response checks PASSED: ${APPROVED_ROUTES.length} routes (200), ${UNKNOWN_ROUTES.length} unknown routes (404 + X-Robots-Tag: noindex, nofollow), sitemap/robots/llms.`
    );
    await runPlaywrightChecks();
    console.log(
      `✅ Playwright QA PASSED: ${APPROVED_ROUTES.length * VIEWPORTS.length} route-viewport checks (${APPROVED_ROUTES.length} × ${VIEWPORTS.length}), 404 DOM/round-trip, FAQ, Contact email-only, /site-map/ 16-route index, reduced-motion, and mobile nav.`
    );
  } catch (err) {
    console.error('❌ Local QA FAILED:', err instanceof Error ? err.message : err);
    if (serverLogs.trim()) {
      console.error('Server logs:\n', serverLogs);
    }
    process.exitCode = 1;
  } finally {
    if (serverProc.pid) {
      try {
        process.kill(-serverProc.pid, 'SIGTERM');
      } catch {
        serverProc.kill('SIGTERM');
      }
    }
  }
}

main();
