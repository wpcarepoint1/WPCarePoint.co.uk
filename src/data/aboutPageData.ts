import {
  BRAND_INFO,
  CORE_SERVICE_TRACKS,
  WORKING_PROCESS_STEPS,
} from './homepageData';

export interface AboutApproachStep {
  step: string;
  title: string;
  summary: string;
}

export interface AboutValueItem {
  index: string;
  title: string;
  summary: string;
  standard: string;
}

export interface AboutTechItem {
  index: string;
  name: string;
  role: string;
  summary: string;
}

export const ABOUT_PAGE_DATA = {
  routePath: '/about/',
  canonicalUrl: 'https://wpcarepoint.co.uk/about/',
  metaTitle: 'About WPCarePoint | UK Web Development, eCommerce & AI Agency',
  metaDescription:
    'Learn about WPCarePoint—a UK Web Development, eCommerce & AI Solutions Agency specialising in WordPress engineering, WooCommerce, modern web apps, automation, and website care.',
  eyebrow: 'About WPCarePoint · United Kingdom',
  headline: 'Building, Improving and Supporting Digital Businesses.',
  description:
    'WPCarePoint is a Web Development, eCommerce & AI Solutions Agency working with UK organisations. WordPress engineering remains our core craft alongside bespoke web applications, workflow automation, ongoing site stewardship, and search readiness.',
  heroImageUrl: '/src/assets/images/about_studio_craft_1795678351505.webp',
  heroImageAlt:
    'WPCarePoint engineering studio desk with open coastal teal architectural sketchbook, fountain pen, and precision compass',
  heroImageCaption:
    'Nutfield, Surrey · Practical engineering craft built around client ownership',
  standards: [
    { label: 'Core Practice', value: 'WordPress & Digital Engineering' },
    { label: 'UK Studio Base', value: 'Nutfield, Surrey RH1 4HW' },
    { label: 'Delivery Model', value: 'Staging-First & Direct Email' },
    { label: 'Client Guarantee', value: '100% Ownership of Code & Domains' },
  ],
  storySection: {
    id: 'our-story',
    eyebrow: 'Our Story & Purpose',
    title: 'Focused digital engineering rooted in reliability, clarity, and ownership.',
    paragraphs: [
      'WPCarePoint began with a straightforward engineering focus: helping businesses keep their WordPress websites fast, secure, cleanly structured, and dependable in day-to-day operation.',
      'As client requirements evolved beyond isolated websites, our technical practice expanded naturally to bring connected commerce, modern frontend engineering, practical business automation, and structured search optimisation under one roof—without losing the care and attention to detail that reliable WordPress stewardship demands.',
      'Today, operating from Nutfield in Surrey (RH1 4HW) with clients across the United Kingdom, we remain deliberately focused on clear communication, clean handovers, and honest technical recommendations over inflated agency rhetoric.',
    ],
    summaryCard: {
      eyebrow: 'Agency Positioning',
      title: 'WordPress Core · Hybrid Digital Capability',
      points: [
        'Deep specialisation in custom WordPress block builds, speed diagnostics, and technical stewardship',
        'WooCommerce online retail engineering built around GBP (£), UK VAT, and Stripe SCA',
        'Modern React, Next.js, and TypeScript builds where custom application control is needed',
        'Human-supervised AI workflows, API integrations, and Technical SEO / AI Search readiness',
      ],
    },
  },
  whatWeDoSection: {
    id: 'what-we-do',
    eyebrow: 'What We Do',
    title: 'Five connected capabilities engineered to work cleanly together.',
    description:
      'Every discipline supports the others—from initial design and storefront reliability to automation, ongoing care, and search visibility.',
    tracks: CORE_SERVICE_TRACKS,
  },
  approachSection: {
    id: 'our-approach',
    eyebrow: 'Our Approach',
    title: 'A disciplined five-step way of working on every engagement.',
    description:
      'Good digital engineering relies on understanding operational context before recommending code or tools.',
    steps: [
      {
        step: '01.',
        title: 'Understand the business requirement.',
        summary:
          'We begin with your commercial objectives, existing website constraints, audience journeys, and team editing needs—not a pre-sold template.',
      },
      {
        step: '02.',
        title: 'Recommend an appropriate technical solution.',
        summary:
          'Where WordPress Gutenberg fits best, we say so. Where WooCommerce, custom Next.js code, or a simple API workflow solves the problem more cleanly, we scope that directly.',
      },
      {
        step: '03.',
        title: 'Build with maintainability in mind.',
        summary:
          'Clean markup, predictable component hierarchy, minimal plugin bloat, and documented integrations ensure your platform stays easy to adapt in future years.',
      },
      {
        step: '04.',
        title: 'Test before delivery.',
        summary:
          'Responsive breakpoints, accessibility contrast, forms, payment flows, redirects, and page speed payloads are checked carefully on staging prior to launch.',
      },
      {
        step: '05.',
        title: 'Support ongoing improvements where agreed.',
        summary:
          'Once live, clients can retain complete independence or partner with WPCarePoint for structured Website Care Plans, speed tuning, and incremental improvements.',
      },
    ] as AboutApproachStep[],
  },
  valuesSection: {
    id: 'our-values',
    eyebrow: 'Our Values',
    title: 'Six principles that guide every architecture and support decision.',
    description:
      'Clear engineering standards matter most when real businesses depend on their websites daily.',
    items: [
      {
        index: '01.',
        title: 'Quality over unnecessary complexity',
        summary:
          'We favour clean, dependable architecture over heavy visual gimmicks, stacked third-party plugins, or brittle trends that slow sites down.',
        standard: 'Lean Semantic Builds',
      },
      {
        index: '02.',
        title: 'Transparency in communication',
        summary:
          'Every technical scope, trade-off, and next step is shared plainly in writing—with zero hidden restrictions or unclear deliverables.',
        standard: 'Direct Written Clarity',
      },
      {
        index: '03.',
        title: 'Responsible technology use',
        summary:
          'We treat UK GDPR boundaries, accessibility readiness, and human sign-off for AI-assisted tools as non-negotiable standards rather than afterthoughts.',
        standard: 'Privacy & Human Oversight',
      },
      {
        index: '04.',
        title: 'Client ownership and control',
        summary:
          'Domains, hosting infrastructure, code repositories, and commercial data stay owned cleanly by your organisation at every stage.',
        standard: 'Zero Vendor Lock-In',
      },
      {
        index: '05.',
        title: 'Long-term maintainability',
        summary:
          'Sites are built so both our engineers and your future internal or external teams can update content and features cleanly without fear of breakage.',
        standard: 'Clean Technical Handover',
      },
      {
        index: '06.',
        title: 'Continuous improvement',
        summary:
          'From Core Web Vitals refinements to evolving AI Search readability, we treat websites as living assets refined iteratively on verified evidence.',
        standard: 'Evidence-Led Iteration',
      },
    ] as AboutValueItem[],
  },
  techSection: {
    id: 'technology-expertise',
    eyebrow: 'Technology & Expertise',
    title: 'Proven platforms chosen for business utility, speed, and longevity.',
    description:
      'We focus on verified open ecosystems and structured engineering practices rather than proprietary lock-in.',
    items: [
      {
        index: '01.',
        name: 'WordPress',
        role: 'Core CMS Specialisation',
        summary:
          'Bespoke Gutenberg block themes, clean custom post architecture, and lightweight editorial control tailored to UK teams.',
      },
      {
        index: '02.',
        name: 'WooCommerce',
        role: 'UK Online Retail',
        summary:
          'High-Performance Order Storage (HPOS), GBP (£) and UK VAT rules, Stripe SCA checkouts, and Royal Mail / DPD shipping workflows.',
      },
      {
        index: '03.',
        name: 'React',
        role: 'Interactive Interfaces',
        summary:
          'Modular TypeScript user interfaces for multi-step tools, booking flows, calculators, and custom frontend applications.',
      },
      {
        index: '04.',
        name: 'Next.js',
        role: 'Modern Web Architecture',
        summary:
          'Structured routing, static pre-rendering, clean metadata pipelines, and decoupled frontend experiences where custom apps fit best.',
      },
      {
        index: '05.',
        name: 'APIs & Integrations',
        role: 'Connected Systems',
        summary:
          'Reliable webhooks and REST integrations connecting websites with HubSpot, Xero, Stripe, courier systems, and internal databases.',
      },
      {
        index: '06.',
        name: 'Business Automation',
        role: 'Workflow Engineering',
        summary:
          'Structured enquiry routing, CRM synchronisation, and scoped AI assistance operating inside UK GDPR boundaries and human checkpoints.',
      },
      {
        index: '07.',
        name: 'Website Performance & Optimisation',
        role: 'Speed, SEO & AI Search',
        summary:
          'Diagnostic Core Web Vitals remediation, caching hygiene, technical crawl structure, Schema.org JSON-LD, and AI Search structuring.',
      },
    ] as AboutTechItem[],
  },
  processSection: {
    id: 'working-process',
    eyebrow: 'Our Working Process',
    title: 'Consistent staging-first delivery across builds and support.',
    description:
      'The same clear sequence underpins every WPCarePoint build, speed project, and care onboarding.',
    steps: WORKING_PROCESS_STEPS,
  },
  whyWorkWithUsSection: {
    id: 'why-work-with-us',
    eyebrow: 'Why Businesses Work With Us',
    title: 'Dependable technical stewardship without agency friction.',
    description:
      'UK organisations choose WPCarePoint when they want clear answers, resilient builds, and direct access to people actually doing the engineering.',
    points: [
      {
        index: '01.',
        title: 'Direct Engineering Correspondence',
        summary:
          'No layers of account-manager translation or call-centre scripts. Scope discussions at contact@wpcarepoint.co.uk happen directly in clear written technical English.',
      },
      {
        index: '02.',
        title: 'Honest Technical Trade-Offs',
        summary:
          'We tell you plainly whether an existing site needs a focused WordPress Speed Optimisation or Quick Fix instead of pushing an unnecessary rebuild.',
      },
      {
        index: '03.',
        title: 'Staging Discipline & Safe Migrations',
        summary:
          'Updates, redesigns, and structural SEO changes are verified cleanly in staging alongside single-hop 301 planning before touching live production domains.',
      },
      {
        index: '04.',
        title: 'Verified Standards Over Unfounded Claims',
        summary:
          'We never publish fabricated case metrics, fake review scores, unverified partner badges, or ranking guarantees—trust is built on transparent deliverables.',
      },
    ],
  },
  cta: {
    eyebrow: 'Discuss Your Requirements',
    headline: 'Speak directly with WPCarePoint about your website, store, or automation plans.',
    description: `Start a clear written scoping conversation via our Contact page or email ${BRAND_INFO.email} directly.`,
    mailtoSubject: 'About WPCarePoint — Project & Support Enquiry',
    primaryButtonLabel: 'Go to Contact Page',
  },
};
