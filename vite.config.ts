import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';
import {
  CARE_PLANS,
  UK_FAQS,
  UK_OFFICE_ADDRESS,
  UK_REGIONS_SERVED,
} from './src/data/agencyData';
import {
  SERVICE_LANDING_PAGES,
  type ServiceLandingDetail,
} from './src/data/servicePagesData';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildHomePrerenderBody(): string {
  const serviceListHtml = SERVICE_LANDING_PAGES.map(
    (s) =>
      `<li><a href="/services/${escapeHtml(s.slug)}">${escapeHtml(s.name)}</a> — ${escapeHtml(s.startingPriceGbp)} (${escapeHtml(s.typicalTimeline)}): ${escapeHtml(s.heroSummary)}</li>`
  ).join('\n          ');

  const carePlansHtml = CARE_PLANS.map(
    (p) =>
      `<li><strong>${escapeHtml(p.name)}</strong> (£${p.monthlyPriceGbp}/mo): ${escapeHtml(p.summary)}</li>`
  ).join('\n          ');

  const faqHtml = UK_FAQS.map(
    (f) =>
      `<div><h3>${escapeHtml(f.question)}</h3><p>${escapeHtml(f.answer)}</p></div>`
  ).join('\n          ');

  return `<main>
        <header><a href="/">WPCarePoint</a></header>
        <section>
          <h1>Authoritative digital architecture, bespoke engineering, and AI search leadership.</h1>
          <p>WPCarePoint partners with ambitious British organisations to architect high-performance web platforms, bespoke WooCommerce ecosystems, distinctive brand identities, and compliant AI automation—engineered to lead across Google UK and generative search.</p>
          <p>United Kingdom Studio: ${escapeHtml(UK_OFFICE_ADDRESS)} · Serving ${escapeHtml(UK_REGIONS_SERVED.join(', '))} · Email: wpcarepoint@gmail.com</p>
        </section>
        <section>
          <h2>Specialist UK Practice Areas</h2>
          <ul>
          ${serviceListHtml}
          </ul>
        </section>
        <section>
          <h2>UK Managed Care Retainers</h2>
          <ul>
          ${carePlansHtml}
          </ul>
        </section>
        <section>
          <h2>UK Governance &amp; Frequently Asked Questions</h2>
          ${faqHtml}
        </section>
      </main>`;
}

