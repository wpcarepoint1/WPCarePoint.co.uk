export interface NavServiceItem {
  label: string;
  description: string;
  href: string;
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
  positioning: 'Web Development, eCommerce & AI Solutions Agency',
  tagline: 'Building, improving and supporting digital businesses.',
  email: 'contact@wpcarepoint.co.uk',
  address: 'Robert Denholm House, Bletchingley Road, Nutfield RH1 4HW, United Kingdom',
  channelNote: 'Email enquiries only. Direct engineering correspondence without call-centre queues.',
  heroImageUrl: '/src/assets/images/hero_wpcarepoint_studio_1795464512427.jpg',
  heroImageAlt: 'WPCarePoint UK studio workspace with architectural interface schematics in soft daylight',
  architectureImageUrl: '/src/assets/images/service_web_architecture_1795464512894.jpg',
  architectureImageAlt: 'Modular web engineering architecture blocks in WPCarePoint deep coastal teal palette',
  portfolioImageUrl: '/src/assets/images/portfolio_showcase_frame_1795464512602.jpg',
  portfolioImageAlt: 'Minimalist UK web design layout blueprint and tablet presentation frame',
} as const;

export const NAV_ITEMS: Array<{
  label: string;
  href: string;
  hasDropdown?: boolean;
}> = [
  { label: 'Services', href: '#services-overview', hasDropdown: true },
  { label: 'Care Plans', href: '#website-care' },
  { label: 'Process', href: '#our-process' },
  { label: 'Portfolio', href: '#portfolio-preview' },
  { label: 'FAQ', href: '#faq' },
];

export const NAV_SERVICE_DROPDOWN: NavServiceItem[] = [
  {
    label: 'Website Design & Development',
    description: 'Bespoke WordPress block builds, React & Next.js web applications.',
    href: '#website-development',
    serviceSlug: 'website-development',
  },
  {
    label: 'eCommerce Development',
    description: 'WooCommerce & custom retail checkouts for UK currency, VAT & shipping.',
    href: '#ecommerce-development',
    serviceSlug: 'ecommerce-website-development',
  },
  {
    label: 'AI & Business Automation',
    description: 'UK GDPR–aligned CRM workflows, enquiry triage & API integrations.',
    href: '#ai-automation',
    serviceSlug: 'ai-automation-business-process-automation',
  },
  {
    label: 'Website Care & Technical Support',
    description: 'Structured backups, staging updates & WordPress Quick Fix support.',
    href: '#website-care',
  },
  {
    label: 'SEO & AI Search Optimisation',
    description: 'Technical SEO, WordPress speed & AI search visibility (GEO / AIO).',
    href: '#seo-ai-search',
    serviceSlug: 'search-engine-optimisation',
  },
];

export const HERO_COMMITMENTS = [
  { label: 'Core Practice', value: 'Web · eCommerce · AI' },
  { label: 'Engineering Standard', value: 'WCAG 2.2 AA & UK GDPR' },
  { label: 'Performance Focus', value: 'Core Web Vitals Ready' },
  { label: 'Direct Ownership', value: '100% Client-Owned Code' },
];

