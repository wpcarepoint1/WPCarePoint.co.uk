import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqEntry } from '../../data/homepageData';

interface FaqAccordionProps {
  items: FaqEntry[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="rounded-2xl border border-[#dde6eb] bg-white divide-y divide-[#e9eff2] overflow-hidden shadow-[0_8px_24px_-18px_rgba(0,59,79,0.12)]">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`transition-colors duration-200 ${
              isOpen ? 'bg-[#f7f9fa]/85' : 'bg-white'
            }`}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="group w-full min-h-[60px] px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[#f7f9fa] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#00749c]"
            >
              <span
                className={`text-base sm:text-[17px] font-semibold leading-snug transition-colors ${
                  isOpen ? 'text-[#00749c]' : 'text-[#003b4f] group-hover:text-[#00749c]'
                }`}
              >
                {item.question}
              </span>
              <span
                className={`h-8 w-8 rounded-full border shrink-0 inline-flex items-center justify-center transition-all duration-200 ease-[cubic-bezier(0.34,1.35,0.64,1)] ${
                  isOpen
                    ? 'border-[#00749c] bg-[#00749c] text-white rotate-180 scale-105'
                    : 'border-[#dde6eb] bg-white text-[#00749c] group-hover:border-[#00749c] group-hover:scale-105 group-focus-visible:border-[#00749c]'
                }`}
                aria-hidden="true"
              >
                <ChevronDown className="h-4 w-4" />
              </span>
            </button>
            <div className="wpc-accordion-grid" data-open={isOpen ? 'true' : 'false'}>
              <div className="wpc-accordion-inner">
                <div className="px-6 pb-6 text-sm sm:text-[15px] text-[#2e2e2e] leading-relaxed max-w-2xl">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
