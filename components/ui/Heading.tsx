import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

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
  const Component = as;
  return (
    <Component className={cn("font-display font-medium leading-[1.05] tracking-tight text-primary", className)}>
      {children}
    </Component>
  );
}