export const CORE_SERVICE_TRACKS: CoreServiceTrack[] = [
  {
    id: 'website-development',
    index: '01.',
    title: 'Website Design & Development',
    subtitle: 'WordPress · React · Next.js · TypeScript',
    description:
      'Clean, responsive business websites built without bloated templates or fragile plugin stacks—giving UK teams full editorial control and long-term technical ownership.',
    deliverables: [
      'Custom WordPress block architecture and lightweight theme engineering',
      'Modern React and Next.js frontend web applications',
      'Mobile-first layouts tested for WCAG 2.2 AA accessibility and readability',
      'Clean semantic structure with server-level 301 migration protection',
    ],
    standards: 'WordPress Gutenberg · Next.js & TypeScript · Responsive UI',
    serviceSlug: 'website-development',
    anchorId: 'website-development',
  },
  {
    id: 'ecommerce-development',
    index: '02.',
    title: 'eCommerce Development',
    subtitle: 'WooCommerce HPOS · Custom Storefronts · UK Payments',
    description:
      'Reliable UK online stores engineered for fast mobile checkouts, clean stock management, British VAT logic, and transparent payment and courier integrations.',
    deliverables: [
      'High-performance WooCommerce and bespoke online retail builds',
      'GBP (£) pricing, UK VAT tax rules, and Royal Mail / DPD shipping configurations',
      'Stripe, Apple Pay, and Strong Customer Authentication (3D Secure) checkouts',
      'Product Schema markup and clean category URL architecture',
    ],
    standards: 'WooCommerce · Stripe UK SCA · Royal Mail & DPD',
    serviceSlug: 'ecommerce-website-development',
    anchorId: 'ecommerce-development',
  },
  {
    id: 'ai-automation',
    index: '03.',
    title: 'AI & Business Automation',
    subtitle: 'Workflow Automation · Custom APIs · Data Governance',
    description:
      'Practical automation connecting your website enquiries, CRM, invoicing, and internal operations—engineered with human oversight and UK GDPR data boundaries.',
    deliverables: [
      'Automated enquiry triage and structured lead routing into CRM pipelines',
      'Custom API integrations linking forms, accounting, and operations tools',
      'Scoped AI-assisted search and qualification tools grounded in verified copy',
      'Human-in-the-loop approval checkpoints and audit-ready workflows',
    ],
    standards: 'API Integration · UK GDPR Boundaries · Human Approval',
    serviceSlug: 'ai-automation-business-process-automation',
    anchorId: 'ai-automation',
  },
  {
    id: 'website-care',
    index: '04.',
    title: 'Website Care & Technical Support',
    subtitle: 'Essential · Advanced · Elite Care + Quick Fix',
    description:
      'Structured website stewardship keeping WordPress and custom web builds secure, backed up off-site, and updated cleanly on staging before touching production.',
    deliverables: [
      'Scheduled core, theme, and plugin updates validated on staging',
      'Encrypted off-site backups stored safely across UK / EEA infrastructure',
      'Uptime monitoring, security hardening, and SSL / DNS stewardship',
      'One-off WordPress Quick Fix pathway for urgent standalone repairs',
    ],
    standards: 'Staging Validation · Off-Site Backups · Email-First Support',
    anchorId: 'website-care',
  },
  {
    id: 'seo-ai-search',
    index: '05.',
    title: 'SEO & AI Search Optimisation',
    subtitle: 'Technical SEO · Speed Optimisation · GEO & AI Search',
    description:
      'Structured technical SEO, WordPress Core Web Vitals speed engineering, and consolidated AI Search Optimisation so UK buyers discover your brand across Google and AI assistants.',
    deliverables: [
      'Technical SEO audits, clean crawl hierarchy, and Schema.org JSON-LD graphs',
      'Dedicated WordPress Speed Optimisation and Core Web Vitals tuning',
      'Consolidated AI Search Optimisation (GEO & AIO) for ChatGPT, Gemini & Claude',
      'Clean redirection governance preserving historical .co.uk search authority',
    ],
    standards: 'Technical SEO · Core Web Vitals · AI Search Readiness',
    serviceSlug: 'search-engine-optimisation',
    anchorId: 'seo-ai-search',
  },
];

export const CARE_PLAN_TIERS: CarePlanTier[] = [
  {
    id: 'essential',
    name: 'Essential Care',
    audience: 'For brochure websites & small UK businesses',
    pricingLabel: 'Enquire for Pricing',
    summary:
      'Core security hygiene, scheduled off-site backups, and tested staging updates to keep business websites dependable.',
    highlights: [
      'Off-site encrypted backups with structured restore points',
      'Core, theme, and plugin updates tested before deployment',
      'Continuous availability checks and security hardening',
      'Direct email technical support from WPCarePoint',
    ],
  },
  {
    id: 'advanced',
    name: 'Advanced Care',
    audience: 'For growing service companies & lead-gen sites',
    pricingLabel: 'Enquire for Pricing',
    highlighted: true,
    summary:
      'Proactive speed oversight, priority incident remediation, and recurring engineering time for continuous site improvements.',
    highlights: [
      'More frequent encrypted off-site backups and staging checks',
      'WordPress performance tuning and Core Web Vitals review',
      'Priority malware investigation and clean site remediation',
      'Dedicated monthly engineering hours for content or UI updates',
    ],
  },
  {
    id: 'elite',
    name: 'Elite Care',
    audience: 'For WooCommerce stores & business-critical platforms',
    pricingLabel: 'Enquire for Pricing',
    summary:
      'Comprehensive technical governance, transactional checkout checks, and tailored roadmap support for revenue-critical sites.',
    highlights: [
      'High-frequency database snapshots for active eCommerce orders',
      'Checkout, payment gateway, and critical-path regression checks',
      'Structured monthly engineering allocation for feature delivery',
      'Bespoke retainer scope agreed around operational requirements',
    ],
  },
];

export const WHY_CHOOSE_POINTS: WhyChoosePoint[] = [
  {
    index: '01.',
    title: '100% Client Code & Domain Ownership',
    description:
      'Every website, domain, repository, and hosting account stays registered cleanly in your business name—no proprietary lock-in or captive agency tooling.',
    standard: 'Full Ownership · Clean Handover',
  },
  {
    index: '02.',
    title: 'Engineering Over Heavy Page Builders',
    description:
      'We build clean WordPress block themes and TypeScript/React interfaces engineered for Core Web Vitals, maintainability, and fast UK mobile loading.',
    standard: 'Clean Semantic Code · Fast Mobile Load',
  },
  {
    index: '03.',
    title: 'UK Standards, Accessibility & Privacy',
    description:
      'Websites and workflows are planned around British English (en-GB), WCAG 2.2 AA accessibility clarity, and UK GDPR / PECR data discipline.',
    standard: 'en-GB · WCAG 2.2 AA · UK GDPR',
  },
  {
    index: '04.',
    title: 'Transparent Email-First Delivery',
    description:
      'Clear written scoping, staged preview links, and documented milestones directly with senior engineering rather than multi-layer sales handoffs.',
    standard: 'Written Scope · Clear Milestones',
  },
];

