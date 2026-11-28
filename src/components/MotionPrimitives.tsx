import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(mq.matches);
    sync();
    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', sync);
      return () => mq.removeEventListener('change', sync);
    }
    mq.addListener(sync);
    return () => mq.removeListener(sync);
  }, []);

  return reduced;
}

export function useScrolled(threshold = 24): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    let rafId = 0;

    const update = () => {
      rafId = 0;
      const next = window.scrollY > threshold;
      setScrolled((prev) => (prev === next ? prev : next));
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
    };
  }, [threshold]);

  return scrolled;
}

export function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    document.documentElement.classList.add('wpc-motion-ready');

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
 * Never blocks readability when JS is disabled, reduced-motion is set, or the page loads mid-scroll.
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

    document.documentElement.classList.add('wpc-motion-ready');

    const el = ref.current;
    if (!el) {
      setVisible(true);
      return;
    }

    const revealNowIfInOrAboveViewport = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 1.15) {
        setVisible(true);
        return true;
      }
      return false;
    };

    if (revealNowIfInOrAboveViewport()) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting || entry.boundingClientRect.top <= window.innerHeight)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '80px 0px -24px 0px', threshold: 0.01 }
    );

    observer.observe(el);

    const onHashOrJump = () => {
      if (revealNowIfInOrAboveViewport()) {
        observer.disconnect();
      }
    };

    window.addEventListener('hashchange', onHashOrJump, { passive: true });
    const safetyTimer = window.setTimeout(() => {
      setVisible(true);
      observer.disconnect();
    }, 1100);

    return () => {
      window.clearTimeout(safetyTimer);
      window.removeEventListener('hashchange', onHashOrJump);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible ? 'true' : 'false'}
      style={
        delay > 0 && visible ? { transitionDelay: `${Math.round(delay * 1000)}ms` } : undefined
      }
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
  index = 0,
  className = '',
}: {
  children: ReactNode;
  index?: number;
  className?: string;
}) {
  const style = { '--wpc-stagger-index': index } as CSSProperties;
  return (
    <div style={style} className={`wpc-stagger-child ${className}`.trim()}>
      {children}
    </div>
  );
}
