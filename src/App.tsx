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
import { ServiceLandingPage } from './components/ServiceLandingPage';
import { CtaSection } from './components/ui/CtaSection';
import { DEDICATED_SERVICE_PAGES_BY_PATH } from './data/dedicatedServicePagesData';
import { getServiceBySlug } from './data/servicePagesData';
import { TRANSLATIONS } from './data/translations';

function normalizePathname(pathname: string): string {
  const cleaned = pathname.trim().toLowerCase();
  return cleaned === '' ? '/' : cleaned;
}

function getSlugFromPath(pathname: string): string | null {
  const match = pathname.match(/^\/services\/([a-z0-9-]+)\/?$/i);
  return match ? match[1].toLowerCase() : null;
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

  const activeDedicatedPage = useMemo(
    () => DEDICATED_SERVICE_PAGES_BY_PATH[currentPath],
    [currentPath]
  );

  const activeFallbackService = useMemo(() => {
    if (isContactPage || isServicesHub || isAboutPage || activeDedicatedPage) {
      return undefined;
    }
    const slug = getSlugFromPath(currentPath);
    return slug ? getServiceBySlug(slug) : undefined;
  }, [isContactPage, isServicesHub, isAboutPage, activeDedicatedPage, currentPath]);

  const navigateToPath = useCallback((rawPath: string) => {
    const withLeadingSlash = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
    const [pathOnly, hashPart] = withLeadingSlash.split('#');
    const normalizedNext = normalizePathname(pathOnly || '/');
    const cleanTarget = `${pathOnly || '/'}${hashPart ? `#${hashPart}` : ''}`;

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
  }, [currentPath]);

  const navigateToService = useCallback(
    (slug: string) => {
      if (slug === 'website-development') {
        navigateToPath('/services/website-development/');
        return;
      }
      if (
        slug === 'ecommerce-website-development' ||
        slug === 'ecommerce-development'
      ) {
        navigateToPath('/services/ecommerce-development/');
        return;
      }
      if (
        slug === 'ai-automation-business-process-automation' ||
        slug === 'ai-business-automation'
      ) {
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
      if (slug === 'search-engine-optimisation') {
        navigateToPath('/services/search-engine-optimisation/');
        return;
      }
      if (
        slug === 'custom-web-solutions-integrations' ||
        slug === 'ai-powered-website-development' ||
        slug === 'branding-brand-identity' ||
        slug === 'digital-marketing-online-growth'
      ) {
        navigateToPath(`/services/${slug}/`);
        return;
      }
      navigateToPath(`/services/${slug}`);
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
          onNavigateHome={navigateHome}
          onNavigateService={navigateToService}
          onNavigatePath={navigateToPath}
          hasLocalContact={Boolean(
            activeDedicatedPage ||
              isContactPage ||
              isServicesHub ||
              isAboutPage ||
              currentPath === '/'
          )}
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
            ) : activeFallbackService ? (
              <motion.div
                key={`service-${activeFallbackService.slug}`}
                initial={{ opacity: 0.94, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0.94, y: -4 }}
                transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
              >
                <ServiceLandingPage
                  service={activeFallbackService}
                  onNavigateHome={navigateHome}
                  onNavigateService={navigateToService}
                  t={TRANSLATIONS.en}
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
