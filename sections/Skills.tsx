import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Card, Badge } from "@/components/ui";
import { skillGroups } from "@/data/skills";

/** Skills — grid of grouped tags. Content lives in data/skills.ts (TODO placeholders). */
export function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionIntro
        eyebrow="Arsenal"
        title="Tools I reach for."
        description="The stack behind the work — a mix of craft and engineering."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((g) => (
          <Card key={g.title} className="flex h-full flex-col p-6">
            <h3 className="font-display text-lg tracking-tight text-primary">{g.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <Badge key={it}>{it}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
