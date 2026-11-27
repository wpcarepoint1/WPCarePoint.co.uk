import { BRAND_INFO } from './homepageData';

export interface SiteMapEntry {
  index: string;
  title: string;
  routePath: string;
  canonicalUrl: string;
  summary: string;
  badgeLabel: string;
  isCurrentPage?: boolean;
}

export interface SiteMapCategory {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  entries: SiteMapEntry[];
}

export const SITE_MAP_PAGE_DATA = {
  routePath: '/site-map/',
  canonicalUrl: 'https://wpcarepoint.co.uk/site-map/',
  metaTitle: 'Site Map | WPCarePoint UK Web Development & Services Directory',
  metaDescription:
    'Complete HTML directory of active WPCarePoint pages across UK WordPress development, WooCommerce eCommerce, AI automation, Website Care, speed, and SEO services.',
  eyebrow: 'Website Directory · WPCarePoint UK',
  headline: 'Site Map & Page Directory',
  description:
    'A clear overview of all 16 active public pages on WPCarePoint—helping UK visitors, clients, and search crawlers locate agency pages, core services, specialist capabilities, and direct email scoping.',
  standards: [
    { label: 'Active Directory', value: '16 Canonical Public Pages' },
    { label: 'URL Convention', value: 'Clean Trailing-Slash Routes' },
    { label: 'Crawler Endpoints', value: '/sitemap.xml · /llms.txt' },
    { label: 'Enquiry Channel', value: BRAND_INFO.email },
  ],
  jumpLinks: [
    { label: 'Main Pages', targetId: 'sitemap-main' },
    { label: 'Core Services', targetId: 'sitemap-core' },
    { label: 'Supporting Services', targetId: 'sitemap-supporting' },
    { label: 'Contact & Directory', targetId: 'sitemap-contact' },
  ],
  categories: [
    {
      id: 'sitemap-main',
      eyebrow: '01 · Primary Navigation',
      title: 'Main Pages',
      description:
        'Top-level agency overview, unified services directory, and background on our engineering craft in Nutfield, Surrey.',
      entries: [
        {
          index: '01.',
          title: 'WPCarePoint Home',
          routePath: '/',
          canonicalUrl: 'https://wpcarepoint.co.uk/',
          badgeLabel: 'Homepage',
          summary:
            'Agency overview covering our five core service tracks, Website Care tiers, WordPress Quick Fix pathway, working process, and FAQ.',
        },
        {
          index: '02.',
          title: 'All Services Hub',
          routePath: '/services/',
          canonicalUrl: 'https://wpcarepoint.co.uk/services/',
          badgeLabel: 'Services Directory',
          summary:
            'Central directory detailing how WPCarePoint combines WordPress engineering, WooCommerce, automation, care plans, speed, and search readiness.',
        },
        {
          index: '03.',
          title: 'About WPCarePoint',
          routePath: '/about/',
          canonicalUrl: 'https://wpcarepoint.co.uk/about/',
          badgeLabel: 'Agency Profile',
          summary:
            'Our UK engineering background, six core operating values, open technology stack, staging discipline, and client-ownership commitment.',
        },
      ],
    },
    {
      id: 'sitemap-core',
      eyebrow: '02 · Primary Capabilities',
      title: 'Core Services',
      description:
        'Dedicated service specifications across website engineering, UK WooCommerce retail, AI workflow automation, technical care, search visibility, and performance tuning.',
      entries: [
        {
          index: '04.',
          title: 'Website Design & Development',
          routePath: '/services/website-development/',
          canonicalUrl: 'https://wpcarepoint.co.uk/services/website-development/',
          badgeLabel: 'Core Track 01',
          summary:
            'Custom WordPress block architecture (Gutenberg) alongside React, Next.js, and TypeScript builds engineered for speed and full client ownership.',
        },
        {
          index: '05.',
          title: 'eCommerce & WooCommerce Development',
          routePath: '/services/ecommerce-development/',
          canonicalUrl: 'https://wpcarepoint.co.uk/services/ecommerce-development/',
          badgeLabel: 'Core Track 02',
          summary:
            'UK online retail stores configured for WooCommerce High-Performance Order Storage (HPOS), GBP (£), UK VAT, Stripe SCA, and courier shipping.',
        },
        {
          index: '06.',
          title: 'AI & Business Automation',
          routePath: '/services/ai-business-automation/',
          canonicalUrl: 'https://wpcarepoint.co.uk/services/ai-business-automation/',
          badgeLabel: 'Core Track 03',
          summary:
            'Practical enquiry routing, CRM synchronisation, and scoped API automation operating inside UK GDPR boundaries and human approval checkpoints.',
        },
        {
          index: '07.',
          title: 'Website Care & Technical Support',
          routePath: '/services/website-care-support/',
          canonicalUrl: 'https://wpcarepoint.co.uk/services/website-care-support/',
          badgeLabel: 'Core Track 04',
          summary:
            'Essential, Advanced, and Elite Care Plans (Enquire for Pricing), encrypted off-site backups, security hardening, and standalone WordPress Quick Fixes.',
        },
        {
          index: '08.',
          title: 'SEO & AI Search Optimisation',
          routePath: '/services/ai-search-optimisation/',
          canonicalUrl: 'https://wpcarepoint.co.uk/services/ai-search-optimisation/',
          badgeLabel: 'Core Track 05',
          summary:
            'Technical search foundations, Schema.org JSON-LD entity clarity, and consolidated AIO / GEO visibility for Google UK and modern AI assistants.',
        },
        {
          index: '09.',
          title: 'WordPress Speed Optimisation',
          routePath: '/wordpress-speed-optimisation/',
          canonicalUrl: 'https://wpcarepoint.co.uk/wordpress-speed-optimisation/',
          badgeLabel: 'Specialist Performance',
          summary:
            'Diagnostic Core Web Vitals tuning resolving slow TTFB, render-blocking scripts, heavy image payloads, autoload database bloat, and UK hosting issues.',
        },
      ],
    },
    {
      id: 'sitemap-supporting',
      eyebrow: '03 · Specialist Disciplines',
      title: 'Supporting Service Pages',
      description:
        'Focused technical, visual, integration, and search pages supporting specific operational or growth requirements.',
      entries: [
        {
          index: '10.',
          title: 'Search Engine Optimisation (SEO)',
          routePath: '/services/search-engine-optimisation/',
          canonicalUrl: 'https://wpcarepoint.co.uk/services/search-engine-optimisation/',
          badgeLabel: 'Technical & SXO',
          summary:
            'Crawl governance, semantic HTML heading discipline, canonical hygiene, single-hop 301 migration safety, and Search Experience Optimisation.',
        },
        {
          index: '11.',
          title: 'Custom Web Solutions & Integrations',
          routePath: '/services/custom-web-solutions-integrations/',
          canonicalUrl: 'https://wpcarepoint.co.uk/services/custom-web-solutions-integrations/',
          badgeLabel: 'Bespoke Modules & APIs',
          summary:
            'Tailored WordPress blocks, interactive React modules, and validated server-side REST API or webhook connections to back-office systems.',
        },
        {
          index: '12.',
          title: 'AI-Powered Website Development',
          routePath: '/services/ai-powered-website-development/',
          canonicalUrl: 'https://wpcarepoint.co.uk/services/ai-powered-website-development/',
          badgeLabel: 'Scoped Site Intelligence',
          summary:
            'Bounded AI capabilities such as grounded content search and guided brief helpers built strictly around approved business documentation.',
        },
        {
          index: '13.',
          title: 'Branding & Brand Identity',
          routePath: '/services/branding-brand-identity/',
          canonicalUrl: 'https://wpcarepoint.co.uk/services/branding-brand-identity/',
          badgeLabel: 'Web Visual Systems',
          summary:
            'WCAG 2.2 AA colour systems, structured web typography scales, UI design tokens, and cohesive presentation tailored for British buyers.',
        },
        {
          index: '14.',
          title: 'Digital Marketing & Online Growth',
          routePath: '/services/digital-marketing-online-growth/',
          canonicalUrl: 'https://wpcarepoint.co.uk/services/digital-marketing-online-growth/',
          badgeLabel: 'Conversion Alignment',
          summary:
            'Conversion-focused landing architecture, organic visibility alignment, and PECR-respecting measurement without fabricated lead guarantees.',
        },
      ],
    },
    {
      id: 'sitemap-contact',
      eyebrow: '04 · Correspondence & Navigation',
      title: 'Contact & Site Directory',
      description:
        'Direct written scoping details and this HTML directory listing every active canonical route on wpcarepoint.co.uk.',
      entries: [
        {
          index: '15.',
          title: 'Contact WPCarePoint',
          routePath: '/contact/',
          canonicalUrl: 'https://wpcarepoint.co.uk/contact/',
          badgeLabel: 'Direct Email Scoping',
          summary:
            'Reach our UK engineering team directly at contact@wpcarepoint.co.uk with structured brief guidance across builds, fixes, and care plans.',
        },
        {
          index: '16.',
          title: 'Site Map',
          routePath: '/site-map/',
          canonicalUrl: 'https://wpcarepoint.co.uk/site-map/',
          badgeLabel: 'Current Page',
          isCurrentPage: true,
          summary:
            'Human-readable HTML index representing all 16 active public routes across WPCarePoint, kept strictly aligned with our canonical XML sitemap.',
        },
      ],
    },
  ] as SiteMapCategory[],
  scopeNote: {
    eyebrow: 'Directory Governance',
    title: 'Why only verified active pages appear in this directory',
    description:
      'Every URL listed above resolves cleanly with structured metadata and British English (en-GB) technical documentation. Unfinished policy drafts, archived articles, or unverified legacy paths remain intentionally excluded until separately reviewed and published.',
  },
  cta: {
    eyebrow: 'Need Help Finding the Right Service?',
    headline: 'Write directly with your website URL and priorities for clear guidance.',
    description: `If you are unsure whether a project needs Website Development, Speed Optimisation, a Care Plan, or a focused Quick Fix, email ${BRAND_INFO.email} directly for candid written feedback.`,
    mailtoSubject: 'WPCarePoint Enquiry (via Site Map)',
    primaryButtonLabel: 'Visit Contact Page',
  },
};
