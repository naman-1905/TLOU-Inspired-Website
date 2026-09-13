import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Card, Text } from "@/components/ui";
import { aboutParagraphs, aboutHighlights } from "@/data/about";

/** About — short bio + a "focus" card. Content lives in data/about.ts (TODO placeholders). */
export function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-start">
        <div>
          <SectionIntro eyebrow="About" title="Building interfaces that feel alive." />
          {aboutParagraphs.map((p, i) => (
            <Text key={i} as="p" className="mb-5 text-lg leading-relaxed text-primary/80">
              {p}
            </Text>
          ))}
        </div>

        <Card className="h-fit">
          <span className="text-xs uppercase tracking-[0.3em] text-muted">Focus</span>
          <ul className="mt-4 space-y-3">
            {aboutHighlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm leading-relaxed text-primary/85">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-teal" />
                {h}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </SectionWrapper>
  );
}
