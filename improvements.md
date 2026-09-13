# improvements.md — Enhancement Backlog & Ideas

Living backlog. After **each** phase, research The Last of Us themes online and add new game-inspired features + 3D/WebGL. Mark items `[x]` when done; keep the "Next up" list fresh so the build can run indefinitely.

## TLOU mood / thematic pillars (what to lean into)
- Overgrown ruins — nature reclaiming concrete, vines, moss, grass, broken structures.
- Quiet devastation & melancholy — restraint, negative space, weathered type.
- Fireflies in the dark — warm glowing points of light against charcoal (iconic).
- Survival-era palette — moss, rust, teal, parchment on charcoal.
- Hope amid decay — small living things persisting.

## 3D / WebGL roadmap
- [x] **OvergrownRuin** hero scene: low-poly crumbling wall + vines/grass geometry, drifting spore/firefly particles (drei `Sparkles`), slow ambient camera drift, moss/teal ambient + warm rust key light. (Phase 2)
- [ ] **FireflyField** — a second standalone R3F scene of hundreds of softly-pulsing glowing fireflies with mouse parallax; used as an atmospheric band between sections.
- [ ] **Vine growth on scroll** — a procedural vine/branch that "grows" (line draw / tube extrusion) as you scroll the About section.
- [ ] **Mossy terrain floor** — gentle displaced plane with vertex-colored moss gradient under the ruin for depth.
- [ ] **Depth-of-field / fog** — `drei` `<Environment>`/fog for atmospheric haze; consider postprocessing bloom (guarded, perf-aware).
- [ ] **Interactive parallax** — pointer-driven camera offset in hero (disabled on touch / reduced-motion).

## UX / content enhancements
- [x] Grain + vignette overlay, Lenis smooth scroll, GSAP "grow-in" reveals. (Phases 1–3)
- [ ] Custom cursor glow that follows the pointer (desktop only, subtle).
- [ ] Scroll progress "vine" indicator on the left edge.
- [ ] Section-to-section dissolve transitions via `AnimatePresence`.
- [ ] Keyboard-accessible skip link + focus-visible rings everywhere.
- [ ] Localized time-of-day accent (subtle) — e.g., a faint teal dawn vs warm dusk tint toggle.
- [ ] "Field notes" micro-copy: short atmospheric one-liners in section gaps (original text, no game quotes).

## Performance / a11y targets
- [ ] Lighthouse 90+ on Perf / A11y / Best Practices / SEO.
- [ ] 3D chunk code-split & loaded lazily; `frameloop="demand"` where idle.
- [ ] Mobile (<768px) + reduced-motion → CSS/SVG fallback, no WebGL.
- [ ] WCAG AA contrast (off-white on charcoal = ~11.5:1).

## Next up (keep this list alive)
1. FireflyField atmospheric band between Hero and About.
2. Vine-growth-on-scroll in About.
3. Scroll progress indicator + custom cursor glow.
4. Postprocessing bloom (guarded) on fireflies for that "glow in the dark" look.
5. Real project screenshots / profile content swap-in checklist.
