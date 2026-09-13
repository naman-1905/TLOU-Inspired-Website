import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Heading, Text, Button } from "@/components/ui";
import { profile } from "@/data/profile";
import { contactLinks } from "@/data/contact";

/** Contact — email CTA + social links. Content in data/contact.ts (TODO placeholders). */
export function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-rust/80">Signal Fire</span>
        <Heading as="h2" className="mt-4 text-4xl sm:text-5xl md:text-6xl">
          Let&apos;s build something that grows.
        </Heading>
        <Text as="p" className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
          I&apos;m open to interesting projects and collaborations. The fastest way to reach me is email.
        </Text>

        <div className="mt-10 flex items-center justify-center">
          <Button variant="primary" size="lg" href={`mailto:${profile.email}`}>
            Email me
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {contactLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center rounded-full border border-primary/15 bg-raised px-4 py-2 text-sm text-muted transition-colors hover:border-teal/40 hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
