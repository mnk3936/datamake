import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  light?: boolean;
}

export function Button({ href, children, light = false }: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex h-11 items-center px-6 text-xs font-medium uppercase tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
        light
          ? "bg-white text-neutral-950 hover:bg-blue-100"
          : "bg-[color:var(--btn-bg)] text-[color:var(--btn-fg)] hover:bg-blue-700 hover:text-white"
      }`}
    >
      {children}
    </a>
  );
}
