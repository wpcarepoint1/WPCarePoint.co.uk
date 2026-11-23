import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'onDark' | 'ghostOnDark';
type ButtonSize = 'sm' | 'md' | 'lg';

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-[#00749c] text-white border border-transparent hover:bg-[#00b2d4] hover:text-[#003b4f]',
  secondary:
    'bg-white text-[#003b4f] border border-[#b9ccd6] hover:border-[#00749c] hover:bg-[#f7f9fa]',
  onDark:
    'bg-[#00749c] text-white border border-transparent hover:bg-[#00b2d4] hover:text-[#003b4f]',
  ghostOnDark:
    'bg-transparent text-white border border-white/30 hover:border-[#00b2d4] hover:bg-white/10',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'min-h-[44px] px-4 py-2 text-xs font-semibold rounded-lg',
  md: 'min-h-[44px] px-5 py-2.5 text-sm font-semibold rounded-xl',
  lg: 'min-h-[48px] px-6 py-3 text-sm font-semibold rounded-xl',
};

const BASE_CLASSES =
  'inline-flex items-center justify-center gap-2 max-w-full text-center whitespace-normal sm:whitespace-nowrap sm:shrink-0 transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b2d4] focus-visible:ring-offset-2 cursor-pointer';

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
