import { AlertCircle, ArrowRight, Check, Compass, ShieldCheck, Wrench } from 'lucide-react';
import {
  type DedicatedServicePageConfig,
  type ServiceProblemsSectionConfig,
  type ServiceSuitabilitySectionConfig,
} from '../../data/dedicatedServicePagesData';
import { BRAND_INFO } from '../../data/homepageData';
import { FadeInUpOnScroll, Reveal } from '../MotionPrimitives';
import { Button } from '../ui/Button';
import { FaqAccordion } from '../ui/FaqAccordion';
import { SectionHeading } from '../ui/SectionHeading';

export type SectionSurface = 'white' | 'slate';

function getSectionSurfaceClasses(surface: SectionSurface): string {
  return surface === 'white'
    ? 'bg-white border-b border-[#dde6eb]'
    : 'bg-[#f7f9fa] border-b border-[#dde6eb]';
}

function getCardSurfaceClasses(surface: SectionSurface): string {
  return surface === 'white' ? 'bg-[#f7f9fa]' : 'bg-white';
}

export function ServiceJumpNav({
  links,
  onJumpToSection,
}: {
  links: DedicatedServicePageConfig['jumpLinks'];
  onJumpToSection: (targetId: string) => void;
}) {
  return (
    <nav
      aria-label="Page Sections"
      className="bg-[#f7f9fa] border-b border-[#dde6eb]"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6c757d]">
          On This Page
        </span>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          {links.map((item) => (
            <a
              key={item.targetId}
              href={`#${item.targetId}`}
              onClick={(e) => {
                e.preventDefault();
                onJumpToSection(item.targetId);
              }}
              className={`inline-flex items-center min-h-[44px] sm:min-h-[36px] text-xs font-semibold transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded-md px-1 ${
                item.targetId === 'contact'
                  ? 'text-[#00749c] hover:text-[#003b4f]'
                  : 'text-[#2e2e2e] hover:text-[#00749c]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export function ServiceIntroSection({
  intro,
  surface = 'white',
}: {
  intro: DedicatedServicePageConfig['introSection'];
  surface?: SectionSurface;
}) {
  return (
    <section
      id={intro.id}
      className={`scroll-mt-20 py-16 lg:py-20 ${getSectionSurfaceClasses(surface)}`}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <Reveal className="lg:col-span-7 space-y-5">
          <p className="text-xs font-mono font-semibold tracking-wider uppercase text-[#00749c]">
            {intro.eyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.15rem] font-bold tracking-tight text-[#003b4f] leading-tight text-balance">
            {intro.title}
          </h2>
          <div className="space-y-4 pt-2">
            {intro.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base sm:text-[17px] text-[#2e2e2e] leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <FadeInUpOnScroll delay={0.08} className="lg:col-span-5">
          <aside
            className={`rounded-2xl border border-[#dde6eb] ${getCardSurfaceClasses(
              surface
            )} p-6 sm:p-8 space-y-5`}
          >
            <div className="flex items-center gap-2 text-[#00749c]">
              <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                {intro.asideEyebrow}
              </span>
            </div>

            <h3 className="text-lg font-bold text-[#003b4f] leading-snug">
              {intro.asideTitle}
            </h3>

            <dl className="space-y-4 pt-4 border-t border-[#dde6eb]">
              {intro.asidePoints.map((pt) => (
                <div key={pt.title}>
                  <dt className="text-sm font-semibold text-[#003b4f]">{pt.title}</dt>
                  <dd className="text-sm text-[#2e2e2e] mt-1 leading-relaxed">
                    {pt.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </FadeInUpOnScroll>
      </div>
    </section>
  );
}

export function ServiceSuitabilitySection({
  suitability,
  onNavigatePath,
  surface = 'slate',
}: {
  suitability: ServiceSuitabilitySectionConfig;
  onNavigatePath: (path: string) => void;
  surface?: SectionSurface;
}) {
  const cardBg = getCardSurfaceClasses(surface);

  return (
    <section
      id={suitability.id}
      className={`scroll-mt-20 py-16 lg:py-20 ${getSectionSurfaceClasses(surface)}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow={suitability.eyebrow}
          title={suitability.title}
          description={suitability.description}
        />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <FadeInUpOnScroll delay={0.03} className="lg:col-span-7 flex">
            <div
              className={`w-full rounded-2xl border border-[#dde6eb] ${cardBg} p-6 sm:p-8 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#00749c]">
                  <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{suitability.goodFitTitle}</span>
                </div>

                <dl className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5 border-t border-[#dde6eb]">
                  {suitability.goodFit.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-[#e9eff2] bg-white/70 p-4 space-y-1.5"
                    >
                      <dt className="text-sm font-bold text-[#003b4f] leading-snug">
                        {item.title}
                      </dt>
                      <dd className="text-xs sm:text-sm text-[#2e2e2e] leading-relaxed">
                        {item.detail}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </FadeInUpOnScroll>

          <FadeInUpOnScroll delay={0.08} className="lg:col-span-5 flex">
            <aside
              className={`w-full rounded-2xl border border-[#b9ccd6] ${cardBg} p-6 sm:p-8 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#00749c]">
                  <Compass className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{suitability.considerOtherTitle}</span>
                </div>

                <ul className="mt-5 pt-4 border-t border-[#dde6eb] space-y-3">
                  {suitability.considerOther.map((alt) => (
                    <li key={alt.label}>
                      <a
                        href={alt.routePath}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigatePath(alt.routePath);
                        }}
                        className="group block rounded-xl border border-[#dde6eb] bg-white hover:border-[#00749c] transition-colors p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c]"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-sm font-bold text-[#003b4f] group-hover:text-[#00749c] transition-colors">
                            {alt.label}
                          </span>
                          <ArrowRight
                            className="h-4 w-4 text-[#00749c] shrink-0 transition-transform duration-150 group-hover:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="text-xs text-[#2e2e2e] mt-1.5 leading-relaxed">
                          {alt.note}
                        </p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </FadeInUpOnScroll>
        </div>
      </div>
    </section>
  );
}

export function ServiceProblemsSection({
  problems,
  surface = 'white',
}: {
  problems: ServiceProblemsSectionConfig;
  surface?: SectionSurface;
}) {
  const cardBg = getCardSurfaceClasses(surface);

  return (
    <section
      id={problems.id}
      className={`scroll-mt-20 py-16 lg:py-20 ${getSectionSurfaceClasses(surface)}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow={problems.eyebrow}
          title={problems.title}
          description={problems.description}
        />

        {problems.layout === 'comparison-rows' ? (
          <div className="mt-10 space-y-4">
            {problems.items.map((item, idx) => (
              <FadeInUpOnScroll key={item.index} delay={idx * 0.04}>
                <article
                  className={`rounded-2xl border border-[#dde6eb] ${cardBg} hover:border-[#00749c] transition-colors p-6 sm:p-7 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start`}
                >
                  <div className="lg:col-span-4 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#00749c] tabular-nums">
                      <span>{item.index}</span>
                      <span aria-hidden="true" className="text-[#6c757d]">
                        ·
                      </span>
                      <span className="uppercase tracking-wider text-[#6c757d]">
                        Challenge
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#003b4f] leading-snug">
                      {item.problem}
                    </h3>
                  </div>

                  <div className="lg:col-span-4 space-y-1">
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6c757d]">
                      Practical Impact
                    </p>
                    <p className="text-sm text-[#2e2e2e] leading-relaxed">{item.impact}</p>
                  </div>

                  <div className="lg:col-span-4 lg:pl-6 lg:border-l border-t lg:border-t-0 pt-4 lg:pt-0 border-[#dde6eb] space-y-1.5">
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00749c]">
                      How We Address It
                    </p>
                    <p className="text-sm font-medium text-[#003b4f] leading-relaxed">
                      {item.solution}
                    </p>
                    {item.boundaryNote && (
                      <p className="text-xs font-mono text-[#6c757d] pt-1">
                        {item.boundaryNote}
                      </p>
                    )}
                  </div>
                </article>
              </FadeInUpOnScroll>
            ))}
          </div>
        ) : problems.layout === 'guardrail-cards' ? (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {problems.items.map((item, idx) => (
              <FadeInUpOnScroll key={item.index} delay={idx * 0.04} className="flex">
                <article
                  className={`w-full rounded-2xl border border-[#dde6eb] ${cardBg} hover:border-[#00749c] transition-colors overflow-hidden flex flex-col justify-between`}
                >
                  <div className="px-6 sm:px-7 py-4 bg-[#003b4f]/[0.04] border-b border-[#dde6eb] flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#00749c] tabular-nums">
                      <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>
                        {item.index} Safeguard &amp; Risk Control
                      </span>
                    </div>
                    {item.boundaryNote && (
                      <span className="text-xs font-mono text-[#6c757d]">
                        {item.boundaryNote}
                      </span>
                    )}
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                    <div>
                      <h3 className="text-lg font-bold text-[#003b4f] leading-snug">
                        {item.problem}
                      </h3>
                      <p className="text-sm text-[#2e2e2e] mt-2 leading-relaxed">
                        {item.impact}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#dde6eb]">
                      <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00749c]">
                        Engineering Control
                      </p>
                      <p className="text-sm font-medium text-[#003b4f] mt-1.5 leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </article>
              </FadeInUpOnScroll>
            ))}
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {problems.items.map((item, idx) => (
              <FadeInUpOnScroll key={item.index} delay={idx * 0.04} className="flex">
                <article
                  className={`w-full rounded-2xl border border-[#dde6eb] ${cardBg} hover:border-[#00749c] transition-colors p-6 sm:p-7 flex flex-col justify-between`}
                >
                  <div>
                    <p className="text-xs font-mono font-semibold text-[#00749c] tabular-nums">
                      {item.index} Common Friction
                    </p>
                    <h3 className="text-lg font-bold text-[#003b4f] mt-2 leading-snug">
                      {item.problem}
                    </h3>
                    <p className="text-sm text-[#2e2e2e] mt-2 leading-relaxed">
                      {item.impact}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#dde6eb]">
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00749c]">
                      Practical Fix
                    </p>
                    <p className="text-sm font-medium text-[#003b4f] mt-1 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </article>
              </FadeInUpOnScroll>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function ServiceCapabilitiesSection({
  capabilities,
  layout = 'grid-2x2',
  surface = 'slate',
}: {
  capabilities: DedicatedServicePageConfig['capabilitiesSection'];
  layout?: 'grid-2x2' | 'bento-featured';
  surface?: SectionSurface;
}) {
  const cardBg = getCardSurfaceClasses(surface);
  const useBento = layout === 'bento-featured' && capabilities.items.length === 4;

  return (
    <section
      id={capabilities.id}
      className={`scroll-mt-20 py-16 lg:py-20 ${getSectionSurfaceClasses(surface)}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow={capabilities.eyebrow}
          title={capabilities.title}
          description={capabilities.description}
        />

        <div
          className={`mt-10 grid gap-6 items-stretch ${
            useBento
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-6'
              : 'grid-cols-1 md:grid-cols-2'
          }`}
        >
          {capabilities.items.map((item, idx) => {
            const isHeroFeature = useBento && idx === 0;
            const bentoSpan = !useBento
              ? ''
              : idx === 0
              ? 'md:col-span-2 lg:col-span-6'
              : idx === 3
              ? 'md:col-span-2 lg:col-span-2'
              : 'md:col-span-1 lg:col-span-2';

            return (
              <FadeInUpOnScroll
                key={item.title}
                delay={idx * 0.04}
                className={`flex ${bentoSpan}`}
              >
                <article
                  className={`w-full rounded-2xl border border-[#dde6eb] ${cardBg} hover:border-[#00749c] transition-colors duration-200 p-6 sm:p-7 ${
                    isHeroFeature
                      ? 'grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start'
                      : 'flex flex-col justify-between'
                  }`}
                >
                  <div className={isHeroFeature ? 'lg:col-span-6' : ''}>
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="font-mono font-semibold text-[#00749c] tabular-nums">
                        {item.index}
                      </span>
                      <span className="font-mono text-[#6c757d]">{item.subtitle}</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#003b4f] mt-2.5 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-[15px] text-[#2e2e2e] mt-2.5 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  <ul
                    className={
                      isHeroFeature
                        ? 'lg:col-span-6 lg:pt-0 lg:border-t-0 lg:pl-8 lg:border-l border-t pt-5 border-[#e9eff2] space-y-3'
                        : 'mt-5 pt-5 border-t border-[#e9eff2] space-y-2.5'
                    }
                  >
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-[#2e2e2e] leading-snug"
                      >
                        <Check
                          className="h-4 w-4 text-[#00749c] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeInUpOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ServiceCarePlansOverviewSection({
  carePlans,
  surface = 'white',
}: {
  carePlans: NonNullable<DedicatedServicePageConfig['carePlansSection']>;
  surface?: SectionSurface;
}) {
  return (
    <section
      id={carePlans.id}
      className={`scroll-mt-20 py-16 lg:py-20 ${getSectionSurfaceClasses(surface)}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow={carePlans.eyebrow}
          title={carePlans.title}
          description={carePlans.description}
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {carePlans.plans.map((tier, idx) => (
            <FadeInUpOnScroll key={tier.id} delay={idx * 0.04} className="flex">
              <article
                className={`wpc-studio-card w-full rounded-2xl border overflow-hidden flex flex-col justify-between ${
                  tier.highlighted
                    ? 'bg-[#f7f9fa] border-[#00749c] ring-1 ring-[#00749c]/25'
                    : 'bg-white border-[#dde6eb] hover:border-[#b9ccd6]'
                }`}
              >
                <div>
                  {tier.highlighted && (
                    <div className="bg-[#003b4f] px-6 py-2.5 flex items-center justify-between text-xs font-mono">
                      <span className="font-semibold uppercase tracking-wider text-[#00b2d4]">
                        Recommended Tier
                      </span>
                      <span className="text-white/80">Growth &amp; Speed</span>
                    </div>
                  )}

                  <div className="p-7 sm:p-8">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#003b4f]">
                        {tier.name}
                      </h3>
                    </div>
                    <p className="text-xs text-[#6c757d] mt-1">{tier.audience}</p>

                    <p className="mt-5 pb-5 border-b border-[#e9eff2] text-lg font-mono font-bold text-[#00749c]">
                      {tier.pricingLabel}
                    </p>

                  <p className="mt-4 text-sm text-[#2e2e2e] leading-relaxed">
                    {tier.summary}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {tier.highlights.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-sm text-[#2e2e2e] leading-snug"
                      >
                        <Check
                          className="h-4 w-4 text-[#00749c] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                </div>

                <div className="px-7 sm:px-8 pb-7 sm:pb-8 pt-5 border-t border-[#e9eff2]">
                  <Button
                    href={`mailto:${BRAND_INFO.email}?subject=${encodeURIComponent(
                      `Website Care Enquiry — ${tier.name}`
                    )}`}
                    variant={tier.highlighted ? 'primary' : 'secondary'}
                    size="md"
                    className="w-full"
                  >
                    <span>{tier.pricingLabel}</span>
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </Button>
                </div>
              </article>
            </FadeInUpOnScroll>
          ))}
        </div>

        <aside
          id="one-off-fixes"
          className="scroll-mt-24 mt-8 rounded-2xl border border-[#b9ccd6] bg-[#f7f9fa] p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
        >
          <div className="flex items-start gap-4 max-w-2xl">
            <div className="h-11 w-11 rounded-xl bg-[#00749c]/10 text-[#00749c] flex items-center justify-center shrink-0">
              <Wrench className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00749c]">
                {carePlans.quickFixEyebrow}
              </p>
              <h3 className="text-lg sm:text-xl font-bold text-[#003b4f] mt-1">
                {carePlans.quickFixTitle}
              </h3>
              <p className="text-sm text-[#2e2e2e] mt-1.5 leading-relaxed">
                {carePlans.quickFixDescription}
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <Button
              href={`mailto:${BRAND_INFO.email}?subject=${encodeURIComponent(
                carePlans.quickFixSubject
              )}`}
              variant="primary"
              size="md"
              className="w-full sm:w-auto"
            >
              <span>{carePlans.quickFixButtonLabel}</span>
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Button>
          </div>
        </aside>
      </div>
    </section>
  );
}

export function ServiceTechnicalGridSection({
  technical,
  surface = 'white',
}: {
  technical: DedicatedServicePageConfig['technicalSection'];
  surface?: SectionSurface;
}) {
  const cardBg = getCardSurfaceClasses(surface);

  return (
    <section
      id={technical.id}
      className={`scroll-mt-20 py-16 lg:py-20 ${getSectionSurfaceClasses(surface)}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow={technical.eyebrow}
          title={technical.title}
          description={technical.description}
        />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {technical.pillars.map((pillar, idx) => {
            const isEmergencyTriage = pillar.id === 'care-emergency';
            return (
              <FadeInUpOnScroll key={pillar.id} delay={idx * 0.04} className="flex">
                <article
                  id={pillar.id}
                  className={`scroll-mt-24 w-full rounded-2xl border transition-colors duration-200 p-6 sm:p-7 flex flex-col justify-between ${
                    isEmergencyTriage
                      ? 'border-[#00749c] bg-[#f2f7f9] hover:border-[#003b4f]'
                      : `border-[#dde6eb] ${cardBg} hover:border-[#00749c]`
                  }`}
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-[#00749c] tabular-nums">
                          {pillar.index}
                        </span>
                        <span aria-hidden="true" className="text-[#6c757d]">
                          ·
                        </span>
                        <span className="font-semibold uppercase tracking-wider text-[#6c757d]">
                          {pillar.eyebrow}
                        </span>
                      </div>
                      {isEmergencyTriage && (
                        <span className="font-semibold text-[#00749c] uppercase tracking-wider">
                          Urgent Support Pathway
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-[#003b4f] mt-2.5 leading-snug">
                      {pillar.title}
                    </h3>

                    <p className="text-sm sm:text-[15px] text-[#2e2e2e] mt-2.5 leading-relaxed">
                      {pillar.summary}
                    </p>

                    <ul className="mt-5 pt-5 border-t border-[#dde6eb] space-y-2.5">
                      {pillar.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2.5 text-sm text-[#2e2e2e] leading-snug"
                        >
                          <Check
                            className="h-4 w-4 text-[#00749c] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {pillar.calloutLabel && pillar.calloutText && (
                    <div className="mt-6 pt-4 border-t border-[#dde6eb] text-xs leading-relaxed">
                      <span className="font-mono font-semibold text-[#00749c]">
                        {pillar.calloutLabel}:{' '}
                      </span>
                      <span className="text-[#2e2e2e]">{pillar.calloutText}</span>
                    </div>
                  )}
                </article>
              </FadeInUpOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ServiceProcessAndTrustSection({
  process,
  whyChoose,
}: {
  process: DedicatedServicePageConfig['processSection'];
  whyChoose: DedicatedServicePageConfig['whyChooseSection'];
}) {
  return (
    <>
      <section
        id={process.id}
        className="scroll-mt-24 py-18 lg:py-24 bg-[#003b4f] bg-deep-teal-grid text-white border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            align="center"
            eyebrow={process.eyebrow}
            title={process.title}
            description={process.description}
            tone="dark"
          />

          <ol className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {process.steps.map((step) => (
              <li
                key={step.step}
                className="group rounded-2xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.07] hover:border-[#00b2d4]/60 transition-all duration-200 p-6 sm:p-7 flex flex-col justify-between min-h-[240px]"
              >
                <div>
                  <p className="text-xs font-mono text-[#00b2d4]">
                    {step.deliverable}
                  </p>
                  <h3 className="text-xl font-semibold text-white mt-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/80 mt-3 leading-relaxed">
                    {step.summary}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/10 flex items-end justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-white/60">
                    Stage
                  </span>
                  <span className="font-display text-3xl font-semibold text-[#00b2d4]/50 group-hover:text-[#00b2d4] transition-colors tabular-nums leading-none">
                    .{step.step.replace('.', '')}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id={whyChoose.id}
        className="scroll-mt-24 py-18 lg:py-24 bg-[#f7f9fa] border-b border-[#dde6eb]"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <SectionHeading
              eyebrow={whyChoose.eyebrow}
              title={whyChoose.title}
              description={whyChoose.description}
            />
          </div>

          <div className="lg:col-span-7 divide-y divide-[#dde6eb] border-t border-b border-[#dde6eb]">
            {whyChoose.items.map((item) => (
              <article
                key={item.title}
                className="group py-7 sm:py-8 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-start"
              >
                <div className="sm:col-span-2">
                  <span className="font-display text-2xl font-semibold text-[#00749c]/45 group-hover:text-[#00749c] transition-colors tabular-nums">
                    {item.index}
                  </span>
                </div>
                <div className="sm:col-span-10 space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#003b4f] leading-snug">
                      {item.title}
                    </h3>
                    <span className="text-xs font-mono text-[#6c757d]">
                      {item.standard}
                    </span>
                  </div>
                  <p className="text-sm sm:text-[15px] text-[#2e2e2e] leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function ServiceFaqAndRelatedSection({
  faqSection,
  relatedSection,
  onNavigatePath,
  onNavigateHome,
}: {
  faqSection: DedicatedServicePageConfig['faqSection'];
  relatedSection: DedicatedServicePageConfig['relatedSection'];
  onNavigatePath: (path: string) => void;
  onNavigateHome: (hash?: string) => void;
}) {
  return (
    <>
      <section
        id={faqSection.id}
        className="scroll-mt-20 py-16 lg:py-20 bg-white border-b border-[#dde6eb]"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <SectionHeading
              eyebrow={faqSection.eyebrow}
              title={faqSection.title}
              description={faqSection.description}
            />
          </div>

          <div className="lg:col-span-8">
            <FaqAccordion items={faqSection.faqs} />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[#f7f9fa]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow={relatedSection.eyebrow}
            title={relatedSection.title}
            actions={
              <Button
                href="/services/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigatePath('/services/');
                }}
                variant="secondary"
                size="sm"
              >
                All Services Hub
              </Button>
            }
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {relatedSection.items.map((item) => (
              <a
                key={item.title}
                href={item.targetType === 'route' ? item.href : `/${item.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.targetType === 'route') {
                    onNavigatePath(item.href);
                  } else {
                    onNavigateHome(item.href);
                  }
                }}
                className="group w-full rounded-2xl border border-[#dde6eb] bg-white hover:border-[#00749c] hover:-translate-y-0.5 transition-all duration-200 p-6 sm:p-7 flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c]"
              >
                <div>
                  <p className="text-xs font-mono font-semibold text-[#00749c] uppercase tracking-wider">
                    {item.eyebrow}
                  </p>
                  <h3 className="text-lg font-bold text-[#003b4f] mt-2 group-hover:text-[#00749c] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#2e2e2e] mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <span className="mt-5 pt-4 border-t border-[#e9eff2] inline-flex items-center gap-1.5 min-h-[44px] text-xs font-semibold text-[#00749c]">
                  <span>{item.ctaLabel}</span>
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
