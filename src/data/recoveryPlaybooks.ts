import type { LossScenarioPlaybook } from '../types/recovery';

export const LOSS_SCENARIOS: LossScenarioPlaybook[] = [
  {
    id: 'domain-expired',
    label: 'Domain Expired or Lost Registrar Access',
    shortDescription:
      'The .co.uk or TLD registration lapsed, nameservers reset, or domain billing failed.',
    symptoms: [
      'Site shows NXDOMAIN or a registrar parking page',
      'Email on the domain stopped arriving at the same time',
      'RDAP shows renewal required, suspended, or pendingDelete',
    ],
    recoveryChance: 'High within 30 days (Nominet .uk grace) · Moderate up to 90 days',
    steps: [
      {
        id: 'dom-1',
        title: 'Check registry status and exact expiry window',
        detail:
          'For .co.uk domains, Nominet provides a 30-day renewal grace period followed by a 60-day suspension window before public release (90 days total). Check which registrar tag holds the domain.',
        priority: 'Immediate',
        estimatedMinutes: 5,
        externalUrl: 'https://www.nominet.uk/lookup/',
        externalLabel: 'Open Nominet Lookup',
      },
      {
        id: 'dom-2',
        title: 'Log into your domain registrar and renew immediately',
        detail:
          'Search your email inbox (wpcarepoint@gmail.com) for past invoices from GoDaddy, Namecheap, 123-Reg, Fasthosts, or Cloudflare to identify your registrar account.',
        priority: 'Immediate',
        estimatedMinutes: 15,
      },
      {
        id: 'dom-3',
        title: 'Restore original nameservers instead of parked DNS',
        detail:
          'Once renewed, ensure the nameservers point back to your web host or Cloudflare rather than the registrar default parking servers.',
        priority: 'Recovery',
        estimatedMinutes: 10,
        command: 'dig NS wpcarepoint.co.uk +short',
        commandLabel: 'Verify active nameservers',
      },
      {
        id: 'dom-4',
        title: 'Enable registrar lock and auto-renew with backup payment',
        detail:
          'Turn on Registry Lock / Transfer Lock and add a secondary billing method so future renewals cannot fail silently.',
        priority: 'Prevention',
        estimatedMinutes: 5,
      },
    ],
  },
  {
    id: 'hosting-lost',
    label: 'Hosting Expired, Cancelled, or Server Deleted',
    shortDescription:
      'Your domain still exists, but the web hosting account or VPS was terminated or lost.',
    symptoms: [
      'Connection timed out, 404 Host Not Found, or ERR_CONNECTION_REFUSED',
      'Hosting account cancelled after missed invoice or agency handover',
      'No direct access to cPanel, Plesk, or SSH',
    ],
    recoveryChance: 'High if host retains 7–30 day backups · Content recoverable via Wayback Machine',
    steps: [
      {
        id: 'host-1',
        title: 'Contact your previous web host for archived snapshots',
        detail:
          'Most hosts keep off-server JetBackup, Acronis, or R1Soft snapshots for 14–30 days after account suspension. Ask specifically for a full cPanel home directory + MySQL .sql dump.',
        priority: 'Immediate',
        estimatedMinutes: 15,
      },
      {
        id: 'host-2',
        title: 'Search your email and local drives for WordPress plugin backups',
        detail:
          'Check Google Drive, Dropbox, OneDrive, or email attachments for UpdraftPlus, All-in-One WP Migration (.wpress), Duplicator (.zip + installer.php), or WPvivid archives.',
        priority: 'Immediate',
        estimatedMinutes: 15,
      },
      {
        id: 'host-3',
        title: 'Extract pages and media from the Wayback Machine',
        detail:
          'If no server backup exists, download the last clean snapshot of your HTML, CSS, and images using the Wayback Machine Downloader CLI and rebuild on a fresh WordPress install.',
        priority: 'Recovery',
        estimatedMinutes: 30,
        command:
          'gem install wayback_machine_downloader && wayback_machine_downloader https://wpcarepoint.co.uk -d ./recovered-site',
        commandLabel: 'Download Wayback archive locally',
      },
      {
        id: 'host-4',
        title: 'Preserve SEO rankings with 301 redirects on the new WordPress host',
        detail:
          'Import the discovered URLs in the Archive & Redirects tab to recreate your exact permalink slugs or generate 301 redirects for any changed URLs.',
        priority: 'Prevention',
        estimatedMinutes: 20,
      },
    ],
  },
  {
    id: 'wordpress-broken',
    label: 'WordPress Crashed, Database Error, or White Screen',
    shortDescription:
      'Files or database tables were corrupted after an update, PHP upgrade, or accidental deletion.',
    symptoms: [
      'HTTP 500, Critical Error, or Error Establishing a Database Connection',
      'White screen of death after updating plugins or theme',
      'Files missing in public_html but hosting account is active',
    ],
    recoveryChance: 'Very High (95%+ when hosting is active)',
    steps: [
      {
        id: 'wp-1',
        title: 'Restore from hosting panel (cPanel JetBackup / Hostinger / Plesk)',
        detail:
          'Open your hosting control panel and restore both Home Directory / File Manager and MySQL Database from the latest date before the crash.',
        priority: 'Immediate',
        estimatedMinutes: 15,
      },
      {
        id: 'wp-2',
        title: 'Enable WP_DEBUG and inspect wp-config.php credentials',
        detail:
          'Verify DB_NAME, DB_USER, DB_PASSWORD, and $table_prefix in wp-config.php match your MySQL database in phpMyAdmin.',
        priority: 'Recovery',
        estimatedMinutes: 10,
        command:
          "wp config set WP_DEBUG true --raw && wp config set WP_DEBUG_LOG true --raw",
        commandLabel: 'Enable WordPress error logging via WP-CLI',
      },
      {
        id: 'wp-3',
        title: 'Repair corrupted tables and disable crashing plugins',
        detail:
          'Rename wp-content/plugins to plugins-disabled via File Manager/SFTP, or use WP-CLI to repair the database and deactivate faulty plugins.',
        priority: 'Recovery',
        estimatedMinutes: 10,
        command: 'wp db repair && wp plugin deactivate --all',
        commandLabel: 'Repair database and isolate plugins',
      },
      {
        id: 'wp-4',
        title: 'Set up automated off-site backups to cloud storage',
        detail:
          'Configure daily database and weekly file backups to Google Drive or S3 so a host or plugin failure never puts your content at risk.',
        priority: 'Prevention',
        estimatedMinutes: 15,
      },
    ],
  },
  {
    id: 'hacked-compromised',
    label: 'Site Hacked, Defaced, or Removed for Malware',
    shortDescription:
      'Unauthorized redirects, spam pages, or host suspension triggered by compromised credentials or plugins.',
    symptoms: [
      'Site redirects to spam or displays unfamiliar content',
      'Google Search Console shows security warning or deindexed pages',
      'Host suspended account due to outbound malware',
    ],
    recoveryChance: 'High with clean WordPress core reinstall & database audit',
    steps: [
      {
        id: 'hack-1',
        title: 'Take a forensic snapshot before deleting anything',
        detail:
          'Download wp-content/uploads and export the MySQL database first so you never lose legitimate posts or images while cleaning.',
        priority: 'Immediate',
        estimatedMinutes: 10,
      },
      {
        id: 'hack-2',
        title: 'Reinstall clean WordPress core files and verify checksums',
        detail:
          'Delete wp-admin and wp-includes completely and replace them with fresh WordPress core files. Do not overwrite wp-content/uploads.',
        priority: 'Recovery',
        estimatedMinutes: 15,
        command: 'wp core download --force --skip-content && wp core verify-checksums',
        commandLabel: 'Replace WordPress core and verify integrity',
      },
      {
        id: 'hack-3',
        title: 'Audit admin users, rotate salts, and update all passwords',
        detail:
          'Remove unknown administrator accounts in wp_users, rotate wp-config.php security salts, and update hosting, FTP, and database passwords.',
        priority: 'Recovery',
        estimatedMinutes: 15,
        command: 'wp user list --role=administrator && wp config shuffle-salts',
        commandLabel: 'List admins and rotate security salts',
      },
      {
        id: 'hack-4',
        title: 'Request Google Search Console security review & enable WAF',
        detail:
          'Place the domain behind Cloudflare WAF, enforce 2FA for wp-admin, and submit a review in Google Search Console if flagged.',
        priority: 'Prevention',
        estimatedMinutes: 15,
        externalUrl: 'https://search.google.com/search-console/about',
        externalLabel: 'Open Google Search Console',
      },
    ],
  },
  {
    id: 'migration-accident',
    label: 'Lost During Migration, Redesign, or DNS Change',
    shortDescription:
      'The website disappeared after switching hosts, changing Cloudflare DNS, or resetting WordPress.',
    symptoms: [
      'Site shows default WordPress "Hello World" or host coming-soon page',
      'DNS points to the wrong server IP',
      'SSL mismatch or redirect loop after Cloudflare/host move',
    ],
    recoveryChance: 'Very High (old server often still holds intact files)',
    steps: [
      {
        id: 'mig-1',
        title: 'Check if your old hosting server still holds the live database',
        detail:
          'Do not cancel your old host until migration is verified. Test the old server IP directly with a curl Host header before changing DNS back.',
        priority: 'Immediate',
        estimatedMinutes: 10,
        command: 'curl -I --resolve wpcarepoint.co.uk:443:YOUR_OLD_IP https://wpcarepoint.co.uk',
        commandLabel: 'Test old server IP without waiting for DNS',
      },
      {
        id: 'mig-2',
        title: 'Verify A record, WWW CNAME, and SSL mode match',
        detail:
          'Confirm the root A record points to your active server IP and Cloudflare SSL/TLS is set to Full (strict) rather than Flexible to avoid redirect loops.',
        priority: 'Recovery',
        estimatedMinutes: 10,
      },
      {
        id: 'mig-3',
        title: 'Run serialized search-and-replace and flush permalinks',
        detail:
          'If migrated from staging or http:// to https://, update serialized database URLs safely with WP-CLI and flush rewrite rules.',
        priority: 'Recovery',
        estimatedMinutes: 10,
        command:
          "wp search-replace 'http://wpcarepoint.co.uk' 'https://wpcarepoint.co.uk' --all-tables && wp rewrite flush",
        commandLabel: 'Fix serialized URLs and flush permalinks',
      },
      {
        id: 'mig-4',
        title: 'Verify sitemap.xml and top pages return HTTP 200',
        detail:
          'Confirm your primary landing pages, blog posts, and XML sitemap return HTTP 200 OK after cutover.',
        priority: 'Prevention',
        estimatedMinutes: 10,
      },
    ],
  },
];
