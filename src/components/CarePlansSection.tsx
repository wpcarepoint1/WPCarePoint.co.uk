import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { CARE_PLANS } from '../data/agencyData';

interface CarePlansSectionProps {
  selectedPlanId: string;
  onSelectPlan: (planLabel: string) => void;
}

export function CarePlansSection({
  selectedPlanId,
  onSelectPlan,
}: CarePlansSectionProps) {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="care-plans" className="py-20 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-sky-700">
              WordPress Care Plans
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2 text-balance">
              Predictable UK WordPress maintenance with clear service limits.
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Every plan includes UK/EEA off-site cloud backups, tested updates, and direct access to senior UK WordPress engineers—with rolling monthly terms and transparent GBP pricing.
            </p>
          </div>

          <div
            role="group"
            aria-label="Billing cadence"
            className="inline-flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start md:self-auto shrink-0"
          >
            <button
              type="button"
              onClick={() => setBilling('monthly')}
              className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                billing === 'monthly'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBilling('annual')}
              className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                billing === 'annual'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Annual (Save 17%)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {CARE_PLANS.map((plan) => {
            const price =
              billing === 'monthly' ? plan.monthlyPriceGbp : plan.annualMonthlyGbp;
            const planLabel = `${plan.name} (£${price}/mo)`;
            const isSelected = selectedPlanId.startsWith(plan.name);

            return (
              <div
                key={plan.id}
                className={`rounded-xl border p-7 flex flex-col justify-between transition-colors ${
                  plan.highlighted
                    ? 'border-slate-900 bg-slate-50/70'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    {plan.audience}
                  </p>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    {plan.name}
                  </h3>

                  <div className="mt-4 pb-5 border-b border-slate-200 flex items-baseline gap-1.5">
                    <span className="text-3xl font-bold font-mono tabular-nums text-slate-900">
                      £{price}
                    </span>
                    <span className="text-sm text-slate-500">
                      / month {billing === 'annual' ? '· billed annually' : ''}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                    {plan.summary}
                  </p>

                  <dl className="mt-6 divide-y divide-slate-100 text-sm">
                    {plan.limits.map((item) => (
                      <div
                        key={item.label}
                        className="py-2.5 flex items-center justify-between gap-4"
                      >
                        <dt className="text-slate-500">{item.label}</dt>
                        <dd className="font-medium text-slate-900 text-right tabular-nums">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectPlan(planLabel)}
                  className={`mt-8 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    plan.highlighted || isSelected
                      ? 'bg-slate-900 text-white hover:bg-slate-800'
                      : 'bg-white text-slate-900 border border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
