export type ServiceCategory =
  | 'all'
  | 'web'
  | 'visibility'
  | 'automation'
  | 'brand';

export interface SubServiceItem {
  id: string;
  name: string;
  outcome: string;
}

export interface AgencyServicePillar {
  id: string;
  index: string;
  category: Exclude<ServiceCategory, 'all'>;
  title: string;
  summary: string;
  items: SubServiceItem[];
  featured?: boolean;
}

export interface CarePlan {
  id: string;
  name: string;
  audience: string;
  monthlyPriceGbp: number;
  annualMonthlyGbp: number;
  summary: string;
  limits: Array<{ label: string; value: string }>;
  highlighted?: boolean;
}

export interface CaseStudy {
  id: string;
  client: string;
  sector: string;
  location: string;
  imageUrl: string;
  imageAlt: string;
  metricHeadline: string;
  metricDetail: string;
  challenge: string;
  solution: string;
  quote: string;
  authorName: string;
  authorRole: string;
}

export interface WordPressGuide {
  id: string;
  topic: string;
  readTime: string;
  publishedAt: string;
  title: string;
  excerpt: string;
  sections: Array<{ heading: string; body: string }>;
}

export interface UkFaqItem {
  id: string;
  question: string;
  answer: string;
}

export type TechDomainId =
  | 'languages'
  | 'frontend'
  | 'ai-geo'
  | 'cloud'
  | 'commerce';

export interface TechStackEntry {
  name: string;
  role: string;
  rationale: string;
}

export interface TechStackDomain {
  id: TechDomainId;
  label: string;
  summary: string;
  entries: TechStackEntry[];
}

export interface UkSectorItem {
  index: string;
  sector: string;
  standard: string;
  outcome: string;
}

export interface ComplianceStandard {
  code: string;
  title: string;
  detail: string;
}

export const HERO_STUDIO_IMAGE =
  '/src/assets/images/hero_wpcarepoint_studio_1795464512427.jpg';
export const SERVICE_ENGINEERING_IMAGE =
  '/src/assets/images/service_web_architecture_1795464512894.jpg';

export const UK_OFFICE_ADDRESS =
  'Robert Denholm House, Bletchingley Road, Nutfield RH1 4HW, United Kingdom';

export const UK_REGIONS_SERVED = [
  'Surrey & London',
  'Manchester',
  'Birmingham',
  'Edinburgh',
  'Bristol',
  'Leeds',
];

