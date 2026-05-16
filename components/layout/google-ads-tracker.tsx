"use client";

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const googleAdsId = 'AW-11013360114';

export function GoogleAdsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasTrackedInitialPath = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
      return;
    }

    const queryString = searchParams.toString();
    const pagePath = queryString ? `${pathname}?${queryString}` : pathname;

    if (!hasTrackedInitialPath.current) {
      hasTrackedInitialPath.current = true;
      return;
    }

    window.gtag('config', googleAdsId, {
      page_path: pagePath,
      page_location: window.location.href
    });
  }, [pathname, searchParams]);

  return null;
}
