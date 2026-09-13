"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

/**
 * Consistent section shell. The inner content "grows in" (scale + fade + lift)
 * once when scrolled into view. Under reduced motion it renders fully visible
 * with no animation.
 */
export function SectionWrapper({ id, className, children }: SectionWrapperProps) {
  const outerRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !innerRef.current || !outerRef.current) return;
      gsap.fromTo(
        innerRef.current,
        { opacity: 0, scale: 0.96, y: 24 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: outerRef.current, start: "top 85%", once: true },
        },
      );
    },
    { scope: outerRef, dependencies: [reduced] },
  );

  return (
    <section id={id} ref={outerRef as React.RefObject<HTMLElement>} className={cn("relative px-6 py-24 sm:px-10 md:py-32", className)}>
      <div ref={innerRef} className="mx-auto w-full max-w-6xl">
        {children}
      </div>
    </section>
  );
}
