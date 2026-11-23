import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowRight, Layers } from 'lucide-react';
import type { DedicatedServicePageConfig } from '../../data/dedicatedServicePagesData';
import { EASE_OUT_EXPO } from '../MotionPrimitives';
import { Button } from '../ui/Button';

interface ServicePageHeroProps {
  page: DedicatedServicePageConfig;
  onNavigateHome: (hash?: string) => void;
  onJumpToSection: (targetId: string) => void;
}

export function ServicePageHero({
  page,
  onNavigateHome,
  onJumpToSection,
}: ServicePageHeroProps) {
  const prefersReduced = useReducedMotion();
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section className="bg-white bg-architectural-grid border-b border-[#dde6eb]">
      <div className="max-w-7xl mx-auto px-6 py-10 sm:py-14 lg:py-16">
        {/* Accessible Breadcrumb */}
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
          <a
            href="/#services-overview"
            onClick={(e) => {
              e.preventDefault();
              onNavigateHome('#services-overview');
            }}
            className="inline-flex items-center min-h-[44px] text-[#6c757d] hover:text-[#00749c] hover:underline transition-colors"
          >
            Services
          </a>
          <span aria-hidden="true">/</span>
          <span className="font-semibold text-[#003b4f]" aria-current="page">
            {page.breadcrumbLabel}
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
              {page.hero.eyebrow}
            </p>

            <h1
              className="font-bold tracking-tight text-[#003b4f] mt-3 text-balance"
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3.25rem)',
                lineHeight: 1.09,
              }}
            >
              {page.hero.headline}
            </h1>

            <p className="text-base sm:text-lg text-[#2e2e2e] mt-5 leading-relaxed max-w-xl">
              {page.hero.description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <Button
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onJumpToSection('contact');
                }}
                variant="primary"
                size="lg"
                className="group"
              >
                <span>{page.hero.primaryCtaLabel}</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Button>

              <Button
                href={`#${page.hero.secondaryCtaTargetId}`}
                onClick={(e) => {
                  e.preventDefault();
                  onJumpToSection(page.hero.secondaryCtaTargetId);
                }}
                variant="secondary"
                size="lg"
              >
                {page.hero.secondaryCtaLabel}
              </Button>
            </div>

            <div className="mt-6">
              <a
                href="/#services-overview"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateHome('#services-overview');
                }}
                className="inline-flex items-center gap-1.5 min-h-[44px] text-xs font-semibold text-[#6c757d] hover:text-[#00749c] transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Back to all WPCarePoint services</span>
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
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                  />
                )}
              </div>
              <figcaption className="px-5 py-3.5 bg-white border-t border-[#e9eff2] text-xs font-medium text-[#6c757d]">
                {page.hero.imageCaption}
              </figcaption>
            </figure>
          </motion.div>
        </div>

        {/* 4-Column Engineering Standards Strip */}
        <dl className="mt-10 pt-8 border-t border-[#dde6eb] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {page.hero.standards.map((item) => (
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
  );
}
