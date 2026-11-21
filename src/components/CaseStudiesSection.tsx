import { useState } from 'react';
import { Globe } from 'lucide-react';
import { CASE_STUDIES } from '../data/agencyData';

function ResilientImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-full h-full min-h-[260px] bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center p-6 text-slate-500">
        <Globe className="h-8 w-8 mb-2" aria-hidden="true" />
        <p className="text-xs font-medium text-center">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className="w-full h-full object-cover"
    />
  );
}

export function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="py-20 border-t border-slate-200 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-medium text-sky-700">Proof of Impact</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2 text-balance">
            Measured speed, uptime, and revenue gains for UK organisations.
          </h2>
        </div>

        <div className="space-y-10">
          {CASE_STUDIES.map((study) => (
            <article
              key={study.id}
              className="border border-slate-200 bg-white rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch"
            >
              <div className="lg:col-span-5 aspect-[4/3] lg:aspect-auto lg:h-full bg-slate-100">
                <ResilientImage src={study.imageUrl} alt={study.imageAlt} />
              </div>

              <div className="lg:col-span-7 p-7 sm:p-9 flex flex-col justify-between gap-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    <span className="font-medium text-slate-700">
                      {study.client}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{study.sector}</span>
                    <span aria-hidden="true">·</span>
                    <span>{study.location}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mt-2 tracking-tight">
                    {study.metricHeadline}
                  </h3>
                  <p className="text-sm font-mono tabular-nums text-sky-700 mt-1">
                    {study.metricDetail}
                  </p>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-slate-600 leading-relaxed">
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">
                        Before
                      </p>
                      <p>{study.challenge}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">
                        Engineering Fix
                      </p>
                      <p>{study.solution}</p>
                    </div>
                  </div>
                </div>

                <blockquote className="pt-5 border-t border-slate-100">
                  <p className="text-sm text-slate-700 italic leading-relaxed">
                    “{study.quote}”
                  </p>
                  <footer className="mt-2 text-xs text-slate-500">
                    <span className="font-semibold text-slate-900">
                      {study.authorName}
                    </span>{' '}
                    — {study.authorRole}
                  </footer>
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
