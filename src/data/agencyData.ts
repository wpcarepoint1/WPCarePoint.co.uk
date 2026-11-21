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

export const HERO_STUDIO_IMAGE =
  '/src/assets/images/hero_agency_studio_1795213974094.jpg';
export const SERVICE_ENGINEERING_IMAGE =
  '/src/assets/images/service_speed_engineering_1795213974447.jpg';

export const UK_OFFICE_ADDRESS =
  'Robert Denholm House, Bletchingley Road, Nutfield RH1 4HW';

export const UK_REGIONS_SERVED = [
  'Surrey & London',
  'Manchester',
  'Birmingham',
  'Edinburgh',
  'Bristol',
  'Leeds',
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
    audience: 'For brochure sites & UK small businesses',
    monthlyPriceGbp: 59,
    annualMonthlyGbp: 49,
    summary:
      'Reliable UK/EEA backups, tested updates, and continuous uptime protection for standard business websites.',
    limits: [
      { label: 'Off-Site Backups', value: 'Daily (30-day retention)' },
      { label: 'Core & Plugin Updates', value: 'Weekly on staging' },
      { label: 'Uptime Monitoring', value: '5-minute intervals' },
      { label: 'Developer Support', value: '1 hour / month included' },
      { label: 'Malware Cleanup', value: 'Priority discounted rate' },
    ],
  },
  {
    id: 'growth',
    name: 'Growth & Speed',
    audience: 'For scaling UK service companies',
    monthlyPriceGbp: 119,
    annualMonthlyGbp: 99,
    highlighted: true,
    summary:
      'Full performance engineering, unlimited emergency malware cleanup, and proactive monthly enhancements.',
    limits: [
      { label: 'Off-Site Backups', value: 'Twice daily (60-day retention)' },
      { label: 'Core & Plugin Updates', value: 'Weekly + visual check' },
      { label: 'Uptime Monitoring', value: '1-minute intervals' },
      { label: 'Developer Support', value: '3 hours / month included' },
      { label: 'Malware Cleanup', value: 'Included at zero extra cost' },
    ],
  },
  {
    id: 'scale',
    name: 'Scale & WooCommerce',
    audience: 'For high-traffic UK stores & agencies',
    monthlyPriceGbp: 229,
    annualMonthlyGbp: 189,
    summary:
      'Hourly database snapshots, checkout flow monitoring, and rapid 30-minute SLA response for revenue-critical stores.',
    limits: [
      { label: 'Off-Site Backups', value: 'Hourly DB + daily files (90 days)' },
      { label: 'Core & Plugin Updates', value: 'Bi-weekly + staging sign-off' },
      { label: 'Uptime Monitoring', value: '30-second + checkout alerts' },
      { label: 'Developer Support', value: '6 hours / month included' },
      { label: 'Emergency SLA', value: 'Under 30 minutes response' },
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
    title: 'Discovery, SEO & AI Audit',
    detail:
      'We inspect your market, DNS, Core Web Vitals, AI search visibility, and manual workflows to map the highest-impact technical roadmap.',
  },
  {
    step: '02.',
    title: 'Brand, UX & Staging Engineering',
    detail:
      'Design, custom integrations, GEO/Schema architecture, and AI automations are built and tested on an isolated UK staging environment.',
  },
  {
    step: '03.',
    title: 'Zero-Downtime Launch & Verification',
    detail:
      'We switch DNS cleanly, verify SSL, 301 redirects, and CRM automations, and submit XML sitemaps and llms.txt to search and AI engines.',
  },
  {
    step: '04.',
    title: 'Care Plans & Continuous Growth',
    detail:
      'Ongoing UK/EEA backups, speed monitoring, and iterative SEO, GEO, and digital growth campaigns keep momentum compounding.',
  },
];

export const WORDPRESS_GUIDES: WordPressGuide[] = [
  {
    id: 'geo-ai-search-uk',
    topic: 'GEO & AI Search',
    readTime: '5 min read',
    publishedAt: 'November 2026',
    title: 'How UK Businesses Rank Inside ChatGPT, Gemini & Claude Answers',
    excerpt:
      'Why traditional keyword stuffing fails in generative search—and how entity schema, llms.txt, and direct factual copy earn AI citations.',
    sections: [
      {
        heading: 'From Ten Blue Links to Direct Entity Citations',
        body: 'AI answer engines synthesise recommendations from structured entities rather than vague marketing slogans. Publishing clear GBP pricing, UK service coverage, and verifiable case-study outcomes helps ChatGPT, Gemini, and Claude cite your brand accurately.',
      },
      {
        heading: 'Deploy Schema.org JSON-LD and /llms.txt',
        body: 'Pairing ProfessionalService and FAQPage JSON-LD with a clean /llms.txt summary ensures crawlers like OAI-SearchBot, PerplexityBot, and Googlebot read your exact capabilities without guessing.',
      },
    ],
  },
  {
    id: 'ai-automation-uk-smes',
    topic: 'AI Automation',
    readTime: '6 min read',
    publishedAt: 'November 2026',
    title: 'Practical AI Business Process Automation Without Replacing Your Team',
    excerpt:
      'Connect website enquiries, quoting, CRM updates, and client onboarding securely under UK GDPR rules.',
    sections: [
      {
        heading: 'Start With High-Friction Admin Bottlenecks',
        body: 'The fastest ROI comes from automating repetitive tasks: classifying incoming website enquiries, syncing customer records into Xero or HubSpot, and generating structured project briefs.',
      },
      {
        heading: 'Keep Human Sign-Off and UK Data Hygiene',
        body: 'Well-engineered automations route sensitive customer data through UK/EEA endpoints with clear audit logs and human approval before external emails are sent.',
      },
    ],
  },
  {
    id: 'ecommerce-speed-core-web-vitals',
    topic: 'Web & E-commerce',
    readTime: '4 min read',
    publishedAt: 'October 2026',
    title: 'Hitting Under 1.2s Largest Contentful Paint on UK E-commerce Sites',
    excerpt:
      'Practical server caching, database tuning, and asset discipline that lift mobile checkout conversion rates across the UK.',
    sections: [
      {
        heading: 'Trim Bloat Before Adding Plugins',
        body: 'Heavy page builders and unindexed database queries slow mobile checkouts on UK 4G connections. Custom lightweight themes paired with server caching keep time-to-interactive crisp.',
      },
      {
        heading: 'Protect Rankings With 301 Redirects',
        body: 'Whenever redesigning or migrating a UK store, map every historical URL slug directly with server-level 301 rules so organic revenue never dips.',
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
