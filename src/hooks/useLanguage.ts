import { useCallback, useEffect, useState } from 'react';

export type Locale = 'en' | 'cy';

const STORAGE_KEY = 'wpcarepoint-lang';

function detectBrowserLocale(): Locale {
  if (typeof navigator === 'undefined') return 'en';
  const candidates =
    Array.isArray(navigator.languages) && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language];

  for (const raw of candidates) {
    if (!raw) continue;
    const normalized = raw.toLowerCase().trim();
    if (normalized === 'cy' || normalized.startsWith('cy-')) {
      return 'cy';
    }
    if (normalized === 'en' || normalized.startsWith('en-')) {
      return 'en';
    }
  }
  return 'en';
}

function getInitialLocaleState(): { locale: Locale; manualOverride: boolean } {
  if (typeof window === 'undefined') {
    return { locale: 'en', manualOverride: false };
  }
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'cy') {
      return { locale: saved, manualOverride: true };
    }
  } catch {
    // Ignore storage access issues
  }
  return { locale: detectBrowserLocale(), manualOverride: false };
}

export function useLanguage() {
  const [state, setState] = useState(getInitialLocaleState);

  useEffect(() => {
    document.documentElement.lang = state.locale === 'cy' ? 'cy' : 'en-GB';
    if (state.manualOverride) {
      try {
        localStorage.setItem(STORAGE_KEY, state.locale);
      } catch {
        // Ignore storage access issues
      }
    }
  }, [state]);

  useEffect(() => {
    if (state.manualOverride || typeof window === 'undefined') return;
    const onLanguageChange = () => {
      setState((prev) =>
        prev.manualOverride
          ? prev
          : { locale: detectBrowserLocale(), manualOverride: false }
      );
    };
    window.addEventListener('languagechange', onLanguageChange);
    return () => window.removeEventListener('languagechange', onLanguageChange);
  }, [state.manualOverride]);

  const setLocale = useCallback((next: Locale) => {
    setState({ locale: next, manualOverride: true });
  }, []);

  const toggleLocale = useCallback(() => {
    setState((prev) => ({
      locale: prev.locale === 'en' ? 'cy' : 'en',
      manualOverride: true,
    }));
  }, []);

  return {
    locale: state.locale,
    setLocale,
    toggleLocale,
    isAutoDetected: !state.manualOverride,
  };
}
