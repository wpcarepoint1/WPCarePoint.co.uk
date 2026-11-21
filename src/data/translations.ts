import type { Locale } from '../hooks/useLanguage';
import {
  CY_CARE_LIMIT_COPY,
  CY_GUIDES_COPY,
  CY_SERVICE_PAGES_COPY,
  CY_TECH_ENTRY_COPY,
  type GuideTranslatedBlock,
  type ServiceTranslatedBlock,
} from './cyExtraTranslations';

export interface SiteTranslations {
  skipToMain: string;
  brandTaglineBadge: string;
  nav: {
    services: string;
    engineering: string;
    carePlans: string;
    caseStudies: string;
    guides: string;
    bookConsultation: string;
    openMenu: string;
    closeMenu: string;
    switchToDark: string;
    switchToLight: string;
    switchLanguageLabel: string;
    megaServicesHeading: string;
    megaServicesSub: string;
    megaSpotlightEyebrow: string;
    megaSpotlightTitle: string;
    megaSpotlightBody: string;
    megaSpotlightCta: string;
    megaConsultCta: string;
    megaAllServicesCta: string;
    megaEngineeringHeading: string;
    megaEngineeringLinks: Array<{ title: string; detail: string; href: string }>;
    megaSectorsHeading: string;
    megaAssuranceHeading: string;
    megaAssuranceBody: string;
    megaAssuranceCta: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    quickLinksHeading: string;
    quickLinks: Array<{ slug: string; label: string }>;
    studioCaption: string;
    studioAlt: string;
    metrics: [
      { label: string; value: string },
      { label: string; value: string },
      { label: string; value: string },
      { label: string; value: string },
    ];
  };
  servicesSection: {
    eyebrow: string;
    headline: string;
    filterAriaLabel: string;
    filters: {
      all: string;
      web: string;
      visibility: string;
      automation: string;
      brand: string;
    };
    serviceSingular: string;
    servicePlural: string;
    viewLabel: string;
    advisoryTitle: string;
    advisoryBody: string;
    advisoryCta: string;
    pillarCopy: Record<
      string,
      {
        title: string;
        summary: string;
      }
    >;
    itemCopy: Record<
      string,
      {
        name: string;
        outcome: string;
      }
    >;
  };
  techStackSection: {
    eyebrow: string;
    headline: string;
    lead: string;
    discussPrefix: string;
    sectorsEyebrow: string;
    sectorsHeadline: string;
    governanceTitle: string;
    governanceNote: string;
    domainLabels: Record<string, string>;
    domainSummaries: Record<string, string>;
    entryCopy: Record<string, { role: string; rationale: string }>;
    sectorCopy: Array<{
      sector: string;
      outcome: string;
    }>;
    complianceCopy: Array<{
      title: string;
      detail: string;
    }>;
  };
  carePlansSection: {
    eyebrow: string;
    headline: string;
    lead: string;
    monthlyBilling: string;
    annualBilling: string;
    perMonth: string;
    billedAnnually: string;
    selectPrefix: string;
    planCopy: Record<
      string,
      {
        name: string;
        audience: string;
        summary: string;
      }
    >;
    limitCopy: Record<string, Array<{ label: string; value: string }>>;
  };
  caseStudiesSection: {
    eyebrow: string;
    headline: string;
    beforeLabel: string;
    fixLabel: string;
    studyCopy: Record<
      string,
      {
        sector?: string;
        location?: string;
        metricHeadline: string;
        metricDetail?: string;
        challenge: string;
        solution: string;
        quote?: string;
        authorRole?: string;
      }
    >;
  };
  processSection: {
    eyebrow: string;
    headline: string;
    steps: Array<{ title: string; detail: string }>;
  };
  guidesSection: {
    eyebrow: string;
    headline: string;
    readGuide: string;
    modalNeedHelp: string;
    modalClose: string;
    modalCta: string;
    guideCopy: Record<string, GuideTranslatedBlock>;
  };
  faqSection: {
    eyebrow: string;
    headline: string;
    lead: string;
    items: Record<string, { question: string; answer: string }>;
  };
  contactSection: {
    eyebrow: string;
    headline: string;
    lead: string;
    addressLabel: string;
    emailLabel: string;
    hoursLabel: string;
    hoursValue: string;
    coverageLabel: string;
    fullNameLabel: string;
    businessEmailLabel: string;
    websiteUrlLabel: string;
    servicePlanLabel: string;
    capabilitiesGroupLabel: string;
    retainersGroupLabel: string;
    annualSuffixLabel: string;
    detailsLabel: string;
    detailsPlaceholder: string;
    submitCta: string;
    submittingCta: string;
    errorName: string;
    errorEmail: string;
    loggedHeading: string;
    loggedPrefix: string;
    loggedRefText: string;
    loggedBodyPrefix: string;
    loggedBodySuffix: string;
    emailAppCta: string;
    anotherRequestCta: string;
  };
  footer: {
    tagline: string;
    servingPrefix: string;
    quickLinksHeading: string;
    quickLinksSub: string;
    viewsLabel: string;
    dedicatedServicesHeading: string;
    copyright: string;
  };
  servicePage: {
    homeBreadcrumb: string;
    servicesBreadcrumb: string;
    unitedKingdom: string;
    requestProposalPrefix: string;
    requestProposalSuffix: string;
    backToAll: string;
    investmentLabel: string;
    timelineLabel: string;
    standardLabel: string;
    buildStackLabel: string;
    sectionNavLabel: string;
    sectionLinks: {
      overview: string;
      deliverables: string;
      delivery: string;
      faq: string;
      proposal: string;
    };
    brandPromiseEyebrow: string;
    brandPromiseHeadline: string;
    brandPromisePoints: Array<{ label: string; detail: string }>;
    brandPromiseCta: string;
    whoFitsEyebrow: string;
    whoFitsHeadline: string;
    includedHeadingPrefix: string;
    includedSub: string;
    deliveryEyebrow: string;
    deliveryHeadingPrefix: string;
    faqEyebrow: string;
    faqHeadingPrefix: string;
    relatedHeading: string;
    viewAllServices: string;
    openServicePage: string;
    serviceContent: Record<string, ServiceTranslatedBlock>;
  };
}

