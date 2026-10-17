import { useState, useEffect } from "react";

export type Route = "home" | "terms" | "privacy" | "security";

function parseHash(hash: string): Route {
  const clean = hash.replace(/^#\/?/, "").toLowerCase();
  if (clean === "terms" || clean.startsWith("terms")) return "terms";
  if (clean === "privacy" || clean.startsWith("privacy")) return "privacy";
  if (clean === "security" || clean.startsWith("security") || clean === "compliance")
    return "security";
  return "home";
}

export function useRoute() {
  const [route, setRoute] = useState<Route>(() => {
    if (typeof window !== "undefined") {
      return parseHash(window.location.hash);
    }
    return "home";
  });

  useEffect(() => {
    const onHashChange = () => {
      const nextRoute = parseHash(window.location.hash);
      setRoute(nextRoute);
      if (nextRoute !== "home") {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = (next: Route | string) => {
    if (next === "home") {
      window.location.hash = "#home";
    } else {
      window.location.hash = `#/${next}`;
    }
  };

  return { route, navigate };
}
