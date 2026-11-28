import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, Layers } from 'lucide-react';
import { ABOUT_PAGE_DATA } from '../../data/aboutPageData';
import { BRAND_INFO, FIVERR_PROOF_LINKS } from '../../data/homepageData';
import { applyRouteSeo } from '../../utils/routeSeo';
import { FadeInUpOnScroll, Reveal } from '../MotionPrimitives';
import { Button } from '../ui/Button';
import { CtaSection } from '../ui/CtaSection';
import { SectionHeading } from '../ui/SectionHeading';

interface AboutPageViewProps {
  onNavigateHome: (hash?: string) => void;
  onNavigatePath: (path: string) => void;
}

export function AboutPageView({
  onNavigateHome,
  onNavigatePath,
}: AboutPageViewProps) {
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
      title: ABOUT_PAGE_DATA.metaTitle,
      description: ABOUT_PAGE_DATA.metaDescription,
      canonicalUrl: ABOUT_PAGE_DATA.canonicalUrl,
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'AboutPage',
            name: ABOUT_PAGE_DATA.metaTitle,
            url: ABOUT_PAGE_DATA.canonicalUrl,
            description: ABOUT_PAGE_DATA.metaDescription,
            inLanguage: 'en-GB',
            mainEntity: {
              '@type': 'Organization',
              name: BRAND_INFO.name,
              url: 'https://wpcarepoint.co.uk/',
              email: BRAND_INFO.email,
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Robert Denholm House, Bletchingley Road',
                addressLocality: 'Nutfield',
                addressRegion: 'Surrey',
                postalCode: 'RH1 4HW',
                addressCountry: 'GB',
              },
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
                name: 'About',
                item: ABOUT_PAGE_DATA.canonicalUrl,
              },
            ],
          },
        ],
      },
    });
  }, []);

  return (
    <article>
      {/* Section 1: Studio About Hero */}
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
              About
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 wpc-route-enter">
              <div className="inline-flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-6 bg-[#b9ccd6]" />
                <p className="text-xs font-mono font-semibold tracking-[0.12em] uppercase text-[#00749c]">
                  {ABOUT_PAGE_DATA.eyebrow}
                </p>
              </div>

              <h1
                className="font-semibold tracking-[-0.03em] text-[#003b4f] mt-3.5 text-balance"
                style={{
                  fontSize: 'clamp(2.15rem, 4vw, 3.45rem)',
                  lineHeight: 1.07,
                }}
              >
                {ABOUT_PAGE_DATA.headline}
              </h1>

              <p className="text-base sm:text-[18px] text-[#2e2e2e] mt-5 leading-relaxed max-w-xl">
                {ABOUT_PAGE_DATA.description}
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
                  <span>Contact WPCarePoint</span>
                  <span
                    aria-hidden="true"
                    className="h-8 w-8 rounded-full bg-white text-[#003b4f] inline-flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Button>

                <Button
                  href="/services/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigatePath('/services/');
                  }}
                  variant="secondary"
                  size="lg"
                >
                  Explore Our Services
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
                        {ABOUT_PAGE_DATA.heroImageAlt}
                      </p>
                    </div>
                  ) : (
                    <img
                      src={ABOUT_PAGE_DATA.heroImageUrl}
                      alt={ABOUT_PAGE_DATA.heroImageAlt}
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
                  {ABOUT_PAGE_DATA.heroImageCaption}
                </figcaption>
              </figure>
            </div>
          </div>

          <dl className="mt-12 pt-8 border-t border-[#dde6eb] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {ABOUT_PAGE_DATA.standards.map((item) => (
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

      {/* Section 2: Our Story */}
      <section
        id={ABOUT_PAGE_DATA.storySection.id}
        className="scroll-mt-24 py-18 lg:py-24 bg-[#f7f9fa] border-b border-[#dde6eb]"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <Reveal className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-6 bg-[#b9ccd6]" />
              <p className="text-xs font-mono font-semibold uppercase tracking-[0.12em] text-[#00749c]">
                {ABOUT_PAGE_DATA.storySection.eyebrow}
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.15rem] font-semibold tracking-[-0.025em] text-[#003b4f] leading-[1.15] text-balance">
              {ABOUT_PAGE_DATA.storySection.title}
            </h2>
            <div className="space-y-4">
              {ABOUT_PAGE_DATA.storySection.paragraphs.map((p) => (
                <p key={p} className="text-base text-[#2e2e2e] leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.05} className="lg:col-span-5">
            <aside className="wpc-studio-card rounded-2xl border border-[#dde6eb] bg-white p-6 sm:p-8 space-y-5">
              <div>
                <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00749c]">
                  {ABOUT_PAGE_DATA.storySection.summaryCard.eyebrow}
                </p>
                <h3 className="text-xl font-bold text-[#003b4f] mt-2">
                  {ABOUT_PAGE_DATA.storySection.summaryCard.title}
                </h3>
              </div>

              <ul className="pt-4 border-t border-[#e9eff2] space-y-3">
                {ABOUT_PAGE_DATA.storySection.summaryCard.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-2.5 text-sm text-[#2e2e2e] leading-relaxed"
                  >
                    <Check
                      className="h-4 w-4 text-[#00749c] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* Section 3: What We Do */}
      <section
        id={ABOUT_PAGE_DATA.whatWeDoSection.id}
        className="scroll-mt-24 py-18 lg:py-24 bg-white border-b border-[#dde6eb]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow={ABOUT_PAGE_DATA.whatWeDoSection.eyebrow}
            title={ABOUT_PAGE_DATA.whatWeDoSection.title}
            description={ABOUT_PAGE_DATA.whatWeDoSection.description}
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
                View Full Services Hub
              </Button>
            }
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {ABOUT_PAGE_DATA.whatWeDoSection.tracks.map((track, idx) => (
              <FadeInUpOnScroll
                key={track.id}
                delay={idx * 0.03}
                className={`flex ${idx === 0 ? 'lg:col-span-2' : ''}`}
              >
                <a
                  href={track.routePath || '/services/'}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigatePath(track.routePath || '/services/');
                  }}
                  className="group wpc-studio-card w-full rounded-2xl border border-[#dde6eb] bg-[#f7f9fa] hover:bg-white hover:border-[#00749c] p-6 sm:p-7 flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c]"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="font-bold text-[#00749c] tabular-nums">
                        {track.index}
                      </span>
                      <span aria-hidden="true" className="text-[#6c757d]">
                        ·
                      </span>
                      <span className="text-[#6c757d]">{track.subtitle}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#003b4f] mt-2.5 group-hover:text-[#00749c] transition-colors leading-snug">
                      {track.title}
                    </h3>

                    <p className="text-sm text-[#2e2e2e] mt-2.5 leading-relaxed">
                      {track.description}
                    </p>
                  </div>

                  <span className="mt-5 pt-4 border-t border-[#dde6eb] inline-flex items-center gap-1.5 min-h-[44px] sm:min-h-0 text-xs font-semibold text-[#00749c]">
                    <span>Explore {track.title}</span>
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </FadeInUpOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Our Practical Approach (5 Steps) */}
      <section
        id={ABOUT_PAGE_DATA.approachSection.id}
        className="scroll-mt-24 py-18 lg:py-24 bg-[#f7f9fa] border-b border-[#dde6eb]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow={ABOUT_PAGE_DATA.approachSection.eyebrow}
            title={ABOUT_PAGE_DATA.approachSection.title}
            description={ABOUT_PAGE_DATA.approachSection.description}
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch">
            {ABOUT_PAGE_DATA.approachSection.steps.map((step, idx) => (
              <FadeInUpOnScroll key={step.step} delay={idx * 0.03} className="flex">
                <article className="wpc-studio-card w-full rounded-2xl border border-[#dde6eb] bg-white hover:border-[#00749c] p-6 flex flex-col justify-between">
                  <div>
                    <p className="font-display text-lg font-semibold text-[#00749c]/70 tabular-nums">
                      {step.step}
                    </p>
                    <h3 className="text-base font-semibold text-[#003b4f] mt-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#2e2e2e] mt-2.5 leading-relaxed">
                      {step.summary}
                    </p>
                  </div>
                </article>
              </FadeInUpOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Our Values */}
      <section
        id={ABOUT_PAGE_DATA.valuesSection.id}
        className="scroll-mt-24 py-18 lg:py-24 bg-white border-b border-[#dde6eb]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow={ABOUT_PAGE_DATA.valuesSection.eyebrow}
            title={ABOUT_PAGE_DATA.valuesSection.title}
            description={ABOUT_PAGE_DATA.valuesSection.description}
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {ABOUT_PAGE_DATA.valuesSection.items.map((val, idx) => (
              <FadeInUpOnScroll key={val.index} delay={idx * 0.03} className="flex">
                <article className="wpc-studio-card w-full rounded-2xl border border-[#dde6eb] bg-[#f7f9fa] hover:bg-white hover:border-[#00749c] p-6 sm:p-7 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-mono font-bold text-[#00749c] tabular-nums">
                      {val.index}
                    </p>
                    <h3 className="text-lg font-semibold text-[#003b4f] mt-2 leading-snug">
                      {val.title}
                    </h3>
                    <p className="text-sm text-[#2e2e2e] mt-2.5 leading-relaxed">
                      {val.summary}
                    </p>
                  </div>
                  <p className="mt-5 pt-4 border-t border-[#dde6eb] text-xs font-mono text-[#6c757d]">
                    {val.standard}
                  </p>
                </article>
              </FadeInUpOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Technology & Expertise */}
      <section
        id={ABOUT_PAGE_DATA.techSection.id}
        className="scroll-mt-24 py-18 lg:py-24 bg-[#f7f9fa] border-b border-[#dde6eb]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow={ABOUT_PAGE_DATA.techSection.eyebrow}
            title={ABOUT_PAGE_DATA.techSection.title}
            description={ABOUT_PAGE_DATA.techSection.description}
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {ABOUT_PAGE_DATA.techSection.items.map((tech, idx) => (
              <FadeInUpOnScroll
                key={tech.name}
                delay={idx * 0.03}
                className={`flex ${idx === 6 ? 'md:col-span-2 lg:col-span-3' : ''}`}
              >
                <article className="wpc-studio-card w-full rounded-2xl border border-[#dde6eb] bg-white hover:border-[#00749c] p-6 sm:p-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="font-bold text-[#00749c] tabular-nums">
                        {tech.index}
                      </span>
                      <span aria-hidden="true" className="text-[#6c757d]">
                        ·
                      </span>
                      <span className="text-[#6c757d]">{tech.role}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#003b4f] mt-2">
                      {tech.name}
                    </h3>
                    <p className="text-sm text-[#2e2e2e] mt-2.5 leading-relaxed">
                      {tech.summary}
                    </p>
                  </div>
                </article>
              </FadeInUpOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Our Working Process (Architectural Studio Cards) */}
      <section
        id={ABOUT_PAGE_DATA.processSection.id}
        className="scroll-mt-24 py-18 lg:py-24 bg-[#003b4f] bg-deep-teal-grid text-white border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            align="center"
            eyebrow={ABOUT_PAGE_DATA.processSection.eyebrow}
            title={ABOUT_PAGE_DATA.processSection.title}
            description={ABOUT_PAGE_DATA.processSection.description}
            tone="dark"
          />

          <ol className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {ABOUT_PAGE_DATA.processSection.steps.map((step) => (
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

      {/* Section 8: Why Businesses Work With Us (Editorial Ledger) */}
      <section
        id={ABOUT_PAGE_DATA.whyWorkWithUsSection.id}
        className="scroll-mt-24 py-18 lg:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <SectionHeading
              eyebrow={ABOUT_PAGE_DATA.whyWorkWithUsSection.eyebrow}
              title={ABOUT_PAGE_DATA.whyWorkWithUsSection.title}
              description={ABOUT_PAGE_DATA.whyWorkWithUsSection.description}
            />

            <div className="wpc-studio-card rounded-2xl border border-[#dde6eb] bg-[#f7f9fa] p-6 space-y-3">
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00749c]">
                Official Fiverr Portfolio &amp; Reviews
              </p>
              <p className="text-sm text-[#2e2e2e] leading-relaxed">
                Verify real WordPress and WooCommerce work examples and client feedback
                directly on our official Fiverr profile ({FIVERR_PROOF_LINKS.handle}).
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 pt-1">
                <a
                  href={FIVERR_PROOF_LINKS.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 min-h-[44px] sm:min-h-0 text-sm font-semibold text-[#00749c] hover:text-[#003b4f] transition-colors"
                >
                  <span>View Fiverr Portfolio</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
                <a
                  href={FIVERR_PROOF_LINKS.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 min-h-[44px] sm:min-h-0 text-sm font-semibold text-[#003b4f] hover:text-[#00749c] transition-colors"
                >
                  <span>Read Client Reviews</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 divide-y divide-[#e9eff2] border-t border-b border-[#e9eff2]">
            {ABOUT_PAGE_DATA.whyWorkWithUsSection.points.map((pt) => (
              <article
                key={pt.index}
                className="group py-7 sm:py-8 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-start"
              >
                <div className="sm:col-span-2">
                  <span className="font-display text-2xl font-semibold text-[#00749c]/45 group-hover:text-[#00749c] transition-colors tabular-nums">
                    {pt.index}
                  </span>
                </div>
                <div className="sm:col-span-10 space-y-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#003b4f] leading-snug">
                    {pt.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#2e2e2e] leading-relaxed">
                    {pt.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Final CTA */}
      <CtaSection
        id="contact"
        eyebrow={ABOUT_PAGE_DATA.cta.eyebrow}
        headline={ABOUT_PAGE_DATA.cta.headline}
        description={ABOUT_PAGE_DATA.cta.description}
        mailtoSubject={ABOUT_PAGE_DATA.cta.mailtoSubject}
        primaryButtonLabel="Email contact@wpcarepoint.co.uk"
        contactRouteHref="/contact/"
        contactRouteLabel={ABOUT_PAGE_DATA.cta.primaryButtonLabel}
        onNavigatePath={onNavigatePath}
      />
    </article>
  );
}
