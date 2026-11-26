import { useEffect } from 'react';
import type {
  DedicatedServicePageConfig,
  DedicatedServiceSectionKey,
} from '../../data/dedicatedServicePagesData';
import { CtaSection } from '../ui/CtaSection';
import { ServicePageHero } from './ServicePageHero';
import {
  type SectionSurface,
  ServiceCapabilitiesSection,
  ServiceCarePlansOverviewSection,
  ServiceFaqAndRelatedSection,
  ServiceIntroSection,
  ServiceJumpNav,
  ServiceProblemsSection,
  ServiceProcessAndTrustSection,
  ServiceSuitabilitySection,
  ServiceTechnicalGridSection,
} from './ServiceSections';

interface DedicatedServicePageProps {
  page: DedicatedServicePageConfig;
  onNavigateHome: (hash?: string) => void;
  onNavigatePath: (path: string) => void;
}

const DEFAULT_SECTION_ORDER: DedicatedServiceSectionKey[] = [
  'intro',
  'suitability',
  'problems',
  'capabilities',
  'carePlans',
  'technical',
  'process',
  'whyChoose',
];

export function DedicatedServicePage({
  page,
  onNavigateHome,
  onNavigatePath,
}: DedicatedServicePageProps) {
  // Sync page metadata, canonical links, and verified Service/Breadcrumb/FAQ JSON-LD
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

    const prevTitle = document.title;
    document.title = page.metaTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content') || '';
    metaDesc?.setAttribute('content', page.metaDescription);

    const canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute('href') || '';
    canonical?.setAttribute('href', page.canonicalUrl);

    const hreflangEn = document.querySelector('link[rel="alternate"][hreflang="en-gb"]');
    const prevHreflangEn = hreflangEn?.getAttribute('href') || '';
    hreflangEn?.setAttribute('href', page.canonicalUrl);

    const hreflangDef = document.querySelector('link[rel="alternate"][hreflang="x-default"]');
    const prevHreflangDef = hreflangDef?.getAttribute('href') || '';
    hreflangDef?.setAttribute('href', page.canonicalUrl);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const prevOgTitle = ogTitle?.getAttribute('content') || '';
    ogTitle?.setAttribute('content', page.metaTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    const prevOgDesc = ogDesc?.getAttribute('content') || '';
    ogDesc?.setAttribute('content', page.metaDescription);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    const prevOgUrl = ogUrl?.getAttribute('content') || '';
    ogUrl?.setAttribute('content', page.canonicalUrl);

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    const prevTwTitle = twTitle?.getAttribute('content') || '';
    twTitle?.setAttribute('content', page.metaTitle);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    const prevTwDesc = twDesc?.getAttribute('content') || '';
    twDesc?.setAttribute('content', page.metaDescription);

    const scriptId = 'dedicated-service-jsonld';
    let jsonLdScript = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.id = scriptId;
      jsonLdScript.type = 'application/ld+json';
      document.head.appendChild(jsonLdScript);
    }

    jsonLdScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          name: page.serviceSchemaName,
          url: page.canonicalUrl,
          description: page.metaDescription,
          areaServed: { '@type': 'Country', name: 'United Kingdom' },
          provider: {
            '@type': 'Organization',
            name: 'WPCarePoint',
            url: 'https://wpcarepoint.co.uk/',
            email: 'contact@wpcarepoint.co.uk',
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
              name: 'Services',
              item: 'https://wpcarepoint.co.uk/services/',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: page.breadcrumbLabel,
              item: page.canonicalUrl,
            },
          ],
        },
        {
          '@type': 'FAQPage',
          mainEntity: page.faqSection.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        },
      ],
    });

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) metaDesc.setAttribute('content', prevDesc);
      if (canonical && prevCanonical) canonical.setAttribute('href', prevCanonical);
      if (hreflangEn && prevHreflangEn) hreflangEn.setAttribute('href', prevHreflangEn);
      if (hreflangDef && prevHreflangDef) hreflangDef.setAttribute('href', prevHreflangDef);
      if (ogTitle && prevOgTitle) ogTitle.setAttribute('content', prevOgTitle);
      if (ogDesc && prevOgDesc) ogDesc.setAttribute('content', prevOgDesc);
      if (ogUrl && prevOgUrl) ogUrl.setAttribute('content', prevOgUrl);
      if (twTitle && prevTwTitle) twTitle.setAttribute('content', prevTwTitle);
      if (twDesc && prevTwDesc) twDesc.setAttribute('content', prevTwDesc);
      jsonLdScript?.remove();
    };
  }, [page]);

  const jumpToSection = (targetId: string) => {
    const cleanId = targetId.replace(/^#/, '');
    document.getElementById(cleanId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const order = page.sectionOrder || DEFAULT_SECTION_ORDER;
  const preProcessKeys = order.filter(
    (k): k is Exclude<DedicatedServiceSectionKey, 'process' | 'whyChoose'> =>
      k !== 'process' && k !== 'whyChoose'
  );

  // Alternate white / slate surfaces across visible light bands before the dark Process section
  const activeLightKeys = preProcessKeys.filter((k) => {
    if (k === 'suitability') return Boolean(page.suitabilitySection);
    if (k === 'problems') return Boolean(page.problemsSection);
    if (k === 'carePlans') return Boolean(page.carePlansSection);
    return true;
  });

  const surfaceByKey: Partial<Record<DedicatedServiceSectionKey, SectionSurface>> = {};
  activeLightKeys.forEach((key, idx) => {
    surfaceByKey[key] = idx % 2 === 0 ? 'white' : 'slate';
  });

  return (
    <article>
      <ServicePageHero
        page={page}
        onNavigateHome={onNavigateHome}
        onNavigatePath={onNavigatePath}
        onJumpToSection={jumpToSection}
      />

      <ServiceJumpNav links={page.jumpLinks} onJumpToSection={jumpToSection} />

      {activeLightKeys.map((key) => {
        const surface = surfaceByKey[key] || 'white';
        switch (key) {
          case 'intro':
            return (
              <ServiceIntroSection
                key="intro"
                intro={page.introSection}
                surface={surface}
              />
            );
          case 'suitability':
            return page.suitabilitySection ? (
              <ServiceSuitabilitySection
                key="suitability"
                suitability={page.suitabilitySection}
                onNavigatePath={onNavigatePath}
                surface={surface}
              />
            ) : null;
          case 'problems':
            return page.problemsSection ? (
              <ServiceProblemsSection
                key="problems"
                problems={page.problemsSection}
                surface={surface}
              />
            ) : null;
          case 'capabilities':
            return (
              <ServiceCapabilitiesSection
                key="capabilities"
                capabilities={page.capabilitiesSection}
                layout={page.capabilitiesLayout}
                surface={surface}
              />
            );
          case 'carePlans':
            return page.carePlansSection ? (
              <ServiceCarePlansOverviewSection
                key="carePlans"
                carePlans={page.carePlansSection}
                surface={surface}
              />
            ) : null;
          case 'technical':
            return (
              <ServiceTechnicalGridSection
                key="technical"
                technical={page.technicalSection}
                surface={surface}
              />
            );
          default:
            return null;
        }
      })}

      <ServiceProcessAndTrustSection
        process={page.processSection}
        whyChoose={page.whyChooseSection}
      />

      <ServiceFaqAndRelatedSection
        faqSection={page.faqSection}
        relatedSection={page.relatedSection}
        onNavigatePath={onNavigatePath}
        onNavigateHome={onNavigateHome}
      />

      <CtaSection
        id="contact"
        eyebrow={page.ctaSection.eyebrow}
        headline={page.ctaSection.headline}
        description={page.ctaSection.description}
        mailtoSubject={page.ctaSection.mailtoSubject}
        primaryButtonLabel={page.ctaSection.primaryButtonLabel}
        contactRouteHref="/contact/"
        contactRouteLabel="Visit Contact Page"
        onNavigatePath={onNavigatePath}
      />
    </article>
  );
}
