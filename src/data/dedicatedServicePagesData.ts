import type { CarePlanTier, FaqEntry } from './homepageData';

export interface ServiceHeroSpec {
  label: string;
  value: string;
}

export interface ServiceCapabilityCard {
  index: string;
  title: string;
  subtitle: string;
  summary: string;
  points: string[];
}

export interface TechnicalPillarBlock {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  summary: string;
  bullets: string[];
  calloutLabel?: string;
  calloutText?: string;
}

export interface ProcessStageItem {
  step: string;
  title: string;
  summary: string;
  deliverable: string;
}

export interface AdvantageItem {
  index: string;
  title: string;
  summary: string;
  standard: string;
}

export interface RelatedLinkItem {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  targetType: 'route' | 'homeAnchor';
  href: string;
}

export interface DedicatedServiceCareOverview {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  plans: CarePlanTier[];
  quickFixEyebrow: string;
  quickFixTitle: string;
  quickFixDescription: string;
  quickFixButtonLabel: string;
  quickFixSubject: string;
}

export interface DedicatedServicePageConfig {
  id:
    | 'website-development'
    | 'wordpress-speed-optimisation'
    | 'ecommerce-development'
    | 'ai-business-automation'
    | 'website-care-support'
    | 'ai-search-optimisation';
  routePath: string;
  canonicalUrl: string;
  metaTitle: string;
  metaDescription: string;
  serviceSchemaName: string;
  breadcrumbLabel: string;
  hero: {
    eyebrow: string;
    headline: string;
    description: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    secondaryCtaTargetId: string;
    imageUrl: string;
    imageAlt: string;
    imageCaption: string;
    standards: ServiceHeroSpec[];
  };
  jumpLinks: Array<{ label: string; targetId: string }>;
  introSection: {
    id: string;
    eyebrow: string;
    title: string;
    paragraphs: string[];
    asideEyebrow: string;
    asideTitle: string;
    asidePoints: Array<{ title: string; detail: string }>;
  };
  capabilitiesSection: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    items: ServiceCapabilityCard[];
  };
  carePlansSection?: DedicatedServiceCareOverview;
  technicalSection: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    pillars: TechnicalPillarBlock[];
  };
  processSection: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: ProcessStageItem[];
  };
  whyChooseSection: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    items: AdvantageItem[];
  };
  faqSection: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    faqs: FaqEntry[];
  };
  relatedSection: {
    eyebrow: string;
    title: string;
    items: RelatedLinkItem[];
  };
  ctaSection: {
    eyebrow: string;
    headline: string;
    description: string;
    mailtoSubject: string;
    primaryButtonLabel: string;
  };
}

export const WEBSITE_DEVELOPMENT_PAGE_DATA: DedicatedServicePageConfig = {
  id: 'website-development',
  routePath: '/services/website-development/',
  canonicalUrl: 'https://wpcarepoint.co.uk/services/website-development/',
  metaTitle: 'Website Design & Development UK | WordPress & React Engineering – WPCarePoint',
  metaDescription:
    'Bespoke WordPress, React, and Next.js website design and development for UK businesses. Clean architecture, WCAG 2.2 AA accessibility, UK GDPR readiness, and full client ownership.',
  serviceSchemaName: 'Website Design & Development',
  breadcrumbLabel: 'Website Design & Development',
  hero: {
    eyebrow: '01. Website Design & Development · United Kingdom',
    headline: 'Website design and engineering built for clarity, speed, and lasting ownership.',
    description:
      'WPCarePoint partners with British organisations to build dependable custom WordPress block websites and modern React / Next.js web platforms—engineered cleanly without fragile page-builder bloat or proprietary agency lock-in.',
    primaryCtaLabel: 'Request Website Scope',
    secondaryCtaLabel: 'Explore What We Build',
    secondaryCtaTargetId: 'service-intro',
    imageUrl: '/src/assets/images/service_web_design_studio_1795466283235.jpg',
    imageAlt:
      'WPCarePoint digital architecture studio showing wireframe schematics and design specification',
    imageCaption: 'Tailored UK business web platforms · Clean WordPress & TypeScript architecture',
    standards: [
      { label: 'Core Platforms', value: 'WordPress · React · Next.js' },
      { label: 'Design Standard', value: 'WCAG 2.2 AA & Mobile-First' },
      { label: 'Compliance Ready', value: 'UK GDPR & PECR Alignment' },
      { label: 'Asset Ownership', value: '100% Client-Owned Code' },
    ],
  },
  jumpLinks: [
    { label: 'Overview', targetId: 'service-intro' },
    { label: 'Website Types', targetId: 'website-types' },
    { label: 'WordPress & Technical', targetId: 'technical-depth' },
    { label: 'Process', targetId: 'delivery-process' },
    { label: 'FAQ', targetId: 'service-faq' },
    { label: 'Enquire', targetId: 'contact' },
  ],
  introSection: {
    id: 'service-intro',
    eyebrow: 'Approach to Modern Web Builds',
    title: 'Maintainable web platforms shaped around how UK teams actually publish and grow.',
    paragraphs: [
      'Many business websites start cleanly on the surface but quickly become difficult to manage underneath—weighed down by bloated multipurpose themes, stacked visual page builders, and conflicting plugins that break on every update.',
      'We design and build websites with structural discipline from day one. When a team needs intuitive everyday editing, we engineer clean custom WordPress Gutenberg block themes. When a platform calls for bespoke interactive interfaces, client portals, or modern application architecture, we build cleanly with React, Next.js, and TypeScript.',
      'Every project is scoped transparently in writing before code starts, developed in an isolated staging environment, and handed over cleanly under your own UK domain registrar and hosting accounts.',
    ],
    asideEyebrow: 'Built for Long-Term Stewardship',
    asideTitle: 'What stays consistent across every WPCarePoint build',
    asidePoints: [
      {
        title: 'Clean Semantic HTML & Hierarchy',
        detail:
          'Logical headings, clean CSS architecture, and fast-rendering templates built for readability across Google UK and AI search tools.',
      },
      {
        title: 'Unrestricted Editorial Control',
        detail:
          'Update pages, service descriptions, imagery, and navigation cleanly without paying developer retainers for routine text edits.',
      },
      {
        title: 'Zero Proprietary Lock-In',
        detail:
          'Domains, source repositories, themes, and hosting remain registered cleanly in your company name.',
      },
    ],
  },
  capabilitiesSection: {
    id: 'website-types',
    eyebrow: 'Types of Websites We Develop',
    title: 'Right-sized architecture matched to your business model and technical needs.',
    description:
      'We avoid one-size-fits-all templates, selecting the cleanest technical stack for your content workflow, integrations, and operational roadmap.',
    items: [
      {
        index: '01.',
        title: 'UK Business & Corporate Websites',
        subtitle: 'Service Firms · B2B · Professional Practices',
        summary:
          'Clear, conversion-focused websites that communicate complex services concisely, establish credibility across British markets, and direct prospects into structured enquiries.',
        points: [
          'Service hierarchy tailored to UK buyer search behaviour',
          'Accessible typography and distraction-free enquiry flows',
          'Structured Schema.org and OpenGraph social metadata',
        ],
      },
      {
        index: '02.',
        title: 'Custom WordPress Block Websites',
        subtitle: 'Native Gutenberg · Lightweight Custom Themes',
        summary:
          'Purpose-built WordPress themes using native block editor components instead of heavy drag-and-drop page builders—keeping administration familiar and pages lean.',
        points: [
          'Reusable branded block patterns locked to design consistency',
          'Minimal, vetted plugin footprint reducing security exposure',
          'Staging-tested theme updates with simple team handover guides',
        ],
      },
      {
        index: '03.',
        title: 'React, Next.js & Custom Web Applications',
        subtitle: 'TypeScript · Frontend Portals · Bespoke UI',
        summary:
          'Modern TypeScript web platforms and frontend applications built when an organisation needs custom interactive tools, client portals, dashboards, or headless content architecture.',
        points: [
          'Component-driven UI libraries engineered for fast interaction',
          'Interactive scoping tools, calculators, and bespoke customer journeys',
          'Clean REST or GraphQL connectivity to backend systems',
        ],
      },
      {
        index: '04.',
        title: 'Website Rebuilds & Legacy .co.uk Recoveries',
        subtitle: 'Migration Governance · 301 Protection',
        summary:
          'Replacing outdated, slow, or compromised websites without discarding historical search value—carefully mapping URLs, cleaning broken assets, and protecting live indexing.',
        points: [
          'Audit of existing Search Console URLs and historical backlink paths',
          'Single-hop server-level 301 redirect rules preventing 404 drops',
          'Controlled DNS cut-over with SSL and post-launch crawl checks',
        ],
      },
    ],
  },
  technicalSection: {
    id: 'technical-depth',
    eyebrow: 'Engineering & Craft Standards',
    title: 'Four technical pillars behind dependable, high-trust UK business websites.',
    description:
      'From WordPress internals and third-party APIs to accessibility and structural redesigns, every layer works as a cohesive system.',
    pillars: [
      {
        id: 'wordpress-expertise',
        index: '01.',
        eyebrow: 'WordPress Design & Development',
        title: 'Custom WordPress engineering without fragile plugin clutter',
        summary:
          'WordPress remains one of the most practical publishing platforms for UK organisations when engineered properly. We avoid bloated commercial multipurpose themes and stack custom PHP/block modules cleanly.',
        bullets: [
          'Custom post types and structured fields built cleanly for your services',
          'Curated, security-reviewed plugin stack rather than unnecessary add-ons',
          'Clean separation between layout presentation, custom logic, and media assets',
          'Editor training documentation so your team manages day-to-day publishing easily',
        ],
        calloutLabel: 'Core WordPress Benefit',
        calloutText: 'Faster editing, cleaner updates, and noticeably lighter frontend payloads.',
      },
      {
        id: 'custom-integrations',
        index: '02.',
        eyebrow: 'Custom Functionality & Integrations',
        title: 'Connecting your website cleanly to CRM, finance, and operations',
        summary:
          'Your website should never sit in isolation as a digital brochure. We build reliable server-side integrations and bespoke modules linking enquiries directly to existing business systems.',
        bullets: [
          'Two-way CRM and pipeline integrations including HubSpot and structured webhooks',
          'Accounting, quoting, and payment system hooks such as Xero and Stripe UK',
          'Scoped AI workflow tools and grounded knowledge search where operationally useful',
          'Signed requests, input validation, and private credential handling on server boundaries',
        ],
        calloutLabel: 'Operational Reliability',
        calloutText: 'Auditable API workflows built with retry safety and clear error alerts.',
      },
      {
        id: 'responsive-accessibility',
        index: '03.',
        eyebrow: 'Responsive Design & Accessibility',
        title: 'Readable across desktop monitors, tablets, and narrow UK mobile viewports',
        summary:
          'Over half of UK commercial research starts on mobile devices. We build responsive layouts tested across real viewport sizes while treating accessibility as a fundamental engineering requirement.',
        bullets: [
          'Layout verification from 1440px wide desktops down to 320px narrow handsets',
          'WCAG 2.2 AA alignment for contrast ratios, focus states, and logical heading order',
          'Keyboard-accessible menus, accordions, and generous mobile tap targets (>= 44px)',
          'Respects user prefers-reduced-motion settings cleanly without hiding content',
        ],
        calloutLabel: 'Design Standard',
        calloutText: 'WCAG 2.2 AA and UK GDPR/PECR discipline embedded directly into UI code.',
      },
      {
        id: 'redesign-improvement',
        index: '04.',
        eyebrow: 'Website Redesign & Continuous Improvement',
        title: 'Upgrading underperforming or outdated websites with zero guesswork',
        summary:
          'Not every business needs to throw away its domain equity to modernise UX. We audit existing page performance, content clarity, mobile usability, and technical SEO before redesigning.',
        bullets: [
          'Technical diagnosis isolating layout friction, script bottlenecks, and dead links',
          'Clearer messaging hierarchy written in crisp, natural British English (en-GB)',
          'Seamless URL slug preservation and tested 301 redirect mappings on launch',
          'Direct follow-on support for WordPress Speed Optimisation or ongoing Care Plans',
        ],
        calloutLabel: 'Transition Safety',
        calloutText: 'Staging previews allow your team to review every page before DNS cut-over.',
      },
    ],
  },
  processSection: {
    id: 'delivery-process',
    eyebrow: 'Our Development Process',
    title: 'Staging-first engineering from discovery through controlled UK release.',
    description:
      'Every milestone is verified in writing and previewed on an isolated staging link before anything changes on your live domain.',
    steps: [
      {
        step: '01.',
        title: 'Discovery & Technical Audit',
        summary:
          'We inspect your commercial goals, existing URLs, UK hosting setup (such as 20i, Krystal, SiteGround UK, or Cloudflare), and integration requirements to confirm the cleanest build stack.',
        deliverable: 'Written technical scope & sitemap',
      },
      {
        step: '02.',
        title: 'UX Structure & Visual Design',
        summary:
          'Key page templates, service hierarchies, responsive grid proportions, and brand typography are refined around user clarity and effortless enquiry paths.',
        deliverable: 'Interactive UI design direction',
      },
      {
        step: '03.',
        title: 'Modular Staging Development',
        summary:
          'We engineer clean WordPress blocks or React / TypeScript components on a private staging server, integrating custom APIs, SEO metadata, and compressed assets cleanly.',
        deliverable: 'Full interactive staging website',
      },
      {
        step: '04.',
        title: 'QA, Launch & Handover',
        summary:
          'Cross-device responsiveness, WCAG contrast, SSL certificates, 301 redirects, and core speed hygiene are tested prior to coordinated DNS cut-over and editor handover.',
        deliverable: 'Live UK website & team documentation',
      },
    ],
  },
  whyChooseSection: {
    id: 'why-wpcarepoint-dev',
    eyebrow: 'Why Businesses Choose WPCarePoint',
    title: 'Senior engineering discipline built for long-term commercial trust.',
    description:
      'We focus on transparent written communication, durable codebases, and honest recommendations without inflated agency layers.',
    items: [
      {
        index: '01.',
        title: 'Platform Independence Without Bias',
        summary:
          'Because we engineer cleanly in both WordPress and React / Next.js, we recommend the right tool for your team rather than forcing every brief into one template.',
        standard: 'WordPress · React · Next.js · TypeScript',
      },
      {
        index: '02.',
        title: 'No Heavy Page-Builder Debt',
        summary:
          'Avoiding nested shortcodes and unnecessary builder wrappers keeps mobile rendering fast, security patching straightforward, and future redesigns painless.',
        standard: 'Clean DOM · Core Web Vitals Focus',
      },
      {
        index: '03.',
        title: 'Complete Code & Account Ownership',
        summary:
          'Domains, Nominet .co.uk records, hosting, repositories, and WordPress assets belong cleanly to your company from launch day onwards.',
        standard: '100% Client Ownership',
      },
      {
        index: '04.',
        title: 'Ongoing Support When Needed',
        summary:
          'After launch, you can run independently or pair your new website with WPCarePoint Website Care, WordPress Speed Optimisation, or SEO & AI Search growth.',
        standard: 'Direct Email Engineering Support',
      },
    ],
  },
  faqSection: {
    id: 'service-faq',
    eyebrow: 'Website Development FAQ',
    title: 'Practical questions from UK business owners planning a new build or redesign.',
    description:
      'Straightforward answers on platform choice, timelines, content ownership, and migration care.',
    faqs: [
      {
        id: 'wd-faq-1',
        question: 'Should we choose WordPress or a custom React / Next.js build?',
        answer:
          'For service websites and company marketing platforms where your team regularly edits copy, case notes, or articles in a familiar dashboard, custom WordPress block architecture is usually ideal. When you require bespoke interactive dashboards, authenticated client portals, or custom software workflows, React, Next.js, and TypeScript provide cleaner structure and speed.',
      },
      {
        id: 'wd-faq-2',
        question: 'Do you use pre-made commercial themes or drag-and-drop page builders?',
        answer:
          'No. Multipurpose themes and heavy page builders add excess CSS, JavaScript, and maintenance fragility. We build clean custom WordPress block layouts and bespoke TypeScript components tailored specifically around your pages.',
      },
      {
        id: 'wd-faq-3',
        question: 'How do you handle pricing and project scoping?',
        answer:
          'Every website build is scoped transparently in writing before work begins, based on page architecture, design complexity, custom integrations, and migration requirements. Email your brief or existing URL to contact@wpcarepoint.co.uk for a clear written proposal.',
      },
      {
        id: 'wd-faq-4',
        question: 'Can you protect our existing Google UK rankings during a website redesign?',
        answer:
          'Yes. Before replacing an existing site, we audit active indexed URLs, preserve matching URL slugs wherever possible, implement clean single-hop 301 redirects for changed routes, and verify XML sitemaps and Schema.org graphs on launch.',
      },
      {
        id: 'wd-faq-5',
        question: 'Will our team be able to update text, photos, and pages ourselves?',
        answer:
          'Yes. We structure editable regions cleanly and provide straightforward handover guidance so non-technical team members can publish routine updates safely without breaking page layouts.',
      },
      {
        id: 'wd-faq-6',
        question: 'What happens after launch if we need updates or ongoing maintenance?',
        answer:
          'Every codebase belongs to you with zero lock-in. You can manage it in-house, request one-off improvements, or transition seamlessly onto a WPCarePoint Website Care Plan for staging-tested updates and encrypted off-site backups.',
      },
    ],
  },
  relatedSection: {
    eyebrow: 'Related Engineering & Support',
    title: 'Explore complementary WPCarePoint services',
    items: [
      {
        eyebrow: 'Online Retail',
        title: 'eCommerce & WooCommerce Development',
        description:
          'GBP (£) pricing, UK VAT tax logic, Stripe UK SCA checkouts, and Royal Mail / DPD delivery configurations engineered for mobile speed.',
        ctaLabel: 'Explore eCommerce Builds',
        targetType: 'route',
        href: '/services/ecommerce-development/',
      },
      {
        eyebrow: 'Performance Engineering',
        title: 'WordPress Speed Optimisation',
        description:
          'Dedicated bottleneck diagnosis, Core Web Vitals tuning, image compression, caching, and database optimisation for existing WordPress websites.',
        ctaLabel: 'Explore Speed Optimisation',
        targetType: 'route',
        href: '/wordpress-speed-optimisation/',
      },
      {
        eyebrow: 'Ongoing Protection',
        title: 'Website Care & Technical Support',
        description:
          'Staging-tested updates, encrypted off-site backups, and standalone WordPress Quick Fix remediation without long-term lock-in.',
        ctaLabel: 'Explore Website Care',
        targetType: 'route',
        href: '/services/website-care-support/',
      },
    ],
  },
  ctaSection: {
    eyebrow: 'Discuss Your Website Project',
    headline: 'Ready to build or modernise your UK website with clean engineering?',
    description:
      'Send your current website URL (if redesigning), key commercial objectives, and required integrations to contact@wpcarepoint.co.uk. We review every brief directly and respond in writing.',
    mailtoSubject: 'Website Design & Development Scope Enquiry',
    primaryButtonLabel: 'Send Project Enquiry',
  },
};

