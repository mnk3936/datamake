import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  dark?: boolean;
  children: ReactNode;
}

export function Section({ id, dark = false, children }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-14 border-t border-[color:var(--sec-line)] ${
        dark
          ? "bg-black text-white [--background:#000000] [--foreground:#ffffff] [--border:rgba(255,255,255,0.15)] [--muted-foreground:#a1a1aa]"
          : "bg-[color:var(--bg-a)] text-[color:var(--fg-a)]"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl border-x border-dashed px-6 py-24 md:px-14 ${
          dark ? "border-white/15" : "border-[color:var(--dash-a)]"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
