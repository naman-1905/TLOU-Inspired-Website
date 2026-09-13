# PROGRESS.md — Phase Log

One entry per completed phase. Update at the end of every session. See `AGENT.md` (local) for the granular log.

## Status
| Phase | Name | Status |
| --- | --- | --- |
| 0 | Scaffold | ✅ done |
| 1 | Design system | ✅ done |
| 2 | Hero + 3D overgrown ruin | ⬜ pending |
| 3 | About + Skills | ⬜ pending |
| 4 | Projects | ⬜ pending |
| 5 | Resume + Contact + Chatbot | ⬜ pending |
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
