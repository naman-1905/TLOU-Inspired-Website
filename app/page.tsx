import { profile } from "@/data/profile";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function Home() {
  return (
    <main id="top" className="relative">
      {/* HERO — the 3D overgrown-ruin scene lands behind this in Phase 2 */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <Badge className="mb-6 border-teal/30 text-teal">
            <span className="size-1.5 rounded-full bg-teal" /> Available for work
          </Badge>
          <Heading as="h1" className="text-5xl sm:text-6xl md:text-7xl">
            {profile.name}
          </Heading>
          <Text variant="lead" className="mx-auto mt-6 max-w-xl text-balance">
            {profile.tagline}
          </Text>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="#projects" size="lg">
              See my work
            </Button>
            <Button href={profile.resumeUrl} target="_blank" variant="secondary" size="lg">
              Download resume
            </Button>
          </div>
        </div>

        {/* Scroll cue */}
        <a
          href="#about"
          className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-muted transition-colors hover:text-primary"
          aria-label="Scroll to about section"
        >
          <span className="animate-cue block text-xs uppercase tracking-[0.3em]">Scroll</span>
        </a>
      </section>
    </main>
  );
}