export const ENGINEERING_STACK_DOMAINS: TechStackDomain[] = [
  {
    id: 'languages',
    label: 'Languages & Core',
    summary:
      'Strictly typed web languages and battle-tested server runtimes chosen for security, speed, and long-term UK team maintainability.',
    entries: [
      {
        name: 'TypeScript 5 & JavaScript',
        role: 'Primary Web & API Language',
        rationale:
          'Compile-time type safety across complex web apps, custom dashboards, and booking portals.',
      },
      {
        name: 'PHP 8.4 (Strict WordPress)',
        role: 'Enterprise CMS & Plugins',
        rationale:
          'Lean, composer-managed custom modules without bloated page-builder overhead.',
      },
      {
        name: 'Python 3.12 (FastAPI)',
        role: 'AI Pipelines & Automation',
        rationale:
          'Server-side LLM orchestration, document parsing, and UK GDPR–safe data routing.',
      },
      {
        name: 'PostgreSQL & MySQL 8',
        role: 'Relational Data & HPOS',
        rationale:
          'Indexed query tuning so high-volume WooCommerce catalogues and portals stay instant.',
      },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend & UX',
    summary:
      'Accessible, component-driven interfaces aligned with UK GDS / WCAG 2.2 AA standards and strict sub-1.2s Core Web Vitals.',
    entries: [
      {
        name: 'React 19, Next.js & Vite',
        role: 'Modern App & Static Architecture',
        rationale:
          'Edge-ready bundles and crisp UI state transitions with zero layout shift.',
      },
      {
        name: 'WordPress Block Themes',
        role: 'Custom Gutenberg Engineering',
        rationale:
          'Gives UK marketing teams effortless page editing with locked brand typography.',
      },
      {
        name: 'Tailwind CSS v4 & Design Tokens',
        role: 'Utility Design Systems',
        rationale:
          'Minimal CSS payloads, strict contrast ratios, and consistent component kits.',
      },
      {
        name: 'Semantic HTML5 & WAI-ARIA',
        role: 'WCAG 2.2 AA Compliance',
        rationale:
          'Full keyboard navigation, screen-reader landmarks, and accessible form validation.',
      },
    ],
  },
  {
    id: 'ai-geo',
    label: 'AI, GEO & Search',
    summary:
      'Structured entity graphs and grounded AI engineering that make your business citable inside Google UK, ChatGPT, Gemini, and Claude.',
    entries: [
      {
        name: 'Schema.org JSON-LD Graphs',
        role: 'Entity & Offer Markup',
        rationale:
          'Links your UK locations, GBP pricing, FAQs, and services cleanly for rich results.',
      },
      {
        name: '/llms.txt & Crawler Control',
        role: 'AI Search Readiness',
        rationale:
          'Dedicated directives for OAI-SearchBot, Googlebot, PerplexityBot, and ClaudeBot.',
      },
      {
        name: 'Grounded RAG & Server Proxies',
        role: 'Zero-Hallucination AI Tools',
        rationale:
          'Private API keys on the backend grounded strictly in your verified UK documentation.',
      },
      {
        name: 'n8n, Make & Signed Webhooks',
        role: 'Business Process Automation',
        rationale:
          'Connects forms, HubSpot/CRM, Slack, and Xero with human approval checkpoints.',
      },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud, Edge & CI/CD',
    summary:
      'UK/EEA-compliant hosting topology, automated CI/CD checks, and isolated staging pipelines that eliminate launch downtime.',
    entries: [
      {
        name: 'Cloudflare Workers & Edge CDN',
        role: 'Global Edge & WAF Security',
        rationale:
          'Anycast routing across London & UK edge nodes with DDoS and bot protection.',
      },
      {
        name: 'GitHub Actions CI/CD',
        role: 'Automated Build & Lint Gates',
        rationale:
          'Every update is compiled, type-checked, and deployed cleanly without manual FTP risk.',
      },
      {
        name: '20i, Krystal UK & AWS London',
        role: 'UK Data Residency (eu-west-2)',
        rationale:
          'Low-latency British hosting paired with encrypted daily off-site UK/EEA backups.',
      },
      {
        name: 'Server 301 & DNS Governance',
        role: 'Zero-Downtime Transitions',
        rationale:
          'Preserves historical Google UK equity and Nominet .co.uk DNS records throughout the cut-over.',
      },
    ],
  },
  {
    id: 'commerce',
    label: 'Commerce & APIs',
    summary:
      'Commercial integrations built around British currency, VAT rules, courier APIs, and finance stacks.',
    entries: [
      {
        name: 'WooCommerce HPOS Architecture',
        role: 'High-Volume UK Retail',
        rationale:
          'Custom order tables, instant AJAX filtering, and stripped-down mobile checkout flows.',
      },
      {
        name: 'Stripe, Apple Pay & Klarna',
        role: 'SCA / 3D Secure Payments',
        rationale:
          'Fast one-tap mobile payments tuned for UK banking and Strong Customer Authentication.',
      },
      {
        name: 'Xero, QuickBooks UK & HubSpot',
        role: 'CRM & Finance Sync',
        rationale:
          'Two-way invoice, customer, and lead attribution sync with retry queues.',
      },
      {
        name: 'Royal Mail & DPD Shipping APIs',
        role: 'Postcode & Dispatch Rules',
        rationale:
          'Live UK postcode lookup, tracked courier tiers, and standard/zero-rated VAT logic.',
      },
    ],
  },
];

export const UK_SECTORS: UkSectorItem[] = [
  {
    index: '01.',
    sector: 'Private Healthcare & Clinics',
    standard: 'UK GDPR · Booking Portals · Local Schema',
    outcome:
      'High-trust clinic websites with compliant patient intake forms, Harley Street / regional SEO, and automated CRM appointment routing.',
  },
  {
    index: '02.',
    sector: 'UK Retail & WooCommerce',
    standard: 'GBP & UK VAT · Royal Mail/DPD · < 1.2s LCP',
    outcome:
      'Fast mobile checkouts using WooCommerce HPOS, Stripe/Apple Pay, and rich Product JSON-LD engineered to convert UK 4G/5G shoppers.',
  },
  {
    index: '03.',
    sector: 'B2B, Legal & Financial Advisory',
    standard: 'WCAG 2.2 AA · GEO Citations · Enquiry Triage',
    outcome:
      'Editorial authority sites structured for ChatGPT, Gemini, and Google UK visibility—capturing qualified commercial retainers directly.',
  },
  {
    index: '04.',
    sector: 'SaaS, Property & Multi-Site SMEs',
    standard: 'TypeScript APIs · Xero/HubSpot · Automation',
    outcome:
      'Custom client portals, interactive pricing calculators, and workflow automations that eliminate manual spreadsheet admin.',
  },
];

export const UK_COMPLIANCE_STANDARDS: ComplianceStandard[] = [
  {
    code: 'UK GDPR & PECR',
    title: 'UK / EEA Data Sovereignty',
    detail:
      'Encrypted UK/EEA backup residency, granular ICO consent controls, and zero model training on client enquiry data.',
  },
  {
    code: 'WCAG 2.2 Level AA',
    title: 'Accessible Interface Standard',
    detail:
      'Keyboard-navigable menus, tested contrast ratios, and clean semantic landmarks modelled on top UK digital standards.',
  },
  {
    code: 'OWASP Top-10 Hardening',
    title: 'Application & Edge Security',
    detail:
      'Strict server-side API keys, parameterised SQL queries, Cloudflare WAF rules, and 24/7 malware & downtime triage.',
  },
  {
    code: '< 1.2s Core Web Vitals',
    title: 'Verified Performance Budget',
    detail:
      'Pre-rendered HTML for instant first paint, automated CI checks, and 301 migration protection on every .co.uk launch.',
  },
];

export const SERVICE_PILLARS: AgencyServicePillar[] = [
  {
    id: 'web-engineering',
    index: '01.',
    category: 'web',
    featured: true,
    title: 'Web, E-commerce & Custom Engineering',
    summary:
      'High-speed bespoke websites, UK-compliant online stores, and tailored web software built for measurable conversions and effortless team management.',
    items: [
      {
        id: 'website-dev',
        name: 'Website Development',
        outcome:
          'Fast, accessible, UK GDPR–compliant business websites built with clean architecture and Core Web Vitals under 1.2s.',
      },
      {
        id: 'ecommerce-dev',
        name: 'E-commerce Website Development',
        outcome:
          'Conversion-focused WooCommerce and bespoke online stores configured for GBP, UK VAT rules, and Royal Mail / DPD shipping.',
      },
      {
        id: 'custom-integrations',
        name: 'Custom Web Solutions & Integrations',
        outcome:
          'Bespoke portals, booking engines, and seamless API connections with Xero, HubSpot, Stripe, and internal CRMs.',
      },
      {
        id: 'ai-powered-web',
        name: 'AI-Powered Website Development',
        outcome:
          'Intelligent site search, guided customer qualification tools, and dynamic personalisation engineered safely into your site.',
      },
    ],
  },
  {
    id: 'search-geo-ai',
    index: '02.',
    category: 'visibility',
    featured: true,
    title: 'SEO, GEO & AI Search Visibility',
    summary:
      'Position your UK brand where modern buyers actually search—across Google UK results as well as ChatGPT, Gemini, and Claude answers.',
    items: [
      {
        id: 'seo',
        name: 'Search Engine Optimisation (SEO)',
        outcome:
          'Technical site audits, UK local search authority, Schema.org markup, and 301 migration protection that drive qualified organic traffic.',
      },
      {
        id: 'geo',
        name: 'Generative Engine Optimisation (GEO)',
        outcome:
          'Entity-rich structured content, verified proof signals, and citation-ready architectures designed for generative search summaries.',
      },
      {
        id: 'ai-search',
        name: 'AI Search Optimisation (ChatGPT, Gemini & Claude)',
        outcome:
          'Dedicated llms.txt indexing, factual answer structuring, and authoritative UK brand signals so leading AI assistants recommend your business.',
      },
    ],
  },
  {
    id: 'ai-automation',
    index: '03.',
    category: 'automation',
    title: 'AI Automation & Business Operations',
    summary:
      'Eliminate repetitive manual admin by connecting your website forms, inbox, CRM, and reporting pipelines with reliable automation.',
    items: [
      {
        id: 'ai-business-automation',
        name: 'AI Automation & Business Process Automation',
        outcome:
          'Automated enquiry triage, CRM lead routing, invoice/proposal workflows, and UK GDPR–aligned AI assistants that save teams hours every week.',
      },
    ],
  },
  {
    id: 'brand-growth',
    index: '04.',
    category: 'brand',
    title: 'Branding & Digital Growth',
    summary:
      'Cohesive visual identity and data-backed acquisition campaigns that give UK clients immediate trust from the first click.',
    items: [
      {
        id: 'branding',
        name: 'Branding and Brand Identity',
        outcome:
          'Distinctive visual identity systems, typography, colour palettes, and digital brand guidelines built to stand out in competitive UK sectors.',
      },
      {
        id: 'digital-marketing',
        name: 'Digital Marketing and Online Growth',
        outcome:
          'Targeted landing funnels, conversion rate optimisation, and multi-channel growth campaigns tied directly to qualified UK enquiries.',
      },
    ],
  },
];

export const ALL_SERVICE_NAMES: string[] = SERVICE_PILLARS.flatMap((pillar) =>
  pillar.items.map((item) => item.name)
);

export const CARE_PLANS: CarePlan[] = [
  {
    id: 'essential',
    name: 'Essential Care',
    audience: 'For corporate brochure sites & UK SMEs',
    monthlyPriceGbp: 59,
    annualMonthlyGbp: 49,
    summary:
      'Dependable UK/EEA backups, tested updates, and continuous availability monitoring for business websites.',
    limits: [
      { label: 'Off-Site Backups', value: 'Daily (30-day retention)' },
      { label: 'Core & Plugin Governance', value: 'Weekly on UK staging' },
      { label: 'Availability Monitoring', value: '5-minute intervals' },
      { label: 'Senior Engineering Time', value: '1 hour / month included' },
      { label: 'Malware Remediation', value: 'Priority retainer rate' },
    ],
  },
  {
    id: 'growth',
    name: 'Growth & Speed',
    audience: 'For scaling British service firms',
    monthlyPriceGbp: 119,
    annualMonthlyGbp: 99,
    highlighted: true,
    summary:
      'Comprehensive performance engineering, unlimited priority malware remediation, and proactive monthly enhancements.',
    limits: [
      { label: 'Off-Site Backups', value: 'Twice daily (60-day retention)' },
      { label: 'Core & Plugin Governance', value: 'Weekly + visual QA check' },
      { label: 'Availability Monitoring', value: '1-minute intervals' },
      { label: 'Senior Engineering Time', value: '3 hours / month included' },
      { label: 'Malware Remediation', value: 'Included at zero surcharge' },
    ],
  },
  {
    id: 'scale',
    name: 'Scale & WooCommerce',
    audience: 'For high-volume UK stores & agencies',
    monthlyPriceGbp: 229,
    annualMonthlyGbp: 189,
    summary:
      'Hourly database snapshots, checkout telemetry monitoring, and contractual 30-minute SLA response for revenue-critical commerce.',
    limits: [
      { label: 'Off-Site Backups', value: 'Hourly DB + daily files (90 days)' },
      { label: 'Core & Plugin Governance', value: 'Bi-weekly + staging sign-off' },
      { label: 'Availability Monitoring', value: '30-second + checkout alerts' },
      { label: 'Senior Engineering Time', value: '6 hours / month included' },
      { label: 'Priority Incident SLA', value: 'Under 30 minutes response' },
    ],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'atelier-lumiere',
    client: 'Atelier Lumière UK',
    sector: 'Retail & WooCommerce',
    location: 'London',
    imageUrl: '/src/assets/images/case_study_commerce_1795213973520.jpg',
    imageAlt:
      'Minimalist laptop displaying Atelier Lumière WooCommerce storefront on a travertine desk',
    metricHeadline: '+138% Mobile Checkout Conversions in 4 Months',
    metricDetail: '1.1s mobile LCP down from 4.8s · £0 lost orders during migration',
    challenge:
      'Slow legacy page-builder templates caused 4.8-second mobile load times and frequent plugin conflicts during seasonal UK retail launches.',
    solution:
      'Rebuilt the storefront using lightweight bespoke blocks, streamlined WooCommerce checkout scripts, and configured edge caching plus structured GEO product data.',
    quote:
      'Before working with WPCarePoint, every update risked taking our checkout offline. Moving to their bespoke build cut load time under 1.2 seconds and lifted mobile sales within weeks.',
    authorName: 'Hannah Mercer',
    authorRole: 'Head of Digital, Atelier Lumière UK',
  },
  {
    id: 'cavendish-clinic',
    client: 'The Cavendish Clinic',
    sector: 'Private Healthcare',
    location: 'Harley Street, London',
    imageUrl: '/src/assets/images/case_study_healthcare_1795213974347.jpg',
    imageAlt:
      'Contemporary London private medical clinic reception desk with warm oak panelling',
    metricHeadline: '98 / 100 Mobile PageSpeed & Top AI Search Citations',
    metricDetail: 'Recovered in 4 hours · Automated CRM patient triage implemented',
    challenge:
      'A compromised plugin wiped out their live appointment pages overnight, while manual enquiry sorting delayed patient responses.',
    solution:
      'Engineered a clean rebuild with custom booking integration, strict 301 SEO preservation, UK FAQ Schema for AI search engines, and automated CRM enquiry routing.',
    quote:
      'WPCarePoint rebuilt our patient portal cleanly, automated our enquiry intake, and preserved every Google UK ranking we had spent five years earning.',
    authorName: 'Dr. Alistair Vance',
    authorRole: 'Managing Partner, The Cavendish Clinic',
  },
];

export const WORK_PROCESS = [
  {
    step: '01.',
    title: 'Technical, SEO & AI Discovery Audit',
    detail:
      'We inspect your commercial sector, DNS posture, Core Web Vitals, AI search visibility, and operational workflows to define a fixed-milestone roadmap.',
  },
  {
    step: '02.',
    title: 'Brand, UX & Staging Engineering',
    detail:
      'Visual systems, bespoke APIs, GEO/Schema architecture, and compliant AI automations are engineered and validated on an isolated UK staging server.',
  },
  {
    step: '03.',
    title: 'Zero-Downtime Release & Verification',
    detail:
      'We execute controlled DNS cut-over, validate SSL, 301 redirects, and CRM pipelines, and submit XML sitemaps and llms.txt to search and AI engines.',
  },
  {
    step: '04.',
    title: 'Managed Stewardship & Growth',
    detail:
      'Encrypted UK/EEA backups, continuous availability telemetry, and iterative SEO, GEO, and acquisition programmes sustain commercial momentum.',
  },
];

export const WORDPRESS_GUIDES: WordPressGuide[] = [
  {
    id: 'geo-ai-search-uk',
    topic: 'GEO & AI Search',
    readTime: '5 min read',
    publishedAt: 'November 2026',
    title: 'How British Organisations Earn Citations in ChatGPT, Gemini & Claude',
    excerpt:
      'Why legacy keyword repetition fails in generative search—and how entity schema, llms.txt, and structured commercial data earn authoritative AI citations.',
    sections: [
      {
        heading: 'From Ten Blue Links to Verified Entity Citations',
        body: 'AI answer engines synthesise supplier recommendations from structured entities rather than marketing slogans. Publishing transparent GBP fee structures, UK jurisdiction coverage, and verifiable outcomes enables ChatGPT, Gemini, and Claude to cite your practice accurately.',
      },
      {
        heading: 'Deploy Schema.org JSON-LD and /llms.txt',
        body: 'Pairing ProfessionalService and FAQPage JSON-LD with a curated /llms.txt index ensures crawlers such as OAI-SearchBot, PerplexityBot, and Googlebot parse your exact capabilities without ambiguity.',
      },
    ],
  },
  {
    id: 'ai-automation-uk-smes',
    topic: 'AI Automation',
    readTime: '6 min read',
    publishedAt: 'November 2026',
    title: 'Compliant AI Business Process Automation Under UK GDPR Governance',
    excerpt:
      'Unite website enquiries, quoting, CRM records, and client onboarding securely with zero external model training.',
    sections: [
      {
        heading: 'Target High-Friction Administrative Bottlenecks',
        body: 'The most dependable operational return comes from automating repetitive administration: classifying inbound enquiries, synchronising client records into Xero or HubSpot, and assembling structured scoping briefs.',
      },
      {
        heading: 'Preserve Human Governance and Data Sovereignty',
        body: 'Well-architected automations process commercial data exclusively across UK/EEA endpoints with immutable audit logs and mandatory partner sign-off prior to external dispatch.',
      },
    ],
  },
  {
    id: 'ecommerce-speed-core-web-vitals',
    topic: 'Web & E-commerce',
    readTime: '4 min read',
    publishedAt: 'October 2026',
    title: 'Achieving Sub-1.2s Largest Contentful Paint Across UK Retail Stores',
    excerpt:
      'Practical edge caching, relational database indexing, and payload discipline that materially raise mobile checkout conversion rates.',
    sections: [
      {
        heading: 'Eliminate Architectural Bloat Before Launch',
        body: 'Heavy visual builders and unindexed database queries degrade mobile checkouts across UK 4G and 5G networks. Lean bespoke Gutenberg themes paired with edge caching maintain near-instantaneous responsiveness.',
      },
      {
        heading: 'Safeguard Organic Equity With 301 Rules',
        body: 'Whenever replatforming a UK retail domain, map every historical product and category slug directly via server-level 301 redirects so organic commercial revenue remains undisturbed.',
      },
    ],
  },
];

export const UK_FAQS: UkFaqItem[] = [
  {
    id: 'uk-services-scope',
    question: 'Do you handle both custom web builds and AI / GEO growth under one team?',
    answer:
      'Yes. We design and engineer bespoke websites, e-commerce stores, and custom API integrations alongside SEO, Generative Engine Optimisation (GEO), AI Search Optimisation for ChatGPT, Gemini and Claude, and business process automation.',
  },
  {
    id: 'uk-hosts',
    question: 'Do you support UK hosting providers and Nominet .co.uk domains?',
    answer:
      'Yes. We manage DNS, SSL, and deployments across UK and European hosts including 20i, Krystal, SiteGround UK, Namecheap, Vercel, and Cloudflare, alongside Nominet .co.uk and .uk domain configurations.',
  },
  {
    id: 'uk-gdpr',
    question: 'Are your websites, AI integrations, and backups UK GDPR compliant?',
    answer:
      'Yes. We configure UK GDPR and PECR-aligned consent, encrypted UK/EEA backup storage, and privacy-safe AI workflows so customer and order data remain protected.',
  },
  {
    id: 'gbp-billing',
    question: 'Are care plans billed in GBP and do you require long-term contracts?',
    answer:
      'All care plans are billed transparently in GBP (£) on rolling monthly terms with zero lock-in contracts, or an optional annual plan with 17% savings. Custom builds, branding, and AI automation projects are quoted upfront with fixed milestones.',
  },
  {
    id: 'lost-site-rebuild',
    question: 'Can you rebuild a lost .co.uk website without losing Google UK rankings?',
    answer:
      'Yes. We audit indexed pages from Search Console and historical archives, preserve matching URL slugs, deploy server-level 301 redirects, and configure UK Schema.org markup and llms.txt.',
  },
];
