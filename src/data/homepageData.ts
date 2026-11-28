export interface NavServiceItem {
  label: string;
  description: string;
  href: string;
  routePath?: string;
  serviceSlug?: string;
}

export interface CoreServiceTrack {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  standards: string;
  routePath?: string;
  serviceSlug?: string;
  anchorId: string;
}

export interface CarePlanTier {
  id: 'essential' | 'advanced' | 'elite';
  name: string;
  audience: string;
  pricingLabel: string;
  summary: string;
  highlights: string[];
  highlighted?: boolean;
}

export interface WhyChoosePoint {
  index: string;
  title: string;
  description: string;
  standard: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  summary: string;
  deliverable: string;
}

export interface PortfolioShowcaseItem {
  id: string;
  eyebrow: string;
  scope: string;
  title: string;
  summary: string;
  serviceTracks: string[];
  externalLabel: string;
  externalUrl: string;
  imageUrl: string;
  imageAlt: string;
}

export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
}

export const FIVERR_PROOF_LINKS = {
  profileUrl: 'https://www.fiverr.com/hdhiren',
  portfolioUrl: 'https://www.fiverr.com/users/hdhiren/portfolio',
  handle: 'fiverr.com/hdhiren',
} as const;

export const BRAND_INFO = {
  name: 'WPCarePoint',
  positioning: 'UK Digital Engineering · WordPress · eCommerce · AI',
  heroHeadline: 'Websites, WooCommerce & AI systems engineered for UK businesses.',
  tagline: 'Building, improving and supporting digital businesses.',
  email: 'contact@wpcarepoint.co.uk',
  address: 'Robert Denholm House, Bletchingley Road, Nutfield RH1 4HW, United Kingdom',
  channelNote: 'Direct written scoping with engineering—no call-centre queues or sales layers.',
  heroImageUrl: '/src/assets/images/hero_wpcarepoint_studio_1795464512427.webp',
  heroImageAlt: 'WPCarePoint UK studio workspace with architectural interface schematics in soft daylight',
  architectureImageUrl: '/src/assets/images/service_web_architecture_1795464512894.webp',
  architectureImageAlt: 'Modular web engineering architecture blocks in WPCarePoint deep coastal teal palette',
  portfolioImageUrl: '/src/assets/images/portfolio_showcase_frame_1795464512602.webp',
  portfolioImageAlt: 'Minimalist UK web design layout blueprint and tablet presentation frame',
} as const;

export const NAV_ITEMS: Array<{
  label: string;
  href: string;
  routePath?: string;
  hasDropdown?: boolean;
}> = [
  { label: 'Services', href: '/services/', routePath: '/services/', hasDropdown: true },
  { label: 'Care Plans', href: '#website-care' },
  { label: 'Process', href: '#our-process' },
  { label: 'About', href: '/about/', routePath: '/about/' },
  { label: 'FAQ', href: '#faq' },
];

export const NAV_SERVICE_DROPDOWN: NavServiceItem[] = [
  {
    label: 'Website Design & Development',
    description: 'Bespoke WordPress block builds, React & Next.js web platforms.',
    href: '/services/website-development/',
    routePath: '/services/website-development/',
    serviceSlug: 'website-development',
  },
  {
    label: 'WordPress Speed Optimisation',
    description: 'Core Web Vitals tuning, image payloads, caching & database hygiene.',
    href: '/wordpress-speed-optimisation/',
    routePath: '/wordpress-speed-optimisation/',
  },
  {
    label: 'eCommerce Development',
    description: 'WooCommerce & custom retail checkouts for GBP, UK VAT & shipping.',
    href: '/services/ecommerce-development/',
    routePath: '/services/ecommerce-development/',
    serviceSlug: 'ecommerce-development',
  },
  {
    label: 'AI & Business Automation',
    description: 'UK GDPR–aligned CRM workflows, enquiry triage & API integrations.',
    href: '/services/ai-business-automation/',
    routePath: '/services/ai-business-automation/',
    serviceSlug: 'ai-business-automation',
  },
  {
    label: 'Website Care & Technical Support',
    description: 'Staging-tested updates, off-site backups, Care Plans & Quick Fixes.',
    href: '/services/website-care-support/',
    routePath: '/services/website-care-support/',
    serviceSlug: 'website-care-support',
  },
  {
    label: 'SEO & AI Search Optimisation',
    description: 'Technical SEO, Schema.org, SXO & AI search visibility (AIO / GEO).',
    href: '/services/ai-search-optimisation/',
    routePath: '/services/ai-search-optimisation/',
    serviceSlug: 'ai-search-optimisation',
  },
];

