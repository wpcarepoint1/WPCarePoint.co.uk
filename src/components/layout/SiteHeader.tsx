import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent as ReactMouseEvent,
} from 'react';
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { BRAND_INFO, NAV_ITEMS, NAV_SERVICE_DROPDOWN } from '../../data/homepageData';
import { useScrolled } from '../MotionPrimitives';
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
  const scrolled = useScrolled(24);
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

  const nonDropdownNavItems = NAV_ITEMS.filter((item) => !item.hasDropdown);

  return (
    <header className="sticky top-0 z-40 pt-3 px-4 sm:px-6 pointer-events-none">
      <div
        data-scrolled={scrolled ? 'true' : 'false'}
        className="wpc-header-rail pointer-events-auto max-w-7xl mx-auto rounded-2xl bg-white/92 backdrop-blur-md text-[#003b4f] border border-[#dde6eb] shadow-[0_10px_30px_-16px_rgba(0,59,79,0.16)]"
      >
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
            className="group inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded-xl py-1"
          >
            <span
              aria-hidden="true"
              className="h-8 w-8 rounded-xl bg-[#003b4f] flex items-center justify-center font-mono text-xs font-bold tracking-tight text-white transition-transform duration-200 ease-out group-hover:scale-105 group-focus-visible:scale-105"
            >
              WP
            </span>
            <span className="font-display text-[17px] font-semibold tracking-tight text-[#003b4f] transition-colors group-hover:text-[#00749c]">
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
                      data-active={isServiceSectionActive ? 'true' : 'false'}
                      onClick={(e) => {
                        e.preventDefault();
                        handleRouteClick(item.routePath || '/services/', '#services-overview');
                      }}
                      className={`wpc-nav-link text-sm font-medium transition-colors whitespace-nowrap shrink-0 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded-md ${
                        isServiceSectionActive
                          ? 'text-[#00749c]'
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
                        className={`h-4 w-4 transition-transform duration-200 ease-out ${
                          servicesOpen ? 'rotate-180 text-[#00749c]' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    <div
                      aria-hidden={!servicesOpen}
                      data-open={servicesOpen ? 'true' : 'false'}
                      className="wpc-dropdown-panel absolute -left-8 top-full pt-3 w-[40rem] z-50"
                    >
                      <div className="rounded-2xl bg-white text-[#2e2e2e] border border-[#dde6eb] shadow-[0_24px_48px_-16px_rgba(0,59,79,0.22)] p-4">
                        <div className="flex items-center justify-between px-3 py-2 border-b border-[#e9eff2] mb-2.5">
                          <a
                            href="/services/"
                            tabIndex={servicesOpen ? 0 : -1}
                            aria-current={
                              isSameRoute(currentPath, '/services/') ? 'page' : undefined
                            }
                            onClick={(e) => {
                              e.preventDefault();
                              handleRouteClick('/services/', '#services-overview');
                            }}
                            className="group/dir text-xs font-mono font-semibold uppercase tracking-wider text-[#00749c] hover:text-[#003b4f] inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded-md"
                          >
                            <span>All Services Directory</span>
                            <ArrowRight
                              className="h-3.5 w-3.5 transition-transform duration-150 group-hover/dir:translate-x-0.5 group-focus-visible/dir:translate-x-0.5"
                              aria-hidden="true"
                            />
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
                                  tabIndex={servicesOpen ? 0 : -1}
                                  aria-current={activeSvc ? 'page' : undefined}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleDropdownItemClick(svc);
                                  }}
                                  className={`block rounded-xl px-3.5 py-2.5 transition-all duration-150 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] ${
                                    activeSvc
                                      ? 'bg-[#f2f7f9] ring-1 ring-[#00749c]/30'
                                      : 'hover:bg-[#f7f9fa] hover:translate-x-0.5'
                                  }`}
                                >
                                  <div className="flex items-center justify-between gap-2">
                                    <p
                                      className={`text-sm font-semibold leading-snug transition-colors ${
                                        activeSvc
                                          ? 'text-[#00749c]'
                                          : 'text-[#003b4f] group-hover:text-[#00749c]'
                                      }`}
                                    >
                                      {svc.label}
                                    </p>
                                    <ArrowRight
                                      className="h-3.5 w-3.5 text-[#00749c] opacity-0 -translate-x-1 transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 shrink-0"
                                      aria-hidden="true"
                                    />
                                  </div>
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
                  </div>
                );
              }

              if (item.routePath) {
                const activeRoute =
                  item.routePath === '/about/'
                    ? isAboutActive
                    : isSameRoute(currentPath, item.routePath);
                return (
                  <a
                    key={item.label}
                    href={item.routePath}
                    aria-current={activeRoute ? 'page' : undefined}
                    data-active={activeRoute ? 'true' : 'false'}
                    onClick={(e) => {
                      e.preventDefault();
                      handleRouteClick(item.routePath!);
                    }}
                    className={`wpc-nav-link text-sm font-medium transition-colors whitespace-nowrap shrink-0 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded-md ${
                      activeRoute
                        ? 'text-[#00749c]'
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
                  data-active="false"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAnchorClick(item.href);
                  }}
                  className="wpc-nav-link text-sm font-medium text-[#2e2e2e] hover:text-[#00749c] transition-colors whitespace-nowrap shrink-0 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded-md"
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
                  className="h-7 w-7 rounded-full bg-white text-[#003b4f] inline-flex items-center justify-center transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5"
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
              className="lg:hidden min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-xl border border-[#dde6eb] text-[#003b4f] hover:border-[#00749c] hover:text-[#00749c] transition-all duration-150 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c]"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Staggered Navigation Items */}
        {mobileOpen && (
          <div className="wpc-drawer-panel lg:hidden bg-white border-t border-[#e9eff2] rounded-b-2xl px-5 py-5 space-y-4">
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
                style={{ '--wpc-stagger-index': 0 } as CSSProperties}
                className="wpc-drawer-item flex min-h-[44px] items-center justify-between text-sm font-semibold text-[#00749c] hover:text-[#003b4f] border-b border-[#e9eff2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded-md"
              >
                <span>Services Hub Overview</span>
                <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              </a>
              {NAV_SERVICE_DROPDOWN.map((svc, idx) => {
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
                    style={{ '--wpc-stagger-index': idx + 1 } as CSSProperties}
                    className={`wpc-drawer-item flex min-h-[44px] items-center justify-between text-sm font-medium border-b border-[#e9eff2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded-md ${
                      activeSvc
                        ? 'text-[#00749c] font-semibold'
                        : 'text-[#2e2e2e] hover:text-[#00749c]'
                    }`}
                  >
                    <span>{svc.label}</span>
                    <ArrowRight className="h-3.5 w-3.5 opacity-50 shrink-0" aria-hidden="true" />
                  </a>
                );
              })}

              <div className="pt-3 space-y-1">
                {nonDropdownNavItems.map((item, idx) => {
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
                      style={
                        {
                          '--wpc-stagger-index': NAV_SERVICE_DROPDOWN.length + idx + 1,
                        } as CSSProperties
                      }
                      className={`wpc-drawer-item flex min-h-[44px] items-center text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded-md ${
                        activeRoute ? 'text-[#00749c]' : 'text-[#003b4f] hover:text-[#00749c]'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </nav>

            <div
              style={
                {
                  '--wpc-stagger-index':
                    NAV_SERVICE_DROPDOWN.length + nonDropdownNavItems.length + 1,
                } as CSSProperties
              }
              className="wpc-drawer-item pt-2"
            >
              <Button
                href="/contact/"
                aria-current={isContactActive ? 'page' : undefined}
                onClick={(e: ReactMouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  handleContactAction();
                }}
                variant="primary"
                size="md"
                className="group w-full"
              >
                <span>Get in Touch</span>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
