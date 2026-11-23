import type { ReactNode } from 'react';

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
  const titleColor = tone === 'dark' ? 'text-white' : 'text-[#003b4f]';
  const descColor = tone === 'dark' ? 'text-white/80' : 'text-[#6c757d]';

  return (
    <div
      className={`flex flex-col ${
        actions ? 'lg:flex-row lg:items-end lg:justify-between gap-6' : 'gap-3'
      } ${isCentered ? 'text-center items-center mx-auto max-w-3xl' : ''} ${className}`.trim()}
    >
      <div className={isCentered ? 'max-w-2xl' : 'max-w-2xl'}>
        <p className={`text-xs font-mono font-semibold tracking-wider uppercase ${eyebrowColor}`}>
          {eyebrow}
        </p>
        <h2
          className={`text-2xl sm:text-3xl lg:text-[2.25rem] font-bold tracking-tight leading-tight mt-2 text-balance ${titleColor}`}
        >
          {title}
        </h2>
        {description && (
          <p className={`text-base sm:text-[17px] mt-3 leading-relaxed ${descColor}`}>
            {description}
          </p>
        )}
      </div>
      {actions && <div className="shrink-0">{actions}</div>}
    </div>
  );
}
