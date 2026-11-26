import type { DedicatedServicePageConfig } from './dedicatedServicePagesData';

export const SEARCH_ENGINE_OPTIMISATION_PAGE_DATA: DedicatedServicePageConfig = {
  id: 'search-engine-optimisation',
  routePath: '/services/search-engine-optimisation/',
  canonicalUrl: 'https://wpcarepoint.co.uk/services/search-engine-optimisation/',
  metaTitle: 'Search Engine Optimisation (SEO) UK | Technical & On-Page SEO – WPCarePoint',
  metaDescription:
    'Practical Search Engine Optimisation (SEO) for UK businesses. Technical crawl hygiene, on-page architecture, Schema.org structure, SXO clarity, and migration governance without fake ranking guarantees.',
  serviceSchemaName: 'Search Engine Optimisation (SEO)',
  breadcrumbLabel: 'Search Engine Optimisation',
  hero: {
    eyebrow: 'Supporting Service · Search Engine Optimisation (UK)',
    headline: 'Search Engine Optimisation rooted in clean technical foundations and genuine user intent.',
    description:
      'Effective organic search performance starts beneath the surface—with crawlable URLs, logical information architecture, fast mobile delivery, and honest page content written for UK buyers rather than keyword checklists.',
    primaryCtaLabel: 'Request SEO Review',
    secondaryCtaLabel: 'Who This Suits',
    secondaryCtaTargetId: 'seo-suitability',
    imageUrl: '/src/assets/images/service_seo_architecture_1795679595425.jpg',
    imageAlt:
      'Clean architectural indexation and search structure blocks in WPCarePoint deep coastal teal and limestone palette',
    imageCaption: 'Technical SEO, SXO & semantic HTML discipline · UK Search Console led',
    standards: [
      { label: 'Core Focus', value: 'Technical · On-Page · SXO' },
      { label: 'Markup Discipline', value: 'Validated Schema.org JSON-LD' },
      { label: 'Migration Safety', value: '301 & 410 URL Governance' },
      { label: 'Ethical Standard', value: 'Zero Fake Ranking Promises' },
    ],
  },
  jumpLinks: [
    { label: 'Overview', targetId: 'service-intro' },
    { label: 'Suitability', targetId: 'seo-suitability' },
    { label: 'Capabilities', targetId: 'seo-capabilities' },
    { label: 'Problems Fixed', targetId: 'seo-problems' },
    { label: 'Technical Depth', targetId: 'seo-technical' },
    { label: 'FAQ', targetId: 'service-faq' },
    { label: 'Enquire', targetId: 'contact' },
  ],
  sectionOrder: [
    'intro',
    'suitability',
    'capabilities',
    'problems',
    'technical',
    'process',
    'whyChoose',
  ],
  capabilitiesLayout: 'grid-2x2',
  introSection: {
    id: 'service-intro',
    eyebrow: 'Search Engineering Perspective',
    title: 'Replacing superficial plugin scores with solid site structure and search clarity.',
    paragraphs: [
      'Many UK organisations discover that green traffic lights inside a WordPress SEO plugin do very little when underlying templates generate duplicate archive pages, broken canonical tags, conflicting heading levels, or sluggish mobile page loads.',
      'WPCarePoint treats Search Engine Optimisation as a practical blend of structural engineering and clear British English (en-GB) communication. We inspect how search crawlers actually read your templates, tidy URL indexing paths, align service pages with real customer questions, and build clean Schema.org structured data directly into your site.',
      'We are always candid about boundaries: no reputable agency can guarantee a #1 Google spot, exact organic traffic growth, or automated citations. Our commitment is eliminating verifiable technical obstacles and making your pages unmistakably clear to both search engines and prospective UK clients.',
    ],
    asideEyebrow: 'Realistic Scope Boundaries',
    asideTitle: 'What our SEO work delivers — and what we never claim',
    asidePoints: [
      {
        title: 'Evidence Before Adjustments',
        detail:
          'Priorities come from live template structure, Google Search Console behaviour, and crawl diagnostics rather than generic automated PDFs.',
      },
      {
        title: 'Honest Commercial Language',
        detail:
          'We never promise specific ranking positions, fixed lead increases, or guaranteed AI search placements—because live search algorithms remain outside any agency’s control.',
      },
      {
        title: 'Connected to AI Search (AIO / GEO)',
        detail:
          'Clean technical SEO forms the essential base for modern AI search discoverability; we link both disciplines seamlessly when helpful.',
      },
    ],
  },
  suitabilitySection: {
    id: 'seo-suitability',
    eyebrow: 'Who This Service Is Suitable For',
    title: 'Right-sized Search Engine Optimisation for UK organisations investing in durable foundations.',
    description:
      'Understanding whether technical SEO, AI search visibility, or speed engineering solves your immediate bottleneck first.',
    goodFitTitle: 'Ideal for businesses needing:',
    goodFit: [
      {
        title: 'Established WordPress & Business Sites Losing Visibility',
        detail:
          'Sites experiencing declining impressions, unindexed service pages, duplicate URLs, or messy historical redirects after earlier agency handovers.',
      },
      {
        title: 'Websites Preparing for a Redesign or Domain Change',
        detail:
          'Organisations planning new page URLs that require mapped single-hop 301 redirects and canonical hygiene before going live.',
      },
      {
        title: 'B2B, Trade & Retail Teams Clarifying Service Hierarchy',
        detail:
          'Businesses whose core capabilities are buried across thin, overlapping pages or vague brochure copy that fails UK buyer intent.',
      },
      {
        title: 'Teams Seeking Engineering-Level Fixes Over Monthly Fluff',
        detail:
          'Owners who want structural HTML, Schema, sitemap, and Core Web Vitals issues fixed directly in code rather than receiving repetitive checklists.',
      },
    ],
    considerOtherTitle: 'When a companion service fits better:',
    considerOther: [
      {
        label: 'SEO & AI Search Optimisation (AIO / GEO)',
        routePath: '/services/ai-search-optimisation/',
        note: 'Choose this track when your primary goal is entity clarity and generative answer discoverability across ChatGPT, Gemini, and Claude.',
      },
      {
        label: 'WordPress Speed Optimisation',
        routePath: '/wordpress-speed-optimisation/',
        note: 'Start here if slow Core Web Vitals (LCP, INP, CLS) or server response latency are clearly hurting user engagement.',
      },
      {
        label: 'Digital Marketing & Online Growth',
        routePath: '/services/digital-marketing-online-growth/',
        note: 'Explore this track when you want landing architecture, search visibility, and enquiry conversion steps aligned together.',
      },
    ],
  },
  capabilitiesSection: {
    id: 'seo-capabilities',
    eyebrow: 'Core SEO Capabilities & Deliverables',
    title: 'Four structured layers strengthening how search engines crawl, understand, and rank pages.',
    description:
      'Every deliverable targets clean indexation, unambiguous relevance, and confident user progression toward an enquiry.',
    items: [
      {
        index: '01.',
        title: 'Technical SEO & Crawl Governance',
        subtitle: 'Indexation · Canonicals · Sitemaps · Status Codes',
        summary:
          'Diagnosing and repairing the underlying server, template, and metadata signals that determine which pages Google indexes cleanly.',
        points: [
          'Reviewing XML sitemaps, robots.txt directives, and meta-robots indexing rules',
          'Resolving duplicate parameter URLs, tag archive bloat, and conflicting canonicals',
          'Checking single-hop 301 redirect chains and clean 410 Gone responses for dead paths',
        ],
      },
      {
        index: '02.',
        title: 'On-Page Architecture & Heading Discipline',
        subtitle: 'HTML Semantics · Meta Titles · Topic Grouping',
        summary:
          'Structuring individual pages so headings, body explanations, and title metadata match how real UK searchers look for specific services.',
        points: [
          'Strict single-H1 and clean H2/H3 outline across landing, service, and category templates',
          'Distinct non-duplicated meta titles and compelling descriptive summaries',
          'Consolidating overlapping or competing service URLs causing internal cannibalisation',
        ],
      },
      {
        index: '03.',
        title: 'Content & Search Experience Optimisation (SXO)',
        subtitle: 'Search Intent · Readability · Enquiry Flow',
        summary:
          'Aligning written explanations, scannable checklists, FAQs, and internal navigation so clicks convert cleanly into informed enquiries.',
        points: [
          'Structuring UK buyer questions cleanly without repetitive keyword stuffing',
          'Tightening internal link pathways between Services Hub, core tracks, and Contact',
          'Removing mobile UX friction and confusing navigation traps on key entry pages',
        ],
      },
      {
        index: '04.',
        title: 'Schema.org JSON-LD & AI Visibility Alignment',
        subtitle: 'Structured Entities · Visible Parity · AIO Ready',
        summary:
          'Implementing validated JSON-LD markup reflecting genuine business identity, services, breadcrumbs, and visible page facts.',
        points: [
          'Organisation, Service, BreadcrumbList, and visible FAQPage Schema graphs',
          '1:1 factual parity between structured data properties and rendered UK business details',
          'Clean handover readiness into our SEO & AI Search Optimisation track',
        ],
      },
    ],
  },
  problemsSection: {
    id: 'seo-problems',
    eyebrow: 'Common SEO Problems We Address',
    title: 'Diagnosing why well-built websites still underperform in organic search.',
    description:
      'Practical problem-to-solution breakdown showing how structural technical faults restrict organic visibility—and how we resolve them safely.',
    layout: 'comparison-rows',
    items: [
      {
        index: '01.',
        problem: 'Index Bloat & Duplicate Archive URLs',
        impact:
          'WordPress author archives, media attachment pages, and query parameters dilute crawl focus away from commercial service pages.',
        solution:
          'Tighten canonical URLs, prune thin archives from XML sitemaps, and apply accurate noindex directives cleanly.',
        boundaryNote: 'Verified safely in Search Console',
      },
      {
        index: '02.',
        problem: 'Broken Redirects & Unmapped Site Rebuilds',
        impact:
          'Changing URL structures without matching 301 maps leaves established UK backlinks hitting 404 errors or lazy homepage catch-alls.',
        solution:
          'Map legacy URLs carefully to closest relevant replacements via direct single-hop 301 rules—or return clean 410 Gone statuses for genuine obsolete spam.',
        boundaryNote: 'Preserves domain equity safely',
      },
      {
        index: '03.',
        problem: 'Service Overlap & Unclear Page Intent',
        impact:
          'Multiple thin pages chasing similar terms confuse Google UK on which URL should rank, lowering click clarity for prospects.',
        solution:
          'Establish distinct commercial scope per page with clear internal cross-links guiding buyers naturally.',
        boundaryNote: 'Aligned to actual capabilities',
      },
      {
        index: '04.',
        problem: 'Slow Mobile Rendering & Layout Instability',
        impact:
          'Heavy page-builder CSS and uncropped photography degrade Core Web Vitals, pushing visitors back to search results within seconds.',
        solution:
          'Trim render-blocking assets and coordinate responsive media delivery alongside SXO layout fixes.',
        boundaryNote: 'Pairs with Speed Optimisation',
      },
    ],
  },
  technicalSection: {
    id: 'seo-technical',
    eyebrow: 'How Technical SEO Integrates With Engineering',
    title: 'Built directly into themes, templates, and deployment pipelines.',
    description:
      'Rather than bolting patches on top of broken code, technical SEO sits alongside theme engineering, hosting headers, and content hierarchy.',
    pillars: [
      {
        id: 'crawl-render-clarity',
        index: '01.',
        eyebrow: 'Crawlability & Clean Code',
        title: 'Fast HTML delivery that crawlers parse effortlessly',
        summary:
          'Search engines and modern crawlers favour clean semantic HTML over bloated client-only wrappers or deeply nested builder DOM trees.',
        bullets: [
          'Accessible navigation, semantic landmarks, and proper link elements instead of click-handler divs',
          'Static or server-rendered HTML parity ensuring primary copy and Schema load immediately',
          'Consistent hreflang ("en-gb") and canonical host normalisation (HTTPS / non-www or www consistency)',
        ],
        calloutLabel: 'Structural Hygiene',
        calloutText: 'Crawlers see crisp heading levels and complete copy in the initial HTML payload.',
      },
      {
        id: 'uk-local-entity',
        index: '02.',
        eyebrow: 'UK Geographic & Service Signals',
        title: 'Clear UK positioning without spammy doorway pages',
        summary:
          'We avoid churning out thin cloned city pages. Instead, we reinforce genuine British address, terminology, and commercial context cleanly.',
        bullets: [
          'Accurate UK location metadata (Nutfield, Surrey · serving England, Scotland, Wales & Northern Ireland)',
          'Consistent spelling and currency conventions (en-GB, GBP £, UK GDPR)',
          'Genuine service descriptions structured around how British buyers assess partners',
        ],
        calloutLabel: 'Quality Over Volume',
        calloutText: 'Durable authority beats thin automated location-swap pages.',
      },
    ],
  },
  processSection: {
    id: 'delivery-process',
    eyebrow: 'Our SEO Working Approach',
    title: 'Four methodical steps prioritised around practical impact.',
    description:
      'Every SEO engagement starts with honest diagnostics, runs safely through staging verification, and leaves clean documentation for your team.',
    steps: [
      {
        step: '01.',
        title: 'Technical & Content Audit',
        summary:
          'We review Search Console data, URL indexation, page speed behaviour, template markup, and service page intent across your domain.',
        deliverable: 'Prioritised technical audit brief',
      },
      {
        step: '02.',
        title: 'Structure & URL Planning',
        summary:
          'We agree target page structure, metadata rewrites, Schema graph updates, and redirect rules in writing before editing live templates.',
        deliverable: 'Agreed URL & metadata plan',
      },
      {
        step: '03.',
        title: 'Staging Implementation',
        summary:
          'On-page copy refinements, semantic HTML fixes, structured data, and speed adjustments are implemented and verified safely on staging.',
        deliverable: 'Staging QA & markup validation',
      },
      {
        step: '04.',
        title: 'Live Rollout & Index Check',
        summary:
          'Live sitemaps, canonical headers, and response codes are checked immediately on deployment alongside practical handover notes.',
        deliverable: 'Live verification summary',
      },
    ],
  },
  whyChooseSection: {
    id: 'why-wpcarepoint-seo',
    eyebrow: 'Why Work With WPCarePoint',
    title: 'Real engineering implementation paired with transparent search ethics.',
    description:
      'You get direct access to technical people who understand code, speed, WordPress internals, and modern search behaviour together.',
    items: [
      {
        index: '01.',
        title: 'Fixes Implemented, Not Just Listed',
        summary:
          'Instead of leaving you with an intimidating 60-page audit spreadsheet, we actually write the clean template, Schema, and redirect fixes.',
        standard: 'End-to-End Execution',
      },
      {
        index: '02.',
        title: 'Transparent Reporting Without Hype',
        summary:
          'Clear discussion of crawl hygiene, indexing coverage, and conversion clarity without fabricated guarantees or vanity charts.',
        standard: 'Honest UK Practice',
      },
      {
        index: '03.',
        title: 'Built-In Speed & Accessibility Care',
        summary:
          'SEO edits always respect Core Web Vitals speed and WCAG 2.2 AA readability—never bloating pages with heavy tracking bloat.',
        standard: 'Performance Safe',
      },
      {
        index: '04.',
        title: 'Seamless AI Search Integration',
        summary:
          'Your SEO foundations feed naturally into structured entity clarity for ChatGPT, Gemini, and modern search synthesis tools.',
        standard: 'SEO + AIO / GEO Ready',
      },
    ],
  },
  faqSection: {
    id: 'service-faq',
    eyebrow: 'Search Engine Optimisation FAQ',
    title: 'Straightforward questions about our UK SEO approach.',
    description:
      'Honest expectations on timelines, guarantees, WordPress SEO plugins, and how this connects to AI Search.',
    faqs: [
      {
        id: 'seo-svc-faq-1',
        question: 'Can you guarantee first-page Google rankings or exact organic traffic targets?',
        answer:
          'No. Google rankings depend on external algorithm updates, competitor activity, backlink history, and market demand that no agency controls. We guarantee thorough technical execution, clean crawl hygiene, accurate structured data, and clear service pages aligned with genuine UK search intent.',
      },
      {
        id: 'seo-svc-faq-2',
        question: 'How does this Search Engine Optimisation page differ from SEO & AI Search Optimisation?',
        answer:
          'Search Engine Optimisation focuses comprehensively on traditional technical SEO, crawl governance, on-page heading and content structure, and SXO enquiry clarity. SEO & AI Search Optimisation goes deeper on consolidated entity structure, AIO, and Generative Engine Optimisation (GEO) for AI assistants. Both tracks reinforce each other cleanly.',
      },
      {
        id: 'seo-svc-faq-3',
        question: 'Do we need a separate plugin like Yoast or Rank Math, or is that enough on its own?',
        answer:
          'WordPress SEO plugins help editors edit titles, descriptions, and sitemaps easily, which can be very useful. However, plugins alone cannot repair slow themes, thin page copy, broken heading hierarchies, duplicate URL generation, or poor server response times. We fix both the underlying code and plugin configuration cleanly.',
      },
      {
        id: 'seo-svc-faq-4',
        question: 'Do you offer one-off technical SEO audits and cleanups without monthly contracts?',
        answer:
          'Yes. Many clients commission a standalone technical SEO audit and remediation project—especially around migrations, redesigns, or recovering from historical errors—and then decide independently whether ongoing support makes sense.',
      },
      {
        id: 'seo-svc-faq-5',
        question: 'How do we request an SEO assessment for our existing website?',
        answer:
          'Email your domain URL, core commercial services, and any known Search Console or migration concerns to contact@wpcarepoint.co.uk. We review your public pages and respond directly in writing.',
      },
    ],
  },
  relatedSection: {
    eyebrow: 'Related Services & Next Steps',
    title: 'Connect search visibility with AI discovery, speed, and growth alignment',
    items: [
      {
        eyebrow: 'AI Visibility Track',
        title: 'SEO & AI Search Optimisation',
        description:
          'Consolidated AIO & GEO optimisation ensuring ChatGPT, Gemini, and modern search engines interpret your UK services accurately.',
        ctaLabel: 'Explore AI Search Readiness',
        targetType: 'route',
        href: '/services/ai-search-optimisation/',
      },
      {
        eyebrow: 'Core Web Vitals',
        title: 'WordPress Speed Optimisation',
        description:
          'Diagnose and resolve slow TTFB, render-blocking scripts, and image weight supporting Google page-experience signals.',
        ctaLabel: 'Explore Speed Optimisation',
        targetType: 'route',
        href: '/wordpress-speed-optimisation/',
      },
      {
        eyebrow: 'Broader Growth',
        title: 'Digital Marketing & Online Growth',
        description:
          'Align organic search visibility with conversion-focused landing pages and clear user enquiry pathways.',
        ctaLabel: 'Explore Online Growth',
        targetType: 'route',
        href: '/services/digital-marketing-online-growth/',
      },
    ],
  },
  ctaSection: {
    eyebrow: 'Request a Practical SEO Review',
    headline: 'Identify and resolve the structural bottlenecks holding back search clarity.',
    description:
      'Send your domain URL, core commercial services, and any migration or indexing concerns to contact@wpcarepoint.co.uk. We respond directly in writing with honest observations.',
    mailtoSubject: 'Search Engine Optimisation (SEO) Enquiry',
    primaryButtonLabel: 'Send SEO Enquiry',
  },
};