export const WP_SPEED_OPTIMISATION_PAGE_DATA: DedicatedServicePageConfig = {
  id: 'wordpress-speed-optimisation',
  routePath: '/wordpress-speed-optimisation/',
  canonicalUrl: 'https://wpcarepoint.co.uk/wordpress-speed-optimisation/',
  metaTitle: 'WordPress Speed Optimisation UK | Core Web Vitals & Performance – WPCarePoint',
  metaDescription:
    'Practical WordPress speed optimisation for UK businesses. Safe staging diagnostics covering Core Web Vitals, images, caching, database hygiene, scripts, and hosting considerations.',
  serviceSchemaName: 'WordPress Speed Optimisation',
  breadcrumbLabel: 'WordPress Speed Optimisation',
  hero: {
    eyebrow: 'WordPress Performance & Technical Hygiene · United Kingdom',
    headline: 'WordPress speed optimisation built around real diagnostics, not guesswork plugins.',
    description:
      'Slow pages cost enquiries and frustrate mobile visitors across UK networks. WPCarePoint identifies the genuine bottlenecks inside your WordPress theme, plugins, media, database, and server setup—and resolves them cleanly on staging.',
    primaryCtaLabel: 'Request Speed Audit',
    secondaryCtaLabel: 'Why Speed Matters',
    secondaryCtaTargetId: 'why-speed-matters',
    imageUrl: '/src/assets/images/wordpress_speed_engineering_1795466283304.jpg',
    imageAlt:
      'Minimalist architectural engineering components representing streamlined WordPress caching and load speed optimisation',
    imageCaption: 'Staging-tested speed engineering · Safe for business sites & WooCommerce',
    standards: [
      { label: 'Core Web Vitals', value: 'LCP · INP · CLS Focus' },
      { label: 'Engineering Safety', value: 'Backup & Staging First' },
      { label: 'Transparent Scoping', value: 'Evidence Before Changes' },
      { label: 'Flexible Option', value: 'One-Off Audit or Care Plan' },
    ],
  },
  jumpLinks: [
    { label: 'Why Speed Matters', targetId: 'why-speed-matters' },
    { label: 'Common Bottlenecks', targetId: 'common-issues' },
    { label: 'What We Optimise', targetId: 'optimisation-layers' },
    { label: 'Process', targetId: 'speed-process' },
    { label: 'FAQ', targetId: 'service-faq' },
    { label: 'Enquire', targetId: 'contact' },
  ],
  introSection: {
    id: 'why-speed-matters',
    eyebrow: 'Why WordPress Website Speed Matters',
    title: 'Practical loading speed keeps mobile visitors engaged and reduces wasted acquisition spend.',
    paragraphs: [
      'Most business owners experience speed problems before they read a technical report: product pages hesitate before scrolling, navigation menus stutter on 4G mobile connections, or checkout screens feel sluggish during busy periods.',
      'Installing multiple generic caching plugins on top of one another rarely solves the underlying cause—and frequently breaks contact forms, WooCommerce baskets, or visual styling. Honest performance work begins by measuring what is actually delaying the browser and the server.',
      'We explain every technical finding in plain British English so you understand what was slowing your website down, what changes are safe for WooCommerce or dynamic forms, and whether the bottleneck sits inside WordPress code or your current hosting environment.',
    ],
    asideEyebrow: 'Honest Engineering Standards',
    asideTitle: 'Measured progress without inflated promises',
    asidePoints: [
      {
        title: 'No Artificial Score Tricks',
        detail:
          'We never use brittle script-delaying hacks that trick automated grading tools while breaking menus, analytics consent, or real visitor interactions.',
      },
      {
        title: 'Plain-English Diagnostics',
        detail:
          'Before modifying live settings, we show whether slowdowns stem from heavy images, page builders, bloated plugins, or high server Time to First Byte.',
      },
      {
        title: 'Realistic Outcomes',
        detail:
          'Search rankings and live load timings depend on third-party tags, hosting capacity, and competition—so we report verifiable technical improvements rather than fabricated guarantees.',
      },
    ],
  },
  capabilitiesSection: {
    id: 'common-issues',
    eyebrow: 'Common WordPress Performance Issues',
    title: 'Four frequent culprits that slow down established UK WordPress websites.',
    description:
      'Over months of updates and marketing additions, clean sites accumulate quiet overhead. Here is where performance typically degrades first.',
    items: [
      {
        index: '01.',
        title: 'Unoptimised Images & Oversized Media',
        subtitle: 'Heavy JPEGs/PNGs · Missing Dimensions',
        summary:
          'Multi-megabyte photographs uploaded straight from cameras or stock libraries inflate mobile downloads and cause sudden layout jumps as images finally paint.',
        points: [
          'Large desktop banners served unchanged to 390px mobile screens',
          'Missing explicit width/height attributes causing Layout Shift (CLS)',
          'Legacy JPEG/PNG payloads where WebP or AVIF halves transfer weight',
        ],
      },
      {
        index: '02.',
        title: 'Render-Blocking CSS, Fonts & Script Bloat',
        subtitle: 'Page Builders · Unused Plugin Assets',
        summary:
          'Many WordPress themes and builders load dozens of stylesheets, icon packs, and JavaScript libraries on every single page—even where those widgets are never used.',
        points: [
          'Contact-form, slider, or WooCommerce assets firing globally on brochure pages',
          'Unoptimised external font families blocking initial headline text visibility',
          'Heavy third-party marketing trackers queuing work on the browser main thread',
        ],
      },
      {
        index: '03.',
        title: 'Database Overhead & Autoload Bloat',
        subtitle: 'wp_options · Stale Transients · Revisions',
        summary:
          'Even deleted plugins often leave scheduled tasks and oversized configuration rows inside wp_options, forcing MySQL to load redundant megabytes on every page request.',
        points: [
          'Excessive autoloaded rows stalling PHP execution before HTML renders',
          'Thousands of unpruned post revisions, orphan metadata, and expired transients',
          'WooCommerce action-scheduler queues or unindexed legacy order tables',
        ],
      },
      {
        index: '04.',
        title: 'Missing Caching or Hosting Bottlenecks',
        subtitle: 'High TTFB · Outdated PHP · Conflicting Rules',
        summary:
          'Without aligned server caching, OPcache, modern PHP execution, or CDN edge rules, WordPress rebuilds identical HTML from scratch for every single visitor.',
        points: [
          'Slow Time to First Byte (TTFB) from overloaded shared hosting plans',
          'Legacy PHP versions missing modern memory and performance gains',
          'Misconfigured cache rules breaking logged-in sessions or shopping baskets',
        ],
      },
    ],
  },
  technicalSection: {
    id: 'optimisation-layers',
    eyebrow: 'WordPress Speed Optimisation Services',
    title: 'Targeted optimisation across every technical layer—from Core Web Vitals to server response.',
    description:
      'Each layer is profiled, applied on an isolated staging copy, and regression-tested alongside interactive forms and checkouts.',
    pillars: [
      {
        id: 'cwv-tuning',
        index: '01.',
        eyebrow: 'Core Web Vitals & Performance Discipline',
        title: 'Addressing Largest Contentful Paint (LCP), INP, and CLS cleanly',
        summary:
          'Google evaluates real visitor responsiveness through Core Web Vitals. We fix how pages deliver critical above-the-fold elements without compromising visual stability or accessibility.',
        bullets: [
          'Prioritising above-the-fold hero imagery (fetchpriority="high", zero lazy-load traps)',
          'Reserving explicit media and embed space to minimise Cumulative Layout Shift (CLS)',
          'Trimming heavy DOM nesting and main-thread JavaScript stalling Interaction to Next Paint (INP)',
          'Auditing third-party chat, booking, or embed scripts that degrade mobile responsiveness',
        ],
        calloutLabel: 'Transparency Note',
        calloutText:
          'Real-world field speed depends on user device and network—never trust blanket "guaranteed 100/100" claims.',
      },
      {
        id: 'image-media',
        index: '02.',
        eyebrow: 'Image & Media Optimisation',
        title: 'Faster visual delivery through WebP / AVIF and responsive sizing',
        summary:
          'Images typically represent the largest byte weight on business websites. We standardise asset dimensions and modern encoding formats without visibly degrading photography.',
        bullets: [
          'Batch and automated conversion to WebP (and AVIF where supported cleanly)',
          'Generating accurate WordPress srcset thumbnails for desktop, tablet, and mobile viewports',
          'Ensuring appropriate lazy loading below the fold while keeping hero images immediate',
          'Replacing heavy animated media or oversized vector payloads cleanly',
        ],
        calloutLabel: 'Visual Fidelity',
        calloutText: 'Sharp retina clarity retained alongside smaller UK mobile payloads.',
      },
      {
        id: 'caching-cdn',
        index: '03.',
        eyebrow: 'Caching & Edge Configuration',
        title: 'Clean page caching, asset rules, and Cloudflare alignment',
        summary:
          'Effective caching cuts repeat server work drastically when configured cleanly around WordPress login states, nonce tokens, and WooCommerce baskets.',
        bullets: [
          'Configured full-page HTML caching with safe WooCommerce cart/checkout exclusions',
          'Long-lived browser cache headers for immutable CSS, JavaScript, and font assets',
          'Brotli / Gzip text compression and HTTP/2–HTTP/3 verification via Cloudflare CDN',
          'Eliminating duplicate or conflicting caching plugins fighting over .htaccess rules',
        ],
        calloutLabel: 'Safe Exclusions',
        calloutText: 'Forms, nonces, and basket sessions are tested after every cache adjustment.',
      },
      {
        id: 'database-code-hosting',
        index: '04.',
        eyebrow: 'Database, Code & Hosting Considerations',
        title: 'Trimming internal bloat and advising honestly on UK hosting constraints',
        summary:
          'Software tuning reaches a natural ceiling if server CPU, PHP workers, or database I/O are underspecified. We clean WordPress internals and give clear hosting guidance where warranted.',
        bullets: [
          'Auditing slow plugins, wp_options autoload size, post revisions, and stale cron jobs',
          'Enabling WooCommerce High-Performance Order Storage (HPOS) where appropriate',
          'Reviewing PHP version compatibility (e.g. PHP 8.2 / 8.3+), OPcache, and object cache options',
          'Honest advice across hosts such as 20i, Krystal, SiteGround UK, or Cloudflare without forced upsells',
        ],
        calloutLabel: 'Right-Sized Advice',
        calloutText:
          'If hosting hardware is the real bottleneck, we tell you plainly rather than billing for endless tweaks.',
      },
    ],
  },
  processSection: {
    id: 'speed-process',
    eyebrow: 'Our Optimisation Process',
    title: 'Four controlled steps protecting live uptime and checkout stability.',
    description:
      'No blind live-site edits. Every speed engagement runs from an encrypted backup through isolated staging verification before release.',
    steps: [
      {
        step: '01.',
        title: 'Baseline Audit & Full Backup',
        summary:
          'We benchmark key templates across mobile and desktop, inspect server TTFB, profile slow plugins and SQL queries, and take an encrypted backup before changing anything.',
        deliverable: 'Written bottleneck diagnosis',
      },
      {
        step: '02.',
        title: 'Isolated Staging Optimisation',
        summary:
          'Image compression, script dequeuing, database hygiene, and caching configuration are implemented safely on staging—keeping your live site untouched.',
        deliverable: 'Staging build for verification',
      },
      {
        step: '03.',
        title: 'Functional & Vital Regression QA',
        summary:
          'Navigation menus, responsive layouts, enquiry forms, search, and WooCommerce checkouts are tested alongside Core Web Vitals checks to verify zero broken features.',
        deliverable: 'Before / after technical summary',
      },
      {
        step: '04.',
        title: 'Deployment & Ongoing Hygiene Options',
        summary:
          'Approved changes roll out cleanly to production with documented cache/plugin rules so future editors do not reintroduce heavy media bloat.',
        deliverable: 'Clean live deployment & summary',
      },
    ],
  },
  whyChooseSection: {
    id: 'why-wpcarepoint-speed',
    eyebrow: 'Why Trust WPCarePoint With Speed',
    title: 'Measured engineering rather than automated plugin checklists.',
    description:
      'Every WordPress installation has different themes, plugins, and commercial risks—we tune specifically for reliability and speed together.',
    items: [
      {
        index: '01.',
        title: 'Diagnostics Before Prescriptions',
        summary:
          'We inspect actual waterfalls, SQL queries, and script execution rather than applying identical default presets to every site.',
        standard: 'Evidence-Led Tuning',
      },
      {
        index: '02.',
        title: 'Safe for WooCommerce & Forms',
        summary:
          'Aggressive script minification frequently breaks dynamic baskets or CSRF tokens; we configure strict exceptions and test every form live.',
        standard: 'Checkout & Form Integrity',
      },
      {
        index: '03.',
        title: 'One-Off Available — Zero Lock-In',
        summary:
          'Commission a standalone WordPress Speed Optimisation audit and cleanup whenever needed, with optional transition to ongoing Care Plans.',
        standard: 'One-Off or Care Plan Eligible',
      },
      {
        index: '04.',
        title: 'Connected SEO & Build Expertise',
        summary:
          'Where structural theme rebuilds or technical SEO / Schema improvements make more sense than patching legacy code, we handle both under one roof.',
        standard: 'Speed · Code · Technical SEO',
      },
    ],
  },
  faqSection: {
    id: 'service-faq',
    eyebrow: 'WordPress Speed FAQ',
    title: 'Clear answers for business owners evaluating WordPress speed work.',
    description:
      'Realistic expectations around scores, safety, plugins, hosting, and pricing structure.',
    faqs: [
      {
        id: 'ws-faq-1',
        question: 'Can you guarantee a specific PageSpeed Insights score or Google ranking jump?',
        answer:
          'No honest agency can guarantee an exact PageSpeed score (such as 100/100) or guaranteed Google rankings. Lab scores fluctuate based on required third-party scripts (such as payment tools, maps, or consent banners) and server latency, while search rankings depend on competition and content relevance. What we guarantee is systematic elimination of genuine WordPress, asset, database, and caching bottlenecks verified cleanly.',
      },
      {
        id: 'ws-faq-2',
        question: 'Will speed optimisation break my site layout, contact forms, or WooCommerce checkout?',
        answer:
          'Not when handled carefully. All work is performed after creating a full off-site backup and testing inside an isolated staging copy first. We keep dynamic pages, login sessions, baskets, and checkout routes properly excluded from aggressive page caching and test forms directly before release.',
      },
      {
        id: 'ws-faq-3',
        question: 'Can you just install a caching plugin instead of manual speed work?',
        answer:
          'Caching plugins help deliver pre-built HTML faster, but they cannot fix oversized uncropped hero images, bloated autoloaded database tables, conflicting third-party scripts, slow shared PHP servers, or heavy page-builder DOM structures. We tune both the underlying bottleneck and the caching layer cleanly together.',
      },
      {
        id: 'ws-faq-4',
        question: 'Do we have to sign up for a monthly Care Plan to book WordPress Speed Optimisation?',
        answer:
          'No. WordPress Speed Optimisation can be requested as a standalone one-off engagement by emailing your URL to contact@wpcarepoint.co.uk. If you later want proactive monthly updates, encrypted backups, and recurring speed reviews, any of our Website Care tiers can be added cleanly.',
      },
      {
        id: 'ws-faq-5',
        question: 'What if our hosting server itself is causing slow response times (TTFB)?',
        answer:
          'Our baseline diagnostic separates WordPress theme/plugin overhead from server response timing. If your current UK hosting plan lacks adequate CPU, memory, or modern PHP support, we explain the findings transparently and outline practical hosting options before recommending a move.',
      },
      {
        id: 'ws-faq-6',
        question: 'How do we get a quote or start a WordPress speed review?',
        answer:
          'Email your website URL and main performance symptoms to contact@wpcarepoint.co.uk. We review the site structure and respond directly in writing with clear next steps and transparent scoping.',
      },
    ],
  },
  relatedSection: {
    eyebrow: 'Connected WPCarePoint Services',
    title: 'When speed pairs with structural rebuilds or technical SEO',
    items: [
      {
        eyebrow: 'Platform Architecture',
        title: 'Website Design & Development',
        description:
          'If legacy page-builder clutter limits performance, consider replacing heavy templates with lightweight custom WordPress blocks or Next.js.',
        ctaLabel: 'Explore Web Development',
        targetType: 'route',
        href: '/services/website-development/',
      },
      {
        eyebrow: 'Monthly Stewardship',
        title: 'Website Care & Technical Support',
        description:
          'Ongoing staging-tested updates, encrypted off-site backups, and recurring Core Web Vitals oversight tailored around your platform.',
        ctaLabel: 'Explore Website Care',
        targetType: 'route',
        href: '/services/website-care-support/',
      },
      {
        eyebrow: 'Search Visibility',
        title: 'SEO & AI Search Optimisation',
        description:
          'Pair technical crawl hygiene and Schema.org structured data with faster Core Web Vitals across Google UK and modern AI search tools.',
        ctaLabel: 'Explore SEO & AI Search',
        targetType: 'route',
        href: '/services/ai-search-optimisation/',
      },
    ],
  },
  ctaSection: {
    eyebrow: 'Request a WordPress Speed Review',
    headline: 'Identify what is genuinely slowing down your WordPress site.',
    description:
      'Send your website URL and any noticeable performance or checkout symptoms to contact@wpcarepoint.co.uk. Every audit enquiry is reviewed directly by engineering—no automated bots or pressure sales calls.',
    mailtoSubject: 'WordPress Speed Optimisation Enquiry',
    primaryButtonLabel: 'Send Speed Enquiry',
  },
};

