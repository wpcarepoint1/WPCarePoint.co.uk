import type { ReactNode } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-[var(--progress-bar)] origin-left pointer-events-none"
      style={{ scaleX }}
    />
  );
}

/**
 * Visible-by-default structural wrapper.
 * Ensures below-the-fold sections never remain trapped at opacity: 0 during anchor jumps,
 * rapid scrolling, print views, or browser visual inspections.
 */
export function FadeInUpOnScroll({
  children,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  distance?: number;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export function Reveal({
  children,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export function StaggerGrid({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
