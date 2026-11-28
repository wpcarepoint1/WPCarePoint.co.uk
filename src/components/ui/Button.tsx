import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'onDark' | 'ghostOnDark';
type ButtonSize = 'sm' | 'md' | 'lg';

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-[#00749c] text-white border border-transparent hover:bg-[#00b2d4] hover:text-[#003b4f] shadow-[0_8px_20px_-10px_rgba(0,116,156,0.55)] hover:shadow-[0_14px_28px_-12px_rgba(0,178,212,0.55)] hover:-translate-y-0.5',
  secondary:
    'bg-white text-[#003b4f] border border-[#b9ccd6] hover:border-[#00749c] hover:bg-[#f7f9fa] hover:-translate-y-0.5 shadow-[0_4px_12px_-10px_rgba(0,59,79,0.2)] hover:shadow-[0_10px_22px_-14px_rgba(0,59,79,0.25)]',
  onDark:
    'bg-[#00749c] text-white border border-transparent hover:bg-[#00b2d4] hover:text-[#003b4f] shadow-[0_8px_20px_-10px_rgba(0,0,0,0.35)] hover:shadow-[0_14px_28px_-12px_rgba(0,178,212,0.45)] hover:-translate-y-0.5',
  ghostOnDark:
    'bg-white/[0.04] text-white border border-white/25 hover:border-[#00b2d4] hover:bg-white/10 hover:-translate-y-0.5',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'min-h-[44px] px-4.5 py-2 text-xs font-semibold rounded-full',
  md: 'min-h-[44px] px-5.5 py-2.5 text-sm font-semibold rounded-full',
  lg: 'min-h-[50px] px-7 py-3 text-sm font-semibold rounded-full',
};

const BASE_CLASSES =
  'inline-flex items-center justify-center gap-2.5 max-w-full text-center whitespace-normal sm:whitespace-nowrap sm:shrink-0 transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] active:translate-y-0 active:scale-[0.985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b2d4] focus-visible:ring-offset-2 cursor-pointer';

type ButtonAsButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
};

type ButtonAsAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
};

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...rest
  } = props;

  const classes = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`.trim();

  if ('href' in props && props.href !== undefined) {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={props.href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      type={buttonProps.type || 'button'}
      className={classes}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
