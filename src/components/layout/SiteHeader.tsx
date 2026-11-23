import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { BRAND_INFO, NAV_ITEMS, NAV_SERVICE_DROPDOWN } from '../../data/homepageData';
import { Button } from '../ui/Button';

interface SiteHeaderProps {
  onNavigateHome: (hash?: string) => void;
  onNavigateService?: (slug: string) => void;
}

export function SiteHeader({
  onNavigateHome,
  onNavigateService,
}: SiteHeaderProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleAnchorClick = (hash: string) => {
    setServicesOpen(false);
    setMobileOpen(false);
    onNavigateHome(hash);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#003b4f] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setServicesOpen(false);
            setMobileOpen(false);
            onNavigateHome();
          }}
          className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b2d4] rounded-lg py-1"
        >
          <span
            aria-hidden="true"
            className="h-8 w-8 rounded-lg bg-[#00749c] border border-white/20 flex items-center justify-center font-mono text-xs font-bold tracking-tight text-white"
          >
            WP
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            {BRAND_INFO.name}
          </span>
        </a>

        {/* Zone 2: Primary Desktop Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7"
        >
          {NAV_ITEMS.map((item) => {
            if (item.hasDropdown) {
              return (
                <div key={item.label} ref={dropdownRef} className="relative">
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    onClick={() => setServicesOpen((prev) => !prev)}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-white/90 hover:text-[#00b2d4] transition-colors whitespace-nowrap shrink-0 py-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b2d4] rounded-md"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-150 ${
                        servicesOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {servicesOpen && (
                    <div className="absolute left-0 top-full mt-2 w-80 rounded-2xl bg-white text-[#2e2e2e] border border-[#dde6eb] shadow-xl p-2 z-50">
                      <div className="px-3 py-2 border-b border-[#e9eff2] mb-1">
                        <button
                          type="button"
                          onClick={() => handleAnchorClick('#services-overview')}
                          className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00749c] hover:text-[#003b4f] cursor-pointer"
                        >
                          All 5 Core Services →
                        </button>
                      </div>
                      <ul className="space-y-0.5">
                        {NAV_SERVICE_DROPDOWN.map((svc) => (
                          <li key={svc.label}>
                            <a
                              href={svc.href}
                              onClick={(e) => {
                                e.preventDefault();
                                setServicesOpen(false);
                                onNavigateHome(svc.href);
                              }}
                              className="block rounded-xl px-3 py-2.5 hover:bg-[#f7f9fa] transition-colors group"
                            >
                              <p className="text-sm font-semibold text-[#003b4f] group-hover:text-[#00749c]">
                                {svc.label}
                              </p>
                              <p className="text-xs text-[#6c757d] mt-0.5 leading-snug">
                                {svc.description}
                              </p>
                            </a>
                          </li>
                        ))}
                      </ul>
                      {onNavigateService && (
                        <div className="mt-1 pt-2 px-3 pb-1 border-t border-[#e9eff2]">
                          <a
                            href="/services/website-development"
                            onClick={(e) => {
                              e.preventDefault();
                              setServicesOpen(false);
                              onNavigateService('website-development');
                            }}
                            className="text-xs font-semibold text-[#00749c] hover:underline"
                          >
                            View Dedicated Service Specifications →
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleAnchorClick(item.href);
                }}
                className="text-sm font-medium text-white/90 hover:text-[#00b2d4] transition-colors whitespace-nowrap shrink-0 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b2d4] rounded-md"
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden lg:block">
            <Button
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleAnchorClick('#contact');
              }}
              variant="onDark"
              size="sm"
            >
              Get in Touch
            </Button>
          </div>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-xl border border-white/20 text-white hover:border-[#00b2d4] hover:text-[#00b2d4] transition-colors cursor-pointer"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#003b4f] border-t border-white/10 px-6 py-5 space-y-4">
          <nav aria-label="Mobile Navigation" className="space-y-1">
            <p className="text-xs font-mono uppercase tracking-wider text-[#00b2d4] pb-1">
              Services
            </p>
            {NAV_SERVICE_DROPDOWN.map((svc) => (
              <a
                key={svc.label}
                href={svc.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleAnchorClick(svc.href);
                }}
                className="flex min-h-[44px] items-center text-sm font-medium text-white/90 hover:text-[#00b2d4] border-b border-white/10"
              >
                {svc.label}
              </a>
            ))}

            <div className="pt-3 space-y-1">
              {NAV_ITEMS.filter((item) => !item.hasDropdown).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleAnchorClick(item.href);
                  }}
                  className="flex min-h-[44px] items-center text-sm font-semibold text-white hover:text-[#00b2d4]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="pt-2">
            <Button
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleAnchorClick('#contact');
              }}
              variant="onDark"
              size="md"
              className="w-full"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