export const HERO_COMMITMENTS = [
  { label: 'Core Specialism', value: 'WordPress · WooCommerce · React' },
  { label: 'Engineering Standard', value: 'WCAG 2.2 AA & UK GDPR' },
  { label: 'Asset Ownership', value: '100% Client-Owned Code' },
  { label: 'Consultations', value: 'Direct Email Scoping' },
];

export const CORE_SERVICE_TRACKS: CoreServiceTrack[] = [
  {
    id: 'website-development',
    index: '01.',
    title: 'Website Design & Development',
    subtitle: 'WordPress · React · Next.js',
    description:
      'Bespoke WordPress Gutenberg builds for teams publishing regularly, and React or Next.js platforms when custom web application logic is needed—free of heavy page-builder clutter.',
    deliverables: [
      'Custom WordPress block themes with a lean, auditable plugin footprint',
      'React, Next.js & TypeScript frontends for bespoke web portals',
      'WCAG 2.2 AA mobile-first layouts tested across UK devices',
      'Single-hop 301 redirect governance during domain or site rebuilds',
    ],
    standards: 'WordPress Blocks · Next.js · TypeScript',
    routePath: '/services/website-development/',
    serviceSlug: 'website-development',
    anchorId: 'website-development',
  },
  {
    id: 'ecommerce-development',
    index: '02.',
    title: 'eCommerce Development',
    subtitle: 'WooCommerce HPOS · Stripe UK SCA',
    description:
      'Online stores built for clear mobile checkouts, clean catalogue filtering, British VAT rules, and Royal Mail or DPD shipping workflows—in WooCommerce or custom storefronts.',
    deliverables: [
      'WooCommerce HPOS and custom UK online retail engineering',
      'GBP (£) pricing, UK VAT logic & Royal Mail / DPD courier bands',
      'Stripe UK, Apple Pay & 3D Secure (SCA) checkout integration',
      'Clean product taxonomy with structured Product & Offer Schema',
    ],
    standards: 'WooCommerce HPOS · GBP/VAT · Stripe SCA',
    routePath: '/services/ecommerce-development/',
    serviceSlug: 'ecommerce-development',
    anchorId: 'ecommerce-development',
  },
  {
    id: 'ai-automation',
    index: '03.',
    title: 'AI & Business Automation',
    subtitle: 'APIs · CRM Workflows · Human Oversight',
    description:
      'Practical workflow automation linking your website, CRM, and accounting tools—designed around UK GDPR data boundaries and human approval checkpoints.',
    deliverables: [
      'Structured lead routing and validation into CRMs such as HubSpot',
      'Defensive REST and webhook integrations for Xero, Stripe & back-office tools',
      'Grounded AI brief triage and draft summaries behind staff sign-off',
      'Server-side secret isolation and reliable failure alerts',
    ],
    standards: 'API Pipelines · UK GDPR · Human Review',
    routePath: '/services/ai-business-automation/',
    serviceSlug: 'ai-business-automation',
    anchorId: 'ai-automation',
  },
  {
    id: 'website-care',
    index: '04.',
    title: 'Website Care & Technical Support',
    subtitle: 'Staging Updates · Backups · Quick Fix',
    description:
      'Ongoing website care keeping WordPress and WooCommerce updated in staging first, backed up off-site, and supported directly by engineers—plus one-off Quick Fixes.',
    deliverables: [
      'Core, theme & plugin updates validated on staging before live release',
      'Encrypted off-site backups stored independently from your web host',
      'Uptime monitoring, security hardening & Emergency & Malware Triage',
      'Standalone WordPress Quick Fix repairs without a monthly contract',
    ],
    standards: 'Staging First · Off-Site Backups · No Lock-In',
    routePath: '/services/website-care-support/',
    serviceSlug: 'website-care-support',
    anchorId: 'website-care',
  },
  {
    id: 'seo-ai-search',
    index: '05.',
    title: 'SEO & AI Search Optimisation',
    subtitle: 'Technical SEO · Speed · GEO & AIO',
    description:
      'Technical crawl hygiene, WordPress Core Web Vitals speed engineering, and Schema.org clarity so both Google UK and modern AI search tools read your business accurately.',
    deliverables: [
      'Technical crawl audits, clean canonicals & single-hop 301 hygiene',
      'Dedicated WordPress Speed Optimisation (LCP, INP & CLS tuning)',
      'Structured JSON-LD entities & plain-English AIO / GEO clarity',
      'Candid technical search advice with zero fabricated ranking promises',
    ],
    standards: 'Technical SEO · Core Web Vitals · AIO/GEO',
    routePath: '/services/ai-search-optimisation/',
    serviceSlug: 'ai-search-optimisation',
    anchorId: 'seo-ai-search',
  },
];

