import { cn } from "@/lib/utils";
import { Heading } from "./Heading";
import { Text } from "./Text";

interface SectionIntroProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/** Consistent section header: small tracked eyebrow + display heading + optional lead. */
export function SectionIntro({ eyebrow, title, description, align = "left", className }: SectionIntroProps) {
  return (
    <div className={cn("mb-14 max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <span className="text-xs uppercase tracking-[0.3em] text-rust/80">{eyebrow}</span>
      <Heading as="h2" className="mt-3 text-4xl sm:text-5xl md:text-6xl">
        {title}
      </Heading>
      {description && (
        <Text as="p" className="mt-5 text-lg leading-relaxed text-muted">
          {description}
        </Text>
      )}
    </div>
  );
}
