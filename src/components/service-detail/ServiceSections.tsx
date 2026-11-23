import { ArrowRight, Check, ShieldCheck } from 'lucide-react';
import type { DedicatedServicePageConfig } from '../../data/dedicatedServicePagesData';
import { FadeInUpOnScroll, Reveal } from '../MotionPrimitives';
import { Button } from '../ui/Button';
import { FaqAccordion } from '../ui/FaqAccordion';
import { SectionHeading } from '../ui/SectionHeading';

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
              className={`inline-flex items-center min-h-[44px] sm:min-h-[36px] text-xs font-semibold transition-colors whitespace-nowrap ${
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
}: {
  intro: DedicatedServicePageConfig['introSection'];
}) {
  return (
    <section
      id={intro.id}
      className="scroll-mt-20 py-16 lg:py-20 bg-white border-b border-[#dde6eb]"
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
          <aside className="rounded-2xl border border-[#dde6eb] bg-[#f7f9fa] p-6 sm:p-8 space-y-5">
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

export function ServiceCapabilitiesSection({
  capabilities,
}: {
  capabilities: DedicatedServicePageConfig['capabilitiesSection'];
}) {
  return (
    <section
      id={capabilities.id}
      className="scroll-mt-20 py-16 lg:py-20 bg-[#f7f9fa] border-b border-[#dde6eb]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow={capabilities.eyebrow}
          title={capabilities.title}
          description={capabilities.description}
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {capabilities.items.map((item, idx) => (
            <FadeInUpOnScroll key={item.title} delay={idx * 0.04} className="flex">
              <article className="w-full rounded-2xl border border-[#dde6eb] bg-white hover:border-[#00749c] transition-colors duration-200 p-6 sm:p-7 flex flex-col justify-between">
                <div>
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

                <ul className="mt-5 pt-5 border-t border-[#e9eff2] space-y-2.5">
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
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceTechnicalGridSection({
  technical,
}: {
  technical: DedicatedServicePageConfig['technicalSection'];
}) {
  return (
    <section
      id={technical.id}
      className="scroll-mt-20 py-16 lg:py-20 bg-white border-b border-[#dde6eb]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow={technical.eyebrow}
          title={technical.title}
          description={technical.description}
        />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {technical.pillars.map((pillar, idx) => (
            <FadeInUpOnScroll key={pillar.id} delay={idx * 0.04} className="flex">
              <article
                id={pillar.id}
                className="scroll-mt-24 w-full rounded-2xl border border-[#dde6eb] bg-[#f7f9fa] hover:border-[#00749c] transition-colors duration-200 p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
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
          ))}
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
        className="scroll-mt-20 py-16 lg:py-20 bg-[#003b4f] bg-deep-teal-grid text-white border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow={process.eyebrow}
            title={process.title}
            description={process.description}
            tone="dark"
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {process.steps.map((step, idx) => (
              <FadeInUpOnScroll key={step.step} delay={idx * 0.05} className="flex">
                <article className="w-full rounded-2xl border border-white/15 bg-white/5 hover:border-[#00b2d4]/60 transition-colors duration-200 p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-sm font-mono font-bold text-[#00b2d4] tabular-nums">
                      {step.step}
                    </p>
                    <h3 className="text-lg font-bold text-white mt-2.5 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/80 mt-2.5 leading-relaxed">
                      {step.summary}
                    </p>
                  </div>
                  <p className="mt-5 pt-4 border-t border-white/15 text-xs font-mono text-[#00b2d4]">
                    {step.deliverable}
                  </p>
                </article>
              </FadeInUpOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section
        id={whyChoose.id}
        className="scroll-mt-20 py-16 lg:py-20 bg-[#f7f9fa] border-b border-[#dde6eb]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow={whyChoose.eyebrow}
            title={whyChoose.title}
            description={whyChoose.description}
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {whyChoose.items.map((item, idx) => (
              <FadeInUpOnScroll key={item.title} delay={idx * 0.04} className="flex">
                <article className="w-full rounded-2xl border border-[#dde6eb] bg-white hover:border-[#00749c] transition-colors duration-200 p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-mono font-semibold text-[#00749c] tabular-nums">
                      {item.index}
                    </p>
                    <h3 className="text-lg font-bold text-[#003b4f] mt-2.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#2e2e2e] mt-2.5 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                  <p className="mt-5 pt-4 border-t border-[#e9eff2] text-xs font-mono text-[#6c757d]">
                    {item.standard}
                  </p>
                </article>
              </FadeInUpOnScroll>
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
                href="/#services-overview"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateHome('#services-overview');
                }}
                variant="secondary"
                size="sm"
              >
                All Homepage Services
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
                className="group w-full rounded-2xl border border-[#dde6eb] bg-white hover:border-[#00749c] hover:-translate-y-0.5 transition-all duration-200 p-6 sm:p-7 flex flex-col justify-between"
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
