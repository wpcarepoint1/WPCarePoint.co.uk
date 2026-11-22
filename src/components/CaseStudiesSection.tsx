import { useState } from 'react';
import { Globe } from 'lucide-react';
import { CASE_STUDIES } from '../data/agencyData';
import type { SiteTranslations } from '../data/translations';
import { FadeInUpOnScroll } from './MotionPrimitives';

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
      <div className="w-full h-full min-h-[260px] bg-[var(--bg-muted)] flex flex-col items-center justify-center p-6 text-[var(--text-muted)]">
        <Globe className="h-8 w-8 mb-2" aria-hidden="true" />
        <p className="text-xs font-medium text-center">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={1200}
      height={896}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
    />
  );
}

export function CaseStudiesSection({ t }: { t: SiteTranslations }) {
  return (
    <section
      id="case-studies"
      className="py-24 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-6">
        <FadeInUpOnScroll distance={20} className="max-w-2xl mb-14">
          <p className="text-xs font-medium text-[var(--text-accent)]">
            {t.caseStudiesSection.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-heading)] mt-2 text-balance">
            {t.caseStudiesSection.headline}
          </h2>
        </FadeInUpOnScroll>

        <div className="space-y-10">
          {CASE_STUDIES.map((study, idx) => {
            const localizedStudy = t.caseStudiesSection.studyCopy[study.id];
            return (
              <FadeInUpOnScroll
                key={study.id}
                delay={idx * 0.09}
                distance={24}
              >
                <article className="group border border-[var(--border-subtle)] bg-[var(--bg-card)] rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch transition-colors hover:border-[var(--border-strong)]">
                  <div className="lg:col-span-5 aspect-[4/3] lg:aspect-auto lg:h-full bg-[var(--bg-muted)] overflow-hidden">
                    <ResilientImage src={study.imageUrl} alt={study.imageAlt} />
                  </div>

                  <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between gap-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-heading)]">
                          {study.client}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{localizedStudy?.sector || study.sector}</span>
                        <span aria-hidden="true">·</span>
                        <span>{localizedStudy?.location || study.location}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-heading)] mt-2.5 tracking-tight">
                        {localizedStudy?.metricHeadline || study.metricHeadline}
                      </h3>
                      <p className="text-sm font-mono tabular-nums text-[var(--text-accent)] mt-1.5">
                        {localizedStudy?.metricDetail || study.metricDetail}
                      </p>

                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-[var(--text-body)] leading-relaxed">
                        <div>
                          <p className="font-semibold text-[var(--text-heading)] mb-1.5">
                            {t.caseStudiesSection.beforeLabel}
                          </p>
                          <p>{localizedStudy?.challenge || study.challenge}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-[var(--text-heading)] mb-1.5">
                            {t.caseStudiesSection.fixLabel}
                          </p>
                          <p>{localizedStudy?.solution || study.solution}</p>
                        </div>
                      </div>
                    </div>

                    <blockquote className="pt-5 border-t border-[var(--border-divider)]">
                      <p className="text-sm text-[var(--text-primary)] italic leading-relaxed">
                        “{localizedStudy?.quote || study.quote}”
                      </p>
                      <footer className="mt-2.5 text-xs text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-heading)]">
                          {study.authorName}
                        </span>{' '}
                        — {localizedStudy?.authorRole || study.authorRole}
                      </footer>
                    </blockquote>
                  </div>
                </article>
              </FadeInUpOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
