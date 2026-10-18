import type { ReactNode } from "react";

interface GradientBlockProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

const DEEP = "#12004C";
const LIGHT = "#C0BEF4";

export function PixelBlock({
  children,
  className = "",
  contentClassName = "",
}: GradientBlockProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: `linear-gradient(120deg, ${DEEP}, ${LIGHT}, ${DEEP})`,
        backgroundSize: "300% 300%",
        animation: "gb-shift 14s ease-in-out infinite",
      }}
    >
      <style>{`
        @keyframes gb-shift {
          0%, 100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        @keyframes gb-drift-a {
          0%, 100% { transform: translate(-10%, -10%) scale(1); }
          50%      { transform: translate(30%, 20%) scale(1.3); }
        }
        @keyframes gb-drift-b {
          0%, 100% { transform: translate(20%, 30%) scale(1.2); }
          50%      { transform: translate(-20%, -10%) scale(0.9); }
        }
        @keyframes gb-drift-c {
          0%, 100% { transform: translate(0%, 0%) scale(1); }
          50%      { transform: translate(-30%, 25%) scale(1.25); }
        }
        @media (prefers-reduced-motion: reduce) {
          .gb-anim { animation: none !important; }
        }
      `}</style>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span
          className="gb-anim absolute -left-1/4 -top-1/4 h-3/4 w-3/4 rounded-full blur-3xl"
          style={{
            background: LIGHT,
            opacity: 0.55,
            animation: "gb-drift-a 18s ease-in-out infinite",
          }}
        />
        <span
          className="gb-anim absolute -bottom-1/4 -right-1/4 h-3/4 w-3/4 rounded-full blur-3xl"
          style={{
            background: DEEP,
            opacity: 0.7,
            animation: "gb-drift-b 22s ease-in-out infinite",
          }}
        />
        <span
          className="gb-anim absolute left-1/3 top-1/3 h-1/2 w-1/2 rounded-full blur-3xl"
          style={{
            background: LIGHT,
            opacity: 0.35,
            animation: "gb-drift-c 26s ease-in-out infinite",
          }}
        />
      </div>

      <div className={`relative ${contentClassName}`}>{children}</div>
    </div>
  );
}