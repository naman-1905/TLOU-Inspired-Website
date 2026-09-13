"use client";

import dynamic from "next/dynamic";
import { profile } from "@/data/profile";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import RuinFallback from "@/components/3d/RuinFallback";
import { useIsMobile } from "@/lib/useMediaQuery";
import { useReducedMotion } from "@/lib/useReducedMotion";

// 3D scene is client-only and code-split; the CSS/SVG fallback doubles as the
// loading placeholder (same size → no layout shift).
const OvergrownRuin = dynamic(() => import("@/components/3d/OvergrownRuin"), {
  ssr: false,
  loading: () => <RuinFallback />,
});

export default function Hero() {
  const isMobile = useIsMobile();
  const reduced = useReducedMotion();
  // WebGL only where it's worth the cost; everything else gets the atmospheric still.
  const show3D = !isMobile && !reduced;

  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* scene layer */}
      <div className="absolute inset-0" aria-hidden="true">
        {show3D ? <OvergrownRuin /> : <RuinFallback />}
      </div>

      {/* foreground copy */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <Badge className="mb-6">{profile.role}</Badge>
        <Heading as="h1" className="text-5xl text-balance sm:text-6xl md:text-7xl">
          {profile.name}
        </Heading>
        <Text variant="lead" className="mx-auto mt-6 max-w-xl text-pretty">
          {profile.tagline}
        </Text>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button href={profile.resumeUrl} size="lg">View resume</Button>
          <Button href="#projects" variant="secondary" size="lg">See my work</Button>
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted transition-colors hover:text-primary"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="animate-cue">
          <path d="M12 5v14m0 0l-6-6m6 6l6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
