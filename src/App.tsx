/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useMemo, useState } from 'react';
import { ArrowRight, Code2 } from 'lucide-react';
import { SiteHeader } from './components/SiteHeader';
import { CarePlansSection } from './components/CarePlansSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ContactSection } from './components/ContactSection';
import { GuideReaderModal } from './components/GuideReaderModal';
import { UkFaqSection } from './components/UkFaqSection';
import { ServiceLandingPage } from './components/ServiceLandingPage';
import {
  HERO_STUDIO_IMAGE,
  SERVICE_ENGINEERING_IMAGE,
  SERVICE_PILLARS,
  UK_OFFICE_ADDRESS,
  UK_REGIONS_SERVED,
  WORDPRESS_GUIDES,
  WORK_PROCESS,
  type ServiceCategory,
  type WordPressGuide,
} from './data/agencyData';
import {
  getServiceBySlug,
  SERVICE_LANDING_PAGES,
} from './data/servicePagesData';

function StudioPhoto({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`w-full h-full min-h-[260px] bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center p-6 text-slate-500 ${className}`}
      >
        <Code2 className="h-8 w-8 mb-2" aria-hidden="true" />
        <p className="text-xs font-medium text-center">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={`w-full h-full object-cover ${className}`}
    />
  );
}

function getSlugFromPath(pathname: string): string | null {
  const match = pathname.match(/^\/services\/([a-z0-9-]+)\/?$/i);
  return match ? match[1].toLowerCase() : null;
}

