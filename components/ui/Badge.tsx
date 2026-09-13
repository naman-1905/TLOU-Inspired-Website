import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** Small pill for tags / metadata. */
export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-primary/12 bg-raised px-3 py-1 text-xs tracking-wide text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
