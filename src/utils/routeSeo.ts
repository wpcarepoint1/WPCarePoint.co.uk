import { BRAND_INFO } from '../data/homepageData';

export interface RouteSeoConfig {
  title: string;
  description: string;
  canonicalUrl: string;
  jsonLd: Record<string, unknown>;
}

const HOME_JSON_LD: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://wpcarepoint.co.uk/#website',
      name: BRAND_INFO.name,
      url: 'https://wpcarepoint.co.uk/',
      inLanguage: 'en-GB',
      publisher: {
        '@id': 'https://wpcarepoint.co.uk/#organisation',
      },
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://wpcarepoint.co.uk/#organisation',
      name: BRAND_INFO.name,
      url: 'https://wpcarepoint.co.uk/',
      email: BRAND_INFO.email,
      image:
        'https://wpcarepoint.co.uk/src/assets/images/hero_wpcarepoint_studio_1795464512427.jpg',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Robert Denholm House, Bletchingley Road',
        addressLocality: 'Nutfield',
        addressRegion: 'Surrey',
        postalCode: 'RH1 4HW',
        addressCountry: 'GB',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'enquiries',
        email: BRAND_INFO.email,
        areaServed: 'GB',
        availableLanguage: 'en-GB',
      },
      description:
        'Web Development, eCommerce & AI Solutions Agency. Building, improving and supporting digital businesses across the United Kingdom.',
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
    },
  ],
};

export const HOME_SEO_CONFIG: RouteSeoConfig = {
  title: 'WPCarePoint – Web Development, eCommerce & AI Solutions Agency',
  description:
    'Building, improving and supporting digital businesses. UK WordPress and custom web development, WooCommerce, AI automation, Website Care Plans, SEO and AI Search Optimisation.',
  canonicalUrl: 'https://wpcarepoint.co.uk/',
  jsonLd: HOME_JSON_LD,
};

function getOrCreateJsonLdScript(): HTMLScriptElement {
  const existingById = document.getElementById('wpc-route-jsonld') as HTMLScriptElement | null;
  if (existingById) {
    return existingById;
  }

  const existingAny = document.querySelector(
    'script[type="application/ld+json"]'
  ) as HTMLScriptElement | null;
  if (existingAny) {
    existingAny.id = 'wpc-route-jsonld';
    return existingAny;
  }

  const created = document.createElement('script');
  created.id = 'wpc-route-jsonld';
  created.type = 'application/ld+json';
  document.head.appendChild(created);
  return created;
}

export function applyRouteSeo(config: RouteSeoConfig): void {
  document.title = config.title;

  document.querySelector('meta[name="description"]')?.setAttribute('content', config.description);
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', config.canonicalUrl);
  document
    .querySelector('link[rel="alternate"][hreflang="en-gb"]')
    ?.setAttribute('href', config.canonicalUrl);
  document
    .querySelector('link[rel="alternate"][hreflang="x-default"]')
    ?.setAttribute('href', config.canonicalUrl);

  document.querySelector('meta[property="og:title"]')?.setAttribute('content', config.title);
  document
    .querySelector('meta[property="og:description"]')
    ?.setAttribute('content', config.description);
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', config.canonicalUrl);

  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', config.title);
  document
    .querySelector('meta[name="twitter:description"]')
    ?.setAttribute('content', config.description);

  // Remove any stray secondary JSON-LD scripts to guarantee strictly one block per page
  const routeScript = getOrCreateJsonLdScript();
  document
    .querySelectorAll('script[type="application/ld+json"]')
    .forEach((node) => {
      if (node !== routeScript) {
        node.remove();
      }
    });

  routeScript.textContent = JSON.stringify(config.jsonLd);
}

export function applyHomeSeo(): void {
  applyRouteSeo(HOME_SEO_CONFIG);
}
