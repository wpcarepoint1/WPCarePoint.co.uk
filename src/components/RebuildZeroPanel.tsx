import { useEffect, useMemo, useState } from 'react';
import {
  Check,
  Copy,
  Download,
  ExternalLink,
  FileCode2,
  FileText,
  Loader2,
  RotateCcw,
} from 'lucide-react';
import {
  generateWordPressWxrXml,
  getDefaultWpcarepointPages,
  type RebuildPageDraft,
} from '../utils/wxrExport';
import type {
  ExtractedWaybackContent,
  WaybackDiagnostics,
} from '../types/recovery';

interface RebuildZeroPanelProps {
  domain: string;
  wayback?: WaybackDiagnostics;
  lang: 'bn' | 'en';
}

interface RebuildTask {
  id: string;
  phaseBn: string;
  phaseEn: string;
  titleBn: string;
  titleEn: string;
  detailBn: string;
  detailEn: string;
}

const REBUILD_TASKS: RebuildTask[] = [
  {
    id: 'rb-1',
    phaseBn: '০১. ফাউন্ডেশন',
    phaseEn: '01. Foundation',
    titleBn: 'ডিফল্ট WordPress সেটআপ পরিষ্কার করুন',
    titleEn: 'Clean up default WordPress install',
    detailBn:
      'wp-admin-এ ঢুকে "Hello World!" পোস্ট, "Sample Page" এবং অব্যবহৃত প্লাগইন/থিম ডিলিট করুন। এরপর Settings → Permalinks থেকে "Post name" (/%postname%/) সিলেক্ট করে সেভ করুন।',
    detailEn:
      'Log into wp-admin, delete the "Hello World!" post, "Sample Page", and unused default themes/plugins. Set Settings → Permalinks to "Post name" (/%postname%/).',
  },
  {
    id: 'rb-2',
    phaseBn: '০১. ফাউন্ডেশন',
    phaseEn: '01. Foundation',
    titleBn: 'হালকা ও দ্রুতগতির থিম ইনস্টল করুন',
    titleEn: 'Install a fast, lightweight block theme',
    detailBn:
      'নতুন করে শুরু করার সময় GeneratePress, Kadence, অথবা Blocksy থিম ব্যবহার করুন। এগুলো অনেক দ্রুত লোড হয় এবং Gutenberg ব্লকের সাথে সহজে কাস্টমাইজ করা যায়।',
    detailEn:
      'Use GeneratePress, Kadence, or Blocksy so pages load quickly and stay easy to customize with Gutenberg blocks.',
  },
  {
    id: 'rb-3',
    phaseBn: '০২. কোর প্লাগইন',
    phaseEn: '02. Core Stack',
    titleBn: 'নিচের WordPress XML ফাইলটি তৈরি করে ইম্পোর্ট করুন',
    titleEn: 'Export & import the WordPress WXR XML package below',
    detailBn:
      'ডানপাশের জেনারেটর থেকে .xml ফাইল ডাউনলোড করে wp-admin → Tools → Import → WordPress-এ আপলোড করুন। এতে সব সার্ভিস পেজ ও হোমপেজ একসাথে তৈরি হয়ে যাবে।',
    detailEn:
      'Download the .xml file below and upload it via wp-admin → Tools → Import → WordPress to create all core pages automatically.',
  },
  {
    id: 'rb-4',
    phaseBn: '০২. কোর প্লাগইন',
    phaseEn: '02. Core Stack',
    titleBn: 'LiteSpeed Cache ও UpdraftPlus সেট করুন',
    titleEn: 'Configure LiteSpeed Cache & UpdraftPlus Google Drive backup',
    detailBn:
      'Namecheap সার্ভার LiteSpeed চালায়, তাই LiteSpeed Cache ইনস্টল করুন। পাশাপাশি UpdraftPlus দিয়ে Google Drive-এ অটোমেটিক দৈনিক ব্যাকআপ চালু করুন।',
    detailEn:
      'Install LiteSpeed Cache for server-level speed, and connect UpdraftPlus to Google Drive for automated daily backups.',
  },
  {
    id: 'rb-5',
    phaseBn: '০৩. SEO ও লঞ্চ',
    phaseEn: '03. Content & SEO',
    titleBn: 'হোমপেজ সেট করুন ও Sitemap সাবমিট করুন',
    titleEn: 'Set Static Homepage & submit XML sitemap',
    detailBn:
      'Settings → Reading-এ গিয়ে "A static page" থেকে Home পেজ সেট করুন। Rank Math বা Yoast SEO ইনস্টল করে Google Search Console-এ /sitemap_index.xml সাবমিট করুন।',
    detailEn:
      'Set Home under Settings → Reading → A static page, then submit /sitemap_index.xml in Google Search Console.',
  },
];

