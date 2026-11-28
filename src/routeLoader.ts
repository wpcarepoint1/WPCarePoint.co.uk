import type { ComponentType } from 'react';
import type { DedicatedServicePageConfig } from './data/dedicatedServicePagesData';
import {
  isKnownServicePath,
  loadDedicatedServicePage,
  normalizeAppPath,
} from './data/servicePageLoader';

export type ResolvedRouteBundle =
  | { kind: 'home'; path: '/' }
  | {
      kind: 'contact';
      path: '/contact/';
      Component: ComponentType<{
        onNavigateHome: (hash?: string) => void;
        onNavigatePath: (path: string) => void;
      }>;
    }
  | {
      kind: 'services-hub';
      path: '/services/';
      Component: ComponentType<{
        onNavigateHome: (hash?: string) => void;
        onNavigatePath: (path: string) => void;
      }>;
    }
  | {
      kind: 'about';
      path: '/about/';
      Component: ComponentType<{
        onNavigateHome: (hash?: string) => void;
        onNavigatePath: (path: string) => void;
      }>;
    }
  | {
      kind: 'site-map';
      path: '/site-map/';
      Component: ComponentType<{
        onNavigateHome: (hash?: string) => void;
        onNavigatePath: (path: string) => void;
      }>;
    }
  | {
      kind: 'dedicated-service';
      path: string;
      page: DedicatedServicePageConfig;
      Component: ComponentType<{
        page: DedicatedServicePageConfig;
        onNavigateHome: (hash?: string) => void;
        onNavigatePath: (path: string) => void;
      }>;
    }
  | {
      kind: 'not-found';
      path: string;
      Component: ComponentType<{
        requestedPath: string;
        onNavigateHome: (hash?: string) => void;
        onNavigatePath: (path: string) => void;
      }>;
    };

export function cleanRawPathname(pathname: string): string {
  const cleaned = pathname.trim().toLowerCase();
  return cleaned === '' ? '/' : cleaned;
}

export async function resolveRouteBundle(
  pathname: string
): Promise<ResolvedRouteBundle> {
  const rawPath = cleanRawPathname(pathname);
  const norm = normalizeAppPath(rawPath);

  if (norm === '/') {
    return { kind: 'home', path: '/' };
  }

  if (norm === '/contact/') {
    const mod = await import('./components/contact/ContactPageView');
    return {
      kind: 'contact',
      path: '/contact/',
      Component: mod.ContactPageView,
    };
  }

  if (norm === '/services/') {
    const mod = await import('./components/services-hub/ServicesHubView');
    return {
      kind: 'services-hub',
      path: '/services/',
      Component: mod.ServicesHubView,
    };
  }

  if (norm === '/about/') {
    const mod = await import('./components/about/AboutPageView');
    return {
      kind: 'about',
      path: '/about/',
      Component: mod.AboutPageView,
    };
  }

  if (norm === '/site-map/') {
    const mod = await import('./components/site-map/SiteMapPageView');
    return {
      kind: 'site-map',
      path: '/site-map/',
      Component: mod.SiteMapPageView,
    };
  }

  if (isKnownServicePath(norm)) {
    const [pageMod, pageData] = await Promise.all([
      import('./components/service-detail/DedicatedServicePage'),
      loadDedicatedServicePage(norm),
    ]);
    if (pageData) {
      return {
        kind: 'dedicated-service',
        path: norm,
        page: pageData,
        Component: pageMod.DedicatedServicePage,
      };
    }
  }

  const notFoundMod = await import('./components/ui/NotFoundPageView');
  return {
    kind: 'not-found',
    path: rawPath,
    Component: notFoundMod.NotFoundPageView,
  };
}
