import { useEffect, useMemo, useState } from 'react';
import {
  Check,
  Copy,
  Download,
  ExternalLink,
  Plus,
  Search,
} from 'lucide-react';
import type { RedirectRuleItem, WaybackDiagnostics } from '../types/recovery';

interface ArchiveRedirectsPanelProps {
  domain: string;
  wayback?: WaybackDiagnostics;
  loading: boolean;
}

function toPathname(rawUrl: string): string {
  try {
    const parsed = new URL(rawUrl.startsWith('http') ? rawUrl : `https://${rawUrl}`);
    return parsed.pathname || '/';
  } catch {
    return rawUrl.startsWith('/') ? rawUrl : `/${rawUrl}`;
  }
}

export function ArchiveRedirectsPanel({
  domain,
  wayback,
  loading,
}: ArchiveRedirectsPanelProps) {
  const [rules, setRules] = useState<RedirectRuleItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newPathInput, setNewPathInput] = useState('');
  const [copiedMode, setCopiedMode] = useState<'htaccess' | 'nginx' | null>(null);

  useEffect(() => {
    if (!wayback?.pages?.length) {
      setRules([
        {
          id: 'default-home',
          oldPath: '/',
          newPath: '/',
          action: 'restore',
        },
        {
          id: 'default-blog',
          oldPath: '/blog/',
          newPath: '/blog/',
          action: 'restore',
        },
        {
          id: 'default-contact',
          oldPath: '/contact/',
          newPath: '/contact/',
          action: 'restore',
        },
      ]);
      return;
    }

    const dedup = new Map<string, RedirectRuleItem>();
    for (const page of wayback.pages) {
      const path = toPathname(page.url);
      if (!dedup.has(path)) {
        dedup.set(path, {
          id: `${page.timestamp}-${path}`,
          oldPath: path,
          newPath: path,
          action: 'restore',
          sourceTimestamp: page.formattedDate,
          archiveUrl: page.archiveUrl,
        });
      }
    }
    setRules(Array.from(dedup.values()));
  }, [wayback]);

  const filteredRules = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return rules;
    return rules.filter(
      (r) =>
        r.oldPath.toLowerCase().includes(q) || r.newPath.toLowerCase().includes(q)
    );
  }, [rules, searchTerm]);

  const redirectRules = useMemo(
    () => rules.filter((r) => r.action === 'redirect'),
    [rules]
  );

  const htaccessOutput = useMemo(() => {
    if (redirectRules.length === 0) {
      return '# Mark one or more URLs as "301 Redirect" to generate Apache .htaccess rules.';
    }
    return [
      '# 301 Redirects for recovered WordPress URLs',
      ...redirectRules.map(
        (r) => `Redirect 301 ${r.oldPath} https://${domain}${r.newPath}`
      ),
    ].join('\n');
  }, [redirectRules, domain]);

  const nginxOutput = useMemo(() => {
    if (redirectRules.length === 0) {
      return '# Mark one or more URLs as "301 Redirect" to generate Nginx rewrite rules.';
    }
    return redirectRules
      .map(
        (r) =>
          `location = ${r.oldPath} { return 301 https://${domain}${r.newPath}; }`
      )
      .join('\n');
  }, [redirectRules, domain]);

  const updateRule = (id: string, patch: Partial<RedirectRuleItem>) => {
    setRules((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)));
  };

  const handleAddCustomUrl = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = newPathInput.trim();
    if (!cleaned) return;
    const normalized = cleaned.startsWith('/') ? cleaned : `/${cleaned}`;
    setRules((prev) => [
      {
        id: `custom-${Date.now()}`,
        oldPath: normalized,
        newPath: normalized,
        action: 'restore',
      },
      ...prev,
    ]);
    setNewPathInput('');
  };

  const handleCopy = async (mode: 'htaccess' | 'nginx') => {
    await navigator.clipboard.writeText(
      mode === 'htaccess' ? htaccessOutput : nginxOutput
    );
    setCopiedMode(mode);
    setTimeout(() => setCopiedMode(null), 1800);
  };

  const handleDownloadCsv = () => {
    const header = 'Old Path,Action,New Path,Snapshot Date,Archive URL\n';
    const body = rules
      .map((r) =>
        [
          r.oldPath,
          r.action,
          r.newPath,
          r.sourceTimestamp || '',
          r.archiveUrl || '',
        ]
          .map((cell) => `"${String(cell).replace(/"/g, '""')}"`)
          .join(',')
      )
      .join('\n');
    const blob = new Blob([header + body], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${domain}-recovery-urls.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="border border-slate-200 bg-white rounded-lg p-6 animate-pulse">
        <div className="h-5 w-1/3 bg-slate-200 rounded mb-4" />
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n} className="h-9 bg-slate-100 rounded" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <section className="border border-slate-200 bg-white rounded-lg p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Archived URL Inventory &amp; 301 Redirect Planner
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Review indexed pages from the Wayback Machine for{' '}
              <span className="font-mono text-slate-800">{domain}</span>, open snapshots to copy lost text, or map changed URLs to 301 redirects so you preserve search rankings.
            </p>
          </div>
          <button
            type="button"
            onClick={handleDownloadCsv}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Export CSV ({rules.length})
          </button>
        </div>

        <div className="mt-5 flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search
              className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter archived paths (e.g. /services, /blog)..."
              className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-600"
            />
          </div>

          <form onSubmit={handleAddCustomUrl} className="flex gap-2">
            <input
              type="text"
              value={newPathInput}
              onChange={(e) => setNewPathInput(e.target.value)}
              placeholder="/missing-page-slug"
              className="w-56 px-3 py-2 text-sm font-mono border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-600"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
              Add URL
            </button>
          </form>
        </div>
      </section>

      <section className="border border-slate-200 bg-white rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/70 text-xs font-semibold text-slate-600">
                <th className="py-3 px-4">Discovered Path</th>
                <th className="py-3 px-4">Recovery Action</th>
                <th className="py-3 px-4">Destination Path</th>
                <th className="py-3 px-4 text-right">Snapshot</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredRules.length === 0 ? (
                <tr>
                  <td colSpan={4} className="py-8 px-4 text-center text-slate-500">
                    No paths match your current filter. Clear the search box or add a path above.
                  </td>
                </tr>
              ) : (
                filteredRules.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/70">
                    <td className="py-2.5 px-4 font-mono text-xs text-slate-900 max-w-[260px] truncate">
                      {item.oldPath}
                    </td>
                    <td className="py-2.5 px-4">
                      <select
                        value={item.action}
                        onChange={(e) =>
                          updateRule(item.id, {
                            action: e.target.value as RedirectRuleItem['action'],
                          })
                        }
                        aria-label={`Action for ${item.oldPath}`}
                        className="px-2.5 py-1 text-xs font-medium border border-slate-200 rounded-md bg-white text-slate-800 focus:outline-none focus:border-sky-600"
                      >
                        <option value="restore">Restore Same URL</option>
                        <option value="redirect">301 Redirect</option>
                        <option value="drop">Retire (410)</option>
                      </select>
                    </td>
                    <td className="py-2.5 px-4">
                      {item.action === 'redirect' ? (
                        <input
                          type="text"
                          value={item.newPath}
                          onChange={(e) =>
                            updateRule(item.id, { newPath: e.target.value })
                          }
                          aria-label={`Destination path for ${item.oldPath}`}
                          className="w-full max-w-[240px] px-2.5 py-1 text-xs font-mono border border-slate-200 rounded-md focus:outline-none focus:border-sky-600"
                        />
                      ) : (
                        <span className="text-xs text-slate-500">
                          {item.action === 'restore'
                            ? 'Keep original permalink'
                            : 'Return HTTP 410 Gone'}
                        </span>
                      )}
                    </td>
                    <td className="py-2.5 px-4 text-right whitespace-nowrap">
                      {item.archiveUrl ? (
                        <a
                          href={item.archiveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono tabular-nums text-sky-700 hover:underline"
                        >
                          {item.sourceTimestamp || 'View'}
                          <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        </a>
                      ) : (
                        <span className="text-xs text-slate-400">Manual</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="border border-slate-200 bg-white rounded-lg p-5">
          <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
            <h3 className="text-sm font-semibold text-slate-900">
              Apache / cPanel .htaccess Rules
            </h3>
            <button
              type="button"
              onClick={() => handleCopy('htaccess')}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-700 hover:text-sky-800 whitespace-nowrap shrink-0 cursor-pointer"
            >
              {copiedMode === 'htaccess' ? (
                <>
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                  Copy Rules
                </>
              )}
            </button>
          </div>
          <pre className="mt-3 p-3 bg-slate-900 text-slate-100 rounded-md text-xs font-mono overflow-x-auto whitespace-pre-wrap">
            {htaccessOutput}
          </pre>
        </section>

        <section className="border border-slate-200 bg-white rounded-lg p-5">
          <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
            <h3 className="text-sm font-semibold text-slate-900">
              Nginx Server Redirect Rules
            </h3>
            <button
              type="button"
              onClick={() => handleCopy('nginx')}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-700 hover:text-sky-800 whitespace-nowrap shrink-0 cursor-pointer"
            >
              {copiedMode === 'nginx' ? (
                <>
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                  Copy Rules
                </>
              )}
            </button>
          </div>
          <pre className="mt-3 p-3 bg-slate-900 text-slate-100 rounded-md text-xs font-mono overflow-x-auto whitespace-pre-wrap">
            {nginxOutput}
          </pre>
        </section>
      </div>
    </div>
  );
}
