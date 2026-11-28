import { useState, type MouseEvent } from 'react';
import { ArrowRight, ArrowUpRight, Layers } from 'lucide-react';
import { BRAND_INFO, HERO_COMMITMENTS } from '../../data/homepageData';
import { Button } from '../ui/Button';

interface HeroSectionProps {
  onJumpToSection: (hash: string) => void;
  onNavigatePath?: (path: string) => void;
}

export function HeroSection({ onJumpToSection, onNavigatePath }: HeroSectionProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const [archFailed, setArchFailed] = useState(false);
  const [workFailed, setWorkFailed] = useState(false);

  return (
    <section className="bg-gradient-to-b from-[#f7f9fa] via-[#f7f9fa] to-white bg-architectural-grid border-b border-[#dde6eb]">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24">
        {/* Tier 1: Asymmetric Editorial Statement & Hairlined Standards Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-7 wpc-route-enter">
            <div className="inline-flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-6 bg-[#b9ccd6]" />
              <p className="text-xs font-mono font-semibold tracking-[0.12em] uppercase text-[#00749c]">
                {BRAND_INFO.positioning}
              </p>
            </div>

            <h1
              className="font-semibold tracking-[-0.03em] text-[#003b4f] mt-4 text-balance"
              style={{
                fontSize: 'clamp(2.35rem, 4.4vw, 3.8rem)',
                lineHeight: 1.06,
              }}
            >
              {BRAND_INFO.heroHeadline}
            </h1>

            <p className="text-base sm:text-[18px] text-[#2e2e2e] mt-5 leading-relaxed max-w-2xl">
              We design, speed-tune, and support fast business websites and online
              stores—built cleanly so you keep full control of your code, hosting, and growth.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4">
              <Button
                href="#contact"
                onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  onJumpToSection('#contact');
                }}
                variant="primary"
                size="lg"
                className="group pr-3 pl-6"
              >
                <span>Book a Consultation</span>
                <span
                  aria-hidden="true"
                  className="h-8 w-8 rounded-full bg-white text-[#003b4f] inline-flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>

              <Button
                href="#services-overview"
                onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  onJumpToSection('#services-overview');
                }}
                variant="secondary"
                size="lg"
              >
                Explore Services
              </Button>
            </div>

            <p className="mt-5 text-sm text-[#6c757d]">
              Direct enquiries:{' '}
              <a
                href={`mailto:${BRAND_INFO.email}?subject=${encodeURIComponent(
                  'Consultation & Project Scoping Enquiry'
                )}`}
                className="font-semibold text-[#00749c] hover:text-[#003b4f] underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded"
              >
                {BRAND_INFO.email}
              </a>
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="border-t border-[#dde6eb] pt-6">
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {HERO_COMMITMENTS.map((item) => (
                  <div
                    key={item.label}
                    className="pb-5 border-b border-[#e9eff2]"
                  >
                    <dt className="text-[11px] font-mono font-semibold uppercase tracking-[0.1em] text-[#6c757d]">
                      {item.label}
                    </dt>
                    <dd className="text-base sm:text-[17px] font-semibold text-[#003b4f] mt-1.5 leading-snug">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Tier 2: Multi-Plate Architectural Studio Showcase */}
        <div className="mt-12 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          <div className="lg:col-span-7">
            <div className="group relative w-full h-full aspect-[16/10] lg:aspect-auto lg:min-h-[280px] rounded-3xl overflow-hidden border border-[#dde6eb] bg-[#eef3f6] shadow-[0_18px_40px_-24px_rgba(0,59,79,0.22)]">
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
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              )}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#003b4f]/90 via-[#003b4f]/35 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 px-6 py-5 flex items-center justify-between gap-4">
                <p className="text-xs sm:text-sm font-medium text-white">
                  Nutfield, Surrey · Serving organisations across the United Kingdom
                </p>
                <span className="hidden sm:inline-block text-[11px] font-mono text-[#00b2d4]">
                  en-GB · Staging First
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
            <a
              href="/services/"
              onClick={(e) => {
                if (onNavigatePath) {
                  e.preventDefault();
                  onNavigatePath('/services/');
                } else {
                  e.preventDefault();
                  onJumpToSection('#services-overview');
                }
              }}
              className="group wpc-studio-card rounded-2xl border border-[#dde6eb] bg-white p-4 sm:p-5 grid grid-cols-12 gap-4 items-center hover:border-[#00749c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c]"
            >
              <div className="col-span-5 aspect-[4/3] rounded-xl overflow-hidden bg-[#eef3f6] border border-[#e9eff2]">
                {archFailed ? (
                  <div className="w-full h-full flex items-center justify-center text-[#00749c]">
                    <Layers className="h-5 w-5" aria-hidden="true" />
                  </div>
                ) : (
                  <img
                    src={BRAND_INFO.architectureImageUrl}
                    alt={BRAND_INFO.architectureImageAlt}
                    width={1200}
                    height={896}
                    loading="eager"
                    decoding="sync"
                    onError={() => setArchFailed(true)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                )}
              </div>
              <div className="col-span-7 space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono font-semibold text-[#00749c]">
                    01 · Capabilities
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-[#6c757d] group-hover:text-[#00749c] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-base font-semibold text-[#003b4f] leading-snug group-hover:text-[#00749c] transition-colors">
                  Websites, WooCommerce &amp; Care Systems
                </p>
                <p className="text-xs text-[#6c757d] leading-relaxed">
                  Explore all five technical disciplines and UK engineering standards.
                </p>
              </div>
            </a>

            <a
              href="/#portfolio-preview"
              onClick={(e) => {
                e.preventDefault();
                onJumpToSection('#portfolio-preview');
              }}
              className="group wpc-studio-card rounded-2xl border border-[#dde6eb] bg-white p-4 sm:p-5 grid grid-cols-12 gap-4 items-center hover:border-[#00749c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c]"
            >
              <div className="col-span-5 aspect-[4/3] rounded-xl overflow-hidden bg-[#eef3f6] border border-[#e9eff2]">
                {workFailed ? (
                  <div className="w-full h-full flex items-center justify-center text-[#00749c]">
                    <Layers className="h-5 w-5" aria-hidden="true" />
                  </div>
                ) : (
                  <img
                    src={BRAND_INFO.portfolioImageUrl}
                    alt={BRAND_INFO.portfolioImageAlt}
                    width={1200}
                    height={750}
                    loading="eager"
                    decoding="sync"
                    onError={() => setWorkFailed(true)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                )}
              </div>
              <div className="col-span-7 space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono font-semibold text-[#00749c]">
                    02 · Official Proof
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-[#6c757d] group-hover:text-[#00749c] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-base font-semibold text-[#003b4f] leading-snug group-hover:text-[#00749c] transition-colors">
                  Verified Fiverr Portfolio &amp; Reviews
                </p>
                <p className="text-xs text-[#6c757d] leading-relaxed">
                  Inspect delivered WordPress &amp; WooCommerce work directly on Fiverr.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
