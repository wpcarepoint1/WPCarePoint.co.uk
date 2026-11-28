import type { DedicatedServicePageConfig } from './dedicatedServicePagesData';

export function normalizeAppPath(pathname: string): string {
  const cleaned = pathname.trim().toLowerCase();
  if (cleaned === '' || cleaned === '/') return '/';
  return cleaned.endsWith('/') ? cleaned : `${cleaned}/`;
}

export async function loadDedicatedServicePage(
  pathname: string
): Promise<DedicatedServicePageConfig | undefined> {
  const norm = normalizeAppPath(pathname);

  switch (norm) {
    case '/services/website-development/': {
      const mod = await import('./dedicatedServicePagesData');
      return mod.WEBSITE_DEVELOPMENT_PAGE_DATA;
    }
    case '/wordpress-speed-optimisation/': {
      const mod = await import('./dedicatedServicePagesData');
      return mod.WP_SPEED_OPTIMISATION_PAGE_DATA;
    }
    case '/services/ecommerce-development/': {
      const mod = await import('./dedicatedServicePagesData');
      return mod.ECOMMERCE_DEVELOPMENT_PAGE_DATA;
    }
    case '/services/ai-business-automation/': {
      const mod = await import('./dedicatedServicePagesData');
      return mod.AI_AUTOMATION_PAGE_DATA;
    }
    case '/services/website-care-support/': {
      const mod = await import('./dedicatedServicePagesData');
      return mod.WEBSITE_CARE_SUPPORT_PAGE_DATA;
    }
    case '/services/ai-search-optimisation/': {
      const mod = await import('./dedicatedServicePagesData');
      return mod.AI_SEARCH_OPTIMISATION_PAGE_DATA;
    }
    case '/services/search-engine-optimisation/': {
      const mod = await import('./supportingServicePagesData');
      return mod.SEARCH_ENGINE_OPTIMISATION_PAGE_DATA;
    }
    case '/services/custom-web-solutions-integrations/': {
      const mod = await import('./supportingServicePagesData');
      return mod.CUSTOM_WEB_SOLUTIONS_PAGE_DATA;
    }
    case '/services/ai-powered-website-development/': {
      const mod = await import('./supportingServicePagesData');
      return mod.AI_POWERED_WEBSITE_DEV_PAGE_DATA;
    }
    case '/services/branding-brand-identity/': {
      const mod = await import('./supportingServicePagesData');
      return mod.BRANDING_IDENTITY_PAGE_DATA;
    }
    case '/services/digital-marketing-online-growth/': {
      const mod = await import('./supportingServicePagesData');
      return mod.DIGITAL_MARKETING_GROWTH_PAGE_DATA;
    }
    default:
      return undefined;
  }
}

export function isKnownServicePath(pathname: string): boolean {
  const norm = normalizeAppPath(pathname);
  return (
    norm === '/services/website-development/' ||
    norm === '/wordpress-speed-optimisation/' ||
    norm === '/services/ecommerce-development/' ||
    norm === '/services/ai-business-automation/' ||
    norm === '/services/website-care-support/' ||
    norm === '/services/ai-search-optimisation/' ||
    norm === '/services/search-engine-optimisation/' ||
    norm === '/services/custom-web-solutions-integrations/' ||
    norm === '/services/ai-powered-website-development/' ||
    norm === '/services/branding-brand-identity/' ||
    norm === '/services/digital-marketing-online-growth/'
  );
}
