import type { ReactNode } from "react";
import { Mark } from "./Mark";

export function Label({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center justify-center gap-2 text-[11px] font-medium uppercase tracking-wide">
      <Mark className="text-blue-500" />
      {children}
    </p>
  );
}
