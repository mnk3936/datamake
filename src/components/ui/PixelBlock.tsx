import type { ReactNode } from "react";

const COLS = 14;
const ROWS = 8;

const pixels = Array.from({ length: COLS * ROWS }, (_, i) => {
  const x = Math.sin((i + 3) * 78.233) * 43758.5453;
  return x - Math.floor(x);
});

interface PixelBlockProps {
  children: ReactNode;
  className?: string;
}

export function PixelBlock({ children, className = "" }: PixelBlockProps) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-500 to-blue-300 ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid"
        style={{
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gridTemplateRows: `repeat(${ROWS}, 1fr)`,
        }}
      >
        {pixels.map((r, i) => (
          <span
            key={i}
            className={r > 0.5 ? "bg-white" : "bg-blue-900"}
            style={{
              opacity: r > 0.5 ? 0.05 + (r - 0.5) * 0.45 : 0.05 + r * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative">{children}</div>
    </div>
  );
}
