import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Cpu,
  Layers,
  SearchCheck,
  ShieldCheck,
  ShoppingBag,
  Wrench,
} from 'lucide-react';
import { SERVICES_HUB_DATA } from '../../data/servicesHubData';
import { BRAND_INFO, FIVERR_PROOF_LINKS } from '../../data/homepageData';
import { applyRouteSeo } from '../../utils/routeSeo';
import { FadeInUpOnScroll, Reveal } from '../MotionPrimitives';
import { Button } from '../ui/Button';
import { CtaSection } from '../ui/CtaSection';
import { FaqAccordion } from '../ui/FaqAccordion';
import { SectionHeading } from '../ui/SectionHeading';

interface ServicesHubViewProps {
  onNavigateHome: (hash?: string) => void;
  onNavigatePath: (path: string) => void;
}

function getTrackIcon(id: string) {
  switch (id) {
    case 'website-development':
      return Code2;
    case 'ecommerce-development':
      return ShoppingBag;
    case 'ai-automation':
      return Cpu;
    case 'website-care':
      return ShieldCheck;
    case 'seo-ai-search':
      return SearchCheck;
    default:
      return Wrench;
  }
}

export function ServicesHubView({
  onNavigateHome,
  onNavigatePath,
}: ServicesHubViewProps) {
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    const activeHash = window.location.hash.replace(/^#/, '');
    if (activeHash) {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          document.getElementById(activeHash)?.scrollIntoView({ behavior: 'smooth' });
        });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    applyRouteSeo({
      title: SERVICES_HUB_DATA.metaTitle,
      description: SERVICES_HUB_DATA.metaDescription,
      canonicalUrl: SERVICES_HUB_DATA.canonicalUrl,
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'CollectionPage',
            name: SERVICES_HUB_DATA.metaTitle,
            url: SERVICES_HUB_DATA.canonicalUrl,
            description: SERVICES_HUB_DATA.metaDescription,
            inLanguage: 'en-GB',
            isPartOf: {
              '@type': 'WebSite',
              name: BRAND_INFO.name,
              url: 'https://wpcarepoint.co.uk/',
            },
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: [
                ...SERVICES_HUB_DATA.coreTracksSection.tracks.map((track) => ({
                  name: track.title,
                  url: `https://wpcarepoint.co.uk${track.routePath}`,
                })),
                ...SERVICES_HUB_DATA.supportingExpertiseSection.items
                  .filter((item) => Boolean(item.href) && !item.href?.includes('#'))
                  .map((item) => ({
                    name: item.title,
                    url: `https://wpcarepoint.co.uk${item.href}`,
                  })),
              ].map((entry, idx) => ({
                '@type': 'ListItem',
                position: idx + 1,
                name: entry.name,
                url: entry.url,
              })),
            },
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://wpcarepoint.co.uk/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Services',
                item: SERVICES_HUB_DATA.canonicalUrl,
              },
            ],
          },
          {
            '@type': 'FAQPage',
            mainEntity: SERVICES_HUB_DATA.faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          },
        ],
      },
    });
  }, []);

  const jumpToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <article>
      {/* Section 1: Studio Services Hero */}
      <section className="bg-gradient-to-b from-[#f7f9fa] via-[#f7f9fa] to-white bg-architectural-grid border-b border-[#dde6eb]">
        <div className="max-w-7xl mx-auto px-6 pt-8 pb-14 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs text-[#6c757d] mb-6 sm:mb-8"
          >
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
              }}
              className="inline-flex items-center min-h-[44px] text-[#6c757d] hover:text-[#00749c] hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded-md"
            >
              Home
            </a>
            <span aria-hidden="true">/</span>
            <span className="font-semibold text-[#003b4f]" aria-current="page">
              Services
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 wpc-route-enter">
              <div className="inline-flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-6 bg-[#b9ccd6]" />
                <p className="text-xs font-mono font-semibold tracking-[0.12em] uppercase text-[#00749c]">
                  {SERVICES_HUB_DATA.eyebrow}
                </p>
              </div>

              <h1
                className="font-semibold tracking-[-0.03em] text-[#003b4f] mt-3.5 text-balance"
                style={{
                  fontSize: 'clamp(2.15rem, 4vw, 3.45rem)',
                  lineHeight: 1.07,
                }}
              >
                {SERVICES_HUB_DATA.headline}
              </h1>

              <p className="text-base sm:text-[18px] text-[#2e2e2e] mt-5 leading-relaxed max-w-xl">
                {SERVICES_HUB_DATA.description}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4">
                <Button
                  href="/contact/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigatePath('/contact/');
                  }}
                  variant="primary"
                  size="lg"
                  className="group pr-3 pl-6"
                >
                  <span>Book a Consultation</span>
                  <span
                    aria-hidden="true"
                    className="h-8 w-8 rounded-full bg-white text-[#003b4f] inline-flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Button>

                <Button
                  href="#core-services"
                  onClick={(e) => {
                    e.preventDefault();
                    jumpToSection('core-services');
                  }}
                  variant="secondary"
                  size="lg"
                >
                  Explore Core Categories
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <figure className="group relative rounded-3xl overflow-hidden border border-[#dde6eb] bg-[#eef3f6] shadow-[0_18px_40px_-24px_rgba(0,59,79,0.2)]">
                <div className="aspect-[16/10] overflow-hidden bg-[#eef3f6]">
                  {imgFailed ? (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-[#6c757d]">
                      <Layers className="h-8 w-8 mb-2 text-[#00749c]" aria-hidden="true" />
                      <p className="text-xs font-medium text-center">
                        {SERVICES_HUB_DATA.heroImageAlt}
                      </p>
                    </div>
                  ) : (
                    <img
                      src={SERVICES_HUB_DATA.heroImageUrl}
                      alt={SERVICES_HUB_DATA.heroImageAlt}
                      width={1376}
                      height={768}
                      loading="eager"
                      decoding="sync"
                      fetchPriority="high"
                      referrerPolicy="no-referrer"
                      onError={() => setImgFailed(true)}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  )}
                </div>
                <figcaption className="px-6 py-4 bg-white border-t border-[#e9eff2] text-xs font-medium text-[#6c757d]">
                  {SERVICES_HUB_DATA.heroImageCaption}
                </figcaption>
              </figure>
            </div>
          </div>

          <dl className="mt-12 pt-8 border-t border-[#dde6eb] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {SERVICES_HUB_DATA.standards.map((item) => (
              <div key={item.label}>
                <dt className="text-[11px] font-mono uppercase tracking-[0.1em] text-[#6c757d]">
                  {item.label}
                </dt>
                <dd className="text-base sm:text-[17px] font-semibold text-[#003b4f] mt-1.5">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Section 2: Service Overview */}
      <section
        id={SERVICES_HUB_DATA.overview.id}
        className="scroll-mt-24 py-16 lg:py-20 bg-[#f7f9fa] border-b border-[#dde6eb]"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <Reveal className="lg:col-span-5">
            <div className="inline-flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-6 bg-[#b9ccd6]" />
              <p className="text-xs font-mono font-semibold uppercase tracking-[0.12em] text-[#00749c]">
                {SERVICES_HUB_DATA.overview.eyebrow}
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.15rem] font-semibold tracking-[-0.025em] text-[#003b4f] mt-3 leading-[1.15] text-balance">
              {SERVICES_HUB_DATA.overview.title}
            </h2>
          </Reveal>

          <Reveal delay={0.05} className="lg:col-span-7 space-y-4">
            {SERVICES_HUB_DATA.overview.paragraphs.map((p) => (
              <p
                key={p}
                className="text-base text-[#2e2e2e] leading-relaxed"
              >
                {p}
              </p>
            ))}

            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#dde6eb] text-sm">
              <a
                href={FIVERR_PROOF_LINKS.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 min-h-[44px] sm:min-h-0 font-semibold text-[#00749c] hover:text-[#003b4f] transition-colors"
              >
                <span>Inspect Fiverr Portfolio (@hdhiren)</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
              <a
                href={FIVERR_PROOF_LINKS.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 min-h-[44px] sm:min-h-0 font-semibold text-[#003b4f] hover:text-[#00749c] transition-colors"
              >
                <span>Read Client Reviews on Fiverr</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 3: Five Core Service Categories (Studio Bento) */}
      <section
        id={SERVICES_HUB_DATA.coreTracksSection.id}
        className="scroll-mt-24 py-18 lg:py-24 bg-white border-b border-[#dde6eb]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow={SERVICES_HUB_DATA.coreTracksSection.eyebrow}
            title={SERVICES_HUB_DATA.coreTracksSection.title}
            description={SERVICES_HUB_DATA.coreTracksSection.description}
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {SERVICES_HUB_DATA.coreTracksSection.tracks.map((track, idx) => {
              const Icon = getTrackIcon(track.id);
              const spanClass =
                idx < 2 ? 'lg:col-span-6' : 'lg:col-span-4';

              return (
                <FadeInUpOnScroll
                  key={track.id}
                  delay={idx * 0.04}
                  className={`flex ${spanClass}`}
                >
                  <article className="group wpc-studio-card w-full rounded-2xl border border-[#dde6eb] bg-[#f7f9fa] hover:bg-white hover:border-[#00749c] p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-2 text-xs font-mono">
                          <span className="font-bold text-[#00749c] tabular-nums">
                            {track.index}
                          </span>
                          <span aria-hidden="true" className="text-[#6c757d]">
                            ·
                          </span>
                          <span className="font-medium text-[#6c757d]">
                            {track.subtitle}
                          </span>
                        </div>
                        <span className="h-10 w-10 rounded-xl bg-white border border-[#dde6eb] group-hover:border-[#00749c]/40 text-[#00749c] inline-flex items-center justify-center shrink-0 transition-colors">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#003b4f] mt-4 leading-snug group-hover:text-[#00749c] transition-colors">
                        {track.title}
                      </h3>

                      <p className="text-sm sm:text-[15px] text-[#2e2e2e] mt-3 leading-relaxed">
                        {track.description}
                      </p>

                      <ul className="mt-5 pt-5 border-t border-[#dde6eb] space-y-2.5">
                        {track.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-[#2e2e2e] leading-snug"
                          >
                            <Check
                              className="h-4 w-4 text-[#00749c] shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-5 border-t border-[#dde6eb] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <span className="text-xs font-mono text-[#6c757d]">
                        {track.standards}
                      </span>
                      <a
                        href={track.routePath || '#'}
                        onClick={(e) => {
                          if (track.routePath) {
                            e.preventDefault();
                            onNavigatePath(track.routePath);
                          }
                        }}
                        className="inline-flex items-center gap-1.5 min-h-[44px] sm:min-h-0 text-sm font-semibold text-[#00749c] hover:text-[#003b4f] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded-md"
                      >
                        <span>Explore {track.title.split(' ')[0]} Service</span>
                        <ArrowRight
                          className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </article>
                </FadeInUpOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Supporting Technical Expertise */}
      <section
        id={SERVICES_HUB_DATA.supportingExpertiseSection.id}
        className="scroll-mt-24 py-18 lg:py-24 bg-[#f7f9fa] border-b border-[#dde6eb]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow={SERVICES_HUB_DATA.supportingExpertiseSection.eyebrow}
            title={SERVICES_HUB_DATA.supportingExpertiseSection.title}
            description={SERVICES_HUB_DATA.supportingExpertiseSection.description}
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {SERVICES_HUB_DATA.supportingExpertiseSection.items.map((item, idx) => {
              const isLeadCard = idx === 0;
              return (
                <FadeInUpOnScroll
                  key={item.title}
                  delay={idx * 0.03}
                  className={`flex ${isLeadCard ? 'md:col-span-2 lg:col-span-3' : ''}`}
                >
                  <article
                    className={`wpc-studio-card w-full rounded-2xl border border-[#dde6eb] bg-white hover:border-[#00749c] p-6 sm:p-7 ${
                      isLeadCard
                        ? 'flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6'
                        : 'flex flex-col justify-between'
                    }`}
                  >
                    <div className={isLeadCard ? 'max-w-3xl' : ''}>
                      <div className="flex items-center gap-2 text-xs font-mono">
                        <span className="font-bold text-[#00749c] tabular-nums">
                          {item.index}
                        </span>
                        <span aria-hidden="true" className="text-[#6c757d]">
                          ·
                        </span>
                        <span className="text-[#6c757d]">{item.category}</span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-[#003b4f] mt-2.5 leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-sm text-[#2e2e2e] mt-2.5 leading-relaxed">
                        {item.summary}
                      </p>
                    </div>

                    {item.href && item.ctaLabel ? (
                      <div
                        className={
                          isLeadCard
                            ? 'shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 lg:pl-6 lg:border-l border-[#e9eff2]'
                            : 'mt-5 pt-4 border-t border-[#e9eff2]'
                        }
                      >
                        <a
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            onNavigatePath(item.href!);
                          }}
                          className="inline-flex items-center gap-1.5 min-h-[44px] sm:min-h-0 text-xs font-semibold text-[#00749c] hover:text-[#003b4f] transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded-md"
                        >
                          <span>{item.ctaLabel}</span>
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      </div>
                    ) : (
                      <div className="mt-5 pt-4 border-t border-[#e9eff2] text-xs font-mono text-[#6c757d]">
                        Scoped directly per website requirements
                      </div>
                    )}
                  </article>
                </FadeInUpOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5: How We Work (Architectural Studio Cards) */}
      <section
        id={SERVICES_HUB_DATA.processSection.id}
        className="scroll-mt-24 py-18 lg:py-24 bg-[#003b4f] bg-deep-teal-grid text-white border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            align="center"
            eyebrow={SERVICES_HUB_DATA.processSection.eyebrow}
            title={SERVICES_HUB_DATA.processSection.title}
            description={SERVICES_HUB_DATA.processSection.description}
            tone="dark"
          />

          <ol className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {SERVICES_HUB_DATA.processSection.steps.map((step) => (
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

      {/* Section 6: Why Choose WPCarePoint (Editorial Ledger) */}
      <section
        id={SERVICES_HUB_DATA.principlesSection.id}
        className="scroll-mt-24 py-18 lg:py-24 bg-[#f7f9fa] border-b border-[#dde6eb]"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <SectionHeading
              eyebrow={SERVICES_HUB_DATA.principlesSection.eyebrow}
              title={SERVICES_HUB_DATA.principlesSection.title}
              description={SERVICES_HUB_DATA.principlesSection.description}
            />
          </div>

          <div className="lg:col-span-7 divide-y divide-[#dde6eb] border-t border-b border-[#dde6eb]">
            {SERVICES_HUB_DATA.principlesSection.items.map((item) => (
              <article
                key={item.index}
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

      {/* Section 7: Frequently Asked Questions */}
      <section
        id="services-faq"
        className="scroll-mt-24 py-18 lg:py-24 bg-white border-b border-[#dde6eb]"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <SectionHeading
              eyebrow="Services FAQ"
              title="Practical answers on choosing and scoping services."
              description="Clear detail on platform recommendations, fixed scoping, SEO care, and automation governance."
            />
          </div>

          <div className="lg:col-span-8">
            <FaqAccordion items={SERVICES_HUB_DATA.faqs} />
          </div>
        </div>
      </section>

      {/* Section 8: Final Contact CTA */}
      <CtaSection
        id="contact"
        eyebrow={SERVICES_HUB_DATA.cta.eyebrow}
        headline={SERVICES_HUB_DATA.cta.headline}
        description={SERVICES_HUB_DATA.cta.description}
        mailtoSubject={SERVICES_HUB_DATA.cta.mailtoSubject}
        primaryButtonLabel="Email contact@wpcarepoint.co.uk"
        contactRouteHref="/contact/"
        contactRouteLabel={SERVICES_HUB_DATA.cta.primaryButtonLabel}
        onNavigatePath={onNavigatePath}
      />
    </article>
  );
}
