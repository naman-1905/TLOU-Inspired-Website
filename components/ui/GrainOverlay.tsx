import { cn } from "@/lib/utils";

/**
 * Fixed full-viewport film grain + vignette layer. Pure CSS (no JS), and
 * pointer-events are disabled so it never blocks interaction. The grain loop
 * is stopped automatically under `prefers-reduced-motion` by the global
 * override in globals.css — the texture simply stays static.
 */
export default function GrainOverlay({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none fixed inset-0 z-[80]", className)}
    >
      {/* Vignette — darkens the edges for a quiet, cinematic frame */}
      <div className="vignette absolute inset-0" />
      {/* Animated grain; oversized so the shift never reveals an edge */}
      <div className="grain-noise animate-grain absolute -inset-[12%] opacity-[0.055] mix-blend-overlay" />
    </div>
  );
}