export const CARE_PLAN_TIERS: CarePlanTier[] = [
  {
    id: 'essential',
    name: 'Essential Care',
    audience: 'Brochure sites & small UK firms',
    pricingLabel: 'Enquire for Pricing',
    summary:
      'Core security hygiene, scheduled off-site backups, and staging-tested updates to keep brochure sites dependable.',
    highlights: [
      'Encrypted off-site backups with verified restore points',
      'WordPress core, theme & plugin updates tested on staging',
      'Uptime monitoring and access security checks',
      'Direct email support from senior engineering',
    ],
  },
  {
    id: 'advanced',
    name: 'Advanced Care',
    audience: 'Growing service & lead-gen sites',
    pricingLabel: 'Enquire for Pricing',
    highlighted: true,
    summary:
      'Proactive speed oversight, priority incident remediation, and recurring monthly engineering time for site improvements.',
    highlights: [
      'Higher-frequency off-site backups & staging checks',
      'WordPress speed tuning & Core Web Vitals review',
      'Priority malware investigation & remediation triage',
      'Monthly engineering allocation for UI or content updates',
    ],
  },
  {
    id: 'elite',
    name: 'Elite Care',
    audience: 'WooCommerce & critical platforms',
    pricingLabel: 'Enquire for Pricing',
    summary:
      'High-frequency database protection and full checkout regression testing for revenue-critical retail and portal sites.',
    highlights: [
      'Frequent database snapshots protecting active orders',
      'Checkout, gateway & basket regression checks on staging',
      'Structured monthly engineering allocation for roadmap work',
      'Bespoke written scope around operational demands',
    ],
  },
];

export const WHY_CHOOSE_POINTS: WhyChoosePoint[] = [
  {
    index: '01.',
    title: '100% Client Code & Domain Ownership',
    description:
      'Domains, hosting accounts, and repositories stay registered cleanly in your business name—zero proprietary lock-in or captive tooling.',
    standard: 'Full Asset Ownership',
  },
  {
    index: '02.',
    title: 'Clean Code Over Page Builders',
    description:
      'Custom WordPress blocks and TypeScript interfaces built for Core Web Vitals, accessibility, and straightforward day-to-day editing.',
    standard: 'Fast UK Mobile Load',
  },
  {
    index: '03.',
    title: 'UK Standards, Accessibility & Privacy',
    description:
      'Engineered around British English (en-GB), WCAG 2.2 AA contrast and keyboard focus, and UK GDPR / PECR discipline.',
    standard: 'WCAG 2.2 AA · UK GDPR',
  },
  {
    index: '04.',
    title: 'Direct Senior Email Consultations',
    description:
      'Clear written proposals, staging preview links, and candid technical trade-offs directly with engineering—no sales layers or scripts.',
    standard: 'Written Scope · Zero Fluff',
  },
];

