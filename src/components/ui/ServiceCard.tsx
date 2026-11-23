import { ArrowRight, Check } from 'lucide-react';
import type { CoreServiceTrack } from '../../data/homepageData';

interface ServiceCardProps {
  track: CoreServiceTrack;
  onExploreService?: (slug: string) => void;
  onJumpToAnchor?: (anchorId: string) => void;
  variant?: 'default' | 'featured';
}

export function ServiceCard({
  track,
  onExploreService,
  onJumpToAnchor,
  variant = 'default',
}: ServiceCardProps) {
  const isFeatured = variant === 'featured';

  return (
    <article
      id={track.anchorId}
      className={`scroll-mt-24 h-full rounded-2xl border transition-all duration-200 flex flex-col justify-between p-6 sm:p-7 ${
        isFeatured
          ? 'bg-white border-[#b9ccd6] shadow-xs hover:border-[#00749c]'
          : 'bg-white border-[#dde6eb] hover:border-[#00749c]'
      }`}
    >
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="font-mono font-semibold text-[#00749c] tabular-nums">
            {track.index}
          </span>
          <span className="font-mono text-[#6c757d]">{track.subtitle}</span>
        </div>

        <h3 className="text-xl font-bold text-[#003b4f] mt-2.5 leading-snug">
          {track.title}
        </h3>

        <p className="text-sm sm:text-[15px] text-[#2e2e2e] mt-2.5 leading-relaxed">
          {track.description}
        </p>

        <ul className="mt-5 pt-5 border-t border-[#e9eff2] space-y-2.5">
          {track.deliverables.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-sm text-[#2e2e2e] leading-snug"
            >
              <Check
                className="h-4 w-4 text-[#00749c] shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 pt-3 border-t border-[#e9eff2] flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs font-mono text-[#6c757d]">{track.standards}</span>

        {track.serviceSlug && onExploreService ? (
          <a
            href={`/services/${track.serviceSlug}/`}
            onClick={(e) => {
              e.preventDefault();
              onExploreService(track.serviceSlug!);
            }}
            className="inline-flex items-center gap-1.5 min-h-[44px] px-2 -mx-2 text-xs font-semibold text-[#00749c] hover:text-[#003b4f] whitespace-nowrap shrink-0 transition-colors group"
          >
            <span>Explore Details</span>
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        ) : onJumpToAnchor ? (
          <a
            href={`#${track.anchorId}`}
            onClick={(e) => {
              e.preventDefault();
              onJumpToAnchor(track.anchorId);
            }}
            className="inline-flex items-center gap-1.5 min-h-[44px] px-2 -mx-2 text-xs font-semibold text-[#00749c] hover:text-[#003b4f] whitespace-nowrap shrink-0 transition-colors group"
          >
            <span>View Plans</span>
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        ) : null}
      </div>
    </article>
  );
}
