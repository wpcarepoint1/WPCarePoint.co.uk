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
  WEBSITE_DEVELOPMENT_PAGE_DATA,
  WP_SPEED_OPTIMISATION_PAGE_DATA,
  type DedicatedServicePageConfig,
} from './src/data/dedicatedServicePagesData';
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
      `<li><a href="/services/${escapeHtml(s.slug)}/">${escapeHtml(s.name)}</a>: ${escapeHtml(s.heroSummary)}</li>`
  ).join('\n          ');

  const carePlansHtml = CARE_PLANS.map(
    (p) =>
      `<li><strong>${escapeHtml(p.name)}</strong> (Enquire for Pricing): ${escapeHtml(p.summary)}</li>`
  ).join('\n          ');

  const faqHtml = UK_FAQS.map(
    (f) =>
      `<div><h3>${escapeHtml(f.question)}</h3><p>${escapeHtml(f.answer)}</p></div>`
  ).join('\n          ');

  return `<main>
        <header><a href="/">WPCarePoint</a></header>
        <section>
          <h1>Building, improving and supporting digital businesses.</h1>
          <p>WPCarePoint is a UK Web Development, eCommerce &amp; AI Solutions Agency delivering bespoke websites, WooCommerce stores, AI workflow automation, structured website care, and SEO &amp; AI search optimisation.</p>
          <p>United Kingdom: ${escapeHtml(UK_OFFICE_ADDRESS)} · Serving ${escapeHtml(UK_REGIONS_SERVED.join(', '))} · Email: contact@wpcarepoint.co.uk</p>
        </section>
        <section>
          <h2>Core Services</h2>
          <ul>
          <li><a href="/wordpress-speed-optimisation/">WordPress Speed Optimisation</a>: Practical Core Web Vitals, image, caching, and database optimisation for UK WordPress websites.</li>
          ${serviceListHtml}
          </ul>
        </section>
        <section>
          <h2>Website Care &amp; Technical Support</h2>
          <ul>
          ${carePlansHtml}
          </ul>
        </section>
        <section>
          <h2>Frequently Asked Questions</h2>
          ${faqHtml}
        </section>
      </main>`;
}