export const WORKING_PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01.',
    title: 'Discovery & Technical Audit',
    summary:
      'We inspect your commercial goals, existing URLs, hosting setup, performance bottlenecks, and integration needs before recommending architecture.',
    deliverable: 'Written scope & technical plan',
  },
  {
    step: '02.',
    title: 'Design & Staging Architecture',
    summary:
      'Page hierarchy, component systems, WooCommerce rules, or automation workflows are built cleanly in an isolated staging environment for review.',
    deliverable: 'Interactive staging preview',
  },
  {
    step: '03.',
    title: 'QA, Speed & Launch Governance',
    summary:
      'We test responsive breakpoints, WCAG contrast, SSL, 301 redirects, and Core Web Vitals prior to controlled DNS cut-over with minimal disruption.',
    deliverable: 'Verified production release',
  },
  {
    step: '04.',
    title: 'Ongoing Care & Search Growth',
    summary:
      'Post-launch, structured Care Plans, WordPress Speed Optimisation, SEO, and AI Search enhancements keep your platform accurate and competitive.',
    deliverable: 'Continuous stewardship',
  },
];

export const PORTFOLIO_PLACEHOLDER_SLOTS: PortfolioSlot[] = [
  {
    id: 'portfolio-recovery-web',
    status: 'Portfolio Recovery in Progress',
    sector: 'Website Design & Development',
    title: 'Verified UK Business Website Archive Pending Publication',
    scope: 'WordPress Block Architecture · Next.js Builds · Clean Responsive UX',
    note: 'Historical client examples are currently undergoing independent verification and permission review prior to public republication.',
    imageUrl: BRAND_INFO.portfolioImageUrl,
    imageAlt: BRAND_INFO.portfolioImageAlt,
  },
  {
    id: 'portfolio-recovery-ecommerce',
    status: 'Portfolio Recovery in Progress',
    sector: 'eCommerce & Speed Engineering',
    title: 'UK Retail & WooCommerce Case Record Pending Sign-Off',
    scope: 'WooCommerce HPOS · GBP/VAT Checkouts · WordPress Speed Optimisation',
    note: 'Verified performance benchmarks and approved storefront screenshots will appear here once current documentation checks complete.',
    imageUrl: BRAND_INFO.architectureImageUrl,
    imageAlt: BRAND_INFO.architectureImageAlt,
  },
];

export const HOMEPAGE_FAQS: FaqEntry[] = [
  {
    id: 'faq-platforms',
    question: 'Do you build exclusively with WordPress, or modern React and Next.js as well?',
    answer:
      'We work with both. For marketing and content-led UK business websites requiring familiar editorial control, we engineer lightweight custom WordPress block themes. For web applications, customer portals, and headless frontends, we build with React, Next.js, and TypeScript.',
  },
  {
    id: 'faq-care-pricing',
    question: 'Why do Essential, Advanced, and Elite Care Plans show "Enquire for Pricing"?',
    answer:
      'Website complexity varies significantly between a brochure WordPress installation, a multi-plugin membership portal, and an active WooCommerce store. Enquiring by email lets us scope the exact backup frequency, staging needs, and support allocation fairly with no hidden surcharges.',
  },
  {
    id: 'faq-quick-fix',
    question: 'Can we request a one-off WordPress fix without signing up for a Care Plan?',
    answer:
      'Yes. Our WordPress Quick Fix pathway handles urgent standalone issues—such as plugin conflicts, critical errors, broken layouts, or speed bottlenecks—without locking you into a monthly contract.',
  },
  {
    id: 'faq-speed-seo',
    question: 'What is included in SEO & AI Search Optimisation alongside WordPress Speed?',
    answer:
      'We combine clean technical SEO (crawl hygiene, semantic structure, Schema.org JSON-LD, and 301 preservation) with WordPress Speed Optimisation for Core Web Vitals and consolidated AI Search Optimisation (GEO / AIO) so search engines and AI assistants interpret your services accurately.',
  },
  {
    id: 'faq-contact',
    question: 'How do we start a project or enquiry with WPCarePoint?',
    answer:
      'We handle all initial enquiries and technical scoping by email at contact@wpcarepoint.co.uk. Simply outline your website URL, goals, or technical challenge, and we will respond in writing with clear next steps.',
  },
];
