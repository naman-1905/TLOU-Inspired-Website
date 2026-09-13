// Placeholder skill groups — replace with your real stack (content swap).
export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  // TODO: real languages
  { title: "Languages", items: ["TypeScript", "JavaScript (ES2023)", "HTML5", "CSS3"] },
  // TODO: real frameworks / libraries
  { title: "Frameworks & Libraries", items: ["React", "Next.js", "Node.js", "Tailwind CSS"] },
  // TODO: real 3D / motion stack
  { title: "3D & Motion", items: ["Three.js", "React Three Fiber", "drei", "GSAP", "Framer Motion"] },
  // TODO: real tooling
  { title: "Tooling & Workflow", items: ["Git", "Vite", "Vitest", "Playwright", "Figma"] },
];
