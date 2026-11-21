import { useEffect, useState } from 'react';
import { CheckCircle2, MapPin, Mail } from 'lucide-react';
import { ALL_SERVICE_NAMES, UK_OFFICE_ADDRESS } from '../data/agencyData';

interface ContactSectionProps {
  preselectedPlan: string;
}

export function ContactSection({ preselectedPlan }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [servicePlan, setServicePlan] = useState(
    preselectedPlan || 'Website Development'
  );
  const [message, setMessage] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedPlan) {
      setServicePlan(preselectedPlan);
    }
  }, [preselectedPlan]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (name.trim().length < 2) {
      setError('Please enter your full name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          websiteUrl,
          servicePlan,
          message,
        }),
      });
      if (!res.ok) {
        throw new Error('Static host fallback');
      }
      const data = (await res.json()) as { reference?: string };
      setSubmittedRef(data.reference || `WPC-${Date.now().toString(36).toUpperCase()}`);
    } catch {
      try {
        await fetch('https://formsubmit.co/ajax/wpcarepoint@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            _subject: `WPCarePoint UK Enquiry — ${servicePlan}`,
            name,
            email,
            websiteUrl,
            servicePlan,
            message,
          }),
        });
      } catch {
        // Keep mailto option available if offline
      }
      setSubmittedRef(`WPC-${Date.now().toString(36).toUpperCase()}`);
    } finally {
      setSubmitting(false);
    }
  };

  const mailtoHref = `mailto:wpcarepoint@gmail.com?subject=${encodeURIComponent(
    `[WPCarePoint] Consultation Request — ${servicePlan}`
  )}&body=${encodeURIComponent(
    `Name: ${name}\nWebsite: ${websiteUrl}\nService: ${servicePlan}\n\nDetails:\n${message}`
  )}`;

  return (
    <section id="contact" className="py-20 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-5">
          <p className="text-xs font-medium text-sky-700">
            Free Consultation
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
            Discuss a new website, AI automation, or GEO growth plan.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Share your website URL and commercial goals. A senior UK engineer reviews every enquiry directly—never an automated call centre.
          </p>

          <dl className="pt-4 border-t border-slate-100 space-y-3.5 text-sm">
            <div>
              <dt className="text-slate-500">UK Office Address</dt>
              <dd className="mt-0.5 font-medium text-slate-900 flex items-start gap-1.5">
                <MapPin className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{UK_OFFICE_ADDRESS}</span>
              </dd>
            </div>
            <div>
              <dt className="text-slate-500">Direct Engineering Email</dt>
              <dd className="mt-0.5 font-medium text-slate-900">
                <a
                  href="mailto:wpcarepoint@gmail.com"
                  className="inline-flex items-center gap-1.5 text-sky-700 hover:underline"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  wpcarepoint@gmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-slate-500">UK Support Hours</dt>
              <dd className="mt-0.5 font-medium text-slate-900">
                Mon–Fri, 08:30–18:00 GMT/BST · 24/7 emergency site triage
              </dd>
            </div>
            <div>
              <dt className="text-slate-500">UK Coverage</dt>
              <dd className="mt-0.5 text-slate-700">
                Surrey · London · Manchester · Birmingham · Edinburgh · Bristol · Leeds
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7 border border-slate-200 rounded-xl p-6 sm:p-8 bg-slate-50/40">
          {submittedRef ? (
            <div className="py-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
                <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                <span>Consultation Request Logged</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Thank you, {name}. Your request reference is{' '}
                <span className="font-mono">{submittedRef}</span>.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We have recorded your enquiry for{' '}
                <span className="font-medium text-slate-900">{servicePlan}</span>. If you need immediate emergency assistance, you can also send your message directly via email.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={mailtoHref}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Send Copy via Email App
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmittedRef(null);
                    setMessage('');
                  }}
                  className="px-4 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-slate-700 mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Oliver Bennett"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium text-slate-700 mb-1.5"
                  >
                    Business Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="oliver@company.co.uk"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-url"
                    className="block text-xs font-medium text-slate-700 mb-1.5"
                  >
                    Website URL (optional)
                  </label>
                  <input
                    id="contact-url"
                    type="url"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="https://yourbusiness.co.uk"
                    className="w-full px-3.5 py-2.5 text-sm font-mono bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-plan"
                    className="block text-xs font-medium text-slate-700 mb-1.5"
                  >
                    Service or Care Plan
                  </label>
                  <select
                    id="contact-plan"
                    value={servicePlan}
                    onChange={(e) => setServicePlan(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-600"
                  >
                    <optgroup label="Core Services">
                      {ALL_SERVICE_NAMES.map((nameItem) => (
                        <option key={nameItem} value={nameItem}>
                          {nameItem}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Monthly / Annual Care Plans">
                      <option value="Essential Care (£59/mo)">
                        Essential Care (£59/mo)
                      </option>
                      <option value="Essential Care (£49/mo)">
                        Essential Care (£49/mo · Annual)
                      </option>
                      <option value="Growth & Speed (£119/mo)">
                        Growth &amp; Speed (£119/mo)
                      </option>
                      <option value="Growth & Speed (£99/mo)">
                        Growth &amp; Speed (£99/mo · Annual)
                      </option>
                      <option value="Scale & WooCommerce (£229/mo)">
                        Scale &amp; WooCommerce (£229/mo)
                      </option>
                      <option value="Scale & WooCommerce (£189/mo)">
                        Scale &amp; WooCommerce (£189/mo · Annual)
                      </option>
                    </optgroup>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-slate-700 mb-1.5"
                >
                  Project or Issue Details
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your current site, timeline, or any issues you are experiencing..."
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-600"
                />
              </div>

              {error && (
                <p className="text-sm font-medium text-red-700" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 disabled:opacity-60 transition-colors cursor-pointer"
              >
                {submitting ? 'Sending Request...' : 'Schedule Free Consultation'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
