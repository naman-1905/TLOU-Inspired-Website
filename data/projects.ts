// Placeholder projects — replace titles, blurbs, tags, and links with real work (content swap).
export interface Project {
  title: string;
  blurb: string; // one-line summary shown on the card
  description?: string; // optional longer copy
  tags: string[];
  demoUrl?: string; // live link — when set, the card becomes a link
  repoUrl?: string; // source link
  year?: string;
}

export const projects: Project[] = [
  {
    title: "Project One", // TODO: real name
    blurb: "A short one-line description of what this project does and why it matters.", // TODO
    tags: ["Next.js", "TypeScript", "R3F"], // TODO
    demoUrl: "#", // TODO: live URL
    repoUrl: "#", // TODO: source URL
    year: "2026",
  },
  {
    title: "Project Two", // TODO
    blurb: "Another one-line summary — the problem, the approach, and the result.", // TODO
    tags: ["React", "GSAP", "WebGL"], // TODO
    demoUrl: "#", // TODO
    year: "2025",
  },
  {
    title: "Project Three", // TODO
    blurb: "A third entry to round out the grid. Keep it to a sentence or two.", // TODO
    tags: ["Node.js", "Tailwind"], // TODO
    year: "2025",
  },
];
