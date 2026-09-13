# TLOU-Inspired Website

A moody, overgrown, post-civilization single-page portfolio inspired by the **atmosphere** of *The Last of Us* — quiet devastation, moss and rust, fireflies drifting in the dark. Built with Next.js, React Three Fiber (WebGL), GSAP, and Tailwind CSS v4.

> **Original design only.** This project uses no game assets, logos, screenshots, character art, or names. All 3D geometry is original low-poly / procedural. The theme is *inspired by* the mood of the game, not derived from its IP.

![status](https://img.shields.io/badge/status-in%20development-8B4A32) ![next](https://img.shields.io/badge/Next.js-16-1A1A18) ![r3f](https://img.shields.io/badge/React%20Three%20Fiber-9-3D4A34)

## Highlights
- 🌿 **3D overgrown ruin** hero — an original low-poly crumbling structure with vines, grass, and drifting spore/firefly particles (WebGL via React Three Fiber), with a CSS/SVG fallback for mobile & reduced-motion.
- 🎞️ **Film grain + vignette** overlay and slow dissolve transitions for a weathered, cinematic feel.
- 🪶 **Smooth scroll** (Lenis) + **"grow-in" reveals** (GSAP ScrollTrigger) that uncurl like vines.
- ♿ **Accessible & performant** — WCAG-AA contrast, keyboard nav, `prefers-reduced-motion` fallbacks everywhere, code-split 3D chunk.
- 🎨 **Design system** — charcoal/moss/rust/teal palette, Fraunces display + Inter body type.

## Stack
Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · three / @react-three/fiber / drei · framer-motion · GSAP + @gsap/react · Lenis · lucide-react

## Getting started
```bash
npm install
npm run dev        # http://localhost:3000
```

### Other scripts
```bash
npm run build      # production build
npm start          # serve the production build
npm run lint       # eslint
```

## Project structure
```
app/            layout.tsx, page.tsx, globals.css (theme tokens + grain/vignette)
components/3d/  R3F scenes ('use client', dynamic ssr:false)
components/motion/  LenisProvider + motion primitives
components/ui/  Button, Card, NavBar, SectionWrapper, GrainOverlay, ChatWidget…
sections/       Hero, About, Skills, Projects, Resume, Contact
data/           profile / projects / skills / experience / socials / chatbot (typed)
lib/            hooks (useReducedMotion, useMediaQuery), utils
public/placeholders/  resume.pdf stub + screenshots
```

## Content is data-driven
All swappable content lives in `data/*.ts` with typed exports. Placeholders are prefixed `TODO:` so they're easy to find and replace with real info:
```bash
grep -rn "TODO:" data/ sections/
```

## Documentation
- [`PLAN.md`](./PLAN.md) — the full phased build plan.
- [`DECISIONS.md`](./DECISIONS.md) — locked choices (theme, palette, stack, guardrails).
- [`PROGRESS.md`](./PROGRESS.md) — what's shipped per phase.
- [`improvements.md`](./improvements.md) — enhancement backlog + 3D roadmap.
- [`instructions.md`](./instructions.md) — how to run and how to keep improving.

## Copyright & licensing
Original design inspired by the *mood* of The Last of Us (© Naughty Dog / Sony). No copyrighted assets are included. Fonts (Fraunces, Inter) are open-licensed. Code is provided as-is.
