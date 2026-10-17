import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Route } from "./useRoute";

export function useSmoothScroll(route: Route) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: !prefersReducedMotion,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      autoRaf: false,
    });

    lenisRef.current = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    lenis.on("scroll", ScrollTrigger.update);

    const onTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(onTicker);
    gsap.ticker.lagSmoothing(0);

    // Smooth anchor navigation handling (e.g. #what-we-do, #how-it-works, #partner, #home)
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>(
        "a[href*='#']"
      );
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Ignore routing hash links (#/terms, #/privacy, #/security) and empty hashes
      if (href.startsWith("#/") || href === "#") return;

      const hashIndex = href.indexOf("#");
      const hash = href.slice(hashIndex);

      if (hash === "#home" || hash === "#top") {
        e.preventDefault();
        window.history.pushState(null, "", "#home");
        lenis.scrollTo(0, { duration: 1.2 });
        return;
      }

      const targetElement = document.querySelector(hash);
      if (targetElement) {
        e.preventDefault();
        window.history.pushState(null, "", hash);
        // Offset for 56px sticky navbar
        lenis.scrollTo(targetElement as HTMLElement, {
          offset: -56,
          duration: 1.2,
        });
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      gsap.ticker.remove(onTicker);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // When switching routes or returning to home with an anchor, handle scroll gracefully
  useEffect(() => {
    if (!lenisRef.current) return;

    if (route !== "home") {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      const hash = window.location.hash;
      if (hash && hash !== "#home" && !hash.startsWith("#/")) {
        const timer = setTimeout(() => {
          const target = document.querySelector(hash);
          if (target && lenisRef.current) {
            lenisRef.current.scrollTo(target as HTMLElement, {
              offset: -56,
              duration: 1.0,
            });
          }
        }, 60);
        return () => clearTimeout(timer);
      }
    }
  }, [route]);

  return lenisRef;
}