export const WORKING_PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01.',
    title: 'Discovery & Audit',
    summary:
      'Review commercial goals, existing URLs, hosting constraints, and integration needs before recommending architecture.',
    deliverable: 'Written technical scope',
  },
  {
    step: '02.',
    title: 'Staging Architecture',
    summary:
      'Build page systems, WooCommerce logic, or API connectors on an isolated staging link for direct review.',
    deliverable: 'Interactive staging preview',
  },
  {
    step: '03.',
    title: 'QA & Safe Launch',
    summary:
      'Verify mobile breakpoints, WCAG contrast, SSL, 301 redirects, and Core Web Vitals before coordinated DNS cut-over.',
    deliverable: 'Verified live release',
  },
  {
    step: '04.',
    title: 'Care & Growth',
    summary:
      'Retain full independence or pair with Website Care, WordPress Speed Optimisation, and SEO & AI Search tuning.',
    deliverable: 'Ongoing support option',
  },
];

export const FIVERR_PORTFOLIO_SHOWCASE: PortfolioShowcaseItem = {
  id: 'fiverr-official-portfolio',
  eyebrow: 'Official Portfolio · @hdhiren on Fiverr',
  scope: 'WordPress · WooCommerce · Redesigns · Speed & Support',
  title: 'Inspect real WordPress & WooCommerce work on our official Fiverr portfolio.',
  summary:
    'While curated UK case records await written client publication sign-off for this website, delivered website builds, store redesigns, speed tuning, and troubleshooting examples are publicly accessible on our official Fiverr portfolio.',
  serviceTracks: [
    'WordPress business website design & custom builds',
    'Website redesigns and responsive UX cleanup',
    'WooCommerce storefront development & fixes',
    'Speed optimisation & WordPress troubleshooting',
  ],
  externalLabel: 'View Official Fiverr Portfolio',
  externalUrl: FIVERR_PROOF_LINKS.portfolioUrl,
  imageUrl: BRAND_INFO.portfolioImageUrl,
  imageAlt: BRAND_INFO.portfolioImageAlt,
};

export const HOMEPAGE_FAQS: FaqEntry[] = [
  {
    id: 'faq-platforms',
    question: 'Do you build exclusively with WordPress, or modern React and Next.js as well?',
    answer:
      'We build with both. For marketing and service websites where teams edit pages regularly, we build lightweight custom WordPress block themes. For portals, web apps, and headless storefronts, we build with React, Next.js, and TypeScript.',
  },
  {
    id: 'faq-care-pricing',
    question: 'Why do Essential, Advanced, and Elite Care Plans show "Enquire for Pricing"?',
    answer:
      'Support effort varies substantially between a five-page brochure site, a multi-API portal, and an active WooCommerce store. Scoping in writing via email ensures you pay fairly for the backup frequency and staging time your site genuinely needs.',
  },
  {
    id: 'faq-quick-fix',
    question: 'Can we request a one-off WordPress fix without signing up for a Care Plan?',
    answer:
      'Yes. Our WordPress Quick Fix pathway covers standalone plugin conflicts, fatal errors, broken layouts, or urgent troubleshooting without committing to an ongoing monthly retainer.',
  },
  {
    id: 'faq-speed-seo',
    question: 'What is included in SEO & AI Search Optimisation alongside WordPress Speed?',
    answer:
      'We pair technical crawl hygiene, clean headings, single-hop 301 governance, and Schema.org JSON-LD with WordPress Speed Optimisation and clear AIO / GEO structuring so search crawlers and AI systems interpret your services accurately.',
  },
  {
    id: 'faq-contact',
    question: 'How do we book a consultation or start an enquiry with WPCarePoint?',
    answer:
      'Email contact@wpcarepoint.co.uk with your website URL, commercial goals, or technical fault. We review every brief directly and reply in writing with clear next steps.',
  },
];
