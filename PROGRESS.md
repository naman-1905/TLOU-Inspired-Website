# PROGRESS.md — Phase Log

One entry per completed phase. Update at the end of every session. See `AGENT.md` (local) for the granular log.

## Status
| Phase | Name | Status |
| --- | --- | --- |
| 0 | Scaffold | ✅ done |
| 1 | Design system | ✅ done |
| 2 | Hero + 3D overgrown ruin | ✅ done |
| 3 | About + Skills | 🟡 scaffolded (TODO content) |
| 4 | Projects | 🟡 scaffolded (TODO content) |
| 5 | Resume + Contact + Chatbot | 🟡 scaffolded (chatbot TODO) |
| 6 | Performance + a11y | ⬜ pending |
| 7 | Polish | ⬜ pending |

---

## Phase 0 — Scaffold (done)
**Shipped:** Next.js 16 + React 19 + TS + Tailwind v4 app; R3F/three/drei, framer-motion, gsap, lenis, lucide installed. Folder structure, `next.config.ts` (`transpilePackages:['three']`), `.gitignore` (AGENT.md ignored), continuity files, resume.pdf stub, git remote to GitHub.

**Stubbed / TODO:** all content data (profile, projects, skills, experience) — to be created in Phases 1–5. All sections are still the default Next page until Phase 2+.

**Known issues / notes:**
- Scaffolded on Next **16** (plan said 15). Verified R3F v9 works with React 19; will confirm dev boots at end of Phase 0/1.
- `create-next-app` forbids capitalised project names → folder created via temp rename.

## Phase 1 — Design system (done)
**Shipped:** Tailwind v4 theme tokens (charcoal base/raised, moss/rust/teal earth accents, warm off-white + parchment text); Fraunces display + Inter body via `next/font/google`; film grain + vignette overlay; Lenis provider driven from the shared `gsap.ticker` with ScrollTrigger wiring; SSR-safe `useReducedMotion` / `useMediaQuery` hooks (`useSyncExternalStore`); UI primitives (Button, Card, Badge, Heading, Text, SectionWrapper grow-in, NavBar with dissolve + mobile menu); themed hero shell in `page.tsx`; typed `data/profile.ts`.

**Verified:** lint clean, production build passes (static), dev server renders the themed page (grain/vignette/hero/fonts confirmed in HTML).

**Stubbed / TODO:** all real content (profile details, skills, projects, experience) — Phases 3–5. Hero is text-only for now; the 3D overgrown-ruin scene + fallbacks arrive in Phase 2.

## Phase 2 — Hero + 3D overgrown ruin (done)
**Shipped:** `components/3d/OvergrownRuin.tsx` — original low-poly R3F scene (weathered wall blocks, procedural vine `tubeGeometry`, instanced swaying grass, drei `Sparkles` fireflies, fog + moss/rust lighting, slow camera drift + subtle pointer parallax). `components/3d/RuinFallback.tsx` — CSS/SVG atmospheric still used as BOTH the 3D loading placeholder (no CLS) and the permanent mobile/reduced-motion fallback. `sections/Hero.tsx` — composes hero copy + scene; WebGL loaded via `next/dynamic({ ssr:false })` and mounted only when `!isMobile && !reduced`. `app/page.tsx` → `<Hero/>`.

**Verified:** lint clean, production build passes (TS clean, static prerender), dev server `GET / 200` with SSR emitting the fallback SVG + grain/vignette + NavBar + hero copy + both font vars. Live WebGL render needs a browser/GPU (not verifiable headless).

**Fixed:** narrowed polymorphic `Heading`/`Text` tag types (broad `ElementType` → literal tag unions) to resolve a strict-mode `children: never` type error; removed an assumed `size` prop on Heading (it sizes via `className`).

**Stubbed / TODO:** real profile content; About/Skills/Projects/Resume/Contact sections — Phases 3–5.

## Phase 3–5 — Content sections (scaffolded, placeholder data)
**Shipped:** full page skeleton with themed sections + a UI barrel (`components/ui/index.ts`) and a shared `SectionIntro` helper. Sections: `About` (bio + focus card), `Skills` (grouped tag grid), `Projects` (card grid), `Resume` (experience timeline + education + download CTA), `Contact` (email CTA + socials), `Footer`. Typed placeholder data in `data/about.ts`, `data/skills.ts`, `data/projects.ts`, `data/experience.ts`, `data/contact.ts` — all marked TODO for a content swap. NavBar anchors wired (`#about/#skills/#projects/#resume/#contact`); Hero "See my work" → `#projects`; `#top` anchor on `<main>` (removed the duplicate id from the Hero section).

**Verified:** lint clean, production build passes (static prerender), dev SSR renders every section + all nav ids.

**TODO (content swap):** real profile details, about copy, skills, projects (+links), experience/education, socials, and the resume PDF. Phase 5 "Chatbot" not yet built — needs an API key/backend; treat as a follow-up feature.
