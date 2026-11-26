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

const DEFAULT_ROBOTS =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

function setLinkHref(selector: string, href: string): void {
  const el = document.querySelector(selector);
  if (el) {
    el.setAttribute('href', href);
  }
}

export function applyRouteSeo(config: RouteSeoConfig): void {
  document.title = config.title;

  document.querySelector('meta[name="robots"]')?.setAttribute('content', DEFAULT_ROBOTS);
  document.querySelector('meta[name="description"]')?.setAttribute('content', config.description);
  setLinkHref('link[rel="canonical"]', config.canonicalUrl);
  setLinkHref('link[rel="alternate"][hreflang="en-gb"]', config.canonicalUrl);
  setLinkHref('link[rel="alternate"][hreflang="x-default"]', config.canonicalUrl);

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

export function applyNotFoundSeo(requestedPath: string): void {
  const title = 'Page Not Found (404) | WPCarePoint';
  const description =
    'The requested page could not be found on WPCarePoint. Explore our UK web development, WooCommerce, Website Care, and SEO services.';
  const cleanUrl = `https://wpcarepoint.co.uk${requestedPath.startsWith('/') ? requestedPath : `/${requestedPath}`}`;

  document.title = title;
  document.querySelector('meta[name="robots"]')?.setAttribute('content', 'noindex, nofollow');
  document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  setLinkHref('link[rel="canonical"]', cleanUrl);
  setLinkHref('link[rel="alternate"][hreflang="en-gb"]', cleanUrl);
  setLinkHref('link[rel="alternate"][hreflang="x-default"]', cleanUrl);

  document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', cleanUrl);

  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);

  const routeScript = getOrCreateJsonLdScript();
  document
    .querySelectorAll('script[type="application/ld+json"]')
    .forEach((node) => {
      if (node !== routeScript) {
        node.remove();
      }
    });
  routeScript.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: cleanUrl,
  });
}
