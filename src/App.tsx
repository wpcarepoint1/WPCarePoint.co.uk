/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import { SiteFooter } from './components/layout/SiteFooter';
import { SiteHeader } from './components/layout/SiteHeader';
import { ScrollProgressBar } from './components/MotionPrimitives';
import { HeroSection } from './components/sections/HeroSection';
import { ServicesSections } from './components/sections/ServicesSections';
import { TrustAndProcessSections } from './components/sections/TrustAndProcessSections';
import { CtaSection } from './components/ui/CtaSection';
import {
  cleanRawPathname,
  resolveRouteBundle,
  type ResolvedRouteBundle,
} from './routeLoader';
import { applyHomeSeo, applyNotFoundSeo } from './utils/routeSeo';

interface AppProps {
  initialRoute: ResolvedRouteBundle;
}

export default function App({ initialRoute }: AppProps) {
  const [routeState, setRouteState] = useState<ResolvedRouteBundle>(initialRoute);
  const currentPath = routeState.path;
  const navigationSeqRef = useRef(0);
  const pendingHashRef = useRef<string | null>(null);

  const flushPendingHashScroll = useCallback(() => {
    const hashId = pendingHashRef.current;
    if (!hashId) {
      return;
    }
    pendingHashRef.current = null;
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document.getElementById(hashId)?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }, []);

  const commitRouteNavigation = useCallback(
    async (rawPathname: string, hashId: string | null) => {
      const seq = ++navigationSeqRef.current;
      pendingHashRef.current = hashId;
      const nextBundle = await resolveRouteBundle(rawPathname);
      if (seq !== navigationSeqRef.current) {
        return;
      }
      setRouteState(nextBundle);
      if (!hashId) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    },
    []
  );

  useEffect(() => {
    const handlePopState = () => {
      const hashId = window.location.hash
        ? window.location.hash.replace(/^#/, '')
        : null;
      void commitRouteNavigation(window.location.pathname, hashId);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [commitRouteNavigation]);

  useEffect(() => {
    if (routeState.kind === 'home') {
      applyHomeSeo();
      const activeHash =
        pendingHashRef.current || window.location.hash.replace(/^#/, '');
      if (activeHash) {
        pendingHashRef.current = activeHash;
        flushPendingHashScroll();
      }
    } else if (routeState.kind === 'not-found') {
      applyNotFoundSeo(routeState.path);
    } else if (pendingHashRef.current) {
      flushPendingHashScroll();
    }
  }, [routeState, flushPendingHashScroll]);

  const navigateToPath = useCallback(
    (rawPath: string) => {
      const withLeadingSlash = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
      const [pathOnly, hashPart] = withLeadingSlash.split('#');
      const normalizedNext = cleanRawPathname(pathOnly || '/');
      const cleanTarget = `${normalizedNext}${hashPart ? `#${hashPart}` : ''}`;

      if (window.location.pathname + window.location.hash !== cleanTarget) {
        window.history.pushState({}, '', cleanTarget);
      }

      if (normalizedNext === currentPath) {
        if (hashPart) {
          document.getElementById(hashPart)?.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }

      void commitRouteNavigation(normalizedNext, hashPart || null);
    },
    [currentPath, commitRouteNavigation]
  );

  const navigateToService = useCallback(
    (slug: string) => {
      if (slug === 'website-development') {
        navigateToPath('/services/website-development/');
        return;
      }
      if (slug === 'ecommerce-development') {
        navigateToPath('/services/ecommerce-development/');
        return;
      }
      if (slug === 'ai-business-automation') {
        navigateToPath('/services/ai-business-automation/');
        return;
      }
      if (slug === 'website-care-support') {
        navigateToPath('/services/website-care-support/');
        return;
      }
      if (slug === 'ai-search-optimisation') {
        navigateToPath('/services/ai-search-optimisation/');
        return;
      }
      if (
        slug === 'search-engine-optimisation' ||
        slug === 'custom-web-solutions-integrations' ||
        slug === 'ai-powered-website-development' ||
        slug === 'branding-brand-identity' ||
        slug === 'digital-marketing-online-growth'
      ) {
        navigateToPath(`/services/${slug}/`);
        return;
      }
      navigateToPath('/services/');
    },
    [navigateToPath]
  );

  const navigateHome = useCallback(
    (hash?: string) => {
      const targetUrl = hash ? `/${hash}` : '/';
      if (window.location.pathname !== '/') {
        window.history.pushState({}, '', targetUrl);
        void commitRouteNavigation('/', hash ? hash.replace('#', '') : null);
        return;
      }

      if (hash) {
        const id = hash.replace('#', '');
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [commitRouteNavigation]
  );

  const renderMainContent = () => {
    switch (routeState.kind) {
      case 'contact': {
        const ContactView = routeState.Component;
        return (
          <div key="contact-page" className="wpc-route-enter">
            <ContactView
              onNavigateHome={navigateHome}
              onNavigatePath={navigateToPath}
            />
          </div>
        );
      }
      case 'services-hub': {
        const ServicesView = routeState.Component;
        return (
          <div key="services-hub-page" className="wpc-route-enter">
            <ServicesView
              onNavigateHome={navigateHome}
              onNavigatePath={navigateToPath}
            />
          </div>
        );
      }
      case 'about': {
        const AboutView = routeState.Component;
        return (
          <div key="about-page" className="wpc-route-enter">
            <AboutView
              onNavigateHome={navigateHome}
              onNavigatePath={navigateToPath}
            />
          </div>
        );
      }
      case 'site-map': {
        const SiteMapView = routeState.Component;
        return (
          <div key="site-map-page" className="wpc-route-enter">
            <SiteMapView
              onNavigateHome={navigateHome}
              onNavigatePath={navigateToPath}
            />
          </div>
        );
      }
      case 'dedicated-service': {
        const ServiceView = routeState.Component;
        return (
          <div key={`dedicated-${routeState.page.id}`} className="wpc-route-enter">
            <ServiceView
              page={routeState.page}
              onNavigateHome={navigateHome}
              onNavigatePath={navigateToPath}
            />
          </div>
        );
      }
      case 'not-found': {
        const NotFoundView = routeState.Component;
        return (
          <div key="not-found-page" className="wpc-route-enter">
            <NotFoundView
              requestedPath={routeState.path}
              onNavigateHome={navigateHome}
              onNavigatePath={navigateToPath}
            />
          </div>
        );
      }
      case 'home':
      default:
        return (
          <div key="wpcarepoint-homepage">
            {/* Section 2: Hero Section */}
            <HeroSection onJumpToSection={navigateHome} />

            {/* Sections 3-5: Interactive Core Services, Website Care + Quick Fix, Speed & SEO/AI Spotlight */}
            <ServicesSections
              onExploreService={navigateToService}
              onNavigatePath={navigateToPath}
              onJumpToSection={navigateHome}
            />

            {/* Sections 6-9: Why Choose Us, Working Process, Portfolio & Proof Standards, FAQ */}
            <TrustAndProcessSections />

            {/* Section 10: Contact CTA */}
            <CtaSection />
          </div>
        );
    }
  };

  return (
    <div id="top" className="min-h-screen flex flex-col bg-white text-[#2e2e2e]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-[#00749c] focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <ScrollProgressBar />

      {/* Section 1: Header & Navigation */}
      <SiteHeader
        currentPath={currentPath}
        onNavigateHome={navigateHome}
        onNavigateService={navigateToService}
        onNavigatePath={navigateToPath}
        hasLocalContact={true}
      />

      <main id="main-content" className="flex-1">
        {renderMainContent()}
      </main>

      {/* Professional Footer */}
      <SiteFooter
        onNavigateHome={navigateHome}
        onNavigatePath={navigateToPath}
      />
    </div>
  );
}
