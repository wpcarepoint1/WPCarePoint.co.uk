import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, Code2, Cpu, ShieldCheck } from 'lucide-react';
import {
  ENGINEERING_STACK_DOMAINS,
  UK_COMPLIANCE_STANDARDS,
  UK_SECTORS,
  type TechDomainId,
} from '../data/agencyData';
import type { SiteTranslations } from '../data/translations';
import { EASE_OUT_EXPO, FadeInUpOnScroll } from './MotionPrimitives';

interface TechStackAndSectorsSectionProps {
  onConsultClick: (topic: string) => void;
  t: SiteTranslations;
}

export function TechStackAndSectorsSection({
  onConsultClick,
  t,
}: TechStackAndSectorsSectionProps) {
  const [activeDomainId, setActiveDomainId] =
    useState<TechDomainId>('languages');

  const activeDomain =
    ENGINEERING_STACK_DOMAINS.find((d) => d.id === activeDomainId) ||
    ENGINEERING_STACK_DOMAINS[0];

  const activeDomainLabel =
    t.techStackSection.domainLabels[activeDomain.id] || activeDomain.label;
  const activeDomainSummary =
    t.techStackSection.domainSummaries[activeDomain.id] || activeDomain.summary;

  return (
    <section
      id="stack"
      className="py-24 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {/* Part 1: Interactive Engineering Stack & Languages */}
        <div>
          <FadeInUpOnScroll
            distance={20}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
          >
            <div className="max-w-2xl">
              <p className="text-xs font-medium text-[var(--text-accent)] flex items-center gap-1.5">
                <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{t.techStackSection.eyebrow}</span>
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-heading)] mt-2 text-balance">
                {t.techStackSection.headline}
              </h2>
              <p className="text-base text-[var(--text-body)] mt-3 leading-relaxed">
                {t.techStackSection.lead}
              </p>
            </div>

            <div
              role="tablist"
              aria-label="Engineering technology domains"
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-[var(--bg-muted)] border border-[var(--border-subtle)] rounded-xl self-start lg:self-auto"
            >
              {ENGINEERING_STACK_DOMAINS.map((domain) => {
                const isSelected = domain.id === activeDomainId;
                const domainLabel =
                  t.techStackSection.domainLabels[domain.id] || domain.label;
                return (
                  <button
                    key={domain.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveDomainId(domain.id)}
                    className={`relative px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isSelected
                        ? 'text-[var(--text-heading)]'
                        : 'text-[var(--text-body)] hover:text-[var(--text-heading)]'
                    }`}
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="stackDomainPill"
                        transition={{
                          type: 'spring',
                          stiffness: 420,
                          damping: 32,
                        }}
                        className="absolute inset-0 bg-[var(--bg-card)] rounded-lg shadow-xs"
                      />
                    )}
                    <span className="relative z-10">{domainLabel}</span>
                  </button>
                );
              })}
            </div>
          </FadeInUpOnScroll>

          <FadeInUpOnScroll distance={24} delay={0.06}>
            <div className="border border-[var(--border-subtle)] bg-[var(--bg-surface-alt)] rounded-2xl p-6 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDomain.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22, ease: EASE_OUT_EXPO }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
                    <p className="text-sm text-[var(--text-body)] max-w-2xl leading-relaxed">
                      {activeDomainSummary}
                    </p>
                    <button
                      type="button"
                      onClick={() =>
                        onConsultClick(
                          `Custom Web Solutions and Integrations (${activeDomain.label})`
                        )
                      }
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-accent)] hover:text-[var(--text-accent-hover)] whitespace-nowrap shrink-0 self-start md:self-auto cursor-pointer group"
                    >
                      <span>
                        {t.techStackSection.discussPrefix} {activeDomainLabel}
                      </span>
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-6">
                    {activeDomain.entries.map((entry, idx) => {
                      const localizedEntry =
                        t.techStackSection.entryCopy[entry.name];
                      return (
                        <div
                          key={entry.name}
                          className="border border-[var(--border-subtle)] bg-[var(--bg-card)] rounded-xl p-5 flex flex-col justify-between hover:border-[var(--border-strong)] transition-colors"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs font-mono font-semibold text-[var(--text-accent)] tabular-nums">
                                0{idx + 1}
                              </span>
                              <span className="text-xs font-mono text-[var(--text-muted)] truncate">
                                {localizedEntry?.role || entry.role}
                              </span>
                            </div>
                            <h3 className="text-base font-bold text-[var(--text-heading)] mt-2.5">
                              {entry.name}
                            </h3>
                            <p className="text-sm text-[var(--text-body)] mt-2 leading-relaxed">
                              {localizedEntry?.rationale || entry.rationale}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </FadeInUpOnScroll>
        </div>

        {/* Part 2: UK Sectors Served */}
        <div className="pt-4 border-t border-[var(--border-subtle)]">
          <FadeInUpOnScroll
            distance={20}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 pt-8"
          >
            <div className="max-w-2xl">
              <p className="text-xs font-medium text-[var(--text-accent)] flex items-center gap-1.5">
                <Cpu className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{t.techStackSection.sectorsEyebrow}</span>
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-heading)] mt-2 text-balance">
                {t.techStackSection.sectorsHeadline}
              </h3>
            </div>
          </FadeInUpOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {UK_SECTORS.map((item, idx) => {
              const translatedSector = t.techStackSection.sectorCopy[idx];
              return (
                <FadeInUpOnScroll
                  key={item.sector}
                  delay={idx * 0.08}
                  distance={24}
                  className="flex"
                >
                  <article className="w-full border border-[var(--border-subtle)] bg-[var(--bg-surface-alt)] hover:bg-[var(--bg-card)] hover:border-[var(--border-strong)] rounded-2xl p-6 transition-colors flex flex-col justify-between">
                    <div>
                      <span className="text-sm font-mono font-semibold text-[var(--text-accent)] tabular-nums">
                        {item.index}
                      </span>
                      <h4 className="text-base font-bold text-[var(--text-heading)] mt-2">
                        {translatedSector?.sector || item.sector}
                      </h4>
                      <p className="text-xs font-mono text-[var(--text-muted)] mt-1.5">
                        {item.standard}
                      </p>
                      <p className="text-sm text-[var(--text-body)] mt-3 leading-relaxed">
                        {translatedSector?.outcome || item.outcome}
                      </p>
                    </div>
                  </article>
                </FadeInUpOnScroll>
              );
            })}
          </div>
        </div>

        {/* Part 3: Governance, Security & Accessibility Standards Strip */}
        <FadeInUpOnScroll distance={24}>
          <div className="border border-slate-800 bg-[var(--bg-obsidian)] bg-obsidian-grid text-white rounded-2xl p-7 sm:p-9">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <ShieldCheck
                  className="h-5 w-5 text-sky-400 shrink-0"
                  aria-hidden="true"
                />
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {t.techStackSection.governanceTitle}
                </h3>
              </div>
              <p className="text-xs font-mono text-slate-400">
                {t.techStackSection.governanceNote}
              </p>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 pt-6">
              {UK_COMPLIANCE_STANDARDS.map((std, idx) => {
                const translatedCompliance =
                  t.techStackSection.complianceCopy[idx];
                return (
                  <div key={std.code}>
                    <dt className="text-xs font-mono font-semibold text-sky-400">
                      {std.code}
                    </dt>
                    <dd className="mt-1.5 text-sm font-semibold text-white">
                      {translatedCompliance?.title || std.title}
                    </dd>
                    <dd className="mt-1.5 text-[13px] text-slate-300 leading-relaxed">
                      {translatedCompliance?.detail || std.detail}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </FadeInUpOnScroll>
      </div>
    </section>
  );
}