export const CUSTOM_WEB_SOLUTIONS_PAGE_DATA: DedicatedServicePageConfig = {
  id: 'custom-web-solutions-integrations',
  routePath: '/services/custom-web-solutions-integrations/',
  canonicalUrl: 'https://wpcarepoint.co.uk/services/custom-web-solutions-integrations/',
  metaTitle: 'Custom Web Solutions & API Integrations UK | Tailored Systems – WPCarePoint',
  metaDescription:
    'Bespoke website functionality, server-side REST & webhook integrations, custom WordPress modules, and React interfaces engineered for UK businesses with full client ownership.',
  serviceSchemaName: 'Custom Web Solutions & Integrations',
  breadcrumbLabel: 'Custom Web Solutions & Integrations',
  hero: {
    eyebrow: 'Supporting Service · Bespoke Functionality & Systems Connectivity',
    headline: 'Custom web solutions and integrations engineered around how your team actually works.',
    description:
      'When off-the-shelf WordPress plugins and rigid SaaS widgets force clumsy manual workarounds, WPCarePoint builds clean tailored modules, secure REST/webhook connectors, and bespoke React / TypeScript interfaces scoped cleanly around your stack.',
    primaryCtaLabel: 'Discuss Custom Scope',
    secondaryCtaLabel: 'See Integration Guardrails',
    secondaryCtaTargetId: 'integration-guardrails',
    imageUrl: '/src/assets/images/service_custom_integrations_1795679595670.jpg',
    imageAlt:
      'Interlocking architectural API bridge and custom system geometry in deep coastal teal and stone',
    imageCaption: 'Tailored web functionality & signed API connectivity · Built with server-side safety',
    standards: [
      { label: 'Integration Pattern', value: 'REST · GraphQL · Webhooks' },
      { label: 'Core Stacks', value: 'WordPress · React · TypeScript' },
      { label: 'Credential Safety', value: 'Server-Boundary Secrets Only' },
      { label: 'Third-Party Scope', value: 'Scoped to Verified APIs' },
    ],
  },
  jumpLinks: [
    { label: 'Overview', targetId: 'service-intro' },
    { label: 'Guardrails', targetId: 'integration-guardrails' },
    { label: 'What We Build', targetId: 'custom-capabilities' },
    { label: 'Suitability', targetId: 'custom-suitability' },
    { label: 'FAQ', targetId: 'service-faq' },
    { label: 'Enquire', targetId: 'contact' },
  ],
  sectionOrder: [
    'intro',
    'problems',
    'capabilities',
    'suitability',
    'technical',
    'process',
    'whyChoose',
  ],
  capabilitiesLayout: 'bento-featured',
  introSection: {
    id: 'service-intro',
    eyebrow: 'Why Custom Engineering Matters',
    title: 'Replacing fragile multi-plugin glue with clean, maintainable software.',
    paragraphs: [
      'Growing UK organisations frequently outgrow simple brochure websites long before they need an enterprise custom software overhaul. You might need structured client portals, multi-step quote estimators, clean CRM synchronisation, or custom WordPress workflows linking online orders to back-office tools.',
      'Stacking half a dozen unrelated third-party plugins and fragile Zapier chains creates brittle failure points, duplicated customer data, and security headaches. We engineer targeted custom modules—in clean PHP/WordPress blocks or TypeScript/Node APIs—that perform one job cleanly without dragging down the rest of your website.',
      'We are clear about integration boundaries from the start: third-party connectivity always depends on API availability, client licensing, and sandbox testing. We never represent custom integrations as unverified turnkey plugins included automatically out of the box.',
    ],
    asideEyebrow: 'Architectural Honesty',
    asideTitle: 'Dependable systems over over-engineered complexity',
    asidePoints: [
      {
        title: 'Right-Sized Custom Code',
        detail:
          'We only write custom components where native WordPress or vetted tools fall short—keeping ongoing maintenance straightforward.',
      },
      {
        title: 'Strict Server-Side Boundaries',
        detail:
          'API keys, OAuth tokens, and webhook signing secrets always remain protected inside server-side routes, never exposed in browser code.',
      },
      {
        title: 'Audited Before Cut-Over',
        detail:
          'All external connectors are tested against staging/sandbox accounts with malformed inputs, timeouts, and duplicate submissions checked.',
      },
    ],
  },
  problemsSection: {
    id: 'integration-guardrails',
    eyebrow: 'Integration Guardrails & Problems Solved',
    title: 'Preventing silent API failures, leaked credentials, and duplicated data.',
    description:
      'Custom web functionality only delivers value when it handles errors gracefully and protects private operational data.',
    layout: 'guardrail-cards',
    items: [
      {
        index: '01.',
        problem: 'Brittle Plugin Stacking & Update Breakage',
        impact:
          'Relying on five overlapping add-ons to approximate one business rule causes PHP fatal errors whenever themes or core update.',
        solution:
          'Replace overlapping add-ons with a concise, version-controlled custom module scoped strictly to the exact workflow needed.',
        boundaryNote: 'Clean maintainable source code',
      },
      {
        index: '02.',
        problem: 'Manual Re-Keying Between Website & Back-Office',
        impact:
          'Staff copy enquiry details, bookings, or order references manually from emails into CRMs and spreadsheets, risking omissions and delays.',
        solution:
          'Engineer validated webhook or REST integrations forwarding structured enquiry data cleanly into your nominated target system.',
        boundaryNote: 'Scoped to target API docs',
      },
      {
        index: '03.',
        problem: 'Silent Webhook Drops & Duplicate Records',
        impact:
          'Network blips or rate limits drop customer submissions quietly without alerts, or create duplicate contacts and double actions.',
        solution:
          'Implement schema validation, idempotency checks, controlled retry handling, and clear admin failure notifications.',
        boundaryNote: 'Zero silent failures',
      },
      {
        index: '04.',
        problem: 'Insecure Browser-Side Keys or Untested Payloads',
        impact:
          'Calling private business endpoints directly from frontend JavaScript exposes credentials and invites abusive requests.',
        solution:
          'Enforce server-side proxy endpoints, strict input validation, and least-privilege API token scopes.',
        boundaryNote: 'UK GDPR & security baseline',
      },
    ],
  },
  capabilitiesSection: {
    id: 'custom-capabilities',
    eyebrow: 'Custom Capabilities & Integration Scope',
    title: 'Targeted engineering bridging frontend UX and practical operational systems.',
    description:
      'Every bespoke module or API bridge is documented clearly so your team owns and understands how it operates.',
    items: [
      {
        index: '01.',
        title: 'Tailored Interactive Web Modules & Portals',
        subtitle: 'React · TypeScript · Custom WordPress Blocks',
        summary:
          'Building interactive service calculators, structured client resource areas, multi-step scoping tools, and bespoke frontend features tailored directly to your UK customer journey.',
        points: [
          'Bespoke Gutenberg editorial blocks locked cleanly to your design tokens',
          'Responsive interactive calculators, lookup directories, and quote builders',
          'Accessible WCAG 2.2 AA forms, validation states, and keyboard navigation',
        ],
      },
      {
        index: '02.',
        title: 'CRM, Booking & Lead Routing Connectors',
        subtitle: 'HubSpot · Webhooks · Structured Payloads',
        summary:
          'Connecting website forms cleanly to CRM pipelines or scheduling systems using verified API scopes agreed in writing.',
        points: [
          'Mapped form fields validated cleanly prior to upstream API submission',
          'Clean source attribution without invasive third-party tracker bloat',
          'Tested against sandbox credentials before touching live CRM pipelines',
        ],
      },
      {
        index: '03.',
        title: 'Finance, Ordering & Fulfilment Hooks',
        subtitle: 'Stripe · Xero · WooCommerce APIs',
        summary:
          'Scoped event webhooks linking payment confirmations, invoice generation, or shipping status updates where supported by your active accounts.',
        points: [
          'Verified Stripe webhook signatures and Strong Customer Authentication flows',
          'Clean accounting/order metadata mapping tailored to UK VAT workflows',
          'Auditable logs confirming payload delivery and error states',
        ],
      },
      {
        index: '04.',
        title: 'Legacy Data Cleanup & API Migrations',
        subtitle: 'JSON · CSV · WordPress Custom Post Types',
        summary:
          'Transforming fragmented legacy records, custom databases, or messy spreadsheets into clean structured website entities during rebuilds.',
        points: [
          'Validation scripts sanitising imported text, categories, and media URLs',
          'Clean mapping preserving historical slugs and SEO redirects',
          'Zero reliance on locked proprietary migration SaaS subscriptions',
        ],
      },
    ],
  },
  suitabilitySection: {
    id: 'custom-suitability',
    eyebrow: 'Is Custom Development Right For You?',
    title: 'Pragmatic guidance on choosing bespoke code versus standard plugins.',
    description:
      'Good engineering knows when NOT to write custom code. We help you select the lowest-friction option.',
    goodFitTitle: 'Bespoke engineering fits cleanly when:',
    goodFit: [
      {
        title: 'Commercial Workflows Have Specific Rules',
        detail:
          'Off-the-shelf plugins force clumsy manual compromises or require three heavy extensions for one core feature.',
      },
      {
        title: 'Data Reliability & Clean Performance Matter',
        detail:
          'You want lightweight, tested code instead of dragging down Core Web Vitals with bloated universal SaaS embeds.',
      },
      {
        title: 'Multiple Systems Must Share Verified Fields',
        detail:
          'Enquiries, customer references, or product updates need predictable server-side validation across tools.',
      },
    ],
    considerOtherTitle: 'Adjacent WPCarePoint services to check:',
    considerOther: [
      {
        label: 'Website Design & Development',
        routePath: '/services/website-development/',
        note: 'Full custom WordPress block or React/Next.js build if the whole platform is being created or replaced.',
      },
      {
        label: 'AI & Business Automation',
        routePath: '/services/ai-business-automation/',
        note: 'Explore broader workflow automation, enquiry triage, and human-approved operational pipelines.',
      },
      {
        label: 'AI-Powered Website Development',
        routePath: '/services/ai-powered-website-development/',
        note: 'Scoped AI-assisted website search, drafting, or guided qualification helpers integrated safely.',
      },
    ],
  },
  technicalSection: {
    id: 'custom-technical',
    eyebrow: 'Engineering & Security Standards',
    title: 'Defensive implementation from validation schema to handover docs.',
    description:
      'Every bespoke module ships cleanly commented, security-checked, and owned outright by your organisation.',
    pillars: [
      {
        id: 'api-contract-safety',
        index: '01.',
        eyebrow: 'Server Boundaries & Validation',
        title: 'Predictable data handling with zero leaked keys',
        summary:
          'Every external call passes through an explicit server-side handler validating shapes, enforcing permissions, and protecting client credentials.',
        bullets: [
          'Input sanitisation and parameterised database/API handling preventing injection flaws',
          'Environment-based secret management with zero credentials stored in source code',
          'Least-privilege API scopes limiting integration access strictly to required actions',
        ],
        calloutLabel: 'Security Baseline',
        calloutText: 'Server-side secret isolation and explicit payload validation on every route.',
      },
      {
        id: 'client-owned-code',
        index: '02.',
        eyebrow: 'Documentation & Handover',
        title: 'Understandable architecture you can maintain freely',
        summary:
          'We never create undocumented black-box plugins designed to lock you into one agency. Every integration includes readable architecture notes.',
        bullets: [
          'Clear TypeScript / PHP interfaces documenting endpoints, fields, and failure states',
          'Written configuration notes covering environment variables and sandbox testing steps',
          'Compatible with ongoing WPCarePoint Website Care or your internal engineering team',
        ],
        calloutLabel: 'Full Ownership',
        calloutText: 'Source repositories and bespoke modules belong cleanly to your company.',
      },
    ],
  },
  processSection: {
    id: 'delivery-process',
    eyebrow: 'How Custom Projects Run',
    title: 'Four milestone phases reducing technical ambiguity upfront.',
    description:
      'Integration requirements are checked against live API documentation before committing build scope.',
    steps: [
      {
        step: '01.',
        title: 'Workflow & API Discovery',
        summary:
          'We review existing systems, target API documentation, authentication requirements, and exact business edge cases in writing.',
        deliverable: 'Integration feasibility brief',
      },
      {
        step: '02.',
        title: 'Data Schema & Security Design',
        summary:
          'Field mappings, retry safeguards, UK GDPR minimisation rules, and staging test criteria are confirmed cleanly before coding.',
        deliverable: 'Written technical blueprint',
      },
      {
        step: '03.',
        title: 'Staging & Sandbox Engineering',
        summary:
          'Custom modules and API handlers are built cleanly and exercised against test payloads, edge inputs, and simulated failures.',
        deliverable: 'Tested staging module',
      },
      {
        step: '04.',
        title: 'Controlled Deployment & Docs',
        summary:
          'Changes deploy with monitoring checks and clear documentation detailing configuration, credentials, and operational steps.',
        deliverable: 'Live feature & engineering notes',
      },
    ],
  },
  whyChooseSection: {
    id: 'why-wpcarepoint-custom',
    eyebrow: 'Why Choose WPCarePoint',
    title: 'Practical full-stack capability without unnecessary enterprise overhead.',
    description:
      'Direct communication with the people writing, testing, and documenting your custom integration code.',
    items: [
      {
        index: '01.',
        title: 'WordPress + Modern TypeScript Fluency',
        summary:
          'We bridge classic WordPress hooks/PHP cleanly with React, Next.js, and Node server routes depending on what fits best.',
        standard: 'Dual-Stack Capability',
      },
      {
        index: '02.',
        title: 'No Unverified "Plug & Play" Promises',
        summary:
          'We confirm real API limits, rate restrictions, and account tiers upfront so there are zero mid-project surprises.',
        standard: 'Honest Technical Scoping',
      },
      {
        index: '03.',
        title: 'Clean Performance Respect',
        summary:
          'Custom modules execute asynchronously or server-side so core visitor page speed stays unaffected.',
        standard: 'Core Web Vitals Safe',
      },
      {
        index: '04.',
        title: 'Maintainable Long-Term Ownership',
        summary:
          'Clean repositories and concise documentation empower either your own developers or WPCarePoint Care Plans.',
        standard: 'Zero Lock-In',
      },
    ],
  },
  faqSection: {
    id: 'service-faq',
    eyebrow: 'Custom Solutions & Integrations FAQ',
    title: 'Clear answers on scoping custom web functionality and API links.',
    description:
      'Addressing feasibility, third-party subscriptions, security, and ongoing care.',
    faqs: [
      {
        id: 'custom-faq-1',
        question: 'Can you integrate any third-party software or CRM with our website?',
        answer:
          'We can connect websites to any platform that provides documented, accessible APIs or webhooks compatible with your account plan (such as HubSpot, Xero, Stripe, WooCommerce, or booking providers). Before quoting, we verify the actual API endpoints and limits available on your tier so nothing is assumed.',
      },
      {
        id: 'custom-faq-2',
        question: 'Are third-party integrations included automatically in standard brochure builds?',
        answer:
          'No. Custom API connectors and bespoke features are scoped explicitly per brief based on required endpoints, data mapping, authentication, and error handling—rather than claimed as generic out-of-the-box add-ons.',
      },
      {
        id: 'custom-faq-3',
        question: 'Can custom features be added safely to an existing WordPress site without rebuilding everything?',
        answer:
          'Often yes, provided the existing theme and WordPress installation are healthy. We inspect your codebase on staging first and either build an isolated custom plugin/block module or advise honestly if underlying template debt makes partial refactoring safer.',
      },
      {
        id: 'custom-faq-4',
        question: 'How do you store API keys and sensitive customer records safely?',
        answer:
          'Private API keys and webhook secrets are isolated strictly in server-side environment configurations, never shipped into client browser JavaScript. We apply input validation, UK GDPR data minimisation, and least-privilege access tokens across every route.',
      },
      {
        id: 'custom-faq-5',
        question: 'What details should we email to scope a custom solution?',
        answer:
          'Send a plain-language overview of the manual task or feature you want, links to the external software tools involved, and your website URL to contact@wpcarepoint.co.uk. We evaluate technical feasibility and reply clearly in writing.',
      },
    ],
  },
  relatedSection: {
    eyebrow: 'Connected Capabilities',
    title: 'Explore complementary builds, automation, and storefront services',
    items: [
      {
        eyebrow: 'Automation Track',
        title: 'AI & Business Automation',
        description:
          'Structured operational workflows, enquiry classification, and human-approved process automation.',
        ctaLabel: 'Explore Business Automation',
        targetType: 'route',
        href: '/services/ai-business-automation/',
      },
      {
        eyebrow: 'Platform Engineering',
        title: 'Website Design & Development',
        description:
          'Custom WordPress Gutenberg and React / Next.js builds providing a clean foundation for bespoke tools.',
        ctaLabel: 'Explore Web Development',
        targetType: 'route',
        href: '/services/website-development/',
      },
      {
        eyebrow: 'Online Retail',
        title: 'eCommerce & WooCommerce Development',
        description:
          'UK stores with clean stock rules, Stripe 3D Secure checkouts, and reliable delivery integrations.',
        ctaLabel: 'Explore eCommerce Builds',
        targetType: 'route',
        href: '/services/ecommerce-development/',
      },
    ],
  },
  ctaSection: {
    eyebrow: 'Scope a Custom Web Solution',
    headline: 'Describe the system connection or bespoke web tool your team needs.',
    description:
      'Email your website URL, target software tools, and desired operational flow to contact@wpcarepoint.co.uk. Every integration request is reviewed for real API feasibility in writing.',
    mailtoSubject: 'Custom Web Solutions & Integrations Enquiry',
    primaryButtonLabel: 'Send Integration Brief',
  },
};

