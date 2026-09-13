import { cn } from "@/lib/utils";
import type { MouseEventHandler, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 ease-out focus-visible:outline-none active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-rust text-primary hover:bg-[#9c5638] hover:shadow-[0_0_28px_-4px_rgba(139,74,50,0.55)]",
  secondary:
    "border border-primary/20 bg-raised/40 text-primary hover:border-teal/50 hover:bg-teal/10",
  ghost: "text-muted hover:text-primary",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  "aria-label"?: string;
}

/** Renders an <a> when `href` is provided, otherwise a <button>. */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  target,
  rel,
  onClick,
  disabled,
  ...rest
}: ButtonProps) {
  const cls = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel ?? (target === "_blank" ? "noreferrer noopener" : undefined)}
        onClick={onClick}
        aria-label={rest["aria-label"]}
        className={cls}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} aria-label={rest["aria-label"]} className={cls}>
      {children}
    </button>
  );
}
