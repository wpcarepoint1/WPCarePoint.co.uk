import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export function ScrollProgressBar() {
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 32,
    restDelta: 0.001,
  });

  if (prefersReduced) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-[var(--progress-bar)] origin-left pointer-events-none"
      style={{ scaleX }}
    />
  );
}

/**
 * Progressive scroll-triggered section reveal.
 * Never hides content if JavaScript or IntersectionObserver stalls: renders at high visibility
 * (>= 0.9 opacity when JS animations settle and full opacity immediately on reduced motion or
 * fallback timeout), applying subtle compositor-only transform settling.
 */
export function FadeInUpOnScroll({
  children,
  delay = 0,
  distance = 12,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  distance?: number;
  className?: string;
}) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (prefersReduced) {
      setEntered(true);
      return;
    }

    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setEntered(true);
      return;
    }

    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 1.1) {
      setEntered(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setEntered(true);
          observer.disconnect();
        }
      },
      { rootMargin: '80px 0px -40px 0px', threshold: 0.01 }
    );

    observer.observe(el);

    // Fail-safe so rapid programmatic jumps or headless renders never remain subtly shifted
    const safetyTimer = window.setTimeout(() => {
      setEntered(true);
      observer.disconnect();
    }, 900);

    return () => {
      window.clearTimeout(safetyTimer);
      observer.disconnect();
    };
  }, [prefersReduced]);

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={{
        opacity: entered ? 1 : 0.92,
        y: entered ? 0 : distance,
      }}
      transition={{
        duration: 0.36,
        delay: entered ? delay : 0,
        ease: EASE_OUT_EXPO,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({
  children,
  delay = 0,
  y = 10,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <FadeInUpOnScroll delay={delay} distance={y} className={className}>
      {children}
    </FadeInUpOnScroll>
  );
}

export function StaggerGrid({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <FadeInUpOnScroll delay={delay} distance={8} className={className}>
      {children}
    </FadeInUpOnScroll>
  );
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
