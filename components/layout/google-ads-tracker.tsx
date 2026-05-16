"use client";

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const googleAdsId = 'AW-11013360114';

export function GoogleAdsTracker() {
  const pathname = usePathname();
  const hasTrackedInitialPath = useRef(false);

  useEffect(() => {
    const trackingWindow = window as Window & {
      gtag?: (...args: unknown[]) => void;
    };

    if (typeof window === 'undefined' || typeof trackingWindow.gtag !== 'function') {
      return;
    }

    const queryString = window.location.search.slice(1);
    const pagePath = queryString ? `${pathname}?${queryString}` : pathname;

    if (!hasTrackedInitialPath.current) {
      hasTrackedInitialPath.current = true;
      return;
    }

    trackingWindow.gtag('config', googleAdsId, {
      page_path: pagePath,
      page_location: window.location.href
    });
  }, [pathname]);

  return null;
}
