import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqEntry } from '../../data/homepageData';

interface FaqAccordionProps {
  items: FaqEntry[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="rounded-2xl border border-[#dde6eb] bg-white divide-y divide-[#e9eff2] overflow-hidden">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="w-full min-h-[56px] px-6 py-4.5 text-left flex items-center justify-between gap-4 hover:bg-[#f7f9fa] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#00749c]"
            >
              <span className="text-base font-semibold text-[#003b4f] leading-snug">
                {item.question}
              </span>
              <span
                className={`shrink-0 text-[#00749c] transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              >
                <ChevronDown className="h-4 w-4" />
              </span>
            </button>
            <div className="wpc-accordion-grid" data-open={isOpen ? 'true' : 'false'}>
              <div className="wpc-accordion-inner">
                <div className="px-6 pb-5 text-sm sm:text-[15px] text-[#2e2e2e] leading-relaxed">
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
