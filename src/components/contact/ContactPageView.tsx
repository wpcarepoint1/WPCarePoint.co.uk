import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Copy,
  FileText,
  Layers,
  Mail,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import { CONTACT_PAGE_DATA } from '../../data/contactPageData';
import { BRAND_INFO } from '../../data/homepageData';
import { applyRouteSeo } from '../../utils/routeSeo';
import { EASE_OUT_EXPO, FadeInUpOnScroll, Reveal } from '../MotionPrimitives';
import { Button } from '../ui/Button';
import { FaqAccordion } from '../ui/FaqAccordion';
import { SectionHeading } from '../ui/SectionHeading';

interface ContactPageViewProps {
  onNavigateHome: (hash?: string) => void;
  onNavigatePath: (path: string) => void;
}

export function ContactPageView({
  onNavigateHome,
  onNavigatePath,
}: ContactPageViewProps) {
  const prefersReduced = useReducedMotion();
  const [imgFailed, setImgFailed] = useState(false);
  const [emailCopied, setEmailCopied] = useState<'idle' | 'copied' | 'manual'>('idle');
  const [templateCopied, setTemplateCopied] = useState<'idle' | 'copied' | 'manual'>('idle');
  const emailRef = useRef<HTMLAnchorElement>(null);
  const templateRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const activeHash = window.location.hash.replace(/^#/, '');
    if (activeHash && activeHash !== 'contact') {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          document.getElementById(activeHash)?.scrollIntoView({ behavior: 'smooth' });
        });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    applyRouteSeo({
      title: CONTACT_PAGE_DATA.metaTitle,
      description: CONTACT_PAGE_DATA.metaDescription,
      canonicalUrl: CONTACT_PAGE_DATA.canonicalUrl,
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'ContactPage',
            name: CONTACT_PAGE_DATA.metaTitle,
            url: CONTACT_PAGE_DATA.canonicalUrl,
            description: CONTACT_PAGE_DATA.metaDescription,
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
                name: 'Contact',
                item: CONTACT_PAGE_DATA.canonicalUrl,
              },
            ],
          },
          {
            '@type': 'FAQPage',
            mainEntity: CONTACT_PAGE_DATA.faqs.map((faq) => ({
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

  const copyText = async (text: string): Promise<boolean> => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch {
      // Fallback below
    }
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.top = '0';
      ta.style.left = '0';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.focus({ preventScroll: true });
      ta.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  };

  const handleCopyEmail = async () => {
    const ok = await copyText(BRAND_INFO.email);
    if (ok) {
      setEmailCopied('copied');
      setTimeout(() => setEmailCopied('idle'), 2800);
      return;
    }
    if (emailRef.current && window.getSelection) {
      const sel = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(emailRef.current);
      sel?.removeAllRanges();
      sel?.addRange(range);
    }
    setEmailCopied('manual');
    setTimeout(() => setEmailCopied('idle'), 4000);
  };

  const handleCopyTemplate = async () => {
    const ok = await copyText(CONTACT_PAGE_DATA.emailBriefTemplate);
    if (ok) {
      setTemplateCopied('copied');
      setTimeout(() => setTemplateCopied('idle'), 2800);
      return;
    }
    if (templateRef.current && window.getSelection) {
      const sel = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(templateRef.current);
      sel?.removeAllRanges();
      sel?.addRange(range);
    }
    setTemplateCopied('manual');
    setTimeout(() => setTemplateCopied('idle'), 4000);
  };

  return (
    <article id="contact">
      {/* Hero */}
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
              className="inline-flex items-center min-h-[44px] text-[#6c757d] hover:text-[#00749c] hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded-md"
            >
              Home
            </a>
            <span aria-hidden="true">/</span>
            <span className="font-semibold text-[#003b4f]" aria-current="page">
              Contact
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
                {CONTACT_PAGE_DATA.eyebrow}
              </p>

              <h1
                className="font-bold tracking-tight text-[#003b4f] mt-3 text-balance"
                style={{
                  fontSize: 'clamp(2rem, 3.8vw, 3.25rem)',
                  lineHeight: 1.09,
                }}
              >
                {CONTACT_PAGE_DATA.headline}
              </h1>

              <p className="text-base sm:text-lg text-[#2e2e2e] mt-5 leading-relaxed max-w-xl">
                {CONTACT_PAGE_DATA.description}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
                <Button
                  href={`mailto:${BRAND_INFO.email}?subject=${encodeURIComponent(
                    'WPCarePoint Project & Support Enquiry'
                  )}`}
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Email WPCarePoint</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Button>

                <Button
                  type="button"
                  onClick={handleCopyEmail}
                  variant="secondary"
                  size="lg"
                  aria-live="polite"
                >
                  {emailCopied === 'copied' ? (
                    <>
                      <Check className="h-4 w-4 shrink-0 text-[#00749c]" aria-hidden="true" />
                      <span>Email Address Copied</span>
                    </>
                  ) : emailCopied === 'manual' ? (
                    <>
                      <Copy className="h-4 w-4 shrink-0 text-[#00749c]" aria-hidden="true" />
                      <span>Email Selected — Press Ctrl+C</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </Button>
              </div>

              <div className="mt-6">
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateHome();
                  }}
                  className="inline-flex items-center gap-1.5 min-h-[44px] text-xs font-semibold text-[#6c757d] hover:text-[#00749c] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded-md"
                >
                  <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Return to WPCarePoint homepage</span>
                </a>
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
                        {CONTACT_PAGE_DATA.imageAlt}
                      </p>
                    </div>
                  ) : (
                    <img
                      src={CONTACT_PAGE_DATA.imageUrl}
                      alt={CONTACT_PAGE_DATA.imageAlt}
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
                  {CONTACT_PAGE_DATA.imageCaption}
                </figcaption>
              </figure>
            </motion.div>
          </div>

          <dl className="mt-10 pt-8 border-t border-[#dde6eb] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
            {CONTACT_PAGE_DATA.standards.map((item) => (
              <div key={item.label}>
                <dt className="text-xs font-mono text-[#6c757d]">{item.label}</dt>
                <dd className="text-base sm:text-lg font-bold text-[#003b4f] mt-1 break-words">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Direct Correspondence Details & Structured Brief Helper */}
      <section className="py-16 lg:py-20 bg-[#f7f9fa] border-b border-[#dde6eb]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Primary Contact Information */}
          <Reveal className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-[#dde6eb] bg-white p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00749c]">
                  Direct Email Correspondence
                </p>
                <h2 className="text-xl font-bold text-[#003b4f] mt-2">
                  Official Contact Details
                </h2>
                <p className="text-sm text-[#2e2e2e] mt-2 leading-relaxed">
                  All initial enquiries, WordPress diagnostics, and scoping requests are
                  handled directly in writing so nothing is missed across technical reviews.
                </p>
              </div>

              <div className="pt-5 border-t border-[#e9eff2] space-y-4">
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#6c757d]">
                    Email Address
                  </p>
                  <a
                    ref={emailRef}
                    href={`mailto:${BRAND_INFO.email}`}
                    className="mt-1 inline-flex min-h-[44px] items-center gap-2 text-lg font-bold text-[#00749c] hover:text-[#003b4f] transition-colors break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded-md"
                  >
                    <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{BRAND_INFO.email}</span>
                  </a>
                  <p className="text-xs text-[#6c757d] leading-relaxed">
                    {BRAND_INFO.channelNote}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#e9eff2]">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#6c757d]">
                    United Kingdom Business Address
                  </p>
                  <address className="not-italic mt-2 flex items-start gap-2.5 text-sm text-[#2e2e2e] leading-relaxed">
                    <MapPin
                      className="h-4 w-4 text-[#00749c] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>
                      Robert Denholm House,
                      <br />
                      Bletchingley Road,
                      <br />
                      Nutfield RH1 4HW,
                      <br />
                      United Kingdom
                    </span>
                  </address>
                </div>

                <div className="pt-4 border-t border-[#e9eff2] flex items-start gap-2.5 text-xs text-[#6c757d] leading-relaxed">
                  <ShieldCheck
                    className="h-4 w-4 text-[#00749c] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>
                    Email-first workflow only. No unverified telephone lines, WhatsApp
                    channels, automated live chat bots, or web-form black boxes.
                  </span>
                </div>
              </div>
            </div>

            {/* Optional Copyable Brief Template */}
            <div className="rounded-2xl border border-[#dde6eb] bg-white p-6 sm:p-7 space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-[#003b4f]">
                  <FileText className="h-4 w-4 text-[#00749c] shrink-0" aria-hidden="true" />
                  <h3 className="text-base font-bold">Quick Email Brief Outline</h3>
                </div>
                <button
                  type="button"
                  onClick={handleCopyTemplate}
                  aria-live="polite"
                  className="inline-flex items-center gap-1.5 min-h-[44px] px-3 rounded-lg border border-[#dde6eb] hover:border-[#00749c] text-xs font-semibold text-[#003b4f] hover:text-[#00749c] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c]"
                >
                  {templateCopied === 'copied' ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#00749c]" aria-hidden="true" />
                      <span>Outline Copied</span>
                    </>
                  ) : templateCopied === 'manual' ? (
                    <>
                      <Copy className="h-3.5 w-3.5 text-[#00749c]" aria-hidden="true" />
                      <span>Outline Selected — Press Ctrl+C</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copy Outline</span>
                    </>
                  )}
                </button>
              </div>
              <pre
                ref={templateRef}
                className="rounded-xl bg-[#f7f9fa] border border-[#e9eff2] p-4 text-xs font-mono text-[#2e2e2e] whitespace-pre-wrap leading-relaxed overflow-x-auto"
              >
                {CONTACT_PAGE_DATA.emailBriefTemplate}
              </pre>
            </div>
          </Reveal>

          {/* What to Send by Topic */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00749c]">
                Enquiry Guidance by Service Track
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#003b4f] mt-2 text-balance">
                Helpful details to include when emailing our team.
              </h2>
              <p className="text-sm sm:text-base text-[#2e2e2e] mt-2 leading-relaxed">
                Choose the closest subject line below to open your email application pre-filled,
                or copy contact@wpcarepoint.co.uk directly.
              </p>
            </div>

            <div className="space-y-5">
              {CONTACT_PAGE_DATA.enquiryGuides.map((guide, idx) => (
                <FadeInUpOnScroll key={guide.index} delay={idx * 0.04}>
                  <article className="rounded-2xl border border-[#dde6eb] bg-white hover:border-[#00749c] transition-colors p-6 sm:p-7">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div>
                        <p className="text-xs font-mono font-semibold text-[#00749c] tabular-nums">
                          {guide.index}
                        </p>
                        <h3 className="text-lg font-bold text-[#003b4f] mt-1">
                          {guide.title}
                        </h3>
                        <p className="text-sm text-[#2e2e2e] mt-2 leading-relaxed">
                          {guide.description}
                        </p>
                      </div>

                      <Button
                        href={`mailto:${BRAND_INFO.email}?subject=${encodeURIComponent(
                          guide.mailtoSubject
                        )}`}
                        variant="secondary"
                        size="sm"
                        className="shrink-0"
                      >
                        <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>Compose Email</span>
                      </Button>
                    </div>

                    <ul className="mt-5 pt-4 border-t border-[#e9eff2] space-y-2">
                      {guide.suggestedPoints.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-start gap-2.5 text-sm text-[#2e2e2e]"
                        >
                          <Check
                            className="h-4 w-4 text-[#00749c] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </FadeInUpOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Process */}
      <section className="py-16 lg:py-20 bg-[#003b4f] bg-deep-teal-grid text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="How We Respond"
            title="Transparent written scoping from first email to staging plan."
            description="No pressured sales calls or inflated commitments—just clear technical feedback in writing."
            tone="dark"
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {CONTACT_PAGE_DATA.processSteps.map((step, idx) => (
              <FadeInUpOnScroll key={step.step} delay={idx * 0.05} className="flex">
                <article className="w-full rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-7 flex flex-col justify-between">
                  <div>
                    <p className="text-sm font-mono font-bold text-[#00b2d4] tabular-nums">
                      {step.step}
                    </p>
                    <h3 className="text-lg font-bold text-white mt-2.5">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/85 mt-2.5 leading-relaxed">
                      {step.summary}
                    </p>
                  </div>
                </article>
              </FadeInUpOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Contact FAQs */}
      <section className="py-16 lg:py-20 bg-white border-b border-[#dde6eb]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <SectionHeading
              eyebrow="Contact FAQ"
              title="Practical questions before reaching out."
              description="Clarity on our email-only workflow, scoping process, and UK service footprint."
            />
          </div>

          <div className="lg:col-span-8">
            <FaqAccordion items={CONTACT_PAGE_DATA.faqs} />
          </div>
        </div>
      </section>

      {/* Explore Core Services */}
      <section className="py-16 lg:py-20 bg-[#f7f9fa]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Explore Service Details"
            title="Inspect technical capabilities before sending your brief"
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
            {CONTACT_PAGE_DATA.relatedLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigatePath(item.href);
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
    </article>
  );
}
