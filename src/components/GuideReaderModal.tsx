import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import type { WordPressGuide } from '../data/agencyData';
import type { SiteTranslations } from '../data/translations';
import { EASE_OUT_EXPO } from './MotionPrimitives';

interface GuideReaderModalProps {
  guide: WordPressGuide | null;
  onClose: () => void;
  onBookConsult: () => void;
  t: SiteTranslations;
}

export function GuideReaderModal({
  guide,
  onClose,
  onBookConsult,
  t,
}: GuideReaderModalProps) {
  useEffect(() => {
    if (!guide) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [guide, onClose]);

  const localizedGuide = guide
    ? t.guidesSection.guideCopy[guide.id]
    : undefined;
  const sections = localizedGuide?.sections || guide?.sections || [];

  return (
    <AnimatePresence>
      {guide && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="guide-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-50 bg-slate-950/65 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.24, ease: EASE_OUT_EXPO }}
            className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-[var(--border-divider)]">
              <div>
                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                  <span>{localizedGuide?.topic || guide.topic}</span>
                  <span aria-hidden="true">·</span>
                  <span>{localizedGuide?.publishedAt || guide.publishedAt}</span>
                  <span aria-hidden="true">·</span>
                  <span>{localizedGuide?.readTime || guide.readTime}</span>
                </div>
                <h3
                  id="guide-modal-title"
                  className="text-xl sm:text-2xl font-bold text-[var(--text-heading)] mt-1.5 tracking-tight"
                >
                  {localizedGuide?.title || guide.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label={t.guidesSection.modalClose}
                className="h-10 w-10 rounded-xl border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-body)] hover:bg-[var(--bg-hover)] shrink-0 cursor-pointer transition-colors"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <p className="text-[15px] text-[var(--text-body)] leading-relaxed">
              {localizedGuide?.excerpt || guide.excerpt}
            </p>

            <div className="space-y-5">
              {sections.map((sec) => (
                <div key={sec.heading}>
                  <h4 className="text-base font-semibold text-[var(--text-heading)]">
                    {sec.heading}
                  </h4>
                  <p className="text-[15px] text-[var(--text-body)] mt-1.5 leading-relaxed">
                    {sec.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[var(--border-divider)] flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-[var(--text-muted)]">
                {t.guidesSection.modalNeedHelp}
              </span>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onBookConsult();
                }}
                className="px-4 py-2.5 text-sm font-medium text-[var(--btn-primary-text)] bg-[var(--btn-primary-bg)] rounded-xl hover:bg-[var(--btn-primary-hover-bg)] transition-colors cursor-pointer"
              >
                {t.guidesSection.modalCta}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
