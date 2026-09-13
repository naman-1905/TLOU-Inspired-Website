import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

type Variant = "lead" | "body" | "muted";

const variants: Record<Variant, string> = {
  lead: "text-lg text-primary/90 sm:text-xl",
  body: "text-base text-primary/80",
  muted: "text-sm text-muted",
};

/** Body copy with a few typographic scales. */
export function Text({
  as = "p",
  variant = "body",
  className,
  children,
}: {
  as?: ElementType;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  const TagName = as;
  return <TagName className={cn("leading-relaxed", variants[variant], className)}>{children}</TagName>;
}
