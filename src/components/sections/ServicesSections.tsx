import { useState } from 'react';
import { ArrowRight, Check, Wrench, Zap } from 'lucide-react';
import {
  BRAND_INFO,
  CARE_PLAN_TIERS,
  CORE_SERVICE_TRACKS,
} from '../../data/homepageData';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';
import { ServiceCard } from '../ui/ServiceCard';

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
  const [archFailed, setArchFailed] = useState(false);

  const webTrack = CORE_SERVICE_TRACKS[0];
  const ecommerceTrack = CORE_SERVICE_TRACKS[1];
  const aiAutomationTrack = CORE_SERVICE_TRACKS[2];
  const seoAiSearchTrack = CORE_SERVICE_TRACKS[4];

  return (
    <>
      {/* Section 3: Services Overview */}
      <section
        id="services-overview"
        className="scroll-mt-20 py-16 lg:py-20 bg-[#f7f9fa] border-b border-[#dde6eb]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Services Overview"
            title="Integrated web engineering, commerce, AI workflows, and ongoing care."
            description="Every engagement is built around maintainable architecture, clear ownership, and measurable business utility rather than unnecessary complexity."
            actions={
              <Button
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onJumpToSection('#contact');
                }}
                variant="secondary"
                size="md"
              >
                Discuss Your Scope
              </Button>
            }
          />

          {/* Compact 5-Track Anchor Bar */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {CORE_SERVICE_TRACKS.map((track) => (
              <a
                key={track.id}
                href={`#${track.anchorId}`}
                onClick={(e) => {
                  e.preventDefault();
                  onJumpToSection(`#${track.anchorId}`);
                }}
                className="group min-h-[60px] rounded-xl border border-[#dde6eb] bg-white px-4 py-3.5 hover:border-[#00749c] hover:bg-[#f2f7f9] transition-colors flex flex-col justify-between gap-2"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#00749c]">
                  <span>{track.index}</span>
                  <ArrowRight
                    className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-sm font-semibold text-[#003b4f] leading-snug">
                  {track.title}
                </p>
              </a>
            ))}
          </div>

          {/* Sections 4, 5 & 6: Website Design & Development, eCommerce, AI & Business Automation */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-6 flex">
              <ServiceCard
                track={webTrack}
                variant="featured"
                onExploreService={onExploreService}
              />
            </div>

            <div className="lg:col-span-6 flex">
              <ServiceCard
                track={ecommerceTrack}
                variant="featured"
                onExploreService={onExploreService}
              />
            </div>

            <div className="lg:col-span-7 flex">
              <ServiceCard
                track={aiAutomationTrack}
                onExploreService={onExploreService}
              />
            </div>

            <div className="lg:col-span-5 flex">
              <aside className="w-full rounded-2xl border border-[#dde6eb] bg-white overflow-hidden flex flex-col justify-between">
                <div className="aspect-[16/10] bg-[#eef3f6] overflow-hidden border-b border-[#e9eff2]">
                  {archFailed ? (
                    <div className="w-full h-full flex items-center justify-center p-6 text-xs text-[#6c757d]">
                      {BRAND_INFO.architectureImageAlt}
                    </div>
                  ) : (
                    <img
                      src={BRAND_INFO.architectureImageUrl}
                      alt={BRAND_INFO.architectureImageAlt}
                      width={1200}
                      height={896}
                      decoding="sync"
                      onError={() => setArchFailed(true)}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-mono font-semibold text-[#00749c] uppercase tracking-wider">
                      Architecture Principle
                    </p>
                    <h3 className="text-lg font-bold text-[#003b4f] mt-2">
                      Clean codebases designed for straightforward handover.
                    </h3>
                    <p className="text-sm text-[#2e2e2e] mt-2 leading-relaxed">
                      Whether building in WordPress Gutenberg or React and Next.js, we
                      prioritise semantic clarity, security, and independent client ownership.
                    </p>
                  </div>
                  <div className="mt-5">
                    <Button
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        onJumpToSection('#contact');
                      }}
                      variant="secondary"
                      size="sm"
                    >
                      Enquire About Custom Builds
                    </Button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Website Care & Technical Support */}
      <section
        id="website-care"
        className="scroll-mt-20 py-16 lg:py-20 bg-white border-b border-[#dde6eb]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="04. Website Care & Technical Support"
            title="Structured stewardship to keep business websites secure, backed up, and stable."
            description="All care tiers are scoped accurately around your site architecture—no guesswork tiers or inflated promises."
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
                    <h3 className="text-xl font-bold text-[#003b4f]">
                      {tier.name}
                    </h3>
                    {tier.highlighted && (
                      <span className="text-xs font-mono font-semibold text-[#00749c]">
                        Recommended
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
                  One-Off Technical Pathway
                </p>
                <h3 className="text-lg sm:text-xl font-bold text-[#003b4f] mt-1">
                  Need a One-Off WordPress Fix?
                </h3>
                <p className="text-sm text-[#2e2e2e] mt-1.5 leading-relaxed">
                  Resolve critical errors, plugin conflicts, broken layouts, SSL issues,
                  or sudden site slowdowns without committing to an ongoing monthly care plan.
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <Button
                href={`mailto:${BRAND_INFO.email}?subject=${encodeURIComponent(
                  'WordPress Quick Fix Request'
                )}`}
                variant="primary"
                size="md"
                className="w-full sm:w-auto"
              >
                <span>Request WordPress Quick Fix</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {/* Section 8: SEO & AI Search Optimisation */}
      <section
        id="seo-ai-search"
        className="scroll-mt-20 py-16 lg:py-20 bg-[#f7f9fa] border-b border-[#dde6eb]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="05. SEO & AI Search Optimisation"
            title="Structured technical SEO, WordPress speed engineering, and AI search readiness."
            description="Built so Google UK search crawlers and modern generative AI assistants parse your services, location, and technical authority cleanly."
          />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 flex">
              <ServiceCard
                track={seoAiSearchTrack}
                variant="featured"
                onExploreService={onExploreService}
              />
            </div>

            <div className="lg:col-span-5 flex">
              <aside className="w-full rounded-2xl border border-[#b9ccd6] bg-white p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#00749c]">
                    <Zap className="h-4 w-4" aria-hidden="true" />
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                      WordPress Speed Optimisation
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#003b4f] mt-3 leading-snug">
                    Core Web Vitals &amp; Loading Speed Engineering
                  </h3>

                  <p className="text-sm text-[#2e2e2e] mt-2.5 leading-relaxed">
                    Slow WordPress themes and unoptimised asset payloads reduce enquiries
                    and search visibility. We audit render-blocking scripts, database queries,
                    image delivery, and caching rules cleanly.
                  </p>

                  <dl className="mt-5 pt-5 border-t border-[#e9eff2] space-y-3 text-sm">
                    <div>
                      <dt className="font-semibold text-[#003b4f]">
                        Core Web Vitals Discipline
                      </dt>
                      <dd className="text-[#6c757d] mt-0.5">
                        Focused LCP, INP, and CLS remediation across mobile and desktop.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-[#003b4f]">
                        AI Search Optimisation (GEO / AIO)
                      </dt>
                      <dd className="text-[#6c757d] mt-0.5">
                        Schema.org entities and factual structuring for Google UK, ChatGPT,
                        Gemini, and Claude.
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-5 pt-3 border-t border-[#e9eff2] flex flex-wrap items-center justify-between gap-3">
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
                    className="inline-flex items-center gap-1.5 min-h-[44px] px-2 -mx-2 text-xs font-semibold text-[#00749c] hover:text-[#003b4f] transition-colors whitespace-nowrap group"
                  >
                    <span>Explore Speed Optimisation</span>
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      onJumpToSection('#contact');
                    }}
                    className="inline-flex items-center gap-1.5 min-h-[44px] px-2 -mx-2 text-xs font-semibold text-[#6c757d] hover:text-[#003b4f] transition-colors whitespace-nowrap"
                  >
                    <span>Book Speed Audit</span>
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