export const ECOMMERCE_DEVELOPMENT_PAGE_DATA: DedicatedServicePageConfig = {
  id: 'ecommerce-development',
  routePath: '/services/ecommerce-development/',
  canonicalUrl: 'https://wpcarepoint.co.uk/services/ecommerce-development/',
  metaTitle: 'eCommerce & WooCommerce Development UK | Online Store Engineering – WPCarePoint',
  metaDescription:
    'Dependable WooCommerce and custom eCommerce development for UK businesses. GBP pricing, UK VAT logic, Stripe 3D Secure checkouts, catalogue engineering, and clean store maintenance.',
  serviceSchemaName: 'eCommerce & WooCommerce Development',
  breadcrumbLabel: 'eCommerce & WooCommerce Development',
  hero: {
    eyebrow: '02. eCommerce & WooCommerce Development · United Kingdom',
    headline: 'Online retail storefronts built for mobile checkouts, UK VAT clarity, and clean scale.',
    description:
      'WPCarePoint builds dependable WooCommerce platforms and custom eCommerce storefronts engineered around British currency rules, fast mobile browsing, secure Strong Customer Authentication (SCA) checkouts, and maintainable stock workflows.',
    primaryCtaLabel: 'Request Store Scope',
    secondaryCtaLabel: 'Explore eCommerce Architecture',
    secondaryCtaTargetId: 'service-intro',
    imageUrl: '/src/assets/images/service_ecommerce_studio_1795468677049.jpg',
    imageAlt:
      'Clean UK eCommerce storefront wireframe on tablet paired with coastal teal parcel geometry on limestone',
    imageCaption: 'WooCommerce HPOS & bespoke retail builds · Engineered for UK commerce operations',
    standards: [
      { label: 'Core Stack', value: 'WooCommerce HPOS · Next.js' },
      { label: 'UK Tax & Currency', value: 'GBP (£) & UK VAT Ready' },
      { label: 'Payment Discipline', value: 'Stripe SCA · Apple / Google Pay' },
      { label: 'Performance Focus', value: 'Fast Mobile Catalogue & Cart' },
    ],
  },
  jumpLinks: [
    { label: 'Introduction', targetId: 'service-intro' },
    { label: 'Store Platforms', targetId: 'ecommerce-platforms' },
    { label: 'Checkout & Integrations', targetId: 'ecommerce-pillars' },
    { label: 'Process', targetId: 'delivery-process' },
    { label: 'FAQ', targetId: 'service-faq' },
    { label: 'Enquire', targetId: 'contact' },
  ],
  introSection: {
    id: 'service-intro',
    eyebrow: 'Introduction to eCommerce Development',
    title: 'Online stores engineered for real shoppers, clean stock management, and reliable fulfilment.',
    paragraphs: [
      'Running a profitable UK online shop demands far more than applying a generic retail template. Sluggish category filters, confusing delivery calculations, heavy checkout scripts, and conflicting WooCommerce plugins quickly eat into conversion and create hours of manual order fixes.',
      'We build WooCommerce stores using clean custom theme code and High-Performance Order Storage (HPOS) architecture—alongside custom headless or bespoke JavaScript storefronts where specific retail workflows require something beyond standard WordPress.',
      'From structuring product variations and UK VAT rules to scoping optional integrations such as Stripe, Xero, HubSpot, or UK courier shipping workflows, every store is tailored cleanly around your commercial operations.',
    ],
    asideEyebrow: 'Built for UK Retail Operations',
    asideTitle: 'Practical fundamentals in every store build',
    asidePoints: [
      {
        title: 'Clean Catalogue & Order Data',
        detail:
          'Thoughtful SKU hierarchies, category navigation, and WooCommerce HPOS indexing keep back-office order searching snappy as sales grow.',
      },
      {
        title: 'Frictionless Mobile Purchasing',
        detail:
          'Streamlined basket drawers, express wallet readiness, and uncluttered address fields tuned specifically for UK phone screens.',
      },
      {
        title: 'Scoped Integrations Without Bloat',
        detail:
          'Third-party links such as accounting, CRM, or shipping tools are scoped explicitly per brief rather than stacking unused add-on extensions.',
      },
    ],
  },
  capabilitiesSection: {
    id: 'ecommerce-platforms',
    eyebrow: 'Storefront Capabilities & Catalogue Structure',
    title: 'Flexible eCommerce engineering across WooCommerce and bespoke retail platforms.',
    description:
      'Whether upgrading an established WooCommerce shop or scoping custom online store logic, we design every layer around operational clarity.',
    items: [
      {
        index: '01.',
        title: 'WooCommerce Store Development',
        subtitle: 'HPOS · Custom Block Themes · B2C & B2B',
        summary:
          'Lightweight WooCommerce builds free from sluggish commercial page builders—retaining WordPress dashboard familiarity while keeping cart and checkout scripts lean.',
        points: [
          'WooCommerce High-Performance Order Storage (HPOS) readiness',
          'Clean custom product, archive, and basket templates',
          'Strict cache exclusion rules protecting dynamic baskets and accounts',
        ],
      },
      {
        index: '02.',
        title: 'Custom Online Store Functionality',
        subtitle: 'React / Next.js · Trade Pricing · Bespoke Rules',
        summary:
          'Custom store builds and tailored retail modules when standard off-the-shelf shop settings cannot support trade tiers, configurable products, or bespoke quoting.',
        points: [
          'Trade-account pricing tiers, minimum order rules, and VAT-exempt workflows',
          'Product configurators, bundled kits, and sample-order options',
          'Custom headless React / Next.js storefronts backed by clean commerce APIs',
        ],
      },
      {
        index: '03.',
        title: 'Product, Category & Catalogue Management',
        subtitle: 'Taxonomy · Faceted Filtering · CSV / API Sync',
        summary:
          'Structured store navigation helping UK customers filter sizes, materials, compatibility, or attributes rapidly without generating duplicate SEO URL clutter.',
        points: [
          'Logical category/attribute architecture and canonical filter handling',
          'Clean variable-product data structures with Product & Offer Schema.org',
          'Reliable import pipelines for large or multi-supplier SKUs',
        ],
      },
      {
        index: '04.',
        title: 'Responsive Shopping Experience',
        subtitle: 'Mobile UX · Core Web Vitals · WCAG 2.2 AA',
        summary:
          'Every product card, image gallery, variant selector, and basket control is verified across desktop, tablet, and narrow UK mobile devices down to 320px.',
        points: [
          'Fast WebP product photography with reserved image proportions (zero CLS)',
          'Keyboard-navigable variant selectors and generous mobile tap targets',
          'Clear delivery expectations, subtotal clarity, and accessible error prompts',
        ],
      },
    ],
  },
  technicalSection: {
    id: 'ecommerce-pillars',
    eyebrow: 'Checkout, Fulfilment & Store Automation',
    title: 'Four core commercial pillars engineered for reliability at checkout.',
    description:
      'Every payment gateway, tax rule, courier setting, and optional business sync is verified end-to-end on staging before going live.',
    pillars: [
      {
        id: 'checkout-payments',
        index: '01.',
        eyebrow: 'Checkout & Payment Integrations',
        title: 'GBP (£) checkouts engineered around UK buyer trust and SCA security',
        summary:
          'We design clean, distraction-reduced checkout sequences built for UK postcodes, VAT invoices, and reliable payment processing.',
        bullets: [
          'Stripe payment integration supporting Strong Customer Authentication (3D Secure)',
          'Express wallet support such as Apple Pay and Google Pay where enabled cleanly',
          'UK VAT inclusive/exclusive display logic and crisp automated order confirmation emails',
          'Tested webhook handling preventing duplicate orders or lost confirmation states',
        ],
        calloutLabel: 'Checkout Hygiene',
        calloutText: 'Every payment step is test-driven in sandbox mode before live keys are connected.',
      },
      {
        id: 'shipping-orders',
        index: '02.',
        eyebrow: 'Shipping, Delivery & Order Management',
        title: 'Accurate UK postage zones, carrier rules, and clean order workflows',
        summary:
          'Unexpected shipping rules drive basket abandonment. We configure clear postcode zoning, weight/band shipping logic, and practical back-office order statuses.',
        bullets: [
          'Flat-rate, weight-tiered, spend-threshold free delivery, and local collection options',
          'UK mainland, Highlands & Islands, and Northern Ireland zone rules where required',
          'Scoped dispatch integrations with providers such as Royal Mail or DPD when required',
          'Clean order notes, packing workflow clarity, and automated customer dispatch updates',
        ],
        calloutLabel: 'Delivery Clarity',
        calloutText: 'Courier rules and regional exclusions are mapped upfront with your fulfilment team.',
      },
      {
        id: 'store-integrations',
        index: '03.',
        eyebrow: 'eCommerce Integrations & Automation',
        title: 'Scoped connectivity with accounting, CRM, and operational systems',
        summary:
          'Where operationally beneficial, we scope targeted integrations linking online orders cleanly with finance and CRM systems—without over-complicating smaller stores.',
        bullets: [
          'Optional Xero accounting reconciliation scoped accurately around UK VAT coding',
          'Optional HubSpot CRM contact and order lifecycle syncs where customer follow-up helps',
          'Server-side webhook validation ensuring private API keys stay off frontend templates',
          'Clear error notifications rather than silent sync failures during busy sales periods',
        ],
        calloutLabel: 'Scoped Per Project',
        calloutText:
          'Integrations such as Xero, HubSpot, or courier APIs are scoped specifically to your store needs—never forced as unnecessary add-ons.',
      },
      {
        id: 'store-stewardship',
        index: '04.',
        eyebrow: 'Performance, Security & Migration Care',
        title: 'Keeping transactional stores fast, safe, and protected during upgrades',
        summary:
          'An active store cannot afford broken plugins or database lockups. We structure clean maintenance safeguards and careful URL preservation during store rebuilds.',
        bullets: [
          'Staging-first WooCommerce and gateway regression testing before live plugin updates',
          '301 URL preservation protecting existing product and category rankings during migrations',
          'Compressed catalogue media and lean frontend scripts preserving fast page loads',
          'Optional transition to WPCarePoint Elite Care or dedicated WordPress Speed tuning',
        ],
        calloutLabel: 'Live Store Protection',
        calloutText: 'Orders and customer records remain isolated cleanly with zero blind live edits.',
      },
    ],
  },
  processSection: {
    id: 'delivery-process',
    eyebrow: 'eCommerce Development Process',
    title: 'Four structured stages from commercial scoping to test-verified store launch.',
    description:
      'Every product catalogue, tax rule, shipping band, and sandbox payment flow is tested on staging prior to public release.',
    steps: [
      {
        step: '01.',
        title: 'Commercial & Catalogue Discovery',
        summary:
          'We review SKU count, product variations, UK VAT rules, postage bands, and any required accounting or CRM integrations before drafting technical scope.',
        deliverable: 'Written store architecture & integration scope',
      },
      {
        step: '02.',
        title: 'UX Storefront & Checkout Design',
        summary:
          'Category navigation, product pages, filters, and streamlined mobile basket/checkout steps are structured around clarity and effortless conversion.',
        deliverable: 'Storefront UI & checkout flow blueprint',
      },
      {
        step: '03.',
        title: 'Staging Build & Sandbox Gateway Testing',
        summary:
          'We engineer the storefront on staging, migrate or structure catalogues, configure shipping zones, and run sandbox Stripe 3D Secure transaction checks.',
        deliverable: 'Interactive staging shop with sandbox tests',
      },
      {
        step: '04.',
        title: 'Security QA, Launch & Team Handover',
        summary:
          'We verify SSL, 301 redirects, transactional emails, and Core Web Vitals before coordinated launch, editor training, and ongoing care handover.',
        deliverable: 'Live UK online store & operations guide',
      },
    ],
  },
  whyChooseSection: {
    id: 'why-wpcarepoint-ecommerce',
    eyebrow: 'Why Choose WPCarePoint for eCommerce',
    title: 'Engineering precision designed specifically around UK retail realities.',
    description:
      'We treat checkout speed, tax accuracy, and maintainability as core business infrastructure rather than afterthoughts.',
    items: [
      {
        index: '01.',
        title: 'Built Without Heavy Builder Bloat',
        summary:
          'Replacing bulky retail page-builder stacks with lean custom WooCommerce code keeps mobile category browsing and basket updates crisp.',
        standard: 'Clean Storefront Code',
      },
      {
        index: '02.',
        title: 'UK Commercial Literacy',
        summary:
          'GBP currency handling, UK VAT rules, British postcode addressing, and SCA card authentication are engineered properly from day one.',
        standard: 'UK VAT · GBP (£) · 3D Secure',
      },
      {
        index: '03.',
        title: 'Honest Integration Scoping',
        summary:
          'Only the accounting, CRM, or shipping connections your operation genuinely uses are integrated—saving ongoing plugin licensing and complexity.',
        standard: 'Tailored Per Project Scope',
      },
      {
        index: '04.',
        title: 'Full Store & Customer Data Ownership',
        summary:
          'No SaaS platform lock-in or revenue-share penalties: your store codebase, database, and domain remain 100% under your business ownership.',
        standard: '100% Business Ownership',
      },
    ],
  },
  faqSection: {
    id: 'service-faq',
    eyebrow: 'eCommerce Development FAQ',
    title: 'Clear answers for UK retailers planning a WooCommerce or custom store.',
    description:
      'Practical detail on platform fit, payments, integrations, speed, and ongoing maintenance.',
    faqs: [
      {
        id: 'ec-faq-1',
        question: 'Should we choose WooCommerce or a custom eCommerce build?',
        answer:
          'WooCommerce is an ideal fit when you want deep WordPress editorial flexibility alongside full ownership of your store, GBP/VAT logic, and catalogue data without per-transaction platform fees. A custom React / Next.js or bespoke storefront makes sense when you have highly specialised configurators, headless systems, or non-standard trade ordering workflows.',
      },
      {
        id: 'ec-faq-2',
        question: 'Are integrations like Xero, HubSpot, Stripe, or courier APIs included in every build?',
        answer:
          'No—each store is scoped around what your team genuinely needs. Core GBP checkout and Stripe integration are common foundations, while accounting links (such as Xero), CRM syncs (such as HubSpot), or specific shipping integrations (such as Royal Mail or DPD workflows) are scoped cleanly based on your operational brief.',
      },
      {
        id: 'ec-faq-3',
        question: 'Can you migrate our products, customers, and URLs from an older store without losing SEO?',
        answer:
          'Yes. We map existing product and category slugs, preserve ranking URLs wherever possible, configure clean single-hop 301 redirects for any changed routes, and migrate structured product data safely on staging before DNS cut-over.',
      },
      {
        id: 'ec-faq-4',
        question: 'How do you keep WooCommerce sites fast as our catalogue and order history grow?',
        answer:
          'We avoid heavy visual page builders, use lean custom templates, configure WooCommerce High-Performance Order Storage (HPOS), compress catalogue photography to WebP, and separate static browse caching cleanly from dynamic basket/checkout endpoints.',
      },
      {
        id: 'ec-faq-5',
        question: 'How is an eCommerce website priced and scoped?',
        answer:
          'Store complexity depends on SKU structure, bespoke shipping/tax rules, trade accounts, data migration, and external integrations. Send your requirements or current store URL to contact@wpcarepoint.co.uk and we will prepare a clear written proposal.',
      },
      {
        id: 'ec-faq-6',
        question: 'Do you support stores after launch with updates and checkout testing?',
        answer:
          'Yes. Our Website Care & Technical Support service (especially our Elite Care scope) includes staging-tested plugin updates, high-frequency backups, and checkout/payment regression checks before changes touch your live store.',
      },
    ],
  },
  relatedSection: {
    eyebrow: 'Related eCommerce Capabilities',
    title: 'Support performance, stability, and search visibility for your store',
    items: [
      {
        eyebrow: 'Store Performance',
        title: 'WordPress Speed Optimisation',
        description:
          'Diagnostic Core Web Vitals tuning, cart-safe caching rules, and WooCommerce database hygiene for faster mobile checkouts.',
        ctaLabel: 'Explore Speed Optimisation',
        targetType: 'route',
        href: '/wordpress-speed-optimisation/',
      },
      {
        eyebrow: 'Store Protection',
        title: 'Website Care & Technical Support',
        description:
          'Staging-tested updates, database snapshots, and regression testing designed to keep transactional checkouts dependable.',
        ctaLabel: 'Explore Website Care',
        targetType: 'route',
        href: '/services/website-care-support/',
      },
      {
        eyebrow: 'Workflow Efficiency',
        title: 'AI & Business Automation',
        description:
          'Connect enquiries, order milestones, CRM updates, and operational notifications cleanly with human oversight.',
        ctaLabel: 'Explore Business Automation',
        targetType: 'route',
        href: '/services/ai-business-automation/',
      },
    ],
  },
  ctaSection: {
    eyebrow: 'Discuss Your Online Store',
    headline: 'Planning a new WooCommerce store or upgrading an underperforming shop?',
    description:
      'Email your current store URL (if applicable), catalogue overview, shipping model, and target integrations to contact@wpcarepoint.co.uk for clear written scoping.',
    mailtoSubject: 'eCommerce & WooCommerce Store Scope Enquiry',
    primaryButtonLabel: 'Send eCommerce Enquiry',
  },
};

