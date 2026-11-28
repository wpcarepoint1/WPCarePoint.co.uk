import { useState } from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import { BRAND_INFO, HERO_COMMITMENTS } from '../../data/homepageData';
import { Button } from '../ui/Button';

interface HeroSectionProps {
  onJumpToSection: (hash: string) => void;
}

export function HeroSection({ onJumpToSection }: HeroSectionProps) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section className="bg-white bg-architectural-grid border-b border-[#dde6eb]">
      <div className="max-w-7xl mx-auto px-6 py-10 sm:py-14 lg:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 wpc-route-enter">
            <p className="text-xs font-mono font-semibold tracking-wider uppercase text-[#00749c]">
              {BRAND_INFO.positioning}
            </p>

            <h1
              className="font-bold tracking-tight text-[#003b4f] mt-3 text-balance"
              style={{
                fontSize: 'clamp(2.15rem, 4vw, 3.45rem)',
                lineHeight: 1.07,
              }}
            >
              {BRAND_INFO.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-[#2e2e2e] mt-5 leading-relaxed max-w-xl">
              Dependable custom WordPress builds, fast WooCommerce stores, practical
              AI workflows, and ongoing technical stewardship—built for lasting UK ownership.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <Button
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onJumpToSection('#contact');
                }}
                variant="primary"
                size="lg"
                className="group"
              >
                <span>Start an Email Brief</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Button>

              <Button
                href="#services-overview"
                onClick={(e) => {
                  e.preventDefault();
                  onJumpToSection('#services-overview');
                }}
                variant="secondary"
                size="lg"
              >
                Explore Services
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#dde6eb] bg-[#eef3f6] shadow-xs">
              {imgFailed ? (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-[#6c757d]">
                  <Layers className="h-8 w-8 mb-2 text-[#00749c]" aria-hidden="true" />
                  <p className="text-xs font-medium text-center">
                    {BRAND_INFO.heroImageAlt}
                  </p>
                </div>
              ) : (
                <img
                  src={BRAND_INFO.heroImageUrl}
                  alt={BRAND_INFO.heroImageAlt}
                  width={1376}
                  height={768}
                  loading="eager"
                  decoding="sync"
                  fetchPriority="high"
                  onError={() => setImgFailed(true)}
                  className="w-full h-full object-cover"
                />
              )}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#003b4f]/85 via-[#003b4f]/25 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 px-5 py-4">
                <p className="text-xs sm:text-sm font-medium text-white">
                  Nutfield, Surrey · Serving organisations across the United Kingdom
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Standards Strip */}
        <dl className="mt-10 pt-7 border-t border-[#dde6eb] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {HERO_COMMITMENTS.map((item) => (
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
