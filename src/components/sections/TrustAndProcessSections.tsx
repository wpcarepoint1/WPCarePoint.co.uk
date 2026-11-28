import type { MouseEvent } from 'react';
import { ArrowUpRight, Mail, ShieldCheck } from 'lucide-react';
import {
  BRAND_INFO,
  FIVERR_PORTFOLIO_SHOWCASE,
  FIVERR_PROOF_LINKS,
  HOMEPAGE_FAQS,
  WHY_CHOOSE_POINTS,
  WORKING_PROCESS_STEPS,
} from '../../data/homepageData';
import { Button } from '../ui/Button';
import { FaqAccordion } from '../ui/FaqAccordion';
import { PortfolioCard } from '../ui/PortfolioCard';
import { SectionHeading } from '../ui/SectionHeading';

interface TrustAndProcessSectionsProps {
  onNavigatePath?: (path: string) => void;
}

export function TrustAndProcessSections({
  onNavigatePath,
}: TrustAndProcessSectionsProps) {
  return (
    <>
      {/* Section 6: Why Choose WPCarePoint (Editorial Ledger Layout) */}
      <section
        id="why-wpcarepoint"
        className="scroll-mt-24 py-18 lg:py-24 bg-white border-b border-[#dde6eb]"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <SectionHeading
              eyebrow="Why Choose WPCarePoint"
              title="Direct engineering without page-builder bloat or agency lock-in."
              description="Work directly with senior UK engineers so your website stays fast, auditable, and cleanly under your business ownership."
            />
          </div>

          <div className="lg:col-span-7 divide-y divide-[#e9eff2] border-t border-b border-[#e9eff2]">
            {WHY_CHOOSE_POINTS.map((point) => (
              <article
                key={point.index}
                className="group py-7 sm:py-8 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-start"
              >
                <div className="sm:col-span-2 flex items-center justify-between sm:block">
                  <span className="font-display text-2xl font-semibold text-[#00749c]/45 group-hover:text-[#00749c] transition-colors tabular-nums">
                    {point.index}
                  </span>
                </div>
                <div className="sm:col-span-10 space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#003b4f] leading-snug">
                      {point.title}
                    </h3>
                    <span className="text-xs font-mono text-[#6c757d]">
                      {point.standard}
                    </span>
                  </div>
                  <p className="text-sm sm:text-[15px] text-[#2e2e2e] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Our Working Process (Reference-Inspired Architectural Step Cards) */}
      <section
        id="our-process"
        className="scroll-mt-24 py-18 lg:py-24 bg-[#003b4f] bg-deep-teal-grid text-white border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            align="center"
            eyebrow="Working Process"
            title="Staging-first delivery from audit to live UK release."
            description="Every milestone is tested on an isolated staging link before anything changes on your live website."
            tone="dark"
          />

          <ol className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {WORKING_PROCESS_STEPS.map((item) => (
              <li
                key={item.step}
                className="group rounded-2xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.07] hover:border-[#00b2d4]/60 transition-all duration-200 p-6 sm:p-7 flex flex-col justify-between min-h-[250px]"
              >
                <div>
                  <p className="text-xs font-mono text-[#00b2d4]">
                    {item.deliverable}
                  </p>
                  <h3 className="text-xl font-semibold text-white mt-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/80 mt-3 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/10 flex items-end justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-white/60">
                    Stage
                  </span>
                  <span className="font-display text-3xl font-semibold text-[#00b2d4]/50 group-hover:text-[#00b2d4] transition-colors tabular-nums leading-none">
                    .{item.step.replace('.', '')}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Section 8: Genuine Fiverr Portfolio & Client Reviews */}
      <section
        id="portfolio-preview"
        className="scroll-mt-24 py-18 lg:py-24 bg-[#f7f9fa] border-b border-[#dde6eb]"
      >
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <SectionHeading
            align="center"
            eyebrow="Portfolio & Client Reviews"
            title="Inspect verified work and client reviews on our official Fiverr profile."
            description="We never publish invented case metrics or fabricated quotes. While UK case records await written client sign-off for this domain, you can review delivered WordPress and WooCommerce work directly on Fiverr."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            <div className="lg:col-span-7 flex">
              <PortfolioCard item={FIVERR_PORTFOLIO_SHOWCASE} />
            </div>

            <aside
              id="testimonials"
              className="lg:col-span-5 scroll-mt-24 wpc-studio-card rounded-2xl border border-[#dde6eb] bg-white p-7 sm:p-8 flex flex-col justify-between gap-6"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <ShieldCheck className="h-4 w-4 text-[#00749c] shrink-0" aria-hidden="true" />
                  <span className="font-semibold text-[#00749c]">Independent Marketplace Proof</span>
                  <span className="text-[#6c757d]" aria-hidden="true">
                    ·
                  </span>
                  <span className="text-[#6c757d]">@hdhiren</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#003b4f] leading-snug">
                  Authentic Client Reviews on Fiverr
                </h3>

                <p className="text-sm sm:text-[15px] text-[#2e2e2e] leading-relaxed">
                  Genuine client feedback across WordPress builds, website redesigns, WooCommerce
                  stores, speed tuning, and troubleshooting sits publicly on our owner-verified
                  Fiverr account—displayed transparently at source without synthetic star widgets
                  or rewritten quotes.
                </p>

                <dl className="pt-3 border-t border-[#e9eff2] divide-y divide-[#e9eff2] text-sm">
                  <div className="py-3 flex items-baseline justify-between gap-4">
                    <dt className="text-[#6c757d]">Official Profile</dt>
                    <dd className="font-mono font-semibold text-[#003b4f]">
                      {FIVERR_PROOF_LINKS.handle}
                    </dd>
                  </div>
                  <div className="py-3 flex items-baseline justify-between gap-4">
                    <dt className="text-[#6c757d]">Core Services Reviewed</dt>
                    <dd className="font-medium text-[#2e2e2e] text-right">
                      WordPress · WooCommerce · Speed
                    </dd>
                  </div>
                  <div className="py-3 flex items-baseline justify-between gap-4">
                    <dt className="text-[#6c757d]">Direct UK Scoping</dt>
                    <dd className="font-medium text-[#00749c]">{BRAND_INFO.email}</dd>
                  </div>
                </dl>
              </div>

              <div className="pt-4 border-t border-[#e9eff2] flex flex-col gap-3">
                <Button
                  href={FIVERR_PROOF_LINKS.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                  className="w-full group"
                >
                  <span>Read Client Reviews on Fiverr</span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Button>

                <Button
                  href={onNavigatePath ? '/contact/' : `mailto:${BRAND_INFO.email}`}
                  onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                    if (onNavigatePath) {
                      e.preventDefault();
                      onNavigatePath('/contact/');
                    }
                  }}
                  variant="secondary"
                  size="md"
                  className="w-full"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Book a Consultation</span>
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Section 9: FAQ Section */}
      <section id="faq" className="scroll-mt-24 py-18 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="Clear answers on builds, care plans, and support."
              description="Practical detail on platforms, email scoping, and how we work."
            />
          </div>

          <div className="lg:col-span-8">
            <FaqAccordion items={HOMEPAGE_FAQS} />
          </div>
        </div>
      </section>
    </>
  );
}
