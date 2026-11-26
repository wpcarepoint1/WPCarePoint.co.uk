import { useState } from 'react';
import { Layers } from 'lucide-react';
import type { PortfolioSlot } from '../../data/homepageData';

interface PortfolioCardProps {
  item: PortfolioSlot;
}

export function PortfolioCard({ item }: PortfolioCardProps) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <article className="h-full rounded-2xl border border-[#dde6eb] bg-white overflow-hidden flex flex-col justify-between hover:border-[#00749c] transition-colors">
      <div>
        <div className="aspect-[16/10] bg-[#eef3f6] overflow-hidden border-b border-[#e9eff2]">
          {imgFailed ? (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-[#6c757d]">
              <Layers className="h-7 w-7 mb-2 text-[#00749c]" aria-hidden="true" />
              <p className="text-xs font-medium text-center">{item.sector}</p>
            </div>
          ) : (
            <img
              src={item.imageUrl}
              alt={item.imageAlt}
              width={1200}
              height={750}
              loading="lazy"
              decoding="async"
              onError={() => setImgFailed(true)}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="p-6 sm:p-7">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="font-semibold text-[#00749c]">{item.status}</span>
            <span className="text-[#6c757d]" aria-hidden="true">
              ·
            </span>
            <span className="text-[#6c757d]">{item.sector}</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[#003b4f] mt-2.5 leading-snug">
            {item.title}
          </h3>

          <p className="text-sm text-[#2e2e2e] mt-2.5 leading-relaxed">
            {item.note}
          </p>
        </div>
      </div>

      <div className="px-6 sm:px-7 py-4 bg-[#f7f9fa] border-t border-[#e9eff2]">
        <p className="text-xs font-mono text-[#6c757d]">{item.scope}</p>
      </div>
    </article>
  );
}
