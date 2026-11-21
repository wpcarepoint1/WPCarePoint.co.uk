export interface RebuildPageDraft {
  id: string;
  enabled: boolean;
  postType: 'page' | 'post';
  title: string;
  slug: string;
  headline: string;
  intro: string;
  highlights: string[];
  ctaLabel: string;
  ctaSlug: string;
}

function escapeCdata(str: string): string {
  return str.replace(/\]\]>/g, ']]]]><![CDATA[>');
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildGutenbergContent(page: RebuildPageDraft, domain: string): string {
  const listItems = page.highlights
    .filter((h) => h.trim().length > 0)
    .map((h) => `<!-- wp:list-item -->\n<li>${escapeXml(h)}</li>\n<!-- /wp:list-item -->`)
    .join('\n');

  const ctaUrl = `https://${domain}/${page.ctaSlug.replace(/^\/+/, '')}`;

  return [
    `<!-- wp:heading {"level":1} -->`,
    `<h1 class="wp-block-heading">${escapeXml(page.headline)}</h1>`,
    `<!-- /wp:heading -->`,
    ``,
    `<!-- wp:paragraph -->`,
    `<p>${escapeXml(page.intro)}</p>`,
    `<!-- /wp:paragraph -->`,
    ``,
    listItems
      ? `<!-- wp:list -->\n<ul>\n${listItems}\n</ul>\n<!-- /wp:list -->`
      : '',
    ``,
    page.ctaLabel
      ? `<!-- wp:buttons -->\n<div class="wp-block-buttons"><!-- wp:button -->\n<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="${escapeXml(
          ctaUrl
        )}">${escapeXml(page.ctaLabel)}</a></div>\n<!-- /wp:button --></div>\n<!-- /wp:buttons -->`
      : '',
  ]
    .filter(Boolean)
    .join('\n');
}

export function getDefaultWpcarepointPages(
  brandName: string,
  contactEmail: string
): RebuildPageDraft[] {
  return [
    {
      id: 'home',
      enabled: true,
      postType: 'page',
      title: `${brandName} — WordPress Web Design & Care Agency`,
      slug: 'home',
      headline: `Trusted WordPress Web Design & Maintenance Experts`,
      intro: `${brandName} builds fast, secure, SEO-ready WordPress websites and provides 24/7 maintenance, speed optimization, and emergency hacked-site repair for UK businesses.`,
      highlights: [
        'Custom WordPress Web Design & WooCommerce Development',
        '24/7 WordPress Maintenance, Updates & Off-Site Cloud Backups',
        'Core Web Vitals & LiteSpeed Speed Optimization',
        'Emergency Malware Removal & Hacked Site Recovery',
      ],
      ctaLabel: 'Book a Free Consultation',
      ctaSlug: 'contact-us',
    },
    {
      id: 'services',
      enabled: true,
      postType: 'page',
      title: 'WordPress Services',
      slug: 'services',
      headline: 'Complete WordPress Design, Maintenance & Security Services',
      intro: `Whether you need a high-converting business website, ongoing care plans, or urgent technical troubleshooting, our specialists keep your WordPress site fast and protected.`,
      highlights: [
        'WordPress Design and Development — Responsive, conversion-focused custom builds',
        'Website Maintenance & Support — Safe plugin/core updates, uptime monitoring, daily backups',
        'WordPress Speed Optimization — Database tuning, LiteSpeed caching, WebP media',
        'WordPress Security & Emergency Support — Malware cleanup, firewall hardening, SSL setup',
      ],
      ctaLabel: 'Request a Custom Quote',
      ctaSlug: 'contact-us',
    },
    {
      id: 'maintenance',
      enabled: true,
      postType: 'page',
      title: 'WordPress Maintenance and Support',
      slug: 'wordpress-maintenance-support',
      headline: 'Proactive WordPress Care Plans That Prevent Downtime',
      intro: `Never worry about broken updates, slow load times, or lost website data. Our monthly WordPress Care Plans include daily off-site backups, security scans, and priority developer hours.`,
      highlights: [
        'Daily automated encrypted backups stored off-server',
        'Tested WordPress core, theme, and plugin updates',
        '24/7 uptime monitoring and instant error resolution',
        'Monthly performance, security, and SEO health report',
      ],
      ctaLabel: 'View Care Plans',
      ctaSlug: 'contact-us',
    },
    {
      id: 'security',
      enabled: true,
      postType: 'page',
      title: 'WordPress Security & Hacked Site Repair',
      slug: 'wordpress-security-emergency-support',
      headline: 'Fast Emergency Malware Removal & WordPress Hardening',
      intro: `Experiencing redirects, spam injections, or a suspended hosting account? We clean infected core files, repair databases, remove blacklists, and lock down wp-admin.`,
      highlights: [
        'Complete file-system & MySQL database malware scan',
        'Clean WordPress core replacement without losing content',
        'Google Search Console blacklist & warning removal',
        'Cloudflare WAF, 2FA, and login hardening',
      ],
      ctaLabel: 'Get Emergency Help',
      ctaSlug: 'contact-us',
    },
    {
      id: 'portfolio',
      enabled: true,
      postType: 'page',
      title: 'Portfolio',
      slug: 'portfolio',
      headline: 'Selected WordPress & WooCommerce Projects',
      intro: `Explore custom websites engineered for UK service providers, healthcare practices, e-commerce brands, and growing agencies.`,
      highlights: [
        'Custom responsive WordPress & WooCommerce builds',
        'Core Web Vitals 90+ performance benchmarks',
        'Accessible, mobile-first layouts engineered for conversions',
      ],
      ctaLabel: 'Start Your Project',
      ctaSlug: 'contact-us',
    },
    {
      id: 'contact',
      enabled: true,
      postType: 'page',
      title: 'Contact Us',
      slug: 'contact-us',
      headline: `Get in Touch With ${brandName}`,
      intro: `Need a new WordPress website, ongoing support plan, or emergency repair? Email us directly at ${contactEmail} or submit your project details below.`,
      highlights: [
        `Direct Email: ${contactEmail}`,
        'Response time: Within 2 business hours',
        'Free initial site audit and consultation',
      ],
      ctaLabel: 'Explore Services',
      ctaSlug: 'services',
    },
    {
      id: 'blog-checklist',
      enabled: true,
      postType: 'post',
      title: 'Essential WordPress Backup & Security Checklist for UK Businesses',
      slug: 'wordpress-backup-security-checklist',
      headline: 'How to Protect Your WordPress Website From Data Loss',
      intro: `Relying solely on server-side backups puts your business at risk. Follow these best practices to keep automated off-site backups and harden your WordPress site.`,
      highlights: [
        'Schedule automated daily database backups to Google Drive or S3',
        'Keep WordPress core, themes, and plugins updated on staging first',
        'Enable two-factor authentication (2FA) for all administrator accounts',
        'Use LiteSpeed Cache or Cloudflare to boost speed and block malicious traffic',
      ],
      ctaLabel: 'Get WordPress Care Support',
      ctaSlug: 'contact-us',
    },
  ];
}

