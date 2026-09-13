"use client";

import { useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";
import { useReducedMotion } from "@/lib/useReducedMotion";

// Register GSAP plugins once at module scope (client only) and disable lag
// smoothing so scroll-driven tweens stay in sync with Lenis's time base.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.ticker.lagSmoothing(0);
}

/** Drives Lenis's raf from the shared `gsap.ticker` (single time base). */
function LenisDriver() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    lenis.on("scroll", ScrollTrigger.update);
    return () => {
      gsap.ticker.remove(update);
      lenis.off("scroll", ScrollTrigger.update);
    };
  }, [lenis]);

  return null;
}

/**
 * Single smooth-scroll provider. Skips Lenis entirely under reduced motion so
 * the page falls back to native scrolling with no animation.
 */
export default function LenisProvider({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        lerp: 0.09,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
        smoothWheel: true,
      }}
    >
      <LenisDriver />
      {children}
    </ReactLenis>
  );
}