export const AI_POWERED_WEBSITE_DEV_PAGE_DATA: DedicatedServicePageConfig = {
  id: 'ai-powered-website-development',
  routePath: '/services/ai-powered-website-development/',
  canonicalUrl: 'https://wpcarepoint.co.uk/services/ai-powered-website-development/',
  metaTitle: 'AI-Powered Website Development UK | Practical Scoped AI Features – WPCarePoint',
  metaDescription:
    'Practical AI-powered website features engineered cleanly for UK businesses. Grounded site search, enquiry guidance, and editorial tools built with UK GDPR boundaries and human approval.',
  serviceSchemaName: 'AI-Powered Website Development',
  breadcrumbLabel: 'AI-Powered Website Development',
  hero: {
    eyebrow: 'Supporting Service · Scoped AI Website Features (UK)',
    headline: 'Practical AI-powered website features engineered with clear human guardrails.',
    description:
      'Rather than bolting noisy unverified chat widgets onto brochure sites, WPCarePoint builds selective, well-bounded AI capabilities—such as grounded knowledge search, structured brief assistants, and guided triage—grounded strictly in your approved content.',
    primaryCtaLabel: 'Discuss AI Feature Scope',
    secondaryCtaLabel: 'View AI Boundaries',
    secondaryCtaTargetId: 'ai-web-guardrails',
    imageUrl: '/src/assets/images/service_ai_web_systems_1795679596000.jpg',
    imageAlt:
      'Architectural frosted glass AI node connected cleanly to structured website geometry in coastal teal',
    imageCaption: 'Grounded AI website capabilities · Scoped per brief with UK GDPR discipline',
    standards: [
      { label: 'Core Principle', value: 'Grounded in Approved Copy' },
      { label: 'Governance Rule', value: 'Human Approval Gates' },
      { label: 'Data Hygiene', value: 'UK GDPR Minimisation' },
      { label: 'Scope Honesty', value: 'Bespoke — Never Default Bloat' },
    ],
  },
  jumpLinks: [
    { label: 'Overview', targetId: 'service-intro' },
    { label: 'Suitability', targetId: 'ai-web-suitability' },
    { label: 'Guardrails', targetId: 'ai-web-guardrails' },
    { label: 'Use Cases', targetId: 'ai-web-capabilities' },
    { label: 'FAQ', targetId: 'service-faq' },
    { label: 'Enquire', targetId: 'contact' },
  ],
  sectionOrder: [
    'intro',
    'suitability',
    'problems',
    'capabilities',
    'technical',
    'process',
    'whyChoose',
  ],
  capabilitiesLayout: 'grid-2x2',
  introSection: {
    id: 'service-intro',
    eyebrow: 'Sensible AI on Modern Websites',
    title: 'Useful website assistance without hype, hallucinations, or loss of control.',
    paragraphs: [
      'A great deal of modern marketing treats "AI-powered website" as adding an unconstrained chat bubble that guesses pricing, invents policies, or annoys visitors who simply want a phone number or service page.',
      'WPCarePoint takes an engineering-first approach. We start with fast, intuitive navigation and clear written copy—because clean UX outperforms gimmicks every time. Where AI genuinely adds measurable visitor or team value (for example, searching large technical product catalogues, pre-organising complex project briefs, or drafting internal summaries for staff review), we architect it cleanly around strict server boundaries and verified source documents.',
      'Crucially, AI capabilities are individually scoped add-ons tailored to genuine use cases—never claimed as autonomous self-running platforms or bundled unnecessarily into every client site.',
    ],
    asideEyebrow: 'Responsible Development Policy',
    asideTitle: 'Clear governance across every AI-assisted feature',
    asidePoints: [
      {
        title: 'No Autonomous Unmonitored Promises',
        detail:
          'Customer-facing outputs stay constrained to verified documentation and never make binding pricing or legal commitments on your behalf.',
      },
      {
        title: 'Not Every Website Needs AI',
        detail:
          'If clean filtering, crisp FAQ architecture, or straightforward email scoping serves visitors faster, we tell you honestly upfront.',
      },
      {
        title: 'Protected Server API Calls',
        detail:
          'Model keys, rate limits, and prompt instructions remain secured server-side with UK GDPR personal data minimisation.',
      },
    ],
  },
  suitabilitySection: {
    id: 'ai-web-suitability',
    eyebrow: 'Where AI Website Features Make Sense',
    title: 'Distinguishing high-value interactive guidance from unnecessary novelty.',
    description:
      'Evaluating whether a scoped AI website feature genuinely helps UK visitors reach clear outcomes faster.',
    goodFitTitle: 'Valuable use cases we support:',
    goodFit: [
      {
        title: 'Large Documentation, Policy, or Specification Libraries',
        detail:
          'Websites where customers hunt through extensive PDFs, technical sheets, or support articles and benefit from grounded semantic search with source links.',
      },
      {
        title: 'Complex Multi-Parameter Project Briefs',
        detail:
          'Service firms whose prospects struggle to describe technical needs cleanly—assisted by structured guided brief preparation reviewed before submission.',
      },
      {
        title: 'Editorial Drafting & Content Triage Helpers',
        detail:
          'Internal admin helpers assisting staff with summary generation, tagging, or draft structuring subject to human sign-off prior to publishing.',
      },
    ],
    considerOtherTitle: 'Compare related WPCarePoint services:',
    considerOther: [
      {
        label: 'AI & Business Automation',
        routePath: '/services/ai-business-automation/',
        note: 'Choose this track for back-office CRM workflows, email triage, and operational integrations rather than frontend UX features.',
      },
      {
        label: 'SEO & AI Search Optimisation',
        routePath: '/services/ai-search-optimisation/',
        note: 'Explore how external AI tools (ChatGPT, Gemini, Claude) read and cite your website content accurately.',
      },
      {
        label: 'Custom Web Solutions & Integrations',
        routePath: '/services/custom-web-solutions-integrations/',
        note: 'Best when deterministic calculators, filters, or clean REST API workflows solve the problem faster without an LLM.',
      },
    ],
  },
  problemsSection: {
    id: 'ai-web-guardrails',
    eyebrow: 'Risks & Practical Guardrails',
    title: 'Designing out common AI website pitfalls before writing a line of code.',
    description:
      'Public-facing AI tools carry reputational and compliance risks if engineered carelessly. Every feature addresses four clear controls.',
    layout: 'guardrail-cards',
    items: [
      {
        index: '01.',
        problem: 'Inaccurate Answers & Invented Commitments',
        impact:
          'Unbounded language models may invent nonexistent services, wrong VAT rules, or false lead times that create commercial disputes.',
        solution:
          'Restrict knowledge tools strictly to grounded approved documents with explicit citations and safe fallback prompts to contact@wpcarepoint.co.uk.',
        boundaryNote: 'Grounded retrieval + safe fallback',
      },
      {
        index: '02.',
        problem: 'UK GDPR & Excess Personal Data Leakage',
        impact:
          'Encouraging users to paste confidential files or personal records into unvetted external widgets breaches data minimisation hygiene.',
        solution:
          'Scope inputs cleanly to non-sensitive query criteria, apply PII filtering rules, and configure enterprise API settings excluding model training.',
        boundaryNote: 'UK GDPR data minimisation',
      },
      {
        index: '03.',
        problem: 'Runaway Token Costs & Widget Performance Drag',
        impact:
          'Unthrottled chat widgets slow down mobile First Contentful Paint and leave API billing exposed to automated bot scraping.',
        solution:
          'Load interactive components asynchronously on user intent and enforce strict server-side rate limits and cost caps.',
        boundaryNote: 'Core Web Vitals protected',
      },
      {
        index: '04.',
        problem: 'Autonomous Publishing Without Editorial Sign-Off',
        impact:
          'Allowing automated content generators to push unchecked articles live hurts tone, British spelling accuracy, and search quality.',
        solution:
          'Keep every content or workflow output strictly in draft/review status requiring explicit human approval.',
        boundaryNote: 'Human-in-the-loop required',
      },
    ],
  },
  capabilitiesSection: {
    id: 'ai-web-capabilities',
    eyebrow: 'Practical Capabilities We Engineer',
    title: 'Four bounded AI-supported website capabilities tailored to real briefs.',
    description:
      'Each capability is scoped transparently around approved content sources, API limits, and deterministic fallbacks.',
    items: [
      {
        index: '01.',
        title: 'Grounded Website Knowledge & Product Search',
        subtitle: 'Citation-Linked Retrieval · Approved Content Only',
        summary:
          'Helping visitors query structured FAQs, technical guides, or product attributes and receive concise answers linked directly to source pages.',
        points: [
          'Scoped strictly to verified website markdown, pages, or documentation sets',
          'Direct links back to canonical pages so users read complete context',
          'Honest "not found — email our team" fallback rather than guessing',
        ],
      },
      {
        index: '02.',
        title: 'Structured Enquiry & Brief Assistants',
        subtitle: 'Guided Qualification · Clean Summary Output',
        summary:
          'Helping prospective UK buyers clarify website scope, goals, or support symptoms into a structured written summary ready for review.',
        points: [
          'Conversational or stepped UI guiding vague notes into actionable technical fields',
          'Visitor previews and confirms their summary prior to emailing or submitting',
          'Clear human handling once received—no fake human personas',
        ],
      },
      {
        index: '03.',
        title: 'Internal Team & Editorial Drafting Tools',
        subtitle: 'Role-Scoped Helpers · Human Sign-Off',
        summary:
          'Custom admin utilities helping internal editors summarise long technical notes, check tone consistency, or structure metadata drafts.',
        points: [
          'Strict draft-only workflows enforcing human review before publishing',
          'Tailored British English (en-GB) style rules and terminology checks',
          'Clean separation between internal tooling and public visitor pages',
        ],
      },
      {
        index: '04.',
        title: 'Hybrid WordPress & React / Next.js Integration',
        subtitle: 'Server API Routes · Deterministic Fallbacks',
        summary:
          'Embedding lightweight interactive AI features cleanly inside modern React/Next.js frontends or custom WordPress integrations without slowing initial loads.',
        points: [
          'On-demand loading protecting Core Web Vitals and accessibility',
          'Configurable server-side quotas, timeouts, and clean degraded states',
          'No proprietary lock-in to closed third-party SaaS platforms',
        ],
      },
    ],
  },
  technicalSection: {
    id: 'ai-web-technical',
    eyebrow: 'Engineering & Transparency Standards',
    title: 'Built cleanly on deterministic code, clear disclosure, and controllable APIs.',
    description:
      'When visitors interact with an AI-assisted helper, honesty and fallback reliability come first.',
    pillars: [
      {
        id: 'clear-ai-disclosure',
        index: '01.',
        eyebrow: 'Transparent User Experience',
        title: 'Clear labelling, keyboard accessibility, and instant human routes',
        summary:
          'Visitors should always know when an interactive tool uses automated assistance—and always have an immediate direct route to email contact@wpcarepoint.co.uk.',
        bullets: [
          'Unambiguous interface labelling without pretending to be a live human operator',
          'Full WCAG 2.2 AA keyboard focus, screen-reader landmarks, and clear status cues',
          'Deterministic links to core services and direct email alongside every helper',
        ],
        calloutLabel: 'Visitor Trust',
        calloutText: 'Transparency and human fallback build confidence cleanly.',
      },
      {
        id: 'controllable-model-layer',
        index: '02.',
        eyebrow: 'Modular Architecture',
        title: 'Swappable model endpoints with usage controls and logging',
        summary:
          'API ecosystems evolve rapidly. We isolate model adapters on server endpoints so providers, quotas, and prompts remain easy to update or pause.',
        bullets: [
          'Clean abstraction layer avoiding deep lock-in to one model version',
          'Hard daily/monthly rate limits preventing unexpected API spend spikes',
          'Feature toggle allowing immediate disabling back to standard deterministic UI',
        ],
        calloutLabel: 'Cost & Risk Control',
        calloutText: 'Bounded usage caps and instant fallback keep operational risk low.',
      },
    ],
  },
  processSection: {
    id: 'delivery-process',
    eyebrow: 'Implementation Workflow',
    title: 'Four disciplined stages from feasibility check to supervised release.',
    description:
      'Every AI website feature begins by verifying whether AI is genuinely needed—then validating accuracy safely before launch.',
    steps: [
      {
        step: '01.',
        title: 'Use-Case & Data Audit',
        summary:
          'We assess the visitor problem, source documents available, UK GDPR boundaries, and whether a simpler deterministic UI works better.',
        deliverable: 'Written feasibility & risk note',
      },
      {
        step: '02.',
        title: 'Guardrail & Prompt Architecture',
        summary:
          'Knowledge boundaries, strict fallback rules, rate caps, and human approval steps are specified clearly before building.',
        deliverable: 'Guardrail & API spec',
      },
      {
        step: '03.',
        title: 'Staging Build & Adversarial QA',
        summary:
          'We test valid queries, out-of-scope questions, edge inputs, and API timeouts in staging to confirm polite, safe behaviour.',
        deliverable: 'Adversarial QA sign-off',
      },
      {
        step: '04.',
        title: 'Monitored Launch & Controls',
        summary:
          'Features launch cleanly with documentation showing team editors how to update source content or adjust limits safely.',
        deliverable: 'Live integration & handover guide',
      },
    ],
  },
  whyChooseSection: {
    id: 'why-wpcarepoint-ai-web',
    eyebrow: 'Why Trust WPCarePoint',
    title: 'Measured digital agency realism instead of inflated AI promises.',
    description:
      'We build maintainable websites first—adding focused AI tools only where they measurably improve clarity and service quality.',
    items: [
      {
        index: '01.',
        title: 'Zero Fictional "Autonomous Platform" Claims',
        summary:
          'We never oversell closed proprietary AI platforms as turnkey live products—everything built is concrete, verifiable engineering for your own site.',
        standard: 'Honest Scope Only',
      },
      {
        index: '02.',
        title: 'Human Governance Built In',
        summary:
          'Approval gates, grounded citations, and visible fallback contacts protect brand reputation and client accuracy.',
        standard: 'Human-Approved Outputs',
      },
      {
        index: '03.',
        title: 'Core Web Vitals Safe',
        summary:
          'AI widgets never block initial landing page paint or inflate mobile JavaScript bundles unnecessarily.',
        standard: 'Fast First Paint Preserved',
      },
      {
        index: '04.',
        title: 'Full UK Regulatory Awareness',
        summary:
          'Data minimisation, privacy disclosures, and WCAG 2.2 AA accessibility come built into the specification.',
        standard: 'UK GDPR & WCAG 2.2 AA',
      },
    ],
  },
  faqSection: {
    id: 'service-faq',
    eyebrow: 'AI-Powered Website Development FAQ',
    title: 'Clear questions on practical AI features, costs, and safeguards.',
    description:
      'Direct answers separating sensible engineering from industry hype.',
    faqs: [
      {
        id: 'aiweb-faq-1',
        question: 'Does every website built by WPCarePoint include live AI features automatically?',
        answer:
          'No. Standard business and eCommerce websites should stay lean, predictable, and focused on clarity and speed. AI-assisted features—such as grounded site search or structured enquiry helpers—are individually scoped only when they serve a clear, practical purpose for your visitors or team.',
      },
      {
        id: 'aiweb-faq-2',
        question: 'How do you stop a website AI assistant from making up false answers or prices?',
        answer:
          'We bind retrieval features strictly to curated, approved website content, enforce explicit system rules forbidding speculation outside source material, display direct page citations, and configure immediate fallback prompts to email contact@wpcarepoint.co.uk when a question sits outside verified scope.',
      },
      {
        id: 'aiweb-faq-3',
        question: 'Are ongoing AI API usage fees included in website development?',
        answer:
          'Third-party model API usage is billed directly under your own nominated provider account with clear rate limits configured in code, ensuring complete transparency and zero hidden markup.',
      },
      {
        id: 'aiweb-faq-4',
        question: 'Can you add a scoped AI search or enquiry helper to an existing WordPress site?',
        answer:
          'Yes, in many cases via a clean custom endpoint integrated alongside WordPress without replacing your entire theme—subject to inspecting your current hosting and technical setup first.',
      },
      {
        id: 'aiweb-faq-5',
        question: 'How should we evaluate whether AI fits our upcoming website project?',
        answer:
          'Email your website URL and describe the specific visitor bottleneck or content workflow you hope to improve to contact@wpcarepoint.co.uk. We will give an honest view on whether deterministic UI or a scoped AI tool is the cleaner choice.',
      },
    ],
  },
  relatedSection: {
    eyebrow: 'Connected AI & Web Services',
    title: 'See how AI features fit into broader automation and search clarity',
    items: [
      {
        eyebrow: 'Operational Workflows',
        title: 'AI & Business Automation',
        description:
          'Connect website enquiries, CRM pipelines, and back-office admin safely with human approval checkpoints.',
        ctaLabel: 'Explore Business Automation',
        targetType: 'route',
        href: '/services/ai-business-automation/',
      },
      {
        eyebrow: 'Bespoke Code',
        title: 'Custom Web Solutions & Integrations',
        description:
          'Deterministic REST API bridges, interactive calculators, and tailored WordPress or React modules.',
        ctaLabel: 'Explore Custom Solutions',
        targetType: 'route',
        href: '/services/custom-web-solutions-integrations/',
      },
      {
        eyebrow: 'External Discovery',
        title: 'SEO & AI Search Optimisation',
        description:
          'Help external AI assistants (ChatGPT, Gemini, Claude) and Google understand your services accurately.',
        ctaLabel: 'Explore AI Search Readiness',
        targetType: 'route',
        href: '/services/ai-search-optimisation/',
      },
    ],
  },
  ctaSection: {
    eyebrow: 'Explore a Scoped AI Feature',
    headline: 'Test whether a bounded AI capability genuinely fits your website.',
    description:
      'Send your website URL and the specific user journey or content search challenge to contact@wpcarepoint.co.uk for candid engineering feedback.',
    mailtoSubject: 'AI-Powered Website Development Enquiry',
    primaryButtonLabel: 'Send AI Scope Enquiry',
  },
};

