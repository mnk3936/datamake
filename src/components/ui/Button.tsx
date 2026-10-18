import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  light?: boolean;
  className?: string;
  onClick?: () => void;
}

/**
 * Minimal, editorial CTA button.
 *
 * Default (dark surface): white outline + white text.
 * `light` (light surface):  dark fill + white text.
 *
 * Hover effect: a thin animated gradient underline sweep + subtle glow.
 */
export function Button({
  href,
  children,
  light = false,
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`dm-btn group relative inline-flex h-11 items-center gap-2 px-7 text-[11px] font-medium uppercase tracking-[0.14em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0BEF4] focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
        light
          ? "border border-white/25 text-white hover:border-[#C0BEF4]/60 hover:text-[#C0BEF4]"
          : "border border-[color:var(--fg-a)]/20 text-[color:var(--fg-a)] hover:border-[#C0BEF4]/60 hover:text-[#C0BEF4]"
      } ${className}`}
    >
      {children}

      {/* Animated underline on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #12004C, #C0BEF4, #12004C)",
        }}
      />
    </a>
  );
}
