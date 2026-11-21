import { useState } from 'react';
import { Check, Copy, ExternalLink, RotateCcw } from 'lucide-react';
import { LOSS_SCENARIOS } from '../data/recoveryPlaybooks';
import type { LossScenarioId } from '../types/recovery';

interface PlaybookPanelProps {
  domain: string;
  selectedScenario: LossScenarioId;
  recommendedScenario?: LossScenarioId;
  completedStepIds: string[];
  onSelectScenario: (id: LossScenarioId) => void;
  onToggleStep: (stepId: string) => void;
  onResetSteps: () => void;
}

export function PlaybookPanel({
  domain,
  selectedScenario,
  recommendedScenario,
  completedStepIds,
  onSelectScenario,
  onToggleStep,
  onResetSteps,
}: PlaybookPanelProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const playbook =
    LOSS_SCENARIOS.find((s) => s.id === selectedScenario) || LOSS_SCENARIOS[0];

  const totalSteps = playbook.steps.length;
  const doneCount = playbook.steps.filter((s) =>
    completedStepIds.includes(s.id)
  ).length;

  const handleCopyCommand = async (id: string, rawCommand: string) => {
    const resolved = rawCommand.replace(/wpcarepoint\.co\.uk/g, domain);
    await navigator.clipboard.writeText(resolved);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      {/* Left Scenario Selector */}
      <aside className="lg:col-span-4 border border-slate-200 bg-white rounded-lg divide-y divide-slate-100">
        <div className="p-5">
          <h2 className="text-base font-semibold text-slate-900">
            What Happened to {domain}?
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Select the scenario matching your situation to load exact recovery actions.
          </p>
        </div>

        <div className="divide-y divide-slate-100">
          {LOSS_SCENARIOS.map((scenario) => {
            const isActive = scenario.id === selectedScenario;
            const isRecommended = scenario.id === recommendedScenario;
            return (
              <button
                key={scenario.id}
                type="button"
                onClick={() => onSelectScenario(scenario.id)}
                className={`w-full text-left p-4 transition-colors cursor-pointer ${
                  isActive ? 'bg-sky-50/70' : 'hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-sm font-semibold ${
                      isActive ? 'text-sky-900' : 'text-slate-900'
                    }`}
                  >
                    {scenario.label}
                  </span>
                </div>
                {isRecommended && (
                  <p className="text-xs font-medium text-sky-700 mt-1">
                    Recommended from live scan
                  </p>
                )}
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {scenario.shortDescription}
                </p>
              </button>
            );
          })}
        </div>
      </aside>

      {/* Right Active Playbook */}
      <div className="lg:col-span-8 space-y-6">
        <section className="border border-slate-200 bg-white rounded-lg p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-5 border-b border-slate-100">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span>Recovery Playbook</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">
                  {doneCount} / {totalSteps} completed
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mt-1">
                {playbook.label}
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Recovery outlook: <span className="font-medium text-slate-800">{playbook.recoveryChance}</span>
              </p>
            </div>
            {doneCount > 0 && (
              <button
                type="button"
                onClick={onResetSteps}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                Reset Progress
              </button>
            )}
          </div>

          <div className="mt-4">
            <p className="text-xs font-medium text-slate-500 mb-2">
              Common Symptoms
            </p>
            <ul className="space-y-1 text-sm text-slate-700 list-disc pl-5">
              {playbook.symptoms.map((sym) => (
                <li key={sym}>{sym}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border border-slate-200 bg-white rounded-lg divide-y divide-slate-100">
          {playbook.steps.map((step, index) => {
            const isChecked = completedStepIds.includes(step.id);
            const resolvedCommand = step.command
              ? step.command.replace(/wpcarepoint\.co\.uk/g, domain)
              : undefined;

            const priorityColor =
              step.priority === 'Immediate'
                ? 'text-red-700'
                : step.priority === 'Recovery'
                ? 'text-sky-700'
                : 'text-slate-600';

            return (
              <div key={step.id} className="p-6">
                <div className="flex items-start gap-4">
                  <button
                    type="button"
                    onClick={() => onToggleStep(step.id)}
                    aria-label={`Mark step ${index + 1} as ${
                      isChecked ? 'incomplete' : 'complete'
                    }`}
                    className={`mt-0.5 h-5 w-5 rounded border flex items-center justify-center shrink-0 transition-colors cursor-pointer ${
                      isChecked
                        ? 'bg-emerald-600 border-emerald-600 text-white'
                        : 'bg-white border-slate-300 hover:border-slate-400'
                    }`}
                  >
                    {isChecked && <Check className="h-3.5 w-3.5" aria-hidden="true" />}
                  </button>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className={`font-semibold ${priorityColor}`}>
                        {step.priority}
                      </span>
                      <span className="text-slate-400" aria-hidden="true">
                        ·
                      </span>
                      <span className="text-slate-500 font-mono tabular-nums">
                        Step 0{index + 1}
                      </span>
                      <span className="text-slate-400" aria-hidden="true">
                        ·
                      </span>
                      <span className="text-slate-500 font-mono tabular-nums">
                        ~{step.estimatedMinutes} min
                      </span>
                    </div>

                    <h4
                      className={`text-base font-semibold mt-1 ${
                        isChecked ? 'line-through text-slate-400' : 'text-slate-900'
                      }`}
                    >
                      {step.title}
                    </h4>

                    <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                      {step.detail}
                    </p>

                    {resolvedCommand && (
                      <div className="mt-3 bg-slate-900 text-slate-100 rounded-md p-3">
                        <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-slate-800">
                          <span className="text-xs text-slate-400">
                            {step.commandLabel || 'Terminal Command'}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleCopyCommand(step.id, resolvedCommand)}
                            className="inline-flex items-center gap-1 text-xs font-medium text-sky-300 hover:text-sky-200 whitespace-nowrap shrink-0 cursor-pointer"
                          >
                            {copiedId === step.id ? (
                              <>
                                <Check className="h-3.5 w-3.5" aria-hidden="true" />
                                Copied
                              </>
                            ) : (
                              <>
                                <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                                Copy Command
                              </>
                            )}
                          </button>
                        </div>
                        <pre className="text-xs font-mono overflow-x-auto whitespace-pre-wrap break-all">
                          {resolvedCommand}
                        </pre>
                      </div>
                    )}

                    {step.externalUrl && (
                      <div className="mt-3">
                        <a
                          href={step.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-700 hover:underline"
                        >
                          {step.externalLabel || 'Open Tool'}
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
