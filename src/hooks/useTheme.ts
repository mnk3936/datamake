import { useState } from "react";

export type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem("dm-theme");
      if (saved === "light" || saved === "dark") return saved;
    } catch {
      // localStorage may be unavailable
    }
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  });

  const isDark = theme === "dark";

  const toggle = () => {
    const next = isDark ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("dm-theme", next);
    } catch {
      // localStorage may be unavailable
    }
  };

  return { theme, isDark, toggle };
}
