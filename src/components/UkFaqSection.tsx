import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { UK_FAQS } from '../data/agencyData';

export function UkFaqSection() {
  const [openId, setOpenId] = useState<string>(UK_FAQS[0].id);

  return (
    <section id="faq" className="py-20 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4">
          <p className="text-xs font-medium text-sky-700">Common Questions</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mt-2 text-balance">
            Answers for UK business owners.
          </h2>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            Clear terms on UK GDPR data residency, Nominet .co.uk domains, GBP billing, and emergency turnaround times.
          </p>
        </div>

        <div className="lg:col-span-8 border border-slate-200 rounded-xl divide-y divide-slate-200 bg-white">
          {UK_FAQS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? '' : item.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors cursor-pointer"
                >
                  <span className="text-base font-semibold text-slate-900">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-slate-500 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
