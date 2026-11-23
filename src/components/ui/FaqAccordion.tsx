import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import type { FaqEntry } from '../../data/homepageData';
import { EASE_OUT_EXPO } from '../MotionPrimitives';

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
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.18, ease: EASE_OUT_EXPO }}
                className="shrink-0 text-[#00749c]"
                aria-hidden="true"
              >
                <ChevronDown className="h-4 w-4" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.18, ease: EASE_OUT_EXPO }}
                  className="px-6 pb-5 text-sm sm:text-[15px] text-[#2e2e2e] leading-relaxed"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
