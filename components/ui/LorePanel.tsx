import { themes, worldTerms } from "@/data/lore";
import { cn } from "@/lib/utils";

/** "Field Notes" — a compact glossary of the world both games take place in. */
export function LorePanel({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-2xl border border-primary/10 bg-raised p-6 sm:p-8", className)}>
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-xs uppercase tracking-[0.3em] text-rust/80">Field Notes</span>
        <span className="text-xs text-muted">The world, in brief</span>
      </div>

      <dl className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
        {worldTerms.map((t) => (
          <div key={t.term} className="border-t border-primary/10 pt-4">
            <dt className="text-sm font-medium uppercase tracking-[0.15em] text-teal">{t.term}</dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-muted">{t.def}</dd>
          </div>
        ))}
      </dl>

      {/* the emotional through-line */}
      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-primary/10 pt-5">
        {themes.map((t, i) => (
          <span key={t} className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted">
            {i > 0 && <span aria-hidden="true" className="size-1 rounded-full bg-rust/60" />}
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
