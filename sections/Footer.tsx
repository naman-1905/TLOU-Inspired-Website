import { profile } from "@/data/profile";
import { franchise } from "@/data/lore";

/** Minimal footer with copyright, a themed attribution, and back-to-top. */
export function Footer() {
  return (
    <footer className="border-t border-primary/10 px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        <span className="flex flex-col items-center gap-1 text-xs tracking-wide">
          <span>
            Themed after <span className="text-primary/80">{franchise.title}</span> — a story by {franchise.studio} · score by {franchise.composer}.
          </span>
          <span className="text-muted/70">Grown with Next.js, React Three Fiber & a little patience.</span>
        </span>
        <a href="#top" className="transition-colors hover:text-primary">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
