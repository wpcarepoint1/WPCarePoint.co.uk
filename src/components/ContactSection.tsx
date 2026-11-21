import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Mail, MapPin } from 'lucide-react';
import { UK_OFFICE_ADDRESS } from '../data/agencyData';
import { SERVICE_LANDING_PAGES } from '../data/servicePagesData';
import type { SiteTranslations } from '../data/translations';
import { EASE_OUT_EXPO, Reveal } from './MotionPrimitives';

interface ContactSectionProps {
  preselectedPlan: string;
  t: SiteTranslations;
}

export function ContactSection({ preselectedPlan, t }: ContactSectionProps) {
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
      setError(t.contactSection.errorName);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError(t.contactSection.errorEmail);
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
      setSubmittedRef(
        data.reference || `WPC-${Date.now().toString(36).toUpperCase()}`
      );
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
    <section
      id="contact"
      className="py-24 border-t border-[var(--border-subtle)] bg-[var(--bg-surface-alt)] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <Reveal className="lg:col-span-5 space-y-5">
          <p className="text-xs font-medium text-[var(--text-accent)]">
            {t.contactSection.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-heading)] text-balance">
            {t.contactSection.headline}
          </h2>
          <p className="text-base text-[var(--text-body)] leading-relaxed">
            {t.contactSection.lead}
          </p>

          <dl className="pt-5 border-t border-[var(--border-subtle)] space-y-4 text-sm">
            <div>
              <dt className="text-xs font-medium text-[var(--text-muted)]">
                {t.contactSection.addressLabel}
              </dt>
              <dd className="mt-1 font-medium text-[var(--text-heading)] flex items-start gap-2">
                <MapPin
                  className="h-4 w-4 text-[var(--text-accent)] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>{UK_OFFICE_ADDRESS}</span>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-[var(--text-muted)]">
                {t.contactSection.emailLabel}
              </dt>
              <dd className="mt-1 font-medium text-[var(--text-heading)]">
                <a
                  href="mailto:wpcarepoint@gmail.com"
                  className="inline-flex items-center gap-2 text-[var(--text-accent)] hover:underline"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  wpcarepoint@gmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-[var(--text-muted)]">
                {t.contactSection.hoursLabel}
              </dt>
              <dd className="mt-1 font-medium text-[var(--text-heading)]">
                {t.contactSection.hoursValue}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-[var(--text-muted)]">
                {t.contactSection.coverageLabel}
              </dt>
              <dd className="mt-1 text-[var(--text-body)]">
                Surrey · London · Manchester · Birmingham · Edinburgh · Bristol · Leeds
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal
          delay={0.08}
          className="lg:col-span-7 border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-9 bg-[var(--bg-card)]"
        >
          <AnimatePresence mode="wait">
            {submittedRef ? (
              <motion.div
                key="submitted"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                className="py-6 space-y-4"
              >
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-success)]">
                  <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                  <span>{t.contactSection.loggedHeading}</span>
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-heading)]">
                  {t.contactSection.loggedPrefix} {name}.{' '}
                  {t.contactSection.loggedRefText}{' '}
                  <span className="font-mono text-[var(--text-accent)]">
                    {submittedRef}
                  </span>
                  .
                </h3>
                <p className="text-sm text-[var(--text-body)] leading-relaxed">
                  {t.contactSection.loggedBodyPrefix}{' '}
                  <span className="font-medium text-[var(--text-heading)]">
                    {servicePlan}
                  </span>
                  {t.contactSection.loggedBodySuffix}
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={mailtoHref}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[var(--btn-primary-text)] bg-[var(--btn-primary-bg)] rounded-xl hover:bg-[var(--btn-primary-hover-bg)] transition-colors"
                  >
                    {t.contactSection.emailAppCta}
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedRef(null);
                      setMessage('');
                    }}
                    className="px-5 py-2.5 text-sm font-medium text-[var(--text-heading)] bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-xl hover:bg-[var(--bg-hover)] transition-colors cursor-pointer"
                  >
                    {t.contactSection.anotherRequestCta}
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-[var(--text-body)] mb-1.5"
                    >
                      {t.contactSection.fullNameLabel}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Oliver Bennett"
                      className="w-full px-3.5 py-2.5 text-sm bg-[var(--bg-input)] text-[var(--text-heading)] placeholder:text-[var(--text-muted)] border border-[var(--border-subtle)] rounded-xl focus:bg-[var(--bg-card)] focus:outline-none focus:ring-2 focus:ring-sky-600/25 focus:border-[var(--text-accent)] transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-[var(--text-body)] mb-1.5"
                    >
                      {t.contactSection.businessEmailLabel}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="oliver@organisation.co.uk"
                      className="w-full px-3.5 py-2.5 text-sm bg-[var(--bg-input)] text-[var(--text-heading)] placeholder:text-[var(--text-muted)] border border-[var(--border-subtle)] rounded-xl focus:bg-[var(--bg-card)] focus:outline-none focus:ring-2 focus:ring-sky-600/25 focus:border-[var(--text-accent)] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-url"
                      className="block text-xs font-medium text-[var(--text-body)] mb-1.5"
                    >
                      {t.contactSection.websiteUrlLabel}
                    </label>
                    <input
                      id="contact-url"
                      type="url"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      placeholder="https://www.organisation.co.uk"
                      className="w-full px-3.5 py-2.5 text-sm font-mono bg-[var(--bg-input)] text-[var(--text-heading)] placeholder:text-[var(--text-muted)] border border-[var(--border-subtle)] rounded-xl focus:bg-[var(--bg-card)] focus:outline-none focus:ring-2 focus:ring-sky-600/25 focus:border-[var(--text-accent)] transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-plan"
                      className="block text-xs font-medium text-[var(--text-body)] mb-1.5"
                    >
                      {t.contactSection.servicePlanLabel}
                    </label>
                    <select
                      id="contact-plan"
                      value={servicePlan}
                      onChange={(e) => setServicePlan(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[var(--bg-input)] text-[var(--text-heading)] border border-[var(--border-subtle)] rounded-xl focus:bg-[var(--bg-card)] focus:outline-none focus:ring-2 focus:ring-sky-600/25 focus:border-[var(--text-accent)] transition-colors"
                    >
                      <optgroup label={t.contactSection.capabilitiesGroupLabel}>
                        {SERVICE_LANDING_PAGES.map((svc) => {
                          const label =
                            t.servicePage.serviceContent[svc.slug]?.name ||
                            svc.name;
                          return (
                            <option key={svc.slug} value={svc.name}>
                              {label}
                            </option>
                          );
                        })}
                      </optgroup>
                      <optgroup label={t.contactSection.retainersGroupLabel}>
                        <option value="Essential Care (£59/mo)">
                          Essential Care (£59/mo)
                        </option>
                        <option value="Essential Care (£49/mo)">
                          Essential Care (£49/mo · {t.contactSection.annualSuffixLabel})
                        </option>
                        <option value="Growth & Speed (£119/mo)">
                          Growth &amp; Speed (£119/mo)
                        </option>
                        <option value="Growth & Speed (£99/mo)">
                          Growth &amp; Speed (£99/mo · {t.contactSection.annualSuffixLabel})
                        </option>
                        <option value="Scale & WooCommerce (£229/mo)">
                          Scale &amp; WooCommerce (£229/mo)
                        </option>
                        <option value="Scale & WooCommerce (£189/mo)">
                          Scale &amp; WooCommerce (£189/mo · {t.contactSection.annualSuffixLabel})
                        </option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-[var(--text-body)] mb-1.5"
                  >
                    {t.contactSection.detailsLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.contactSection.detailsPlaceholder}
                    className="w-full px-3.5 py-2.5 text-sm bg-[var(--bg-input)] text-[var(--text-heading)] placeholder:text-[var(--text-muted)] border border-[var(--border-subtle)] rounded-xl focus:bg-[var(--bg-card)] focus:outline-none focus:ring-2 focus:ring-sky-600/25 focus:border-[var(--text-accent)] transition-colors"
                  />
                </div>

                {error && (
                  <p
                    className="text-sm font-medium text-[var(--text-error)]"
                    role="alert"
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-[var(--btn-primary-text)] bg-[var(--btn-primary-bg)] rounded-xl hover:bg-[var(--btn-primary-hover-bg)] active:scale-[0.98] disabled:opacity-60 transition-all duration-150 cursor-pointer group"
                >
                  <span>
                    {submitting
                      ? t.contactSection.submittingCta
                      : t.contactSection.submitCta}
                  </span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
