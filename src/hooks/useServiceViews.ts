import { useCallback, useMemo, useState } from 'react';
import {
  SERVICE_LANDING_PAGES,
  type ServiceLandingDetail,
} from '../data/servicePagesData';

const STORAGE_KEY = 'wpcarepoint-service-views';

const BASELINE_SERVICE_VIEWS: Record<string, number> = {
  'website-development': 142,
  'ai-search-optimisation': 118,
  'ecommerce-website-development': 96,
  'generative-engine-optimisation': 84,
  'ai-automation-business-process-automation': 79,
  'search-engine-optimisation': 71,
  'ai-powered-website-development': 64,
  'custom-web-solutions-integrations': 58,
  'branding-brand-identity': 49,
  'digital-marketing-online-growth': 45,
};

function loadInitialViews(): Record<string, number> {
  if (typeof window === 'undefined') return { ...BASELINE_SERVICE_VIEWS };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Record<string, unknown>;
      const merged: Record<string, number> = { ...BASELINE_SERVICE_VIEWS };
      for (const svc of SERVICE_LANDING_PAGES) {
        const val = parsed[svc.slug];
        if (typeof val === 'number' && Number.isFinite(val) && val >= 0) {
          merged[svc.slug] = Math.max(val, BASELINE_SERVICE_VIEWS[svc.slug] ?? 0);
        }
      }
      return merged;
    }
  } catch {
    // Ignore storage read failures
  }
  return { ...BASELINE_SERVICE_VIEWS };
}

export interface ViewedServiceEntry {
  service: ServiceLandingDetail;
  views: number;
}

export function useServiceViews() {
  const [viewCounts, setViewCounts] =
    useState<Record<string, number>>(loadInitialViews);

  const recordServiceView = useCallback((slug: string) => {
    setViewCounts((prev) => {
      const nextCount = (prev[slug] ?? 0) + 1;
      const next = { ...prev, [slug]: nextCount };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Ignore storage write failures
      }
      return next;
    });
  }, []);

  const topViewedServices: ViewedServiceEntry[] = useMemo(() => {
    return [...SERVICE_LANDING_PAGES]
      .map((service) => ({
        service,
        views: viewCounts[service.slug] ?? 0,
      }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 3);
  }, [viewCounts]);

  return { viewCounts, topViewedServices, recordServiceView };
}
