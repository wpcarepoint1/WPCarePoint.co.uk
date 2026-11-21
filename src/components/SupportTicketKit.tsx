import { useMemo, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import type { DomainDiagnosticReport } from '../types/recovery';

interface SupportTicketKitProps {
  domain: string;
  report: DomainDiagnosticReport | null;
}

type TicketTarget = 'hosting' | 'registrar' | 'agency';

export function SupportTicketKit({ domain, report }: SupportTicketKitProps) {
  const [target, setTarget] = useState<TicketTarget>('hosting');
  const [ownerEmail, setOwnerEmail] = useState('wpcarepoint@gmail.com');
  const [copied, setCopied] = useState(false);

  const diagnosticFacts = useMemo(() => {
    if (!report) {
      return `Domain: ${domain}`;
    }
    const ns = report.dns.nsRecords.join(', ') || 'None detected';
    const ip = report.dns.aRecords.join(', ') || 'None detected';
    const reg = report.rdap.registrar || 'Unknown registrar';
    const exp = report.rdap.expiresAt
      ? report.rdap.expiresAt.slice(0, 10)
      : 'Unknown';
    return [
      `Domain: ${report.domain}`,
      `Registrar: ${reg}`,
      `Expiry Date: ${exp}`,
      `Active Nameservers: ${ns}`,
      `Active A Records: ${ip}`,
      `HTTP Probe: ${
        report.http.httpCode
          ? `HTTP ${report.http.httpCode}`
          : report.http.error || 'Unreachable'
      }`,
    ].join('\n');
  }, [domain, report]);

  const draftMessage = useMemo(() => {
    if (target === 'hosting') {
      return `Subject: Urgent Backup & Site Restoration Request for ${domain}

Hello Hosting Support Team,

My WordPress website (${domain}) is currently down or missing. Could you please check your server-level and off-server backup systems (JetBackup, Acronis, R1Soft, or daily snapshots) for the most recent complete backup of both:
1. The home directory / public_html files (especially wp-content/uploads and wp-config.php)
2. The MySQL database dump (.sql)

Account email on file: ${ownerEmail}

Current Live Diagnostics:
${diagnosticFacts}

If the hosting account was suspended or recently cancelled, please let me know if an archived backup can still be retrieved for a one-time restoration fee or download link.

Thank you,
Site Owner (${domain})`;
    }

    if (target === 'registrar') {
      return `Subject: Domain Recovery & Registrar Assistance for ${domain}

Hello Domain Support Team,

I am the registrant for ${domain} and need urgent assistance restoring domain access / renewal and verifying the active nameservers.

Account email on file: ${ownerEmail}

Current Registry & DNS Findings:
${diagnosticFacts}

Please confirm:
1. Whether the domain is in renewal grace, suspension, or redemption status and the exact link/invoice to renew it.
2. Whether any DNS / nameserver changes were recently made.
3. If the domain is registered under an older account, what identity verification steps are required to regain control (or retrieve the Nominet IPS Tag / EPP authorization code).

Thank you,
Registrant (${domain})`;
    }

    return `Subject: Request for Website Files & Database Export (${domain})

Hi Team,

We previously had ${domain} managed/hosted with your team, and the live site is currently offline. Could you please check your internal archives, staging servers, or UpdraftPlus / All-in-One WP Migration backups for the latest copy of:
- WordPress wp-content folder (themes, plugins, uploads)
- Full MySQL database export (.sql)
- Domain registrar details if managed under your account

Preferred delivery email: ${ownerEmail}

Current Live Status:
${diagnosticFacts}

Even an older archive from the past few months would save significant rebuild time.

Thank you!`;
  }, [target, domain, ownerEmail, diagnosticFacts]);

  const handleCopyTicket = async () => {
    await navigator.clipboard.writeText(draftMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <div className="lg:col-span-7 border border-slate-200 bg-white rounded-lg p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Support &amp; Backup Escalation Generator
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Pre-filled with live diagnostic metrics for {domain}.
            </p>
          </div>
          <button
            type="button"
            onClick={handleCopyTicket}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" aria-hidden="true" />
                Copied Draft
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" aria-hidden="true" />
                Copy Email Draft
              </>
            )}
          </button>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="ticket-target"
              className="block text-xs font-medium text-slate-600 mb-1.5"
            >
              Recipient Type
            </label>
            <select
              id="ticket-target"
              value={target}
              onChange={(e) => setTarget(e.target.value as TicketTarget)}
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white text-slate-900 focus:outline-none focus:border-sky-600"
            >
              <option value="hosting">Web Hosting Support (Backup Request)</option>
              <option value="registrar">Domain Registrar / Nominet (Domain Access)</option>
              <option value="agency">Previous Developer / Agency</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="owner-email"
              className="block text-xs font-medium text-slate-600 mb-1.5"
            >
              Account / Contact Email
            </label>
            <input
              id="owner-email"
              type="email"
              value={ownerEmail}
              onChange={(e) => setOwnerEmail(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-sky-600"
            />
          </div>
        </div>

        <textarea
          readOnly
          value={draftMessage}
          rows={15}
          aria-label="Generated support email draft"
          className="mt-4 w-full p-4 text-xs font-mono text-slate-800 bg-slate-50 border border-slate-200 rounded-lg leading-relaxed focus:outline-none"
        />
      </div>

      <aside className="lg:col-span-5 border border-slate-200 bg-white rounded-lg p-6 space-y-5">
        <div>
          <h3 className="text-base font-semibold text-slate-900">
            Where Hidden Backups Usually Live
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Before rebuilding from scratch, search these locations for forgotten archives:
          </p>
        </div>

        <div className="divide-y divide-slate-100 text-sm">
          <div className="py-3">
            <p className="font-semibold text-slate-900">
              1. Gmail / Email Invoice Search
            </p>
            <p className="text-slate-600 mt-1">
              Search <span className="font-mono text-xs text-slate-800">{domain}</span> alongside{' '}
              <span className="font-mono text-xs text-slate-800">cPanel</span>,{' '}
              <span className="font-mono text-xs text-slate-800">UpdraftPlus</span>,{' '}
              <span className="font-mono text-xs text-slate-800">Nominet</span>,{' '}
              <span className="font-mono text-xs text-slate-800">Hostinger</span>, or{' '}
              <span className="font-mono text-xs text-slate-800">123-Reg</span> to locate old login portals.
            </p>
          </div>

          <div className="py-3">
            <p className="font-semibold text-slate-900">
              2. Cloud Drive Backup Extensions
            </p>
            <p className="text-slate-600 mt-1">
              Search Google Drive, Dropbox, or your Downloads folder for:{' '}
              <span className="font-mono text-xs text-slate-800">.wpress</span>,{' '}
              <span className="font-mono text-xs text-slate-800">backup_*.zip</span>,{' '}
              <span className="font-mono text-xs text-slate-800">db.sql.gz</span>, or{' '}
              <span className="font-mono text-xs text-slate-800">installer.php</span>.
            </p>
          </div>

          <div className="py-3">
            <p className="font-semibold text-slate-900">
              3. Google Search Console &amp; Bing Webmaster
            </p>
            <p className="text-slate-600 mt-1">
              Check indexed URL lists and top-performing pages so your rebuilt WordPress site keeps the exact slugs that already rank.
            </p>
          </div>

          <div className="py-3">
            <p className="font-semibold text-slate-900">
              4. .co.uk Registry Protection (Nominet)
            </p>
            <p className="text-slate-600 mt-1">
              If your registrar refuses access or vanished, Nominet allows direct registrant verification via{' '}
              <span className="font-mono text-xs text-slate-800">secure.nominet.org.uk</span> to update the IPS Tag and move your domain.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
