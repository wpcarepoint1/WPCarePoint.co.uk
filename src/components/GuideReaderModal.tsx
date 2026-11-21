import { X } from 'lucide-react';
import type { WordPressGuide } from '../data/agencyData';

interface GuideReaderModalProps {
  guide: WordPressGuide | null;
  onClose: () => void;
  onBookConsult: () => void;
}

export function GuideReaderModal({
  guide,
  onClose,
  onBookConsult,
}: GuideReaderModalProps) {
  if (!guide) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="guide-modal-title"
      className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white border border-slate-200 rounded-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>{guide.topic}</span>
              <span aria-hidden="true">·</span>
              <span>{guide.publishedAt}</span>
              <span aria-hidden="true">·</span>
              <span>{guide.readTime}</span>
            </div>
            <h3
              id="guide-modal-title"
              className="text-xl sm:text-2xl font-bold text-slate-900 mt-1.5 tracking-tight"
            >
              {guide.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close guide"
            className="h-9 w-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 shrink-0 cursor-pointer"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed">{guide.excerpt}</p>

        <div className="space-y-5">
          {guide.sections.map((sec) => (
            <div key={sec.heading}>
              <h4 className="text-base font-semibold text-slate-900">
                {sec.heading}
              </h4>
              <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                {sec.body}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-slate-500">
            Need hands-on implementation for your site?
          </span>
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookConsult();
            }}
            className="px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Book Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
