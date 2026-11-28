import { useEffect } from 'react';
import { ArrowRight, Compass, FolderTree, Mail } from 'lucide-react';
import { BRAND_INFO } from '../../data/homepageData';
import { SITE_MAP_PAGE_DATA } from '../../data/siteMapPageData';
import { applyRouteSeo } from '../../utils/routeSeo';
import { FadeInUpOnScroll } from '../MotionPrimitives';
import { Button } from '../ui/Button';
import { CtaSection } from '../ui/CtaSection';
import { SectionHeading } from '../ui/SectionHeading';

interface SiteMapPageViewProps {
  onNavigateHome: (hash?: string) => void;
  onNavigatePath: (path: string) => void;
}

export function SiteMapPageView({
  onNavigateHome,
  onNavigatePath,
}: SiteMapPageViewProps) {

  useEffect(() => {
    const activeHash = window.location.hash.replace(/^#/, '');
    if (activeHash) {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          document.getElementById(activeHash)?.scrollIntoView({ behavior: 'smooth' });
        });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    const allEntries = SITE_MAP_PAGE_DATA.categories.flatMap((cat) => cat.entries);

    applyRouteSeo({
      title: SITE_MAP_PAGE_DATA.metaTitle,
      description: SITE_MAP_PAGE_DATA.metaDescription,
      canonicalUrl: SITE_MAP_PAGE_DATA.canonicalUrl,
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'CollectionPage',
            name: SITE_MAP_PAGE_DATA.metaTitle,
            url: SITE_MAP_PAGE_DATA.canonicalUrl,
            description: SITE_MAP_PAGE_DATA.metaDescription,
            inLanguage: 'en-GB',
            isPartOf: {
              '@type': 'WebSite',
              name: BRAND_INFO.name,
              url: 'https://wpcarepoint.co.uk/',
            },
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: allEntries.length,
              itemListElement: allEntries.map((entry, idx) => ({
                '@type': 'ListItem',
                position: idx + 1,
                name: entry.title,
                url: entry.canonicalUrl,
              })),
            },
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://wpcarepoint.co.uk/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Site Map',
                item: SITE_MAP_PAGE_DATA.canonicalUrl,
              },
            ],
          },
        ],
      },
    });
  }, []);

  const handleJump = (targetId: string) => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById(targetId)?.scrollIntoView({
      behavior: prefersReduced ? 'auto' : 'smooth',
    });
  };

  return (
    <article>
      {/* Studio Hero Band */}
      <section className="bg-gradient-to-b from-[#f7f9fa] via-[#f7f9fa] to-white bg-architectural-grid border-b border-[#dde6eb]">
        <div className="max-w-7xl mx-auto px-6 pt-8 pb-14 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20">
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
            <span className="font-semibold text-[#003b4f]" aria-current="page">
              Site Map
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-8 wpc-route-enter">
              <div className="inline-flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-6 bg-[#b9ccd6]" />
                <p className="text-xs font-mono font-semibold tracking-[0.12em] uppercase text-[#00749c]">
                  {SITE_MAP_PAGE_DATA.eyebrow}
                </p>
              </div>

              <h1
                className="font-semibold tracking-[-0.03em] text-[#003b4f] mt-3.5 text-balance"
                style={{
                  fontSize: 'clamp(2.15rem, 4vw, 3.45rem)',
                  lineHeight: 1.07,
                }}
              >
                {SITE_MAP_PAGE_DATA.headline}
              </h1>

              <p className="text-base sm:text-[18px] text-[#2e2e2e] mt-5 leading-relaxed max-w-2xl">
                {SITE_MAP_PAGE_DATA.description}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4">
                <Button
                  href="/services/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigatePath('/services/');
                  }}
                  variant="primary"
                  size="lg"
                  className="group pr-3 pl-6"
                >
                  <span>Browse All Services Hub</span>
                  <span
                    aria-hidden="true"
                    className="h-8 w-8 rounded-full bg-white text-[#003b4f] inline-flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Button>

                <Button
                  href="/contact/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigatePath('/contact/');
                  }}
                  variant="secondary"
                  size="lg"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Contact WPCarePoint</span>
                </Button>
              </div>
            </div>

            <aside className="wpc-studio-card lg:col-span-4 rounded-2xl border border-[#dde6eb] bg-white p-6 sm:p-7 space-y-4 shadow-[0_14px_34px_-22px_rgba(0,59,79,0.18)]">
              <div className="flex items-center gap-2.5 text-[#003b4f]">
                <FolderTree className="h-4 w-4 text-[#00749c] shrink-0" aria-hidden="true" />
                <p className="text-xs font-mono font-semibold uppercase tracking-wider">
                  Directory Index
                </p>
              </div>
              <p className="text-sm text-[#2e2e2e] leading-relaxed">
                Jump directly to a section below or browse every verified URL across our UK
                web engineering, eCommerce, care, and search pages.
              </p>
              <nav aria-label="Site map sections" className="pt-1 border-t border-[#dde6eb]">
                <ul className="divide-y divide-[#dde6eb]">
                  {SITE_MAP_PAGE_DATA.jumpLinks.map((jump) => (
                    <li key={jump.targetId}>
                      <a
                        href={`#${jump.targetId}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleJump(jump.targetId);
                        }}
                        className="flex items-center justify-between min-h-[44px] text-sm font-medium text-[#003b4f] hover:text-[#00749c] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded-md"
                      >
                        <span>{jump.label}</span>
                        <ArrowRight className="h-3.5 w-3.5 text-[#00749c]" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          </div>

          {/* Factual Standards Strip */}
          <div className="mt-12 pt-8 border-t border-[#dde6eb] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SITE_MAP_PAGE_DATA.standards.map((std) => (
              <div key={std.label} className="space-y-1.5">
                <p className="text-[11px] font-mono uppercase tracking-[0.1em] text-[#5a6570]">
                  {std.label}
                </p>
                <p className="text-sm sm:text-[15px] font-semibold text-[#003b4f] break-words">
                  {std.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Grouped Directory Sections */}
      {SITE_MAP_PAGE_DATA.categories.map((category, categoryIdx) => {
        const isAltSurface = categoryIdx % 2 === 0;
        const sectionBg = isAltSurface ? 'bg-[#f7f9fa]' : 'bg-white';
        const cardBg = isAltSurface ? 'bg-white' : 'bg-[#f7f9fa]';

        return (
          <section
            key={category.id}
            id={category.id}
            className={`scroll-mt-24 py-16 lg:py-22 ${sectionBg} border-b border-[#dde6eb]`}
          >
            <div className="max-w-7xl mx-auto px-6">
              <FadeInUpOnScroll>
                <SectionHeading
                  eyebrow={category.eyebrow}
                  title={category.title}
                  description={category.description}
                />
              </FadeInUpOnScroll>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.entries.map((entry) => (
                  <div
                    key={entry.routePath}
                    className={`group wpc-studio-card rounded-2xl border border-[#dde6eb] ${cardBg} p-6 sm:p-7 flex flex-col justify-between hover:border-[#00749c]`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-mono text-xs font-semibold text-[#00749c] tabular-nums">
                          {entry.index}
                        </span>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#5a6570]">
                          {entry.badgeLabel}
                        </span>
                      </div>

                      <h3 className="mt-3 text-lg font-semibold tracking-tight text-[#003b4f]">
                        <a
                          href={entry.routePath}
                          onClick={(e) => {
                            e.preventDefault();
                            onNavigatePath(entry.routePath);
                          }}
                          aria-current={entry.isCurrentPage ? 'page' : undefined}
                          className="inline-block py-1 hover:text-[#00749c] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded-md"
                        >
                          {entry.title}
                        </a>
                      </h3>

                      <p className="mt-2 text-sm text-[#2e2e2e] leading-relaxed">
                        {entry.summary}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#dde6eb] flex items-center justify-between gap-3">
                      <code className="text-xs font-mono text-[#5a6570] truncate">
                        {entry.routePath}
                      </code>

                      <a
                        href={entry.routePath}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigatePath(entry.routePath);
                        }}
                        className="inline-flex items-center gap-1.5 min-h-[44px] shrink-0 text-xs font-semibold text-[#00749c] hover:text-[#003b4f] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded-md px-1"
                      >
                        <span>{entry.isCurrentPage ? 'Top of Directory' : 'View Page'}</span>
                        <ArrowRight
                          className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Governance / Scope Note Band */}
      <section className="py-14 lg:py-18 bg-[#f7f9fa] border-b border-[#dde6eb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="wpc-studio-card rounded-2xl border border-[#dde6eb] bg-white p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 text-[#00749c]">
                <Compass className="h-4 w-4 shrink-0" aria-hidden="true" />
                <p className="text-xs font-mono font-semibold uppercase tracking-wider">
                  {SITE_MAP_PAGE_DATA.scopeNote.eyebrow}
                </p>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#003b4f]">
                {SITE_MAP_PAGE_DATA.scopeNote.title}
              </h2>
              <p className="text-sm sm:text-[15px] text-[#2e2e2e] leading-relaxed">
                {SITE_MAP_PAGE_DATA.scopeNote.description}
              </p>
            </div>

            <div className="shrink-0">
              <Button
                href="/contact/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigatePath('/contact/');
                }}
                variant="secondary"
                size="md"
              >
                <span>Request Written Scope</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Band */}
      <CtaSection
        eyebrow={SITE_MAP_PAGE_DATA.cta.eyebrow}
        headline={SITE_MAP_PAGE_DATA.cta.headline}
        description={SITE_MAP_PAGE_DATA.cta.description}
        mailtoSubject={SITE_MAP_PAGE_DATA.cta.mailtoSubject}
        contactRouteHref="/contact/"
        contactRouteLabel={SITE_MAP_PAGE_DATA.cta.primaryButtonLabel}
        onNavigatePath={onNavigatePath}
      />
    </article>
  );
}
