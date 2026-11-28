import { ArrowRight, Compass, Home, Layers, Mail } from 'lucide-react';
import { Button } from './Button';

interface NotFoundPageViewProps {
  requestedPath: string;
  onNavigateHome: (hash?: string) => void;
  onNavigatePath: (path: string) => void;
}

export function NotFoundPageView({
  requestedPath,
  onNavigateHome,
  onNavigatePath,
}: NotFoundPageViewProps) {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f7f9fa] to-white bg-architectural-grid border-b border-[#dde6eb]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-3xl border border-[#dde6eb] bg-white p-8 sm:p-12 shadow-[0_18px_40px_-24px_rgba(0,59,79,0.16)]">
          <div className="inline-flex items-center gap-2.5 text-xs font-mono font-semibold uppercase tracking-[0.12em] text-[#00749c] mb-5">
            <Compass className="h-4 w-4" aria-hidden="true" />
            <span>HTTP 404 · Page Not Found</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold text-[#003b4f] tracking-[-0.03em] leading-[1.1]">
            The page you requested could not be found.
          </h1>

          <p className="mt-5 text-base sm:text-[17px] text-[#2e2e2e] leading-relaxed">
            The URL{' '}
            <code className="px-2 py-0.5 rounded-md bg-[#f7f9fa] border border-[#dde6eb] font-mono text-xs text-[#003b4f] break-all">
              {requestedPath}
            </code>{' '}
            is not an active page on WPCarePoint. It may have moved, been retired, or contain a typing mistake.
          </p>

          <div className="mt-8 flex flex-wrap gap-3.5">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onNavigateHome()}
            >
              <Home className="h-4 w-4" aria-hidden="true" />
              <span>Return to Homepage</span>
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={() => onNavigatePath('/services/')}
            >
              <Layers className="h-4 w-4" aria-hidden="true" />
              <span>Browse All Services</span>
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={() => onNavigatePath('/contact/')}
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>Contact WPCarePoint</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          <div className="mt-10 pt-7 border-t border-[#e9eff2] grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <a
              href="/services/website-development/"
              onClick={(e) => {
                e.preventDefault();
                onNavigatePath('/services/website-development/');
              }}
              className="wpc-studio-card p-4 rounded-xl border border-[#e9eff2] hover:border-[#00749c] text-[#003b4f] font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c]"
            >
              Website Design &amp; Development
            </a>
            <a
              href="/wordpress-speed-optimisation/"
              onClick={(e) => {
                e.preventDefault();
                onNavigatePath('/wordpress-speed-optimisation/');
              }}
              className="wpc-studio-card p-4 rounded-xl border border-[#e9eff2] hover:border-[#00749c] text-[#003b4f] font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c]"
            >
              WordPress Speed Optimisation
            </a>
            <a
              href="/services/website-care-support/"
              onClick={(e) => {
                e.preventDefault();
                onNavigatePath('/services/website-care-support/');
              }}
              className="wpc-studio-card p-4 rounded-xl border border-[#e9eff2] hover:border-[#00749c] text-[#003b4f] font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c]"
            >
              Website Care &amp; Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
