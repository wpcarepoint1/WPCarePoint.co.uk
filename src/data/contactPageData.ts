import { BRAND_INFO, type FaqEntry } from './homepageData';

export interface ContactEnquiryGuide {
  index: string;
  title: string;
  description: string;
  mailtoSubject: string;
  suggestedPoints: string[];
}

export interface ContactExpectationStep {
  step: string;
  title: string;
  summary: string;
}

export const CONTACT_PAGE_DATA = {
  routePath: '/contact/',
  canonicalUrl: 'https://wpcarepoint.co.uk/contact/',
  metaTitle: 'Contact WPCarePoint | UK Web Development & WordPress Enquiries',
  metaDescription:
    'Contact WPCarePoint directly by email at contact@wpcarepoint.co.uk. Based at Robert Denholm House, Nutfield, Surrey RH1 4HW, United Kingdom.',
  eyebrow: 'Contact WPCarePoint · United Kingdom',
  headline: 'Direct technical correspondence by email—clear scoping without sales queues.',
  description:
    'Whether you are commissioning a bespoke WordPress or Next.js build, tuning WooCommerce speed, scoping business automation, or arranging Website Care, write to our engineering team directly.',
  imageUrl: '/src/assets/images/contact_nutfield_studio_1795541284338.webp',
  imageAlt:
    'WPCarePoint studio correspondence desk in natural daylight with coastal teal notebook and stationery cards',
  imageCaption: 'Nutfield, Surrey · Direct email correspondence across the United Kingdom',
  standards: [
    { label: 'Official Email', value: BRAND_INFO.email },
    { label: 'Contact Channel', value: 'Email Enquiries Only' },
    { label: 'UK Location', value: 'Nutfield, Surrey RH1 4HW' },
    { label: 'Commercial Practice', value: 'Written Scope Before Build' },
  ],
  enquiryGuides: [
    {
      index: '01.',
      title: 'Website Design, WooCommerce & Speed Optimisation',
      description:
        'Outline your existing website URL (if redesigning or tuning performance), platform goals, and required third-party integrations.',
      mailtoSubject: 'Website / WooCommerce / Speed Project Enquiry',
      suggestedPoints: [
        'Existing website URL or staging domain',
        'WordPress / WooCommerce vs custom React / Next.js goals',
        'Required integrations (e.g. Stripe, Xero, HubSpot, shipping)',
      ],
    },
    {
      index: '02.',
      title: 'Website Care Plans & One-Off WordPress Fixes',
      description:
        'Request Care Plan scoping (Essential, Advanced, or Elite) or describe an urgent WordPress error, plugin conflict, or security concern.',
      mailtoSubject: 'Website Care / WordPress Quick Fix Enquiry',
      suggestedPoints: [
        'Website URL and current UK hosting provider (e.g. 20i, Krystal, SiteGround)',
        'Whether you need ongoing stewardship or a one-off fix',
        'Specific error symptoms or plugin/checkout issues noticed',
      ],
    },
    {
      index: '03.',
      title: 'AI Workflows, Technical SEO & AI Search Optimisation',
      description:
        'Share your workflow bottlenecks, CRM/API connection targets, or technical search audit priorities for written scoping.',
      mailtoSubject: 'AI Automation / SEO & AI Search Enquiry',
      suggestedPoints: [
        'Primary business tools or CRM systems involved',
        'Manual process or search visibility challenge to address',
        'Privacy, UK GDPR, or human approval boundaries required',
      ],
    },
  ] as ContactEnquiryGuide[],
  emailBriefTemplate: `Hello WPCarePoint team,

Website URL (if applicable): 
Service Area (Build / WooCommerce / Speed / Care / Automation / SEO): 
Summary of Goals or Issue: 
Key Integrations or Hosting Context: 
Target Timeframe: 

Best regards,
`,
  processSteps: [
    {
      step: '01.',
      title: 'Send Your Brief by Email',
      summary:
        'Write directly to contact@wpcarepoint.co.uk with your website URL, objectives, or technical issue—no rigid form fields or scripted call-centre routing.',
    },
    {
      step: '02.',
      title: 'Direct Engineering Review',
      summary:
        'Your enquiry is assessed directly against live site structure, hosting environment, plugin footprint, and commercial requirements.',
    },
    {
      step: '03.',
      title: 'Written Scope & Next Steps',
      summary:
        'You receive a clear written response outlining practical technical options, transparent deliverables, and next-stage milestones before committing.',
    },
  ] as ContactExpectationStep[],
  faqs: [
    {
      id: 'contact-faq-1',
      question: 'Why does WPCarePoint communicate by email instead of telephone or live chat?',
      answer:
        'Technical scoping, URL audits, error diagnostics, and written proposals require accuracy rather than rushed verbal estimates. Email enquiries at contact@wpcarepoint.co.uk keep every requirement documented clearly for both teams without call-centre delays.',
    },
    {
      id: 'contact-faq-2',
      question: 'Why is there not an embedded contact form on this page yet?',
      answer:
        'In line with our strict verification policy, automated web form endpoints remain disabled until outbound transactional delivery and legal privacy notices are fully verified. Direct mailto links and verified email correspondence ensure zero lost leads.',
    },
    {
      id: 'contact-faq-3',
      question: 'Do you publish fixed pricing for Website Care Plans or new builds over email?',
      answer:
        'Care Plan pricing and project quotes are scoped transparently in writing once we inspect your platform size, WooCommerce complexity, and support requirements—ensuring you never pay for unnecessary tiers or hidden add-ons.',
    },
    {
      id: 'contact-faq-4',
      question: 'Which regions of the United Kingdom do you work with?',
      answer:
        'Based at Robert Denholm House in Nutfield, Surrey (RH1 4HW), we work remotely with organisations across Surrey, London, Manchester, Birmingham, Bristol, Leeds, Edinburgh, and throughout the United Kingdom.',
    },
  ] as FaqEntry[],
  relatedLinks: [
    {
      eyebrow: 'Core Web Builds',
      title: 'Website Design & Development',
      description:
        'Custom WordPress block architecture and React / Next.js platforms built for full client ownership.',
      ctaLabel: 'Explore Web Development',
      href: '/services/website-development/',
    },
    {
      eyebrow: 'Ongoing Support',
      title: 'Website Care & Technical Support',
      description:
        'Staging-tested updates, encrypted off-site backups, Care Plans, and standalone Quick Fixes.',
      ctaLabel: 'Explore Website Care',
      href: '/services/website-care-support/',
    },
    {
      eyebrow: 'Core Web Vitals',
      title: 'WordPress Speed Optimisation',
      description:
        'Diagnostic bottleneck resolution for images, caching, scripts, databases, and UK hosting.',
      ctaLabel: 'Explore Speed Optimisation',
      href: '/wordpress-speed-optimisation/',
    },
  ],
};
