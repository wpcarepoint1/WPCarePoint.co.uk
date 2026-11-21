import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { UK_FAQS } from '../data/agencyData';
import type { SiteTranslations } from '../data/translations';
import { EASE_OUT_EXPO, FadeInUpOnScroll } from './MotionPrimitives';

export function UkFaqSection({ t }: { t: SiteTranslations }) {
  const [openId, setOpenId] = useState<string>(UK_FAQS[0].id);

  return (
    <section
      id="faq"
      className="py-24 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <FadeInUpOnScroll distance={20} className="lg:col-span-4">
          <p className="text-xs font-medium text-[var(--text-accent)]">
            {t.faqSection.eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-heading)] mt-2 text-balance">
            {t.faqSection.headline}
          </h2>
          <p className="text-sm text-[var(--text-body)] mt-3 leading-relaxed">
            {t.faqSection.lead}
          </p>
        </FadeInUpOnScroll>

        <FadeInUpOnScroll
          delay={0.08}
          distance={24}
          className="lg:col-span-8 border border-[var(--border-subtle)] rounded-2xl divide-y divide-[var(--border-subtle)] bg-[var(--bg-card)] overflow-hidden"
        >
          {UK_FAQS.map((item) => {
            const isOpen = openId === item.id;
            const localizedFaq = t.faqSection.items[item.id];
            return (
              <div key={item.id}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? '' : item.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[var(--bg-hover)] transition-colors cursor-pointer"
                >
                  <span className="text-base font-semibold text-[var(--text-heading)]">
                    {localizedFaq?.question || item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
                    className="shrink-0 text-[var(--text-muted)]"
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
                      className="px-6 pb-5 text-sm text-[var(--text-body)] leading-relaxed"
                    >
                      {localizedFaq?.answer || item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </FadeInUpOnScroll>
      </div>
    </section>
  );
}
