/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { SiteFooter } from './components/layout/SiteFooter';
import { SiteHeader } from './components/layout/SiteHeader';
import { EASE_OUT_EXPO, ScrollProgressBar } from './components/MotionPrimitives';
import { HeroSection } from './components/sections/HeroSection';
import { ServicesSections } from './components/sections/ServicesSections';
import { TrustAndProcessSections } from './components/sections/TrustAndProcessSections';
import { ServiceLandingPage } from './components/ServiceLandingPage';
import { CtaSection } from './components/ui/CtaSection';
import { getServiceBySlug } from './data/servicePagesData';
import { TRANSLATIONS } from './data/translations';

function getSlugFromPath(pathname: string): string | null {
  const match = pathname.match(/^\/services\/([a-z0-9-]+)\/?$/i);
  return match ? match[1].toLowerCase() : null;
}

export default function App() {
  const [activeServiceSlug, setActiveServiceSlug] = useState<string | null>(() =>
    getSlugFromPath(window.location.pathname)
  );

  useEffect(() => {
    const handlePopState = () => {
      setActiveServiceSlug(getSlugFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const activeService = useMemo(() => {
    if (!activeServiceSlug) return undefined;
    return getServiceBySlug(activeServiceSlug);
  }, [activeServiceSlug]);

  const navigateToService = useCallback((slug: string) => {
    const targetPath = `/services/${slug}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    setActiveServiceSlug(slug);
  }, []);

  const navigateHome = useCallback((hash?: string) => {
    const targetUrl = hash ? `/${hash}` : '/';
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', targetUrl);
      setActiveServiceSlug(null);
      if (hash) {
        const id = hash.replace('#', '');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
        />

        <main id="main-content" className="flex-1">
          <AnimatePresence mode="wait">
            {activeService ? (
              <motion.div
                key={`service-${activeService.slug}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: EASE_OUT_EXPO }}
              >
                <ServiceLandingPage
                  service={activeService}
                  onNavigateHome={navigateHome}
                  onNavigateService={navigateToService}
                  t={TRANSLATIONS.en}
                />
              </motion.div>
            ) : (
              <motion.div
                key="wpcarepoint-homepage"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* Section 2: Hero Section */}
                <HeroSection onJumpToSection={navigateHome} />

                {/* Sections 3-8: Services Overview, Web Dev, eCommerce, AI Automation, Website Care + Quick Fix, SEO & AI Search */}
                <ServicesSections
                  onExploreService={navigateToService}
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
        <SiteFooter onNavigateHome={navigateHome} />
      </div>
    </MotionConfig>
  );
}
