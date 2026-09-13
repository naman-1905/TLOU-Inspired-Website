import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Card, Badge } from "@/components/ui";
import { projects } from "@/data/projects";

/** Projects — card grid. Content lives in data/projects.ts (TODO placeholders). */
export function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionIntro
        eyebrow="Projects"
        title="Selected work."
        description="A few things I've built — more on request."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => {
          const external = p.demoUrl ? p.demoUrl.startsWith("http") : false;
          return (
            <Card
              key={p.title}
              href={p.demoUrl}
              target={external ? "_blank" : undefined}
              className="flex h-full flex-col justify-between p-7"
            >
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl tracking-tight text-primary">{p.title}</h3>
                  {p.year && <span className="text-sm text-muted">{p.year}</span>}
                </div>
                <p className="mt-3 text-base leading-relaxed text-muted">{p.blurb}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
