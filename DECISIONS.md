# DECISIONS.md — Locked Choices (do not re-litigate)

These are the decisions future sessions must NOT re-decide. If a change is truly needed, log it in `AGENT.md` first and update this file.

## Theme & Copyright Guardrails (non-negotiable)
- **Theme:** The Last of Us-**inspired** only — overgrown post-civilization mood, muted survival-era palette, quiet devastation, fireflies-in-the-dark.
- **No game assets.** No Naughty Dog / Sony / PlayStation logos, screenshots, character art, silhouettes, or names (Joel, Ellie, Fireflies, Clickers, etc.) in any string, alt text, filename, or route.
- All 3D geometry is **original** low-poly / stylized / procedural. No ripped textures, models, sound, or fonts.
- Fonts must be free / OFL / Apache-licensed (Fraunces, Inter are used).
- Palette is generic-muted-survival — never caption shipped UI with game character names or titles. Internal code comments may reference the *vibe*.

## Scope
- **Frontend only.** No backend, no auth, no DB, no API routes, no deploy config (no `vercel.json`, no Firebase, no CI). Local dev project. Contact form is UI-only (mailto fallback + themed toast).

## Stack (installed versions — Sep 2026)
| Package | Version | Notes |
| --- | --- | --- |
| next | 16.3.5 | App Router. **Deviation from plan's pinned 15** — kept latest stable; R3F v9 + React 19 compatible. |
| react / react-dom | 19.2.8 | |
| typescript | 5.x | strict mode on |
| tailwindcss | v4 | via `@tailwindcss/postcss`, `@theme` in globals.css |
| three | 0.186.0 | transpiled via `transpilePackages` |
| @react-three/fiber | 9.7.0 | React 19 compatible |
| @react-three/drei | 10.7.8 | Sparkles, Float, etc. |
| framer-motion | 13.2.0 | UI transitions, AnimatePresence |
| gsap + @gsap/react | 3.15 / 2.1 | ScrollTrigger + `useGSAP` |
| lenis | 1.3.26 | smooth scroll via `lenis/react` |
| lucide-react | 1.x | icons |

## Design System (locked)
- **Palette (Tailwind tokens):**
  - `bg.base` `#1A1A18` (near-black charcoal)
  - `bg.raised` `#242420` (slightly lighter surface)
  - `earth.moss` `#3D4A34` (desaturated moss green)
  - `earth.rust` `#8B4A32` (rust / clay)
  - `earth.teal` `#4A6B6B` (muted teal)
  - `text.primary` `#E8E4D8` (warm off-white)
  - `text.muted` `#9A9688` (faded parchment)
- **Type:** Display = **Fraunces** (variable, `next/font/google`, `display:'swap'`) — worn humanist serif for headings. Body = **Inter**.
- **Motion vocabulary:** "grow in" reveals (scale 0.95 + opacity 0, organic ease-out), slow dissolve/fade transitions, film grain + vignette overlay, restrained hover glow/lift, drifting dust/spore/firefly particles.
- **All motion respects `prefers-reduced-motion`** — static fallback for every animated component.

## Folder Conventions
```
app/            layout.tsx, page.tsx, globals.css
components/3d/  R3F components (all 'use client')
components/motion/  LenisProvider + motion primitives
components/ui/  Button, Card, NavBar, SectionWrapper, GrainOverlay, ChatWidget, etc.
sections/       Hero, About, Skills, Projects, Resume, Contact
data/           profile.ts, projects.ts, skills.ts, experience.ts, socials.ts, chatbot.ts (typed exports)
lib/            hooks (useReducedMotion, useMediaQuery), utils
public/placeholders/  resume.pdf stub, project screenshots
```

## Critical R3F + Next.js Rules
- All R3F components are `'use client'`.
- 3D scenes imported via `next/dynamic({ ssr: false })` with a same-height loading placeholder (no CLS / hydration mismatch).
- `transpilePackages: ['three']` in next.config.ts.
- `<Canvas dpr={[1, 2]}>`; use `frameloop="demand"` for ambient-only scenes where possible.
- Dispose geometries/materials/textures on unmount to avoid GPU leaks.

## Lenis + GSAP Rules
- Single client provider (`components/motion/LenisProvider.tsx`) wraps `{children}` in root layout.
- Use `ReactLenis` from `lenis/react` with `options={{ autoRaf: false }}`.
- Drive Lenis + ScrollTrigger from `gsap.ticker` (one time base). `gsap.ticker.lagSmoothing(0)`.
- Register `ScrollTrigger` once at module level. Use `useGSAP` for cleanup.
- Skip Lenis entirely when `prefers-reduced-motion: reduce`.

## Placeholder Data Convention
- All swappable content lives in `data/*.ts` typed exports.
- Every placeholder string is prefixed `TODO:` so it's greppable.

## New Locked Choices (Phase 8-100)
- **Testing frameworks:** Vitest for component unit tests; Playwright for e2e smoke tests.
- **Writing format:** Plain `data/*.ts` exports (not MDX) for content, consistent with the placeholder convention.
- **Audio:** optional, off by default, original/CC0 ambience only (no external audio assets).
