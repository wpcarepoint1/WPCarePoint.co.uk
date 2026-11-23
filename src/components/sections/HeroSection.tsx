import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Layers } from 'lucide-react';
import { BRAND_INFO, HERO_COMMITMENTS } from '../../data/homepageData';
import { EASE_OUT_EXPO } from '../MotionPrimitives';
import { Button } from '../ui/Button';

interface HeroSectionProps {
  onJumpToSection: (hash: string) => void;
}

export function HeroSection({ onJumpToSection }: HeroSectionProps) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section className="bg-white bg-architectural-grid border-b border-[#dde6eb]">
      <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
            className="lg:col-span-6"
          >
            <p className="text-xs font-mono font-semibold tracking-wide uppercase text-[#00749c]">
              {BRAND_INFO.positioning}
            </p>

            <h1
              className="font-bold tracking-tight text-[#003b4f] mt-3 text-balance"
              style={{
                fontSize: 'clamp(2.1rem, 4vw, 3.5rem)',
                lineHeight: 1.08,
              }}
            >
              {BRAND_INFO.tagline}
            </h1>

            <p className="text-base sm:text-lg text-[#2e2e2e] mt-5 leading-relaxed max-w-xl">
              WPCarePoint partners with British organisations to build dependable
              WordPress and custom web platforms, reliable WooCommerce stores,
              practical AI workflows, and technical SEO built for lasting ownership.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
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
                <span>Start a Project</span>
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.05, ease: EASE_OUT_EXPO }}
            className="lg:col-span-6"
          >
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
                className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#003b4f]/85 via-[#003b4f]/30 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                <p className="text-xs sm:text-sm font-medium text-white">
                  Nutfield, Surrey · Serving organisations across the United Kingdom
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4-Column Standards Strip */}
        <dl className="mt-12 pt-8 border-t border-[#dde6eb] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
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