export const BRANDING_IDENTITY_PAGE_DATA: DedicatedServicePageConfig = {
  id: 'branding-brand-identity',
  routePath: '/services/branding-brand-identity/',
  canonicalUrl: 'https://wpcarepoint.co.uk/services/branding-brand-identity/',
  metaTitle: 'Branding & Web Brand Identity UK | Accessible Visual Systems – WPCarePoint',
  metaDescription:
    'Coherent digital branding and web visual identity systems for UK businesses. Accessible WCAG 2.2 AA colour palettes, crisp typography hierarchy, UI consistency, and design tokens.',
  serviceSchemaName: 'Branding & Brand Identity',
  breadcrumbLabel: 'Branding & Brand Identity',
  hero: {
    eyebrow: 'Supporting Service · Digital Visual Systems (UK)',
    headline: 'Coherent web brand identity built for legibility, credibility, and consistent UI.',
    description:
      'Visitors judge the reliability of a British service firm within seconds of opening your website. WPCarePoint establishes disciplined digital visual systems—pairing accessible colour palettes, structured typography, and clean UI rules tailored directly to web and eCommerce delivery.',
    primaryCtaLabel: 'Discuss Visual Direction',
    secondaryCtaLabel: 'Explore Visual Pillars',
    secondaryCtaTargetId: 'brand-capabilities',
    imageUrl: '/src/assets/images/service_brand_identity_1795679596599.jpg',
    imageAlt:
      'Curated architectural material swatches, typographic grids, and coastal teal identity palette on warm stone',
    imageCaption: 'Web-first visual consistency · WCAG 2.2 AA contrast & typographic craft',
    standards: [
      { label: 'Accessibility', value: 'WCAG 2.2 AA Contrast Verified' },
      { label: 'Core Focus', value: 'Digital & Web Identity Systems' },
      { label: 'Typography', value: 'Readable Cross-Device Scales' },
      { label: 'Handover Output', value: 'Clean Reusable UI Tokens' },
    ],
  },
  jumpLinks: [
    { label: 'Overview', targetId: 'service-intro' },
    { label: 'Capabilities', targetId: 'brand-capabilities' },
    { label: 'Suitability', targetId: 'brand-suitability' },
    { label: 'Design Standards', targetId: 'brand-technical' },
    { label: 'Problems Fixed', targetId: 'brand-problems' },
    { label: 'FAQ', targetId: 'service-faq' },
    { label: 'Enquire', targetId: 'contact' },
  ],
  sectionOrder: [
    'intro',
    'capabilities',
    'suitability',
    'technical',
    'problems',
    'process',
    'whyChoose',
  ],
  capabilitiesLayout: 'bento-featured',
  introSection: {
    id: 'service-intro',
    eyebrow: 'Visual Trust on the Web',
    title: 'Bridging the gap between scattered assets and a composed digital presence.',
    paragraphs: [
      'Many capable UK businesses possess strong real-world reputations undermined online by fragmented visual presentation: clashing stock templates, illegible low-contrast buttons, inconsistent font pairings across pages, and generic layouts that look indistinguishable from competitors.',
      'Our Branding & Brand Identity work concentrates specifically on practical digital and web identity—turning either a fresh starting brief or existing brand assets into a disciplined system of colour tokens, type scales, spacing geometry, iconography rules, and WordPress / React UI components.',
      'We are transparent about studio boundaries: we do not operate as a traditional print, packaging, or offline advertising agency, and we never fabricate brand awards or fictional client portfolios. When a project aligns cleanly with modern web architecture and accessibility standards, visual direction and frontend code work seamlessly together.',
    ],
    asideEyebrow: 'Honest Studio Boundaries',
    asideTitle: 'What web-focused brand identity covers cleanly',
    asidePoints: [
      {
        title: 'Engineered for Live Browsers, Not Just PDFs',
        detail:
          'Colours and type sizes are validated inside real responsive web viewports (320px to 1440px) rather than static slides that fail contrast checks.',
      },
      {
        title: 'Respecting Existing Brand Assets',
        detail:
          'Already have an established logo or guidelines? We refine and adapt them respectfully for accessible web and WooCommerce UI without forcing unnecessary rebrands.',
      },
      {
        title: 'Direct Translation Into Code',
        detail:
          'Every typographic scale, spacing step, and border style maps straight into clean Tailwind tokens or WordPress block theme JSON.',
      },
    ],
  },
  capabilitiesSection: {
    id: 'brand-capabilities',
    eyebrow: 'Core Visual Identity Capabilities',
    title: 'Practical web identity foundations built to hold together across every page.',
    description:
      'From colour accessibility and typography to reusable WordPress block styles, every element reinforces calm professionalism.',
    items: [
      {
        index: '01.',
        title: 'Digital Visual Direction & Colour Architecture',
        subtitle: 'Primary Tokens · Neutral Surfaces · WCAG 2.2 AA',
        summary:
          'Establishing restrained, authoritative brand palettes calibrated specifically for long-form screen reading, clear primary actions, and strict WCAG 2.2 AA contrast compliance.',
        points: [
          'Defined primary, deep contrast, light surface, and border token pairings',
          'Verified text-to-background contrast ratios across light and dark bands',
          'Eliminating clashing saturation or inaccessible trendy low-contrast greys',
        ],
      },
      {
        index: '02.',
        title: 'Typographic Hierarchy & British Editorial Clarity',
        subtitle: 'Display Scale · Readable Body · Tabular Figures',
        summary:
          'Pairing crisp display headings with comfortable body typography so complex service explanations scan effortlessly across desktops and smartphones.',
        points: [
          'Structured H1–H4 fluid proportions preventing mobile wrapping awkwardness',
          'Monospace indexation and tabular numbers suited to transparent pricing and scopes',
          'Clean web-font performance handling preventing layout flashes on load',
        ],
      },
      {
        index: '03.',
        title: 'Component & Block Pattern Consistency',
        subtitle: 'Buttons · Cards · Navigation · Forms',
        summary:
          'Documenting unified card radii, hairline borders, button hierarchies, and icon sizing so new pages added later never break visual harmony.',
        points: [
          'WordPress theme.json presets or Tailwind v4 design token configurations',
          'Standardised hero proportions, FAQ accordions, and subtle CTA structures',
          'Cohesive visual rhythm spanning service pages, Contact, and store flows',
        ],
      },
      {
        index: '04.',
        title: 'Imagery & Brand Presentation Guidelines',
        subtitle: 'Art Direction · Cropping · SVG Craft',
        summary:
          'Establishing clear photographic mood, architectural framing, aspect ratios, and restrained vector styling across every service track.',
        points: [
          'Consistent aspect ratio and surface framing avoiding awkward cropped thumbnails',
          'Cohesive editorial photography/illustration direction matching UK brand tone',
          'Clean vector brand marks and favicon deliverables engineered for sharp retina display',
        ],
      },
    ],
  },
  suitabilitySection: {
    id: 'brand-suitability',
    eyebrow: 'Who Benefit Most From Web Identity Work',
    title: 'Ideal for UK firms establishing credibility or tidying fragmented sites.',
    description:
      'Whether refreshing a dated site or unifying a growing WooCommerce store, clear visual systems save time on every future page.',
    goodFitTitle: 'Strong fit for:',
    goodFit: [
      {
        title: 'UK Service Businesses Outgrowing Generic Templates',
        detail:
          'Consultancies, trades, and B2B specialists ready to replace off-the-shelf multipurpose themes with a distinct, composed visual presence.',
      },
      {
        title: 'Organisations Merging Old Pages & New Stores',
        detail:
          'Companies whose website, WooCommerce shop, and landing pages look like three separate websites stitched together.',
      },
      {
        title: 'Teams Commissioning a New Build or Redesign',
        detail:
          'Businesses wanting clean visual direction and reusable tokens baked directly into a new WordPress or React codebase.',
      },
    ],
    considerOtherTitle: 'Related tracks supporting visual & site quality:',
    considerOther: [
      {
        label: 'Website Design & Development',
        routePath: '/services/website-development/',
        note: 'Turn agreed visual direction directly into custom WordPress blocks or modern React / Next.js code.',
      },
      {
        label: 'eCommerce & WooCommerce Development',
        routePath: '/services/ecommerce-development/',
        note: 'Apply consistent visual clarity across UK product cards, baskets, and Stripe checkouts.',
      },
      {
        label: 'Digital Marketing & Online Growth',
        routePath: '/services/digital-marketing-online-growth/',
        note: 'Pair clear visual hierarchy with conversion-focused messaging and search alignment.',
      },
    ],
  },
  technicalSection: {
    id: 'brand-technical',
    eyebrow: 'Web Craft Principles',
    title: 'Design decisions validated directly against accessibility, speed, and usability.',
    description:
      'Visual craft only succeeds on the web when it loads smoothly and reads comfortably for every user.',
    pillars: [
      {
        id: 'wcag-visual-discipline',
        index: '01.',
        eyebrow: 'Accessibility-First Aesthetics',
        title: 'Visual polish that never compromises readability or focus states',
        summary:
          'Decorative gradients and faint grey copy look sleek in mockups until real customers struggle to read them outdoors on a phone.',
        bullets: [
          'Minimum 4.5:1 body text contrast and crisp 3:1 UI component boundaries',
          'Visible keyboard focus rings harmoniously matched to the primary accent token',
          'Generous 44px minimum interactive touch targets built directly into buttons and links',
        ],
        calloutLabel: 'Inclusive Baseline',
        calloutText: 'WCAG 2.2 AA accessibility shapes palette choices from step one.',
      },
      {
        id: 'fast-design-tokens',
        index: '02.',
        eyebrow: 'Code-Ready Implementation',
        title: 'Design systems lightweight enough to keep pages genuinely fast',
        summary:
          'Visual elevation relies on clean proportions, subtle borders, and crisp typography—not bloated background videos or heavy animation libraries.',
        bullets: [
          'Concise font weights keeping typography payloads lean on UK mobile networks',
          'CSS-native borders, grids, and transitions respecting prefers-reduced-motion',
          'WordPress Gutenberg block patterns preventing editors from accidentally breaking brand styles',
        ],
        calloutLabel: 'Zero Bloat',
        calloutText: 'Refined visual authority without compromising Core Web Vitals.',
      },
    ],
  },
  problemsSection: {
    id: 'brand-problems',
    eyebrow: 'Visual & Presentation Problems We Fix',
    title: 'Eliminating subtle friction that undermines visitor trust.',
    description:
      'Resolving four widespread presentation flaws spotted on small-to-medium UK websites.',
    layout: 'challenge-grid',
    items: [
      {
        index: '01.',
        problem: 'Inconsistent Fonts, Colours & Spacing Across Pages',
        impact:
          'Pages edited over multiple years display four button styles and mixed fonts, making established firms appear disorganised.',
        solution:
          'Establish one concise design-token set locked cleanly into theme styles and reusable components.',
      },
      {
        index: '02.',
        problem: 'Unreadable Low-Contrast Copy & Cluttered Banners',
        impact:
          'Text floating directly over busy stock photographs without sufficient scrim or contrast pushes visitors away quickly.',
        solution:
          'Use clean structured grids, light breathable editorial surfaces, and verified contrast pairs.',
      },
      {
        index: '03.',
        problem: 'Dated Template Look Eroding Service Positioning',
        impact:
          'Generic multipurpose layouts make specialist British businesses look identical to low-effort template sites.',
        solution:
          'Introduce deliberate typographic hierarchy, measured whitespace, and domain-relevant visual framing.',
      },
      {
        index: '04.',
        problem: 'Brand Assets Trapped in Static PDFs Staff Cannot Use',
        impact:
          'Teams receive decorative slide decks with no WordPress blocks or practical templates for everyday publishing.',
        solution:
          'Deliver practical web tokens, WordPress block guidelines, and ready-to-use UI components.',
      },
    ],
  },
  processSection: {
    id: 'delivery-process',
    eyebrow: 'Our Visual Identity Approach',
    title: 'Four collaborative stages moving straight into live browser prototypes.',
    description:
      'Grounded in practical UK commercial positioning without months of abstract agency workshops.',
    steps: [
      {
        step: '01.',
        title: 'Audit & Positioning Review',
        summary:
          'We review existing logos, colours, competitor tone, and audience expectations to set clear aesthetic and accessibility priorities.',
        deliverable: 'Visual direction summary',
      },
      {
        step: '02.',
        title: 'Palette & Typography Direction',
        summary:
          'We define WCAG-tested colour tokens, font pairings, spacing scales, and photography mood directly in browser-readable form.',
        deliverable: 'Token & typography sheet',
      },
      {
        step: '03.',
        title: 'UI Component Alignment',
        summary:
          'Hero sections, service cards, callout rules, navigation, and form patterns are styled cleanly across desktop and narrow mobile screens.',
        deliverable: 'Live interactive component styling',
      },
      {
        step: '04.',
        title: 'Theme & Team Handover',
        summary:
          'Agreed styles are embedded cleanly into WordPress theme.json or Tailwind stylesheets alongside clear editorial usage notes.',
        deliverable: 'Production tokens & usage guide',
      },
    ],
  },
  whyChooseSection: {
    id: 'why-wpcarepoint-branding',
    eyebrow: 'Why WPCarePoint',
    title: 'Visual clarity shaped by people who build real websites daily.',
    description:
      'Every aesthetic choice answers to mobile usability, accessibility, and clear commercial communication.',
    items: [
      {
        index: '01.',
        title: 'Built Directly for Web Reality',
        summary:
          'No impractical poster designs that break on 320px smartphones or stall page loading speed.',
        standard: 'Responsive-First Craft',
      },
      {
        index: '02.',
        title: 'Seamless Path Into Engineering',
        summary:
          'Visual tokens flow straight into our custom WordPress block and React / Next.js builds without translation loss.',
        standard: 'Design-to-Code Unity',
      },
      {
        index: '03.',
        title: 'Accessible By Default',
        summary:
          'WCAG 2.2 AA colour contrast and clean typographic scaling protect legibility for all UK visitors.',
        standard: 'WCAG 2.2 AA',
      },
      {
        index: '04.',
        title: 'Zero Fabricated Case Studies',
        summary:
          'Transparent capabilities focused purely on practical quality for your actual organisation.',
        standard: 'Honest Representation',
      },
    ],
  },
  faqSection: {
    id: 'service-faq',
    eyebrow: 'Branding & Identity FAQ',
    title: 'Practical questions on web identity scope and deliverables.',
    description:
      'Clarity on what we deliver, working with existing logos, and connecting design to build.',
    faqs: [
      {
        id: 'brand-faq-1',
        question: 'Do we need a full logo redesign if we already have an established company logo?',
        answer:
          'No. If your existing mark works cleanly, we build around it—standardising web colours, fixing contrast accessibility, refining typography hierarchy, and creating cohesive UI components across your website and store.',
      },
      {
        id: 'brand-faq-2',
        question: 'Does WPCarePoint handle print materials, packaging, or offline signage?',
        answer:
          'Our Branding & Brand Identity service concentrates specifically on digital visual systems, web typography, UI colour tokens, and online brand presentation. If your business also needs heavy physical print packaging, we focus on keeping your web identity aligned with any print assets supplied.',
      },
      {
        id: 'brand-faq-3',
        question: 'Can Branding & Identity be commissioned together with a Website Redesign?',
        answer:
          'Yes—combining digital visual identity directly with Website Design & Development or eCommerce Development is often the smoothest workflow, because typography, colour tokens, and WordPress block patterns are engineered cleanly together from day one.',
      },
      {
        id: 'brand-faq-4',
        question: 'What files or guidelines do we receive once complete?',
        answer:
          'You receive clear web token specifications (hex values, WCAG contrast notes, font scale rules), vector mark refinements where scoped, and ready-to-use component styling implemented directly inside your staging or live codebase.',
      },
      {
        id: 'brand-faq-5',
        question: 'How do we discuss a visual refresh for our existing website?',
        answer:
          'Email your current website URL, any existing brand guidelines or notes on what feels outdated, and your commercial goals to contact@wpcarepoint.co.uk.',
      },
    ],
  },
  relatedSection: {
    eyebrow: 'Connected Design & Build Tracks',
    title: 'Turn coherent brand identity into a fast website or online store',
    items: [
      {
        eyebrow: 'Core Web Builds',
        title: 'Website Design & Development',
        description:
          'Custom WordPress block architecture and React / Next.js platforms built cleanly around your visual tokens.',
        ctaLabel: 'Explore Web Development',
        targetType: 'route',
        href: '/services/website-development/',
      },
      {
        eyebrow: 'Online Storefronts',
        title: 'eCommerce & WooCommerce Development',
        description:
          'Consistent product presentation, clean category UX, and trusted UK checkout styling.',
        ctaLabel: 'Explore eCommerce Builds',
        targetType: 'route',
        href: '/services/ecommerce-development/',
      },
      {
        eyebrow: 'Conversion Clarity',
        title: 'Digital Marketing & Online Growth',
        description:
          'Align coherent visual positioning with search visibility and structured buyer conversion paths.',
        ctaLabel: 'Explore Online Growth',
        targetType: 'route',
        href: '/services/digital-marketing-online-growth/',
      },
    ],
  },
  ctaSection: {
    eyebrow: 'Discuss Your Visual Presence',
    headline: 'Give your UK website the visual clarity and consistency it deserves.',
    description:
      'Share your existing URL and brand notes by email to contact@wpcarepoint.co.uk. We review your current presentation candidly and respond in writing.',
    mailtoSubject: 'Branding & Brand Identity Enquiry',
    primaryButtonLabel: 'Send Branding Enquiry',
  },
};

