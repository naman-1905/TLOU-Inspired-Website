import { profile } from "@/data/profile";

/** Minimal footer with copyright, a quiet one-liner, and back-to-top. */
export function Footer() {
  return (
    <footer className="border-t border-primary/10 px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        <span className="text-xs tracking-wide">Grown with Next.js, React Three Fiber & a little patience.</span>
        <a href="#top" className="transition-colors hover:text-primary">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