export const TRANSLATIONS: Record<Locale, SiteTranslations> = {
  en: {
    skipToMain: 'Skip to main content',
    brandTaglineBadge: 'United Kingdom · Established 2019',
    nav: {
      services: 'Services',
      engineering: 'Capabilities',
      carePlans: 'Care Retainers',
      caseStudies: 'Case Studies',
      guides: 'Insights',
      bookConsultation: 'Arrange Consultation',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
      switchToDark: 'Switch to dark theme',
      switchToLight: 'Switch to light theme',
      switchLanguageLabel: 'Switch language between English (UK) and Cymraeg (Welsh)',
      megaServicesHeading: 'Specialist UK Practice Areas',
      megaServicesSub:
        'Explore fixed-milestone specifications, delivery schedules, and technical architecture.',
      megaSpotlightEyebrow: 'Featured Practice Area',
      megaSpotlightTitle: 'Enterprise Engineering, Delivered in the UK',
      megaSpotlightBody:
        'Every programme is architected in Britain with transparent GBP milestones, sub-1.2s Core Web Vitals, and full IP ownership.',
      megaSpotlightCta: 'Inspect Practice Specification',
      megaConsultCta: 'Arrange Technical Consultation',
      megaAllServicesCta: 'Explore All Practice Areas',
      megaEngineeringHeading: 'Technology & Governance',
      megaEngineeringLinks: [
        {
          title: 'Languages & Technical Stack',
          detail: 'TypeScript 5, Python, PHP 8.4, React, WordPress & Cloudflare',
          href: '#stack',
        },
        {
          title: 'Four-Stage Delivery Methodology',
          detail: 'Technical discovery, isolated UK staging, zero-downtime release',
          href: '#process',
        },
        {
          title: 'Research & Technical Briefings',
          detail: 'Executive playbooks on GEO, compliant AI automation & Core Web Vitals',
          href: '#guides',
        },
      ],
      megaSectorsHeading: 'Regulated & Commercial UK Sectors',
      megaAssuranceHeading: 'Brand & Governance Standard',
      megaAssuranceBody:
        'Architected for UK GDPR & PECR data residency, WCAG 2.2 Level AA accessibility, and measurable commercial return.',
      megaAssuranceCta: 'Review Client Case Studies',
    },
    hero: {
      eyebrow: 'British Digital Consultancy · Web Engineering, Brand Architecture & AI · Est. 2019',
      headline:
        'Authoritative digital architecture, bespoke engineering, and AI search leadership.',
      lead: 'WPCarePoint partners with ambitious British organisations to architect high-performance web platforms, bespoke WooCommerce ecosystems, distinctive brand identities, and compliant AI automation—engineered to lead across Google UK and generative search.',
      primaryCta: 'Schedule a Consultation',
      secondaryCta: 'Explore Practice Areas',
      quickLinksHeading: 'Direct Practice Specifications',
      quickLinks: [
        { slug: 'website-development', label: 'Website Development' },
        { slug: 'ai-powered-website-development', label: 'AI-Powered Web Platforms' },
        { slug: 'generative-engine-optimisation', label: 'Generative Engine Optimisation' },
        { slug: 'ai-automation-business-process-automation', label: 'AI Process Automation' },
      ],
      studioCaption:
        'Nutfield, Surrey RH1 4HW · Engineering for London, Wales & UK Enterprises',
      studioAlt:
        'WPCarePoint Surrey and London digital engineering, brand architecture, and AI consultancy studio',
      metrics: [
        { label: 'Programmes Delivered', value: '900+' },
        { label: 'Search & AI Authority', value: 'Google · GPT · Claude' },
        { label: 'Mobile LCP Standard', value: '< 1.2s' },
        { label: 'Client Satisfaction', value: '4.9 / 5' },
      ],
    },
    servicesSection: {
      eyebrow: 'Ten Specialist Capabilities · Dedicated Scope Specifications',
      headline:
        'Commercial web engineering, brand authority, and AI search growth under one British consultancy.',
      filterAriaLabel: 'Filter practice areas',
      filters: {
        all: 'All Capabilities (10)',
        web: 'Web & Commerce',
        visibility: 'SEO, GEO & AI Search',
        automation: 'AI Automation',
        brand: 'Brand & Growth',
      },
      serviceSingular: 'capability',
      servicePlural: 'capabilities',
      viewLabel: 'Inspect Brief',
      advisoryTitle: 'Require a tailored multi-discipline programme?',
      advisoryBody:
        'Outline your commercial priorities—whether consolidating enterprise web architecture, launching a high-volume retail platform, or securing AI search citations—and our principals will scope a fixed-milestone roadmap.',
      advisoryCta: 'Commission a Technical Roadmap',
      pillarCopy: {
        'web-engineering': {
          title: 'Web, E-commerce & Bespoke Engineering',
          summary:
            'High-velocity bespoke websites, UK-compliant commerce platforms, and tailored web software architected for commercial conversion and clean governance.',
        },
        'search-geo-ai': {
          title: 'SEO, GEO & AI Search Authority',
          summary:
            'Position your organisation where modern UK buyers conduct due diligence—across Google UK results as well as ChatGPT, Gemini, and Claude recommendations.',
        },
        'ai-automation': {
          title: 'AI Automation & Business Operations',
          summary:
            'Eliminate repetitive operational friction by uniting website enquiries, correspondence, CRM records, and financial workflows under auditable automation.',
        },
        'brand-growth': {
          title: 'Brand Strategy & Commercial Growth',
          summary:
            'Cohesive visual identity systems and data-led acquisition programmes that command executive trust from the first impression.',
        },
      },
      itemCopy: {},
    },
    techStackSection: {
      eyebrow: 'Engineering Architecture & Technical Stack',
      headline: 'Enterprise languages, modern frameworks, and resilient UK cloud infrastructure.',
      lead: 'Modelled on Britain’s leading software consultancies, we remain strictly technology-agnostic—pairing statically typed languages with pre-rendered HTML and UK/EEA cloud residency.',
      discussPrefix: 'Discuss',
      sectorsEyebrow: 'UK Industries & Sectors',
      sectorsHeadline:
        'Deep domain fluency across regulated and high-growth British markets.',
      governanceTitle: 'UK Governance, Accessibility & Security Baseline',
      governanceNote: 'Enforced across every repository & staging environment',
      domainLabels: {
        languages: 'Languages & Core',
        frontend: 'Frontend & UX',
        'ai-geo': 'AI, GEO & Search',
        cloud: 'Cloud, Edge & CI/CD',
        commerce: 'Commerce & APIs',
      },
      domainSummaries: {},
      entryCopy: {},
      sectorCopy: [],
      complianceCopy: [],
    },
    carePlansSection: {
      eyebrow: 'Managed Care Retainers',
      headline:
        'Predictable UK platform stewardship with contractual SLAs.',
      lead: 'Every retainer includes encrypted UK/EEA off-site backups, staged dependency governance, and direct access to senior British engineers—billed transparently in GBP on rolling monthly terms.',
      monthlyBilling: 'Monthly Retainer',
      annualBilling: 'Annual (Save 17%)',
      perMonth: '/ month',
      billedAnnually: '· invoiced annually',
      selectPrefix: 'Select',
      planCopy: {},
      limitCopy: {},
    },
    caseStudiesSection: {
      eyebrow: 'Verified Client Outcomes',
      headline:
        'Measured speed, availability, and commercial growth for UK organisations.',
      beforeLabel: 'Operational Challenge',
      fixLabel: 'Architectural Intervention',
      studyCopy: {},
    },
    processSection: {
      eyebrow: 'Delivery Methodology',
      headline:
        'Disciplined execution from technical discovery to AI search and automation.',
      steps: [],
    },
    guidesSection: {
      eyebrow: 'Engineering & Growth Briefings',
      headline:
        'Applied white papers on generative search, compliant AI automation, and web performance.',
      readGuide: 'Read Briefing',
      modalNeedHelp: 'Require senior engineering support for your platform?',
      modalClose: 'Close briefing',
      modalCta: 'Arrange a Consultation',
      guideCopy: {},
    },
    faqSection: {
      eyebrow: 'Commercial & Technical Clarity',
      headline: 'Governance, residency, and engagement standards.',
      lead: 'Transparent commitments regarding UK GDPR data sovereignty, Nominet .co.uk domains, GBP invoicing, and priority incident response.',
      items: {},
    },
    contactSection: {
      eyebrow: 'Executive Consultation',
      headline:
        'Commission a digital platform, brand system, or GEO growth programme.',
      lead: 'Share your domain and commercial objectives. A senior British engineering partner reviews every enquiry personally—never an outsourced call centre.',
      addressLabel: 'United Kingdom Studio',
      emailLabel: 'Direct Engineering Desk',
      hoursLabel: 'UK Operating Hours',
      hoursValue:
        'Mon–Fri, 08:30–18:00 GMT/BST · 24/7 priority incident triage',
      coverageLabel: 'UK Coverage',
      fullNameLabel: 'Full Name',
      businessEmailLabel: 'Corporate Email',
      websiteUrlLabel: 'Website URL (optional)',
      servicePlanLabel: 'Practice Area or Retainer',
      capabilitiesGroupLabel: 'Specialist Capabilities',
      retainersGroupLabel: 'Managed Care Retainers',
      annualSuffixLabel: 'Annual',
      detailsLabel: 'Project Scope or Technical Brief',
      detailsPlaceholder:
        'Outline your existing platform, target release window, or commercial objectives...',
      submitCta: 'Request Consultation',
      submittingCta: 'Transmitting Brief...',
      errorName: 'Please enter your full name.',
      errorEmail: 'Please enter a valid corporate or personal email address.',
      loggedHeading: 'Consultation Brief Logged',
      loggedPrefix: 'Thank you,',
      loggedRefText: 'Your engagement reference is',
      loggedBodyPrefix: 'We have recorded your brief regarding',
      loggedBodySuffix:
        '. Should you require immediate infrastructure or security remediation, please dispatch your brief directly via email.',
      emailAppCta: 'Send Copy via Email Client',
      anotherRequestCta: 'Submit Another Brief',
    },
    footer: {
      tagline: 'British Web Engineering, Brand Architecture, GEO & AI Automation',
      servingPrefix: 'Operating across',
      quickLinksHeading: 'Priority Practice Areas',
      quickLinksSub: 'Ranked dynamically by client engagement',
      viewsLabel: 'views',
      dedicatedServicesHeading: 'Specialist UK Practice Specifications',
      copyright: '© 2026 WPCarePoint Ltd. United Kingdom. All rights reserved.',
    },
    servicePage: {
      homeBreadcrumb: 'Home',
      servicesBreadcrumb: 'Services',
      unitedKingdom: 'United Kingdom',
      requestProposalPrefix: 'Commission',
      requestProposalSuffix: 'Proposal',
      backToAll: 'Return to All Services',
      investmentLabel: 'Indicative UK Investment',
      timelineLabel: 'Delivery Schedule',
      standardLabel: 'Engineering Standard',
      buildStackLabel: 'Languages & Architecture Stack',
      sectionNavLabel: 'Practice Specification',
      sectionLinks: {
        overview: '01. Commercial Fit',
        deliverables: '02. Deliverables',
        delivery: '03. Delivery Sequence',
        faq: '04. Service FAQ',
        proposal: '05. Request Proposal',
      },
      brandPromiseEyebrow: 'The WPCarePoint Standard',
      brandPromiseHeadline:
        'Why discerning UK enterprises entrust us with mission-critical platforms.',
      brandPromisePoints: [
        {
          label: '100% UK Engineering & IP Ownership',
          detail:
            'Your domain, source repository, and cloud infrastructure remain wholly registered in your organisation’s name—zero proprietary lock-in.',
        },
        {
          label: 'Sub-1.2s Velocity & Brand Precision',
          detail:
            'Every interface adheres rigorously to your visual identity guidelines whilst surpassing enterprise Core Web Vitals.',
        },
        {
          label: 'Fixed-Milestone GBP Transparency',
          detail:
            'Itemised scope and verified acceptance gates are agreed contractually in pounds sterling prior to commencement.',
        },
      ],
      brandPromiseCta: 'Scope Your Programme With a Senior Partner',
      whoFitsEyebrow: 'Commercial Alignment',
      whoFitsHeadline:
        'Designed for British organisations demanding measurable commercial accountability.',
      includedHeadingPrefix: 'Deliverables Included in',
      includedSub:
        'Architected end-to-end by our British engineering team—zero third-party outsourcing.',
      deliveryEyebrow: 'Delivery Sequence',
      deliveryHeadingPrefix: 'How we execute',
      faqEyebrow: 'Governance & Scope FAQ',
      faqHeadingPrefix: 'Key questions regarding',
      relatedHeading: 'Explore Complementary UK Capabilities',
      viewAllServices: 'Explore All 10 Services',
      openServicePage: 'Inspect Specification',
      serviceContent: {},
    },
  },
  cy: {
    skipToMain: 'Neidio i’r prif gynnwys',
    brandTaglineBadge: 'DU · SEFYDLWYD 2019',
    nav: {
      services: 'Gwasanaethau',
      engineering: 'Galluoedd',
      carePlans: 'Cynlluniau Gofal',
      caseStudies: 'Astudiaethau Achos',
      guides: 'Canllawiau',
      bookConsultation: 'Archebu Ymgynghoriad',
      openMenu: 'Agor y ddewislen lywio',
      closeMenu: 'Cau’r ddewislen lywio',
      switchToDark: 'Newid i’r thema dywyll',
      switchToLight: 'Newid i’r thema olau',
      switchLanguageLabel: 'Newid iaith rhwng Saesneg (DU) a Chymraeg',
      megaServicesHeading: '10 Tudalen Gwasanaeth Arbenigol y DU',
      megaServicesSub:
        'Dewiswch wasanaeth i weld y cwmpas llawn, amserlenni cyflwyno a’r pentwr technegol',
      megaSpotlightEyebrow: 'Gwasanaeth Mwyaf Poblogaidd',
      megaSpotlightTitle: 'Pensaernïaeth Brand a Gwe o’r Radd Flaenaf',
      megaSpotlightBody:
        'Cyflwynir pob prosiect yn y DU gyda cherrig milltir GBP clir, cyflymder Core Web Vitals o dan 1.2 eiliad, a pherchnogaeth cod 100%.',
      megaSpotlightCta: 'Darllen y Briff Llawn',
      megaConsultCta: 'Trefnu Ymgynghoriad Technegol',
      megaAllServicesCta: 'Gweld Pob Un o’r 10 Gwasanaeth',
      megaEngineeringHeading: 'Technoleg a Chyflwyno',
      megaEngineeringLinks: [
        {
          title: 'Ieithoedd a Phentwr Adeiladu',
          detail: 'TypeScript 5, Python, PHP 8.4, React, WordPress a Cloudflare',
          href: '#stack',
        },
        {
          title: 'Proses Beirianneg 4-Cam',
          detail: 'Archwiliad darganfod, llwyfannu yn y DU, lansio heb amser segur',
          href: '#process',
        },
        {
          title: 'Canllawiau Peirianneg a Thwf',
          detail: 'Llawlyfrau ar gyfer GEO, awtomeiddio AI a chyflymder',
          href: '#guides',
        },
      ],
      megaSectorsHeading: 'Sectorau’r DU a Wasanaethir',
      megaAssuranceHeading: 'Safon Brand a Llywodraethiant',
      megaAssuranceBody:
        'Wedi’i adeiladu ar gyfer GDPR y DU, hygyrchedd WCAG 2.2 AA, ac enillion masnachol mesuradwy.',
      megaAssuranceCta: 'Gweld Astudiaethau Achos',
    },
    hero: {
      eyebrow: 'Stiwdio Gwe, Brandio, GEO ac AI y DU · Ers 2019',
      headline:
        'Brandiau nodedig, gwefannau cyflym ac awdurdod chwilio AI ar gyfer busnesau’r DU.',
      lead: 'Mae WPCarePoint yn partneru â sefydliadau Prydeinig uchelgeisiol i adeiladu gwefannau cyflym, siopau WooCommerce, hunaniaeth brand gydlynol ac awtomeiddio AI—wedi’u peiriannu ar gyfer Google UK, ChatGPT, Gemini a Claude.',
      primaryCta: 'Archebu Ymgynghoriad Am Ddim',
      secondaryCta: 'Archwilio Pob 10 Gwasanaeth',
      quickLinksHeading: 'Tudalennau Ymarfer Arbenigol Uniongyrchol',
      quickLinks: [
        { slug: 'website-development', label: 'Datblygu Gwefannau' },
        { slug: 'ai-powered-website-development', label: 'Platfformau Gwe AI' },
        { slug: 'generative-engine-optimisation', label: 'Optimeiddio GEO' },
        { slug: 'ai-automation-business-process-automation', label: 'Awtomeiddio Prosesau AI' },
      ],
      studioCaption:
        'Nutfield, Surrey RH1 4HW · Peirianneg ar gyfer Llundain, Cymru a’r DU',
      studioAlt:
        'Stiwdio dylunio gwe, brandio a pheirianneg AI WPCarePoint yn Surrey a Llundain',
      metrics: [
        { label: 'Prosiectau wedi’u Cyflwyno', value: '900+' },
        { label: 'Sianeli Chwilio AI', value: 'Google · GPT · Claude' },
        { label: 'Targed LCP Symudol', value: '< 1.2s' },
        { label: 'Sgôr Cleientiaid', value: '4.9 / 5' },
      ],
    },
    servicesSection: {
      eyebrow: '10 Gallu Arbenigol · Tudalennau Cwmpas Pwrpasol',
      headline:
        'Awdurdod brand, peirianneg gwe bwrpasol a thwf chwilio AI o dan un to yn y DU.',
      filterAriaLabel: 'Hidlo meysydd ymarfer',
      filters: {
        all: 'Pob Gwasanaeth (10)',
        web: 'Gwe ac E-fasnach',
        visibility: 'SEO, GEO ac AI',
        automation: 'Awtomeiddio AI',
        brand: 'Brand a Thwf',
      },
      serviceSingular: 'gwasanaeth',
      servicePlural: 'gwasanaeth',
      viewLabel: 'Darllen Briff',
      advisoryTitle: 'Ddim yn siŵr pa gyfuniad sy’n gweddu i’ch brand?',
      advisoryBody:
        'Rhannwch eich nod masnachol—o godi ymddiriedaeth weledol eich brand i lansio siop e-fasnach neu ennill dyfyniadau ChatGPT/Gemini—a byddwn yn cwmpasu cynllun clir.',
      advisoryCta: 'Gofyn am Fap Ffordd Technegol',
      pillarCopy: {
        'web-engineering': {
          title: 'Gwe, E-fasnach a Pheirianneg Bwrpasol',
          summary:
            'Gwefannau bwrpasol cyflym iawn, siopau ar-lein sy’n cydymffurfio â rheolau’r DU, a meddalwedd wedi’i theilwra.',
        },
        'search-geo-ai': {
          title: 'Gwelededd SEO, GEO a Chwilio AI',
          summary:
            'Rhowch eich brand Prydeinig lle mae prynwyr modern yn chwilio—ar Google UK yn ogystal ag atebion ChatGPT, Gemini a Claude.',
        },
        'ai-automation': {
          title: 'Awtomeiddio AI a Gweithrediadau Busnes',
          summary:
            'Dilëwch waith gweinyddol ailadroddus drwy gysylltu ffurflenni gwefan, mewnflwch, CRM a phiblinellau adrodd.',
        },
        'brand-growth': {
          title: 'Brandio a Thwf Digidol',
          summary:
            'Hunaniaeth weledol gydlynol ac ymgyrchoedd twf sy’n seiliedig ar ddata sy’n ennyn ymddiriedaeth ar unwaith.',
        },
      },
      itemCopy: {
        'website-dev': {
          name: 'Datblygu Gwefannau',
          outcome:
            'Gwefannau busnes cyflym, hygyrch a chydymffurfiol â GDPR y DU gyda Core Web Vitals o dan 1.2 eiliad.',
        },
        'ecommerce-dev': {
          name: 'Datblygu Gwefannau E-fasnach',
          outcome:
            'Siopau WooCommerce ac ar-lein wedi’u ffurfweddu ar gyfer GBP (£), TAW y DU a chludo Royal Mail / DPD.',
        },
        'custom-integrations': {
          name: 'Datrysiadau Gwe Bwrpasol ac Integreiddiadau',
          outcome:
            'Pyrth cleientiaid pwrpasol, peiriannau archebu a chysylltiadau API di-dor gyda Xero, HubSpot a Stripe.',
        },
        'ai-powered-web': {
          name: 'Datblygu Gwefannau wedi’u Pweru gan AI',
          outcome:
            'Chwilio deallus, offer cymhwyso cwsmeriaid a phersonoli deinamig wedi’u peiriannu’n ddiogel.',
        },
        seo: {
          name: 'Optimeiddio Peiriannau Chwilio (SEO)',
          outcome:
            'Archwiliadau technegol, awdurdod chwilio lleol yn y DU, Schema.org ac amddiffyniad ailgyfeirio 301.',
        },
        geo: {
          name: 'Optimeiddio Peiriannau Cynhyrchiol (GEO)',
          outcome:
            'Cynnwys strwythuredig llawn endidau a signalau prawf wedi’u cynllunio ar gyfer crynodebau chwilio cynhyrchiol.',
        },
        'ai-search': {
          name: 'Optimeiddio Chwilio AI (ChatGPT, Gemini a Claude)',
          outcome:
            'Mynegeio /llms.txt ac atebion ffeithiol fel bod prif gynorthwywyr AI yn argymell eich busnes yn y DU.',
        },
        'ai-business-automation': {
          name: 'Awtomeiddio AI ac Awtomeiddio Prosesau Busnes',
          outcome:
            'Brysbennu ymholiadau awtomataidd, llwybro CRM ac atebolrwydd GDPR y DU sy’n arbed oriau bob wythnos.',
        },
        branding: {
          name: 'Brandio a Hunaniaeth Brand',
          outcome:
            'Systemau hunaniaeth weledol nodedig, teipograffeg, paletau lliw a chanllawiau brand digidol ar gyfer marchnadoedd y DU.',
        },
        'digital-marketing': {
          name: 'Marchnata Digidol a Thwf Ar-lein',
          outcome:
            'Tudalennau glanio pwrpasol, optimeiddio cyfraddau trosi (CRO) ac ymgyrchoedd sy’n dod ag ymholiadau cymwys.',
        },
      },
    },
    techStackSection: {
      eyebrow: 'Pensaernïaeth Beirianneg a Phentwr Adeiladu',
      headline: 'Ieithoedd menter, fframweithiau a seilwaith cwmwl y DU.',
      lead: 'Wedi’i ysbrydoli gan brif ymgynghoriaethau peirianneg meddalwedd Prydain, rydym yn parhau’n annibynnol ar dechnoleg—gan baru ieithoedd â theipiau llym â HTML cyflym a chwmwl y DU/AEE.',
      discussPrefix: 'Trafod',
      sectorsEyebrow: 'Diwydiannau a Sectorau’r DU',
      sectorsHeadline:
        'Rhuglder parth ar draws marchnadoedd rheoleiddiedig a masnachol y DU.',
      governanceTitle: 'Llywodraethiant, Hygyrchedd a Diogelwch Sylfaenol y DU',
      governanceNote: 'Wedi’i adeiladu i mewn i bob ystorfa a llwyfan prawf',
      domainLabels: {
        languages: 'Ieithoedd a Chraidd',
        frontend: 'Frontend ac UX',
        'ai-geo': 'AI, GEO a Chwilio',
        cloud: 'Cwmwl, Edge a CI/CD',
        commerce: 'Masnach ac APIs',
      },
      domainSummaries: {
        languages:
          'Ieithoedd gwe â theipiau llym a gweinyddion profedig ar gyfer diogelwch, cyflymder a chynnal hirdymor.',
        frontend:
          'Rhyngwynebau hygyrch sy’n cydymffurfio â safonau GDS y DU / WCAG 2.2 AA ac amser llwytho o dan 1.2 eiliad.',
        'ai-geo':
          'Graffiau endid strwythuredig a pheirianneg AI wedi’i seilio ar ffeithiau ar gyfer Google UK, ChatGPT, Gemini a Claude.',
        cloud:
          'Topoleg cynnal sy’n cydymffurfio â’r DU/AEE, gwiriadau CI/CD awtomataidd a llwyfannu ar wahân heb amser segur.',
        commerce:
          'Integreiddio masnachol o amgylch arian Prydeinig (£), rheolau TAW y DU, APIs cludo a systemau cyllid.',
      },
      entryCopy: CY_TECH_ENTRY_COPY,
      sectorCopy: [
        {
          sector: 'Gofal Iechyd Preifat a Chlinigau',
          outcome:
            'Gwefannau clinigau dibynadwy gyda ffurflenni cleifion GDPR y DU, SEO rhanbarthol ac awtomeiddio CRM.',
        },
        {
          sector: 'Manwerthu y DU a WooCommerce',
          outcome:
            'Desgiau talu symudol cyflym gyda WooCommerce HPOS, Stripe/Apple Pay a data strwythuredig Product JSON-LD.',
        },
        {
          sector: 'B2B, Cyfreithiol a Chyngor Ariannol',
          outcome:
            'Safleoedd awdurdod golygyddol ar gyfer gwelededd ChatGPT, Gemini a Google UK sy’n denu cleientiaid masnachol.',
        },
        {
          sector: 'SaaS, Eiddo a BBaCh Aml-Safle',
          outcome:
            'Pyrth cleientiaid pwrpasol, cyfrifianellau prisio rhyngweithiol ac awtomeiddio llif gwaith.',
        },
      ],
      complianceCopy: [
        {
          title: 'Sofraniaeth Data y DU / AEE',
          detail:
            'Copïau wrth gefn wedi’u hamgryptio yn y DU/AEE, rheolaethau caniatâd ICO a dim hyfforddiant AI ar eich data.',
        },
        {
          title: 'Safon Rhyngwyneb Hygyrch',
          detail:
            'Llywio bysellfwrdd llawn, cymarebau cyferbyniad profedig a HTML semantig ar safon ddigidol uchaf y DU.',
        },
        {
          title: 'Diogelwch Cymwysiadau ac Edge',
          detail:
            'Allweddi API ochr-gweinydd llym, ymholiadau wedi’u paramedroli, rheolau Cloudflare WAF a brysbennu 24/7.',
        },
        {
          title: 'Cyllideb Perfformiad Gwiriedig',
          detail:
            'HTML wedi’i rag-rendro ar gyfer paent cyntaf ar unwaith, gwiriadau CI awtomataidd ac amddiffyniad 301.',
        },
      ],
    },
    carePlansSection: {
      eyebrow: 'Cynlluniau Gofal WordPress',
      headline:
        'Cynnal a chadw WordPress rhagweladwy yn y DU gyda therfynau clir.',
      lead: 'Mae pob cynllun yn cynnwys copïau wrth gefn yn y DU/AEE, diweddariadau wedi’u profi a mynediad uniongyrchol i uwch beirianwyr y DU—gyda thelerau misol hyblyg a phrisio GBP clir.',
      monthlyBilling: 'Bilio Misol',
      annualBilling: 'Blynyddol (Arbedwch 17%)',
      perMonth: '/ mis',
      billedAnnually: '· bilio blynyddol',
      selectPrefix: 'Dewis',
      planCopy: {
        essential: {
          name: 'Essential Care',
          audience: 'Ar gyfer safleoedd llyfryn a busnesau bach y DU',
          summary:
            'Copïau wrth gefn dibynadwy yn y DU/AEE, diweddariadau wedi’u profi ac amddiffyniad parhaus.',
        },
        growth: {
          name: 'Growth & Speed',
          audience: 'Ar gyfer cwmnïau gwasanaeth sy’n tyfu yn y DU',
          summary:
            'Peirianneg cyflymder llawn, glanhau meddalwedd faleisus brys diderfyn a gwelliannau misol rhagweithiol.',
        },
        scale: {
          name: 'Scale & WooCommerce',
          audience: 'Ar gyfer siopau traffig uchel ac asiantaethau’r DU',
          summary:
            'Cipluniau cronfa ddata bob awr, monitro llif talu ac ymateb SLA cyflym o dan 30 munud.',
        },
      },
      limitCopy: CY_CARE_LIMIT_COPY,
    },
    caseStudiesSection: {
      eyebrow: 'Prawf o Effaith Brand',
      headline:
        'Enillion mesuradwy mewn cyflymder, amser gweithredu a refeniw i sefydliadau’r DU.',
      beforeLabel: 'Her Weithredol',
      fixLabel: 'Ymyrraeth Bensaernïol',
      studyCopy: {
        'atelier-lumiere': {
          sector: 'Manwerthu a WooCommerce',
          location: 'Llundain',
          metricHeadline: '+138% o Drosiadau Talu Symudol mewn 4 Mis',
          metricDetail: 'LCP symudol 1.1s i lawr o 4.8s · £0 archeb wedi’i cholli wrth fudo',
          challenge:
            'Roedd templedi hen yn achosi amseroedd llwytho symudol o 4.8 eiliad a gwrthdaro ategion yn ystod lansiadau manwerthu’r DU.',
          solution:
            'Ailadeiladu’r siop gyda blociau ysgafn pwrpasol, symleiddio sgriptiau WooCommerce ac ychwanegu data cynnyrch GEO.',
          quote:
            'Cyn gweithio gyda WPCarePoint, roedd pob diweddariad mewn perygl o gau ein desg dalu. Torrodd symud i’w hadeiladwaith pwrpasol yr amser llwytho o dan 1.2 eiliad gan godi gwerthiannau symudol mewn wythnosau.',
          authorRole: 'Pennaeth Digidol, Atelier Lumière UK',
        },
        'cavendish-clinic': {
          sector: 'Gofal Iechyd Preifat',
          location: 'Harley Street, Llundain',
          metricHeadline: '98 / 100 PageSpeed Symudol a Phrif Ddyfyniadau AI',
          metricDetail: 'Adferwyd mewn 4 awr · Brysbennu cleifion CRM awtomataidd ar waith',
          challenge:
            'Roedd ategyn wedi’i gyfaddawdu wedi chwalu tudalennau apwyntiadau dros nos, ac roedd didoli llaw yn arafu ymatebion i gleifion.',
          solution:
            'Adeiladu safle glân gydag integreiddio archebu pwrpasol, cadwraeth SEO 301 llym, UK FAQ Schema a llwybro CRM awtomataidd.',
          quote:
            'Ailadeiladodd WPCarePoint ein porth cleifion yn lân, awtomeiddio ein hymholiadau, a diogelu pob safle Google UK yr oeddem wedi’u hennill dros bum mlynedd.',
          authorRole: 'Partner Rheoli, The Cavendish Clinic',
        },
      },
    },
    processSection: {
      eyebrow: 'Sut Rydym yn Gweithio',
      headline:
        'Cyflawniad disgybledig o’r archwiliad i chwilio AI ac awtomeiddio.',
      steps: [
        {
          title: 'Archwiliad Darganfod, SEO ac AI',
          detail:
            'Archwiliwn eich marchnad, DNS, Core Web Vitals, gwelededd AI a llifau gwaith i lunio’r map ffordd technegol gorau.',
        },
        {
          title: 'Brand, UX a Pheirianneg Llwyfannu',
          detail:
            'Mae dylunio, integreiddio pwrpasol, pensaernïaeth GEO/Schema ac awtomeiddio AI yn cael eu profi ar weinydd y DU.',
        },
        {
          title: 'Lansio Heb Amser Segur a Gwirio',
          detail:
            'Newid DNS yn lân, gwirio SSL, ailgyfeiriadau 301 a chyflwyno mapiau safle XML ac /llms.txt i beiriannau chwilio.',
        },
        {
          title: 'Cynlluniau Gofal a Thwf Parhaus',
          detail:
            'Copïau wrth gefn parhaus yn y DU/AEE, monitro cyflymder ac ymgyrchoedd SEO, GEO a thwf digidol cyson.',
        },
      ],
    },
    guidesSection: {
      eyebrow: 'Mewnwelediadau Peirianneg a Thwf',
      headline:
        'Llawlyfrau ymarferol ar GEO, awtomeiddio AI a pherfformiad gwe.',
      readGuide: 'Darllen y Llawlyfr',
      modalNeedHelp: 'Angen cymorth ymarferol ar eich gwefan?',
      modalClose: 'Cau’r canllaw',
      modalCta: 'Archebu Ymgynghoriad Am Ddim',
      guideCopy: CY_GUIDES_COPY,
    },
    faqSection: {
      eyebrow: 'Cwestiynau Cyffredin',
      headline: 'Atebion clir i berchnogion busnes yn y DU.',
      lead: 'Telerau clir ar breswyliad data GDPR y DU, parthau Nominet .co.uk, bilio GBP ac amseroedd ymateb brys.',
      items: {
        'uk-services-scope': {
          question:
            'Ydych chi’n trin gwefannau pwrpasol a thwf AI / GEO o dan un tîm?',
          answer:
            'Ydyn. Rydym yn dylunio ac yn peiriannu gwefannau pwrpasol, siopau e-fasnach ac APIs ochr yn ochr ag SEO, GEO, Optimeiddio Chwilio AI ar gyfer ChatGPT, Gemini a Claude ac awtomeiddio busnes.',
        },
        'uk-hosts': {
          question:
            'Ydych chi’n cefnogi darparwyr cynnal y DU a pharthau Nominet .co.uk?',
          answer:
            'Ydyn. Rydym yn rheoli DNS, SSL a gwefannau ar draws gweinyddion y DU ac Ewrop gan gynnwys 20i, Krystal, SiteGround UK, Namecheap, Vercel a Cloudflare, gyda pharthau .co.uk a .uk.',
        },
        'uk-gdpr': {
          question:
            'A yw eich gwefannau, integreiddiadau AI a chopïau wrth gefn yn cydymffurfio â GDPR y DU?',
          answer:
            'Ydyn. Rydym yn ffurfweddu caniatâd cydymffurfiol â GDPR a PECR y DU, storfa wrth gefn wedi’i hamgryptio yn y DU/AEE a llifau gwaith AI diogel.',
        },
        'gbp-billing': {
          question:
            'A yw cynlluniau gofal yn cael eu bilio mewn GBP ac oes cytundebau hirdymor?',
          answer:
            'Mae pob cynllun yn cael ei filio’n dryloyw mewn GBP (£) ar delerau misol heb gontractau cloi i mewn, neu gynllun blynyddol gydag arbedion o 17%.',
        },
        'lost-site-rebuild': {
          question:
            'Allwch chi ailadeiladu gwefan .co.uk goll heb golli safleoedd Google UK?',
          answer:
            'Gallwn. Rydym yn archwilio tudalennau mynegeiedig, yn cadw’r un llwybrau URL, yn gosod ailgyfeiriadau 301 lefel-gweinydd ac yn ffurfweddu Schema.org a llms.txt.',
        },
      },
    },
    contactSection: {
      eyebrow: 'Ymgynghoriad Am Ddim',
      headline:
        'Trafodwch uwchraddio brand, gwefan bwrpasol neu gynllun twf GEO.',
      lead: 'Rhannwch URL eich gwefan a’ch nodau masnachol. Mae uwch beiriannydd yn y DU yn adolygu pob ymholiad yn uniongyrchol.',
      addressLabel: 'Cyfeiriad Swyddfa y DU',
      emailLabel: 'E-bost Peirianneg Uniongyrchol',
      hoursLabel: 'Oriau Cymorth y DU',
      hoursValue:
        'Llun–Gwener, 08:30–18:00 GMT/BST · Brysbennu brys 24/7',
      coverageLabel: 'Ardal Gwasanaeth y DU',
      fullNameLabel: 'Enw Llawn',
      businessEmailLabel: 'E-bost Busnes',
      websiteUrlLabel: 'URL Gwefan (dewisol)',
      servicePlanLabel: 'Gwasanaeth neu Gynllun Gofal',
      capabilitiesGroupLabel: 'Galluoedd Arbenigol',
      retainersGroupLabel: 'Cynlluniau Gofal Rheoledig',
      annualSuffixLabel: 'Blynyddol',
      detailsLabel: 'Manylion y Prosiect neu’r Mater',
      detailsPlaceholder:
        'Dywedwch wrthym am eich gwefan bresennol, amserlen neu nodau...',
      submitCta: 'Trefnu Ymgynghoriad Am Ddim',
      submittingCta: 'Wrthi’n anfon...',
      errorName: 'Rhowch eich enw llawn os gwelwch yn dda.',
      errorEmail: 'Rhowch gyfeiriad e-bost dilys os gwelwch yn dda.',
      loggedHeading: 'Cais Ymgynghoriad wedi’i Gofnodi',
      loggedPrefix: 'Diolch,',
      loggedRefText: 'Eich cyfeirnod cais yw',
      loggedBodyPrefix: 'Rydym wedi cofnodi eich ymholiad ar gyfer',
      loggedBodySuffix:
        '. Os oes angen cymorth brys ar unwaith, gallwch hefyd anfon eich neges yn uniongyrchol drwy e-bost.',
      emailAppCta: 'Anfon Copi drwy Ap E-bost',
      anotherRequestCta: 'Cyflwyno Cais Arall',
    },
    footer: {
      tagline: 'Peirianneg Brand, Gwe, SEO, GEO ac Awtomeiddio AI y DU',
      servingPrefix: 'Yn gwasanaethu',
      quickLinksHeading: 'Dolenni Cyflym (Gwasanaethau Mwyaf Poblogaidd)',
      quickLinksSub: 'Wedi’i ddiweddaru’n awtomatig gan ddiddordeb ymwelwyr',
      viewsLabel: 'gweliad',
      dedicatedServicesHeading: 'Pob Tudalen Gwasanaeth Pwrpasol y DU',
      copyright: '© 2026 WPCarePoint DU. Cedwir pob hawl.',
    },
    servicePage: {
      homeBreadcrumb: 'Hafan',
      servicesBreadcrumb: 'Gwasanaethau',
      unitedKingdom: 'Y Deyrnas Unedig',
      requestProposalPrefix: 'Gofyn am Gynnig',
      requestProposalSuffix: '',
      backToAll: 'Yn ôl i Pob Gwasanaeth',
      investmentLabel: 'Buddsoddiad Arferol y DU',
      timelineLabel: 'Amserlen Cyflwyno',
      standardLabel: 'Safon Beirianneg',
      buildStackLabel: 'Ieithoedd a Phentwr Cyflwyno',
      sectionNavLabel: 'Yn y briff gwasanaeth hwn',
      sectionLinks: {
        overview: '01. Ffit Masnachol',
        deliverables: '02. Darpariaethau',
        delivery: '03. Dilyniant Cyflwyno',
        faq: '04. Cwestiynau Cyffredin',
        proposal: '05. Gofyn am Gynnig',
      },
      brandPromiseEyebrow: 'Safon WPCarePoint',
      brandPromiseHeadline:
        'Pam mae brandiau uchelgeisiol yn y DU yn ymddiried ynom ar gyfer lansiadau hanfodol.',
      brandPromisePoints: [
        {
          label: 'Perchnogaeth 100% yn y DU',
          detail:
            'Mae eich parth, eich cod ffynhonnell a’ch seilwaith cwmwl yn aros yn gyfan gwbl yn eich enw chi.',
        },
        {
          label: 'Cyflymder < 1.2s a Chywirdeb Brand',
          detail:
            'Mae pob cynllun yn cyd-fynd â’ch system brand weledol wrth gyrraedd targedau Core Web Vitals.',
        },
        {
          label: 'Eglurder GBP Carreg Milltir Sefydlog',
          detail:
            'Cwmpas wedi’i eitemeiddio a cherrig milltir clir wedi’u cytuno ymlaen llaw cyn ysgrifennu’r cod cyntaf.',
        },
      ],
      brandPromiseCta: 'Cwmpaswch Eich Prosiect gydag Uwch Beiriannydd',
      whoFitsEyebrow: 'I Bwy Mae Hyn yn Addas',
      whoFitsHeadline:
        'Wedi’i adeiladu ar gyfer timau’r DU sy’n chwilio am ganlyniadau masnachol mesuradwy.',
      includedHeadingPrefix: 'Beth Sydd wedi’i Gynnwys yn',
      includedSub:
        'Wedi’i beiriannu o’r dechrau i’r diwedd gan ein tîm yn y DU—dim llwybrau byr.',
      deliveryEyebrow: 'Dilyniant Cyflwyno',
      deliveryHeadingPrefix: 'Sut rydym yn darparu',
      faqEyebrow: 'Cwestiynau Cyffredin y Gwasanaeth',
      faqHeadingPrefix: 'Cwestiynau cyffredin am',
      relatedHeading: 'Archwilio Gwasanaethau Perthnasol y DU',
      viewAllServices: 'Gweld Pob 10 Gwasanaeth',
      openServicePage: 'Darllen y Cwmpas Llawn',
      serviceContent: CY_SERVICE_PAGES_COPY,
    },
  },
};
