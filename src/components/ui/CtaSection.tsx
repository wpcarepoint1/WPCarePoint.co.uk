import { useRef, useState } from 'react';
import { ArrowRight, Check, Copy, Mail, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../../data/homepageData';
import { Button } from './Button';

interface CtaSectionProps {
  id?: string;
  eyebrow?: string;
  headline?: string;
  description?: string;
  mailtoSubject?: string;
  primaryButtonLabel?: string;
  contactRouteHref?: string;
  contactRouteLabel?: string;
  onNavigatePath?: (path: string) => void;
}

export function CtaSection({
  id = 'contact',
  eyebrow = 'Book a Consultation',
  headline = 'Plan your website, store, or care agreement directly by email.',
  description = 'Share your website URL, commercial priorities, or WordPress issue with engineering at contact@wpcarepoint.co.uk. Every enquiry is reviewed in writing—no automated queues or call centres.',
  mailtoSubject = 'WPCarePoint Consultation & Project Scoping',
  primaryButtonLabel = 'Email contact@wpcarepoint.co.uk',
  contactRouteHref,
  contactRouteLabel,
  onNavigatePath,
}: CtaSectionProps) {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'manual'>('idle');
  const emailLinkRef = useRef<HTMLAnchorElement>(null);

  const handleCopyEmail = async () => {
    let success = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(BRAND_INFO.email);
        success = true;
      }
    } catch {
      success = false;
    }

    if (!success) {
      try {
        const tempInput = document.createElement('textarea');
        tempInput.value = BRAND_INFO.email;
        tempInput.setAttribute('readonly', '');
        tempInput.style.position = 'fixed';
        tempInput.style.opacity = '0';
        tempInput.style.top = '0';
        tempInput.style.left = '0';
        document.body.appendChild(tempInput);
        tempInput.focus();
        tempInput.select();
        tempInput.setSelectionRange(0, BRAND_INFO.email.length);
        success = document.execCommand('copy');
        document.body.removeChild(tempInput);
      } catch {
        success = false;
      }
    }

    if (success) {
      setCopyState('copied');
      setTimeout(() => setCopyState('idle'), 2800);
      return;
    }

    if (emailLinkRef.current && window.getSelection) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(emailLinkRef.current);
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
    setCopyState('manual');
    setTimeout(() => setCopyState('idle'), 4000);
  };

  return (
    <section
      id={id}
      className="scroll-mt-20 py-16 lg:py-20 bg-[#003b4f] bg-deep-teal-grid text-white border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs font-mono font-semibold tracking-wider uppercase text-[#00b2d4]">
              {eyebrow}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
              {headline}
            </h2>
            <p className="text-base sm:text-[17px] text-white/85 leading-relaxed max-w-2xl">
              {description}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              {contactRouteHref && contactRouteLabel && (
                <Button
                  href={contactRouteHref}
                  onClick={(e) => {
                    if (onNavigatePath) {
                      e.preventDefault();
                      onNavigatePath(contactRouteHref);
                    }
                  }}
                  variant="onDark"
                  size="lg"
                >
                  <span>{contactRouteLabel}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </Button>
              )}

              <Button
                href={`mailto:${BRAND_INFO.email}?subject=${encodeURIComponent(
                  mailtoSubject
                )}`}
                variant={contactRouteHref ? 'ghostOnDark' : 'onDark'}
                size="lg"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{primaryButtonLabel}</span>
                {!contactRouteHref && (
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                )}
              </Button>

              <Button
                type="button"
                onClick={handleCopyEmail}
                variant="ghostOnDark"
                size="lg"
                aria-live="polite"
              >
                {copyState === 'copied' ? (
                  <>
                    <Check className="h-4 w-4 shrink-0 text-[#00b2d4]" aria-hidden="true" />
                    <span>Email Address Copied</span>
                  </>
                ) : copyState === 'manual' ? (
                  <>
                    <Copy className="h-4 w-4 shrink-0 text-[#00b2d4]" aria-hidden="true" />
                    <span>Email Selected — Press Ctrl+C</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </Button>
            </div>
          </div>

          <aside className="lg:col-span-5 rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8 space-y-5">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-[#00b2d4]">
                Official Contact Channel
              </p>
              <a
                ref={emailLinkRef}
                href={`mailto:${BRAND_INFO.email}`}
                className="mt-1 inline-flex min-h-[44px] items-center gap-2 text-base sm:text-lg font-semibold text-white hover:text-[#00b2d4] transition-colors break-all"
              >
                <Mail className="h-4 w-4 shrink-0 text-[#00b2d4]" aria-hidden="true" />
                <span>{BRAND_INFO.email}</span>
              </a>
              <p className="text-xs text-white/75 mt-1 leading-relaxed">
                {BRAND_INFO.channelNote}
              </p>
            </div>

            <div className="pt-5 border-t border-white/15">
              <p className="text-xs font-mono uppercase tracking-wider text-[#00b2d4]">
                United Kingdom Address
              </p>
              <p className="mt-1.5 text-sm text-white/90 leading-relaxed flex items-start gap-2">
                <MapPin
                  className="h-4 w-4 shrink-0 text-[#00b2d4] mt-0.5"
                  aria-hidden="true"
                />
                <span>{BRAND_INFO.address}</span>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
