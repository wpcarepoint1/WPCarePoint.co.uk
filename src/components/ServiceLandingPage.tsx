import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, ChevronDown } from 'lucide-react';
import {
  SERVICE_LANDING_PAGES,
  type ServiceLandingDetail,
} from '../data/servicePagesData';
import { ContactSection } from './ContactSection';

interface ServiceLandingPageProps {
  service: ServiceLandingDetail;
  onNavigateHome: (hash?: string) => void;
  onNavigateService: (slug: string) => void;
}

export function ServiceLandingPage({
  service,
  onNavigateHome,
  onNavigateService,
}: ServiceLandingPageProps) {
  const [openFaqIdx, setOpenFaqIdx] = useState<number>(0);

  // Sync page title, meta description, canonical URL, and Service JSON-LD
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const prevTitle = document.title;
    document.title = `${service.name} UK – WPCarePoint`;

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content') || '';
    metaDesc?.setAttribute('content', service.heroSummary.slice(0, 158));

    const canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute('href') || '';
    canonical?.setAttribute(
      'href',
      `https://wpcarepoint.co.uk/services/${service.slug}`
    );

    const scriptId = 'service-page-jsonld';
    let jsonLdScript = document.getElementById(
      scriptId
    ) as HTMLScriptElement | null;
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
          '@type': 'Service',
          name: service.name,
          provider: {
            '@type': 'ProfessionalService',
            name: 'WPCarePoint',
            url: 'https://wpcarepoint.co.uk/',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Robert Denholm House, Bletchingley Road',
              addressLocality: 'Nutfield',
              addressRegion: 'Surrey',
              postalCode: 'RH1 4HW',
              addressCountry: 'GB',
            },
          },
          areaServed: { '@type': 'Country', name: 'United Kingdom' },
          description: service.heroSummary,
          url: `https://wpcarepoint.co.uk/services/${service.slug}`,
        },
        {
          '@type': 'FAQPage',
          mainEntity: service.faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.answer,
            },
          })),
        },
      ],
    });

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) metaDesc.setAttribute('content', prevDesc);
      if (canonical && prevCanonical)
        canonical.setAttribute('href', prevCanonical);
      jsonLdScript?.remove();
    };
  }, [service]);

  const relatedServices = service.relatedSlugs
    .map((slug) => SERVICE_LANDING_PAGES.find((s) => s.slug === slug))
    .filter((item): item is ServiceLandingDetail => Boolean(item));

  const scrollToProposal = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-8"
          >
            <button
              type="button"
              onClick={() => onNavigateHome()}
              className="hover:text-slate-900 hover:underline cursor-pointer"
            >
              Home
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              onClick={() => onNavigateHome('#services')}
              className="hover:text-slate-900 hover:underline cursor-pointer"
            >
              Services
            </button>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-slate-900">{service.name}</span>
          </nav>

          <div className="max-w-4xl">
            <p className="text-xs font-medium text-sky-700">
              {service.pillarTitle} · United Kingdom
            </p>
            <h1
              className="font-bold tracking-tight text-slate-900 mt-3 text-balance"
              style={{
                fontSize: 'clamp(2.1rem, 3.8vw, 3.25rem)',
                lineHeight: 1.1,
              }}
            >
              {service.heroHeadline}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-5 leading-relaxed max-w-3xl">
              {service.heroSummary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <button
                type="button"
                onClick={scrollToProposal}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Request {service.name} Proposal
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => onNavigateHome('#services')}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-slate-900 hover:underline underline-offset-4 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to All Services
              </button>
            </div>
          </div>

          {/* 3-Column Commercial Spec Strip */}
          <dl className="mt-14 pt-10 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <dt className="text-xs font-medium text-slate-500">
                Typical UK Investment
              </dt>
              <dd className="text-2xl font-bold font-mono tabular-nums text-slate-900 mt-1">
                {service.startingPriceGbp}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-slate-500">
                Delivery Timeline
              </dt>
              <dd className="text-2xl font-bold font-mono tabular-nums text-slate-900 mt-1">
                {service.typicalTimeline}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-slate-500">
                Engineering Standard
              </dt>
              <dd className="text-lg sm:text-xl font-bold font-mono text-slate-900 mt-1.5">
                {service.ukStandard}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Ideal For & Deliverables */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs font-medium text-sky-700">Who This Fits</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance">
              Built for UK teams seeking measurable commercial outcomes.
            </h2>
            <ul className="pt-4 space-y-3 border-t border-slate-200">
              {service.idealFor.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed"
                >
                  <Check
                    className="h-4 w-4 text-sky-700 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 border border-slate-200 bg-white rounded-xl divide-y divide-slate-100">
            <div className="p-6">
              <h3 className="text-base font-bold text-slate-900">
                What Is Included in {service.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Engineered end-to-end by our UK team—no outsourced shortcuts.
              </p>
            </div>
            {service.deliverables.map((item, idx) => (
              <div key={item.title} className="p-6 flex items-start gap-4">
                <span className="text-sm font-mono font-semibold text-sky-700 shrink-0">
                  0{idx + 1}.
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Step Delivery Roadmap */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-medium text-sky-700">
              Delivery Sequence
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mt-2">
              How we deliver {service.name}.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-slate-200">
            {service.processSteps.map((step) => (
              <div key={step.step}>
                <p className="text-sm font-mono font-semibold text-sky-700">
                  {step.step}
                </p>
                <h3 className="text-lg font-bold text-slate-900 mt-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service-Specific UK FAQ */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <p className="text-xs font-medium text-sky-700">Service FAQ</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-2 text-balance">
              Common questions on {service.name}.
            </h2>
          </div>

          <div className="lg:col-span-8 border border-slate-200 bg-white rounded-xl divide-y divide-slate-200">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqIdx(isOpen ? -1 : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors cursor-pointer"
                  >
                    <span className="text-base font-semibold text-slate-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-slate-500 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Services Explorer */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h2 className="text-xl font-bold text-slate-900">
              Explore Related UK Services
            </h2>
            <button
              type="button"
              onClick={() => onNavigateHome('#services')}
              className="text-sm font-medium text-sky-700 hover:underline self-start sm:self-auto cursor-pointer"
            >
              View All 10 Services
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <button
                key={rel.id}
                type="button"
                onClick={() => onNavigateService(rel.slug)}
                className="text-left border border-slate-200 bg-slate-50/50 hover:bg-white rounded-xl p-6 transition-colors flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <p className="text-xs font-mono text-slate-500">
                    {rel.startingPriceGbp}
                  </p>
                  <h3 className="text-base font-bold text-slate-900 mt-1.5">
                    {rel.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                    {rel.heroSummary}
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-sky-700">
                  Open Service Page
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-selected Proposal Form */}
      <ContactSection preselectedPlan={service.name} />
    </div>
  );
}
