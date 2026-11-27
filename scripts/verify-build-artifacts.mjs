import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

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

const FORBIDDEN_DIST_PATTERNS = [
  { label: 'Cloud Run dev/staging URL', regex: /asia-east1\.run\.app/i },
  { label: 'Cloudflare Pages preview URL', regex: /\.pages\.dev/i },
  { label: 'Cloudflare Workers preview URL', regex: /\.workers\.dev/i },
  { label: 'Vercel preview URL', regex: /\.vercel\.app/i },
  { label: 'Localhost URL', regex: /localhost:3000|127\.0\.0\.1:3000/i },
  { label: 'Internal PROJECT_STATUS ref', regex: /PROJECT_STATUS\.md/i },
  { label: 'Internal PROMPT_REGISTER ref', regex: /PROMPT_REGISTER\.md/i },
  { label: 'Internal TASK_1_6 ref', regex: /TASK_1_6_/i },
  { label: 'Internal OWNER_DECISION_PACK ref', regex: /OWNER_DECISION_PACK/i },
  { label: 'Internal GSC CSV ref', regex: /gsc_performance_pages_reconstructed_56/i },
  { label: 'Internal evidence paste ref', regex: /Paste_November_23/i },
  { label: 'Analytics script ref', regex: /googletagmanager\.com|gtag\(|posthog|plausible\.io|cloudflareinsights/i },
];

const errors = [];

function fail(message) {
  errors.push(message);
}

function collectFiles(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectFiles(full, out);
    } else {
      out.push(full);
    }
  }
  return out;
}

