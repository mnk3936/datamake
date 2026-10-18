import type { ReactNode } from "react";
import { Mark } from "./Mark";

interface LabelProps {
  children: ReactNode;
  align?: "center" | "left";
  className?: string;
}

export function Label({
  children,
  align = "center",
  className = "",
}: LabelProps) {
  return (
    <p
      className={`flex items-center gap-2 text-[11px] font-medium uppercase tracking-wide ${
        align === "left" ? "justify-start text-left" : "justify-center"
      } ${className}`}
    >
      <Mark className="text-blue-500" />
      {children}
    </p>
  );
}
