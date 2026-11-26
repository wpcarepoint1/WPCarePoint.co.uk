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
import {ABOUT_PAGE_DATA} from './src/data/aboutPageData';
import {CONTACT_PAGE_DATA} from './src/data/contactPageData';
import {
  AI_AUTOMATION_PAGE_DATA,
  AI_SEARCH_OPTIMISATION_PAGE_DATA,
  ECOMMERCE_DEVELOPMENT_PAGE_DATA,
  WEBSITE_CARE_SUPPORT_PAGE_DATA,
  WEBSITE_DEVELOPMENT_PAGE_DATA,
  WP_SPEED_OPTIMISATION_PAGE_DATA,
  type DedicatedServicePageConfig,
} from './src/data/dedicatedServicePagesData';
import {
  AI_POWERED_WEBSITE_DEV_PAGE_DATA,
  BRANDING_IDENTITY_PAGE_DATA,
  CUSTOM_WEB_SOLUTIONS_PAGE_DATA,
  DIGITAL_MARKETING_GROWTH_PAGE_DATA,
  SEARCH_ENGINE_OPTIMISATION_PAGE_DATA,
} from './src/data/supportingServicePagesData';
import {
  SERVICE_LANDING_PAGES,
  type ServiceLandingDetail,
} from './src/data/servicePagesData';
import {SERVICES_HUB_DATA} from './src/data/servicesHubData';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildHomePrerenderBody(): string {
  const dedicatedLinksHtml = [
    WEBSITE_DEVELOPMENT_PAGE_DATA,
    ECOMMERCE_DEVELOPMENT_PAGE_DATA,
    AI_AUTOMATION_PAGE_DATA,
    WEBSITE_CARE_SUPPORT_PAGE_DATA,
    AI_SEARCH_OPTIMISATION_PAGE_DATA,
    WP_SPEED_OPTIMISATION_PAGE_DATA,
  ]
    .map(
      (p) =>
        `<li><a href="${escapeHtml(p.routePath)}">${escapeHtml(p.breadcrumbLabel)}</a>: ${escapeHtml(p.metaDescription)}</li>`
    )
    .join('\n          ');

  const carePlansHtml = CARE_PLANS.map(
    (p) =>
      `<li><strong>${escapeHtml(p.name)}</strong> (Enquire for Pricing): ${escapeHtml(p.summary)}</li>`
  ).join('\n          ');

  const faqHtml = UK_FAQS.map(
    (f) =>
      `<div><h3>${escapeHtml(f.question)}</h3><p>${escapeHtml(f.answer)}</p></div>`
  ).join('\n          ');

  return `<main>
        <header><a href="/">WPCarePoint</a> · <a href="/contact/">Contact</a></header>
        <section>
          <h1>Building, improving and supporting digital businesses.</h1>
          <p>WPCarePoint is a UK Web Development, eCommerce &amp; AI Solutions Agency delivering bespoke websites, WooCommerce stores, AI workflow automation, structured website care, and SEO &amp; AI search optimisation.</p>
          <p>United Kingdom: ${escapeHtml(UK_OFFICE_ADDRESS)} · Serving ${escapeHtml(UK_REGIONS_SERVED.join(', '))} · Email: contact@wpcarepoint.co.uk</p>
        </section>
        <section>
          <h2>Core Services</h2>
          <ul>
          ${dedicatedLinksHtml}
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
            item: 'https://wpcarepoint.co.uk/services/',
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

  const suitabilityHtml = page.suitabilitySection
    ? `<section><h2>${escapeHtml(page.suitabilitySection.title)}</h2><ul>${page.suitabilitySection.goodFit
        .map((g) => `<li><strong>${escapeHtml(g.title)}</strong>: ${escapeHtml(g.detail)}</li>`)
        .join('')}</ul></section>`
    : '';

  const problemsHtml = page.problemsSection
    ? `<section><h2>${escapeHtml(page.problemsSection.title)}</h2><ul>${page.problemsSection.items
        .map(
          (p) =>
            `<li><strong>${escapeHtml(p.problem)}</strong>: ${escapeHtml(p.impact)} — ${escapeHtml(p.solution)}</li>`
        )
        .join('')}</ul></section>`
    : '';

  const prerenderBody = `<main>
        <nav aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/services/">Services</a> / <span>${escapeHtml(page.breadcrumbLabel)}</span></nav>
        <article>
          <p>${escapeHtml(page.hero.eyebrow)}</p>
          <h1>${escapeHtml(page.hero.headline)}</h1>
          <p>${escapeHtml(page.hero.description)}</p>
          <section>
            <h2>${escapeHtml(page.introSection.title)}</h2>
            ${page.introSection.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
          </section>
          ${suitabilityHtml}
          ${problemsHtml}
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

function buildContactPrerenderHtml(templateHtml: string): string {
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        name: CONTACT_PAGE_DATA.metaTitle,
        url: CONTACT_PAGE_DATA.canonicalUrl,
        description: CONTACT_PAGE_DATA.metaDescription,
        mainEntity: {
          '@type': 'Organization',
          name: 'WPCarePoint',
          url: 'https://wpcarepoint.co.uk/',
          email: 'contact@wpcarepoint.co.uk',
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
            name: 'Contact',
            item: CONTACT_PAGE_DATA.canonicalUrl,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: CONTACT_PAGE_DATA.faqs.map((faq) => ({
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
        <nav aria-label="Breadcrumb"><a href="/">Home</a> / <span>Contact</span></nav>
        <article>
          <p>${escapeHtml(CONTACT_PAGE_DATA.eyebrow)}</p>
          <h1>${escapeHtml(CONTACT_PAGE_DATA.headline)}</h1>
          <p>${escapeHtml(CONTACT_PAGE_DATA.description)}</p>
          <section>
            <h2>Official Contact Details</h2>
            <p>Email: <a href="mailto:contact@wpcarepoint.co.uk">contact@wpcarepoint.co.uk</a> (Email enquiries only)</p>
            <address>${escapeHtml(UK_OFFICE_ADDRESS)}</address>
          </section>
          <section>
            <h2>Enquiry Guidance by Service Track</h2>
            <ul>${CONTACT_PAGE_DATA.enquiryGuides.map((g) => `<li><strong>${escapeHtml(g.title)}</strong>: ${escapeHtml(g.description)}</li>`).join('')}</ul>
          </section>
          <section>
            <h2>Contact FAQ</h2>
            ${CONTACT_PAGE_DATA.faqs.map((f) => `<div><h3>${escapeHtml(f.question)}</h3><p>${escapeHtml(f.answer)}</p></div>`).join('')}
          </section>
        </article>
      </main>`;

  return templateHtml
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(CONTACT_PAGE_DATA.metaTitle)}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${escapeHtml(CONTACT_PAGE_DATA.metaDescription)}" />`
    )
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${CONTACT_PAGE_DATA.canonicalUrl}" />`
    )
    .replace(
      /<link\s+rel="alternate"\s+hreflang="en-gb"\s+href="[^"]*"\s*\/?>/,
      `<link rel="alternate" hreflang="en-gb" href="${CONTACT_PAGE_DATA.canonicalUrl}" />`
    )
    .replace(
      /<link\s+rel="alternate"\s+hreflang="x-default"\s+href="[^"]*"\s*\/?>/,
      `<link rel="alternate" hreflang="x-default" href="${CONTACT_PAGE_DATA.canonicalUrl}" />`
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:url" content="${CONTACT_PAGE_DATA.canonicalUrl}" />`
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${escapeHtml(CONTACT_PAGE_DATA.metaTitle)}" />`
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${escapeHtml(CONTACT_PAGE_DATA.metaDescription)}" />`
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:title" content="${escapeHtml(CONTACT_PAGE_DATA.metaTitle)}" />`
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:description" content="${escapeHtml(CONTACT_PAGE_DATA.metaDescription)}" />`
    )
    .replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script type="application/ld+json">${jsonLd}</script>`
    )
    .replace('<div id="root"></div>', `<div id="root">${prerenderBody}</div>`);
}

function buildServicesHubPrerenderHtml(templateHtml: string): string {
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: SERVICES_HUB_DATA.metaTitle,
        url: SERVICES_HUB_DATA.canonicalUrl,
        description: SERVICES_HUB_DATA.metaDescription,
        inLanguage: 'en-GB',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: [
            ...SERVICES_HUB_DATA.coreTracksSection.tracks.map((track) => ({
              name: track.title,
              url: `https://wpcarepoint.co.uk${track.routePath}`,
            })),
            ...SERVICES_HUB_DATA.supportingExpertiseSection.items
              .filter((item) => Boolean(item.href) && !item.href?.includes('#'))
              .map((item) => ({
                name: item.title,
                url: `https://wpcarepoint.co.uk${item.href}`,
              })),
          ].map((entry, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: entry.name,
            url: entry.url,
          })),
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
            item: SERVICES_HUB_DATA.canonicalUrl,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: SERVICES_HUB_DATA.faqs.map((faq) => ({
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
        <nav aria-label="Breadcrumb"><a href="/">Home</a> / <span>Services</span></nav>
        <article>
          <p>${escapeHtml(SERVICES_HUB_DATA.eyebrow)}</p>
          <h1>${escapeHtml(SERVICES_HUB_DATA.headline)}</h1>
          <p>${escapeHtml(SERVICES_HUB_DATA.description)}</p>
          <section>
            <h2>Five Core Service Categories</h2>
            <ul>${SERVICES_HUB_DATA.coreTracksSection.tracks
              .map(
                (t) =>
                  `<li><a href="${escapeHtml(t.routePath || '/services/')}">${escapeHtml(t.title)}</a>: ${escapeHtml(t.description)}</li>`
              )
              .join('')}</ul>
          </section>
          <section>
            <h2>Supporting Technical Expertise</h2>
            <ul>${SERVICES_HUB_DATA.supportingExpertiseSection.items
              .map(
                (item) =>
                  `<li>${item.href ? `<a href="${escapeHtml(item.href)}">${escapeHtml(item.title)}</a>` : `<strong>${escapeHtml(item.title)}</strong>`}: ${escapeHtml(item.summary)}</li>`
              )
              .join('')}</ul>
          </section>
          <section>
            <h2>Services FAQ</h2>
            ${SERVICES_HUB_DATA.faqs
              .map(
                (f) =>
                  `<div><h3>${escapeHtml(f.question)}</h3><p>${escapeHtml(f.answer)}</p></div>`
              )
              .join('')}
          </section>
        </article>
      </main>`;

  return templateHtml
    .replace(
      /<title>[\s\S]*?<\/title>/,
      `<title>${escapeHtml(SERVICES_HUB_DATA.metaTitle)}</title>`
    )
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${escapeHtml(SERVICES_HUB_DATA.metaDescription)}" />`
    )
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${SERVICES_HUB_DATA.canonicalUrl}" />`
    )
    .replace(
      /<link\s+rel="alternate"\s+hreflang="en-gb"\s+href="[^"]*"\s*\/?>/,
      `<link rel="alternate" hreflang="en-gb" href="${SERVICES_HUB_DATA.canonicalUrl}" />`
    )
    .replace(
      /<link\s+rel="alternate"\s+hreflang="x-default"\s+href="[^"]*"\s*\/?>/,
      `<link rel="alternate" hreflang="x-default" href="${SERVICES_HUB_DATA.canonicalUrl}" />`
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:url" content="${SERVICES_HUB_DATA.canonicalUrl}" />`
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${escapeHtml(SERVICES_HUB_DATA.metaTitle)}" />`
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${escapeHtml(SERVICES_HUB_DATA.metaDescription)}" />`
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:title" content="${escapeHtml(SERVICES_HUB_DATA.metaTitle)}" />`
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:description" content="${escapeHtml(SERVICES_HUB_DATA.metaDescription)}" />`
    )
    .replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script type="application/ld+json">${jsonLd}</script>`
    )
    .replace('<div id="root"></div>', `<div id="root">${prerenderBody}</div>`);
}

function buildAboutPrerenderHtml(templateHtml: string): string {
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        name: ABOUT_PAGE_DATA.metaTitle,
        url: ABOUT_PAGE_DATA.canonicalUrl,
        description: ABOUT_PAGE_DATA.metaDescription,
        inLanguage: 'en-GB',
        mainEntity: {
          '@type': 'Organization',
          name: 'WPCarePoint',
          url: 'https://wpcarepoint.co.uk/',
          email: 'contact@wpcarepoint.co.uk',
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
            name: 'About',
            item: ABOUT_PAGE_DATA.canonicalUrl,
          },
        ],
      },
    ],
  });

  const prerenderBody = `<main>
        <nav aria-label="Breadcrumb"><a href="/">Home</a> / <span>About</span></nav>
        <article>
          <p>${escapeHtml(ABOUT_PAGE_DATA.eyebrow)}</p>
          <h1>${escapeHtml(ABOUT_PAGE_DATA.headline)}</h1>
          <p>${escapeHtml(ABOUT_PAGE_DATA.description)}</p>
          <section>
            <h2>${escapeHtml(ABOUT_PAGE_DATA.storySection.title)}</h2>
            ${ABOUT_PAGE_DATA.storySection.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
          </section>
          <section>
            <h2>${escapeHtml(ABOUT_PAGE_DATA.whatWeDoSection.title)}</h2>
            <ul>${ABOUT_PAGE_DATA.whatWeDoSection.tracks
              .map(
                (t) =>
                  `<li><a href="${escapeHtml(t.routePath || '/services/')}">${escapeHtml(t.title)}</a>: ${escapeHtml(t.description)}</li>`
              )
              .join('')}</ul>
          </section>
          <section>
            <h2>${escapeHtml(ABOUT_PAGE_DATA.valuesSection.title)}</h2>
            <ul>${ABOUT_PAGE_DATA.valuesSection.items
              .map(
                (v) =>
                  `<li><strong>${escapeHtml(v.title)}</strong>: ${escapeHtml(v.summary)}</li>`
              )
              .join('')}</ul>
          </section>
        </article>
      </main>`;

  return templateHtml
    .replace(
      /<title>[\s\S]*?<\/title>/,
      `<title>${escapeHtml(ABOUT_PAGE_DATA.metaTitle)}</title>`
    )
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${escapeHtml(ABOUT_PAGE_DATA.metaDescription)}" />`
    )
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${ABOUT_PAGE_DATA.canonicalUrl}" />`
    )
    .replace(
      /<link\s+rel="alternate"\s+hreflang="en-gb"\s+href="[^"]*"\s*\/?>/,
      `<link rel="alternate" hreflang="en-gb" href="${ABOUT_PAGE_DATA.canonicalUrl}" />`
    )
    .replace(
      /<link\s+rel="alternate"\s+hreflang="x-default"\s+href="[^"]*"\s*\/?>/,
      `<link rel="alternate" hreflang="x-default" href="${ABOUT_PAGE_DATA.canonicalUrl}" />`
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:url" content="${ABOUT_PAGE_DATA.canonicalUrl}" />`
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${escapeHtml(ABOUT_PAGE_DATA.metaTitle)}" />`
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${escapeHtml(ABOUT_PAGE_DATA.metaDescription)}" />`
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:title" content="${escapeHtml(ABOUT_PAGE_DATA.metaTitle)}" />`
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:description" content="${escapeHtml(ABOUT_PAGE_DATA.metaDescription)}" />`
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

          // 3. Emit dedicated HTTP-200 static HTML for all 6 core + 5 supporting service pages
          const dedicatedServiceSlugs: Array<{
            slug: string;
            config: DedicatedServicePageConfig;
          }> = [
            {slug: 'website-development', config: WEBSITE_DEVELOPMENT_PAGE_DATA},
            {slug: 'ecommerce-development', config: ECOMMERCE_DEVELOPMENT_PAGE_DATA},
            {slug: 'ai-business-automation', config: AI_AUTOMATION_PAGE_DATA},
            {slug: 'website-care-support', config: WEBSITE_CARE_SUPPORT_PAGE_DATA},
            {slug: 'ai-search-optimisation', config: AI_SEARCH_OPTIMISATION_PAGE_DATA},
            {slug: 'search-engine-optimisation', config: SEARCH_ENGINE_OPTIMISATION_PAGE_DATA},
            {
              slug: 'custom-web-solutions-integrations',
              config: CUSTOM_WEB_SOLUTIONS_PAGE_DATA,
            },
            {
              slug: 'ai-powered-website-development',
              config: AI_POWERED_WEBSITE_DEV_PAGE_DATA,
            },
            {slug: 'branding-brand-identity', config: BRANDING_IDENTITY_PAGE_DATA},
            {
              slug: 'digital-marketing-online-growth',
              config: DIGITAL_MARKETING_GROWTH_PAGE_DATA,
            },
          ];

          for (const entry of dedicatedServiceSlugs) {
            const pageDir = path.join(servicesOutDir, entry.slug);
            fs.mkdirSync(pageDir, {recursive: true});
            const pageHtml = buildDedicatedServicePrerenderHtml(
              rawTemplate,
              entry.config
            );
            fs.writeFileSync(path.join(pageDir, 'index.html'), pageHtml, 'utf-8');
            fs.writeFileSync(path.join(servicesOutDir, `${entry.slug}.html`), pageHtml, 'utf-8');
          }

          const speedDir = path.join(distDir, 'wordpress-speed-optimisation');
          fs.mkdirSync(speedDir, {recursive: true});
          const speedHtml = buildDedicatedServicePrerenderHtml(
            rawTemplate,
            WP_SPEED_OPTIMISATION_PAGE_DATA
          );
          fs.writeFileSync(path.join(speedDir, 'index.html'), speedHtml, 'utf-8');
          fs.writeFileSync(path.join(distDir, 'wordpress-speed-optimisation.html'), speedHtml, 'utf-8');

          // 4. Emit dedicated HTTP-200 static HTML for /contact/, /services/ Hub, and /about/
          const contactDir = path.join(distDir, 'contact');
          fs.mkdirSync(contactDir, {recursive: true});
          const contactHtml = buildContactPrerenderHtml(rawTemplate);
          fs.writeFileSync(path.join(contactDir, 'index.html'), contactHtml, 'utf-8');
          fs.writeFileSync(path.join(distDir, 'contact.html'), contactHtml, 'utf-8');

          const servicesHubHtml = buildServicesHubPrerenderHtml(rawTemplate);
          fs.writeFileSync(path.join(servicesOutDir, 'index.html'), servicesHubHtml, 'utf-8');
          fs.writeFileSync(path.join(distDir, 'services.html'), servicesHubHtml, 'utf-8');

          const aboutDir = path.join(distDir, 'about');
          fs.mkdirSync(aboutDir, {recursive: true});
          const aboutHtml = buildAboutPrerenderHtml(rawTemplate);
          fs.writeFileSync(path.join(aboutDir, 'index.html'), aboutHtml, 'utf-8');
          fs.writeFileSync(path.join(distDir, 'about.html'), aboutHtml, 'utf-8');
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