function buildServicePrerenderHtml(
  templateHtml: string,
  svc: ServiceLandingDetail
): string {
  const pageTitle = `${svc.name} UK – WPCarePoint`;
  const pageDesc = svc.heroSummary.slice(0, 158);
  const canonicalUrl = `https://wpcarepoint.co.uk/services/${svc.slug}`;

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: pageTitle,
        datePublished: '2024-01-15',
        dateModified: '2026-11-21',
        inLanguage: 'en-GB',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', 'main p'],
        },
      },
      {
        '@type': 'Service',
        name: svc.name,
        url: canonicalUrl,
        description: svc.heroSummary,
        areaServed: { '@type': 'Country', name: 'United Kingdom' },
        provider: {
          '@type': 'ProfessionalService',
          name: 'WPCarePoint',
          url: 'https://wpcarepoint.co.uk/',
          email: 'wpcarepoint@gmail.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Robert Denholm House, Bletchingley Road',
            addressLocality: 'Nutfield',
            addressRegion: 'Surrey',
            postalCode: 'RH1 4HW',
            addressCountry: 'GB',
          },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://wpcarepoint.co.uk/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: svc.name,
            item: canonicalUrl,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: svc.faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer,
          },
        })),
      },
    ],
  });

  const prerenderBody = `<main>
        <nav aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/#services">Services</a> / <span>${escapeHtml(svc.name)}</span></nav>
        <article>
          <p>${escapeHtml(svc.pillarTitle)} · United Kingdom</p>
          <h1>${escapeHtml(svc.heroHeadline)}</h1>
          <p>${escapeHtml(svc.heroSummary)}</p>
          <dl>
            <dt>Indicative UK Investment</dt><dd>${escapeHtml(svc.startingPriceGbp)}</dd>
            <dt>Delivery Schedule</dt><dd>${escapeHtml(svc.typicalTimeline)}</dd>
            <dt>Engineering Standard</dt><dd>${escapeHtml(svc.ukStandard)}</dd>
            <dt>Languages &amp; Architecture Stack</dt><dd>${escapeHtml(svc.buildStack.join(' · '))}</dd>
          </dl>
          <section>
            <h2>Commercial Alignment</h2>
            <ul>${svc.idealFor.map((pt) => `<li>${escapeHtml(pt)}</li>`).join('')}</ul>
          </section>
          <section>
            <h2>Deliverables Included in ${escapeHtml(svc.name)}</h2>
            <ul>${svc.deliverables.map((d) => `<li><strong>${escapeHtml(d.title)}</strong>: ${escapeHtml(d.detail)}</li>`).join('')}</ul>
          </section>
          <section>
            <h2>Delivery Sequence</h2>
            <ol>${svc.processSteps.map((st) => `<li><strong>${escapeHtml(st.title)}</strong>: ${escapeHtml(st.detail)}</li>`).join('')}</ol>
          </section>
          <section>
            <h2>Service FAQ</h2>
            ${svc.faqs.map((f) => `<div><h3>${escapeHtml(f.question)}</h3><p>${escapeHtml(f.answer)}</p></div>`).join('')}
          </section>
        </article>
      </main>`;

  return templateHtml
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(pageTitle)}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${escapeHtml(pageDesc)}" />`
    )
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${canonicalUrl}" />`
    )
    .replace(
      /<link\s+rel="alternate"\s+hreflang="en-gb"\s+href="[^"]*"\s*\/?>/,
      `<link rel="alternate" hreflang="en-gb" href="${canonicalUrl}" />`
    )
    .replace(
      /<link\s+rel="alternate"\s+hreflang="cy"\s+href="[^"]*"\s*\/?>/,
      `<link rel="alternate" hreflang="cy" href="${canonicalUrl}" />`
    )
    .replace(
      /<link\s+rel="alternate"\s+hreflang="x-default"\s+href="[^"]*"\s*\/?>/,
      `<link rel="alternate" hreflang="x-default" href="${canonicalUrl}" />`
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:url" content="${canonicalUrl}" />`
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${escapeHtml(pageTitle)}" />`
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${escapeHtml(pageDesc)}" />`
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:title" content="${escapeHtml(pageTitle)}" />`
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:description" content="${escapeHtml(pageDesc)}" />`
    )
    .replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script type="application/ld+json">${jsonLd}</script>`
    )
    .replace('<div id="root"></div>', `<div id="root">${prerenderBody}</div>`);
}

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      // Copies src/assets into dist/ so root-relative URLs like
      // "/src/assets/images/..." still resolve cleanly in production builds.
      // Also emits pre-rendered semantic HTML for `/` and all 10 `/services/<slug>.html`
      // routes so Googlebot, OAI-SearchBot, ClaudeBot & PerplexityBot read 100% of copy
      // at HTTP 200 without needing JS execution.
      {
        name: 'copy-assets-and-prerender-seo',
        apply: 'build',
        closeBundle(error?: Error): void {
          if (error) {
            return;
          }
          const distDir = path.resolve(__dirname, 'dist');
          const srcAssets = path.resolve(__dirname, 'src/assets');
          const distAssets = path.resolve(distDir, 'src/assets');
          if (fs.existsSync(distDir) && fs.existsSync(srcAssets)) {
            fs.cpSync(srcAssets, distAssets, {recursive: true, force: true});
          }

          const indexHtmlPath = path.join(distDir, 'index.html');
          if (!fs.existsSync(indexHtmlPath)) {
            return;
          }
          const rawTemplate = fs.readFileSync(indexHtmlPath, 'utf-8');

          // 1. Pre-render semantic HTML inside dist/index.html
          const homeHtml = rawTemplate.replace(
            '<div id="root"></div>',
            `<div id="root">${buildHomePrerenderBody()}</div>`
          );
          fs.writeFileSync(indexHtmlPath, homeHtml, 'utf-8');

          // 2. Emit dedicated HTTP-200 static route files at dist/services/<slug>.html
          const servicesOutDir = path.join(distDir, 'services');
          fs.mkdirSync(servicesOutDir, {recursive: true});
          for (const svc of SERVICE_LANDING_PAGES) {
            const serviceHtml = buildServicePrerenderHtml(rawTemplate, svc);
            fs.writeFileSync(
              path.join(servicesOutDir, `${svc.slug}.html`),
              serviceHtml,
              'utf-8'
            );
          }
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
