import {
  BRAND_INFO,
  CORE_SERVICE_TRACKS,
  WORKING_PROCESS_STEPS,
  type CoreServiceTrack,
  type FaqEntry,
  type ProcessStep,
} from './homepageData';

export interface SupportingExpertiseItem {
  index: string;
  title: string;
  category: string;
  summary: string;
  href?: string;
  ctaLabel?: string;
}

export interface ServicesHubPrinciple {
  index: string;
  title: string;
  summary: string;
  standard: string;
}

export const SERVICES_HUB_DATA = {
  routePath: '/services/',
  canonicalUrl: 'https://wpcarepoint.co.uk/services/',
  metaTitle: 'Services | WPCarePoint UK Web Development, eCommerce & AI Agency',
  metaDescription:
    'Explore WPCarePoint UK services: Website Design & Development, WooCommerce eCommerce, AI & Business Automation, Website Care, WordPress Speed Optimisation, and SEO & AI Search.',
  eyebrow: 'Web Development, eCommerce & AI Solutions Agency',
  headline: 'Building, improving and supporting digital businesses.',
  description:
    'WPCarePoint partners with British organisations across five integrated service tracks—combining WordPress engineering, React & Next.js builds, reliable WooCommerce stores, practical automation, and structured technical care.',
  heroImageUrl: '/src/assets/images/services_hub_overview_1795678349831.jpg',
  heroImageAlt:
    'Five connected coastal teal and frosted glass architectural modules representing WPCarePoint core service disciplines',
  heroImageCaption:
    'Five structured service disciplines · Built for UK maintainability, speed, and client ownership',
  standards: [
    { label: 'Core Specialisation', value: 'WordPress & WooCommerce' },
    { label: 'Modern Stack', value: 'React, Next.js & TypeScript' },
    { label: 'Commercial Focus', value: '100% Client-Owned Assets' },
    { label: 'Enquiry Channel', value: 'Direct Email Scoping' },
  ],
  overview: {
    id: 'service-overview',
    eyebrow: 'How WPCarePoint Supports Your Business',
    title: 'Clear architecture from initial build through ongoing growth and care.',
    paragraphs: [
      'Most digital bottlenecks occur when website design, online retail, search structure, automation, and ongoing maintenance are treated as disconnected pieces handled by separate suppliers.',
      'WPCarePoint brings these five disciplines under one practical UK engineering workflow. Whether you are commissioning a new business website, rescuing a slow WordPress installation, tuning WooCommerce checkouts, or connecting enquiries to your CRM, every piece is engineered to remain understandable, fast, and firmly under your ownership.',
    ],
  },
  coreTracksSection: {
    id: 'core-services',
    eyebrow: 'Five Core Service Categories',
    title: 'Choose the capability track aligned with your current priorities.',
    description:
      'Every core category leads to a dedicated service specification detailing deliverables, engineering standards, and how work is scoped.',
    tracks: CORE_SERVICE_TRACKS as CoreServiceTrack[],
  },
  supportingExpertiseSection: {
    id: 'supporting-expertise',
    eyebrow: 'Supporting & Specialist Services',
    title: 'Focused capabilities supporting search visibility, integrations, branding, and growth.',
    description:
      'Alongside our five core tracks, explore dedicated specialist service pages detailing how WPCarePoint solves specific technical, visibility, and presentation challenges.',
    items: [
      {
        index: '01.',
        category: 'Performance Engineering · Dedicated Track',
        title: 'WordPress Speed Optimisation',
        summary:
          'Diagnostic resolution for slow TTFB, render-blocking scripts, heavy image payloads, autoload bloat, and UK hosting bottlenecks without score guarantees.',
        href: '/wordpress-speed-optimisation/',
        ctaLabel: 'Explore WordPress Speed Optimisation',
      },
      {
        index: '02.',
        category: 'Organic Search Foundations',
        title: 'Search Engine Optimisation (SEO)',
        summary:
          'Technical crawl governance, clean heading semantics, single-hop 301 redirect hygiene, Schema.org markup, and SXO clarity.',
        href: '/services/search-engine-optimisation/',
        ctaLabel: 'Explore SEO Service',
      },
      {
        index: '03.',
        category: 'Bespoke Systems Connectivity',
        title: 'Custom Web Solutions & Integrations',
        summary:
          'Tailored website modules, React interfaces, and validated server-side REST or webhook integrations connecting your CRM and tools.',
        href: '/services/custom-web-solutions-integrations/',
        ctaLabel: 'Explore Custom Solutions',
      },
      {
        index: '04.',
        category: 'Scoped Website Intelligence',
        title: 'AI-Powered Website Development',
        summary:
          'Bounded AI website features such as grounded content search and guided enquiry helpers built with human guardrails.',
        href: '/services/ai-powered-website-development/',
        ctaLabel: 'Explore AI Web Development',
      },
      {
        index: '05.',
        category: 'Digital Visual Systems',
        title: 'Branding & Brand Identity',
        summary:
          'Accessible WCAG 2.2 AA colour systems, crisp web typography scales, and cohesive component presentation tailored for UK buyers.',
        href: '/services/branding-brand-identity/',
        ctaLabel: 'Explore Brand Identity',
      },
      {
        index: '06.',
        category: 'Conversion & Visibility Alignment',
        title: 'Digital Marketing & Online Growth',
        summary:
          'Conversion-focused landing architecture, organic visibility alignment, and PECR-safe measurement grounded without fake lead promises.',
        href: '/services/digital-marketing-online-growth/',
        ctaLabel: 'Explore Online Growth',
      },
      {
        index: '07.',
        category: 'Rapid Remediation',
        title: 'WordPress Bug Fixes & Recovery',
        summary:
          'Isolated troubleshooting for plugin conflicts, fatal PHP errors, broken mobile layouts, SSL issues, and checkout faults via Quick Fix scoping.',
        href: '/services/website-care-support/#one-off-fixes',
        ctaLabel: 'View Quick Fix Pathway',
      },
    ] as SupportingExpertiseItem[],
  },
  processSection: {
    id: 'how-we-work',
    eyebrow: 'How We Work',
    title: 'Four structured stages from technical audit to ongoing care.',
    description:
      'Every project follows disciplined staging-first steps so nothing reaches your live domain untested.',
    steps: [
      {
        step: '01.',
        title: 'Discovery',
        summary: WORKING_PROCESS_STEPS[0].summary,
        deliverable: WORKING_PROCESS_STEPS[0].deliverable,
      },
      {
        step: '02.',
        title: 'Planning and Staging',
        summary: WORKING_PROCESS_STEPS[1].summary,
        deliverable: WORKING_PROCESS_STEPS[1].deliverable,
      },
      {
        step: '03.',
        title: 'Development and Quality Assurance',
        summary: WORKING_PROCESS_STEPS[2].summary,
        deliverable: WORKING_PROCESS_STEPS[2].deliverable,
      },
      {
        step: '04.',
        title: 'Launch and Ongoing Care',
        summary: WORKING_PROCESS_STEPS[3].summary,
        deliverable: WORKING_PROCESS_STEPS[3].deliverable,
      },
    ] as ProcessStep[],
  },
  principlesSection: {
    id: 'why-wpcarepoint',
    eyebrow: 'Why Choose WPCarePoint',
    title: 'Straightforward UK engineering grounded in ownership and clarity.',
    description:
      'We avoid vague retainers and proprietary platform lock-in—every engagement is built around maintainable code and plain-spoken communication.',
    items: [
      {
        index: '01.',
        title: 'Clear Communication',
        summary:
          'You correspond directly with engineering via email—receiving clear written scopes, concise progress notes, and practical trade-offs without sales layers.',
        standard: 'Written Correspondence · Direct Engineering',
      },
      {
        index: '02.',
        title: 'Practical Technical Solutions',
        summary:
          'We recommend WordPress Gutenberg where editorial ease matters, WooCommerce for adaptable UK retail, and React/Next.js or custom APIs where workflows require them.',
        standard: 'Fit-for-Purpose Stack Selection',
      },
      {
        index: '03.',
        title: 'Clean and Maintainable Development',
        summary:
          'Semantic HTML, lean stylesheets, minimal plugin dependencies, and structured code comments keep your site easy for any competent developer to maintain.',
        standard: 'Lightweight Builds · Zero Template Bloat',
      },
      {
        index: '04.',
        title: 'Client Ownership',
        summary:
          'Your domain, hosting account, code repositories, and content stay registered cleanly in your business name with full administrative control.',
        standard: '100% Business-Owned Assets',
      },
      {
        index: '05.',
        title: 'Transparent Project Scope',
        summary:
          'Deliverables, integrations, boundaries, and pricing expectations are confirmed in writing before engineering work begins—no surprise add-ons mid-build.',
        standard: 'Agreed Milestones Before Build',
      },
      {
        index: '06.',
        title: 'Responsible Technology Implementation',
        summary:
          'Accessibility (WCAG 2.2 AA), UK GDPR boundaries, human approval checkpoints for AI workflows, and safe staging checks are treated as engineering baselines.',
        standard: 'UK GDPR · WCAG 2.2 AA · Human Oversight',
      },
    ] as ServicesHubPrinciple[],
  },
  faqs: [
    {
      id: 'hub-faq-1',
      question: 'Should we choose WordPress or a custom React / Next.js website?',
      answer:
        'If your team publishes regular service pages, case records, or articles independently, custom WordPress block engineering is usually the most efficient long-term fit. When you need custom application state, bespoke dashboards, or specialised frontend interfaces, React and Next.js provide stronger control. We assess both options openly during Discovery.',
    },
    {
      id: 'hub-faq-2',
      question: 'Can we start with a focused fix or speed audit before committing to a larger build?',
      answer:
        'Yes. Many clients begin with WordPress Speed Optimisation or a standalone WordPress Quick Fix to stabilise an existing website cleanly before planning a broader redesign, WooCommerce upgrade, or ongoing Care Plan.',
    },
    {
      id: 'hub-faq-3',
      question: 'How do you scope projects when pricing varies by site complexity?',
      answer:
        'We inspect your existing website URL (if applicable), required functionality, integrations, and support needs in writing via contact@wpcarepoint.co.uk. You then receive a tailored written scope detailing what is included so you only pay for capabilities your business genuinely uses.',
    },
    {
      id: 'hub-faq-4',
      question: 'Can WPCarePoint preserve existing Google UK rankings during a redesign?',
      answer:
        'Whilst no ethical agency can guarantee search engine rankings, we audit historical URLs, preserve high-value page structures where appropriate, configure clean single-hop 301 redirects, and verify canonical tags and Schema.org metadata prior to cut-over.',
    },
    {
      id: 'hub-faq-5',
      question: 'How does WPCarePoint handle AI automation safely for UK businesses?',
      answer:
        'We scope automation around defined business rules, least-privilege API access, UK GDPR data minimisation, and mandatory human approval before any customer-facing or database-mutating action runs autonomously.',
    },
  ] as FaqEntry[],
  cta: {
    eyebrow: 'Ready to Scope Your Project?',
    headline: 'Discuss your website, WooCommerce store, automation, or support scope.',
    description: `Explore our full contact correspondence options or write directly to ${BRAND_INFO.email} with your website URL and priorities.`,
    mailtoSubject: 'WPCarePoint Services Enquiry',
    primaryButtonLabel: 'Visit Contact Page',
  },
};
