import { useState, type KeyboardEvent, type MouseEvent } from 'react';
import { ArrowRight, Check, Wrench, Zap } from 'lucide-react';
import {
  BRAND_INFO,
  CARE_PLAN_TIERS,
  CORE_SERVICE_TRACKS,
} from '../../data/homepageData';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';

interface ServicesSectionsProps {
  onExploreService: (slug: string) => void;
  onNavigatePath?: (path: string) => void;
  onJumpToSection: (hash: string) => void;
}

export function ServicesSections({
  onExploreService,
  onNavigatePath,
  onJumpToSection,
}: ServicesSectionsProps) {
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const [archFailed, setArchFailed] = useState(false);

  const activeTrack = CORE_SERVICE_TRACKS[activeTrackIndex] ?? CORE_SERVICE_TRACKS[0];
  const seoAiSearchTrack = CORE_SERVICE_TRACKS[4];

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveTrackIndex((index + 1) % CORE_SERVICE_TRACKS.length);
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveTrackIndex(
        (index - 1 + CORE_SERVICE_TRACKS.length) % CORE_SERVICE_TRACKS.length
      );
    }
  };

  return (
    <>
      {/* Section 3: Interactive Service Capabilities Explorer */}
      <section
        id="services-overview"
        className="scroll-mt-20 py-16 lg:py-20 bg-[#f7f9fa] border-b border-[#dde6eb]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Capabilities"
            title="Five focused disciplines engineered cleanly together."
            description="Select a track to inspect deliverables and platform standards, or open its full specification."
            actions={
              onNavigatePath ? (
                <Button
                  href="/services/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigatePath('/services/');
                  }}
                  variant="secondary"
                  size="md"
                >
                  View Full Services Directory
                </Button>
              ) : undefined
            }
          />

          {/* Interactive Tablist + Active Specification Panel */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <div
              role="tablist"
              aria-label="WPCarePoint Core Services"
              className="lg:col-span-5 rounded-2xl border border-[#dde6eb] bg-white divide-y divide-[#e9eff2] overflow-hidden"
            >
              {CORE_SERVICE_TRACKS.map((track, idx) => {
                const isSelected = idx === activeTrackIndex;
                return (
                  <button
                    key={track.id}
                    id={`tab-${track.id}`}
                    role="tab"
                    type="button"
                    aria-selected={isSelected}
                    aria-controls={`panel-${track.id}`}
                    tabIndex={isSelected ? 0 : -1}
                    onClick={() => setActiveTrackIndex(idx)}
                    onKeyDown={(e) => handleTabKeyDown(e, idx)}
                    className={`w-full text-left px-5 py-4 transition-colors flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#00749c] ${
                      isSelected ? 'bg-[#003b4f] text-white' : 'bg-white hover:bg-[#f2f7f9] text-[#003b4f]'
                    }`}
                  >
                    <div className="min-w-0">
                      <span
                        className={`text-xs font-mono font-semibold tabular-nums ${
                          isSelected ? 'text-[#00b2d4]' : 'text-[#00749c]'
                        }`}
                      >
                        {track.index} {track.subtitle}
                      </span>
                      <p className="text-base font-bold mt-0.5 leading-snug">
                        {track.title}
                      </p>
                    </div>
                    <ArrowRight
                      className={`h-4 w-4 shrink-0 transition-transform ${
                        isSelected ? 'text-[#00b2d4] translate-x-0.5' : 'text-[#6c757d]'
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-7">
              <div
                id={`panel-${activeTrack.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeTrack.id}`}
                className="rounded-2xl border border-[#dde6eb] bg-white p-6 sm:p-8 space-y-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e9eff2] pb-4">
                  <div>
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00749c]">
                      {activeTrack.index} {activeTrack.subtitle}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#003b4f] mt-1">
                      {activeTrack.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#6c757d]">
                    {activeTrack.standards}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#2e2e2e] leading-relaxed">
                  {activeTrack.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {activeTrack.deliverables.map((item) => (
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

                <div className="pt-4 border-t border-[#e9eff2] flex flex-wrap items-center justify-between gap-4">
                  <Button
                    href={activeTrack.routePath || `/services/${activeTrack.serviceSlug}/`}
                    onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                      e.preventDefault();
                      if (activeTrack.routePath && onNavigatePath) {
                        onNavigatePath(activeTrack.routePath);
                      } else if (activeTrack.serviceSlug) {
                        onExploreService(activeTrack.serviceSlug);
                      }
                    }}
                    variant="primary"
                    size="md"
                  >
                    <span>Explore {activeTrack.title}</span>
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </Button>

                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      onJumpToSection('#contact');
                    }}
                    className="inline-flex items-center min-h-[44px] text-xs font-semibold text-[#6c757d] hover:text-[#003b4f] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded-md px-2"
                  >
                    Discuss this track by email →
                  </a>
                </div>
              </div>

              {/* Direct Crawlable Index Strip Across Core Routes */}
              <div className="mt-5 rounded-2xl border border-[#dde6eb] bg-white p-5 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                <div className="sm:col-span-5 aspect-[16/10] rounded-xl overflow-hidden bg-[#eef3f6] border border-[#e9eff2]">
                  {archFailed ? (
                    <div className="w-full h-full flex items-center justify-center p-4 text-xs text-[#6c757d]">
                      {BRAND_INFO.architectureImageAlt}
                    </div>
                  ) : (
                    <img
                      src={BRAND_INFO.architectureImageUrl}
                      alt={BRAND_INFO.architectureImageAlt}
                      width={1200}
                      height={896}
                      loading="lazy"
                      decoding="async"
                      onError={() => setArchFailed(true)}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="sm:col-span-7 space-y-2.5">
                  <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00749c]">
                    Engineering Principle
                  </p>
                  <p className="text-base font-bold text-[#003b4f] leading-snug">
                    Lean codebases engineered for direct team ownership.
                  </p>
                  <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-[#00749c]">
                    {CORE_SERVICE_TRACKS.map((t) => (
                      <li key={t.id}>
                        <a
                          href={t.routePath || '#'}
                          onClick={(e) => {
                            if (t.routePath && onNavigatePath) {
                              e.preventDefault();
                              onNavigatePath(t.routePath);
                            }
                          }}
                          className="inline-flex items-center min-h-[36px] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded"
                        >
                          {t.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Website Care & Technical Support */}
      <section
        id="website-care"
        className="scroll-mt-20 py-16 lg:py-20 bg-white border-b border-[#dde6eb]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Website Care & Support"
            title="Predictable maintenance to keep business sites backed up and stable."
            description="Three scoped tiers without hidden add-ons—plus one-off WordPress repairs and emergency triage."
            actions={
              onNavigatePath ? (
                <Button
                  href="/services/website-care-support/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigatePath('/services/website-care-support/');
                  }}
                  variant="secondary"
                  size="md"
                >
                  Full Care Specification
                </Button>
              ) : undefined
            }
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {CARE_PLAN_TIERS.map((tier) => (
              <article
                key={tier.id}
                className={`w-full rounded-2xl border p-6 sm:p-7 flex flex-col justify-between transition-colors ${
                  tier.highlighted
                    ? 'bg-[#f7f9fa] border-[#00749c]'
                    : 'bg-white border-[#dde6eb] hover:border-[#b9ccd6]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-[#003b4f]">{tier.name}</h3>
                    {tier.highlighted && (
                      <span className="text-xs font-mono font-semibold text-[#00749c]">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#6c757d] mt-1">{tier.audience}</p>

                  <p className="mt-4 pb-4 border-b border-[#e9eff2] text-lg font-mono font-bold text-[#00749c]">
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

                <div className="mt-6 pt-5 border-t border-[#e9eff2]">
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
            ))}
          </div>

          {/* Decision #16: Compact One-Off WordPress Quick Fix Pathway */}
          <aside
            id="quick-fix"
            className="scroll-mt-24 mt-8 rounded-2xl border border-[#b9ccd6] bg-[#f7f9fa] p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
          >
            <div className="flex items-start gap-4 max-w-2xl">
              <div className="h-11 w-11 rounded-xl bg-[#00749c]/10 text-[#00749c] flex items-center justify-center shrink-0">
                <Wrench className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00749c]">
                  One-Off Repairs &amp; Emergency Triage
                </p>
                <h3 className="text-lg sm:text-xl font-bold text-[#003b4f] mt-1">
                  Need a standalone WordPress fix or malware triage?
                </h3>
                <p className="text-sm text-[#2e2e2e] mt-1.5 leading-relaxed">
                  Resolve plugin conflicts, fatal PHP errors, broken layouts, or suspected
                  security incidents without locking into a monthly retainer.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              {onNavigatePath && (
                <a
                  href="/services/website-care-support/#care-emergency"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigatePath('/services/website-care-support/#care-emergency');
                  }}
                  className="inline-flex items-center justify-center min-h-[44px] px-4 text-xs font-semibold text-[#003b4f] hover:text-[#00749c] transition-colors rounded-xl border border-[#dde6eb] bg-white"
                >
                  Emergency Triage Details
                </a>
              )}
              <Button
                href={`mailto:${BRAND_INFO.email}?subject=${encodeURIComponent(
                  'WordPress Quick Fix Request'
                )}`}
                variant="primary"
                size="md"
              >
                <span>Request Quick Fix</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {/* Section 5: Speed, Technical SEO & AI Search Spotlight */}
      <section
        id="seo-ai-search"
        className="scroll-mt-20 py-16 lg:py-20 bg-[#f7f9fa] border-b border-[#dde6eb]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-6 space-y-5">
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00749c]">
                Speed, Technical SEO &amp; AI Search
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#003b4f] leading-tight text-balance">
                Faster Core Web Vitals and structured clarity for Google UK and AI search.
              </h2>
              <p className="text-base text-[#2e2e2e] leading-relaxed">
                {seoAiSearchTrack.description}
              </p>
              <ul className="space-y-2.5 pt-2">
                {seoAiSearchTrack.deliverables.map((item) => (
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
              <div className="pt-3 flex flex-wrap gap-4">
                <Button
                  href="/services/ai-search-optimisation/"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigatePath) {
                      onNavigatePath('/services/ai-search-optimisation/');
                    } else {
                      onExploreService('ai-search-optimisation');
                    }
                  }}
                  variant="secondary"
                  size="md"
                >
                  <span>SEO &amp; AI Search Details</span>
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <aside className="rounded-2xl border border-[#b9ccd6] bg-white p-6 sm:p-8 space-y-5">
                <div className="flex items-center gap-2 text-[#00749c]">
                  <Zap className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                    WordPress Speed Optimisation
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#003b4f] leading-snug">
                  Diagnostic Core Web Vitals tuning—without brittle caching tricks.
                </h3>

                <p className="text-sm text-[#2e2e2e] leading-relaxed">
                  We trace genuine slowdowns across images, theme scripts, autoloaded SQL tables,
                  and UK server TTFB, then apply verified fixes safely in staging.
                </p>

                <dl className="divide-y divide-[#e9eff2] border-t border-[#e9eff2] text-sm">
                  <div className="py-3">
                    <dt className="font-semibold text-[#003b4f]">
                      LCP, INP &amp; CLS Engineering
                    </dt>
                    <dd className="text-[#6c757d] mt-0.5">
                      Targeted image delivery, font preloads, and zero layout shift on mobile.
                    </dd>
                  </div>
                  <div className="py-3">
                    <dt className="font-semibold text-[#003b4f]">
                      WooCommerce-Safe Caching
                    </dt>
                    <dd className="text-[#6c757d] mt-0.5">
                      Dynamic baskets, forms, and nonces kept safely excluded and tested live.
                    </dd>
                  </div>
                </dl>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href="/wordpress-speed-optimisation/"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onNavigatePath) {
                        onNavigatePath('/wordpress-speed-optimisation/');
                      } else {
                        onJumpToSection('#contact');
                      }
                    }}
                    className="inline-flex items-center gap-1.5 min-h-[44px] text-sm font-semibold text-[#00749c] hover:text-[#003b4f] transition-colors group"
                  >
                    <span>Explore WordPress Speed</span>
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      onJumpToSection('#contact');
                    }}
                    className="inline-flex items-center min-h-[44px] text-xs font-semibold text-[#6c757d] hover:text-[#003b4f]"
                  >
                    Request Speed Audit
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
