import type { ReactNode } from 'react';
import { FadeInUpOnScroll } from '../MotionPrimitives';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  actions?: ReactNode;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  actions,
  className = '',
}: SectionHeadingProps) {
  const isCentered = align === 'center';
  const eyebrowColor = tone === 'dark' ? 'text-[#00b2d4]' : 'text-[#00749c]';
  const ruleColor = tone === 'dark' ? 'bg-white/20' : 'bg-[#dde6eb]';
  const titleColor = tone === 'dark' ? 'text-white' : 'text-[#003b4f]';
  const descColor = tone === 'dark' ? 'text-white/80' : 'text-[#6c757d]';

  return (
    <FadeInUpOnScroll
      className={`flex flex-col ${
        actions ? 'lg:flex-row lg:items-end lg:justify-between gap-6' : 'gap-3'
      } ${isCentered ? 'text-center items-center mx-auto max-w-3xl' : ''} ${className}`.trim()}
    >
      <div className={isCentered ? 'max-w-2xl flex flex-col items-center' : 'max-w-2xl'}>
        {isCentered ? (
          <div className="inline-flex items-center gap-3.5">
            <span aria-hidden="true" className={`wpc-rule-draw h-px w-8 ${ruleColor}`} />
            <p className={`text-xs font-mono font-semibold tracking-[0.14em] uppercase ${eyebrowColor}`}>
              {eyebrow}
            </p>
            <span aria-hidden="true" className={`wpc-rule-draw h-px w-8 ${ruleColor}`} />
          </div>
        ) : (
          <div className="inline-flex items-center gap-3">
            <span aria-hidden="true" className={`wpc-rule-draw h-px w-6 ${ruleColor}`} />
            <p className={`text-xs font-mono font-semibold tracking-[0.12em] uppercase ${eyebrowColor}`}>
              {eyebrow}
            </p>
          </div>
        )}

        <h2
          className={`text-3xl sm:text-4xl lg:text-[2.55rem] font-semibold tracking-[-0.03em] leading-[1.1] mt-3 text-balance ${titleColor}`}
        >
          {title}
        </h2>
        {description && (
          <p className={`text-base sm:text-[17px] mt-4 leading-relaxed ${descColor}`}>
            {description}
          </p>
        )}
      </div>
      {actions && <div className="shrink-0">{actions}</div>}
    </FadeInUpOnScroll>
  );
}