function buildDedicatedServicePrerenderHtml(
  templateHtml: string,
  page: DedicatedServicePageConfig
): string {
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: page.serviceSchemaName,
        url: page.canonicalUrl,
        description: page.metaDescription,
        areaServed: { '@type': 'Country', name: 'United Kingdom' },
        provider: {
          '@type': 'Organization',
          name: 'WPCarePoint',
          url: 'https://wpcarepoint.co.uk/',
          email: 'contact@wpcarepoint.co.uk',
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
            name: 'Services',
            item: 'https://wpcarepoint.co.uk/#services-overview',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: page.breadcrumbLabel,
            item: page.canonicalUrl,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: page.faqSection.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  });

  const prerenderBody = `<main>
        <nav aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/#services-overview">Services</a> / <span>${escapeHtml(page.breadcrumbLabel)}</span></nav>
        <article>
          <p>${escapeHtml(page.hero.eyebrow)}</p>
          <h1>${escapeHtml(page.hero.headline)}</h1>
          <p>${escapeHtml(page.hero.description)}</p>
          <section>
            <h2>${escapeHtml(page.introSection.title)}</h2>
            ${page.introSection.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
          </section>
          <section>
            <h2>${escapeHtml(page.capabilitiesSection.title)}</h2>
            <ul>${page.capabilitiesSection.items.map((item) => `<li><strong>${escapeHtml(item.title)}</strong>: ${escapeHtml(item.summary)}</li>`).join('')}</ul>
          </section>
          <section>
            <h2>${escapeHtml(page.technicalSection.title)}</h2>
            <ul>${page.technicalSection.pillars.map((pillar) => `<li><strong>${escapeHtml(pillar.title)}</strong>: ${escapeHtml(pillar.summary)}</li>`).join('')}</ul>
          </section>
          <section>
            <h2>${escapeHtml(page.processSection.title)}</h2>
            <ol>${page.processSection.steps.map((st) => `<li><strong>${escapeHtml(st.title)}</strong>: ${escapeHtml(st.summary)}</li>`).join('')}</ol>
          </section>
          <section>
            <h2>${escapeHtml(page.faqSection.title)}</h2>
            ${page.faqSection.faqs.map((f) => `<div><h3>${escapeHtml(f.question)}</h3><p>${escapeHtml(f.answer)}</p></div>`).join('')}
          </section>
        </article>
      </main>`;

  return templateHtml
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(page.metaTitle)}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${escapeHtml(page.metaDescription)}" />`
    )
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${page.canonicalUrl}" />`
    )
    .replace(
      /<link\s+rel="alternate"\s+hreflang="en-gb"\s+href="[^"]*"\s*\/?>/,
      `<link rel="alternate" hreflang="en-gb" href="${page.canonicalUrl}" />`
    )
    .replace(
      /<link\s+rel="alternate"\s+hreflang="x-default"\s+href="[^"]*"\s*\/?>/,
      `<link rel="alternate" hreflang="x-default" href="${page.canonicalUrl}" />`
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:url" content="${page.canonicalUrl}" />`
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${escapeHtml(page.metaTitle)}" />`
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${escapeHtml(page.metaDescription)}" />`
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:title" content="${escapeHtml(page.metaTitle)}" />`
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:description" content="${escapeHtml(page.metaDescription)}" />`
    )
    .replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script type="application/ld+json">${jsonLd}</script>`
    )
    .replace('<div id="root"></div>', `<div id="root">${prerenderBody}</div>`);
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
        inLanguage: 'en-GB',
      },
      {
        '@type': 'Service',
        name: svc.name,
        url: canonicalUrl,
        description: svc.heroSummary,
        areaServed: { '@type': 'Country', name: 'United Kingdom' },
        provider: {
          '@type': 'Organization',
          name: 'WPCarePoint',
          url: 'https://wpcarepoint.co.uk/',
          email: 'contact@wpcarepoint.co.uk',
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
        <nav aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/#services-overview">Services</a> / <span>${escapeHtml(svc.name)}</span></nav>
        <article>
          <p>${escapeHtml(svc.pillarTitle)} · United Kingdom</p>
          <h1>${escapeHtml(svc.heroHeadline)}</h1>
          <p>${escapeHtml(svc.heroSummary)}</p>
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

          // 1. Pre-render semantic HTML inside dist/index.html (with homepage-only hero preload)
          const homeHtml = rawTemplate
            .replace(
              '</head>',
              '    <link rel="preload" as="image" href="/src/assets/images/hero_wpcarepoint_studio_1795464512427.jpg" fetchpriority="high" />\n  </head>'
            )
            .replace(
              '<div id="root"></div>',
              `<div id="root">${buildHomePrerenderBody()}</div>`
            );
          fs.writeFileSync(indexHtmlPath, homeHtml, 'utf-8');

          // 2. Emit HTTP-200 static route files for supporting services
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

          // 3. Emit dedicated HTTP-200 static HTML for Task 2.2 service pages
          const webDevDir = path.join(servicesOutDir, 'website-development');
          fs.mkdirSync(webDevDir, {recursive: true});
          const webDevHtml = buildDedicatedServicePrerenderHtml(
            rawTemplate,
            WEBSITE_DEVELOPMENT_PAGE_DATA
          );
          fs.writeFileSync(path.join(webDevDir, 'index.html'), webDevHtml, 'utf-8');
          fs.writeFileSync(path.join(servicesOutDir, 'website-development.html'), webDevHtml, 'utf-8');

          const speedDir = path.join(distDir, 'wordpress-speed-optimisation');
          fs.mkdirSync(speedDir, {recursive: true});
          const speedHtml = buildDedicatedServicePrerenderHtml(
            rawTemplate,
            WP_SPEED_OPTIMISATION_PAGE_DATA
          );
          fs.writeFileSync(path.join(speedDir, 'index.html'), speedHtml, 'utf-8');
          fs.writeFileSync(path.join(distDir, 'wordpress-speed-optimisation.html'), speedHtml, 'utf-8');
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
