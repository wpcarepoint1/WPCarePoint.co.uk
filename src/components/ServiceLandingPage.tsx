import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  ShieldCheck,
} from 'lucide-react';
import {
  SERVICE_LANDING_PAGES,
  type ServiceLandingDetail,
} from '../data/servicePagesData';
import type { SiteTranslations } from '../data/translations';
import { ContactSection } from './ContactSection';
import {
  EASE_OUT_EXPO,
  FadeInUpOnScroll,
  Reveal,
  StaggerGrid,
  StaggerItem,
} from './MotionPrimitives';

interface ServiceLandingPageProps {
  service: ServiceLandingDetail;
  onNavigateHome: (hash?: string) => void;
  onNavigateService: (slug: string) => void;
  t: SiteTranslations;
}

export function ServiceLandingPage({
  service,
  onNavigateHome,
  onNavigateService,
  t,
}: ServiceLandingPageProps) {
  const [openFaqIdx, setOpenFaqIdx] = useState<number>(0);

  const localized = t.servicePage.serviceContent[service.slug];
  const serviceName = localized?.name || service.name;
  const servicePillarTitle = localized?.pillarTitle || service.pillarTitle;
  const heroHeadline = localized?.heroHeadline || service.heroHeadline;
  const heroSummary = localized?.heroSummary || service.heroSummary;
  const typicalTimeline = localized?.typicalTimeline || service.typicalTimeline;
  const idealFor = localized?.idealFor || service.idealFor;
  const deliverables = localized?.deliverables || service.deliverables;
  const processSteps = localized?.processSteps || service.processSteps;
  const faqs = localized?.faqs || service.faqs;

  // Sync page title, meta description, canonical URL, and Service JSON-LD
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setOpenFaqIdx(0);

    const prevTitle = document.title;
    const nextTitle = `${serviceName} UK – WPCarePoint`;
    document.title = nextTitle;

    const nextDesc = heroSummary.slice(0, 158);
    const nextUrl = `https://wpcarepoint.co.uk/services/${service.slug}`;

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content') || '';
    metaDesc?.setAttribute('content', nextDesc);

    const canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute('href') || '';
    canonical?.setAttribute('href', nextUrl);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const prevOgTitle = ogTitle?.getAttribute('content') || '';
    ogTitle?.setAttribute('content', nextTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    const prevOgDesc = ogDesc?.getAttribute('content') || '';
    ogDesc?.setAttribute('content', nextDesc);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    const prevOgUrl = ogUrl?.getAttribute('content') || '';
    ogUrl?.setAttribute('content', nextUrl);

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    const prevTwTitle = twTitle?.getAttribute('content') || '';
    twTitle?.setAttribute('content', nextTitle);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    const prevTwDesc = twDesc?.getAttribute('content') || '';
    twDesc?.setAttribute('content', nextDesc);

    const scriptId = 'service-page-jsonld';
    let jsonLdScript = document.getElementById(
      scriptId
    ) as HTMLScriptElement | null;
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.id = scriptId;
      jsonLdScript.type = 'application/ld+json';
      document.head.appendChild(jsonLdScript);
    }

    jsonLdScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          name: serviceName,
          provider: {
            '@type': 'ProfessionalService',
            name: 'WPCarePoint',
            url: 'https://wpcarepoint.co.uk/',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Robert Denholm House, Bletchingley Road',
              addressLocality: 'Nutfield',
              addressRegion: 'Surrey',
              postalCode: 'RH1 4HW',
              addressCountry: 'GB',
            },
          },
          areaServed: { '@type': 'Country', name: 'United Kingdom' },
          description: heroSummary,
          url: nextUrl,
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: t.servicePage.homeBreadcrumb,
              item: 'https://wpcarepoint.co.uk/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: serviceName,
              item: nextUrl,
            },
          ],
        },
        {
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.answer,
            },
          })),
        },
      ],
    });

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) metaDesc.setAttribute('content', prevDesc);
      if (canonical && prevCanonical)
        canonical.setAttribute('href', prevCanonical);
      if (ogTitle && prevOgTitle) ogTitle.setAttribute('content', prevOgTitle);
      if (ogDesc && prevOgDesc) ogDesc.setAttribute('content', prevOgDesc);
      if (ogUrl && prevOgUrl) ogUrl.setAttribute('content', prevOgUrl);
      if (twTitle && prevTwTitle) twTitle.setAttribute('content', prevTwTitle);
      if (twDesc && prevTwDesc) twDesc.setAttribute('content', prevTwDesc);
      jsonLdScript?.remove();
    };
  }, [service.slug, serviceName, heroSummary, faqs, t.servicePage.homeBreadcrumb]);

  const relatedServices = service.relatedSlugs
    .map((slug) => SERVICE_LANDING_PAGES.find((s) => s.slug === slug))
    .filter((item): item is ServiceLandingDetail => Boolean(item));

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[var(--bg-surface)] bg-architectural-grid border-b border-[var(--border-subtle)] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-6 py-14 lg:py-20">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs text-[var(--text-muted)] mb-8"
          >
            <button
              type="button"
              onClick={() => onNavigateHome()}
              className="hover:text-[var(--text-heading)] hover:underline cursor-pointer"
            >
              {t.servicePage.homeBreadcrumb}
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              onClick={() => onNavigateHome('#services-overview')}
              className="hover:text-[var(--text-heading)] hover:underline cursor-pointer"
            >
              {t.servicePage.servicesBreadcrumb}
            </button>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-[var(--text-heading)]">
              {serviceName}
            </span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
            className="max-w-4xl"
          >
            <p className="text-xs font-medium text-[var(--text-accent)]">
              {servicePillarTitle} · {t.servicePage.unitedKingdom}
            </p>
            <h1
              className="font-bold tracking-tight text-[var(--text-heading)] mt-3 text-balance"
              style={{
                fontSize: 'clamp(2.15rem, 3.9vw, 3.4rem)',
                lineHeight: 1.08,
              }}
            >
              {heroHeadline}
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-body)] mt-5 leading-relaxed max-w-3xl">
              {heroSummary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[var(--btn-primary-text)] bg-[var(--btn-primary-bg)] rounded-xl hover:bg-[var(--btn-primary-hover-bg)] active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer group"
              >
                <span>
                  {t.servicePage.requestProposalPrefix} {serviceName}
                  {t.servicePage.requestProposalSuffix
                    ? ` ${t.servicePage.requestProposalSuffix}`
                    : ''}
                </span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>

              <button
                type="button"
                onClick={() => onNavigateHome('#services-overview')}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-body)] hover:text-[var(--text-heading)] hover:underline underline-offset-4 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                {t.servicePage.backToAll}
              </button>
            </div>
          </motion.div>

          {/* 3-Column Commercial Spec Strip */}
          <StaggerGrid
            delay={0.08}
            className="mt-14 pt-10 border-t border-[var(--border-subtle)] grid grid-cols-1 sm:grid-cols-3 gap-8"
          >
            <StaggerItem>
              <dt className="text-xs font-medium text-[var(--text-muted)]">
                {t.servicePage.investmentLabel}
              </dt>
              <dd className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-[var(--text-heading)] mt-1">
                {service.startingPriceGbp}
              </dd>
            </StaggerItem>
            <StaggerItem>
              <dt className="text-xs font-medium text-[var(--text-muted)]">
                {t.servicePage.timelineLabel}
              </dt>
              <dd className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-[var(--text-heading)] mt-1">
                {typicalTimeline}
              </dd>
            </StaggerItem>
            <StaggerItem>
              <dt className="text-xs font-medium text-[var(--text-muted)]">
                {t.servicePage.standardLabel}
              </dt>
              <dd className="text-lg sm:text-xl font-bold font-mono text-[var(--text-heading)] mt-1.5">
                {service.ukStandard}
              </dd>
            </StaggerItem>
          </StaggerGrid>

          {/* Architectural Build Stack Specification */}
          <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <span className="text-xs font-medium text-[var(--text-muted)] shrink-0">
              {t.servicePage.buildStackLabel}
            </span>
            <p className="text-xs sm:text-sm font-mono text-[var(--text-primary)] leading-relaxed">
              {service.buildStack.join(' · ')}
            </p>
          </div>
        </div>
      </section>

      {/* Executive Section Jump Bar (Motivates full-page reading) */}
      <nav
        aria-label={t.servicePage.sectionNavLabel}
        className="border-b border-[var(--border-subtle)] bg-[var(--bg-card)]/80 backdrop-blur-xs"
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-mono font-medium text-[var(--text-muted)]">
            {t.servicePage.sectionNavLabel}
          </span>
          <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-[var(--text-body)]">
            <button
              type="button"
              onClick={() => scrollToSection('service-overview')}
              className="hover:text-[var(--text-accent)] cursor-pointer transition-colors"
            >
              {t.servicePage.sectionLinks.overview}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('service-deliverables')}
              className="hover:text-[var(--text-accent)] cursor-pointer transition-colors"
            >
              {t.servicePage.sectionLinks.deliverables}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('service-delivery')}
              className="hover:text-[var(--text-accent)] cursor-pointer transition-colors"
            >
              {t.servicePage.sectionLinks.delivery}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('service-faq')}
              className="hover:text-[var(--text-accent)] cursor-pointer transition-colors"
            >
              {t.servicePage.sectionLinks.faq}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="text-[var(--text-accent)] font-semibold hover:underline cursor-pointer"
            >
              {t.servicePage.sectionLinks.proposal}
            </button>
          </div>
        </div>
      </nav>

      {/* Ideal For, Brand Standard Assurance & Deliverables */}
      <section
        id="service-overview"
        className="py-24 bg-[var(--bg-surface-alt)] transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-8">
            <Reveal className="space-y-4">
              <p className="text-xs font-medium text-[var(--text-accent)]">
                {t.servicePage.whoFitsEyebrow}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-heading)] text-balance">
                {t.servicePage.whoFitsHeadline}
              </h2>
              <ul className="pt-5 space-y-3.5 border-t border-[var(--border-subtle)]">
                {idealFor.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-[var(--text-body)] leading-relaxed"
                  >
                    <Check
                      className="h-4 w-4 text-[var(--text-accent)] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Brand Standard & Commercial Assurance Card */}
            <FadeInUpOnScroll distance={20} delay={0.1}>
              <aside className="rounded-2xl border border-white/15 bg-[#003b4f] bg-deep-teal-grid text-white p-6 sm:p-7 space-y-5">
                <div className="flex items-center gap-2 text-[#00b2d4]">
                  <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="text-xs font-mono font-semibold">
                    {t.servicePage.brandPromiseEyebrow}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {t.servicePage.brandPromiseHeadline}
                </h3>
                <dl className="space-y-3.5 pt-2 border-t border-white/15">
                  {t.servicePage.brandPromisePoints.map((pt) => (
                    <div key={pt.label}>
                      <dt className="text-sm font-semibold text-white">
                        {pt.label}
                      </dt>
                      <dd className="text-[13px] text-white/80 mt-0.5 leading-relaxed">
                        {pt.detail}
                      </dd>
                    </div>
                  ))}
                </dl>
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#00749c] hover:bg-[#00b2d4] hover:text-[#003b4f] rounded-xl transition-colors cursor-pointer"
                >
                  <span>{t.servicePage.brandPromiseCta}</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </aside>
            </FadeInUpOnScroll>
          </div>

          <Reveal
            delay={0.08}
            className="lg:col-span-7 border border-[var(--border-subtle)] bg-[var(--bg-card)] rounded-2xl divide-y divide-[var(--border-divider)] overflow-hidden"
          >
            <div id="service-deliverables" className="p-6 sm:p-7">
              <h3 className="text-base font-bold text-[var(--text-heading)]">
                {t.servicePage.includedHeadingPrefix} {serviceName}
              </h3>
              <p className="text-sm text-[var(--text-muted)] mt-1">
                {t.servicePage.includedSub}
              </p>
            </div>
            {deliverables.map((item, idx) => (
              <div
                key={item.title}
                className="p-6 sm:p-7 flex items-start gap-4 hover:bg-[var(--bg-hover)] transition-colors"
              >
                <span className="text-sm font-mono font-semibold text-[var(--text-accent)] shrink-0 tabular-nums">
                  0{idx + 1}.
                </span>
                <div>
                  <h4 className="text-base font-semibold text-[var(--text-heading)]">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[var(--text-body)] mt-1 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 3-Step Delivery Roadmap */}
      <section
        id="service-delivery"
        className="py-24 bg-[#003b4f] bg-deep-teal-grid text-white border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUpOnScroll distance={20} className="max-w-2xl mb-12">
            <p className="text-xs font-medium text-[#00b2d4]">
              {t.servicePage.deliveryEyebrow}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white mt-2">
              {t.servicePage.deliveryHeadingPrefix} {serviceName}
            </h2>
          </FadeInUpOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {processSteps.map((step, idx) => (
              <FadeInUpOnScroll
                key={step.step}
                delay={idx * 0.08}
                distance={24}
                className="flex"
              >
                <div className="w-full h-full rounded-2xl border border-white/15 bg-white/5 p-7 hover:border-[#00b2d4]/60 transition-colors">
                  <p className="text-sm font-mono font-semibold text-[#00b2d4] tabular-nums">
                    {step.step}
                  </p>
                  <h3 className="text-lg font-bold text-white mt-2.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/80 mt-2.5 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </FadeInUpOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Service-Specific UK FAQ */}
      <section
        id="service-faq"
        className="py-24 bg-[var(--bg-surface)] border-t border-[var(--border-subtle)] transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-4">
            <p className="text-xs font-medium text-[var(--text-accent)]">
              {t.servicePage.faqEyebrow}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-heading)] mt-2 text-balance">
              {t.servicePage.faqHeadingPrefix} {serviceName}
            </h2>
          </Reveal>

          <Reveal
            delay={0.08}
            className="lg:col-span-8 border border-[var(--border-subtle)] bg-[var(--bg-card)] rounded-2xl divide-y divide-[var(--border-subtle)] overflow-hidden"
          >
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqIdx(isOpen ? -1 : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[var(--bg-hover)] transition-colors cursor-pointer"
                  >
                    <span className="text-base font-semibold text-[var(--text-heading)]">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
                      className="shrink-0 text-[var(--text-muted)]"
                      aria-hidden="true"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.18, ease: EASE_OUT_EXPO }}
                        className="px-6 pb-5 text-sm text-[var(--text-body)] leading-relaxed"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* Related Services Explorer */}
      <section className="py-20 bg-[var(--bg-surface)] border-t border-[var(--border-subtle)] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h2 className="text-xl font-bold text-[var(--text-heading)]">
              {t.servicePage.relatedHeading}
            </h2>
            <button
              type="button"
              onClick={() => onNavigateHome('#services-overview')}
              className="text-sm font-medium text-[var(--text-accent)] hover:underline self-start sm:self-auto cursor-pointer"
            >
              {t.servicePage.viewAllServices}
            </button>
          </div>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => {
              const localizedRel = t.servicePage.serviceContent[rel.slug];
              return (
                <StaggerItem key={rel.id} className="flex">
                  <a
                    href={`/services/${rel.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateService(rel.slug);
                    }}
                    className="w-full text-left border border-[var(--border-subtle)] bg-[var(--bg-surface-alt)] hover:bg-[var(--bg-card)] hover:border-[var(--border-strong)] rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between cursor-pointer group"
                  >
                    <div>
                      <p className="text-xs font-mono tabular-nums text-[var(--text-muted)]">
                        {rel.startingPriceGbp} ·{' '}
                        {localizedRel?.typicalTimeline || rel.typicalTimeline}
                      </p>
                      <h3 className="text-base font-bold text-[var(--text-heading)] mt-1.5 group-hover:text-[var(--text-accent)] transition-colors">
                        {localizedRel?.name || rel.name}
                      </h3>
                      <p className="text-sm text-[var(--text-body)] mt-2 leading-relaxed line-clamp-3">
                        {localizedRel?.heroSummary || rel.heroSummary}
                      </p>
                    </div>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-accent)]">
                      <span>{t.servicePage.openServicePage}</span>
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </StaggerItem>
              );
            })}
          </StaggerGrid>
        </div>
      </section>

      {/* Pre-selected Email CTA */}
      <ContactSection preselectedPlan={service.name} />
    </div>
  );
}
