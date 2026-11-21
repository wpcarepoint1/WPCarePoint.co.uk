import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ExternalLink,
  RefreshCw,
  Globe,
  Server,
  Archive,
  ShieldAlert,
} from 'lucide-react';
import type { DomainDiagnosticReport, LossScenarioId } from '../types/recovery';

interface DiagnosticsPanelProps {
  domain: string;
  report: DomainDiagnosticReport | null;
  loading: boolean;
  error: string | null;
  onRetry: () => void;
  onOpenPlaybook: (scenario: LossScenarioId) => void;
  onOpenArchive: () => void;
}

function formatDate(iso?: string): string {
  if (!iso) return 'Not listed';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toISOString().slice(0, 10);
}

function StatusLabel({
  tone,
  label,
}: {
  tone: 'ok' | 'warn' | 'err';
  label: string;
}) {
  if (tone === 'ok') {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700">
        <CheckCircle2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        <span className="whitespace-nowrap">{label}</span>
      </span>
    );
  }
  if (tone === 'warn') {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-700">
        <AlertTriangle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        <span className="whitespace-nowrap">{label}</span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-red-700">
      <XCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      <span className="whitespace-nowrap">{label}</span>
    </span>
  );
}

export function DiagnosticsPanel({
  domain,
  report,
  loading,
  error,
  onRetry,
  onOpenPlaybook,
  onOpenArchive,
}: DiagnosticsPanelProps) {
  if (loading) {
    return (
      <div className="space-y-6" aria-busy="true" aria-label="Running live diagnostics">
        <div className="border border-slate-200 bg-white rounded-lg p-6 animate-pulse">
          <div className="h-5 w-2/3 bg-slate-200 rounded mb-3" />
          <div className="h-4 w-full bg-slate-100 rounded mb-2" />
          <div className="h-4 w-4/5 bg-slate-100 rounded" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((idx) => (
            <div
              key={idx}
              className="border border-slate-200 bg-white rounded-lg p-6 animate-pulse"
            >
              <div className="h-4 w-1/3 bg-slate-200 rounded mb-4" />
              <div className="space-y-2.5">
                <div className="h-3.5 w-full bg-slate-100 rounded" />
                <div className="h-3.5 w-5/6 bg-slate-100 rounded" />
                <div className="h-3.5 w-4/6 bg-slate-100 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="border border-red-200 bg-white rounded-lg p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <StatusLabel tone="err" label="Diagnostic scan failed" />
            <h2 className="text-lg font-semibold text-slate-900 mt-2">
              Unable to complete live check for {domain}
            </h2>
            <p className="text-sm text-slate-600 mt-1">{error}</p>
          </div>
          <button
            type="button"
            onClick={onRetry}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <RefreshCw className="h-4 w-4" aria-hidden="true" />
            Retry Scan
          </button>
        </div>
      </div>
    );
  }

  if (!report) {
    return (
      <div className="border border-slate-200 bg-white rounded-lg p-8 text-center">
        <p className="text-base font-medium text-slate-900">
          Enter a domain name above to inspect live DNS, registration, HTTP, and archive status.
        </p>
        <p className="text-sm text-slate-600 mt-1">
          Results will identify why the site is down and surface recoverable snapshots.
        </p>
      </div>
    );
  }

  const rdapTone =
    report.rdap.status === 'found'
      ? report.rdap.expiresAt && new Date(report.rdap.expiresAt).getTime() < Date.now()
        ? 'err'
        : 'ok'
      : report.rdap.status === 'not-found'
      ? 'err'
      : 'warn';

  const dnsTone =
    report.dns.status === 'resolved'
      ? 'ok'
      : report.dns.status === 'nxdomain'
      ? 'err'
      : 'warn';

  const httpTone =
    report.http.status === 'reachable'
      ? 'ok'
      : report.http.status === 'http-error'
      ? 'warn'
      : 'err';

  const waybackTone =
    report.wayback.status === 'archived'
      ? 'ok'
      : report.wayback.status === 'none'
      ? 'warn'
      : 'err';

  return (
    <div className="space-y-6">
      <section className="border border-slate-200 bg-white rounded-lg p-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span>Live Assessment</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">{report.domain}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">
                Checked {new Date(report.checkedAt).toLocaleTimeString()}
              </span>
            </div>
            <h2 className="text-xl font-semibold text-slate-900 tracking-tight text-balance">
              {report.summaryHeadline}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {report.summaryDetail}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onOpenPlaybook(report.recommendedScenario)}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Start Recovery Plan
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            {report.wayback.status === 'archived' && (
              <button
                type="button"
                onClick={onOpenArchive}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Inspect {report.wayback.pages.length} Archived Pages
              </button>
            )}
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Domain Registration (RDAP) */}
        <section className="border border-slate-200 bg-white rounded-lg p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <Globe className="h-4 w-4 text-slate-500 shrink-0" aria-hidden="true" />
                <h3 className="text-base font-semibold text-slate-900">
                  Domain Registration (RDAP)
                </h3>
              </div>
              <StatusLabel
                tone={rdapTone}
                label={
                  report.rdap.status === 'found'
                    ? rdapTone === 'err'
                      ? 'Expired'
                      : 'Registered'
                    : report.rdap.status === 'not-found'
                    ? 'Not Registered'
                    : 'Lookup Limited'
                }
              />
            </div>

            {report.rdap.error ? (
              <p className="text-sm text-slate-600 mt-4">{report.rdap.error}</p>
            ) : (
              <dl className="mt-4 divide-y divide-slate-100 text-sm">
                <div className="py-2.5 flex items-center justify-between gap-4">
                  <dt className="text-slate-500">Registrar</dt>
                  <dd className="font-medium text-slate-900 text-right truncate">
                    {report.rdap.registrar || 'Not disclosed by registry'}
                  </dd>
                </div>
                <div className="py-2.5 flex items-center justify-between gap-4">
                  <dt className="text-slate-500">Registered On</dt>
                  <dd className="font-mono tabular-nums text-slate-900">
                    {formatDate(report.rdap.registeredAt)}
                  </dd>
                </div>
                <div className="py-2.5 flex items-center justify-between gap-4">
                  <dt className="text-slate-500">Expiry Date</dt>
                  <dd className="font-mono tabular-nums font-medium text-slate-900">
                    {formatDate(report.rdap.expiresAt)}
                  </dd>
                </div>
                <div className="py-2.5 flex items-start justify-between gap-4">
                  <dt className="text-slate-500 shrink-0">Registry Status</dt>
                  <dd className="font-mono text-xs text-slate-700 text-right">
                    {report.rdap.statuses.length > 0
                      ? report.rdap.statuses.join(', ')
                      : 'Active / standard'}
                  </dd>
                </div>
              </dl>
            )}
          </div>

          {report.rdap.rdapUrl && (
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Registry source verified</span>
              <a
                href={report.rdap.rdapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-700 hover:underline font-medium"
              >
                Raw RDAP Record
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </a>
            </div>
          )}
        </section>

        {/* DNS Records */}
        <section className="border border-slate-200 bg-white rounded-lg p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <Server className="h-4 w-4 text-slate-500 shrink-0" aria-hidden="true" />
                <h3 className="text-base font-semibold text-slate-900">
                  Live DNS Resolution
                </h3>
              </div>
              <StatusLabel
                tone={dnsTone}
                label={
                  report.dns.status === 'resolved'
                    ? 'DNS Active'
                    : report.dns.status === 'nxdomain'
                    ? 'NXDOMAIN / Unrouted'
                    : 'Resolution Error'
                }
              />
            </div>

            {report.dns.status !== 'resolved' ? (
              <div className="mt-4 space-y-2">
                <p className="text-sm text-slate-700 font-medium">
                  {report.dns.error || 'Domain has no active DNS records.'}
                </p>
                <p className="text-sm text-slate-600">
                  When DNS returns NXDOMAIN or empty A/NS records, visitors cannot reach your host even if files still exist on the server.
                </p>
              </div>
            ) : (
              <dl className="mt-4 divide-y divide-slate-100 text-sm">
                <div className="py-2.5 flex items-start justify-between gap-4">
                  <dt className="text-slate-500 shrink-0">A Records (IPv4)</dt>
                  <dd className="font-mono tabular-nums text-xs text-slate-900 text-right">
                    {report.dns.aRecords.length > 0
                      ? report.dns.aRecords.join(', ')
                      : 'None'}
                  </dd>
                </div>
                <div className="py-2.5 flex items-start justify-between gap-4">
                  <dt className="text-slate-500 shrink-0">Nameservers (NS)</dt>
                  <dd className="font-mono text-xs text-slate-900 text-right">
                    {report.dns.nsRecords.length > 0
                      ? report.dns.nsRecords.join(', ')
                      : 'None'}
                  </dd>
                </div>
                <div className="py-2.5 flex items-start justify-between gap-4">
                  <dt className="text-slate-500 shrink-0">Mail Exchangers (MX)</dt>
                  <dd className="font-mono text-xs text-slate-700 text-right">
                    {report.dns.mxRecords.length > 0
                      ? report.dns.mxRecords
                          .slice(0, 2)
                          .map((m) => `${m.priority} ${m.exchange}`)
                          .join(', ')
                      : 'No MX records'}
                  </dd>
                </div>
              </dl>
            )}
          </div>

          <div className="pt-4 mt-4 border-t border-slate-100 text-xs text-slate-500">
            Queried via 1.1.1.1 &amp; 8.8.8.8 public resolvers
          </div>
        </section>

        {/* HTTP Reachability */}
        <section className="border border-slate-200 bg-white rounded-lg p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <ShieldAlert className="h-4 w-4 text-slate-500 shrink-0" aria-hidden="true" />
                <h3 className="text-base font-semibold text-slate-900">
                  Web Server &amp; WordPress Probe
                </h3>
              </div>
              <StatusLabel
                tone={httpTone}
                label={
                  report.http.status === 'reachable'
                    ? `HTTP ${report.http.httpCode}`
                    : report.http.status === 'http-error'
                    ? `HTTP ${report.http.httpCode}`
                    : 'Unreachable'
                }
              />
            </div>

            <dl className="mt-4 divide-y divide-slate-100 text-sm">
              <div className="py-2.5 flex items-center justify-between gap-4">
                <dt className="text-slate-500">Response</dt>
                <dd className="font-mono tabular-nums text-slate-900">
                  {report.http.httpCode
                    ? `${report.http.httpCode} (${report.http.responseTimeMs ?? 0} ms)`
                    : report.http.error || 'No connection'}
                </dd>
              </div>
              <div className="py-2.5 flex items-center justify-between gap-4">
                <dt className="text-slate-500">Server Header</dt>
                <dd className="font-mono text-xs text-slate-900">
                  {report.http.serverHeader || 'Unavailable'}
                </dd>
              </div>
              <div className="py-2.5 flex items-center justify-between gap-4">
                <dt className="text-slate-500">WordPress Footprint</dt>
                <dd className="text-slate-900 font-medium">
                  {report.http.status === 'unreachable'
                    ? 'Cannot inspect (offline)'
                    : report.http.isWordPressHint
                    ? 'Detected (wp-content / generator)'
                    : 'Not detected on live response'}
                </dd>
              </div>
              {report.http.title && (
                <div className="py-2.5 flex items-start justify-between gap-4">
                  <dt className="text-slate-500 shrink-0">Live Page Title</dt>
                  <dd className="text-slate-900 text-right truncate max-w-[260px]">
                    {report.http.title}
                  </dd>
                </div>
              )}
            </dl>
          </div>

          <div className="pt-4 mt-4 border-t border-slate-100 text-xs text-slate-500">
            {report.http.finalUrl
              ? `Final destination: ${report.http.finalUrl}`
              : `Attempted https://${report.domain}`}
          </div>
        </section>

        {/* Wayback Machine Archive */}
        <section className="border border-slate-200 bg-white rounded-lg p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <Archive className="h-4 w-4 text-slate-500 shrink-0" aria-hidden="true" />
                <h3 className="text-base font-semibold text-slate-900">
                  Wayback Machine Recovery Cache
                </h3>
              </div>
              <StatusLabel
                tone={waybackTone}
                label={
                  report.wayback.status === 'archived'
                    ? 'Snapshots Available'
                    : report.wayback.status === 'none'
                    ? 'No Public Snapshots'
                    : 'Archive Unavailable'
                }
              />
            </div>

            {report.wayback.status === 'archived' ? (
              <dl className="mt-4 divide-y divide-slate-100 text-sm">
                <div className="py-2.5 flex items-center justify-between gap-4">
                  <dt className="text-slate-500">Latest Snapshot Date</dt>
                  <dd className="font-mono tabular-nums font-medium text-slate-900">
                    {report.wayback.closestFormattedDate || 'Available'}
                  </dd>
                </div>
                <div className="py-2.5 flex items-center justify-between gap-4">
                  <dt className="text-slate-500">Indexed HTML Pages</dt>
                  <dd className="font-mono tabular-nums text-slate-900">
                    {report.wayback.pages.length} unique URLs sampled
                  </dd>
                </div>
                <div className="py-2.5 text-slate-600 text-sm">
                  You can inspect archived page copy, navigation menus, and image URLs directly or export a 301 redirect map before rebuilding.
                </div>
              </dl>
            ) : (
              <p className="text-sm text-slate-600 mt-4">
                {report.wayback.error ||
                  'No public Wayback Machine snapshots were returned. Rely on hosting backups, local exports, or Google Search Console cached URLs.'}
              </p>
            )}
          </div>

          <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-4 text-xs">
            <a
              href={`https://web.archive.org/web/*/${report.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sky-700 hover:underline font-medium"
            >
              Browse Archive Calendar
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
            {report.wayback.closestSnapshotUrl && (
              <a
                href={report.wayback.closestSnapshotUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-slate-700 hover:text-slate-900 font-medium"
              >
                Open Latest Snapshot
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </a>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
