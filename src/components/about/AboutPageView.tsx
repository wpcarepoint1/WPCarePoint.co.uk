import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Check, Layers } from 'lucide-react';
import { ABOUT_PAGE_DATA } from '../../data/aboutPageData';
import { BRAND_INFO } from '../../data/homepageData';
import { EASE_OUT_EXPO, FadeInUpOnScroll, Reveal } from '../MotionPrimitives';
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
  const prefersReduced = useReducedMotion();
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const prevTitle = document.title;
    document.title = ABOUT_PAGE_DATA.metaTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content') || '';
    metaDesc?.setAttribute('content', ABOUT_PAGE_DATA.metaDescription);

    const canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute('href') || '';
    canonical?.setAttribute('href', ABOUT_PAGE_DATA.canonicalUrl);

    const hreflangEn = document.querySelector('link[rel="alternate"][hreflang="en-gb"]');
    const prevHreflangEn = hreflangEn?.getAttribute('href') || '';
    hreflangEn?.setAttribute('href', ABOUT_PAGE_DATA.canonicalUrl);

    const hreflangDef = document.querySelector('link[rel="alternate"][hreflang="x-default"]');
    const prevHreflangDef = hreflangDef?.getAttribute('href') || '';
    hreflangDef?.setAttribute('href', ABOUT_PAGE_DATA.canonicalUrl);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const prevOgTitle = ogTitle?.getAttribute('content') || '';
    ogTitle?.setAttribute('content', ABOUT_PAGE_DATA.metaTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    const prevOgDesc = ogDesc?.getAttribute('content') || '';
    ogDesc?.setAttribute('content', ABOUT_PAGE_DATA.metaDescription);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    const prevOgUrl = ogUrl?.getAttribute('content') || '';
    ogUrl?.setAttribute('content', ABOUT_PAGE_DATA.canonicalUrl);

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    const prevTwTitle = twTitle?.getAttribute('content') || '';
    twTitle?.setAttribute('content', ABOUT_PAGE_DATA.metaTitle);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    const prevTwDesc = twDesc?.getAttribute('content') || '';
    twDesc?.setAttribute('content', ABOUT_PAGE_DATA.metaDescription);

    const scriptId = 'about-page-jsonld';
    let jsonLdScript = document.getElementById(scriptId) as HTMLScriptElement | null;
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
    });

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) metaDesc.setAttribute('content', prevDesc);
      if (canonical && prevCanonical) canonical.setAttribute('href', prevCanonical);
      if (hreflangEn && prevHreflangEn) hreflangEn.setAttribute('href', prevHreflangEn);
      if (hreflangDef && prevHreflangDef) hreflangDef.setAttribute('href', prevHreflangDef);
      if (ogTitle && prevOgTitle) ogTitle.setAttribute('content', prevOgTitle);
      if (ogDesc && prevOgDesc) ogDesc.setAttribute('content', prevOgDesc);
      if (ogUrl && prevOgUrl) ogUrl.setAttribute('content', prevOgUrl);
      if (twTitle && prevTwTitle) twTitle.setAttribute('content', prevTwTitle);
      if (twDesc && prevTwDesc) twDesc.setAttribute('content', prevTwDesc);
      jsonLdScript?.remove();
    };
  }, []);

  return (
    <article>
      {/* Section 1: About Hero */}
      <section className="bg-white bg-architectural-grid border-b border-[#dde6eb]">
        <div className="max-w-7xl mx-auto px-6 py-10 sm:py-14 lg:py-16">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs text-[#6c757d] mb-7 sm:mb-9"
          >
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
              }}
              className="inline-flex items-center min-h-[44px] text-[#6c757d] hover:text-[#00749c] hover:underline transition-colors"
            >
              Home
            </a>
            <span aria-hidden="true">/</span>
            <span className="font-semibold text-[#003b4f]" aria-current="page">
              About
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={prefersReduced ? false : { opacity: 0.94, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReduced ? 0.01 : 0.4, ease: EASE_OUT_EXPO }}
              className="lg:col-span-6"
            >
              <p className="text-xs font-mono font-semibold tracking-wider uppercase text-[#00749c]">
                {ABOUT_PAGE_DATA.eyebrow}
              </p>

              <h1
                className="font-bold tracking-tight text-[#003b4f] mt-3 text-balance"
                style={{
                  fontSize: 'clamp(2rem, 3.8vw, 3.25rem)',
                  lineHeight: 1.09,
                }}
              >
                {ABOUT_PAGE_DATA.headline}
              </h1>

              <p className="text-base sm:text-lg text-[#2e2e2e] mt-5 leading-relaxed max-w-xl">
                {ABOUT_PAGE_DATA.description}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
                <Button
                  href="/contact/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigatePath('/contact/');
                  }}
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  <span>Contact WPCarePoint</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
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
            </motion.div>

            <motion.div
              initial={prefersReduced ? false : { opacity: 0.94, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: prefersReduced ? 0.01 : 0.45,
                delay: prefersReduced ? 0 : 0.05,
                ease: EASE_OUT_EXPO,
              }}
              className="lg:col-span-6"
            >
              <figure className="group relative rounded-2xl overflow-hidden border border-[#dde6eb] bg-[#eef3f6]">
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
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                    />
                  )}
                </div>
                <figcaption className="px-5 py-3.5 bg-white border-t border-[#e9eff2] text-xs font-medium text-[#6c757d]">
                  {ABOUT_PAGE_DATA.heroImageCaption}
                </figcaption>
              </figure>
            </motion.div>
          </div>

          <dl className="mt-10 pt-8 border-t border-[#dde6eb] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
            {ABOUT_PAGE_DATA.standards.map((item) => (
              <div key={item.label}>
                <dt className="text-xs font-mono text-[#6c757d]">{item.label}</dt>
                <dd className="text-base sm:text-lg font-bold text-[#003b4f] mt-1">
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
        className="scroll-mt-20 py-16 lg:py-20 bg-[#f7f9fa] border-b border-[#dde6eb]"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <Reveal className="lg:col-span-7 space-y-5">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00749c]">
              {ABOUT_PAGE_DATA.storySection.eyebrow}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#003b4f] text-balance">
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
            <aside className="rounded-2xl border border-[#dde6eb] bg-white p-6 sm:p-8 space-y-5">
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
        className="scroll-mt-20 py-16 lg:py-20 bg-white border-b border-[#dde6eb]"
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

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
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
                  className="group w-full rounded-2xl border border-[#dde6eb] bg-[#f7f9fa] hover:bg-white hover:border-[#00749c] transition-all duration-200 p-6 sm:p-7 flex flex-col justify-between"
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
        className="scroll-mt-20 py-16 lg:py-20 bg-[#f7f9fa] border-b border-[#dde6eb]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow={ABOUT_PAGE_DATA.approachSection.eyebrow}
            title={ABOUT_PAGE_DATA.approachSection.title}
            description={ABOUT_PAGE_DATA.approachSection.description}
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch">
            {ABOUT_PAGE_DATA.approachSection.steps.map((step, idx) => (
              <FadeInUpOnScroll key={step.step} delay={idx * 0.03} className="flex">
                <article className="w-full rounded-2xl border border-[#dde6eb] bg-white p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-mono font-bold text-[#00749c] tabular-nums">
                      {step.step}
                    </p>
                    <h3 className="text-base font-bold text-[#003b4f] mt-2 leading-snug">
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
        className="scroll-mt-20 py-16 lg:py-20 bg-white border-b border-[#dde6eb]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow={ABOUT_PAGE_DATA.valuesSection.eyebrow}
            title={ABOUT_PAGE_DATA.valuesSection.title}
            description={ABOUT_PAGE_DATA.valuesSection.description}
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {ABOUT_PAGE_DATA.valuesSection.items.map((val, idx) => (
              <FadeInUpOnScroll key={val.index} delay={idx * 0.03} className="flex">
                <article className="w-full rounded-2xl border border-[#dde6eb] bg-[#f7f9fa] p-6 sm:p-7 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-mono font-bold text-[#00749c] tabular-nums">
                      {val.index}
                    </p>
                    <h3 className="text-lg font-bold text-[#003b4f] mt-2 leading-snug">
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
        className="scroll-mt-20 py-16 lg:py-20 bg-[#f7f9fa] border-b border-[#dde6eb]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow={ABOUT_PAGE_DATA.techSection.eyebrow}
            title={ABOUT_PAGE_DATA.techSection.title}
            description={ABOUT_PAGE_DATA.techSection.description}
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {ABOUT_PAGE_DATA.techSection.items.map((tech, idx) => (
              <FadeInUpOnScroll
                key={tech.name}
                delay={idx * 0.03}
                className={`flex ${idx === 6 ? 'md:col-span-2 lg:col-span-3' : ''}`}
              >
                <article className="w-full rounded-2xl border border-[#dde6eb] bg-white p-6 sm:p-7 flex flex-col justify-between">
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
                    <h3 className="text-lg font-bold text-[#003b4f] mt-2">
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

      {/* Section 7: Our Working Process */}
      <section
        id={ABOUT_PAGE_DATA.processSection.id}
        className="scroll-mt-20 py-16 lg:py-20 bg-[#003b4f] bg-deep-teal-grid text-white border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow={ABOUT_PAGE_DATA.processSection.eyebrow}
            title={ABOUT_PAGE_DATA.processSection.title}
            description={ABOUT_PAGE_DATA.processSection.description}
            tone="dark"
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {ABOUT_PAGE_DATA.processSection.steps.map((step, idx) => (
              <FadeInUpOnScroll key={step.step} delay={idx * 0.04} className="flex">
                <article className="w-full rounded-2xl border border-white/15 bg-white/5 hover:border-[#00b2d4]/60 transition-colors p-6 flex flex-col justify-between">
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

      {/* Section 8: Why Businesses Work With Us */}
      <section
        id={ABOUT_PAGE_DATA.whyWorkWithUsSection.id}
        className="scroll-mt-20 py-16 lg:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow={ABOUT_PAGE_DATA.whyWorkWithUsSection.eyebrow}
            title={ABOUT_PAGE_DATA.whyWorkWithUsSection.title}
            description={ABOUT_PAGE_DATA.whyWorkWithUsSection.description}
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {ABOUT_PAGE_DATA.whyWorkWithUsSection.points.map((pt, idx) => (
              <FadeInUpOnScroll key={pt.index} delay={idx * 0.04} className="flex">
                <article className="w-full rounded-2xl border border-[#dde6eb] bg-[#f7f9fa] p-6 sm:p-7">
                  <p className="text-xs font-mono font-bold text-[#00749c] tabular-nums">
                    {pt.index}
                  </p>
                  <h3 className="text-lg font-bold text-[#003b4f] mt-2">
                    {pt.title}
                  </h3>
                  <p className="text-sm text-[#2e2e2e] mt-2.5 leading-relaxed">
                    {pt.summary}
                  </p>
                </article>
              </FadeInUpOnScroll>
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
        primaryButtonLabel="Send Email Enquiry"
        contactRouteHref="/contact/"
        contactRouteLabel={ABOUT_PAGE_DATA.cta.primaryButtonLabel}
        onNavigatePath={onNavigatePath}
      />
    </article>
  );
}