export default function App() {
  const [activeServiceSlug, setActiveServiceSlug] = useState<string | null>(() =>
    getSlugFromPath(window.location.pathname)
  );
  const [serviceFilter, setServiceFilter] = useState<ServiceCategory>('all');
  const [selectedPlan, setSelectedPlan] = useState('Website Development');
  const [activeGuide, setActiveGuide] = useState<WordPressGuide | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setActiveServiceSlug(getSlugFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const activeService = useMemo(() => {
    if (!activeServiceSlug) return undefined;
    return getServiceBySlug(activeServiceSlug);
  }, [activeServiceSlug]);

  const navigateToService = useCallback((slug: string) => {
    const targetPath = `/services/${slug}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    setActiveServiceSlug(slug);
  }, []);

  const navigateHome = useCallback((hash?: string) => {
    const targetUrl = hash ? `/${hash}` : '/';
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', targetUrl);
      setActiveServiceSlug(null);
      if (hash) {
        const id = hash.replace('#', '');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 60);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (hash) {
      const id = hash.replace('#', '');
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const filteredPillars = useMemo(() => {
    if (serviceFilter === 'all') return SERVICE_PILLARS;
    return SERVICE_PILLARS.filter((p) => p.category === serviceFilter);
  }, [serviceFilter]);

  const scrollToContact = (planLabel?: string) => {
    if (planLabel) {
      setSelectedPlan(planLabel);
    }
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="top" className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader
        onNavigateHome={navigateHome}
        onConsultClick={() => scrollToContact()}
      />

      <main>
        {activeService ? (
          <ServiceLandingPage
            service={activeService}
            onNavigateHome={navigateHome}
            onNavigateService={navigateToService}
          />
        ) : (
          <>
            {/* Hero Section: Proposition + Studio Anchor */}
            <section className="bg-white border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
                  <div className="lg:col-span-6 flex flex-col justify-center">
                    <p className="text-xs font-medium text-sky-700">
                      UK Web Engineering, SEO, GEO &amp; AI Studio · Since 2019
                    </p>
                    <h1
                      className="font-bold tracking-tight text-slate-900 mt-3 text-balance"
                      style={{
                        fontSize: 'clamp(2.25rem, 4vw, 3.65rem)',
                        lineHeight: 1.08,
                      }}
                    >
                      Bespoke websites, AI automation, and GEO visibility for UK businesses.
                    </h1>
                    <p className="text-base sm:text-lg text-slate-600 mt-5 leading-relaxed max-w-xl">
                      We design and engineer high-speed websites, WooCommerce stores, and custom integrations—paired with SEO, Generative Engine Optimisation (GEO) for ChatGPT, Gemini and Claude, and business process automation.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-5">
                      <button
                        type="button"
                        onClick={() => scrollToContact('Website Development')}
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        Book Free Consultation
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </button>

                      <a
                        href="#services"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-slate-900 hover:underline underline-offset-4 whitespace-nowrap shrink-0"
                      >
                        Explore All 10 Services
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="aspect-[16/10] lg:aspect-auto lg:h-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                      <StudioPhoto
                        src={HERO_STUDIO_IMAGE}
                        alt="WPCarePoint London web design, AI engineering, and digital growth studio"
                      />
                    </div>
                  </div>
                </div>

                {/* 4-Column Proof Strip */}
                <dl className="mt-14 pt-10 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-8">
                  <div>
                    <dt className="text-xs font-medium text-slate-500">
                      Projects Delivered
                    </dt>
                    <dd className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-slate-900 mt-1">
                      900+
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-slate-500">
                      AI Search Channels
                    </dt>
                    <dd className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-slate-900 mt-1">
                      Google · GPT · Claude
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-slate-500">
                      Target Mobile LCP
                    </dt>
                    <dd className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-slate-900 mt-1">
                      &lt; 1.2s
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-slate-500">
                      Client Rating
                    </dt>
                    <dd className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-slate-900 mt-1">
                      4.9 / 5
                    </dd>
                  </div>
                </dl>
              </div>
            </section>

            {/* Capabilities & Services: 4 Strategic Pillars linking to 10 Dedicated Service Pages */}
            <section id="services" className="py-20 bg-slate-50">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
                  <div className="max-w-2xl">
                    <p className="text-xs font-medium text-sky-700">
                      10 Specialist Capabilities · Dedicated Service Pages
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2 text-balance">
                      Web engineering, AI automation, and search growth built for UK buyers.
                    </h2>
                  </div>

                  <div
                    role="group"
                    aria-label="Filter service pillars"
                    className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 rounded-lg self-start lg:self-auto"
                  >
                    {(
                      [
                        ['all', 'All Services (10)'],
                        ['web', 'Web & E-commerce'],
                        ['visibility', 'SEO, GEO & AI Search'],
                        ['automation', 'AI Automation'],
                        ['brand', 'Brand & Growth'],
                      ] as const
                    ).map(([key, label]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setServiceFilter(key)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                          serviceFilter === key
                            ? 'bg-white text-slate-900 shadow-sm'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  {filteredPillars.map((pillar) => {
                    const spanClass =
                      serviceFilter === 'all'
                        ? pillar.featured
                          ? 'lg:col-span-6'
                          : 'lg:col-span-4'
                        : 'lg:col-span-8';

                    return (
                      <article
                        key={pillar.id}
                        className={`${spanClass} border border-slate-200 bg-white rounded-xl p-7 flex flex-col justify-between`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-4">
                            <span className="text-sm font-mono font-semibold text-sky-700">
                              {pillar.index}
                            </span>
                            <span className="text-xs text-slate-500 font-mono tabular-nums">
                              {pillar.items.length}{' '}
                              {pillar.items.length === 1 ? 'service' : 'services'}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold text-slate-900 mt-2">
                            {pillar.title}
                          </h3>
                          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                            {pillar.summary}
                          </p>

                          <ul className="mt-6 divide-y divide-slate-100 border-t border-slate-100">
                            {pillar.items.map((item) => {
                              const landing = SERVICE_LANDING_PAGES.find(
                                (p) => p.id === item.id
                              );
                              return (
                                <li
                                  key={item.id}
                                  className="py-3.5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4"
                                >
                                  <div className="min-w-0">
                                    {landing ? (
                                      <a
                                        href={`/services/${landing.slug}`}
                                        onClick={(e) => {
                                          e.preventDefault();
                                          navigateToService(landing.slug);
                                        }}
                                        className="text-sm font-semibold text-slate-900 hover:text-sky-700 hover:underline transition-colors"
                                      >
                                        {item.name}
                                      </a>
                                    ) : (
                                      <h4 className="text-sm font-semibold text-slate-900">
                                        {item.name}
                                      </h4>
                                    )}
                                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                                      {item.outcome}
                                    </p>
                                  </div>

                                  {landing && (
                                    <a
                                      href={`/services/${landing.slug}`}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        navigateToService(landing.slug);
                                      }}
                                      className="inline-flex items-center gap-1 text-xs font-medium text-sky-700 hover:text-sky-900 hover:underline whitespace-nowrap shrink-0 self-start sm:mt-0.5"
                                    >
                                      View Page
                                      <ArrowRight
                                        className="h-3.5 w-3.5"
                                        aria-hidden="true"
                                      />
                                    </a>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </article>
                    );
                  })}

                  <aside className="lg:col-span-4 border border-slate-200 bg-white rounded-xl overflow-hidden flex flex-col">
                    <div className="aspect-[4/3] bg-slate-100">
                      <StudioPhoto
                        src={SERVICE_ENGINEERING_IMAGE}
                        alt="Senior UK engineer auditing website performance, SEO schema, and AI workflows"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-base font-bold text-slate-900">
                          Not sure which combination fits your business?
                        </h3>
                        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                          Tell us your commercial goal—from launching a new UK e-commerce build to winning ChatGPT/Gemini citations or automating lead workflows—and we will scope a fixed-milestone plan.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          scrollToContact('Custom Web Solutions and Integrations')
                        }
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-slate-900 hover:text-sky-700 self-start cursor-pointer"
                      >
                        Request a Technical Roadmap
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </aside>
                </div>
              </div>
            </section>

            {/* WordPress Care Plans */}
            <CarePlansSection
              selectedPlanId={selectedPlan}
              onSelectPlan={(planLabel) => scrollToContact(planLabel)}
            />

            {/* Case Studies */}
            <CaseStudiesSection />

            {/* Engineering Process */}
            <section
              id="process"
              className="py-20 border-t border-slate-200 bg-white"
            >
              <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-2xl mb-12">
                  <p className="text-xs font-medium text-sky-700">How We Work</p>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2 text-balance">
                    Disciplined delivery from audit to AI search and automation.
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-6 border-t border-slate-200">
                  {WORK_PROCESS.map((item) => (
                    <div key={item.step}>
                      <p className="text-sm font-mono font-semibold text-sky-700">
                        {item.step}
                      </p>
                      <h3 className="text-lg font-bold text-slate-900 mt-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Technical Guides */}
            <section
              id="guides"
              className="py-20 border-t border-slate-200 bg-slate-50"
            >
              <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-2xl mb-12">
                  <p className="text-xs font-medium text-sky-700">
                    Engineering &amp; Growth Guides
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2 text-balance">
                    Practical playbooks on GEO, AI automation, and web performance.
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {WORDPRESS_GUIDES.map((guide) => (
                    <article
                      key={guide.id}
                      className="border border-slate-200 bg-white rounded-xl p-6 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <span>{guide.topic}</span>
                          <span aria-hidden="true">·</span>
                          <span>{guide.publishedAt}</span>
                          <span aria-hidden="true">·</span>
                          <span>{guide.readTime}</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mt-2.5 leading-snug">
                          {guide.title}
                        </h3>
                        <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                          {guide.excerpt}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setActiveGuide(guide)}
                        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-slate-900 hover:text-sky-700 transition-colors self-start cursor-pointer"
                      >
                        Read Guide
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            {/* UK FAQ */}
            <UkFaqSection />

            {/* Lead Capture / Consultation */}
            <ContactSection preselectedPlan={selectedPlan} />
          </>
        )}
      </main>

      {/* Quiet Footer with Direct Links to All 10 Dedicated Service Pages */}
      <footer className="border-t border-slate-200 bg-slate-50 py-14">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-200">
            <div className="md:col-span-4 space-y-2">
              <p className="text-base font-bold text-slate-900">WPCarePoint</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                UK Web Engineering, SEO, GEO &amp; AI Automation ·{' '}
                <span className="font-mono">wpcarepoint.co.uk</span>
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {UK_OFFICE_ADDRESS}
              </p>
              <p className="text-xs text-slate-500">
                Serving {UK_REGIONS_SERVED.join(' · ')}
              </p>
              <p className="text-xs pt-1">
                <a
                  href="mailto:wpcarepoint@gmail.com"
                  className="text-sky-700 hover:underline font-medium"
                >
                  wpcarepoint@gmail.com
                </a>
              </p>
            </div>

            <div className="md:col-span-8">
              <p className="text-xs font-semibold text-slate-900 mb-3">
                Dedicated Service Pages
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-slate-600">
                {SERVICE_LANDING_PAGES.map((svc) => (
                  <a
                    key={svc.slug}
                    href={`/services/${svc.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToService(svc.slug);
                    }}
                    className="hover:text-slate-900 hover:underline truncate"
                  >
                    {svc.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-slate-500">
            <div className="flex flex-wrap items-center gap-6 font-medium text-slate-600">
              <a
                href="/#services"
                onClick={(e) => {
                  e.preventDefault();
                  navigateHome('#services');
                }}
                className="hover:text-slate-900"
              >
                Services
              </a>
              <a
                href="/#care-plans"
                onClick={(e) => {
                  e.preventDefault();
                  navigateHome('#care-plans');
                }}
                className="hover:text-slate-900"
              >
                Care Plans
              </a>
              <a
                href="/#case-studies"
                onClick={(e) => {
                  e.preventDefault();
                  navigateHome('#case-studies');
                }}
                className="hover:text-slate-900"
              >
                Case Studies
              </a>
              <a
                href="/#faq"
                onClick={(e) => {
                  e.preventDefault();
                  navigateHome('#faq');
                }}
                className="hover:text-slate-900"
              >
                FAQ
              </a>
              <a
                href="/#guides"
                onClick={(e) => {
                  e.preventDefault();
                  navigateHome('#guides');
                }}
                className="hover:text-slate-900"
              >
                Guides
              </a>
            </div>
            <p>© 2026 WPCarePoint UK. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <GuideReaderModal
        guide={activeGuide}
        onClose={() => setActiveGuide(null)}
        onBookConsult={() => scrollToContact()}
      />
    </div>
  );
}
