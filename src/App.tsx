/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Code2, TrendingUp } from 'lucide-react';
import { SiteHeader } from './components/SiteHeader';
import { CarePlansSection } from './components/CarePlansSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ContactSection } from './components/ContactSection';
import { GuideReaderModal } from './components/GuideReaderModal';
import { UkFaqSection } from './components/UkFaqSection';
import { ServiceLandingPage } from './components/ServiceLandingPage';
import { TechStackAndSectorsSection } from './components/TechStackAndSectorsSection';
import { useTheme } from './hooks/useTheme';
import { useLanguage } from './hooks/useLanguage';
import { useServiceViews } from './hooks/useServiceViews';
import { TRANSLATIONS } from './data/translations';
import {
  EASE_OUT_EXPO,
  FadeInUpOnScroll,
  Reveal,
  ScrollProgressBar,
  StaggerGrid,
  StaggerItem,
} from './components/MotionPrimitives';
import {
  HERO_STUDIO_IMAGE,
  SERVICE_ENGINEERING_IMAGE,
  SERVICE_PILLARS,
  UK_OFFICE_ADDRESS,
  UK_REGIONS_SERVED,
  WORDPRESS_GUIDES,
  WORK_PROCESS,
  type ServiceCategory,
  type WordPressGuide,
} from './data/agencyData';
import {
  getServiceBySlug,
  SERVICE_LANDING_PAGES,
} from './data/servicePagesData';

function StudioPhoto({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`w-full h-full min-h-[260px] bg-[var(--bg-muted)] flex flex-col items-center justify-center p-6 text-[var(--text-muted)] ${className}`}
      >
        <Code2 className="h-8 w-8 mb-2" aria-hidden="true" />
        <p className="text-xs font-medium text-center">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={`w-full h-full object-cover ${className}`}
    />
  );
}