export const AI_AUTOMATION_PAGE_DATA: DedicatedServicePageConfig = {
  id: 'ai-business-automation',
  routePath: '/services/ai-business-automation/',
  canonicalUrl: 'https://wpcarepoint.co.uk/services/ai-business-automation/',
  metaTitle: 'AI & Business Process Automation UK | API Workflows & CRM Integration – WPCarePoint',
  metaDescription:
    'Practical AI integration and business process automation for UK organisations. CRM enquiry routing, custom API integrations, repetitive task reduction, and human-in-the-loop governance.',
  serviceSchemaName: 'AI & Business Process Automation',
  breadcrumbLabel: 'AI & Business Automation',
  hero: {
    eyebrow: '03. AI & Business Process Automation · United Kingdom',
    headline: 'Practical automation connecting your website, CRM, and operations—with human oversight built in.',
    description:
      'WPCarePoint helps British businesses eliminate manual copy-pasting and repetitive admin through dependable API integrations and carefully scoped AI workflows—designed around data privacy, clear permissions, and human sign-off.',
    primaryCtaLabel: 'Request Automation Consultation',
    secondaryCtaLabel: 'How We Approach Automation',
    secondaryCtaTargetId: 'service-intro',
    imageUrl: '/src/assets/images/service_ai_workflow_1795541283281.jpg',
    imageAlt:
      'Modular frosted glass nodes and brushed coastal teal metallic routing blocks representing structured workflow engineering',
    imageCaption: 'Structured API pipelines · Scoped AI assistance with mandatory human checkpoints',
    standards: [
      { label: 'Core Focus', value: 'APIs · CRM · Task Automation' },
      { label: 'Governance Model', value: 'Human Approval Checkpoints' },
      { label: 'Data Boundaries', value: 'UK GDPR Data Minimisation' },
      { label: 'Deployment Style', value: 'Auditable & Reversible Flows' },
    ],
  },
  jumpLinks: [
    { label: 'Practical Approach', targetId: 'service-intro' },
    { label: 'Workflow Scope', targetId: 'automation-capabilities' },
    { label: 'Governance & Privacy', targetId: 'automation-governance' },
    { label: 'Process', targetId: 'delivery-process' },
    { label: 'FAQ', targetId: 'service-faq' },
    { label: 'Enquire', targetId: 'contact' },
  ],
  introSection: {
    id: 'service-intro',
    eyebrow: 'Introduction to Practical Business Automation',
    title: 'Useful operational automation starts with clear business processes—not AI hype.',
    paragraphs: [
      'Most growing organisations lose hours each week to predictable bottlenecks: transferring website leads manually into spreadsheets or CRMs, formatting recurring reports, answering repeat triage questions, or synchronising billing records between disconnected software platforms.',
      'Before introducing any AI component, we map what can be solved deterministically through clean APIs, structured webhooks, and validated business rules. Where language intelligence genuinely adds value—such as categorising messy inbound briefs, summarising long service threads, or retrieving grounded answers from approved internal documentation—we design tight, verifiable workflows.',
      'Crucially, we never advise letting autonomous AI publish unchecked changes to live customer records, accounting entries, or public websites. Every critical output sits behind human review, permission boundaries, and clear activity logs.',
    ],
    asideEyebrow: 'Responsible Automation Principles',
    asideTitle: 'Why structured governance beats unchecked autonomy',
    asidePoints: [
      {
        title: 'Deterministic Rules First, AI Where Helpful',
        detail:
          'Standard data syncs and validation run via deterministic code; AI models are applied selectively for triage, summarisation, and draft preparation.',
      },
      {
        title: 'Human Approval Before External Action',
        detail:
          'Customer replies, quotes, invoices, or live website edits are drafted for team review rather than auto-sent blindly.',
      },
      {
        title: 'Clear Failure Handling & Logs',
        detail:
          'Every API sync records timestamps, statuses, and readable alerts so your team spots and recovers from third-party outages quickly.',
      },
    ],
  },
  capabilitiesSection: {
    id: 'automation-capabilities',
    eyebrow: 'Automation & Integration Capabilities',
    title: 'Practical workflow improvements delivering measurable daily time savings.',
    description:
      'Every automation is scoped around your existing tools, security requirements, and real operational bottlenecks.',
    items: [
      {
        index: '01.',
        title: 'AI-Powered Business Workflows',
        subtitle: 'Enquiry Triage · Draft Preparation · Grounded Search',
        summary:
          'Targeted AI workflows that read incoming documents, classify service requests, draft structured summaries, and surface verified reference details for your staff.',
        points: [
          'Structured brief categorisation tagging urgency, service line, and missing info',
          'Drafting consistent internal summaries and response outlines for human review',
          'Internal knowledge lookup grounded strictly in verified company documentation',
        ],
      },
      {
        index: '02.',
        title: 'CRM & Lead Management Automation',
        subtitle: 'HubSpot · Structured Webhooks · Follow-Up Hygiene',
        summary:
          'Connecting website touchpoints cleanly into CRM records so prospects are logged accurately without duplicate entries or forgotten tasks.',
        points: [
          'Automated lead creation and field validation into systems such as HubSpot',
          'Deduplication checks preventing messy contact records across channels',
          'Internal notification routing alerting the right specialist cleanly',
        ],
      },
      {
        index: '03.',
        title: 'API & Third-Party System Integrations',
        subtitle: 'REST · GraphQL · Accounting & Store Syncs',
        summary:
          'Bespoke middleware bridging WordPress, WooCommerce, Next.js apps, finance software, and internal back-office systems reliably.',
        points: [
          'Scoped billing or invoice triggers linking stores/portals to tools like Xero',
          'Idempotent webhook receivers eliminating duplicate processing on retries',
          'Server-side secret isolation keeping API tokens invisible to browsers',
        ],
      },
      {
        index: '04.',
        title: 'Repetitive Task & Process Improvement',
        subtitle: 'Reporting · Onboarding Checklists · Content Prep',
        summary:
          'Removing routine manual admin across project onboarding, recurring operational reports, and multi-step checklist handoffs.',
        points: [
          'Automating standard project kick-off folders, tasks, and written templates',
          'Scheduled summary digests pulling metrics cleanly into readable updates',
          'Streamlining messy spreadsheet handoffs into reliable validated workflows',
        ],
      },
    ],
  },
  technicalSection: {
    id: 'automation-governance',
    eyebrow: 'Human Oversight, Privacy & Technical Safeguards',
    title: 'Four essential guardrails embedded into every automation workflow.',
    description:
      'Trustworthy business automation depends on strict boundaries around permissions, personal data, and auditability.',
    pillars: [
      {
        id: 'human-in-the-loop',
        index: '01.',
        eyebrow: 'Human Approval & Responsible AI Use',
        title: 'Clear approval gates keep staff in command of every important outcome',
        summary:
          'Automation should assist team decision-making rather than bypass accountability. We build explicit human-in-the-loop checkpoints wherever actions affect clients, finances, or live websites.',
        bullets: [
          'Draft-and-review workflows instead of unmonitored automated client emails',
          'Staging previews and explicit confirmation prior to production website or DB updates',
          'Transparent source citations so reviewers verify facts before acting on AI summaries',
          'Easy manual override and pause controls if an underlying business rule changes',
        ],
        calloutLabel: 'Operational Control',
        calloutText: 'No important customer, financial, or live publishing decision runs without human sign-off.',
      },
      {
        id: 'privacy-security',
        index: '02.',
        eyebrow: 'Data Privacy & Security Considerations',
        title: 'UK GDPR discipline, data minimisation, and strict credential boundaries',
        summary:
          'Sending raw client databases blindly to external tools creates avoidable compliance risks. We structure workflows around UK GDPR minimisation and least-privilege access.',
        bullets: [
          'Data minimisation: only fields strictly needed for the task leave your primary system',
          'Zero hardcoded API keys and scoped least-privilege permissions per integration',
          'Respecting provider zero-retention/no-training configurations where AI APIs are used',
          'Keeping marketing consent, operational logs, and sensitive records strictly separated',
        ],
        calloutLabel: 'Privacy Alignment',
        calloutText: 'Designed around UK GDPR / PECR principles with documented data flow boundaries.',
      },
      {
        id: 'api-resilience',
        index: '03.',
        eyebrow: 'Reliable Engineering & Error Recovery',
        title: 'Defensive API engineering built for real-world network conditions',
        summary:
          'Third-party APIs rate-limit, time out, or reject malformed payloads. We engineer clean input validation, retries, and readable error alerts from day one.',
        bullets: [
          'Strict payload schema validation before passing inputs to downstream APIs',
          'Controlled backoff retries and dead-letter logs instead of silent dropped tasks',
          'Clear alert routing so technical admins see exactly which step failed and why',
          'Staging/sandbox testing harnesses using synthetic test data prior to launch',
        ],
        calloutLabel: 'Zero Silent Drops',
        calloutText: 'Predictable error paths ensure enquiries or orders are never lost quietly.',
      },
      {
        id: 'process-redesign',
        index: '04.',
        eyebrow: 'Business Process Improvement Before Code',
        title: 'Simplifying steps before automating ensures durable ROI',
        summary:
          'Automating a confusing manual process simply creates confusion faster. We work with your team to tidy ownership, naming rules, and edge cases first.',
        bullets: [
          'Process audit isolating redundant approval loops and duplicate data entry',
          'Clear definition of triggers, exceptions, and owner responsibilities',
          'Documentation showing non-technical staff how the workflow operates',
          'Clean modular architecture allowing future tool swaps without starting over',
        ],
        calloutLabel: 'Long-Term Fit',
        calloutText: 'Clean workflow specs your team can inspect, maintain, and extend safely.',
      },
    ],
  },
  processSection: {
    id: 'delivery-process',
    eyebrow: 'Implementation Process',
    title: 'Four controlled phases from workflow mapping to audited production handover.',
    description:
      'Every integration and automation is scoped cleanly, built in an isolated test environment, and verified with realistic edge cases.',
    steps: [
      {
        step: '01.',
        title: 'Process Mapping & Tool Audit',
        summary:
          'We examine the repetitive task, existing APIs or webhooks, data privacy boundaries, and exact points where human approval is required.',
        deliverable: 'Written workflow & risk specification',
      },
      {
        step: '02.',
        title: 'Architecture & Permission Design',
        summary:
          'Data fields, validation schemas, scoped API credentials, retry safeguards, and reviewer approval steps are mapped cleanly before build.',
        deliverable: 'API blueprint & privacy checklist',
      },
      {
        step: '03.',
        title: 'Staging Build & Synthetic Testing',
        summary:
          'We engineer the connectors and test normal, malformed, timeout, and duplicate inputs safely inside a sandbox environment.',
        deliverable: 'Verified test run & audit log view',
      },
      {
        step: '04.',
        title: 'Controlled Rollout & Team Guide',
        summary:
          'Approved workflows go live with monitoring alerts, clear override switches, and plain-English team documentation.',
        deliverable: 'Active workflow & operations handbook',
      },
    ],
  },
  whyChooseSection: {
    id: 'why-wpcarepoint-automation',
    eyebrow: 'Why Choose WPCarePoint for Automation',
    title: 'Grounded software engineering rather than fragile no-code spaghetti.',
    description:
      'We build workflows your operations team can genuinely rely on, explain, and control.',
    items: [
      {
        index: '01.',
        title: 'Honest Scope Without Exaggeration',
        summary:
          'We distinguish clearly between reliable API automation and bounded AI drafting—never promising magical fully autonomous operations.',
        standard: 'Realistic Technical Fit',
      },
      {
        index: '02.',
        title: 'Web, eCommerce & API Continuity',
        summary:
          'Because we engineer WordPress, WooCommerce, and Next.js sites directly, automation connects cleanly with your frontend codebase.',
        standard: 'End-to-End Integration',
      },
      {
        index: '03.',
        title: 'Security & Privacy by Design',
        summary:
          'Minimal data exposure, encrypted server credentials, and mandatory human approval gates protect your reputation and client trust.',
        standard: 'UK GDPR & Human Control',
      },
      {
        index: '04.',
        title: 'Clear Documentation & Handover',
        summary:
          'You receive clear technical documentation showing triggers, endpoints, and failure steps—never an undocumented black box.',
        standard: 'Full Client Visibility',
      },
    ],
  },
  faqSection: {
    id: 'service-faq',
    eyebrow: 'AI & Automation FAQ',
    title: 'Straightforward questions on practical business automation and safeguards.',
    description:
      'Clarity on human oversight, data privacy, custom APIs, and realistic ROI.',
    faqs: [
      {
        id: 'ai-faq-1',
        question: 'Does WPCarePoint set up completely autonomous AI agents that act without oversight?',
        answer:
          'No. For commercial safety, reputation protection, and data accuracy, we design workflows around bounded automation and human-in-the-loop approval checkpoints. AI can classify requests, summarise data, or prepare drafts, while important customer communications, billing actions, and live website edits remain under human control.',
      },
      {
        id: 'ai-faq-2',
        question: 'Do every single business workflow and automation require AI?',
        answer:
          'Not at all. Many of the highest-value improvements—such as syncing website enquiries cleanly to HubSpot, triggering verified Xero records, or deduplicating spreadsheets—work faster, cheaper, and more reliably using clean API code and validation rules without an LLM involved.',
      },
      {
        id: 'ai-faq-3',
        question: 'How do you protect business and client data privacy when using AI tools?',
        answer:
          'We apply UK GDPR data minimisation principles: filtering out unnecessary personal identifiers before external calls, isolating credentials server-side, selecting enterprise API modes where inputs are not used to train public models, and agreeing clear data boundaries in writing upfront.',
      },
      {
        id: 'ai-faq-4',
        question: 'Which systems can you integrate with our website?',
        answer:
          'We build clean REST, GraphQL, and webhook connections across WordPress, WooCommerce, React / Next.js applications, HubSpot CRM, Xero accounting, Stripe payments, and verified internal business APIs scoped to your exact tools.',
      },
      {
        id: 'ai-faq-5',
        question: 'What happens if a third-party service temporarily goes offline?',
        answer:
          'Every integration is built defensively with schema validation, controlled retries, idempotency protection against duplicate actions, and readable error notifications so your team sees and recovers from interruptions cleanly.',
      },
      {
        id: 'ai-faq-6',
        question: 'How do we scope an automation or API integration project?',
        answer:
          'Email a summary of the manual process, the software tools involved, and what output your team wants to simplify to contact@wpcarepoint.co.uk. We will review feasibility and respond in writing with clear next steps.',
      },
    ],
  },
  relatedSection: {
    eyebrow: 'Connected WPCarePoint Services',
    title: 'Pair workflow automation with custom builds and search readiness',
    items: [
      {
        eyebrow: 'Custom Platforms',
        title: 'Website Design & Development',
        description:
          'Bespoke WordPress and React / Next.js platforms built cleanly to host custom customer portals and API workflows.',
        ctaLabel: 'Explore Web Development',
        targetType: 'route',
        href: '/services/website-development/',
      },
      {
        eyebrow: 'Store Automation',
        title: 'eCommerce & WooCommerce Development',
        description:
          'Clean UK WooCommerce architectures with scoped payment, accounting, and order lifecycle workflows.',
        ctaLabel: 'Explore eCommerce Builds',
        targetType: 'route',
        href: '/services/ecommerce-development/',
      },
      {
        eyebrow: 'Search & AI Visibility',
        title: 'SEO & AI Search Optimisation',
        description:
          'Technical SEO, Schema.org entities, and GEO / AIO structure helping AI tools interpret your brand accurately.',
        ctaLabel: 'Explore SEO & AI Search',
        targetType: 'route',
        href: '/services/ai-search-optimisation/',
      },
    ],
  },
  ctaSection: {
    eyebrow: 'Discuss Your Automation Workflow',
    headline: 'Ready to replace repetitive manual admin with reliable workflows?',
    description:
      'Email the business process you want to streamline and the software tools involved to contact@wpcarepoint.co.uk. We assess technical feasibility and data safeguards directly in writing.',
    mailtoSubject: 'AI & Business Process Automation Consultation',
    primaryButtonLabel: 'Request Automation Consultation',
  },
};

