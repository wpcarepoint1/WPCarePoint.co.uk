import { useEffect, useRef, useState, type ReactNode } from 'react';
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
 * Native IntersectionObserver hook for scroll-triggered fade-in-up reveals.
 * Respects prefers-reduced-motion and triggers once when the element enters the viewport.
 */
export function useInViewFadeUp(threshold = 0.12, rootMargin = '0px 0px -40px 0px') {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      return true;
    }
    return !('IntersectionObserver' in window);
  });

  useEffect(() => {
    const el = ref.current;
    if (!el || isVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isVisible, threshold, rootMargin]);

  return { ref, isVisible };
}

export function FadeInUpOnScroll({
  children,
  delay = 0,
  distance = 24,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  distance?: number;
  className?: string;
}) {
  const { ref, isVisible } = useInViewFadeUp();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? 'translate3d(0, 0, 0)'
          : `translate3d(0, ${distance}px, 0)`,
        transitionProperty: 'opacity, transform',
        transitionDuration: '520ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${Math.round(delay * 1000)}ms`,
        willChange: isVisible ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}

export function Reveal({
  children,
  delay = 0,
  y = 18,
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
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.07,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.42, ease: EASE_OUT_EXPO },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
