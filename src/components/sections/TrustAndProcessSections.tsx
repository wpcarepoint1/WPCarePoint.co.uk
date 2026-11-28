import { ShieldCheck } from 'lucide-react';
import {
  BRAND_INFO,
  HOMEPAGE_FAQS,
  PORTFOLIO_PLACEHOLDER_SLOTS,
  WHY_CHOOSE_POINTS,
  WORKING_PROCESS_STEPS,
} from '../../data/homepageData';
import { Button } from '../ui/Button';
import { FaqAccordion } from '../ui/FaqAccordion';
import { PortfolioCard } from '../ui/PortfolioCard';
import { SectionHeading } from '../ui/SectionHeading';

export function TrustAndProcessSections() {
  return (
    <>
      {/* Section 6: Why Choose WPCarePoint (Editorial Ledger Layout) */}
      <section
        id="why-wpcarepoint"
        className="scroll-mt-20 py-16 lg:py-20 bg-white border-b border-[#dde6eb]"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <SectionHeading
              eyebrow="Why Choose WPCarePoint"
              title="Senior UK engineering built on ownership, clarity, and maintainability."
              description="We avoid heavy page-builder shortcuts and agency layers so your site stays fast, clean, and firmly yours."
            />
          </div>

          <div className="lg:col-span-7 divide-y divide-[#e9eff2] border-t border-b border-[#e9eff2]">
            {WHY_CHOOSE_POINTS.map((point) => (
              <article
                key={point.index}
                className="py-6 sm:py-7 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-start"
              >
                <div className="sm:col-span-2 flex items-center justify-between sm:block">
                  <span className="text-sm font-mono font-bold text-[#00749c] tabular-nums">
                    {point.index}
                  </span>
                </div>
                <div className="sm:col-span-10 space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-bold text-[#003b4f] leading-snug">
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

      {/* Section 7: Our Working Process (Connected Step Strip) */}
      <section
        id="our-process"
        className="scroll-mt-20 py-16 lg:py-20 bg-[#003b4f] bg-deep-teal-grid text-white border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Working Process"
            title="Staging-first delivery from audit to live UK release."
            description="Every milestone is previewed on an isolated staging link before anything changes in production."
            tone="dark"
          />

          <ol className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WORKING_PROCESS_STEPS.map((item) => (
              <li
                key={item.step}
                className="pt-5 border-t border-[#00b2d4]/50 flex flex-col justify-between space-y-4"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#00b2d4] tabular-nums">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/80 mt-2 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
                <p className="text-xs font-mono text-[#00b2d4]">
                  {item.deliverable}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Section 8: Honest Portfolio & Proof Standards */}
      <section
        id="portfolio-preview"
        className="scroll-mt-20 py-16 lg:py-20 bg-[#f7f9fa] border-b border-[#dde6eb]"
      >
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <SectionHeading
            eyebrow="Portfolio & Proof Standards"
            title="Verification-first showcase — portfolio recovery in progress."
            description="We publish client work and testimonials only after written client approvals and live verification complete."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {PORTFOLIO_PLACEHOLDER_SLOTS.map((slot) => (
              <PortfolioCard key={slot.id} item={slot} />
            ))}
          </div>

          <div
            id="testimonials"
            className="scroll-mt-24 rounded-2xl border border-[#dde6eb] bg-white p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
          >
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#00749c]">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                <span>Verified Proof Standard</span>
              </div>
              <h3 className="text-xl font-bold text-[#003b4f]">
                Client Feedback Pending Written Sign-Off
              </h3>
              <p className="text-sm text-[#2e2e2e] leading-relaxed">
                WPCarePoint never publishes invented quotes, synthetic star scores, or
                unverified project figures. Verified client feedback will appear here once sign-off finalises.
              </p>
            </div>
            <div className="shrink-0">
              <Button
                href={`mailto:${BRAND_INFO.email}?subject=${encodeURIComponent(
                  'Request Technical Walkthrough or Reference Scope'
                )}`}
                variant="secondary"
                size="md"
              >
                Request Scope Walkthrough
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: FAQ Section */}
      <section id="faq" className="scroll-mt-20 py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="Clear answers on builds, care plans, and support."
              description="Practical detail on platforms, pricing scoping, and how we work."
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
