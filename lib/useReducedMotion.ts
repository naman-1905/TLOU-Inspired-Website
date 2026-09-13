"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getSnapshot(): boolean {
  return window.matchMedia(QUERY).matches;
}

// Server + hydration default (no matchMedia on the server).
function getServerSnapshot(): boolean {
  return false;
}

/**
 * Tracks `prefers-reduced-motion` reactively and SSR-safely via
 * useSyncExternalStore. Every JS-driven animation should gate on this.
 */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
