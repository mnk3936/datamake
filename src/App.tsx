import { useRef } from "react";
import { THEME_CSS } from "./constants/site";
import { useTheme } from "./hooks/useTheme";
import { useRoute } from "./hooks/useRoute";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { Navbar } from "./components/sections/Navbar";
import { HomeSection } from "./components/sections/HomeSection";
import { WhatWeDoSection } from "./components/sections/WhatWeDoSection";
import { HowItWorksSection } from "./components/sections/HowItWorksSection";
import { PartnerSection } from "./components/sections/PartnerSection";
import { ContactDock } from "./components/ui/ContactDock";
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { TermsPage } from "./pages/TermsPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { SecurityPage } from "./pages/SecurityPage";

export default function App() {
  const { theme, isDark, toggle } = useTheme();
  const { route } = useRoute();
  const rootRef = useRef<HTMLDivElement>(null);
  useSmoothScroll(route);
  useScrollReveal(rootRef, route);

  return (
    <div
      ref={rootRef}
      className={`dm-root dm-${theme} bg-[color:var(--bg-a)] text-[color:var(--fg-a)] antialiased`}
      style={{ fontFamily: "'Garet', Inter, system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400&family=Inter:wght@400;500&display=swap');
        ${THEME_CSS}
      `}</style>

      <Navbar isDark={isDark} onToggleTheme={toggle} />

      {route === "terms" && <TermsPage />}
      {route === "privacy" && <PrivacyPage />}
      {route === "security" && <SecurityPage />}
      {route === "home" && (
        <>
          <HomeSection />
          <WhatWeDoSection />
          <HowItWorksSection />
          <PartnerSection />
        </>
      )}

      <ContactDock />
      <ScrollToTop />
    </div>
  );
}
