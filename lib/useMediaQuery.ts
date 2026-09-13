"use client";

import { useCallback, useSyncExternalStore } from "react";

/** Reactive, SSR-safe `window.matchMedia` hook. */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (callback: () => void) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", callback);
      return () => mq.removeEventListener("change", callback);
    },
    [query],
  );

  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);
  const getServerSnapshot = useCallback(() => false, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/** Convenience: true when the viewport is below the md breakpoint (<768px). */
export function useIsMobile(): boolean {
  return useMediaQuery("(max-width: 767px)");
}
