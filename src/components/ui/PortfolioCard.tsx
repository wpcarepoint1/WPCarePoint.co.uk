import { useState } from 'react';
import { ArrowUpRight, Check, Layers } from 'lucide-react';
import type { PortfolioShowcaseItem } from '../../data/homepageData';

interface PortfolioCardProps {
  item: PortfolioShowcaseItem;
}

export function PortfolioCard({ item }: PortfolioCardProps) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <article className="group wpc-studio-card h-full rounded-2xl border border-[#dde6eb] bg-white overflow-hidden flex flex-col justify-between hover:border-[#00749c]">
      <div>
        <div className="aspect-[16/9] bg-[#eef3f6] overflow-hidden border-b border-[#e9eff2]">
          {imgFailed ? (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-[#6c757d]">
              <Layers className="h-7 w-7 mb-2 text-[#00749c]" aria-hidden="true" />
              <p className="text-xs font-medium text-center">{item.scope}</p>
            </div>
          ) : (
            <img
              src={item.imageUrl}
              alt={item.imageAlt}
              width={1200}
              height={750}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              onError={() => setImgFailed(true)}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          )}
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="font-semibold text-[#00749c]">{item.eyebrow}</span>
            <span className="text-[#6c757d]" aria-hidden="true">
              ·
            </span>
            <span className="text-[#6c757d]">{item.scope}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#003b4f] mt-3 leading-snug">
            {item.title}
          </h3>

          <p className="text-sm sm:text-[15px] text-[#2e2e2e] mt-3 leading-relaxed">
            {item.summary}
          </p>

          <ul className="mt-6 pt-5 border-t border-[#e9eff2] grid grid-cols-1 sm:grid-cols-2 gap-3">
            {item.serviceTracks.map((track) => (
              <li
                key={track}
                className="flex items-start gap-2.5 text-sm text-[#2e2e2e] leading-snug"
              >
                <Check
                  className="h-4 w-4 text-[#00749c] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>{track}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-6 sm:px-8 py-4 bg-[#f7f9fa] border-t border-[#e9eff2] flex flex-wrap items-center justify-between gap-3">
        <a
          href={item.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 min-h-[44px] text-sm font-semibold text-[#00749c] hover:text-[#003b4f] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00749c] rounded-md group/link"
        >
          <span>{item.externalLabel}</span>
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-150 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
        <span className="text-xs font-mono text-[#6c757d]">Opens official Fiverr portfolio</span>
      </div>
    </article>
  );
}
