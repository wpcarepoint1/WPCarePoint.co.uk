import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { CARE_PLANS } from '../data/agencyData';
import type { SiteTranslations } from '../data/translations';
import {
  EASE_OUT_EXPO,
  FadeInUpOnScroll,
  Reveal,
} from './MotionPrimitives';

interface CarePlansSectionProps {
  selectedPlanId: string;
  onSelectPlan: (planLabel: string) => void;
  t: SiteTranslations;
}

export function CarePlansSection({
  selectedPlanId,
  onSelectPlan,
  t,
}: CarePlansSectionProps) {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section
      id="care-plans"
      className="py-24 border-t border-[var(--border-subtle)] bg-[var(--bg-surface-alt)] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-[var(--text-accent)]">
              {t.carePlansSection.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-heading)] mt-2 text-balance">
              {t.carePlansSection.headline}
            </h2>
            <p className="text-base text-[var(--text-body)] mt-3 leading-relaxed">
              {t.carePlansSection.lead}
            </p>
          </div>

          <div
            role="group"
            aria-label="Billing cadence"
            className="inline-flex items-center p-1 bg-[var(--bg-muted)] border border-[var(--border-subtle)] rounded-xl self-start md:self-auto shrink-0"
          >
            {(
              [
                ['monthly', t.carePlansSection.monthlyBilling],
                ['annual', t.carePlansSection.annualBilling],
              ] as const
            ).map(([key, label]) => {
              const active = billing === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setBilling(key)}
                  className={`relative px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    active
                      ? 'text-[var(--text-heading)]'
                      : 'text-[var(--text-body)] hover:text-[var(--text-heading)]'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="billingTogglePill"
                      transition={{
                        type: 'spring',
                        stiffness: 420,
                        damping: 32,
                      }}
                      className="absolute inset-0 bg-[var(--bg-card)] rounded-lg shadow-xs"
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {CARE_PLANS.map((plan, idx) => {
            const price =
              billing === 'monthly' ? plan.monthlyPriceGbp : plan.annualMonthlyGbp;
            const planLabel = `${plan.name} (£${price}/mo)`;
            const isSelected = selectedPlanId.startsWith(plan.name);
            const isFeatured = Boolean(plan.highlighted);
            const localizedPlan = t.carePlansSection.planCopy[plan.id];

            return (
              <FadeInUpOnScroll
                key={plan.id}
                delay={idx * 0.09}
                distance={24}
                className="flex"
              >
                <div
                  className={`w-full rounded-2xl border p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 ${
                    isFeatured
                      ? 'border-sky-500/40 dark:border-sky-400/50 bg-[var(--bg-obsidian)] text-white shadow-sm'
                      : 'border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--border-strong)]'
                  }`}
                >
                  <div>
                    <p
                      className={`text-xs font-medium ${
                        isFeatured ? 'text-sky-400' : 'text-[var(--text-muted)]'
                      }`}
                    >
                      {localizedPlan?.audience || plan.audience}
                    </p>
                    <h3
                      className={`text-xl font-bold mt-1.5 ${
                        isFeatured ? 'text-white' : 'text-[var(--text-heading)]'
                      }`}
                    >
                      {localizedPlan?.name || plan.name}
                    </h3>

                    <div
                      className={`mt-5 pb-5 border-b flex items-baseline gap-2 ${
                        isFeatured
                          ? 'border-slate-800'
                          : 'border-[var(--border-subtle)]'
                      }`}
                    >
                      <div className="overflow-hidden h-10 flex items-baseline">
                        <AnimatePresence mode="popLayout" initial={false}>
                          <motion.span
                            key={`${plan.id}-${billing}`}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{
                              duration: 0.22,
                              ease: EASE_OUT_EXPO,
                            }}
                            className={`text-3xl sm:text-4xl font-bold font-mono tabular-nums ${
                              isFeatured
                                ? 'text-white'
                                : 'text-[var(--text-heading)]'
                            }`}
                          >
                            £{price}
                          </motion.span>
                        </AnimatePresence>
                      </div>
                      <span
                        className={`text-sm ${
                          isFeatured ? 'text-slate-400' : 'text-[var(--text-muted)]'
                        }`}
                      >
                        {t.carePlansSection.perMonth}{' '}
                        {billing === 'annual'
                          ? t.carePlansSection.billedAnnually
                          : ''}
                      </span>
                    </div>

                    <p
                      className={`text-sm mt-4 leading-relaxed ${
                        isFeatured ? 'text-slate-300' : 'text-[var(--text-body)]'
                      }`}
                    >
                      {localizedPlan?.summary || plan.summary}
                    </p>

                    <dl
                      className={`mt-6 divide-y text-sm ${
                        isFeatured
                          ? 'divide-slate-800/80'
                          : 'divide-[var(--border-divider)]'
                      }`}
                    >
                      {plan.limits.map((item, limitIdx) => {
                        const localizedLimit =
                          t.carePlansSection.limitCopy[plan.id]?.[limitIdx];
                        return (
                          <div
                            key={item.label}
                            className="py-2.5 flex items-center justify-between gap-4"
                          >
                            <dt
                              className={
                                isFeatured
                                  ? 'text-slate-300'
                                  : 'text-[var(--text-muted)]'
                              }
                            >
                              {localizedLimit?.label || item.label}
                            </dt>
                            <dd
                              className={`font-medium text-right tabular-nums ${
                                isFeatured
                                  ? 'text-slate-100'
                                  : 'text-[var(--text-heading)]'
                              }`}
                            >
                              {localizedLimit?.value || item.value}
                            </dd>
                          </div>
                        );
                      })}
                    </dl>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectPlan(planLabel)}
                    className={`mt-8 w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-150 active:scale-[0.98] whitespace-nowrap cursor-pointer group ${
                      isFeatured
                        ? 'bg-sky-600 text-white hover:bg-sky-500'
                        : isSelected
                          ? 'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:bg-[var(--btn-primary-hover-bg)]'
                          : 'bg-[var(--bg-muted)] text-[var(--text-heading)] border border-[var(--border-strong)] hover:bg-[var(--btn-primary-bg)] hover:text-[var(--btn-primary-text)] hover:border-[var(--btn-primary-bg)]'
                    }`}
                  >
                    <span>
                      {t.carePlansSection.selectPrefix} {plan.name}
                    </span>
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </FadeInUpOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
