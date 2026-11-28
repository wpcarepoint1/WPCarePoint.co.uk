import { useEffect, useRef, useState, type ReactNode } from 'react';

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    let rafId = 0;

    const updateProgress = () => {
      rafId = 0;
      const el = barRef.current;
      if (!el) return;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
      el.style.transform = `scale3d(${ratio}, 1, 1)`;
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-[var(--progress-bar)] origin-left pointer-events-none"
      style={{ transform: 'scale3d(0, 1, 1)' }}
    />
  );
}

/**
 * Progressive scroll-triggered section reveal using IntersectionObserver + CSS transitions.
 * Never blocks readability when JS or IntersectionObserver is unavailable.
 */
export function FadeInUpOnScroll({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  distance?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      typeof IntersectionObserver === 'undefined'
    ) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) {
      setVisible(true);
      return;
    }

    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 1.1) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '80px 0px -32px 0px', threshold: 0.01 }
    );

    observer.observe(el);

    const safetyTimer = window.setTimeout(() => {
      setVisible(true);
      observer.disconnect();
    }, 800);

    return () => {
      window.clearTimeout(safetyTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible ? 'true' : 'false'}
      style={delay > 0 && visible ? { transitionDelay: `${Math.round(delay * 1000)}ms` } : undefined}
      className={`wpc-reveal ${className}`.trim()}
    >
      {children}
    </div>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <FadeInUpOnScroll delay={delay} className={className}>
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
    <FadeInUpOnScroll delay={delay} className={className}>
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
