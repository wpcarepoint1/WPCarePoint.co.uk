import { Mail, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../../data/homepageData';

interface SiteFooterProps {
  onNavigateHome: (hash?: string) => void;
  onNavigatePath?: (path: string) => void;
}

const FOOTER_LINK_CLASS =
  'inline-flex min-h-[44px] md:min-h-0 py-1 md:py-0.5 items-center hover:text-[#00b2d4] transition-colors';

export function SiteFooter({ onNavigateHome, onNavigatePath }: SiteFooterProps) {
  const handleAnchor = (hash: string) => {
    onNavigateHome(hash);
  };

  const handleRoute = (path: string, fallbackHash: string) => {
    if (onNavigatePath) {
      onNavigatePath(path);
    } else {
      onNavigateHome(fallbackHash);
    }
  };

  return (
    <footer className="bg-[#003b4f] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-14">
        {/* 4 Concise Footer Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 border-b border-white/15">
          {/* Group 1: Brand & Official Contact */}
          <div className="lg:col-span-4 space-y-3">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
              }}
              className="inline-flex min-h-[44px] items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b2d4] rounded-md"
            >
              <span
                aria-hidden="true"
                className="h-7 w-7 rounded-md bg-[#00749c] border border-white/20 flex items-center justify-center font-mono text-[11px] font-bold text-white"
              >
                WP
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                {BRAND_INFO.name}
              </span>
            </a>

            <p className="text-sm text-white/85 leading-relaxed">
              {BRAND_INFO.positioning}. {BRAND_INFO.tagline}
            </p>

            <div className="pt-1 space-y-1.5 text-xs text-white/80">
              <p className="flex items-start gap-2 leading-relaxed">
                <MapPin
                  className="h-3.5 w-3.5 text-[#00b2d4] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>{BRAND_INFO.address}</span>
              </p>
              <p>
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="inline-flex min-h-[44px] md:min-h-0 py-1 md:py-0.5 items-center gap-2 text-[#00b2d4] hover:text-white font-medium transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>{BRAND_INFO.email}</span>
                </a>
              </p>
              <p className="text-white/65">Email enquiries only · United Kingdom</p>
            </div>
          </div>

          {/* Group 2: Core Services */}
          <div className="lg:col-span-3 space-y-2">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00b2d4]">
              Services
            </p>
            <ul className="space-y-0.5 md:space-y-2 text-sm text-white/80">
              <li>
                <a
                  href="/services/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRoute('/services/', '#services-overview');
                  }}
                  className={FOOTER_LINK_CLASS}
                >
                  All Services Hub
                </a>
              </li>
              <li>
                <a
                  href="/services/website-development/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRoute('/services/website-development/', '#website-development');
                  }}
                  className={FOOTER_LINK_CLASS}
                >
                  Website Design &amp; Development
                </a>
              </li>
              <li>
                <a
                  href="/wordpress-speed-optimisation/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRoute('/wordpress-speed-optimisation/', '#seo-ai-search');
                  }}
                  className={FOOTER_LINK_CLASS}
                >
                  WordPress Speed Optimisation
                </a>
              </li>
              <li>
                <a
                  href="/services/ecommerce-development/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRoute('/services/ecommerce-development/', '#ecommerce-development');
                  }}
                  className={FOOTER_LINK_CLASS}
                >
                  eCommerce Development
                </a>
              </li>
              <li>
                <a
                  href="/services/ai-business-automation/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRoute('/services/ai-business-automation/', '#ai-automation');
                  }}
                  className={FOOTER_LINK_CLASS}
                >
                  AI &amp; Business Automation
                </a>
              </li>
              <li>
                <a
                  href="/services/website-care-support/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRoute('/services/website-care-support/', '#website-care');
                  }}
                  className={FOOTER_LINK_CLASS}
                >
                  Website Care &amp; Support
                </a>
              </li>
              <li>
                <a
                  href="/services/ai-search-optimisation/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRoute('/services/ai-search-optimisation/', '#seo-ai-search');
                  }}
                  className={FOOTER_LINK_CLASS}
                >
                  SEO &amp; AI Search Optimisation
                </a>
              </li>
            </ul>
          </div>

          {/* Group 3: Care & Delivery */}
          <div className="lg:col-span-3 space-y-2">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00b2d4]">
              Agency &amp; Care
            </p>
            <ul className="space-y-0.5 md:space-y-2 text-sm text-white/80">
              <li>
                <a
                  href="/about/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRoute('/about/', '#why-wpcarepoint');
                  }}
                  className={FOOTER_LINK_CLASS}
                >
                  About WPCarePoint
                </a>
              </li>
              <li>
                <a
                  href="/#why-wpcarepoint"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAnchor('#why-wpcarepoint');
                  }}
                  className={FOOTER_LINK_CLASS}
                >
                  Why Choose WPCarePoint
                </a>
              </li>
              <li>
                <a
                  href="/#our-process"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAnchor('#our-process');
                  }}
                  className={FOOTER_LINK_CLASS}
                >
                  Working Process
                </a>
              </li>
              <li>
                <a
                  href="/#quick-fix"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAnchor('#quick-fix');
                  }}
                  className={FOOTER_LINK_CLASS}
                >
                  WordPress Quick Fix
                </a>
              </li>
              <li>
                <a
                  href="/#portfolio-preview"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAnchor('#portfolio-preview');
                  }}
                  className={FOOTER_LINK_CLASS}
                >
                  Portfolio Recovery
                </a>
              </li>
              <li>
                <a
                  href="/#testimonials"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAnchor('#testimonials');
                  }}
                  className={FOOTER_LINK_CLASS}
                >
                  Client Verification
                </a>
              </li>
            </ul>
          </div>

          {/* Group 4: Support & Standards */}
          <div className="lg:col-span-2 space-y-2">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00b2d4]">
              Standards
            </p>
            <ul className="space-y-0.5 md:space-y-2 text-sm text-white/80">
              <li>
                <a
                  href="/#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAnchor('#faq');
                  }}
                  className={FOOTER_LINK_CLASS}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/contact/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRoute('/contact/', '#contact');
                  }}
                  className={FOOTER_LINK_CLASS}
                >
                  Contact WPCarePoint
                </a>
              </li>
              <li className="text-xs text-white/70 pt-2">UK GDPR &amp; PECR Ready</li>
              <li className="text-xs text-white/70">WCAG 2.2 AA Focus</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-white/75">
          <p>© {new Date().getFullYear()} WPCarePoint · wpcarepoint.co.uk</p>
          <p>{BRAND_INFO.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