export const WEBSITE_CARE_SUPPORT_PAGE_DATA: DedicatedServicePageConfig = {
  id: 'website-care-support',
  routePath: '/services/website-care-support/',
  canonicalUrl: 'https://wpcarepoint.co.uk/services/website-care-support/',
  metaTitle: 'Website Care & WordPress Technical Support UK | Maintenance & Fixes – WPCarePoint',
  metaDescription:
    'Dependable UK website maintenance, staging-tested WordPress updates, encrypted off-site backups, security hardening, and one-off WordPress Quick Fixes. Enquire for tailored pricing.',
  serviceSchemaName: 'Website Care & Technical Support',
  breadcrumbLabel: 'Website Care & Technical Support',
  hero: {
    eyebrow: '04. Website Care & Technical Support · United Kingdom',
    headline: 'Proactive website stewardship keeping your WordPress site updated, backed up, and protected.',
    description:
      'Businesses rely on their website working cleanly every morning. WPCarePoint handles staging-tested updates, encrypted off-site backups, security hardening, and direct email technical troubleshooting—alongside one-off WordPress fixes when needed.',
    primaryCtaLabel: 'Enquire About Website Care',
    secondaryCtaLabel: 'View Care Tiers',
    secondaryCtaTargetId: 'care-plan-tiers',
    imageUrl: '/src/assets/images/service_website_care_1795468678272.jpg',
    imageAlt:
      'Brushed steel and deep coastal teal protective vault block on pale travertine representing website backup and security stewardship',
    imageCaption: 'Staging-first updates · Encrypted UK/EEA backups · Direct engineering support',
    standards: [
      { label: 'Update Workflow', value: 'Tested on Staging First' },
      { label: 'Backup Discipline', value: 'Encrypted Off-Site Copies' },
      { label: 'Care Plan Pricing', value: 'Scoped Honestly in Writing' },
      { label: 'Quick Fix Option', value: 'One-Off Repairs Available' },
    ],
  },
  jumpLinks: [
    { label: 'Why Care Matters', targetId: 'service-intro' },
    { label: 'Care Scope', targetId: 'care-capabilities' },
    { label: 'Plan Tiers & Quick Fix', targetId: 'care-plan-tiers' },
    { label: 'Technical Safeguards', targetId: 'care-safeguards' },
    { label: 'FAQ', targetId: 'service-faq' },
    { label: 'Enquire', targetId: 'contact' },
  ],
  introSection: {
    id: 'service-intro',
    eyebrow: 'Why Ongoing Website Maintenance Matters',
    title: 'Preventing quiet WordPress decay costs far less than recovering a broken live website.',
    paragraphs: [
      'A healthy WordPress or WooCommerce site runs on dozens of moving pieces—WordPress core, PHP server versions, SSL certificates, theme code, and third-party plugins. Left unmaintained, outdated components become common targets for automated malware injection or break silently after automatic host updates.',
      'Equally, clicking "Update All" directly on a live production website without backups or staging checks often breaks contact forms, layouts, or checkout scripts during peak trading hours.',
      'WPCarePoint provides calm, structured stewardship: taking verified encrypted off-site backups, running updates on staging copies first, monitoring uptime, and stepping in with written technical diagnosis whenever issues surface.',
    ],
    asideEyebrow: 'Honest Stewardship Standard',
    asideTitle: 'Clear terms without invented SLAs or locked contracts',
    asidePoints: [
      {
        title: 'No Arbitrary Response Promises',
        detail:
          'We never publish fabricated "24/7" or "<30 minute" marketing claims. Actual support hours and scope boundaries are agreed transparently in writing.',
      },
      {
        title: 'Tailored Scoping Over Blanket Pricing',
        detail:
          'A simple brochure website and a multi-gateway WooCommerce store carry very different backup and regression needs—every tier is scoped fairly.',
      },
      {
        title: 'Emergency Help Subject to Availability',
        detail:
          'Urgent error diagnosis or malware cleanup requests are assessed promptly by email at contact@wpcarepoint.co.uk based on verified engineering capacity.',
      },
    ],
  },
  capabilitiesSection: {
    id: 'care-capabilities',
    eyebrow: 'Maintenance, Security & Support Capabilities',
    title: 'Comprehensive technical care built to protect uptime, data integrity, and peace of mind.',
    description:
      'Every core layer—from routine plugin patching and encrypted restore points to bug investigation—is handled systematically.',
    items: [
      {
        index: '01.',
        title: 'WordPress Maintenance & Staging Updates',
        subtitle: 'Core · Themes · Vetted Plugins',
        summary:
          'Managed updates verified in an isolated staging environment before deployment so visual layouts, menus, and forms never break silently in production.',
        points: [
          'WordPress core, theme, and plugin update cycles validated on staging',
          'Functional inspection of key pages, forms, and checkout routes post-update',
          'PHP version compatibility tracking alongside your UK hosting environment',
        ],
      },
      {
        index: '02.',
        title: 'Website Security & Hardening',
        subtitle: 'Access Hygiene · Firewall · Cleanup Readiness',
        summary:
          'Practical security layers reducing common WordPress attack vectors across login endpoints, file permissions, and vulnerable extensions.',
        points: [
          'Hardened wp-admin access controls, user role audits, and XML-RPC review',
          'Malware, injected spam file, and integrity scanning hygiene',
          'Cloudflare edge security alignment and SSL certificate verification',
        ],
      },
      {
        index: '03.',
        title: 'Encrypted Off-Site Backups & Recovery',
        subtitle: 'Independent Storage · Tested Restores',
        summary:
          'Your backup should never live solely on the same hosting account as your live site. We maintain independent encrypted restore points for files and databases.',
        points: [
          'Scheduled off-site encrypted backups separated from primary host storage',
          'Higher-frequency database snapshots available for WooCommerce stores',
          'Documented restoration workflow ready if hosting or code failures occur',
        ],
      },
      {
        index: '04.',
        title: 'Monitoring, Bug Fixes & Troubleshooting',
        subtitle: 'Uptime Checks · Error Diagnosis · Emergency Scope',
        summary:
          'Ongoing availability checks paired with direct engineering debugging when plugin conflicts, fatal PHP errors, or unexpected site faults occur.',
        points: [
          'Continuous uptime checks and broken certificate alerting',
          'Troubleshooting white-screen errors, layout regressions, and form issues',
          'Priority incident and WordPress emergency support subject to verified capacity',
        ],
      },
    ],
  },
  carePlansSection: {
    id: 'care-plan-tiers',
    eyebrow: 'Essential, Advanced & Elite Care Overview',
    title: 'Three structured stewardship tiers—scoped fairly around your platform.',
    description:
      'All ongoing plans are billed cleanly with transparent written scopes. Request tailored pricing for your website rather than paying arbitrary one-size-fits-all rates.',
    plans: [
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
    ],
    quickFixEyebrow: 'One-Off WordPress Fixes',
    quickFixTitle: 'Need a standalone fix without an ongoing Care Plan?',
    quickFixDescription:
      'Whether dealing with a critical plugin conflict, broken layout, SSL certificate warning, database connection error, or post-migration fault, you can commission a single scoped WordPress Quick Fix directly by email.',
    quickFixButtonLabel: 'Enquire About a Quick Fix',
    quickFixSubject: 'One-Off WordPress Quick Fix Enquiry',
  },
  technicalSection: {
    id: 'care-safeguards',
    eyebrow: 'Operational & Support Safeguards',
    title: 'How we protect live business websites during routine maintenance and urgent repairs.',
    description:
      'Clarity on staging workflow, emergency assistance boundaries, and handover independence.',
    pillars: [
      {
        id: 'care-staging',
        index: '01.',
        eyebrow: 'Staging-First Update Discipline',
        title: 'Testing plugin and theme updates away from public visitors',
        summary:
          'Blind updates inside the live WordPress dashboard remain the most common cause of sudden website breakage. Our care workflow enforces isolation first.',
        bullets: [
          'Full backup taken immediately prior to staging update cycles',
          'Visual inspection of homepage, header navigation, and mobile menus',
          'Contact page, search, and WooCommerce basket verification on test copy',
          'Controlled production rollout with quick-rollback readiness',
        ],
        calloutLabel: 'Update Safety',
        calloutText: 'Zero blind "Update All" clicks on live business websites.',
      },
      {
        id: 'care-emergency',
        index: '02.',
        eyebrow: 'Emergency & Urgent Support Scope',
        title: 'Realistic triage when a site goes down or suffers suspected malware',
        summary:
          'When a critical error or security event hits, fast accurate triage matters more than empty marketing slogans. We assess urgent email requests directly against verified engineering availability.',
        bullets: [
          'Email contact@wpcarepoint.co.uk with website URL, error code, and host details',
          'Immediate snapshot preservation before touching corrupted files or databases',
          'Root-cause isolation across error logs, plugins, DNS, or hosting configuration',
          'Clean remediation and post-incident hardening recommendations in writing',
        ],
        calloutLabel: 'Availability Clarity',
        calloutText:
          'Emergency support is provided subject to verified engineering availability and written scope confirmation.',
      },
      {
        id: 'care-monitoring',
        index: '03.',
        eyebrow: 'Monitoring, Backups & Host Coordination',
        title: 'Independent off-site resilience paired with clear UK hosting visibility',
        summary:
          'If your web host has a hardware fault or billing hiccup, an external backup copy protects your business continuity.',
        bullets: [
          'Automated uptime alerts notifying engineering on extended outages',
          'Off-site encrypted archive copies retained outside single-host failure zones',
          'Coordinating calmly with UK hosts (20i, Krystal, SiteGround UK, Cloudflare) if server-side issues arise',
          'Periodic checks verifying expired domains or DNS mismatches do not slip unnoticed',
        ],
        calloutLabel: 'Data Residency',
        calloutText: 'Backups and restoration procedures are agreed clearly in your onboarding scope.',
      },
      {
        id: 'care-quickfix',
        index: '04.',
        eyebrow: 'One-Off Fixes & Transparent Exit',
        title: 'No captive contracts—commission standalone repairs or step away cleanly',
        summary:
          'Good stewardship earns trust through reliability, not restrictive cancellation hurdles. Both one-off fixes and monthly plans respect full ownership.',
        bullets: [
          'Standalone WordPress Quick Fixes scoped in writing before repair work begins',
          'Zero proprietary plugins holding site layouts hostage if you cancel',
          'Written summary after technical interventions documenting what changed and why',
          'Direct pathway to combine Care Plans with WordPress Speed or SEO improvements',
        ],
        calloutLabel: 'Zero Lock-In',
        calloutText: 'Your hosting, backups, and codebase stay fully accessible to your business.',
      },
    ],
  },
  processSection: {
    id: 'delivery-process',
    eyebrow: 'Care Onboarding & Maintenance Cycle',
    title: 'Four methodical steps from technical onboarding audit to steady monthly care.',
    description:
      'Whether joining a Care Plan or commissioning a one-off WordPress fix, everything starts with a verified baseline.',
    steps: [
      {
        step: '01.',
        title: 'Baseline Audit & Access Check',
        summary:
          'We verify WordPress, plugin, PHP, SSL, and hosting health while establishing encrypted off-site backups before touching any code.',
        deliverable: 'Written site health & risk summary',
      },
      {
        step: '02.',
        title: 'Clean Staging & Security Setup',
        summary:
          'We establish isolated staging workflow rules, clean stale plugins/users, and verify monitoring and backup restoration paths.',
        deliverable: 'Active backup & staging pipeline',
      },
      {
        step: '03.',
        title: 'Managed Updates & Regression QA',
        summary:
          'Scheduled core, theme, and plugin updates run on staging first, checked across mobile/desktop layouts, forms, and checkouts.',
        deliverable: 'Tested live maintenance updates',
      },
      {
        step: '04.',
        title: 'Ongoing Support & Troubleshooting',
        summary:
          'Direct email technical support handles troubleshooting, minor engineering updates (on eligible scopes), and speed/security hygiene.',
        deliverable: 'Written update notes & direct support',
      },
    ],
  },
  whyChooseSection: {
    id: 'why-wpcarepoint-care',
    eyebrow: 'Why Trust WPCarePoint With Maintenance',
    title: 'Direct senior engineering support without bloated support queues.',
    description:
      'When something breaks, you communicate directly with engineers who build and debug WordPress code every day.',
    items: [
      {
        index: '01.',
        title: 'No Unverified SLA Marketing Gimmicks',
        summary:
          'We confirm honest support coverage, hours, and terms clearly in writing rather than overpromising unrealistic 24/7 response guarantees.',
        standard: 'Transparent Written Terms',
      },
      {
        index: '02.',
        title: 'Real Engineering Debugging',
        summary:
          'Rather than merely re-installing plugins, we inspect PHP logs, database autoloads, theme hooks, and edge caching rules cleanly.',
        standard: 'Code-Level Troubleshooting',
      },
      {
        index: '03.',
        title: 'Fair Scope-Led Pricing',
        summary:
          'Brochure websites, lead-gen hubs, and busy WooCommerce stores receive right-sized stewardship without overpaying for unused extras.',
        standard: 'Enquire for Accurate Scoping',
      },
      {
        index: '04.',
        title: 'Unified Speed & Security Oversight',
        summary:
          'Maintenance pairs cleanly with Core Web Vitals speed engineering and technical SEO protection so your site stays fast as well as safe.',
        standard: 'Care · Speed · Stability',
      },
    ],
  },
  faqSection: {
    id: 'service-faq',
    eyebrow: 'Website Care & Support FAQ',
    title: 'Clear answers about Care Plans, Quick Fixes, backups, and pricing.',
    description:
      'Transparent expectations on how WPCarePoint maintains UK WordPress and WooCommerce sites.',
    faqs: [
      {
        id: 'wc-faq-1',
        question: 'Why do Essential, Advanced, and Elite Care show "Enquire for Pricing"?',
        answer:
          'Website care requirements vary significantly between a compact 5-page WordPress site, a custom multi-API platform, and an active WooCommerce store needing checkout regression testing and frequent database backups. Scoping in writing ensures transparent pricing without hidden extras.',
      },
      {
        id: 'wc-faq-2',
        question: 'Do you guarantee 24/7 phone support or a fixed 30-minute SLA?',
        answer:
          'No. We do not publish unverified 24/7 support claims, call-centre phone lines, or fixed minute-by-minute SLA promises. All technical communication runs by email at contact@wpcarepoint.co.uk with clear written scope agreements tailored to your site tier.',
      },
      {
        id: 'wc-faq-3',
        question: 'Can we book a one-off WordPress fix without joining a monthly Care Plan?',
        answer:
          'Yes. If you have an urgent error, broken plugin update, SSL issue, or layout bug, email your website URL and symptoms to contact@wpcarepoint.co.uk for standalone Quick Fix scoping with zero ongoing tie-in.',
      },
      {
        id: 'wc-faq-4',
        question: 'Are updates tested on staging before touching our live website?',
        answer:
          'Yes. Prior to updating production WordPress core, themes, or plugins, we secure an off-site backup and validate updates cleanly so menus, forms, and WooCommerce checkouts remain intact.',
      },
      {
        id: 'wc-faq-5',
        question: 'Can you help if our WordPress website has already been compromised or hacked?',
        answer:
          'Yes, subject to verified engineering assessment and capacity. Email your domain and symptoms to contact@wpcarepoint.co.uk—we preserve forensic snapshots, audit injected files/spam URLs, clean the codebase, harden access, and advise on Google indexing recovery.',
      },
      {
        id: 'wc-faq-6',
        question: 'What happens if we already host with 20i, Krystal, SiteGround UK, or Cloudflare?',
        answer:
          'We work comfortably alongside all major UK hosting providers and Cloudflare DNS setups. You keep full account ownership while we manage backups, staging checks, and security hygiene.',
      },
    ],
  },
  relatedSection: {
    eyebrow: 'Related Care & Engineering Services',
    title: 'Pair ongoing stewardship with performance and architecture improvements',
    items: [
      {
        eyebrow: 'Performance Engineering',
        title: 'WordPress Speed Optimisation',
        description:
          'Standalone bottleneck audits, WebP media conversion, database cleanup, and Core Web Vitals tuning on staging.',
        ctaLabel: 'Explore Speed Optimisation',
        targetType: 'route',
        href: '/wordpress-speed-optimisation/',
      },
      {
        eyebrow: 'Clean Builds & Rebuilds',
        title: 'Website Design & Development',
        description:
          'Replace brittle legacy page-builder templates with clean custom WordPress blocks or modern React / Next.js architecture.',
        ctaLabel: 'Explore Web Development',
        targetType: 'route',
        href: '/services/website-development/',
      },
      {
        eyebrow: 'Direct Correspondence',
        title: 'Contact WPCarePoint',
        description:
          'Email our team directly with your website URL for Care Plan scoping, Quick Fixes, or emergency assessment.',
        ctaLabel: 'Visit Contact Page',
        targetType: 'route',
        href: '/contact/',
      },
    ],
  },
  ctaSection: {
    eyebrow: 'Enquire About Website Care or Quick Fixes',
    headline: 'Keep your WordPress or WooCommerce site updated, backed up, and dependable.',
    description:
      'Email your website URL, hosting setup, and whether you are looking for Essential/Advanced/Elite Care or a one-off fix to contact@wpcarepoint.co.uk.',
    mailtoSubject: 'Website Care & Technical Support Enquiry',
    primaryButtonLabel: 'Enquire by Email',
  },
};

