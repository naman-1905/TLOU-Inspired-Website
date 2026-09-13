import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Button, Badge } from "@/components/ui";
import { profile } from "@/data/profile";
import { experience, education } from "@/data/experience";

/** Resume — experience timeline + optional education + download CTA. Content in data/experience.ts (TODO). */
export function Resume() {
  return (
    <SectionWrapper id="resume">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionIntro eyebrow="The Long Road" title="Experience." className="mb-0" />
        <Button variant="secondary" size="md" href={profile.resumeUrl}>
          Download resume
        </Button>
      </div>

      <ol className="mt-14 space-y-10 border-l border-primary/15 pl-6 sm:pl-8">
        {experience.map((e) => (
          <li key={`${e.role}-${e.org}`} className="relative">
            <span className="absolute -left-[30px] top-1.5 size-3 rounded-full border border-rust bg-base sm:-left-[38px]" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-display text-xl tracking-tight text-primary">{e.role}</h3>
              <span className="text-sm text-muted">
                {e.start} — {e.end ?? "Present"}
              </span>
            </div>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-rust/80">{e.org}</p>
            <ul className="mt-3 space-y-2">
              {e.points.map((pt) => (
                <li key={pt} className="text-base leading-relaxed text-primary/75">
                  {pt}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      {education.length > 0 && (
        <div className="mt-16">
          <h3 className="font-display text-2xl tracking-tight text-primary">Education</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {education.map((ed) => (
              <Badge key={ed.degree} className="text-sm">
                {ed.degree} · {ed.org} · {ed.year}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
