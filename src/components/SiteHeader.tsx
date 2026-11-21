import { useEffect, useRef, useState, type ComponentType } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Building2,
  ChevronDown,
  Code2,
  Compass,
  Globe,
  HeartPulse,
  Languages,
  Layers,
  Menu,
  Moon,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sun,
  Workflow,
  X,
} from 'lucide-react';
import type { ThemeMode } from '../hooks/useTheme';
import type { Locale } from '../hooks/useLanguage';
import type { SiteTranslations } from '../data/translations';
import { SERVICE_PILLARS, UK_SECTORS } from '../data/agencyData';
import {
  SERVICE_LANDING_PAGES,
  type ServiceLandingDetail,
} from '../data/servicePagesData';
import { EASE_OUT_EXPO } from './MotionPrimitives';

interface SiteHeaderProps {
  onNavigateHome: (hash?: string) => void;
  onNavigateService: (slug: string) => void;
  onConsultClick: (topic?: string) => void;
  topService?: ServiceLandingDetail;
  theme: ThemeMode;
  onToggleTheme: () => void;
  locale: Locale;
  onChangeLocale: (next: Locale) => void;
  t: SiteTranslations;
}

type MegaPanelKey = 'services' | 'engineering' | null;
type LucideIcon = ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;

const PILLAR_ICONS: Record<string, LucideIcon> = {
  'web-engineering': Globe,
  'search-geo-ai': Search,
  'ai-automation': Workflow,
  'brand-growth': Compass,
};

const CAPABILITY_LINK_ICONS: LucideIcon[] = [Code2, Layers, BookOpen];
const SECTOR_ICONS: LucideIcon[] = [HeartPulse, ShoppingBag, Briefcase, Building2];

