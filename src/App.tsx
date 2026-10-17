import { useRef } from "react";
import { THEME_CSS } from "./constants/site";
import { useTheme } from "./hooks/useTheme";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { Navbar } from "./components/sections/Navbar";
import { HomeSection } from "./components/sections/HomeSection";
import { WhatWeDoSection } from "./components/sections/WhatWeDoSection";
import { HowItWorksSection } from "./components/sections/HowItWorksSection";
import { PartnerSection } from "./components/sections/PartnerSection";

export default function App() {
  const { theme, isDark, toggle } = useTheme();
  const rootRef = useRef<HTMLDivElement>(null);
  useScrollReveal(rootRef);

  return (
    <div
      ref={rootRef}
      className={`dm-root dm-${theme} bg-[color:var(--bg-a)] text-[color:var(--fg-a)] antialiased`}
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400&family=Inter:wght@400;500&display=swap');
        html{scroll-behavior:smooth}
        ${THEME_CSS}
        @media (prefers-reduced-motion:reduce){
          html{scroll-behavior:auto}
        }
      `}</style>

      <Navbar isDark={isDark} onToggleTheme={toggle} />
      <HomeSection />
      <WhatWeDoSection />
      <HowItWorksSection />
      <PartnerSection />
    </div>
  );
}
