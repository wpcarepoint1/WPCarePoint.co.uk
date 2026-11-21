export interface ServiceLandingDetail {
  id: string;
  slug: string;
  name: string;
  pillarTitle: string;
  pillarCategory: 'web' | 'visibility' | 'automation' | 'brand';
  heroHeadline: string;
  heroSummary: string;
  startingPriceGbp: string;
  typicalTimeline: string;
  ukStandard: string;
  buildStack: string[];
  idealFor: string[];
  deliverables: Array<{ title: string; detail: string }>;
  processSteps: Array<{ step: string; title: string; detail: string }>;
  faqs: Array<{ question: string; answer: string }>;
  relatedSlugs: string[];
}

export const SERVICE_LANDING_PAGES: ServiceLandingDetail[] = [
  {
    id: 'website-dev',
    slug: 'website-development',
    name: 'Website Development',
    pillarTitle: '01. Web, E-commerce & Custom Engineering',
    pillarCategory: 'web',
    heroHeadline: 'Bespoke UK website development built for speed, clarity, and enquiries.',
    heroSummary:
      'We design and engineer fast, accessible WordPress and modern web applications tailored to UK buyers—eliminating slow page builders and fragile plugin bloat.',
    startingPriceGbp: 'From £1,450',
    typicalTimeline: '2 – 4 weeks',
    ukStandard: 'UK GDPR · WCAG AA · < 1.2s LCP',
    buildStack: ['TypeScript', 'React / Next.js', 'PHP 8.4', 'WordPress Gutenberg', 'Tailwind CSS', 'Cloudflare CDN'],
    idealFor: [
      'UK service businesses replacing an outdated or slow website',
      'Companies rebuilding a lost or broken .co.uk site from scratch',
      'Teams needing clean editing control without developer dependency',
      'Organisations requiring strict Core Web Vitals and accessibility compliance',
    ],
    deliverables: [
      {
        title: 'Custom Block Architecture',
        detail:
          'Lightweight semantic markup with reusable page sections instead of heavy third-party page builders.',
      },
      {
        title: 'Mobile-First Responsive Layouts',
        detail:
          'Tested across iOS, Android, and desktop viewports for crisp readability on UK 4G/5G networks.',
      },
      {
        title: 'UK GDPR & PECR Compliance',
        detail:
          'Privacy-compliant enquiry forms, granular cookie consent, and clean data handling.',
      },
      {
        title: 'Technical SEO & 301 Protection',
        detail:
          'Schema.org JSON-LD, XML sitemaps, and server-level 301 redirects to protect existing rankings.',
      },
      {
        title: 'Automated Off-Site Backups',
        detail:
          'Daily encrypted UK/EEA cloud backups and staging setup configured prior to launch.',
      },
    ],
    processSteps: [
      {
        step: '01.',
        title: 'Architecture & Wireframes',
        detail:
          'We map your UK buyer journey, page hierarchy, and URL structure before visual design begins.',
      },
      {
        step: '02.',
        title: 'Staging Build & Speed Tuning',
        detail:
          'Clean code is built on an isolated UK staging server and tuned under 1.2s Largest Contentful Paint.',
      },
      {
        step: '03.',
        title: 'Zero-Downtime Release',
        detail:
          'Controlled DNS cut-over, SSL verification, Search Console submission, and executive team training.',
      },
    ],
    faqs: [
      {
        question: 'Which platforms do you build websites on?',
        answer:
          'We build primarily on lightweight WordPress (custom Gutenberg block themes) as well as modern React/TypeScript and Astro/Next.js stacks depending on your team’s editing workflow.',
      },
      {
        question: 'Can you match or improve our existing .co.uk URL structure?',
        answer:
          'Yes. We audit all indexed Google UK pages first and preserve matching slugs or deploy 301 redirects so you never lose organic traffic.',
      },
      {
        question: 'Do we own 100% of our code, domain, and content?',
        answer:
          'Yes. Everything is deployed under your own UK registrar and hosting accounts with full ownership and zero proprietary lock-in.',
      },
    ],
    relatedSlugs: [
      'ecommerce-website-development',
      'search-engine-optimisation',
      'branding-brand-identity',
    ],
  },
  {
    id: 'ecommerce-dev',
    slug: 'ecommerce-website-development',
    name: 'E-commerce Website Development',
    pillarTitle: '01. Web, E-commerce & Custom Engineering',
    pillarCategory: 'web',
    heroHeadline: 'High-converting UK e-commerce stores engineered for fast mobile checkouts.',
    heroSummary:
      'From bespoke WooCommerce builds to custom retail storefronts configured for GBP (£), UK VAT rules, Stripe/Apple Pay, and Royal Mail or DPD fulfilment.',
    startingPriceGbp: 'From £2,400',
    typicalTimeline: '3 – 6 weeks',
    ukStandard: 'GBP & UK VAT · PCI-DSS · < 1.2s LCP',
    buildStack: ['WooCommerce HPOS', 'PHP 8.4', 'TypeScript', 'MySQL 8', 'Stripe / Apple Pay', 'Royal Mail / DPD API'],
    idealFor: [
      'UK retail brands outgrowing slow, template-heavy WooCommerce stores',
      'B2B and wholesale suppliers needing trade pricing or VAT invoicing',
      'Merchants migrating from legacy platforms without losing product URLs',
      'Stores looking to reduce checkout abandonment on mobile devices',
    ],
    deliverables: [
      {
        title: 'Streamlined UK Checkout Flow',
        detail:
          'Postcode lookup support, Apple Pay / Google Pay / Stripe integration, and minimal checkout friction.',
      },
      {
        title: 'UK VAT & Courier Rules',
        detail:
          'Standard/zero-rated UK VAT calculation and automated Royal Mail, DPD, or DHL shipping zones.',
      },
      {
        title: 'Product Schema & Merchant Feeds',
        detail:
          'Clean Product JSON-LD markup for Google Shopping, AI search engines, and rich price snippets.',
      },
      {
        title: 'Database & Cart Speed Tuning',
        detail:
          'Fragment caching optimisation and database indexing so high-traffic product filtering stays instant.',
      },
      {
        title: 'Accounting & Inventory Sync',
        detail:
          'Optional real-time sync with Xero, QuickBooks UK, or warehouse stock systems.',
      },
    ],
    processSteps: [
      {
        step: '01.',
        title: 'Catalogue & Checkout Audit',
        detail:
          'We map product attributes, shipping tiers, VAT requirements, and historical order migration.',
      },
      {
        step: '02.',
        title: 'Storefront & Payment Integration',
        detail:
          'Custom product templates, cart drawer, and sandbox-tested UK payment gateways.',
      },
      {
        step: '03.',
        title: 'Order Flow QA & Go-Live',
        detail:
          'End-to-end test purchases, transactional email verification, and live launch monitoring.',
      },
    ],
    faqs: [
      {
        question: 'Can you migrate our existing orders, customers, and product URLs?',
        answer:
          'Yes. We migrate customer accounts, order history, and product slugs cleanly with zero downtime and verified 301 redirects.',
      },
      {
        question: 'Which UK payment gateways do you integrate?',
        answer:
          'We support Stripe, PayPal Commerce, Klarna, Apple Pay, Google Pay, and GoCardless Direct Debit.',
      },
      {
        question: 'How do you keep WooCommerce fast as our catalogue grows?',
        answer:
          'We enable High-Performance Order Storage (HPOS), tune MySQL indexes, eliminate heavy cart-fragment scripts, and configure edge caching.',
      },
    ],
    relatedSlugs: [
      'website-development',
      'custom-web-solutions-integrations',
      'digital-marketing-online-growth',
    ],
  },
  {
    id: 'custom-integrations',
    slug: 'custom-web-solutions-integrations',
    name: 'Custom Web Solutions and Integrations',
    pillarTitle: '01. Web, E-commerce & Custom Engineering',
    pillarCategory: 'web',
    heroHeadline: 'Bespoke web applications, client portals, and clean API integrations.',
    heroSummary:
      'When off-the-shelf plugins fall short, we engineer tailored dashboards, booking workflows, and reliable two-way integrations with Xero, HubSpot, Stripe, and internal databases.',
    startingPriceGbp: 'From £1,800',
    typicalTimeline: '2 – 6 weeks',
    ukStandard: 'REST / GraphQL · UK GDPR · TypeScript / PHP',
    buildStack: ['TypeScript 5', 'Node.js / FastAPI', 'PostgreSQL', 'PHP 8.4', 'Xero & HubSpot API', 'GitHub Actions CI'],
    idealFor: [
      'Businesses stitching together spreadsheets and disconnected SaaS tools',
      'Agencies or clinics needing custom booking, quote, or client portals',
      'Companies requiring secure two-way sync between their site and CRM/ERP',
      'Teams replacing brittle, unmaintained custom plugins',
    ],
    deliverables: [
      {
        title: 'Bespoke API Middleware & Webhooks',
        detail:
          'Resilient, rate-limit-aware connectors with retry queues and clean error logging.',
      },
      {
        title: 'Client & Member Portals',
        detail:
          'Role-based authenticated portals for document sharing, invoicing, and project tracking.',
      },
      {
        title: 'Interactive Calculators & Quote Engines',
        detail:
          'Custom pricing configurators and multi-step qualification tools tailored to your UK services.',
      },
      {
        title: 'CRM & Accounting Synchronisation',
        detail:
          'Direct integration with HubSpot, Pipedrive, Salesforce, Xero, and Calendly.',
      },
      {
        title: 'Security & Penetration Hardening',
        detail:
          'Input validation, parameterised queries, and least-privilege API key storage.',
      },
    ],
    processSteps: [
      {
        step: '01.',
        title: 'Systems & Data Mapping',
        detail:
          'We document data schemas, authentication boundaries, and failure edge cases across every tool.',
      },
      {
        step: '02.',
        title: 'Modular Engineering & Tests',
        detail:
          'Clean TypeScript or PHP modules built and tested against sandbox APIs.',
      },
      {
        step: '03.',
        title: 'Monitored Deployment',
        detail:
          'Rollout with automated health checks, documentation, and team walkthrough.',
      },
    ],
    faqs: [
      {
        question: 'Can you integrate custom software with our existing WordPress site?',
        answer:
          'Yes. We build clean custom plugins or headless API services that communicate securely with WordPress without slowing down front-end pages.',
      },
      {
        question: 'What happens if a third-party API goes down temporarily?',
        answer:
          'We design integrations with idempotent queues and retry logic so enquiries or order updates are never silently dropped.',
      },
      {
        question: 'Do you provide technical documentation after launch?',
        answer:
          'Yes. Every custom integration includes clear architecture notes, environment setup docs, and handover support.',
      },
    ],
    relatedSlugs: [
      'ai-automation-business-process-automation',
      'ai-powered-website-development',
      'website-development',
    ],
  },
  {
    id: 'ai-powered-web',
    slug: 'ai-powered-website-development',
    name: 'AI-Powered Website Development',
    pillarTitle: '01. Web, E-commerce & Custom Engineering',
    pillarCategory: 'web',
    heroHeadline: 'Bespoke AI-powered website capabilities that qualify commercial demand.',
    heroSummary:
      'Move beyond generic dialogue widgets. We engineer grounded knowledge search, interactive diagnostics, and structured quotation tools that genuinely serve UK decision-makers.',
    startingPriceGbp: 'From £1,950',
    typicalTimeline: '2 – 5 weeks',
    ukStandard: 'Grounded Data · UK GDPR Safe · Server-Side Keys',
    buildStack: ['TypeScript', 'Python FastAPI', 'Gemini / OpenAI API', 'React 19', 'PostgreSQL pgvector', 'Server-Side Proxy'],
    idealFor: [
      'Service firms with complex offerings wanting guided visitor recommendations',
      'Content-rich sites needing semantic natural-language search',
      'E-commerce brands offering tailored product-fit or sizing assistants',
      'Teams wanting AI capabilities without exposing API keys or risking hallucinations',
    ],
    deliverables: [
      {
        title: 'Grounded Knowledge Search',
        detail:
          'Search and Q&A assistants grounded strictly in your verified services, pricing, and documentation.',
      },
      {
        title: 'Interactive Qualification & Scoping Tools',
        detail:
          'Smart calculators and diagnostic flows that turn casual visitors into detailed, structured enquiries.',
      },
      {
        title: 'Server-Side API Architecture',
        detail:
          'Secure backend proxies keeping credentials private with rate limiting and cost caps.',
      },
      {
        title: 'UK GDPR Data Controls',
        detail:
          'Zero-retention or EU/UK-compliant processing with clear user disclosure.',
      },
      {
        title: 'Fast Non-Blocking UX',
        detail:
          'Progressive loading so AI features never slow down Core Web Vitals or initial page paint.',
      },
    ],
    processSteps: [
      {
        step: '01.',
        title: 'Use-Case & ROI Selection',
        detail:
          'We pinpoint where AI genuinely reduces friction for your buyers instead of adding gimmick widgets.',
      },
      {
        step: '02.',
        title: 'Grounded Prompt & Guardrail Build',
        detail:
          'Strict structured outputs, factual grounding on your catalogue, and fallback handling.',
      },
      {
        step: '03.',
        title: 'Conversion & Cost Monitoring',
        detail:
          'Live launch with latency checks, usage caps, and enquiry quality tracking.',
      },
    ],
    faqs: [
      {
        question: 'Will AI features slow down our website or hurt Google SEO?',
        answer:
          'No. Core page content remains static or server-rendered HTML, while interactive AI endpoints load asynchronously only on user action.',
      },
      {
        question: 'How do you prevent the AI from inventing wrong prices or services?',
        answer:
          'We ground responses strictly against your verified structured data and restrict outputs with deterministic validation.',
      },
      {
        question: 'Are API keys kept safe?',
        answer:
          'Yes. All model calls execute strictly through server-side routes—keys are never exposed in browser JavaScript.',
      },
    ],
    relatedSlugs: [
      'ai-automation-business-process-automation',
      'ai-search-optimisation',
      'custom-web-solutions-integrations',
    ],
  },
  {
    id: 'branding',
    slug: 'branding-brand-identity',
    name: 'Branding and Brand Identity',
    pillarTitle: '04. Branding & Digital Growth',
    pillarCategory: 'brand',
    heroHeadline: 'Distinctive brand identity systems built to earn trust in the UK market.',
    heroSummary:
      'We craft cohesive visual identities, typography systems, colour palettes, and digital brand guidelines that make UK businesses look established, credible, and memorable.',
    startingPriceGbp: 'From £950',
    typicalTimeline: '2 – 3 weeks',
    ukStandard: 'Vector Assets · WCAG Contrast · Brand Guidelines',
    buildStack: ['Figma Design System', 'SVG Vector Suite', 'Tailwind Tokens', 'WCAG AA Contrast', 'OpenGraph Cards'],
    idealFor: [
      'Ambitious UK start-ups and consultancies establishing a flagship digital presence',
      'Established organisations commissioning a rebrand following growth or acquisition',
      'Firms whose visual identity lacks consistency across web, print, and investor materials',
      'Product teams requiring tokenised design systems ready for engineering',
    ],
    deliverables: [
      {
        title: 'Primary & Secondary Logo Suite',
        detail:
          'Precision SVG, PNG, and print-ready vector marks engineered for light and dark backgrounds.',
      },
      {
        title: 'Typography & Colour System',
        detail:
          'Licensed font pairings and WCAG AA-verified colour palettes tailored to your UK sector.',
      },
      {
        title: 'Digital Brand Guidelines',
        detail:
          'Comprehensive governance documentation covering spacing, editorial tone, photography, and iconography.',
      },
      {
        title: 'Social & Proposal Templates',
        detail:
          'Cohesive OpenGraph share cards, LinkedIn banners, and executive tender assets.',
      },
      {
        title: 'Direct Engineering Integration',
        detail:
          'Brand tokens delivered ready for immediate Tailwind CSS or custom WordPress implementation.',
      },
    ],
    processSteps: [
      {
        step: '01.',
        title: 'Positioning & Peer Benchmarking',
        detail:
          'We audit comparable UK sector leaders to ensure your identity commands clear differentiation.',
      },
      {
        step: '02.',
        title: 'Concept Direction & Refinement',
        detail:
          'Disciplined identity routes refined around typographic authority, restraint, and legibility.',
      },
      {
        step: '03.',
        title: 'Complete Identity Suite Handover',
        detail:
          'Full vector, web token, and governance documentation prepared for deployment.',
      },
    ],
    faqs: [
      {
        question: 'Can you commission our brand refresh alongside the website engineering?',
        answer:
          'Yes—integrating Branding and Website Development under one studio eliminates hand-off friction and compresses time to launch by 2–3 weeks.',
      },
      {
        question: 'What file formats do we receive?',
        answer:
          'You receive editable SVG, EPS/PDF print vectors, web-optimised favicons, social assets, and a digital style guide.',
      },
      {
        question: 'Do you test colours for accessibility?',
        answer:
          'Yes. Every text and button colour combination is verified against WCAG AA contrast ratios.',
      },
    ],
    relatedSlugs: [
      'website-development',
      'digital-marketing-online-growth',
      'ecommerce-website-development',
    ],
  },
  {
    id: 'seo',
    slug: 'search-engine-optimisation',
    name: 'Search Engine Optimisation (SEO)',
    pillarTitle: '02. SEO, GEO & AI Search Visibility',
    pillarCategory: 'visibility',
    heroHeadline: 'Technical & regional UK SEO engineered to compound qualified organic pipeline.',
    heroSummary:
      'Without vanity metrics or artificial link schemes. We resolve crawl architecture, Core Web Vitals, UK regional signals, and high-intent commercial pages.',
    startingPriceGbp: 'From £650 / mo',
    typicalTimeline: 'Ongoing · 30-day audit sprint',
    ukStandard: 'Google UK · Core Web Vitals · Schema.org',
    buildStack: ['Schema.org JSON-LD', 'Google Search Console', 'Core Web Vitals', 'Server 301 Rules', 'XML Sitemaps', 'hreflang en-GB'],
    idealFor: [
      'UK organisations recovering search equity after a disrupted .co.uk migration',
      'Practices competing across London, Manchester, Birmingham, or nationwide UK terms',
      'E-commerce catalogues suffering from unindexed categories or duplicate URLs',
      'Leadership teams requiring commercially accountable reporting over vanity traffic',
    ],
    deliverables: [
      {
        title: 'Comprehensive Technical & Crawl Audit',
        detail:
          'Resolving 404 errors, redirect chains, canonical conflicts, XML sitemaps, and index bloat.',
      },
      {
        title: 'UK Regional & Jurisdiction Architecture',
        detail:
          'en-GB hreflang, LocalBusiness JSON-LD, and regional landing pages engineered without doorway spam.',
      },
      {
        title: 'Commercial Intent Page Mapping',
        detail:
          'Aligning high-value UK search terms directly with dedicated practice and specification pages.',
      },
      {
        title: 'Core Web Vitals Engineering',
        detail:
          'Direct engineering fixes for LCP, INP, and CLS rather than delegating a theoretical checklist.',
      },
      {
        title: 'Executive Outcome Reporting',
        detail:
          'Transparent monthly attribution covering UK organic visibility, rankings, and qualified enquiries.',
      },
    ],
    processSteps: [
      {
        step: '01.',
        title: 'Technical & Search Console Audit',
        detail:
          'Identify indexing blockers, keyword cannibalisation, and high-impact UK ranking gains.',
      },
      {
        step: '02.',
        title: 'On-Page & Schema Deployment',
        detail:
          'Our engineers directly deploy semantic headings, internal linking, 301 maps, and JSON-LD.',
      },
      {
        step: '03.',
        title: 'Authority & Briefing Expansion',
        detail:
          'Iterative expansion of commercial UK practice guides paired with conversion attribution.',
      },
    ],
    faqs: [
      {
        question: 'Can you recover rankings if we lost our previous .co.uk website?',
        answer:
          'Yes. We inspect Google Search Console and archival snapshots to restore high-performing slugs and deploy server-level 301 redirects.',
      },
      {
        question: 'Do you implement technical fixes in-house?',
        answer:
          'Yes. Unlike advisory-only SEO agencies, our senior engineers deploy Schema markup, speed tuning, and server redirect rules directly.',
      },
      {
        question: 'What timeframe is realistic for measurable UK SEO progress?',
        answer:
          'Technical crawl and latency gains typically register within 2–4 weeks, whilst competitive commercial keyword authority compounds over 3–6 months.',
      },
    ],
    relatedSlugs: [
      'generative-engine-optimisation',
      'ai-search-optimisation',
      'website-development',
    ],
  },
  {
    id: 'geo',
    slug: 'generative-engine-optimisation',
    name: 'Generative Engine Optimisation (GEO)',
    pillarTitle: '02. SEO, GEO & AI Search Visibility',
    pillarCategory: 'visibility',
    heroHeadline: 'Generative Engine Optimisation (GEO) for Google AI Overviews & answer engines.',
    heroSummary:
      'Search behaviour has shifted from links to synthesised answers. We structure your UK services, pricing, entities, and proof signals so generative search engines cite your brand first.',
    startingPriceGbp: 'From £750 / mo',
    typicalTimeline: '2 – 4 week initial sprint',
    ukStandard: 'Entity Graph · JSON-LD · Citation-Ready Copy',
    buildStack: ['Entity JSON-LD', 'Semantic HTML5', 'Pre-Rendered SSR', 'FAQPage Schema', 'OfferCatalog', 'Citation Benchmarking'],
    idealFor: [
      'UK B2B and professional service brands losing clicks to Google AI Overviews',
      'Agencies and SaaS teams wanting authoritative entity recognition',
      'Businesses launching new websites that need day-one AI-ready architecture',
      'Brands with strong real-world results hidden inside unstructured prose',
    ],
    deliverables: [
      {
        title: 'Entity & Knowledge Graph Markup',
        detail:
          'Nested ProfessionalService, OfferCatalog, and FAQPage JSON-LD explicitly linking your brand, UK regions, and services.',
      },
      {
        title: 'Answer-First Content Structuring',
        detail:
          'Clear Q&A sections, comparison tables, and verifiable GBP metrics designed for zero-ambiguity extraction.',
      },
      {
        title: 'Server-Rendered / Pre-Rendered HTML',
        detail:
          'Ensuring zero reliance on client-side JavaScript for core copy so every generative crawler reads 100% of your page.',
      },
      {
        title: 'Proof-to-Claim Adjacency',
        detail:
          'Pairing every service claim with concrete UK case studies, timelines, and transparent pricing.',
      },
      {
        title: 'GEO Citation Benchmarking',
        detail:
          'Tracking how your brand is described and cited across generative UK buying prompts.',
      },
    ],
    processSteps: [
      {
        step: '01.',
        title: 'Entity & Prompt Visibility Audit',
        detail:
          'Test how generative engines currently answer buyer queries in your UK niche.',
      },
      {
        step: '02.',
        title: 'Schema & Copy Restructuring',
        detail:
          'Rebuild service pages with clean HTML semantics, FAQ Schema, and factual proof blocks.',
      },
      {
        step: '03.',
        title: 'Multi-Engine Verification',
        detail:
          'Verify clean crawler access and monitor share-of-citation growth month over month.',
      },
    ],
    faqs: [
      {
        question: 'How is GEO different from traditional SEO?',
        answer:
          'Traditional SEO focuses on ranking URLs in 10 blue links; GEO structures facts, entities, and Schema so generative AI engines accurately quote and recommend your company inside synthesised answers.',
      },
      {
        question: 'Does GEO also help regular Google rankings?',
        answer:
          'Yes—clean semantic HTML, fast page loads, and clear FAQ structures directly strengthen Google Search Console performance too.',
      },
      {
        question: 'Why does pre-rendered HTML matter for GEO?',
        answer:
          'Many generative crawlers do not execute heavy client-side JavaScript; serving clean HTML guarantees your services and pricing are always indexed.',
      },
    ],
    relatedSlugs: [
      'ai-search-optimisation',
      'search-engine-optimisation',
      'website-development',
    ],
  },
  {
    id: 'ai-search',
    slug: 'ai-search-optimisation',
    name: 'AI Search Optimisation for ChatGPT, Gemini and Claude',
    pillarTitle: '02. SEO, GEO & AI Search Visibility',
    pillarCategory: 'visibility',
    heroHeadline: 'Get recommended by ChatGPT, Google Gemini, and Claude for UK buyer queries.',
    heroSummary:
      'When UK decision-makers ask ChatGPT, Gemini, or Claude "who is the best provider for...", your technical footprint determines whether you are cited—or invisible.',
    startingPriceGbp: 'From £750',
    typicalTimeline: '2 – 3 weeks setup',
    ukStandard: '/llms.txt · OAI-SearchBot · ClaudeBot · Gemini',
    buildStack: ['/llms.txt Standard', 'robots.txt AI Rules', 'OAI-SearchBot', 'ClaudeBot & Gemini', 'Canonical Routing', 'Prompt QA'],
    idealFor: [
      'UK firms wanting inbound leads from ChatGPT Search, Perplexity, and Gemini',
      'Companies whose brand is currently omitted or misdescribed by AI assistants',
      'High-ticket consultancies, clinics, and agencies selling on expertise',
      'Businesses wanting transparent crawler governance via robots.txt and llms.txt',
    ],
    deliverables: [
      {
        title: 'Curated /llms.txt & Machine Summary',
        detail:
          'Authoritative Markdown index at your root domain summarising services, UK regions, GBP pricing, and canonical URLs.',
      },
      {
        title: 'AI Crawler Governance (robots.txt)',
        detail:
          'Clean allow rules for OAI-SearchBot, Googlebot, PerplexityBot, and ClaudeBot alongside XML sitemaps.',
      },
      {
        title: 'Cross-Web Entity Consistency',
        detail:
          'Aligning brand facts across your website, LinkedIn, Companies House profile, and reputable UK directories.',
      },
      {
        title: 'Dedicated Service & Pricing Pages',
        detail:
          'Individual canonical URLs per service so AI assistants can deep-link directly to the right solution.',
      },
      {
        title: 'Prompt Accuracy Testing',
        detail:
          'Before-and-after testing across commercial UK prompts in ChatGPT, Gemini, and Claude.',
      },
    ],
    processSteps: [
      {
        step: '01.',
        title: 'AI Citation Baseline Check',
        detail:
          'Audit current brand mentions and competitor citations across ChatGPT, Gemini, and Claude.',
      },
      {
        step: '02.',
        title: 'llms.txt, Schema & Dedicated Pages',
        detail:
          'Publish machine-readable service specs and canonical landing pages.',
      },
      {
        step: '03.',
        title: 'Re-Test & Authority Building',
        detail:
          'Verify crawler indexing and expand factual UK guides that earn ongoing citations.',
      },
    ],
    faqs: [
      {
        question: 'What is /llms.txt and why does it matter?',
        answer:
          '/llms.txt is a structured plain-text Markdown file at your domain root that gives AI assistants a clean, unambiguous summary of your UK business, services, and pricing.',
      },
      {
        question: 'Can you block AI training while still appearing in AI search?',
        answer:
          'Yes. We can configure robots.txt to distinguish search-citation bots (like OAI-SearchBot) from training crawlers according to your preference.',
      },
      {
        question: 'Why create dedicated landing pages for each service?',
        answer:
          'AI search engines prefer linking to specific, focused pages that thoroughly answer one topic rather than a crowded single-page brochure.',
      },
    ],
    relatedSlugs: [
      'generative-engine-optimisation',
      'search-engine-optimisation',
      'digital-marketing-online-growth',
    ],
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing-online-growth',
    name: 'Digital Marketing and Online Growth',
    pillarTitle: '04. Branding & Digital Growth',
    pillarCategory: 'brand',
    heroHeadline: 'Commercially accountable digital growth focused on UK pipeline.',
    heroSummary:
      'We pair high-velocity landing architecture with targeted search and conversion optimisation so every pound invested delivers trackable UK pipeline.',
    startingPriceGbp: 'From £700 / mo',
    typicalTimeline: 'Monthly growth sprints',
    ukStandard: 'UK GDPR Tracking · GA4 · Conversion Focus',
    buildStack: ['React Landing Funnels', 'GA4 Consent Mode', 'UK PECR Compliance', 'CRM Attribution', 'A/B Speed Tests'],
    idealFor: [
      'UK organisations launching a flagship platform requiring immediate commercial pipeline',
      'Practices generating traffic that underperforms on consultation bookings',
      'B2B and regional firms expanding across London, Manchester, Edinburgh, or UK-wide',
      'Retailers seeking higher average order value and repeat client retention',
    ],
    deliverables: [
      {
        title: 'Dedicated Campaign Architecture',
        detail:
          'High-speed conversion pages engineered cleanly around commercial search intent.',
      },
      {
        title: 'Conversion Rate Optimisation (CRO)',
        detail:
          'Form friction audits, transparent GBP fee structure, and strategic proof placement.',
      },
      {
        title: 'PECR-Compliant Attribution',
        detail:
          'Consent-mode GA4 and server-side conversion tracking aligned with UK ICO guidance.',
      },
      {
        title: 'Structured Follow-Up Workflows',
        detail:
          'Automated acknowledgement and lead nurturing flows that convert enquiries into consultations.',
      },
      {
        title: 'Executive ROI Reporting',
        detail:
          'Clear monthly reporting covering cost per enquiry, conversion rate, and channel attribution.',
      },
    ],
    processSteps: [
      {
        step: '01.',
        title: 'Funnel & Conversion Audit',
        detail:
          'Identify where UK prospects disengage between initial arrival and booking a consultation.',
      },
      {
        step: '02.',
        title: 'Landing Page & Attribution Setup',
        detail:
          'Release dedicated campaign pages with clean goal tracking and CRM integration.',
      },
      {
        step: '03.',
        title: 'Iterative Testing & Scaling',
        detail:
          'Monthly proposition, offer, and channel refinement guided by verified enquiry quality.',
      },
    ],
    faqs: [
      {
        question: 'Do you operate on rolling monthly retainers without lock-in?',
        answer:
          'Yes. Our growth programmes operate on transparent rolling monthly terms with clearly defined deliverables.',
      },
      {
        question: 'Do your engineers build the campaign landing pages directly?',
        answer:
          'Yes—because our strategists work alongside senior engineers, we build and A/B test landing pages in-house without external bottlenecks.',
      },
      {
        question: 'Is analytics tracking compliant with UK cookie legislation?',
        answer:
          'Yes. We deploy consent-aware tracking and server-side attribution aligned with UK GDPR and ICO PECR standards.',
      },
    ],
    relatedSlugs: [
      'search-engine-optimisation',
      'branding-brand-identity',
      'ecommerce-website-development',
    ],
  },
  {
    id: 'ai-business-automation',
    slug: 'ai-automation-business-process-automation',
    name: 'AI Automation and Business Process Automation',
    pillarTitle: '03. AI Automation & Business Operations',
    pillarCategory: 'automation',
    heroHeadline: 'AI & business process automation that reclaims hours across UK operations.',
    heroSummary:
      'Unite website enquiries, correspondence, CRM records, and accounting systems with auditable workflows—eliminating manual data entry whilst preserving human governance and UK GDPR compliance.',
    startingPriceGbp: 'From £1,250',
    typicalTimeline: '1 – 3 weeks',
    ukStandard: 'UK GDPR Safe · Human-in-Loop · Full Audit Logs',
    buildStack: ['Node.js / TypeScript', 'Python FastAPI', 'n8n & Make', 'Signed Webhooks', 'HubSpot & Xero API', 'Zero-Retention LLM'],
    idealFor: [
      'UK teams manually re-keying website enquiries into spreadsheets or CRMs',
      'Practices spending hours drafting repetitive proposals, triage notes, or briefs',
      'E-commerce operations automating order exceptions, stock alerts, and Xero invoicing',
      'Consultancies scaling operational throughput without proportional headcount growth',
    ],
    deliverables: [
      {
        title: 'Intelligent Enquiry Triage & Routing',
        detail:
          'Automatically classify inbound enquiries, enrich corporate details, and route priority matters to the appropriate partner.',
      },
      {
        title: 'CRM, Email & Accounting Synchronisation',
        detail:
          'Dependable workflows uniting your website, Microsoft 365/Google Workspace, Slack/Teams, HubSpot, and Xero.',
      },
      {
        title: 'Automated Proposal & Brief Drafting',
        detail:
          'Convert structured intake questionnaires into ready-to-review scoping briefs and draft proposals.',
      },
      {
        title: 'Exception Alerts & Human Approval Gates',
        detail:
          'Every external client communication or financial dispatch incorporates optional partner sign-off.',
      },
      {
        title: 'Privacy & Data Minimisation',
        detail:
          'Encrypted credentials, UK/EEA processing guarantees, and zero model training on proprietary business records.',
      },
    ],
    processSteps: [
      {
        step: '01.',
        title: 'Operational Bottleneck Mapping',
        detail:
          'We shadow your existing workflows to pinpoint processes with the highest weekly time recovery.',
      },
      {
        step: '02.',
        title: 'Build, Guardrails & Sandbox Run',
        detail:
          'Automations are engineered with strict schema validation, fallback notifications, and dry-run verification.',
      },
      {
        step: '03.',
        title: 'Controlled Roll-Out & Handover',
        detail:
          'Live deployment with health monitoring and concise documentation for your internal team.',
      },
    ],
    faqs: [
      {
        question: 'Which automation frameworks and APIs do you engineer with?',
        answer:
          'We build bespoke Node.js and TypeScript microservices alongside Make, n8n, Zapier, and signed REST webhooks matched to your throughput and governance needs.',
      },
      {
        question: 'Will our confidential client data be used to train public AI models?',
        answer:
          'No. We configure commercial API tiers with zero data-training guarantees and UK GDPR data minimisation.',
      },
      {
        question: 'What if an automated step encounters unexpected input?',
        answer:
          'We build explicit validation and Slack/email fallback alerts so your team is notified immediately without silent failures.',
      },
    ],
    relatedSlugs: [
      'custom-web-solutions-integrations',
      'ai-powered-website-development',
      'digital-marketing-online-growth',
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceLandingDetail | undefined {
  return SERVICE_LANDING_PAGES.find((s) => s.slug === slug);
}
