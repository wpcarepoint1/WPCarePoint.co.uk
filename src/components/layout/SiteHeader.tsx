import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from 'react';
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { BRAND_INFO, NAV_ITEMS, NAV_SERVICE_DROPDOWN } from '../../data/homepageData';
import { Button } from '../ui/Button';

interface SiteHeaderProps {
  currentPath?: string;
  onNavigateHome: (hash?: string) => void;
  onNavigateService?: (slug: string) => void;
  onNavigatePath?: (path: string) => void;
  hasLocalContact?: boolean;
}

function isSameRoute(currentPath: string, targetPath?: string): boolean {
  if (!targetPath) return false;
  const normA = currentPath.replace(/\/+$/, '') || '/';
  const normB = targetPath.replace(/\/+$/, '') || '/';
  return normA === normB;
}

export function SiteHeader({
  currentPath = '/',
  onNavigateHome,
  onNavigateService,
  onNavigatePath,
  hasLocalContact = false,
}: SiteHeaderProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const openedViaHoverRef = useRef<boolean>(false);

  const isServiceSectionActive =
    isSameRoute(currentPath, '/services/') ||
    currentPath.startsWith('/services/') ||
    isSameRoute(currentPath, '/wordpress-speed-optimisation/');
  const isAboutActive = isSameRoute(currentPath, '/about/');
  const isContactActive = isSameRoute(currentPath, '/contact/');

  useEffect(() => {
    const handleOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        openedViaHoverRef.current = false;
        setServicesOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        openedViaHoverRef.current = false;
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
    openedViaHoverRef.current = false;
    setServicesOpen(false);
    setMobileOpen(false);
    onNavigateHome(hash);
  };

  const handleRouteClick = (path: string, fallbackHash = '') => {
    openedViaHoverRef.current = false;
    setServicesOpen(false);
    setMobileOpen(false);
    if (onNavigatePath) {
      onNavigatePath(path);
      return;
    }
    onNavigateHome(fallbackHash);
  };

  const handleContactAction = () => {
    openedViaHoverRef.current = false;
    setServicesOpen(false);
    setMobileOpen(false);
    if (onNavigatePath) {
      onNavigatePath('/contact/');
      return;
    }
    if (hasLocalContact) {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    onNavigateHome('#contact');
  };

  const handleDropdownItemClick = (svc: (typeof NAV_SERVICE_DROPDOWN)[number]) => {
    openedViaHoverRef.current = false;
    setServicesOpen(false);
    setMobileOpen(false);
    if (svc.routePath && onNavigatePath) {
      onNavigatePath(svc.routePath);
      return;
    }
    if (svc.serviceSlug && onNavigateService && !svc.href.startsWith('#')) {
      onNavigateService(svc.serviceSlug);
      return;
    }
    onNavigateHome(svc.href);
  };

  return (
    <header className="sticky top-0 z-40 pt-3 px-4 sm:px-6 pointer-events-none">
      <div className="pointer-events-auto max-w-7xl mx-auto rounded-2xl bg-white/95 backdrop-blur-md text-[#003b4f] border border-[#dde6eb] shadow-[0_10px_30px_-16px_rgba(0,59,79,0.16)]">
        <div className="px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="/"
            aria-current={isSameRoute(currentPath, '/') ? 'page' : undefined}
            onClick={(e) => {
              e.preventDefault();
              openedViaHoverRef.current = false;
              setServicesOpen(false);
              setMobileOpen(false);
              onNavigateHome();
            }}
            className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded-xl py-1"
          >
            <span
              aria-hidden="true"
              className="h-8 w-8 rounded-xl bg-[#003b4f] flex items-center justify-center font-mono text-xs font-bold tracking-tight text-white"
            >
              WP
            </span>
            <span className="font-display text-[17px] font-semibold tracking-tight text-[#003b4f]">
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
                  <div
                    key={item.label}
                    ref={dropdownRef}
                    className="relative flex items-center gap-0.5"
                    onMouseEnter={() => {
                      setServicesOpen((prev) => {
                        if (!prev) {
                          openedViaHoverRef.current = true;
                          return true;
                        }
                        return prev;
                      });
                    }}
                    onMouseLeave={() => {
                      openedViaHoverRef.current = false;
                      setServicesOpen(false);
                    }}
                  >
                    <a
                      href={item.routePath || '/services/'}
                      aria-current={
                        isSameRoute(currentPath, '/services/') ? 'page' : undefined
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        handleRouteClick(item.routePath || '/services/', '#services-overview');
                      }}
                      className={`text-sm font-medium transition-colors whitespace-nowrap shrink-0 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded-md ${
                        isServiceSectionActive
                          ? 'text-[#00749c] underline decoration-[#00749c] decoration-2 underline-offset-8'
                          : 'text-[#2e2e2e] hover:text-[#00749c]'
                      }`}
                    >
                      {item.label}
                    </a>
                    <button
                      type="button"
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      aria-label="Toggle Services menu"
                      onClick={() => {
                        setServicesOpen((prev) => {
                          if (prev && openedViaHoverRef.current) {
                            openedViaHoverRef.current = false;
                            return true;
                          }
                          openedViaHoverRef.current = false;
                          return !prev;
                        });
                      }}
                      className="inline-flex items-center justify-center p-1 text-[#6c757d] hover:text-[#00749c] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded-md"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-150 ${
                          servicesOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {servicesOpen && (
                      <div className="absolute -left-8 top-full pt-3 w-[40rem] z-50">
                        <div className="wpc-panel-enter rounded-2xl bg-white text-[#2e2e2e] border border-[#dde6eb] shadow-[0_24px_48px_-16px_rgba(0,59,79,0.2)] p-4">
                          <div className="flex items-center justify-between px-3 py-2 border-b border-[#e9eff2] mb-2.5">
                            <a
                              href="/services/"
                              aria-current={
                                isSameRoute(currentPath, '/services/') ? 'page' : undefined
                              }
                              onClick={(e) => {
                                e.preventDefault();
                                handleRouteClick('/services/', '#services-overview');
                              }}
                              className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00749c] hover:text-[#003b4f] inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded-md"
                            >
                              <span>All Services Directory</span>
                              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                            </a>
                            <span className="text-[11px] font-mono text-[#6c757d]">
                              WordPress · WooCommerce · AI
                            </span>
                          </div>
                          <ul className="grid grid-cols-2 gap-1.5">
                            {NAV_SERVICE_DROPDOWN.map((svc) => {
                              const activeSvc = isSameRoute(currentPath, svc.routePath);
                              return (
                                <li key={svc.label}>
                                  <a
                                    href={svc.routePath || svc.href}
                                    aria-current={activeSvc ? 'page' : undefined}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleDropdownItemClick(svc);
                                    }}
                                    className={`block rounded-xl px-3.5 py-2.5 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] ${
                                      activeSvc
                                        ? 'bg-[#f2f7f9] ring-1 ring-[#00749c]/30'
                                        : 'hover:bg-[#f7f9fa]'
                                    }`}
                                  >
                                    <p
                                      className={`text-sm font-semibold leading-snug ${
                                        activeSvc
                                          ? 'text-[#00749c]'
                                          : 'text-[#003b4f] group-hover:text-[#00749c]'
                                      }`}
                                    >
                                      {svc.label}
                                    </p>
                                    <p className="text-xs text-[#6c757d] mt-1 leading-snug">
                                      {svc.description}
                                    </p>
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (item.routePath) {
                const activeRoute =
                  item.routePath === '/about/' ? isAboutActive : isSameRoute(currentPath, item.routePath);
                return (
                  <a
                    key={item.label}
                    href={item.routePath}
                    aria-current={activeRoute ? 'page' : undefined}
                    onClick={(e) => {
                      e.preventDefault();
                      handleRouteClick(item.routePath!);
                    }}
                    className={`text-sm font-medium transition-colors whitespace-nowrap shrink-0 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded-md ${
                      activeRoute
                        ? 'text-[#00749c] underline decoration-[#00749c] decoration-2 underline-offset-8'
                        : 'text-[#2e2e2e] hover:text-[#00749c]'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <a
                  key={item.label}
                  href={`/${item.href}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleAnchorClick(item.href);
                  }}
                  className="text-sm font-medium text-[#2e2e2e] hover:text-[#00749c] transition-colors whitespace-nowrap shrink-0 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded-md"
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
                href="/contact/"
                aria-current={isContactActive ? 'page' : undefined}
                onClick={(e: ReactMouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  handleContactAction();
                }}
                variant="primary"
                size="sm"
                className={`group pr-2.5 pl-4 ${isContactActive ? 'ring-2 ring-[#003b4f]/30' : ''}`}
              >
                <span>Get in Touch</span>
                <span
                  aria-hidden="true"
                  className="h-7 w-7 rounded-full bg-white text-[#003b4f] inline-flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Button>
            </div>

            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-xl border border-[#dde6eb] text-[#003b4f] hover:border-[#00749c] hover:text-[#00749c] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c]"
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
          <div className="lg:hidden bg-white border-t border-[#e9eff2] rounded-b-2xl px-5 py-5 space-y-4">
            <nav aria-label="Mobile Navigation" className="space-y-1">
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00749c] pb-1">
                Services
              </p>
              <a
                href="/services/"
                aria-current={isSameRoute(currentPath, '/services/') ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  handleRouteClick('/services/', '#services-overview');
                }}
                className="flex min-h-[44px] items-center text-sm font-semibold text-[#00749c] hover:text-[#003b4f] border-b border-[#e9eff2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded-md"
              >
                Services Hub Overview
              </a>
              {NAV_SERVICE_DROPDOWN.map((svc) => {
                const activeSvc = isSameRoute(currentPath, svc.routePath);
                return (
                  <a
                    key={svc.label}
                    href={svc.routePath || svc.href}
                    aria-current={activeSvc ? 'page' : undefined}
                    onClick={(e) => {
                      e.preventDefault();
                      handleDropdownItemClick(svc);
                    }}
                    className={`flex min-h-[44px] items-center text-sm font-medium border-b border-[#e9eff2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded-md ${
                      activeSvc
                        ? 'text-[#00749c] font-semibold'
                        : 'text-[#2e2e2e] hover:text-[#00749c]'
                    }`}
                  >
                    {svc.label}
                  </a>
                );
              })}

              <div className="pt-3 space-y-1">
                {NAV_ITEMS.filter((item) => !item.hasDropdown).map((item) => {
                  const activeRoute =
                    item.routePath && isSameRoute(currentPath, item.routePath);
                  return (
                    <a
                      key={item.label}
                      href={item.routePath || `/${item.href}`}
                      aria-current={activeRoute ? 'page' : undefined}
                      onClick={(e) => {
                        e.preventDefault();
                        if (item.routePath) {
                          handleRouteClick(item.routePath);
                        } else {
                          handleAnchorClick(item.href);
                        }
                      }}
                      className={`flex min-h-[44px] items-center text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded-md ${
                        activeRoute ? 'text-[#00749c]' : 'text-[#003b4f] hover:text-[#00749c]'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </nav>

            <div className="pt-2">
              <Button
                href="/contact/"
                aria-current={isContactActive ? 'page' : undefined}
                onClick={(e: ReactMouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  handleContactAction();
                }}
                variant="primary"
                size="md"
                className="w-full"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
