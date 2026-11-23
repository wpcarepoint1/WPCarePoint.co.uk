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
      {/* Section 9: Why Choose WPCarePoint */}
      <section
        id="why-wpcarepoint"
        className="scroll-mt-20 py-16 lg:py-20 bg-white border-b border-[#dde6eb]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Why Choose WPCarePoint"
            title="Practical UK engineering built on ownership, clarity, and maintainability."
            description="We avoid unnecessary jargon and short-term page-builder shortcuts so your website stays fast and easy to manage."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {WHY_CHOOSE_POINTS.map((point) => (
              <article
                key={point.index}
                className="w-full rounded-2xl border border-[#dde6eb] bg-[#f7f9fa] p-6 flex flex-col justify-between"
              >
                <div>
                  <p className="text-sm font-mono font-semibold text-[#00749c] tabular-nums">
                    {point.index}
                  </p>
                  <h3 className="text-lg font-bold text-[#003b4f] mt-2.5 leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-sm text-[#2e2e2e] mt-2.5 leading-relaxed">
                    {point.description}
                  </p>
                </div>
                <p className="mt-5 pt-4 border-t border-[#dde6eb] text-xs font-mono text-[#6c757d]">
                  {point.standard}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Our Working Process */}
      <section
        id="our-process"
        className="scroll-mt-20 py-16 lg:py-20 bg-[#003b4f] bg-deep-teal-grid text-white border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Our Working Process"
            title="Structured staging-first delivery from technical discovery to launch."
            description="Every build or care transition follows clear milestones so nothing changes on a live website without testing."
            tone="dark"
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {WORKING_PROCESS_STEPS.map((item) => (
              <article
                key={item.step}
                className="w-full rounded-2xl border border-white/15 bg-white/5 p-6 flex flex-col justify-between hover:border-[#00b2d4]/60 transition-colors"
              >
                <div>
                  <p className="text-sm font-mono font-semibold text-[#00b2d4] tabular-nums">
                    {item.step}
                  </p>
                  <h3 className="text-lg font-bold text-white mt-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/85 mt-2.5 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
                <p className="mt-5 pt-4 border-t border-white/10 text-xs font-mono text-[#00b2d4]">
                  {item.deliverable}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: Portfolio Preview (VER-13 Recovery Placeholders) */}
      <section
        id="portfolio-preview"
        className="scroll-mt-20 py-16 lg:py-20 bg-[#f7f9fa] border-b border-[#dde6eb]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Portfolio Preview"
            title="Selected architecture showcase — portfolio recovery in progress."
            description="In line with our strict verification policy, we only publish real client work once documentation and client publication approvals are verified."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {PORTFOLIO_PLACEHOLDER_SLOTS.map((slot) => (
              <PortfolioCard key={slot.id} item={slot} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 12: Verified Testimonials Placeholder */}
      <section
        id="testimonials"
        className="scroll-mt-20 py-14 lg:py-16 bg-white border-b border-[#dde6eb]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl border border-[#dde6eb] bg-[#f7f9fa] p-6 sm:p-9 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#00749c]">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                <span>Client Testimonials &amp; Proof Standards</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#003b4f] text-balance">
                Verified Client Feedback Pending Publication
              </h2>
              <p className="text-sm sm:text-base text-[#2e2e2e] leading-relaxed max-w-2xl">
                WPCarePoint never publishes invented quotes, synthetic star ratings,
                or unverified project numbers. Independently verified UK client
                testimonials will appear in this section once written client permissions
                and platform checks are finalised.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Button
                href={`mailto:${BRAND_INFO.email}?subject=${encodeURIComponent(
                  'Request Technical Walkthrough or Reference Scope'
                )}`}
                variant="secondary"
                size="md"
                className="w-full sm:w-auto"
              >
                Request Scope Walkthrough
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 13: FAQ Section */}
      <section
        id="faq"
        className="scroll-mt-20 py-16 lg:py-20 bg-[#f7f9fa]"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="Clear answers on builds, care plans, and support."
              description="Practical detail on platforms, pricing transparency, and how we communicate."
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
