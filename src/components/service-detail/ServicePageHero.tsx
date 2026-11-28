import { useState, type MouseEvent } from 'react';
import { ArrowLeft, ArrowRight, Layers } from 'lucide-react';
import type { DedicatedServicePageConfig } from '../../data/dedicatedServicePagesData';
import { Button } from '../ui/Button';

interface ServicePageHeroProps {
  page: DedicatedServicePageConfig;
  onNavigateHome: (hash?: string) => void;
  onNavigatePath?: (path: string) => void;
  onJumpToSection: (targetId: string) => void;
}

export function ServicePageHero({
  page,
  onNavigateHome,
  onNavigatePath,
  onJumpToSection,
}: ServicePageHeroProps) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section className="bg-gradient-to-b from-[#f7f9fa] via-[#f7f9fa] to-white bg-architectural-grid border-b border-[#dde6eb]">
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-14 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20">
        {/* Accessible Breadcrumb */}
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
          <a
            href="/services/"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigatePath) {
                onNavigatePath('/services/');
              } else {
                onNavigateHome('#services-overview');
              }
            }}
            className="inline-flex items-center min-h-[44px] text-[#6c757d] hover:text-[#00749c] hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded-md"
          >
            Services
          </a>
          <span aria-hidden="true">/</span>
          <span className="font-semibold text-[#003b4f]" aria-current="page">
            {page.breadcrumbLabel}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 wpc-route-enter">
            <div className="inline-flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-6 bg-[#b9ccd6]" />
              <p className="text-xs font-mono font-semibold tracking-[0.12em] uppercase text-[#00749c]">
                {page.hero.eyebrow}
              </p>
            </div>

            <h1
              className="font-semibold tracking-[-0.03em] text-[#003b4f] mt-3.5 text-balance"
              style={{
                fontSize: 'clamp(2.15rem, 4vw, 3.45rem)',
                lineHeight: 1.07,
              }}
            >
              {page.hero.headline}
            </h1>

            <p className="text-base sm:text-[18px] text-[#2e2e2e] mt-5 leading-relaxed max-w-xl">
              {page.hero.description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4">
              <Button
                href="#contact"
                onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  onJumpToSection('contact');
                }}
                variant="primary"
                size="lg"
                className="group pr-3 pl-6"
              >
                <span>{page.hero.primaryCtaLabel}</span>
                <span
                  aria-hidden="true"
                  className="h-8 w-8 rounded-full bg-white text-[#003b4f] inline-flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>

              <Button
                href={`#${page.hero.secondaryCtaTargetId}`}
                onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  onJumpToSection(page.hero.secondaryCtaTargetId);
                }}
                variant="secondary"
                size="lg"
              >
                {page.hero.secondaryCtaLabel}
              </Button>
            </div>

            <div className="mt-5">
              <a
                href="/services/"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigatePath) {
                    onNavigatePath('/services/');
                  } else {
                    onNavigateHome('#services-overview');
                  }
                }}
                className="inline-flex items-center gap-1.5 min-h-[44px] text-xs font-semibold text-[#6c757d] hover:text-[#00749c] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded-md"
              >
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Back to all WPCarePoint services</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <figure className="group relative rounded-3xl overflow-hidden border border-[#dde6eb] bg-[#eef3f6] shadow-[0_18px_40px_-24px_rgba(0,59,79,0.2)]">
              <div className="aspect-[16/10] overflow-hidden bg-[#eef3f6]">
                {imgFailed ? (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-[#6c757d]">
                    <Layers className="h-8 w-8 mb-2 text-[#00749c]" aria-hidden="true" />
                    <p className="text-xs font-medium text-center">{page.hero.imageAlt}</p>
                  </div>
                ) : (
                  <img
                    src={page.hero.imageUrl}
                    alt={page.hero.imageAlt}
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
                {page.hero.imageCaption}
              </figcaption>
            </figure>
          </div>
        </div>

        {/* 4-Column Engineering Standards Strip */}
        <dl className="mt-12 pt-8 border-t border-[#dde6eb] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {page.hero.standards.map((item) => (
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
  );
}
