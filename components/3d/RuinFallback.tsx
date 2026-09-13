/**
 * CSS/SVG atmospheric still of the overgrown ruin. Used as:
 *  1. the loading placeholder while the 3D chunk streams in (same size → no CLS), and
 *  2. the permanent fallback on mobile / reduced-motion / no-WebGL.
 * Pure markup + CSS — no WebGL, no JS. Fireflies pulse subtly and freeze under
 * `prefers-reduced-motion` via the global override in globals.css.
 */

const GRASS = Array.from({ length: 44 }, (_, i) => ({
  x: 120 + i * 23 + (i % 3) * 6,
  h: 16 + ((i * 7) % 24),
  lean: i % 2 ? 5 : -5,
}));

const FLIES = [
  { top: "30%", left: "42%", d: "0s" },
  { top: "46%", left: "60%", d: "1.2s" },
  { top: "38%", left: "53%", d: "0.6s" },
  { top: "56%", left: "47%", d: "1.8s" },
  { top: "34%", left: "66%", d: "2.4s" },
];

export default function RuinFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* base radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,#2a2a24_0%,#1a1a18_72%)]" />
      {/* soft firefly light bloom */}
      <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-teal/10 blur-3xl" />

      {/* silhouette: ruined wall + vines + grass */}
      <svg
        className="absolute inset-x-0 bottom-0 h-[58%] w-full"
        viewBox="0 0 1200 400"
        preserveAspectRatio="xMidYMax slice"
      >
        {/* ground strip */}
        <rect x="0" y="360" width="1200" height="40" fill="#20201d" />

        {/* wall blocks */}
        <g fill="#3a3a33">
          <rect x="470" y="210" width="90" height="150" rx="3" transform="rotate(-2 515 285)" />
          <rect x="560" y="170" width="120" height="190" rx="3" transform="rotate(1.5 620 265)" />
          <rect x="680" y="240" width="80" height="120" rx="3" transform="rotate(-3 720 300)" />
          <rect x="520" y="150" width="70" height="46" rx="3" transform="rotate(6 555 173)" />
        </g>

        {/* vines */}
        <g stroke="#3d4a34" strokeWidth="4" fill="none" strokeLinecap="round">
          <path d="M500 200 C 480 260, 520 300, 505 360" />
          <path d="M620 160 C 640 240, 600 300, 625 360" />
          <path d="M720 250 C 700 300, 740 330, 720 360" />
        </g>

        {/* grass blades */}
        <g stroke="#4a6b6b" strokeWidth="2.5" strokeLinecap="round">
          {GRASS.map((g, i) => (
            <line key={i} x1={g.x} y1={362} x2={g.x + g.lean} y2={362 - g.h} />
          ))}
        </g>
      </svg>

      {/* fireflies */}
      {FLIES.map((f, i) => (
        <span
          key={i}
          className="animate-cue absolute size-1.5 rounded-full bg-[#e8e4d8] shadow-[0_0_10px_2px_rgba(232,228,216,0.55)]"
          style={{ top: f.top, left: f.left, animationDelay: f.d }}
        />
      ))}
    </div>
  );
}