function getSlugFromPath(pathname: string): string | null {
  const match = pathname.match(/^\/services\/([a-z0-9-]+)\/?$/i);
  return match ? match[1].toLowerCase() : null;
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale } = useLanguage();
  const t = TRANSLATIONS[locale];
  const { topViewedServices, recordServiceView } = useServiceViews();

  const [activeServiceSlug, setActiveServiceSlug] = useState<string | null>(() =>
    getSlugFromPath(window.location.pathname)
  );
  const [serviceFilter, setServiceFilter] = useState<ServiceCategory>('all');
  const [selectedPlan, setSelectedPlan] = useState('Website Development');
  const [activeGuide, setActiveGuide] = useState<WordPressGuide | null>(null);
  const lastRecordedSlugRef = useRef<string | null>(null);

  useEffect(() => {
    if (activeServiceSlug && lastRecordedSlugRef.current !== activeServiceSlug) {
      lastRecordedSlugRef.current = activeServiceSlug;
      recordServiceView(activeServiceSlug);
    } else if (!activeServiceSlug) {
      lastRecordedSlugRef.current = null;
    }
  }, [activeServiceSlug, recordServiceView]);

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

  const filteredPillars = useMemo(() => {
    if (serviceFilter === 'all') return SERVICE_PILLARS;
    return SERVICE_PILLARS.filter((p) => p.category === serviceFilter);
  }, [serviceFilter]);

  const scrollToContact = (planLabel?: string) => {
    if (planLabel) {
      setSelectedPlan(planLabel);
    }
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <MotionConfig reducedMotion="user">
      <div
        id="top"
        className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] transition-colors duration-200"
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-[var(--btn-primary-bg)] focus:text-[var(--btn-primary-text)] focus:rounded-lg focus:text-sm focus:font-medium"
        >
          {t.skipToMain}
        </a>
        <ScrollProgressBar />
        <SiteHeader
          onNavigateHome={navigateHome}
          onNavigateService={navigateToService}
          onConsultClick={(topic) => scrollToContact(topic)}
          topService={topViewedServices[0]?.service}
          theme={theme}
          onToggleTheme={toggleTheme}
          locale={locale}
          onChangeLocale={setLocale}
          t={t}
        />

        <main id="main-content">
          <AnimatePresence mode="wait">
            {activeService ? (
              <motion.div
                key={`service-${activeService.slug}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
              >
                <ServiceLandingPage
                  service={activeService}
                  onNavigateHome={navigateHome}
                  onNavigateService={navigateToService}
                  t={t}
                />
              </motion.div>
            ) : (
              <motion.div
                key="home-showcase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* Hero Section: Architectural Proposition + Studio Anchor */}
                <section className="bg-[var(--bg-surface)] bg-architectural-grid border-b border-[var(--border-subtle)] transition-colors duration-200">
                  <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
                      <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.48, ease: EASE_OUT_EXPO }}
                        className="lg:col-span-6 flex flex-col justify-center"
                      >
                        <p className="text-xs font-medium text-[var(--text-accent)]">
                          {t.hero.eyebrow}
                        </p>
                        <h1
                          className="font-bold tracking-tight text-[var(--text-heading)] mt-3 text-balance"
                          style={{
                            fontSize: 'clamp(2.35rem, 4.1vw, 3.75rem)',
                            lineHeight: 1.06,
                          }}
                        >
                          {t.hero.headline}
                        </h1>
                        <p className="text-base sm:text-lg text-[var(--text-body)] mt-5 leading-relaxed max-w-xl">
                          {t.hero.lead}
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-5">
                          <button
                            type="button"
                            onClick={() => scrollToContact('Website Development')}
                            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-[var(--btn-primary-text)] bg-[var(--btn-primary-bg)] rounded-xl hover:bg-[var(--btn-primary-hover-bg)] active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer group"
                          >
                            <span>{t.hero.primaryCta}</span>
                            <ArrowRight
                              className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                              aria-hidden="true"
                            />
                          </button>

                          <a
                            href="#services"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-body)] hover:text-[var(--text-heading)] hover:underline underline-offset-4 whitespace-nowrap shrink-0"
                          >
                            {t.hero.secondaryCta}
                          </a>
                        </div>

                        <div className="mt-10 pt-6 border-t border-[var(--border-subtle)]">
                          <p className="text-xs font-semibold text-[var(--text-muted)] mb-3">
                            {t.hero.quickLinksHeading}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {t.hero.quickLinks.map((item) => (
                              <a
                                key={item.slug}
                                href={`/services/${item.slug}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigateToService(item.slug);
                                }}
                                className="group flex items-center justify-between gap-2 px-3.5 py-2.5 text-[13px] font-medium text-[var(--text-body)] bg-[var(--bg-surface-alt)] hover:bg-[var(--btn-primary-bg)] hover:text-[var(--btn-primary-text)] border border-[var(--border-subtle)] rounded-lg transition-colors duration-150"
                              >
                                <span className="truncate">{item.label}</span>
                                <ArrowUpRight
                                  className="h-3.5 w-3.5 shrink-0 opacity-60 group-hover:opacity-100 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                  aria-hidden="true"
                                />
                              </a>
                            ))}
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.55,
                          delay: 0.08,
                          ease: EASE_OUT_EXPO,
                        }}
                        className="lg:col-span-6"
                      >
                        <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[340px] rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-muted)]">
                          <StudioPhoto
                            src={HERO_STUDIO_IMAGE}
                            alt={t.hero.studioAlt}
                          />
                          <div
                            aria-hidden="true"
                            className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent"
                          />
                          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex items-end justify-between gap-4 text-white">
                            <p className="text-xs sm:text-sm font-medium text-slate-100">
                              {t.hero.studioCaption}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* 4-Column Proof Strip */}
                    <StaggerGrid
                      delay={0.12}
                      className="mt-14 pt-10 border-t border-[var(--border-subtle)] grid grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                      {t.hero.metrics.map((metric) => (
                        <StaggerItem key={metric.label}>
                          <dt className="text-xs font-medium text-[var(--text-muted)]">
                            {metric.label}
                          </dt>
                          <dd className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-[var(--text-heading)] mt-1">
                            {metric.value}
                          </dd>
                        </StaggerItem>
                      ))}
                    </StaggerGrid>
                  </div>
                </section>

                {/* Capabilities & Services: Interactive Filter + Asymmetric Bento Grid */}
                <section
                  id="services"
                  className="py-24 bg-[var(--bg-surface-alt)] transition-colors duration-200"
                >
                  <div className="max-w-7xl mx-auto px-6">
                    <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
                      <div className="max-w-2xl">
                        <p className="text-xs font-medium text-[var(--text-accent)]">
                          {t.servicesSection.eyebrow}
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-heading)] mt-2 text-balance">
                          {t.servicesSection.headline}
                        </h2>
                      </div>

                      <div
                        role="group"
                        aria-label={t.servicesSection.filterAriaLabel}
                        className="inline-flex flex-wrap items-center gap-1 p-1 bg-[var(--bg-muted)] border border-[var(--border-subtle)] rounded-xl self-start lg:self-auto"
                      >
                        {(
                          [
                            ['all', t.servicesSection.filters.all],
                            ['web', t.servicesSection.filters.web],
                            ['visibility', t.servicesSection.filters.visibility],
                            ['automation', t.servicesSection.filters.automation],
                            ['brand', t.servicesSection.filters.brand],
                          ] as const
                        ).map(([key, label]) => {
                          const active = serviceFilter === key;
                          return (
                            <button
                              key={key}
                              type="button"
                              onClick={() => setServiceFilter(key)}
                              className={`relative px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                                active
                                  ? 'text-[var(--text-heading)]'
                                  : 'text-[var(--text-body)] hover:text-[var(--text-heading)]'
                              }`}
                            >
                              {active && (
                                <motion.span
                                  layoutId="serviceFilterPill"
                                  transition={{
                                    type: 'spring',
                                    stiffness: 420,
                                    damping: 32,
                                  }}
                                  className="absolute inset-0 bg-[var(--bg-card)] rounded-lg shadow-xs"
                                />
                              )}
                              <span className="relative z-10">{label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </Reveal>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                      {filteredPillars.map((pillar, idx) => {
                        const spanClass =
                          serviceFilter === 'all'
                            ? pillar.featured
                              ? 'lg:col-span-6'
                              : 'lg:col-span-4'
                            : 'lg:col-span-8';
                        const localizedPillar =
                          t.servicesSection.pillarCopy[pillar.id];

                        return (
                          <FadeInUpOnScroll
                            key={pillar.id}
                            delay={idx * 0.08}
                            distance={24}
                            className={`${spanClass} flex`}
                          >
                            <article className="w-full border border-[var(--border-subtle)] bg-[var(--bg-card)] rounded-2xl p-7 flex flex-col justify-between hover:border-[var(--border-strong)] transition-colors">
                              <div>
                                <div className="flex items-center justify-between gap-4">
                                  <span className="text-sm font-mono font-semibold text-[var(--text-accent)] tabular-nums">
                                    {pillar.index}
                                  </span>
                                  <span className="text-xs text-[var(--text-muted)] font-mono tabular-nums">
                                    {pillar.items.length}{' '}
                                    {pillar.items.length === 1
                                      ? t.servicesSection.serviceSingular
                                      : t.servicesSection.servicePlural}
                                  </span>
                                </div>

                                <h3 className="text-xl font-bold text-[var(--text-heading)] mt-2">
                                  {localizedPillar?.title || pillar.title}
                                </h3>
                                <p className="text-sm text-[var(--text-body)] mt-2 leading-relaxed">
                                  {localizedPillar?.summary || pillar.summary}
                                </p>

                                <ul className="mt-6 divide-y divide-[var(--border-divider)] border-t border-[var(--border-divider)]">
                                  {pillar.items.map((item) => {
                                    const landing = SERVICE_LANDING_PAGES.find(
                                      (p) => p.id === item.id
                                    );
                                    const localizedItem =
                                      t.servicesSection.itemCopy[item.id];
                                    return (
                                      <li
                                        key={item.id}
                                        className="py-3.5 -mx-3 px-3 rounded-xl hover:bg-[var(--bg-hover)] transition-colors flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 group"
                                      >
                                        <div className="min-w-0">
                                          {landing ? (
                                            <a
                                              href={`/services/${landing.slug}`}
                                              onClick={(e) => {
                                                e.preventDefault();
                                                navigateToService(landing.slug);
                                              }}
                                              className="text-sm font-semibold text-[var(--text-heading)] group-hover:text-[var(--text-accent)] transition-colors"
                                            >
                                              {localizedItem?.name || item.name}
                                            </a>
                                          ) : (
                                            <h4 className="text-sm font-semibold text-[var(--text-heading)]">
                                              {localizedItem?.name || item.name}
                                            </h4>
                                          )}
                                          <p className="text-sm text-[var(--text-body)] mt-1 leading-relaxed">
                                            {localizedItem?.outcome ||
                                              item.outcome}
                                          </p>
                                        </div>

                                        {landing && (
                                          <a
                                            href={`/services/${landing.slug}`}
                                            onClick={(e) => {
                                              e.preventDefault();
                                              navigateToService(landing.slug);
                                            }}
                                            className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-accent)] hover:text-[var(--text-accent-hover)] whitespace-nowrap shrink-0 self-start sm:mt-0.5"
                                          >
                                            <span className="font-mono text-[var(--text-muted)] tabular-nums">
                                              {landing.startingPriceGbp} · {landing.typicalTimeline}
                                            </span>
                                            <span aria-hidden="true">·</span>
                                            <span>
                                              {t.servicesSection.viewLabel}
                                            </span>
                                            <ArrowRight
                                              className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
                                              aria-hidden="true"
                                            />
                                          </a>
                                        )}
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            </article>
                          </FadeInUpOnScroll>
                        );
                      })}

                      <FadeInUpOnScroll
                        delay={filteredPillars.length * 0.08}
                        distance={24}
                        className="lg:col-span-4 flex"
                      >
                        <aside className="w-full border border-[var(--border-subtle)] bg-[var(--bg-card)] rounded-2xl overflow-hidden flex flex-col group hover:border-[var(--border-strong)] transition-colors">
                          <div className="aspect-[4/3] bg-[var(--bg-muted)] overflow-hidden">
                            <StudioPhoto
                              src={SERVICE_ENGINEERING_IMAGE}
                              alt="Senior UK engineer auditing website performance, SEO schema, and AI workflows"
                              className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                            />
                          </div>
                          <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                            <div>
                              <h3 className="text-base font-bold text-[var(--text-heading)]">
                                {t.servicesSection.advisoryTitle}
                              </h3>
                              <p className="text-sm text-[var(--text-body)] mt-2 leading-relaxed">
                                {t.servicesSection.advisoryBody}
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() =>
                                scrollToContact(
                                  'Custom Web Solutions and Integrations'
                                )
                              }
                              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-heading)] hover:text-[var(--text-accent)] self-start cursor-pointer group/btn"
                            >
                              <span>{t.servicesSection.advisoryCta}</span>
                              <ArrowRight
                                className="h-4 w-4 transition-transform duration-150 group-hover/btn:translate-x-0.5"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </aside>
                      </FadeInUpOnScroll>
                    </div>
                  </div>
                </section>

                {/* Engineering Stack, UK Sectors & Security Governance */}
                <TechStackAndSectorsSection
                  onConsultClick={(topic) => scrollToContact(topic)}
                  t={t}
                />

                {/* WordPress Care Plans */}
                <CarePlansSection
                  selectedPlanId={selectedPlan}
                  onSelectPlan={(planLabel) => scrollToContact(planLabel)}
                  t={t}
                />

                {/* Case Studies */}
                <CaseStudiesSection t={t} />

                {/* Engineering Process: High-Contrast Obsidian Band */}
                <section
                  id="process"
                  className="py-24 border-t border-slate-800 bg-[var(--bg-obsidian)] bg-obsidian-grid text-white"
                >
                  <div className="max-w-7xl mx-auto px-6">
                    <FadeInUpOnScroll distance={20} className="max-w-2xl mb-14">
                      <p className="text-xs font-medium text-sky-400">
                        {t.processSection.eyebrow}
                      </p>
                      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2 text-balance">
                        {t.processSection.headline}
                      </h2>
                    </FadeInUpOnScroll>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                      {WORK_PROCESS.map((item, idx) => {
                        const localizedStep = t.processSection.steps[idx];
                        return (
                          <FadeInUpOnScroll
                            key={item.step}
                            delay={idx * 0.08}
                            distance={24}
                            className="flex"
                          >
                            <div className="w-full h-full rounded-2xl border border-slate-800 bg-[var(--bg-obsidian-card)] p-6 sm:p-7 hover:border-slate-700 transition-colors">
                              <p className="text-sm font-mono font-semibold text-sky-400 tabular-nums">
                                {item.step}
                              </p>
                              <h3 className="text-lg font-bold text-white mt-2.5">
                                {localizedStep?.title || item.title}
                              </h3>
                              <p className="text-sm text-slate-300 mt-2.5 leading-relaxed">
                                {localizedStep?.detail || item.detail}
                              </p>
                            </div>
                          </FadeInUpOnScroll>
                        );
                      })}
                    </div>
                  </div>
                </section>

                {/* Technical Guides */}
                <section
                  id="guides"
                  className="py-24 border-t border-[var(--border-subtle)] bg-[var(--bg-surface-alt)] transition-colors duration-200"
                >
                  <div className="max-w-7xl mx-auto px-6">
                    <FadeInUpOnScroll distance={20} className="max-w-2xl mb-12">
                      <p className="text-xs font-medium text-[var(--text-accent)]">
                        {t.guidesSection.eyebrow}
                      </p>
                      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-heading)] mt-2 text-balance">
                        {t.guidesSection.headline}
                      </h2>
                    </FadeInUpOnScroll>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                      {WORDPRESS_GUIDES.map((guide, idx) => {
                        const localizedGuide =
                          t.guidesSection.guideCopy[guide.id];
                        return (
                          <FadeInUpOnScroll
                            key={guide.id}
                            delay={idx * 0.08}
                            distance={24}
                            className="flex"
                          >
                            <article className="w-full border border-[var(--border-subtle)] bg-[var(--bg-card)] rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-[var(--border-strong)] group">
                              <div>
                                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                                  <span>
                                    {localizedGuide?.topic || guide.topic}
                                  </span>
                                  <span aria-hidden="true">·</span>
                                  <span>
                                    {localizedGuide?.publishedAt ||
                                      guide.publishedAt}
                                  </span>
                                  <span aria-hidden="true">·</span>
                                  <span>
                                    {localizedGuide?.readTime || guide.readTime}
                                  </span>
                                </div>
                                <h3 className="text-lg font-bold text-[var(--text-heading)] mt-3 leading-snug group-hover:text-[var(--text-accent)] transition-colors">
                                  {localizedGuide?.title || guide.title}
                                </h3>
                                <p className="text-sm text-[var(--text-body)] mt-2.5 leading-relaxed">
                                  {localizedGuide?.excerpt || guide.excerpt}
                                </p>
                              </div>

                              <button
                                type="button"
                                onClick={() => setActiveGuide(guide)}
                                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-heading)] hover:text-[var(--text-accent)] transition-colors self-start cursor-pointer"
                              >
                                <span>{t.guidesSection.readGuide}</span>
                                <ArrowRight
                                  className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                                  aria-hidden="true"
                                />
                              </button>
                            </article>
                          </FadeInUpOnScroll>
                        );
                      })}
                    </div>
                  </div>
                </section>

                {/* UK FAQ */}
                <UkFaqSection t={t} />

                {/* Lead Capture / Consultation */}
                <ContactSection preselectedPlan={selectedPlan} t={t} />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Quiet Footer with Dynamic Top-3 Quick Links & 10 Dedicated Service Pages */}
        <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] py-14 transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-6 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[var(--border-subtle)]">
              <div className="md:col-span-4 space-y-2">
                <p className="text-base font-bold text-[var(--text-heading)]">
                  WPCarePoint{' '}
                  <span className="text-xs font-mono font-normal text-[var(--text-muted)]">
                    · {t.brandTaglineBadge}
                  </span>
                </p>
                <p className="text-xs text-[var(--text-body)] leading-relaxed">
                  {t.footer.tagline} ·{' '}
                  <span className="font-mono">wpcarepoint.co.uk</span>
                </p>
                <p className="text-xs text-[var(--text-body)] leading-relaxed">
                  {UK_OFFICE_ADDRESS}
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  {t.footer.servingPrefix} {UK_REGIONS_SERVED.join(' · ')}
                </p>
                <p className="text-xs pt-1">
                  <a
                    href="mailto:wpcarepoint@gmail.com"
                    className="text-[var(--text-accent)] hover:underline font-medium"
                  >
                    wpcarepoint@gmail.com
                  </a>
                </p>
              </div>

              {/* Dynamic Quick Links: Top 3 Most Viewed Service Landing Pages */}
              <div className="md:col-span-4">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <TrendingUp
                    className="h-3.5 w-3.5 text-[var(--text-accent)] shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-xs font-semibold text-[var(--text-heading)]">
                    {t.footer.quickLinksHeading}
                  </p>
                </div>
                <p className="text-xs text-[var(--text-muted)] mb-3">
                  {t.footer.quickLinksSub}
                </p>
                <nav aria-label={t.footer.quickLinksHeading}>
                  <ul className="space-y-2">
                    {topViewedServices.map(({ service, views }, idx) => {
                      const localizedServiceName =
                        t.servicePage.serviceContent[service.slug]?.name ||
                        service.name;
                      return (
                        <li key={service.slug}>
                          <a
                            href={`/services/${service.slug}`}
                            onClick={(e) => {
                              e.preventDefault();
                              navigateToService(service.slug);
                            }}
                            className="group flex items-center justify-between gap-3 px-3 py-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-alt)] hover:bg-[var(--bg-hover)] hover:border-[var(--border-strong)] transition-colors text-[13px]"
                          >
                            <span className="min-w-0 truncate font-medium text-[var(--text-heading)] group-hover:text-[var(--text-accent)]">
                              <span className="font-mono text-[var(--text-muted)] mr-1.5 tabular-nums">
                                0{idx + 1}.
                              </span>
                              {localizedServiceName}
                            </span>
                            <span className="font-mono text-xs text-[var(--text-muted)] shrink-0 tabular-nums">
                              {views} {t.footer.viewsLabel}
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>

              <div className="md:col-span-4">
                <p className="text-xs font-semibold text-[var(--text-heading)] mb-3">
                  {t.footer.dedicatedServicesHeading}
                </p>
                <div className="grid grid-cols-1 gap-y-2 text-[13px] text-[var(--text-body)]">
                  {SERVICE_LANDING_PAGES.map((svc) => {
                    const localizedServiceName =
                      t.servicePage.serviceContent[svc.slug]?.name || svc.name;
                    return (
                      <a
                        key={svc.slug}
                        href={`/services/${svc.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          navigateToService(svc.slug);
                        }}
                        className="hover:text-[var(--text-heading)] hover:underline truncate"
                      >
                        {localizedServiceName}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-[var(--text-muted)]">
              <div className="flex flex-wrap items-center gap-6 font-medium text-[var(--text-body)]">
                <a
                  href="/#services"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateHome('#services');
                  }}
                  className="hover:text-[var(--text-heading)]"
                >
                  {t.nav.services}
                </a>
                <a
                  href="/#stack"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateHome('#stack');
                  }}
                  className="hover:text-[var(--text-heading)]"
                >
                  {t.nav.engineering}
                </a>
                <a
                  href="/#care-plans"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateHome('#care-plans');
                  }}
                  className="hover:text-[var(--text-heading)]"
                >
                  {t.nav.carePlans}
                </a>
                <a
                  href="/#case-studies"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateHome('#case-studies');
                  }}
                  className="hover:text-[var(--text-heading)]"
                >
                  {t.nav.caseStudies}
                </a>
                <a
                  href="/#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateHome('#faq');
                  }}
                  className="hover:text-[var(--text-heading)]"
                >
                  FAQ
                </a>
                <a
                  href="/#guides"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateHome('#guides');
                  }}
                  className="hover:text-[var(--text-heading)]"
                >
                  {t.nav.guides}
                </a>
              </div>
              <p>{t.footer.copyright}</p>
            </div>
          </div>
        </footer>

        <GuideReaderModal
          guide={activeGuide}
          onClose={() => setActiveGuide(null)}
          onBookConsult={() => scrollToContact()}
          t={t}
        />
      </div>
    </MotionConfig>
  );
}
