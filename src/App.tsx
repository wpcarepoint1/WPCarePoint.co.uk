/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { SiteFooter } from './components/layout/SiteFooter';
import { SiteHeader } from './components/layout/SiteHeader';
import { EASE_OUT_EXPO, ScrollProgressBar } from './components/MotionPrimitives';
import { HeroSection } from './components/sections/HeroSection';
import { ServicesSections } from './components/sections/ServicesSections';
import { TrustAndProcessSections } from './components/sections/TrustAndProcessSections';
import { AboutPageView } from './components/about/AboutPageView';
import { ContactPageView } from './components/contact/ContactPageView';
import { DedicatedServicePage } from './components/service-detail/DedicatedServicePage';
import { ServicesHubView } from './components/services-hub/ServicesHubView';
import { SiteMapPageView } from './components/site-map/SiteMapPageView';
import { CtaSection } from './components/ui/CtaSection';
import { NotFoundPageView } from './components/ui/NotFoundPageView';
import { DEDICATED_SERVICE_PAGES_BY_PATH } from './data/dedicatedServicePagesData';
import { applyHomeSeo, applyNotFoundSeo } from './utils/routeSeo';

function normalizePathname(pathname: string): string {
  const cleaned = pathname.trim().toLowerCase();
  return cleaned === '' ? '/' : cleaned;
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() =>
    normalizePathname(window.location.pathname)
  );

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

  useEffect(() => {
    const handlePopState = () => {
      pendingHashRef.current = window.location.hash
        ? window.location.hash.replace(/^#/, '')
        : null;
      setCurrentPath(normalizePathname(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const isContactPage =
    currentPath === '/contact' || currentPath === '/contact/';
  const isServicesHub =
    currentPath === '/services' || currentPath === '/services/';
  const isAboutPage =
    currentPath === '/about' || currentPath === '/about/';
  const isSiteMapPage =
    currentPath === '/site-map' || currentPath === '/site-map/';

  const activeDedicatedPage = useMemo(
    () => DEDICATED_SERVICE_PAGES_BY_PATH[currentPath],
    [currentPath]
  );

  const isHomeRoute = currentPath === '/' || currentPath === '';
  const isNotFoundRoute =
    !isHomeRoute &&
    !isContactPage &&
    !isServicesHub &&
    !isAboutPage &&
    !isSiteMapPage &&
    !activeDedicatedPage;

  useEffect(() => {
    if (isHomeRoute) {
      applyHomeSeo();
      const activeHash = window.location.hash.replace(/^#/, '');
      if (activeHash) {
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            document.getElementById(activeHash)?.scrollIntoView({ behavior: 'smooth' });
          });
        });
      }
    } else if (isNotFoundRoute) {
      applyNotFoundSeo(currentPath);
    }
  }, [isHomeRoute, isNotFoundRoute, currentPath]);

  const navigateToPath = useCallback(
    (rawPath: string) => {
      const withLeadingSlash = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
      const [pathOnly, hashPart] = withLeadingSlash.split('#');
      const normalizedNext = normalizePathname(pathOnly || '/');
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

      pendingHashRef.current = hashPart || null;
      setCurrentPath(normalizedNext);
      if (!hashPart) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    },
    [currentPath]
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

  const navigateHome = useCallback((hash?: string) => {
    const targetUrl = hash ? `/${hash}` : '/';
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', targetUrl);
      pendingHashRef.current = hash ? hash.replace('#', '') : null;
      setCurrentPath('/');
      if (!hash) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
      return;
    }

    if (hash) {
      const id = hash.replace('#', '');
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <MotionConfig reducedMotion="user">
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
          <AnimatePresence mode="wait" onExitComplete={flushPendingHashScroll}>
            {isContactPage ? (
              <motion.div
                key="contact-page"
                initial={{ opacity: 0.94, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0.94, y: -4 }}
                transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
              >
                <ContactPageView
                  onNavigateHome={navigateHome}
                  onNavigatePath={navigateToPath}
                />
              </motion.div>
            ) : isServicesHub ? (
              <motion.div
                key="services-hub-page"
                initial={{ opacity: 0.94, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0.94, y: -4 }}
                transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
              >
                <ServicesHubView
                  onNavigateHome={navigateHome}
                  onNavigatePath={navigateToPath}
                />
              </motion.div>
            ) : isAboutPage ? (
              <motion.div
                key="about-page"
                initial={{ opacity: 0.94, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0.94, y: -4 }}
                transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
              >
                <AboutPageView
                  onNavigateHome={navigateHome}
                  onNavigatePath={navigateToPath}
                />
              </motion.div>
            ) : isSiteMapPage ? (
              <motion.div
                key="site-map-page"
                initial={{ opacity: 0.94, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0.94, y: -4 }}
                transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
              >
                <SiteMapPageView
                  onNavigateHome={navigateHome}
                  onNavigatePath={navigateToPath}
                />
              </motion.div>
            ) : activeDedicatedPage ? (
              <motion.div
                key={`dedicated-${activeDedicatedPage.id}`}
                initial={{ opacity: 0.94, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0.94, y: -4 }}
                transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
              >
                <DedicatedServicePage
                  page={activeDedicatedPage}
                  onNavigateHome={navigateHome}
                  onNavigatePath={navigateToPath}
                />
              </motion.div>
            ) : isNotFoundRoute ? (
              <motion.div
                key="not-found-page"
                initial={{ opacity: 0.94, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0.94, y: -4 }}
                transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
              >
                <NotFoundPageView
                  requestedPath={currentPath}
                  onNavigateHome={navigateHome}
                  onNavigatePath={navigateToPath}
                />
              </motion.div>
            ) : (
              <motion.div
                key="wpcarepoint-homepage"
                initial={{ opacity: 0.96 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.96 }}
                transition={{ duration: 0.18 }}
              >
                {/* Section 2: Hero Section */}
                <HeroSection onJumpToSection={navigateHome} />

                {/* Sections 3-8: Services Overview, Web Dev, eCommerce, AI Automation, Website Care + Quick Fix, SEO & AI Search */}
                <ServicesSections
                  onExploreService={navigateToService}
                  onNavigatePath={navigateToPath}
                  onJumpToSection={navigateHome}
                />

                {/* Sections 9-13: Why Choose Us, Process, Portfolio Preview, Testimonials Placeholder, FAQ */}
                <TrustAndProcessSections />

                {/* Section 14: Contact CTA */}
                <CtaSection />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Section 15: Professional Footer */}
        <SiteFooter
          onNavigateHome={navigateHome}
          onNavigatePath={navigateToPath}
        />
      </div>
    </MotionConfig>
  );
}
