import { cn } from "@/lib/utils";

interface QuoteBandProps {
  text: string;
  speaker: string;
  className?: string;
}

/**
 * Cinematic full-width quote interlude — a real line from the games, set large
 * in the display face to break up the scroll between sections. Purely presentational.
 */
export function QuoteBand({ text, speaker, className }: QuoteBandProps) {
  return (
    <section aria-label="Quote" className={cn("relative overflow-hidden border-y border-primary/10 px-6 py-24 sm:px-10 md:py-32", className)}>
      {/* faint cinematic wash to separate the interlude from adjacent sections */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_120%_at_50%_50%,rgba(61,74,52,0.18),transparent_72%)]"
      />
      <figure className="relative mx-auto max-w-3xl text-center">
        <span aria-hidden="true" className="block font-display text-6xl leading-none text-rust/50 sm:text-7xl">
          &ldquo;
        </span>
        <blockquote className="-mt-4 font-display text-3xl font-medium leading-snug tracking-tight text-primary sm:text-4xl md:text-5xl">
          {text}
        </blockquote>
        <figcaption className="mt-7 text-xs uppercase tracking-[0.3em] text-rust/80">&mdash; {speaker}</figcaption>
      </figure>
    </section>
  );
}