export const AI_SEARCH_OPTIMISATION_PAGE_DATA: DedicatedServicePageConfig = {
  id: 'ai-search-optimisation',
  routePath: '/services/ai-search-optimisation/',
  canonicalUrl: 'https://wpcarepoint.co.uk/services/ai-search-optimisation/',
  metaTitle: 'SEO & AI Search Optimisation UK | Technical SEO, AIO & GEO – WPCarePoint',
  metaDescription:
    'Honest Technical SEO, Schema.org structured data, Search Experience Optimisation (SXO), AI Optimisation (AIO), and Generative Engine Optimisation (GEO) for UK organisations.',
  serviceSchemaName: 'SEO & AI Search Optimisation',
  breadcrumbLabel: 'SEO & AI Search Optimisation',
  hero: {
    eyebrow: '05. SEO & AI Search Optimisation · United Kingdom',
    headline: 'Search visibility engineered for Google UK crawlers, real visitors, and modern AI assistants.',
    description:
      'Search habits are evolving beyond blue links alone. WPCarePoint combines sound Technical SEO, structured Schema.org data, Search Experience Optimisation (SXO), and practical AIO / GEO structuring—grounded in factual clarity without ranking guarantees.',
    primaryCtaLabel: 'Request Search Audit Scope',
    secondaryCtaLabel: 'SEO, AIO, GEO & SXO Explained',
    secondaryCtaTargetId: 'service-intro',
    imageUrl: '/src/assets/images/service_ai_search_1795541283476.jpg',
    imageAlt:
      'Optical glass prism over layered archival index sheets casting crisp coastal teal geometry on limestone',
    imageCaption: 'Technical SEO · Schema.org entity clarity · AIO & GEO readiness',
    standards: [
      { label: 'Core Foundations', value: 'Technical SEO & Crawlability' },
      { label: 'Modern Discovery', value: 'AIO · GEO · Schema.org' },
      { label: 'User Alignment', value: 'SXO & Search Intent Clarity' },
      { label: 'Ethics Policy', value: 'Zero Ranking Guarantees' },
    ],
  },
  jumpLinks: [
    { label: 'Modern Search', targetId: 'service-intro' },
    { label: 'Core Disciplines', targetId: 'search-disciplines' },
    { label: 'AIO, GEO & Performance', targetId: 'aio-geo-pillars' },
    { label: 'Process', targetId: 'delivery-process' },
    { label: 'FAQ', targetId: 'service-faq' },
    { label: 'Enquire', targetId: 'contact' },
  ],
  introSection: {
    id: 'service-intro',
    eyebrow: 'Introduction to Modern Search Visibility',
    title: 'Clear architecture helps both classic search engines and generative AI models trust what your business does.',
    paragraphs: [
      'Traditional search engine crawlers and modern generative AI assistants (such as ChatGPT, Gemini, Perplexity, and Claude) rely on overlapping fundamentals: accessible HTML without script blockers, verifiable entity facts, clean internal linking, unambiguous canonical URLs, and helpful content aligned to genuine searcher intent.',
      'Many agencies rebrand basic copywriting as "AI SEO" or promise overnight citations and number-one Google positions. Neither search rankings nor AI model answers can be guaranteed—both shift continuously based on authority, competition, query phrasing, and model retrieval.',
      'Our approach focuses squarely on engineering what you can control: clean crawlability, accurate Schema.org structured data, natural British English content depth, responsive Core Web Vitals, and zero spam or duplicate-URL noise.',
    ],
    asideEyebrow: 'Terminology Explained Plainly',
    asideTitle: 'How Technical SEO, SXO, AIO, and GEO work together',
    asidePoints: [
      {
        title: 'Technical & On-Page SEO',
        detail:
          'Making sure Googlebot can crawl, render, canonicalise, and index important UK commercial pages efficiently without dead 404 loops or duplicate tags.',
      },
      {
        title: 'SXO (Search Experience Optimisation)',
        detail:
          'Matching the landing page layout, reading clarity, mobile speed, and conversion paths to what a searcher genuinely came to evaluate.',
      },
      {
        title: 'AIO & GEO (AI & Generative Search)',
        detail:
          'Structuring unambiguous brand, service, location, and FAQ entities using Schema.org and plain-English factual answers easy for AI retrieval systems to parse accurately.',
      },
    ],
  },
  capabilitiesSection: {
    id: 'search-disciplines',
    eyebrow: 'Core SEO & Structured Data Foundations',
    title: 'Four technical search disciplines establishing clean authority across Google UK.',
    description:
      'Strong AI visibility is impossible on top of broken indexing or thin duplicate templates—we secure core search foundations first.',
    items: [
      {
        index: '01.',
        title: 'Technical SEO & Crawl Governance',
        subtitle: 'Architecture · Canonicals · 301 & 410 Hygiene',
        summary:
          'Diagnosing and fixing crawl waste, redirect chains, broken canonical tags, conflicting hreflang signals, and leftover spam URLs hurting site trust.',
        points: [
          'Single-hop 301 redirect rules protecting historical equity during rebuilds',
          'Clean XML sitemaps containing solely canonical, indexable HTTP 200 URLs',
          'Proper HTTP 410 removal strategy for permanently retired or compromised URLs',
        ],
      },
      {
        index: '02.',
        title: 'On-Page SEO & Content Structure',
        subtitle: 'Semantic HTML · Heading Hierarchy · UK Copy',
        summary:
          'Structuring page titles, meta descriptions, single H1 anchors, logical H2/H3 sections, and descriptive internal anchor text without awkward keyword stuffing.',
        points: [
          'Clear topic alignment per page preventing service URLs competing against each other',
          'Readable British English (en-GB) service prose answering real buyer questions',
          'Clean internal linking connecting overview hubs to dedicated service pages',
        ],
      },
      {
        index: '03.',
        title: 'Website Indexing & Crawlability',
        subtitle: 'Rendering · Robots · Search Console Evidence',
        summary:
          'Ensuring critical commercial copy is present in initial server/prerendered HTML rather than locked inside client-side scripts crawlers delay or miss.',
        points: [
          'Inspection of Search Console indexing anomalies, soft-404s, and canonical drift',
          'Verification of robots.txt directives and meta-robots tag accuracy',
          'Clean pagination and archive rules preventing low-value tag bloat',
        ],
      },
      {
        index: '04.',
        title: 'Structured Data & Schema.org',
        subtitle: 'JSON-LD Graphs · Strict Visible Parity',
        summary:
          'Implementing validated JSON-LD graphs (Organization, LocalBusiness / ProfessionalService, Service, BreadcrumbList, FAQPage) matching visible page content 1:1.',
        points: [
          'Accurate UK business location, contact channel, and service-area entities',
          'FAQPage JSON-LD synced directly to genuine, non-promotional visible FAQs',
          'Zero spammy or misleading fake review/rating markup violating Google policies',
        ],
      },
    ],
  },
  technicalSection: {
    id: 'aio-geo-pillars',
    eyebrow: 'SXO, AIO, GEO, Content Intent & Core Web Vitals',
    title: 'Bridging human reading quality, structured AI comprehension, and fast mobile delivery.',
    description:
      'Every technical and editorial refinement supports discoverability without compromising credibility or page speed.',
    pillars: [
      {
        id: 'sxo-intent',
        index: '01.',
        eyebrow: 'Search Experience Optimisation (SXO) & Intent',
        title: 'Turning search impressions into clear, confident enquiries',
        summary:
          'Ranking means very little if a visitor lands on a vague wall of filler copy or hits slow mobile friction. SXO aligns page structure directly with buyer intent.',
        bullets: [
          'Immediate above-the-fold clarity confirming service scope and UK location focus',
          'Scannable subsections, bullet specifications, and transparent process steps',
          'Distraction-free navigation and credible email enquiry pathways',
          'Tailoring copy depth to search intent—technical answers over repetitive filler',
        ],
        calloutLabel: 'Human First',
        calloutText: 'Pages written for actual UK decision-makers perform better over the long run.',
      },
      {
        id: 'aio-structure',
        index: '02.',
        eyebrow: 'AI Optimisation (AIO)',
        title: 'Helping AI crawlers extract unambiguous facts about your business',
        summary:
          'Modern AI search tools parse entities, capabilities, geographic coverage, and explicit boundaries. Ambiguous marketing fluff leads models to skip or misrepresent services.',
        bullets: [
          'Concise plain-language factual statements mapping services, regions, and constraints',
          'Clean HTML semantics (article, section, dl/dt/dd, nav) aiding automated extraction',
          'Consistent naming of company details (WPCarePoint, Nutfield RH1 4HW, contact@wpcarepoint.co.uk)',
          'Reviewing AI crawler access and clean non-spam site architecture',
        ],
        calloutLabel: 'Factual Precision',
        calloutText: 'Clear documentation ensures assistants summarise your verified capabilities accurately.',
      },
      {
        id: 'geo-readiness',
        index: '03.',
        eyebrow: 'Generative Engine Optimisation (GEO)',
        title: 'Structuring authoritative answers for generative search summaries',
        summary:
          'GEO focuses on making complex service explanations self-contained, balanced, and trustworthy so synthesis engines find coherent substance rather than vague slogans.',
        bullets: [
          'Dedicated Q&A sections addressing nuance, edge cases, and honest trade-offs',
          'Clear comparisons (e.g. WordPress vs React/Next.js or WooCommerce vs bespoke builds)',
          'Consistent cross-page entity reinforcement between homepage and dedicated services',
          'Zero fabricated statistics—only grounded facts and defensible engineering reasoning',
        ],
        calloutLabel: 'Realistic Standard',
        calloutText:
          'We never promise guaranteed AI citations or featured placements—we build authentic technical eligibility.',
      },
      {
        id: 'cwv-performance',
        index: '04.',
        eyebrow: 'Performance & Core Web Vitals',
        title: 'Supporting search crawl efficiency and user experience through speed',
        summary:
          'Google uses Core Web Vitals (LCP, INP, CLS) as real page-experience signals, while bloated pages slow down crawl budgets on larger websites.',
        bullets: [
          'Evaluating Largest Contentful Paint, layout stability, and mobile responsiveness',
          'Eliminating render-blocking theme assets and oversized uncompressed imagery',
          'Clean server caching and CDN headers reducing Time to First Byte across UK nodes',
          'Direct integration with dedicated WordPress Speed Optimisation where needed',
        ],
        calloutLabel: 'Connected Engineering',
        calloutText: 'Technical SEO and WordPress Speed improvements reinforce one another cleanly.',
      },
    ],
  },
  processSection: {
    id: 'delivery-process',
    eyebrow: 'SEO & AI Search Improvement Process',
    title: 'Four methodical stages rooted in Search Console evidence rather than automated PDF scores.',
    description:
      'Every change is prioritised around technical impact, indexing safety, and realistic commercial value.',
    steps: [
      {
        step: '01.',
        title: 'Technical, Indexing & Content Audit',
        summary:
          'We inspect crawl behaviour, existing Search Console coverage, canonical consistency, Schema.org markup, page speed, and service overlap.',
        deliverable: 'Written technical SEO & AIO/GEO audit',
      },
      {
        step: '02.',
        title: 'URL Mapping & Structure Refinement',
        summary:
          'Target page architecture, heading hierarchy, internal link pathways, and single-hop 301/410 migration plans are documented safely before edits.',
        deliverable: 'Prioritised implementation roadmap',
      },
      {
        step: '03.',
        title: 'On-Page, Schema & Speed Implementation',
        summary:
          'Clean metadata, structured JSON-LD graphs, British English copy refinements, and Core Web Vitals improvements are tested cleanly on staging.',
        deliverable: 'Staging verification & schema checks',
      },
      {
        step: '04.',
        title: 'Controlled Release & Indexing Review',
        summary:
          'Live XML sitemaps, canonical headers, and post-launch crawl behaviour are checked cleanly to confirm clean search engine discovery.',
        deliverable: 'Verified live release & baseline notes',
      },
    ],
  },
  whyChooseSection: {
    id: 'why-wpcarepoint-seo',
    eyebrow: 'Why Choose WPCarePoint for Search',
    title: 'Engineers fixing real structural problems rather than sending automated audit PDFs.',
    description:
      'Because we understand themes, servers, routing, and Schema code directly, fixes actually get implemented cleanly.',
    items: [
      {
        index: '01.',
        title: 'Honesty Over Empty Ranking Promises',
        summary:
          'We explain openly why no trustworthy consultancy guarantees #1 Google spots, traffic surges, or guaranteed AI assistant citations.',
        standard: 'Transparent Ethics',
      },
      {
        index: '02.',
        title: 'Built Directly Into Code & Markup',
        summary:
          'Instead of dropping a heavy plugin with generic settings, we engineer clean semantic HTML, JSON-LD, and edge redirects properly.',
        standard: 'Developer-Grade SEO',
      },
      {
        index: '03.',
        title: 'Migration & Recovery Experience',
        summary:
          'Careful .co.uk redirect governance and spam-URL cleanup protect hard-earned domain authority during site rebuilds or post-incident recoveries.',
        standard: '301 / 410 Governance',
      },
      {
        index: '04.',
        title: 'Unified Speed, Content & SXO',
        summary:
          'Technical crawlability, Core Web Vitals performance, and human conversion clarity work together seamlessly under one team.',
        standard: 'SEO · SXO · AIO · GEO',
      },
    ],
  },
  faqSection: {
    id: 'service-faq',
    eyebrow: 'SEO & AI Search FAQ',
    title: 'Plain-English answers on SEO, AIO, GEO, SXO, and realistic outcomes.',
    description:
      'Clear expectations before commissioning search optimisation work.',
    faqs: [
      {
        id: 'seo-faq-1',
        question: 'Can you guarantee top Google rankings, AI citations, or exact traffic growth?',
        answer:
          'No. Google algorithms, SERP layouts, and AI model outputs (ChatGPT, Gemini, Claude) are outside any agency’s control, and market competition shifts continuously. Anyone promising guaranteed rankings or guaranteed AI citations is misleading you. We commit to sound technical architecture, verified Schema markup, clean crawlability, and clear content aligned with user intent.',
      },
      {
        id: 'seo-faq-2',
        question: 'What is the difference between Technical SEO, AIO, GEO, and SXO?',
        answer:
          'Technical SEO ensures search engines can crawl, render, and index pages cleanly without errors. SXO (Search Experience Optimisation) improves how helpful and intuitive the page feels once a user clicks through. AIO (AI Optimisation) and GEO (Generative Engine Optimisation) extend strong SEO foundations by making entity facts, service boundaries, Schema.org data, and balanced Q&As straightforward for AI systems to parse accurately.',
      },
      {
        id: 'seo-faq-3',
        question: 'Why did WPCarePoint combine GEO and AIO onto one service page?',
        answer:
          'In practice, optimising factual service structure, entity Schema, and clear Q&A content serves both AI search discovery (AIO) and generative answer synthesis (GEO) together. Keeping one unified AI Search Optimisation page alongside broader Technical SEO eliminates duplicate keyword cannibalisation and keeps navigation concise.',
      },
      {
        id: 'seo-faq-4',
        question: 'Can you clean up old hacked URLs or protect rankings during a WordPress rebuild?',
        answer:
          'Yes. We map historical Search Console and backlink URLs carefully, implementing single-hop 301 redirects solely where genuine relevant pages exist and returning clean HTTP 410 Gone statuses for confirmed legacy spam paths rather than blindly redirecting everything to the homepage.',
      },
      {
        id: 'seo-faq-5',
        question: 'How does WordPress speed affect SEO and AI search visibility?',
        answer:
          'Fast, clean pages support Core Web Vitals page-experience signals, lower mobile bounce rates (strengthening SXO), and make HTML crawling more efficient for both search spiders and AI fetchers.',
      },
      {
        id: 'seo-faq-6',
        question: 'How do we request a Technical SEO or AI Search review?',
        answer:
          'Email your website URL, target UK services or markets, and any known indexing or migration concerns to contact@wpcarepoint.co.uk. We review your setup directly and respond in writing with clear next steps.',
      },
    ],
  },
  relatedSection: {
    eyebrow: 'Connected Visibility & Speed Services',
    title: 'Reinforce search foundations with fast infrastructure and clean builds',
    items: [
      {
        eyebrow: 'Core Web Vitals',
        title: 'WordPress Speed Optimisation',
        description:
          'Eliminate render-blocking bloat, oversized imagery, and server TTFB bottlenecks supporting search performance.',
        ctaLabel: 'Explore Speed Optimisation',
        targetType: 'route',
        href: '/wordpress-speed-optimisation/',
      },
      {
        eyebrow: 'Semantic Architecture',
        title: 'Website Design & Development',
        description:
          'Clean custom WordPress block builds and React / Next.js platforms engineered from day one with crawl hygiene.',
        ctaLabel: 'Explore Web Development',
        targetType: 'route',
        href: '/services/website-development/',
      },
      {
        eyebrow: 'Direct Review',
        title: 'Contact WPCarePoint',
        description:
          'Send your domain and indexing questions directly by email for clear, jargon-free engineering guidance.',
        ctaLabel: 'Visit Contact Page',
        targetType: 'route',
        href: '/contact/',
      },
    ],
  },
  ctaSection: {
    eyebrow: 'Request Search & AI Visibility Review',
    headline: 'Ensure search engines and AI systems read your business accurately.',
    description:
      'Send your website URL, core commercial priorities, and any migration or indexing questions to contact@wpcarepoint.co.uk for direct written feedback.',
    mailtoSubject: 'SEO & AI Search Optimisation Enquiry',
    primaryButtonLabel: 'Send Search Enquiry',
  },
};

