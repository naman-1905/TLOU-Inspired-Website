import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

type Tag = "h1" | "h2" | "h3" | "h4";

/** Display heading using the Fraunces face with a weathered, hand-set feel. */
export function Heading({
  as = "h2",
  className,
  children,
}: {
  as?: Tag;
  className?: string;
  children: ReactNode;
}) {
  const TagName = as as ElementType;
  return (
    <TagName className={cn("font-display font-medium leading-[1.05] tracking-tight text-primary", className)}>
      {children}
    </TagName>
  );
}
