import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useScrollReveal(
  rootRef: RefObject<HTMLElement | null>,
  route?: string
) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root || (route && route !== "home")) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const revealItems = root.querySelectorAll<HTMLElement>(
        [
          "#home > div > h1",
          "#home > div > p",
          "#what-we-do > div > h2",
          "#what-we-do > div > p",
          "#how-it-works > div > h2",
          "#partner > div > h2",
        ].join(",")
      );

      revealItems.forEach((element) => {
        gsap.fromTo(
          element,
          {
            autoAlpha: 0,
            y: 12,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      const cardGroups = root.querySelectorAll<HTMLElement>(
        [
          "#what-we-do > div > .grid",
          "#how-it-works > div > ol",
          "#partner > div > .grid",
        ].join(",")
      );

      cardGroups.forEach((group) => {
        const cards = Array.from(group.children) as HTMLElement[];
        if (!cards.length) return;

        gsap.fromTo(
          cards,
          {
            autoAlpha: 0,
            y: 10,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.07,
            ease: "power2.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: group,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
      ScrollTrigger.refresh();
    }, root);

    return () => {
      ctx.revert();
    };
  }, [rootRef, route]);
}