export function generateWordPressWxrXml(options: {
  domain: string;
  brandName: string;
  tagline: string;
  authorEmail: string;
  pages: RebuildPageDraft[];
}): string {
  const { domain, brandName, tagline, authorEmail, pages } = options;
  const nowRfc = new Date().toUTCString();
  const nowSql = new Date().toISOString().replace('T', ' ').slice(0, 19);
  const siteUrl = `https://${domain}`;

  const activeItems = pages.filter((p) => p.enabled);

  const itemsXml = activeItems
    .map((item, idx) => {
      const postId = 101 + idx;
      const content = buildGutenbergContent(item, domain);
      const link =
        item.slug === 'home' ? `${siteUrl}/` : `${siteUrl}/${item.slug}/`;
      return `  <item>
    <title>${escapeXml(item.title)}</title>
    <link>${escapeXml(link)}</link>
    <pubDate>${nowRfc}</pubDate>
    <dc:creator><![CDATA[admin]]></dc:creator>
    <guid isPermaLink="false">${escapeXml(siteUrl)}/?p=${postId}</guid>
    <description></description>
    <content:encoded><![CDATA[${escapeCdata(content)}]]></content:encoded>
    <excerpt:encoded><![CDATA[${escapeCdata(item.intro)}]]></excerpt:encoded>
    <wp:post_id>${postId}</wp:post_id>
    <wp:post_date><![CDATA[${nowSql}]]></wp:post_date>
    <wp:post_date_gmt><![CDATA[${nowSql}]]></wp:post_date_gmt>
    <wp:comment_status><![CDATA[closed]]></wp:comment_status>
    <wp:ping_status><![CDATA[closed]]></wp:ping_status>
    <wp:post_name><![CDATA[${escapeCdata(item.slug)}]]></wp:post_name>
    <wp:status><![CDATA[publish]]></wp:status>
    <wp:post_parent>0</wp:post_parent>
    <wp:menu_order>${idx + 1}</wp:menu_order>
    <wp:post_type><![CDATA[${item.postType}]]></wp:post_type>
    <wp:post_password><![CDATA[]]></wp:post_password>
    <wp:is_sticky>0</wp:is_sticky>
  </item>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0"
  xmlns:excerpt="http://wordpress.org/export/1.2/excerpt/"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:wfw="http://wellformedweb.org/CommentAPI/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:wp="http://wordpress.org/export/1.2/"
>
<channel>
  <title>${escapeXml(brandName)}</title>
  <link>${escapeXml(siteUrl)}</link>
  <description>${escapeXml(tagline)}</description>
  <pubDate>${nowRfc}</pubDate>
  <language>en-GB</language>
  <wp:wxr_version>1.2</wp:wxr_version>
  <wp:base_site_url>${escapeXml(siteUrl)}</wp:base_site_url>
  <wp:base_blog_url>${escapeXml(siteUrl)}</wp:base_blog_url>
  <wp:author>
    <wp:author_id>1</wp:author_id>
    <wp:author_login><![CDATA[admin]]></wp:author_login>
    <wp:author_email><![CDATA[${escapeCdata(authorEmail)}]]></wp:author_email>
    <wp:author_display_name><![CDATA[${escapeCdata(brandName)}]]></wp:author_display_name>
  </wp:author>
${itemsXml}
</channel>
</rss>
`;
}
