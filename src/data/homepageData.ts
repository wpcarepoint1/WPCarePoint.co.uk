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

export interface PortfolioSlot {
  id: string;
  status: string;
  sector: string;
  title: string;
  scope: string;
  note: string;
  imageUrl: string;
  imageAlt: string;
}

export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
}

export const BRAND_INFO = {
  name: 'WPCarePoint',
  positioning: 'UK Digital Engineering · WordPress · eCommerce · AI',
  heroHeadline: 'Websites, WooCommerce & AI systems engineered for UK businesses.',
  tagline: 'Building, improving and supporting digital businesses.',
  email: 'contact@wpcarepoint.co.uk',
  address: 'Robert Denholm House, Bletchingley Road, Nutfield RH1 4HW, United Kingdom',
  channelNote: 'Direct email scoping with engineering—no call-centre queues or sales layers.',
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
  { label: 'Core Craft', value: 'WordPress · React · WooCommerce' },
  { label: 'Engineering Standard', value: 'WCAG 2.2 AA & UK GDPR' },
  { label: 'Asset Ownership', value: '100% Client-Owned Code' },
  { label: 'Direct Enquiries', value: 'Email Scoping Only' },
];

export const CORE_SERVICE_TRACKS: CoreServiceTrack[] = [
  {
    id: 'website-development',
    index: '01.',
    title: 'Website Design & Development',
    subtitle: 'WordPress · React · Next.js',
    description:
      'Clean, fast business websites built without bloated multipurpose themes or fragile page builders—keeping editorial control and code ownership firmly with your team.',
    deliverables: [
      'Custom WordPress Gutenberg block themes with lean plugin footprint',
      'Modern React, Next.js & TypeScript web platforms and portals',
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
      'Reliable UK online stores built for fast mobile checkouts, clean catalogue filtering, British VAT rules, and accurate shipping workflows.',
    deliverables: [
      'WooCommerce HPOS and bespoke storefront development',
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
      'Practical workflow automation linking your website, CRM, and accounting tools—built around UK GDPR data boundaries and human approval checkpoints.',
    deliverables: [
      'Structured lead routing and validation into CRMs such as HubSpot',
      'Defensive REST and webhook integrations for tools such as Xero & Stripe',
      'Grounded AI brief triage and draft summaries behind staff review',
      'Server-side secret isolation and clear failure alerts',
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
      'Calm website stewardship keeping WordPress and WooCommerce updated on staging first, backed up off-site, and supported directly by engineering.',
    deliverables: [
      'Core, theme & plugin updates validated on staging before release',
      'Encrypted off-site backups stored independently from primary hosting',
      'Availability monitoring, hardening & Emergency & Malware Triage',
      'One-off WordPress Quick Fix repairs without a monthly contract',
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
      'Technical search foundations, WordPress Core Web Vitals speed engineering, and Schema.org clarity helping both Google UK and AI assistants read your business accurately.',
    deliverables: [
      'Technical crawl audits, clean canonicals & single-hop 301 hygiene',
      'Dedicated WordPress Speed Optimisation (LCP, INP & CLS tuning)',
      'Structured JSON-LD entities & plain-English AIO / GEO clarity',
      'Honest search consultancy with zero fabricated ranking promises',
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
      'Domains, hosting accounts, and repositories stay in your business name—zero proprietary lock-in or captive tooling.',
    standard: 'Full Asset Ownership',
  },
  {
    index: '02.',
    title: 'Clean Code Over Page Builders',
    description:
      'Custom WordPress blocks and TypeScript interfaces built for Core Web Vitals, accessibility, and straightforward long-term editing.',
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
    title: 'Direct Senior Email Scoping',
    description:
      'Clear written proposals, staging preview links, and candid technical trade-offs directly with engineering—no sales layers.',
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
    deliverable: 'Ongoing stewardship',
  },
];

export const PORTFOLIO_PLACEHOLDER_SLOTS: PortfolioSlot[] = [
  {
    id: 'portfolio-recovery-web',
    status: 'Verification in Progress',
    sector: 'Website Design & Development',
    title: 'Verified UK Business Website Archive Pending Sign-Off',
    scope: 'WordPress Blocks · Next.js · Responsive UX',
    note: 'Client examples are held off-site until written client publication approval and platform verification complete.',
    imageUrl: BRAND_INFO.portfolioImageUrl,
    imageAlt: BRAND_INFO.portfolioImageAlt,
  },
  {
    id: 'portfolio-recovery-ecommerce',
    status: 'Verification in Progress',
    sector: 'eCommerce & Speed Engineering',
    title: 'UK Retail & WooCommerce Record Pending Publication',
    scope: 'WooCommerce HPOS · GBP/VAT · Speed Tuning',
    note: 'Verified performance benchmarks and client storefront case records will publish once formal review completes.',
    imageUrl: BRAND_INFO.architectureImageUrl,
    imageAlt: BRAND_INFO.architectureImageAlt,
  },
];

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
    question: 'How do we start a project or enquiry with WPCarePoint?',
    answer:
      'Write directly to contact@wpcarepoint.co.uk with your website URL, commercial goals, or technical fault. We review every brief in writing and respond with clear next steps.',
  },
];