export const DEDICATED_SERVICE_PAGES_BY_PATH: Record<string, DedicatedServicePageConfig> = {
  '/services/website-development': WEBSITE_DEVELOPMENT_PAGE_DATA,
  '/services/website-development/': WEBSITE_DEVELOPMENT_PAGE_DATA,
  '/wordpress-speed-optimisation': WP_SPEED_OPTIMISATION_PAGE_DATA,
  '/wordpress-speed-optimisation/': WP_SPEED_OPTIMISATION_PAGE_DATA,
  '/services/ecommerce-development': ECOMMERCE_DEVELOPMENT_PAGE_DATA,
  '/services/ecommerce-development/': ECOMMERCE_DEVELOPMENT_PAGE_DATA,
  '/services/ai-business-automation': AI_AUTOMATION_PAGE_DATA,
  '/services/ai-business-automation/': AI_AUTOMATION_PAGE_DATA,
  '/services/website-care-support': WEBSITE_CARE_SUPPORT_PAGE_DATA,
  '/services/website-care-support/': WEBSITE_CARE_SUPPORT_PAGE_DATA,
  '/services/ai-search-optimisation': AI_SEARCH_OPTIMISATION_PAGE_DATA,
  '/services/ai-search-optimisation/': AI_SEARCH_OPTIMISATION_PAGE_DATA,
};
