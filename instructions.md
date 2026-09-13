# instructions.md — How to Run, Conventions & How to Keep Improving

Read this first in a new session. Then read `PLAN.md`, `DECISIONS.md`, `PROGRESS.md`. Resume from the next incomplete phase in `PROGRESS.md` and keep improving per `improvements.md`.

## Run it
```bash
npm install          # already done
npm run dev          # http://localhost:3000
npm run build        # production build (used for perf audits)
npm start            # serve the production build
npm run lint         # eslint
```

## Conventions
- **App Router**, no `src/` dir. Import alias `@/*` → project root.
- All R3F components live in `components/3d/`, are `'use client'`, and are imported via `next/dynamic({ ssr: false })` with a same-height fallback.
- Motion: Lenis provider wraps the app; GSAP `ScrollTrigger` driven off `gsap.ticker`; use `@gsap/react` `useGSAP`. Respect `prefers-reduced-motion` (static fallback everywhere).
- Content is data-driven from `data/*.ts`. Placeholders are prefixed `TODO:`.
- **Copyright:** inspired-only. No game assets/names/logos. Original low-poly 3D + procedural textures only.

## Do / Don't
- ✅ Improve after every phase: research TLOU themes, add a feature or 3D element, update `improvements.md` + this file.
- ✅ Log everything to `AGENT.md` (local) and one line per phase in `PROGRESS.md`.
- ✅ Push after each completed phase (`git add -A && git commit && git push`).
- ❌ Don't commit `AGENT.md` (it's gitignored).
- ❌ Don't add a backend, auth, DB, API routes, or deploy config.
- ❌ Don't touch anything outside this folder.
- ❌ Don't re-litigate locked decisions in `DECISIONS.md`.

## Push cadence
After each phase (and after any significant improvement pass):
```bash
git add -A
git commit -m "Phase N: <summary>"
git push origin main
```
