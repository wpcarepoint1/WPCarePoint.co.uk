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
    <section className="py-16 lg:py-24 bg-[#f7f9fa] border-b border-[#dde6eb]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-2xl border border-[#dde6eb] bg-white p-8 sm:p-12 shadow-sm">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#00749c] mb-4">
            <Compass className="h-4 w-4" aria-hidden="true" />
            <span>HTTP 404 · Page Not Found</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#003b4f] tracking-tight leading-tight">
            The page you requested could not be found.
          </h1>

          <p className="mt-4 text-base text-[#2e2e2e] leading-relaxed">
            The URL{' '}
            <code className="px-2 py-0.5 rounded bg-[#f7f9fa] border border-[#dde6eb] font-mono text-xs text-[#003b4f] break-all">
              {requestedPath}
            </code>{' '}
            is not an active page on WPCarePoint. It may have moved, been retired, or contain a typing mistake.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
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

          <div className="mt-8 pt-6 border-t border-[#e9eff2] grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <a
              href="/services/website-development/"
              onClick={(e) => {
                e.preventDefault();
                onNavigatePath('/services/website-development/');
              }}
              className="p-3.5 rounded-xl border border-[#e9eff2] hover:border-[#00749c] transition-colors text-[#003b4f] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c]"
            >
              Website Design &amp; Development
            </a>
            <a
              href="/wordpress-speed-optimisation/"
              onClick={(e) => {
                e.preventDefault();
                onNavigatePath('/wordpress-speed-optimisation/');
              }}
              className="p-3.5 rounded-xl border border-[#e9eff2] hover:border-[#00749c] transition-colors text-[#003b4f] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c]"
            >
              WordPress Speed Optimisation
            </a>
            <a
              href="/services/website-care-support/"
              onClick={(e) => {
                e.preventDefault();
                onNavigatePath('/services/website-care-support/');
              }}
              className="p-3.5 rounded-xl border border-[#e9eff2] hover:border-[#00749c] transition-colors text-[#003b4f] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c]"
            >
              Website Care &amp; Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
