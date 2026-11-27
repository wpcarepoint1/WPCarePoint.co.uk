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

function setLinkHref(selector: string, rel: string, href: string, hreflang?: string): void {
  let el = document.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    if (hreflang) {
      el.hreflang = hreflang;
    }
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setMetaProperty(property: string, content: string): void {
  let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function applyRouteSeo(config: RouteSeoConfig): void {
  document.title = config.title;

  document.querySelector('meta[name="robots"]')?.setAttribute('content', DEFAULT_ROBOTS);
  document.querySelector('meta[name="description"]')?.setAttribute('content', config.description);
  setLinkHref('link[rel="canonical"]', 'canonical', config.canonicalUrl);
  setLinkHref('link[rel="alternate"][hreflang="en-gb"]', 'alternate', config.canonicalUrl, 'en-gb');
  setLinkHref('link[rel="alternate"][hreflang="x-default"]', 'alternate', config.canonicalUrl, 'x-default');

  setMetaProperty('og:title', config.title);
  setMetaProperty('og:description', config.description);
  setMetaProperty('og:url', config.canonicalUrl);

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

export function applyNotFoundSeo(_requestedPath: string): void {
  const title = 'Page Not Found (404) | WPCarePoint';
  const description =
    'The requested page could not be found on WPCarePoint. Explore our UK web development, WooCommerce, Website Care, and SEO services.';

  document.title = title;
  document.querySelector('meta[name="robots"]')?.setAttribute('content', 'noindex, nofollow');
  document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  document.querySelector('link[rel="canonical"]')?.remove();
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((node) => node.remove());
  document.querySelector('meta[property="og:url"]')?.remove();

  setMetaProperty('og:title', title);
  setMetaProperty('og:description', description);

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
  });
}