export const DIGITAL_MARKETING_GROWTH_PAGE_DATA: DedicatedServicePageConfig = {
  id: 'digital-marketing-online-growth',
  routePath: '/services/digital-marketing-online-growth/',
  canonicalUrl: 'https://wpcarepoint.co.uk/services/digital-marketing-online-growth/',
  metaTitle: 'Digital Marketing & Online Growth UK | Conversion & Search Support – WPCarePoint',
  metaDescription:
    'Honest digital marketing and online growth support aligned cleanly with UK web engineering. Conversion-focused service pages, SEO coordination, landing clarity, and PECR-safe tracking.',
  serviceSchemaName: 'Digital Marketing & Online Growth',
  breadcrumbLabel: 'Digital Marketing & Online Growth',
  hero: {
    eyebrow: 'Supporting Service · Digital Growth & Conversion Support (UK)',
    headline: 'Digital growth built on clearer websites, structured visibility, and honest measurement.',
    description:
      'Sending visitors to confusing, slow, or outdated landing pages wastes acquisition effort. WPCarePoint supports UK businesses by aligning organic search structure, conversion-focused service copy, and cohesive growth campaigns—grounded cleanly without inflated ROI guarantees.',
    primaryCtaLabel: 'Discuss Growth Support',
    secondaryCtaLabel: 'Challenges Addressed',
    secondaryCtaTargetId: 'growth-problems',
    imageUrl: '/src/assets/images/service_digital_growth_1795679597182.jpg',
    imageAlt:
      'Layered minimalist growth architecture contours in deep coastal teal and bright cyan on pale limestone',
    imageCaption: 'Structured online growth · Conversion clarity, SEO alignment & PECR hygiene',
    standards: [
      { label: 'Core Strength', value: 'Search + Landing Conversion' },
      { label: 'Messaging Tone', value: 'Natural British English (en-GB)' },
      { label: 'Privacy Standard', value: 'UK GDPR & PECR Compliant' },
      { label: 'Honest Metrics', value: 'Zero Fabricated Lead Claims' },
    ],
  },
  jumpLinks: [
    { label: 'Overview', targetId: 'service-intro' },
    { label: 'Problems Fixed', targetId: 'growth-problems' },
    { label: 'Suitability', targetId: 'growth-suitability' },
    { label: 'Capabilities', targetId: 'growth-capabilities' },
    { label: 'Technical Alignment', targetId: 'growth-technical' },
    { label: 'FAQ', targetId: 'service-faq' },
    { label: 'Enquire', targetId: 'contact' },
  ],
  sectionOrder: [
    'intro',
    'problems',
    'suitability',
    'capabilities',
    'technical',
    'process',
    'whyChoose',
  ],
  capabilitiesLayout: 'grid-2x2',
  introSection: {
    id: 'service-intro',
    eyebrow: 'Engineering-Led Growth Philosophy',
    title: 'Fixing website clarity and discoverability before chasing volume.',
    paragraphs: [
      'A common trap for growing British organisations is spending budget on external outreach or social posts while their actual destination pages remain unclear, slow on mobile, or awkward to enquire through. Traffic alone never creates sustainable revenue if visitors leave confused.',
      'WPCarePoint approaches Digital Marketing & Online Growth from the website outward: tightening commercial value propositions, refining landing and service page journeys, coordinating Search Engine Optimisation and AI Search readiness, and building clean, privacy-respecting conversion tracking so decisions rest on reality rather than guesswork.',
      'We keep expectations transparent throughout: we do not publish imaginary percentage multipliers, guaranteed monthly lead counts, or exaggerated revenue claims. Instead, we align technical execution, clearer UK messaging, and steady measurable improvements scoped cleanly in writing.',
    ],
    asideEyebrow: 'Transparent Growth Ethics',
    asideTitle: 'What sets practical web growth apart from marketing noise',
    asidePoints: [
      {
        title: 'Conversion-Ready Pages First',
        detail:
          'Every campaign or content push starts by making sure service pages answer buyer questions concisely and present clear next steps.',
      },
      {
        title: 'Coordinated Across Disciplines',
        detail:
          'Technical SEO, visual identity, page speed, and copy clarity reinforce each other instead of sitting in disconnected agency silos.',
      },
      {
        title: 'UK GDPR & PECR Respect',
        detail:
          'Analytics and conversion measurement respect consent rules cleanly without loading bloated invasive marketing scripts.',
      },
    ],
  },
  problemsSection: {
    id: 'growth-problems',
    eyebrow: 'Growth Bottlenecks We Help Solve',
    title: 'Turning disconnected website efforts into a coherent acquisition pathway.',
    description:
      'Addressing the everyday structural gaps that prevent capable UK businesses from converting online attention into enquiries.',
    layout: 'comparison-rows',
    items: [
      {
        index: '01.',
        problem: 'Traffic Arriving on Vague or Slow Pages',
        impact:
          'Interested buyers bounce within seconds when landing pages fail to state services clearly, look dated, or lag on 4G mobile connections.',
        solution:
          'Rewrite and structure landing sections around immediate commercial clarity, supported by fast load hygiene and clean mobile hierarchy.',
        boundaryNote: 'Higher clarity per visit',
      },
      {
        index: '02.',
        problem: 'Disconnected Marketing & Technical SEO Efforts',
        impact:
          'New campaign URLs cannibalise core service pages, ignore canonicals, or launch with thin copy invisible to Google and AI assistants.',
        solution:
          'Plan landing architecture and content updates cohesively alongside core SEO & AI Search taxonomy.',
        boundaryNote: 'Aligned with search structure',
      },
      {
        index: '03.',
        problem: 'Confusing or High-Friction Enquiry Paths',
        impact:
          'Prospects ready to buy cannot locate clear contact pathways, scoping expectations, or trustworthy email response cues.',
        solution:
          'Design distraction-free CTAs, honest pricing/scoping guidance, and intuitive cross-links directing qualified visitors cleanly to Contact.',
        boundaryNote: 'Frictionless enquiry flows',
      },
      {
        index: '04.',
        problem: 'Bloated Third-Party Tracking & Consent Risks',
        impact:
          'Stacking heavy marketing pixels slows down Core Web Vitals and creates PECR consent non-compliance across UK visitors.',
        solution:
          'Keep measurement lightweight, intentional, and properly aligned with UK privacy consent boundaries.',
        boundaryNote: 'Speed & privacy preserved',
      },
    ],
  },
  suitabilitySection: {
    id: 'growth-suitability',
    eyebrow: 'Who This Service Suits Best',
    title: 'Practical online growth support for B2B, local service, and eCommerce firms.',
    description:
      'Designed for UK teams seeking steady technical, search, and conversion alignment rather than reckless ad spend.',
    goodFitTitle: 'Great fit when you want to:',
    goodFit: [
      {
        title: 'Improve Enquiry Conversion From Existing Website Visits',
        detail:
          'Strengthen headlines, service breakdowns, FAQs, and calls to action so visitors understand why and how to work with you.',
      },
      {
        title: 'Launch Focused Campaign or Service Landing Pages',
        detail:
          'Build fast, dedicated UK service or sector landing pages engineered cleanly inside your existing WordPress or React platform.',
      },
      {
        title: 'Connect Organic Search, Copy & Store UX Cohesively',
        detail:
          'Unite SEO improvements, AI search readiness, and conversion UX under one engineering-literate partner.',
      },
    ],
    considerOtherTitle: 'Specific specialist tracks inside WPCarePoint:',
    considerOther: [
      {
        label: 'Search Engine Optimisation (SEO)',
        routePath: '/services/search-engine-optimisation/',
        note: 'Deep dive into crawlability, technical indexation, SXO, and URL structure.',
      },
      {
        label: 'SEO & AI Search Optimisation',
        routePath: '/services/ai-search-optimisation/',
        note: 'Ensure modern AI tools and generative search surfaces interpret your capabilities accurately.',
      },
      {
        label: 'Website Design & Development',
        routePath: '/services/website-development/',
        note: 'Re-architect an entire legacy site cleanly when structural limitations hold growth back.',
      },
    ],
  },
  capabilitiesSection: {
    id: 'growth-capabilities',
    eyebrow: 'Growth Capabilities & Deliverables',
    title: 'Four aligned areas turning website presence into dependable business momentum.',
    description:
      'Each capability pairs practical marketing strategy with hands-on web implementation.',
    items: [
      {
        index: '01.',
        title: 'Conversion-Focused Landing & Service Architecture',
        subtitle: 'Value Propositions · Flow Clarity · Enquiry UX',
        summary:
          'Designing and writing structured service and campaign pages that answer practical buyer objections cleanly and guide prospects toward contacting your team.',
        points: [
          'Clear above-the-fold positioning tailored to UK decision-makers',
          'Logical section pacing pairing capabilities, safeguards, and plain-English FAQs',
          'Clean Contact CTAs and brief-preparation prompts raising enquiry quality',
        ],
      },
      {
        index: '02.',
        title: 'Search, Content & Visibility Coordination',
        subtitle: 'Topic Planning · Internal Linking · AI Readiness',
        summary:
          'Coordinating practical content architecture and service-page improvements alongside Technical SEO and AIO/GEO best practices.',
        points: [
          'Mapping buyer search questions into clear, non-overlapping website pages',
          'Strengthening internal cross-links across core and supporting services',
          'Cohesive metadata, headings, and Schema alignment per new page',
        ],
      },
      {
        index: '03.',
        title: 'eCommerce Storefront & Basket Flow Refinements',
        subtitle: 'Category UX · Product Clarity · Checkout Hygiene',
        summary:
          'Supporting online retailers by removing mobile product discovery friction, clarifying shipping/VAT cues, and keeping checkouts fast.',
        points: [
          'Clear UK delivery timelines, GBP pricing clarity, and mobile filter usability',
          'Reducing unnecessary form steps or distracting banners inside checkout',
          'Clean Schema.org Product data alignment supporting organic retail discovery',
        ],
      },
      {
        index: '04.',
        title: 'Privacy-Aware Measurement & Iterative Updates',
        subtitle: 'PECR Discipline · Staging Checks · Steady Tuning',
        summary:
          'Reviewing genuine page engagement cleanly without invasive tracking bloat, followed by controlled staging refinements.',
        points: [
          'Consent-respecting measurement setups protecting visitor trust and site speed',
          'Practical quarterly or project-based conversion reviews in plain English',
          'Direct technical execution of agreed page updates rather than slide decks',
        ],
      },
    ],
  },
  technicalSection: {
    id: 'growth-technical',
    eyebrow: 'Why Technical Quality Multiplies Growth',
    title: 'Growth support grounded in fast code, clean structure, and compliance.',
    description:
      'Marketing initiatives perform better when page speed, accessibility, and regulatory compliance never act as afterthoughts.',
    pillars: [
      {
        id: 'growth-speed-synergy',
        index: '01.',
        eyebrow: 'Speed & Mobile Responsiveness',
        title: 'Keeping campaign landing pages fast across UK 4G / 5G mobile connections',
        summary:
          'Heavy third-party landing-page builders and unoptimised scripts quietly kill mobile conversion rates. We build landing experiences directly in clean lightweight templates.',
        bullets: [
          'Zero extra bloated landing-page plugins slowing down primary WordPress themes',
          'Mobile-first layout discipline verified down to 320px handsets',
          'Clean image sizing and deferred non-critical embeds protecting Core Web Vitals',
        ],
        calloutLabel: 'Performance Advantage',
        calloutText: 'Faster landing pages keep paid and organic visitors reading instead of bouncing.',
      },
      {
        id: 'growth-compliance-boundaries',
        index: '02.',
        eyebrow: 'UK Regulatory Alignment',
        title: 'Respecting UK GDPR, PECR, and honest advertising standards',
        summary:
          'Long-term growth relies on building credibility. We align copy claims, consent mechanics, and data collection cleanly with British standards.',
        bullets: [
          'Truthful, verifiable service descriptions with zero fabricated testimonials or stats',
          'Clear UK GDPR notice and PECR cookie/analytics boundary respect',
          'Accessible WCAG 2.2 AA forms and navigation welcoming every prospective customer',
        ],
        calloutLabel: 'Trusted Reputation',
        calloutText: 'Compliant, candid communication attracts higher-calibre business enquiries.',
      },
    ],
  },
  processSection: {
    id: 'delivery-process',
    eyebrow: 'How Growth Support Runs',
    title: 'Four structured phases turning audits into live website improvements.',
    description:
      'Agreed priorities are drafted, built cleanly in staging, and reviewed together before rollout.',
    steps: [
      {
        step: '01.',
        title: 'Website & Funnel Review',
        summary:
          'We evaluate current landing clarity, search alignment, mobile usability, enquiry steps, and technical friction across key URLs.',
        deliverable: 'Written growth & UX findings',
      },
      {
        step: '02.',
        title: 'Priority Roadmap & Copy Spec',
        summary:
          'We agree which pages, structural changes, or new supporting service views deserve immediate focus—with clear written scope.',
        deliverable: 'Prioritised improvement roadmap',
      },
      {
        step: '03.',
        title: 'Page Build & Conversion Refinement',
        summary:
          'Agreed copy, visual hierarchy, SEO metadata, and CTA updates are implemented cleanly inside your staging environment.',
        deliverable: 'Staging pages ready for review',
      },
      {
        step: '04.',
        title: 'Release & Iterative Follow-Up',
        summary:
          'Approved improvements launch cleanly alongside post-release checks and practical guidance for future content or campaign steps.',
        deliverable: 'Live updates & next-step notes',
      },
    ],
  },
  whyChooseSection: {
    id: 'why-wpcarepoint-growth',
    eyebrow: 'Why Partner With WPCarePoint',
    title: 'Hands-on implementation combining web engineering, search, and clarity.',
    description:
      'One straightforward UK partner able to refine strategy, rewrite pages clearly, and implement every technical update cleanly.',
    items: [
      {
        index: '01.',
        title: 'Honest Expectations, Zero Empty Promises',
        summary:
          'We never dangle invented traffic multipliers or guaranteed conversion numbers—we build solid commercial clarity that earns trust.',
        standard: 'Truthful UK Consulting',
      },
      {
        index: '02.',
        title: 'Strategy Backed By Actual Engineering',
        summary:
          'Improvements do not stall waiting on external developers—we write the semantic HTML, WordPress blocks, and Schema ourselves.',
        standard: 'Direct Code Execution',
      },
      {
        index: '03.',
        title: 'Aligned Across SEO, Brand & UX',
        summary:
          'Search structure, accessible visual design, and persuasive British English copy pull in the exact same direction.',
        standard: 'Unified Digital Foundations',
      },
      {
        index: '04.',
        title: 'Flexible Scoping Without Lock-In',
        summary:
          'Engage us for focused landing improvements or coordinate ongoing website growth alongside Care Plans.',
        standard: 'Transparent Written Scope',
      },
    ],
  },
  faqSection: {
    id: 'service-faq',
    eyebrow: 'Digital Marketing & Growth FAQ',
    title: 'Clear answers on scope boundaries, metrics, and practical collaboration.',
    description:
      'Setting honest expectations around website conversion work and growth support.',
    faqs: [
      {
        id: 'growth-faq-1',
        question: 'Can you guarantee a certain number of leads, sales, or ROI percentage?',
        answer:
          'No. Buyer budgets, competitive markets, pricing positioning, and seasonal demand lie outside any agency’s direct control. Any provider guaranteeing exact leads or revenue multipliers is guessing. We commit to sharpening website clarity, technical search eligibility, and conversion pathways cleanly.',
      },
      {
        id: 'growth-faq-2',
        question: 'Does WPCarePoint act primarily as a social media or paid-ads management agency?',
        answer:
          'Our strength is website-anchored online growth: conversion-focused landing page design, Search Engine Optimisation, AI Search readiness, UX improvements, and privacy-respecting tracking alignment. If you run external outreach or ads alongside external specialists, we ensure the landing experience and technical structure convert cleanly.',
      },
      {
        id: 'growth-faq-3',
        question: 'How does Digital Marketing & Online Growth relate to your SEO & Branding pages?',
        answer:
          'Branding ensures your website looks cohesive and trustworthy, SEO strengthens technical crawlability and search intent, and Online Growth connects those foundations to persuasive landing architecture and clear enquiry conversion journeys.',
      },
      {
        id: 'growth-faq-4',
        question: 'Do we have to sign a 12-month marketing retainer?',
        answer:
          'No. We scope projects transparently in writing—whether a targeted overhaul of key service and landing pages or phased incremental improvements matched to your budget.',
      },
      {
        id: 'growth-faq-5',
        question: 'What is the easiest way to start reviewing our website’s growth potential?',
        answer:
          'Email your website URL, primary commercial goals, and where visitors currently seem to drop off to contact@wpcarepoint.co.uk. We review your public site directly and reply in writing.',
      },
    ],
  },
  relatedSection: {
    eyebrow: 'Reinforcing Growth Foundations',
    title: 'Connect landing conversion with search visibility, branding, and web engineering',
    items: [
      {
        eyebrow: 'Search Foundations',
        title: 'Search Engine Optimisation (SEO)',
        description:
          'Technical crawl hygiene, on-page structure, and Search Experience Optimisation (SXO) driving relevant organic visitors.',
        ctaLabel: 'Explore SEO Service',
        targetType: 'route',
        href: '/services/search-engine-optimisation/',
      },
      {
        eyebrow: 'Visual Trust',
        title: 'Branding & Brand Identity',
        description:
          'WCAG-compliant colour palettes, typography hierarchy, and cohesive UI styling raising credibility on landing.',
        ctaLabel: 'Explore Brand Identity',
        targetType: 'route',
        href: '/services/branding-brand-identity/',
      },
      {
        eyebrow: 'AI Visibility',
        title: 'SEO & AI Search Optimisation',
        description:
          'Prepare entity clarity and structured answers so modern AI assistants represent your UK business accurately.',
        ctaLabel: 'Explore AI Search',
        targetType: 'route',
        href: '/services/ai-search-optimisation/',
      },
    ],
  },
  ctaSection: {
    eyebrow: 'Discuss Your Online Growth Priorities',
    headline: 'Improve how visitors find, trust, and enquire through your website.',
    description:
      'Send your website URL and key commercial goals by email to contact@wpcarepoint.co.uk. We review your current conversion flow and respond directly in writing.',
    mailtoSubject: 'Digital Marketing & Online Growth Enquiry',
    primaryButtonLabel: 'Send Growth Enquiry',
  },
};

export const SUPPORTING_SERVICE_PAGES: DedicatedServicePageConfig[] = [
  SEARCH_ENGINE_OPTIMISATION_PAGE_DATA,
  CUSTOM_WEB_SOLUTIONS_PAGE_DATA,
  AI_POWERED_WEBSITE_DEV_PAGE_DATA,
  BRANDING_IDENTITY_PAGE_DATA,
  DIGITAL_MARKETING_GROWTH_PAGE_DATA,
];