export function RebuildZeroPanel({
  domain,
  wayback,
  lang,
}: RebuildZeroPanelProps) {
  const isBn = lang === 'bn';
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  // WXR XML Site Builder state
  const [brandName, setBrandName] = useState('WPCarePoint');
  const [tagline, setTagline] = useState(
    'Expert WordPress Web Design, Maintenance & Security Agency'
  );
  const [contactEmail, setContactEmail] = useState('wpcarepoint@gmail.com');
  const [pages, setPages] = useState<RebuildPageDraft[]>(() =>
    getDefaultWpcarepointPages('WPCarePoint', 'wpcarepoint@gmail.com')
  );
  const [editingPageId, setEditingPageId] = useState<string>('home');

  // Wayback content extractor state
  const [selectedUrl, setSelectedUrl] = useState<string>('');
  const [extracting, setExtracting] = useState(false);
  const [extractError, setExtractError] = useState<string | null>(null);
  const [extracted, setExtracted] = useState<ExtractedWaybackContent | null>(
    null
  );
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(`siterecover:rebuild:${domain}`);
      setCheckedIds(raw ? (JSON.parse(raw) as string[]) : []);
    } catch {
      setCheckedIds([]);
    }
  }, [domain]);

  useEffect(() => {
    if (wayback?.pages?.length && !selectedUrl) {
      setSelectedUrl(wayback.pages[0].archiveUrl);
    } else if (wayback?.closestSnapshotUrl && !selectedUrl) {
      setSelectedUrl(wayback.closestSnapshotUrl);
    }
  }, [wayback, selectedUrl]);

  const activeEditingPage = useMemo(
    () => pages.find((p) => p.id === editingPageId) || pages[0],
    [pages, editingPageId]
  );

  const toggleTask = (id: string) => {
    const next = checkedIds.includes(id)
      ? checkedIds.filter((item) => item !== id)
      : [...checkedIds, id];
    setCheckedIds(next);
    try {
      localStorage.setItem(
        `siterecover:rebuild:${domain}`,
        JSON.stringify(next)
      );
    } catch {
      // Ignore storage errors
    }
  };

  const resetTasks = () => {
    setCheckedIds([]);
    try {
      localStorage.removeItem(`siterecover:rebuild:${domain}`);
    } catch {
      // Ignore storage errors
    }
  };

  const updatePage = (id: string, patch: Partial<RebuildPageDraft>) => {
    setPages((prev) => prev.map((p) => (p.id === id ? { ...p, ...patch } : p)));
  };

  const handleDownloadWxr = () => {
    const xml = generateWordPressWxrXml({
      domain,
      brandName: brandName.trim() || 'WPCarePoint',
      tagline: tagline.trim() || 'WordPress Agency',
      authorEmail: contactEmail.trim() || 'wpcarepoint@gmail.com',
      pages,
    });
    const blob = new Blob([xml], { type: 'application/xml;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${domain}-wordpress-import.xml`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleExtract = async (targetArchiveUrl: string) => {
    if (!targetArchiveUrl) return;
    setExtracting(true);
    setExtractError(null);
    setExtracted(null);

    try {
      const res = await fetch(
        `/api/wayback-extract?url=${encodeURIComponent(targetArchiveUrl)}`
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || `Extractor returned HTTP ${res.status}`);
      }
      setExtracted(data as ExtractedWaybackContent);
    } catch (err) {
      setExtractError(
        err instanceof Error
          ? err.message
          : 'Failed to extract archived page content.'
      );
    } finally {
      setExtracting(false);
    }
  };

  const handleCopyMarkdown = async () => {
    if (!extracted) return;
    const md = [
      `# ${extracted.title}`,
      extracted.metaDescription ? `> Meta: ${extracted.metaDescription}` : '',
      '',
      '## Headings',
      ...extracted.headings.map((h) => `- ${h}`),
      '',
      '## Body Copy',
      ...extracted.paragraphs,
    ]
      .filter(Boolean)
      .join('\n\n');

    await navigator.clipboard.writeText(md);
    setCopiedMarkdown(true);
    setTimeout(() => setCopiedMarkdown(false), 1800);
  };

  const enabledPageCount = pages.filter((p) => p.enabled).length;

  return (
    <div className="space-y-6">
      {/* Top Blueprint Header */}
      <section className="border border-slate-200 bg-white rounded-lg p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>
                {isBn ? 'শূন্য থেকে সাইট তৈরি' : 'Zero-Backup Launch Plan'}
              </span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">
                {checkedIds.length} / {REBUILD_TASKS.length}{' '}
                {isBn ? 'ধাপ সম্পন্ন' : 'completed'}
              </span>
            </div>
            <h2 className="text-lg font-semibold text-slate-900 mt-1">
              {isBn
                ? `${domain} নতুন করে তৈরি ও WordPress-এ ১-ক্লিক ইম্পোর্ট`
                : `Rebuild ${domain} From Scratch & One-Click WordPress Import`}
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {isBn
                ? 'আপনার পুরোনো সাইটের উদ্ধারকৃত তথ্য অনুযায়ী সব মূল পেজ (Home, Services, Maintenance, Security, Portfolio, Contact) তৈরি করা আছে। প্রয়োজনে এডিট করে .xml ফাইল ডাউনলোড করুন এবং সরাসরি wp-admin-এ আপলোড করুন।'
                : 'Pre-configured with recovered WPCarePoint pages and Gutenberg blocks. Customize any page below and download the .xml file to import directly into wp-admin.'}
            </p>
          </div>

          {checkedIds.length > 0 && (
            <button
              type="button"
              onClick={resetTasks}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              {isBn ? 'চেকলিস্ট রিসেট' : 'Reset Plan'}
            </button>
          )}
        </div>
      </section>

      {/* WordPress WXR XML Package Builder */}
      <section className="border border-slate-200 bg-white rounded-lg p-6 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-5 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <FileCode2
                className="h-4 w-4 text-sky-600 shrink-0"
                aria-hidden="true"
              />
              <h3 className="text-base font-semibold text-slate-900">
                {isBn
                  ? 'WordPress ১-ক্লিক ইম্পোর্ট ফাইল জেনারেটর (WXR XML)'
                  : 'WordPress One-Click Site Import Generator (WXR XML)'}
              </h3>
            </div>
            <p className="text-sm text-slate-600 mt-1">
              {isBn
                ? 'wp-admin → Tools → Import → WordPress-এ গিয়ে এই .xml ফাইলটি আপলোড করলেই আপনার সব পেজ ও URL স্লাগ অটোমেটিক তৈরি হয়ে যাবে।'
                : 'Upload the generated .xml file via wp-admin → Tools → Import → WordPress to create all selected pages and slugs automatically.'}
            </p>
          </div>

          <button
            type="button"
            disabled={enabledPageCount === 0}
            onClick={handleDownloadWxr}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-sky-600 rounded-lg hover:bg-sky-700 disabled:opacity-50 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            {isBn
              ? `WordPress XML ডাউনলোড (${enabledPageCount} পেজ)`
              : `Download WordPress XML (${enabledPageCount} items)`}
          </button>
        </div>

        {/* Site Identity Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label
              htmlFor="wp-brand"
              className="block text-xs font-medium text-slate-600 mb-1.5"
            >
              {isBn ? 'ব্র্যান্ড / এজেন্সির নাম' : 'Brand / Site Name'}
            </label>
            <input
              id="wp-brand"
              type="text"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-sky-600"
            />
          </div>
          <div>
            <label
              htmlFor="wp-tagline"
              className="block text-xs font-medium text-slate-600 mb-1.5"
            >
              {isBn ? 'সাইটের ট্যাগলাইন' : 'Site Tagline'}
            </label>
            <input
              id="wp-tagline"
              type="text"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-sky-600"
            />
          </div>
          <div>
            <label
              htmlFor="wp-email"
              className="block text-xs font-medium text-slate-600 mb-1.5"
            >
              {isBn ? 'যোগাযোগের ইমেইল' : 'Contact Email'}
            </label>
            <input
              id="wp-email"
              type="email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-sky-600"
            />
          </div>
        </div>

        {/* Page Selector + Inline Editor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 border border-slate-200 rounded-lg divide-y divide-slate-100">
            <div className="px-4 py-3 bg-slate-50/70 text-xs font-semibold text-slate-600">
              {isBn
                ? 'তৈরি হবে এমন পেজ ও পোস্টসমূহ'
                : 'Pages & Posts Included in Export'}
            </div>
            {pages.map((p) => {
              const isSelected = p.id === activeEditingPage.id;
              return (
                <div
                  key={p.id}
                  className={`px-4 py-3 flex items-center justify-between gap-3 ${
                    isSelected ? 'bg-sky-50/60' : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <input
                      type="checkbox"
                      checked={p.enabled}
                      onChange={(e) =>
                        updatePage(p.id, { enabled: e.target.checked })
                      }
                      aria-label={`Include ${p.title}`}
                      className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500 cursor-pointer"
                    />
                    <button
                      type="button"
                      onClick={() => setEditingPageId(p.id)}
                      className="text-left min-w-0 cursor-pointer"
                    >
                      <p className="text-sm font-medium text-slate-900 truncate">
                        {p.title}
                      </p>
                      <p className="text-xs font-mono text-slate-500 truncate">
                        /{p.slug}/ · {p.postType}
                      </p>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-7 border border-slate-200 rounded-lg p-5 space-y-4">
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
              <span className="text-sm font-semibold text-slate-900">
                {isBn ? 'পেজ এডিটর' : 'Customize Selected Page'}:{' '}
                <span className="font-mono text-sky-700">
                  /{activeEditingPage.slug}/
                </span>
              </span>
              <span className="text-xs text-slate-500 font-mono">
                {activeEditingPage.postType.toUpperCase()}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  {isBn ? 'পেজ টাইটেল' : 'Page Title'}
                </label>
                <input
                  type="text"
                  value={activeEditingPage.title}
                  onChange={(e) =>
                    updatePage(activeEditingPage.id, { title: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-sky-600"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  {isBn ? 'URL স্লাগ (Slug)' : 'URL Slug'}
                </label>
                <input
                  type="text"
                  value={activeEditingPage.slug}
                  onChange={(e) =>
                    updatePage(activeEditingPage.id, {
                      slug: e.target.value
                        .toLowerCase()
                        .replace(/[^a-z0-9-]/g, '-'),
                    })
                  }
                  className="w-full px-3 py-2 text-sm font-mono border border-slate-200 rounded-lg focus:outline-none focus:border-sky-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">
                {isBn ? 'প্রধান হেডলাইন (H1)' : 'Primary Headline (H1)'}
              </label>
              <input
                type="text"
                value={activeEditingPage.headline}
                onChange={(e) =>
                  updatePage(activeEditingPage.id, { headline: e.target.value })
                }
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-sky-600"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">
                {isBn ? 'মূল বিবরণ (Intro Copy)' : 'Introductory Paragraph'}
              </label>
              <textarea
                rows={3}
                value={activeEditingPage.intro}
                onChange={(e) =>
                  updatePage(activeEditingPage.id, { intro: e.target.value })
                }
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-sky-600"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">
                {isBn
                  ? 'মূল পয়েন্টসমূহ (প্রতি লাইনে একটি)'
                  : 'Bullet Highlights (one per line)'}
              </label>
              <textarea
                rows={4}
                value={activeEditingPage.highlights.join('\n')}
                onChange={(e) =>
                  updatePage(activeEditingPage.id, {
                    highlights: e.target.value.split('\n'),
                  })
                }
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-sky-600"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Checklist */}
        <section className="lg:col-span-5 border border-slate-200 bg-white rounded-lg divide-y divide-slate-100">
          <div className="p-5">
            <h3 className="text-base font-semibold text-slate-900">
              {isBn
                ? 'WordPress রিবিল্ড চেকলিস্ট'
                : 'WordPress Rebuild Checklist'}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              {isBn
                ? 'LiteSpeed + WordPress হোস্টিংয়ের জন্য সাজানো।'
                : 'Tailored for LiteSpeed + WordPress hosting.'}
            </p>
          </div>

          {REBUILD_TASKS.map((task) => {
            const done = checkedIds.includes(task.id);
            return (
              <div key={task.id} className="p-4 flex items-start gap-3">
                <button
                  type="button"
                  onClick={() => toggleTask(task.id)}
                  aria-label={`Toggle ${isBn ? task.titleBn : task.titleEn}`}
                  className={`mt-0.5 h-5 w-5 rounded border flex items-center justify-center shrink-0 transition-colors cursor-pointer ${
                    done
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : 'bg-white border-slate-300 hover:border-slate-400'
                  }`}
                >
                  {done && <Check className="h-3.5 w-3.5" aria-hidden="true" />}
                </button>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-sky-700">
                    {isBn ? task.phaseBn : task.phaseEn}
                  </p>
                  <h4
                    className={`text-sm font-semibold mt-0.5 ${
                      done ? 'line-through text-slate-400' : 'text-slate-900'
                    }`}
                  >
                    {isBn ? task.titleBn : task.titleEn}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {isBn ? task.detailBn : task.detailEn}
                  </p>
                </div>
              </div>
            );
          })}
        </section>

        {/* Right: Live Wayback Content Extractor */}
        <section className="lg:col-span-7 border border-slate-200 bg-white rounded-lg p-6 space-y-5">
          <div>
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-slate-500" aria-hidden="true" />
              <h3 className="text-base font-semibold text-slate-900">
                {isBn
                  ? 'Wayback থেকে পুরোনো লেখা উদ্ধার করুন'
                  : 'Wayback Content & SEO Copy Extractor'}
              </h3>
            </div>
            <p className="text-sm text-slate-600 mt-1">
              {isBn
                ? `${domain}-এর সংরক্ষিত স্ন্যাপশট বা যেকোনো web.archive.org লিংক দিয়ে পুরোনো টাইটেল, হেডিং ও লেখা বের করুন।`
                : `Select any archived page from ${domain} to pull its original title, meta description, headings, and body copy.`}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            {wayback?.pages?.length ? (
              <select
                value={selectedUrl}
                onChange={(e) => setSelectedUrl(e.target.value)}
                aria-label="Select archived page to extract"
                className="flex-1 min-w-0 px-3 py-2 text-xs font-mono border border-slate-200 rounded-lg bg-white text-slate-900 focus:outline-none focus:border-sky-600"
              >
                {wayback.pages.map((page) => (
                  <option key={page.archiveUrl} value={page.archiveUrl}>
                    [{page.formattedDate}] {page.url}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="url"
                value={selectedUrl}
                onChange={(e) => setSelectedUrl(e.target.value)}
                placeholder="https://web.archive.org/web/20260422141859/https://wpcarepoint.co.uk/"
                className="flex-1 min-w-0 px-3 py-2 text-xs font-mono border border-slate-200 rounded-lg focus:outline-none focus:border-sky-600"
              />
            )}

            <button
              type="button"
              disabled={extracting || !selectedUrl}
              onClick={() => handleExtract(selectedUrl)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 disabled:opacity-60 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {extracting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  {isBn ? 'বের হচ্ছে...' : 'Extracting'}
                </>
              ) : isBn ? (
                'লেখা বের করুন'
              ) : (
                'Extract Page Copy'
              )}
            </button>
          </div>

          {extractError && (
            <div className="border border-red-200 bg-red-50/50 rounded-lg p-4 text-sm text-red-700">
              {extractError}
            </div>
          )}

          {!extracted && !extracting && !extractError && (
            <div className="border border-slate-200 border-dashed rounded-lg p-8 text-center text-sm text-slate-500">
              {isBn
                ? 'উপর থেকে একটি সংরক্ষিত URL বেছে নিয়ে "লেখা বের করুন" বাটনে ক্লিক করুন।'
                : 'Choose an archived URL above and click Extract Page Copy to recover text from the Wayback Machine.'}
            </div>
          )}

          {extracted && (
            <div className="border border-slate-200 rounded-lg divide-y divide-slate-100">
              <div className="p-4 flex flex-wrap items-center justify-between gap-3 bg-slate-50/60">
                <div className="min-w-0">
                  <p className="text-xs text-slate-500">
                    {isBn ? 'উদ্ধারকৃত পেজ টাইটেল' : 'Recovered Page Title'}
                  </p>
                  <p className="text-sm font-semibold text-slate-900 truncate">
                    {extracted.title}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={extracted.archiveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-md hover:bg-slate-50 whitespace-nowrap"
                  >
                    {isBn ? 'স্ন্যাপশট দেখুন' : 'View Snapshot'}
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyMarkdown}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-slate-900 rounded-md hover:bg-slate-800 whitespace-nowrap cursor-pointer"
                  >
                    {copiedMarkdown ? (
                      <>
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        {isBn ? 'কপি হয়েছে' : 'Copied Markdown'}
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                        {isBn ? 'সব লেখা কপি করুন' : 'Copy All Copy'}
                      </>
                    )}
                  </button>
                </div>
              </div>

              {extracted.metaDescription && (
                <div className="p-4">
                  <p className="text-xs font-medium text-slate-500">
                    Meta Description
                  </p>
                  <p className="text-sm text-slate-800 mt-1">
                    {extracted.metaDescription}
                  </p>
                </div>
              )}

              <div className="p-4">
                <p className="text-xs font-medium text-slate-500">
                  {isBn ? 'পাওয়া হেডিংসমূহ' : 'Headings Found'} ({extracted.headings.length})
                </p>
                {extracted.headings.length === 0 ? (
                  <p className="text-xs text-slate-500 mt-1">
                    {isBn
                      ? 'এই স্ন্যাপশটে কোনো H1–H3 হেডিং পাওয়া যায়নি।'
                      : 'No H1–H3 headings detected on this snapshot.'}
                  </p>
                ) : (
                  <ul className="mt-2 space-y-1 text-sm text-slate-800 list-disc pl-5">
                    {extracted.headings.slice(0, 14).map((h, i) => (
                      <li key={`${i}-${h.slice(0, 12)}`}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="p-4">
                <p className="text-xs font-medium text-slate-500">
                  {isBn ? 'উদ্ধারকৃত অনুচ্ছেদসমূহ' : 'Recovered Paragraphs'} (
                  {extracted.paragraphs.length})
                </p>
                {extracted.paragraphs.length === 0 ? (
                  <p className="text-xs text-slate-500 mt-1">
                    {isBn
                      ? 'দীর্ঘ টেক্সট ব্লক পাওয়া যায়নি—সরাসরি স্ন্যাপশট লিংক খুলে দেখুন।'
                      : 'No long text blocks found—open the snapshot visually to inspect layout text.'}
                  </p>
                ) : (
                  <div className="mt-2 space-y-2.5 max-h-72 overflow-y-auto pr-1 text-sm text-slate-700 leading-relaxed">
                    {extracted.paragraphs.map((p, i) => (
                      <p key={`${i}-${p.slice(0, 12)}`}>{p}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
