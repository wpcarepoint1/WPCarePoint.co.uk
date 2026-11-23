import type { FaqEntry } from './homepageData';

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

export interface DedicatedServicePageConfig {
  id: 'website-development' | 'wordpress-speed-optimisation';
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
    imageAlt: 'WPCarePoint digital architecture studio showing wireframe schematics and design specification',
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
        title: 'Website Care & Quick Fix Support',
        description:
          'Staging-tested updates, encrypted off-site backups, and standalone WordPress Quick Fix remediation without long-term lock-in.',
        ctaLabel: 'View Care Pathways',
        targetType: 'homeAnchor',
        href: '#website-care',
      },
      {
        eyebrow: 'Online Retail',
        title: 'eCommerce & WooCommerce Builds',
        description:
          'GBP (£) pricing, UK VAT tax logic, Stripe UK SCA checkouts, and Royal Mail / DPD delivery configurations engineered for mobile speed.',
        ctaLabel: 'View eCommerce Track',
        targetType: 'homeAnchor',
        href: '#ecommerce-development',
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
    imageAlt: 'Minimalist architectural engineering components representing streamlined WordPress caching and load speed optimisation',
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
    title: 'Six frequent culprits that slow down established UK WordPress websites.',
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
        calloutText: 'If hosting hardware is the real bottleneck, we tell you plainly rather than billing for endless tweaks.',
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
        title: 'Essential, Advanced & Elite Care Plans',
        description:
          'Ongoing staging-tested updates, encrypted off-site backups, and recurring Core Web Vitals oversight tailored around your platform.',
        ctaLabel: 'Explore Care Plans',
        targetType: 'homeAnchor',
        href: '#website-care',
      },
      {
        eyebrow: 'Search Visibility',
        title: 'SEO & AI Search Optimisation',
        description:
          'Pair technical crawl hygiene and Schema.org structured data with faster Core Web Vitals across Google UK and modern AI search tools.',
        ctaLabel: 'View SEO & AI Search',
        targetType: 'homeAnchor',
        href: '#seo-ai-search',
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

export const DEDICATED_SERVICE_PAGES_BY_PATH: Record<string, DedicatedServicePageConfig> = {
  '/services/website-development': WEBSITE_DEVELOPMENT_PAGE_DATA,
  '/services/website-development/': WEBSITE_DEVELOPMENT_PAGE_DATA,
  '/wordpress-speed-optimisation': WP_SPEED_OPTIMISATION_PAGE_DATA,
  '/wordpress-speed-optimisation/': WP_SPEED_OPTIMISATION_PAGE_DATA,
};