export function SiteHeader({
  onNavigateHome,
  onNavigateService,
  onConsultClick,
  topService,
  theme,
  onToggleTheme,
  locale,
  onChangeLocale,
  t,
}: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<MegaPanelKey>('services');
  const [activeMega, setActiveMega] = useState<MegaPanelKey>(null);
  const [scrolled, setScrolled] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMega(null);
        setMobileOpen(false);
      }
    };
    const onPointerDown = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMega(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('mousedown', onPointerDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('mousedown', onPointerDown);
    };
  }, []);

  const clearCloseTimer = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openMega = (panel: MegaPanelKey) => {
    clearCloseTimer();
    setActiveMega(panel);
  };

  const scheduleCloseMega = () => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setActiveMega(null);
    }, 160);
  };

  const handleHashNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setActiveMega(null);
    setMobileOpen(false);
    onNavigateHome(href);
  };

  const handleServiceSelect = (slug: string) => {
    setActiveMega(null);
    setMobileOpen(false);
    onNavigateService(slug);
  };

  const isDark = theme === 'dark';
  const spotlightService = topService || SERVICE_LANDING_PAGES[0];
  const localizedSpotlight =
    t.servicePage.serviceContent[spotlightService.slug];

  return (
    <header
      ref={headerRef}
      onMouseLeave={scheduleCloseMega}
      className={`sticky top-0 z-40 border-b border-[var(--border-subtle)] backdrop-blur-md transition-colors duration-200 ${
        scrolled || activeMega
          ? 'bg-[var(--bg-header-scrolled)] shadow-xs'
          : 'bg-[var(--bg-header)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Clean Single-Line Architectural Wordmark */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setActiveMega(null);
            setMobileOpen(false);
            onNavigateHome();
          }}
          className="inline-flex items-center gap-2.5 group whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--text-accent)] rounded-md"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 text-[var(--text-heading)] group-hover:text-[var(--text-accent)] transition-colors"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x="2.5"
              y="2.5"
              width="19"
              height="19"
              rx="4"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M7 9.5L9.8 15L12 10.5L14.2 15L17 9.5"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-lg sm:text-xl font-bold tracking-tight text-[var(--text-heading)] group-hover:text-[var(--text-accent)] transition-colors">
            WPCarePoint
          </span>
        </a>

        {/* Zone 2: Single-Line Navigation Triggers & Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-[var(--text-body)]"
        >
          <button
            type="button"
            aria-expanded={activeMega === 'services'}
            aria-controls="mega-menu-panel"
            onMouseEnter={() => openMega('services')}
            onClick={() =>
              setActiveMega((prev) => (prev === 'services' ? null : 'services'))
            }
            className={`inline-flex items-center gap-1 py-2 border-b-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeMega === 'services'
                ? 'border-[var(--text-accent)] text-[var(--text-heading)]'
                : 'border-transparent hover:text-[var(--text-heading)]'
            }`}
          >
            <span>{t.nav.services}</span>
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-200 ${
                activeMega === 'services'
                  ? 'rotate-180 text-[var(--text-accent)]'
                  : ''
              }`}
              aria-hidden="true"
            />
          </button>

          <button
            type="button"
            aria-expanded={activeMega === 'engineering'}
            aria-controls="mega-menu-panel"
            onMouseEnter={() => openMega('engineering')}
            onClick={() =>
              setActiveMega((prev) =>
                prev === 'engineering' ? null : 'engineering'
              )
            }
            className={`inline-flex items-center gap-1 py-2 border-b-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeMega === 'engineering'
                ? 'border-[var(--text-accent)] text-[var(--text-heading)]'
                : 'border-transparent hover:text-[var(--text-heading)]'
            }`}
          >
            <span>{t.nav.engineering}</span>
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-200 ${
                activeMega === 'engineering'
                  ? 'rotate-180 text-[var(--text-accent)]'
                  : ''
              }`}
              aria-hidden="true"
            />
          </button>

          <a
            href="/#care-plans"
            onMouseEnter={() => setActiveMega(null)}
            onClick={(e) => handleHashNav(e, '#care-plans')}
            className="py-2 border-b-2 border-transparent hover:border-[var(--border-strong)] hover:text-[var(--text-heading)] transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.carePlans}
          </a>

          <a
            href="/#case-studies"
            onMouseEnter={() => setActiveMega(null)}
            onClick={(e) => handleHashNav(e, '#case-studies')}
            className="py-2 border-b-2 border-transparent hover:border-[var(--border-strong)] hover:text-[var(--text-heading)] transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.caseStudies}
          </a>

          <a
            href="/#guides"
            onMouseEnter={() => setActiveMega(null)}
            onClick={(e) => handleHashNav(e, '#guides')}
            className="py-2 border-b-2 border-transparent hover:border-[var(--border-strong)] hover:text-[var(--text-heading)] transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.guides}
          </a>
        </nav>

        {/* Zone 3: UK Bilingual Switcher (EN | CY) + Theme Toggle + Primary CTA */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div
            role="group"
            aria-label={t.nav.switchLanguageLabel}
            title={t.nav.switchLanguageLabel}
            className="inline-flex items-center p-0.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-muted)]"
          >
            <span className="hidden xl:inline-flex items-center pl-2 pr-1 text-[var(--text-muted)]">
              <Languages className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            {(['en', 'cy'] as const).map((code) => {
              const active = locale === code;
              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => onChangeLocale(code)}
                  aria-pressed={active}
                  className={`px-2 py-1 text-xs font-mono font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-[var(--bg-card)] text-[var(--text-heading)] shadow-xs'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-heading)]'
                  }`}
                >
                  {code.toUpperCase()}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? t.nav.switchToLight : t.nav.switchToDark}
            aria-pressed={isDark}
            title={isDark ? t.nav.switchToLight : t.nav.switchToDark}
            className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-body)] hover:text-[var(--text-heading)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-hover)] transition-colors cursor-pointer shrink-0"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.span
                  key="sun"
                  initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                  transition={{ duration: 0.16, ease: EASE_OUT_EXPO }}
                  className="inline-flex"
                >
                  <Sun className="h-4 w-4 text-amber-400" aria-hidden="true" />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ opacity: 0, rotate: 45, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -45, scale: 0.8 }}
                  transition={{ duration: 0.16, ease: EASE_OUT_EXPO }}
                  className="inline-flex"
                >
                  <Moon className="h-4 w-4" aria-hidden="true" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveMega(null);
              onConsultClick();
            }}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[var(--btn-primary-text)] bg-[var(--btn-primary-bg)] rounded-lg hover:bg-[var(--btn-primary-hover-bg)] active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>{t.nav.bookConsultation}</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={mobileOpen}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-body)] hover:bg-[var(--bg-hover)] cursor-pointer transition-colors shrink-0"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Desktop Enterprise Mega Menu Panel */}
      <AnimatePresence>
        {activeMega && (
          <motion.div
            id="mega-menu-panel"
            key={activeMega}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: EASE_OUT_EXPO }}
            onMouseEnter={clearCloseTimer}
            className="hidden lg:block absolute inset-x-0 top-full border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-6 py-8">
              {activeMega === 'services' ? (
                <div className="grid grid-cols-12 gap-8 items-start">
                  {/* Left 8 Cols: Categorised Service Groupings with Category Visual Icons */}
                  <div className="col-span-8 space-y-6">
                    <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-[var(--border-divider)]">
                      <div>
                        <p className="text-xs font-semibold text-[var(--text-heading)]">
                          {t.nav.megaServicesHeading}
                        </p>
                        <p className="text-xs text-[var(--text-muted)] mt-0.5">
                          {t.nav.megaServicesSub}
                        </p>
                      </div>
                      <a
                        href="/#services"
                        onClick={(e) => handleHashNav(e, '#services')}
                        className="text-xs font-medium text-[var(--text-accent)] hover:underline inline-flex items-center gap-1 whitespace-nowrap shrink-0"
                      >
                        <span>{t.nav.megaAllServicesCta}</span>
                        <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      </a>
                    </div>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                      {SERVICE_PILLARS.map((pillar) => {
                        const localizedPillar =
                          t.servicesSection.pillarCopy[pillar.id];
                        const CategoryIcon =
                          PILLAR_ICONS[pillar.id] || Globe;

                        return (
                          <div key={pillar.id} className="space-y-3">
                            <div className="flex items-center gap-2.5">
                              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-muted)] text-[var(--text-accent)] shrink-0">
                                <CategoryIcon
                                  className="h-4 w-4"
                                  aria-hidden={true}
                                />
                              </span>
                              <div className="min-w-0">
                                <p className="text-xs font-semibold text-[var(--text-heading)] truncate">
                                  <span className="font-mono text-[var(--text-accent)] mr-1.5">
                                    {pillar.index}
                                  </span>
                                  {localizedPillar?.title || pillar.title}
                                </p>
                              </div>
                            </div>

                            <ul className="space-y-1 pl-10">
                              {pillar.items.map((item) => {
                                const landing = SERVICE_LANDING_PAGES.find(
                                  (p) => p.id === item.id
                                );
                                if (!landing) return null;
                                const localizedItem =
                                  t.servicesSection.itemCopy[item.id];
                                return (
                                  <li key={landing.slug}>
                                    <a
                                      href={`/services/${landing.slug}`}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        handleServiceSelect(landing.slug);
                                      }}
                                      className="group flex items-center justify-between gap-3 px-2.5 py-2 -mx-2.5 rounded-lg hover:bg-[var(--bg-hover)] transition-colors"
                                    >
                                      <span className="text-[13px] font-medium text-[var(--text-heading)] group-hover:text-[var(--text-accent)] truncate">
                                        {localizedItem?.name || item.name}
                                      </span>
                                      <ArrowRight
                                        className="h-3 w-3 text-[var(--text-muted)] opacity-0 group-hover:opacity-100 group-hover:text-[var(--text-accent)] transition-opacity shrink-0"
                                        aria-hidden="true"
                                      />
                                    </a>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right 4 Cols: Featured Practice Spotlight & Direct Consultation CTA */}
                  <div className="col-span-4 rounded-2xl border border-slate-800 bg-[var(--bg-obsidian)] bg-obsidian-grid text-white p-6 space-y-5">
                    <div>
                      <p className="text-xs font-mono font-semibold text-sky-400">
                        {t.nav.megaSpotlightEyebrow}
                      </p>
                      <h3 className="text-base font-bold text-white mt-1.5 leading-snug">
                        {t.nav.megaSpotlightTitle}
                      </h3>
                      <p className="text-[13px] text-slate-300 mt-2 leading-relaxed">
                        {t.nav.megaSpotlightBody}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-800 space-y-2.5">
                      <p className="text-xs font-mono text-slate-400">
                        {localizedSpotlight?.typicalTimeline ||
                          spotlightService.typicalTimeline}{' '}
                        · {spotlightService.ukStandard}
                      </p>
                      <p className="text-sm font-semibold text-white">
                        {localizedSpotlight?.name || spotlightService.name}
                      </p>
                      <div className="pt-1 space-y-2">
                        <a
                          href={`/services/${spotlightService.slug}`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleServiceSelect(spotlightService.slug);
                          }}
                          className="w-full inline-flex items-center justify-between gap-2 px-4 py-2.5 text-xs font-medium text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-colors"
                        >
                          <span>{t.nav.megaSpotlightCta}</span>
                          <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                        </a>
                        <button
                          type="button"
                          onClick={() => {
                            setActiveMega(null);
                            onConsultClick(spotlightService.name);
                          }}
                          className="w-full inline-flex items-center justify-between gap-2 px-4 py-2 text-xs font-medium text-slate-200 border border-slate-700 hover:border-slate-500 hover:bg-slate-800/70 rounded-xl transition-colors cursor-pointer"
                        >
                          <span>{t.nav.megaConsultCta}</span>
                          <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-12 gap-8 items-start">
                  {/* Col 1: Technology & Governance with Visual Category Icons */}
                  <div className="col-span-4 space-y-3">
                    <p className="text-xs font-semibold text-[var(--text-heading)] pb-2 border-b border-[var(--border-divider)]">
                      {t.nav.megaEngineeringHeading}
                    </p>
                    <ul className="space-y-1.5">
                      {t.nav.megaEngineeringLinks.map((linkItem, idx) => {
                        const LinkIcon = CAPABILITY_LINK_ICONS[idx] || Code2;
                        return (
                          <li key={linkItem.href}>
                            <a
                              href={`/${linkItem.href}`}
                              onClick={(e) => handleHashNav(e, linkItem.href)}
                              className="group flex items-start gap-3 p-2.5 -mx-2.5 rounded-xl hover:bg-[var(--bg-hover)] transition-colors"
                            >
                              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-muted)] text-[var(--text-accent)] shrink-0 mt-0.5">
                                <LinkIcon className="h-4 w-4" aria-hidden={true} />
                              </span>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-semibold text-[var(--text-heading)] group-hover:text-[var(--text-accent)] flex items-center justify-between gap-2">
                                  <span className="truncate">{linkItem.title}</span>
                                  <ArrowRight
                                    className="h-3.5 w-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                    aria-hidden="true"
                                  />
                                </p>
                                <p className="text-xs text-[var(--text-body)] mt-0.5 leading-relaxed">
                                  {linkItem.detail}
                                </p>
                              </div>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Col 2: Regulated & Commercial UK Sectors with Sector Icons */}
                  <div className="col-span-4 space-y-3">
                    <p className="text-xs font-semibold text-[var(--text-heading)] pb-2 border-b border-[var(--border-divider)]">
                      {t.nav.megaSectorsHeading}
                    </p>
                    <ul className="space-y-1.5">
                      {UK_SECTORS.map((sec, idx) => {
                        const localizedSec = t.techStackSection.sectorCopy[idx];
                        const SectorIcon = SECTOR_ICONS[idx] || Building2;
                        return (
                          <li key={sec.index}>
                            <a
                              href="/#stack"
                              onClick={(e) => handleHashNav(e, '#stack')}
                              className="group flex items-start gap-3 p-2.5 -mx-2.5 rounded-xl hover:bg-[var(--bg-hover)] transition-colors"
                            >
                              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-muted)] text-[var(--text-accent)] shrink-0 mt-0.5">
                                <SectorIcon className="h-4 w-4" aria-hidden={true} />
                              </span>
                              <div className="min-w-0">
                                <p className="text-xs font-semibold text-[var(--text-heading)] group-hover:text-[var(--text-accent)]">
                                  <span className="font-mono text-[var(--text-accent)] mr-1.5">
                                    {sec.index}
                                  </span>
                                  {localizedSec?.sector || sec.sector}
                                </p>
                                <p className="text-[11px] font-mono text-[var(--text-muted)] mt-0.5">
                                  {sec.standard}
                                </p>
                              </div>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Col 3: Governance & Enterprise Assurance CTA Panel */}
                  <div className="col-span-4 rounded-2xl border border-slate-800 bg-[var(--bg-obsidian)] bg-obsidian-grid text-white p-6 space-y-4">
                    <div className="flex items-center gap-2 text-sky-400">
                      <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span className="text-xs font-mono font-semibold">
                        UK GDPR · WCAG 2.2 AA · OWASP
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white">
                      {t.nav.megaAssuranceHeading}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {t.nav.megaAssuranceBody}
                    </p>
                    <div className="pt-2 space-y-2">
                      <button
                        type="button"
                        onClick={() => {
                          setActiveMega(null);
                          onConsultClick('Custom Web Solutions and Integrations');
                        }}
                        className="w-full inline-flex items-center justify-between gap-2 px-4 py-2.5 text-xs font-medium text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-colors cursor-pointer"
                      >
                        <span>{t.nav.megaConsultCta}</span>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      </button>
                      <a
                        href="/#case-studies"
                        onClick={(e) => handleHashNav(e, '#case-studies')}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 pt-1"
                      >
                        <span>{t.nav.megaAssuranceCta}</span>
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer with Categorised Accordions & Visual Category Icons */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
            className="lg:hidden border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] max-h-[82vh] overflow-y-auto px-6 py-4 space-y-2"
          >
            {/* Mobile Accordion 1: Categorised Service Groupings */}
            <div className="border-b border-[var(--border-divider)] pb-2">
              <button
                type="button"
                aria-expanded={mobileAccordion === 'services'}
                onClick={() =>
                  setMobileAccordion((prev) =>
                    prev === 'services' ? null : 'services'
                  )
                }
                className="w-full py-2.5 flex items-center justify-between text-sm font-semibold text-[var(--text-heading)] cursor-pointer"
              >
                <span>{t.nav.services}</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileAccordion === 'services' ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              {mobileAccordion === 'services' && (
                <div className="pl-1 pb-3 space-y-4">
                  {SERVICE_PILLARS.map((pillar) => {
                    const localizedPillar =
                      t.servicesSection.pillarCopy[pillar.id];
                    const CategoryIcon = PILLAR_ICONS[pillar.id] || Globe;
                    return (
                      <div key={pillar.id} className="space-y-1.5">
                        <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-accent)] pt-1">
                          <CategoryIcon className="h-3.5 w-3.5 shrink-0" aria-hidden={true} />
                          <span>{localizedPillar?.title || pillar.title}</span>
                        </div>
                        <div className="pl-5 space-y-1">
                          {pillar.items.map((item) => {
                            const landing = SERVICE_LANDING_PAGES.find(
                              (s) => s.id === item.id
                            );
                            if (!landing) return null;
                            const localizedItem =
                              t.servicesSection.itemCopy[item.id];
                            return (
                              <a
                                key={landing.slug}
                                href={`/services/${landing.slug}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleServiceSelect(landing.slug);
                                }}
                                className="flex items-center justify-between gap-2 py-1.5 text-xs text-[var(--text-body)] hover:text-[var(--text-accent)]"
                              >
                                <span className="truncate">
                                  {localizedItem?.name || item.name}
                                </span>
                                <ArrowRight
                                  className="h-3 w-3 text-[var(--text-muted)] shrink-0"
                                  aria-hidden="true"
                                />
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Mobile Accordion 2: Capabilities & Stack */}
            <div className="border-b border-[var(--border-divider)] pb-2">
              <button
                type="button"
                aria-expanded={mobileAccordion === 'engineering'}
                onClick={() =>
                  setMobileAccordion((prev) =>
                    prev === 'engineering' ? null : 'engineering'
                  )
                }
                className="w-full py-2.5 flex items-center justify-between text-sm font-semibold text-[var(--text-heading)] cursor-pointer"
              >
                <span>{t.nav.engineering}</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileAccordion === 'engineering' ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              {mobileAccordion === 'engineering' && (
                <div className="pl-1 pb-2 space-y-1.5">
                  {t.nav.megaEngineeringLinks.map((lnk, idx) => {
                    const LinkIcon = CAPABILITY_LINK_ICONS[idx] || Code2;
                    return (
                      <a
                        key={lnk.href}
                        href={`/${lnk.href}`}
                        onClick={(e) => handleHashNav(e, lnk.href)}
                        className="flex items-center gap-2 py-2 text-xs text-[var(--text-body)] hover:text-[var(--text-accent)]"
                      >
                        <LinkIcon className="h-3.5 w-3.5 text-[var(--text-accent)] shrink-0" aria-hidden={true} />
                        <span>{lnk.title}</span>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            <a
              href="/#care-plans"
              onClick={(e) => handleHashNav(e, '#care-plans')}
              className="block py-2.5 text-sm font-medium text-[var(--text-body)] hover:text-[var(--text-heading)]"
            >
              {t.nav.carePlans}
            </a>
            <a
              href="/#case-studies"
              onClick={(e) => handleHashNav(e, '#case-studies')}
              className="block py-2.5 text-sm font-medium text-[var(--text-body)] hover:text-[var(--text-heading)]"
            >
              {t.nav.caseStudies}
            </a>
            <a
              href="/#guides"
              onClick={(e) => handleHashNav(e, '#guides')}
              className="block py-2.5 text-sm font-medium text-[var(--text-body)] hover:text-[var(--text-heading)]"
            >
              {t.nav.guides}
            </a>

            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onConsultClick();
              }}
              className="w-full mt-2 px-4 py-3 text-sm font-medium text-[var(--btn-primary-text)] bg-[var(--btn-primary-bg)] rounded-lg hover:bg-[var(--btn-primary-hover-bg)] transition-colors cursor-pointer"
            >
              {t.nav.bookConsultation}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
