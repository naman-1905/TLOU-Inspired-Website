import { cn } from "@/lib/utils";
import type { MouseEventHandler, ReactNode } from "react";

interface CardProps {
  className?: string;
  children: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: MouseEventHandler<HTMLElement>;
}

/** Surface card with a soft hover lift + warm glow. Renders <a> when `href` is set. */
export function Card({ className, children, href, target, rel, onClick }: CardProps) {
  const cls = cn(
    "group relative overflow-hidden rounded-2xl border border-primary/10 bg-raised p-6",
    "transition-all duration-500 ease-out",
    "hover:-translate-y-1 hover:border-rust/40 hover:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.9)]",
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel ?? (target === "_blank" ? "noreferrer noopener" : undefined)}
        onClick={onClick}
        className={cls}
      >
        {children}
      </a>
    );
  }

  return (
    <div onClick={onClick} className={cls}>
      {children}
    </div>
  );
}