if (!fs.existsSync(DIST_DIR)) {
  fail('dist/ directory does not exist. Run vite build first.');
} else {
  const indexHtmlPath = path.join(DIST_DIR, 'index.html');
  const notFoundHtmlPath = path.join(DIST_DIR, '404.html');

  if (!fs.existsSync(indexHtmlPath)) {
    fail('dist/index.html is missing.');
  }
  if (!fs.existsSync(notFoundHtmlPath)) {
    fail('dist/404.html is missing.');
  }

  if (fs.existsSync(indexHtmlPath) && fs.existsSync(notFoundHtmlPath)) {
    const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
    const notFoundHtml = fs.readFileSync(notFoundHtmlPath, 'utf-8');

    if (indexHtml === notFoundHtml) {
      fail('dist/404.html is identical to dist/index.html (SPA soft-404 overwrite detected).');
    }
    if (!/<meta\s+name="robots"\s+content="noindex,\s*nofollow"\s*\/?>/i.test(notFoundHtml)) {
      fail('dist/404.html is missing <meta name="robots" content="noindex, nofollow" />.');
    }
    if (!/<title>Page Not Found \(404\) \| WPCarePoint<\/title>/i.test(notFoundHtml)) {
      fail('dist/404.html has unexpected <title>.');
    }
    if (/<link\s+rel="canonical"/i.test(notFoundHtml)) {
      fail('dist/404.html must NOT contain <link rel="canonical">.');
    }
    if (/<link\s+rel="alternate"/i.test(notFoundHtml)) {
      fail('dist/404.html must NOT contain <link rel="alternate"> hreflang links.');
    }
    if (/<meta\s+property="og:url"/i.test(notFoundHtml)) {
      fail('dist/404.html must NOT contain stale <meta property="og:url">.');
    }
    if (/Building, improving and supporting digital businesses\.<\/h1>/i.test(notFoundHtml)) {
      fail('dist/404.html accidentally contains the homepage hero H1.');
    }
  }

  // Verify all 16 canonical routes exist with matching canonical & non-empty #root
  for (const route of APPROVED_ROUTES) {
    const relHtml =
      route === '/' ? 'index.html' : path.join(route.replace(/^\/|\/$/g, ''), 'index.html');
    const htmlPath = path.join(DIST_DIR, relHtml);
    if (!fs.existsSync(htmlPath)) {
      fail(`Missing prerendered route file: dist/${relHtml}`);
      continue;
    }
    const html = fs.readFileSync(htmlPath, 'utf-8');
    const expectedCanonical = `https://wpcarepoint.co.uk${route}`;
    if (!html.includes(`href="${expectedCanonical}"`)) {
      fail(`dist/${relHtml} missing canonical ${expectedCanonical}`);
    }
    if (!/<meta[^>]+name="robots"[^>]+content="index,\s*follow/i.test(html)) {
      fail(`dist/${relHtml} missing index, follow robots directive.`);
    }
    if (html.includes('<div id="root"></div>')) {
      fail(`dist/${relHtml} has empty <div id="root"></div>.`);
    }
    const jsonLdCount = (html.match(/<script[^>]*type="application\/ld\+json"/gi) || []).length;
    if (jsonLdCount !== 1) {
      fail(`dist/${relHtml} expected 1 JSON-LD script block, found ${jsonLdCount}.`);
    }
    if (route === '/contact/' && /<form[\s>]/i.test(html)) {
      fail('dist/contact/index.html contains a <form> element (violates Decision #54 email-only mode).');
    }
  }

  // Verify sitemap.xml integrity
  const distSitemapPath = path.join(DIST_DIR, 'sitemap.xml');
  const publicSitemapPath = path.join(ROOT_DIR, 'public', 'sitemap.xml');
  if (!fs.existsSync(distSitemapPath)) {
    fail('dist/sitemap.xml is missing.');
  } else {
    const sitemap = fs.readFileSync(distSitemapPath, 'utf-8');
    const locs = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
    if (locs.length !== APPROVED_ROUTES.length) {
      fail(`dist/sitemap.xml expected ${APPROVED_ROUTES.length} URLs, found ${locs.length}.`);
    }
    for (const route of APPROVED_ROUTES) {
      const expected = `https://wpcarepoint.co.uk${route}`;
      if (!locs.includes(expected)) {
        fail(`dist/sitemap.xml missing ${expected}`);
      }
    }
    if (fs.existsSync(publicSitemapPath)) {
      const publicSitemap = fs.readFileSync(publicSitemapPath, 'utf-8');
      if (publicSitemap.trim() !== sitemap.trim()) {
        fail('dist/sitemap.xml and public/sitemap.xml are out of sync.');
      }
    }
  }

  // Verify referenced image assets in dist HTML exist on disk and scan text files for leaks
  const allDistFiles = collectFiles(DIST_DIR);
  const textExtensions = new Set(['.html', '.xml', '.txt', '.js', '.css', '.json']);

  for (const filePath of allDistFiles) {
    const ext = path.extname(filePath).toLowerCase();
    const rel = path.relative(DIST_DIR, filePath);

    if (ext === '.html') {
      const html = fs.readFileSync(filePath, 'utf-8');
      for (const m of html.matchAll(/(?:href|src|content)="((?:https:\/\/wpcarepoint\.co\.uk)?\/src\/assets\/images\/[^"]+)"/g)) {
        const assetRel = m[1].replace(/^https:\/\/wpcarepoint\.co\.uk/, '').replace(/^\//, '');
        if (!fs.existsSync(path.join(DIST_DIR, assetRel))) {
          fail(`dist/${rel} references missing asset ${assetRel}`);
        }
      }
    }

    if (textExtensions.has(ext)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      for (const rule of FORBIDDEN_DIST_PATTERNS) {
        if (rule.regex.test(content)) {
          fail(`dist/${rel} matched forbidden pattern: ${rule.label}`);
        }
      }
    }
  }
}

// Verify deployment workflow does not overwrite dist/404.html or auto-deploy on push
const deployWorkflowPath = path.join(ROOT_DIR, '.github', 'workflows', 'deploy.yml');
if (fs.existsSync(deployWorkflowPath)) {
  const workflow = fs.readFileSync(deployWorkflowPath, 'utf-8');
  if (/cp\s+dist\/index\.html\s+dist\/404\.html/i.test(workflow)) {
    fail('.github/workflows/deploy.yml still contains "cp dist/index.html dist/404.html" overwrite.');
  }
  if (/^\s*push:\s*$/m.test(workflow)) {
    fail('.github/workflows/deploy.yml still enables automatic push deployment without explicit approval.');
  }
}

if (errors.length > 0) {
  console.error('❌ Build artifact verification FAILED:');
  for (const err of errors) {
    console.error(`  - ${err}`);
  }
  process.exit(1);
}

console.log(
  `✅ Build artifact verification PASSED: ${APPROVED_ROUTES.length} routes, preserved noindex dist/404.html, ${APPROVED_ROUTES.length}-URL sitemap parity, zero staging/internal leaks, and safe deploy workflow.`
);
