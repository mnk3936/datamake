/**
 * Datamake: complete scroll site in a single file (app.tsx).
 * Part 1: the approved "Our process" panel (unchanged design).
 * Part 2: the full site, with a light/dark theme toggle in the header.
 * Subtle GSAP scroll reveals added without changing the appearance.
 *
 * Fonts (Merriweather + Inter) are loaded inside the component via @import.
 * Requires Tailwind CSS and GSAP.
 */

import { useEffect, useRef, useState, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SERIF = {
  fontFamily: "'Merriweather', Georgia, 'Times New Roman', serif",
};

// ─────────────────────────── Part 1: "Our process" panel ───────────────────────────
// Deterministic "random" so server and client render the same panelPixels.
const PANEL_COLS = 12;
const PANEL_ROWS = 8;

const panelPixels = Array.from(
  { length: PANEL_COLS * PANEL_ROWS },
  (_, i) => {
    const x = Math.sin((i + 1) * 12.9898) * 43758.5453;
    return x - Math.floor(x);
  }
);

function PanelMark({ className = "" }: { className?: string }) {
  return (
    <svg
      width="22"
      height="12"
      viewBox="0 0 22 12"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M3 1h16l-2.5 4H.5L3 1Z" fill="currentColor" />
      <path
        d="M3 7h16l-2.5 4H.5L3 7Z"
        fill="currentColor"
        opacity="0.45"
      />
    </svg>
  );
}

function PanelPixelField() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 grid"
      style={{
        gridTemplateColumns: `repeat(${PANEL_COLS}, 1fr)`,
        gridTemplateRows: `repeat(${PANEL_ROWS}, 1fr)`,
        maskImage:
          "linear-gradient(to bottom, black 20%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 20%, transparent 100%)",
      }}
    >
      {panelPixels.map((r, i) => (
        <span
          key={i}
          className={r > 0.5 ? "bg-white" : "bg-blue-950"}
          style={{
            opacity:
              r > 0.5 ? 0.04 + (r - 0.5) * 0.4 : 0.05 + r * 0.3,
          }}
        />
      ))}
    </div>
  );
}

function DatamakeInfoPanel() {
  return (
    <div className="relative z-10 mt-20 w-full max-w-5xl">
      {/* Dashed guide frame with corner squares */}
      <div className="relative border border-dashed border-[color:var(--dash2)] p-3 md:p-4">
        {[
          "-left-[3px] -top-[3px]",
          "-right-[3px] -top-[3px]",
          "-bottom-[3px] -left-[3px]",
          "-bottom-[3px] -right-[3px]",
        ].map((pos) => (
          <span
            key={pos}
            aria-hidden="true"
            className={`absolute h-[6px] w-[6px] border border-[color:var(--corner)] bg-[color:var(--bg-a)] ${pos}`}
          />
        ))}

        <div className="grid grid-cols-1 divide-y divide-[color:var(--line-a)] border border-[color:var(--line-a)] bg-[color:var(--bg-a)] md:grid-cols-3 md:divide-x md:divide-y-0">
          {/* Our process */}
          <section className="flex min-h-[260px] flex-col justify-between gap-10 p-7 text-left md:p-8">
            <PanelMark className="text-[color:var(--accent)]" />

            <div>
              <h3
                className="text-xl leading-snug text-[color:var(--fg-a)]"
                style={SERIF}
              >
                Our process
              </h3>

              <p className="mt-3 max-w-[34ch] text-[13px] leading-relaxed text-[color:var(--mut-a)]">
                Datamake sources diagnostic data from partner diagnostic
                centers and builds it around the one task your model has to
                do. We define it with you, curate it, check it and clean it.
              </p>
            </div>
          </section>

          {/* Scale and trust */}
          <section className="relative flex min-h-[260px] flex-col justify-between gap-10 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 p-7 text-left md:p-8">
            <PanelPixelField />

            <PanelMark className="relative text-white" />

            <div className="relative">
              <h3
                className="text-xl leading-snug text-white"
                style={SERIF}
              >
                Scale and trust
              </h3>

              <dl className="mt-4 flex gap-8">
                <div>
                  <dd
                    className="text-3xl font-light text-white"
                    style={SERIF}
                  >
                    50+
                  </dd>
                  <dt className="mt-1 text-xs text-blue-100">
                    Partner centers
                  </dt>
                </div>

                <div>
                  <dd
                    className="text-3xl font-light text-white"
                    style={SERIF}
                  >
                    2.5M+
                  </dd>
                  <dt className="mt-1 text-xs text-blue-100">
                    Verified records
                  </dt>
                </div>
              </dl>
            </div>
          </section>

          {/* Why it stays useful */}
          <section className="flex min-h-[260px] flex-col justify-between gap-10 p-7 text-left md:p-8">
            <PanelMark className="text-[color:var(--accent)]" />

            <div>
              <h3
                className="text-xl leading-snug text-[color:var(--fg-a)]"
                style={SERIF}
              >
                Why it stays useful
              </h3>

              <p className="mt-3 max-w-[34ch] text-[13px] leading-relaxed text-[color:var(--mut-a)]">
                Our ground truths are dynamic. When diagnostic practice
                changes, your data changes with it.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────── Part 2: Site ───────────────────────────

const EMAIL = "adeel@categoricalanalytics.com";

const COLS = 14;
const ROWS = 8;

const pixels = Array.from({ length: COLS * ROWS }, (_, i) => {
  const x = Math.sin((i + 3) * 78.233) * 43758.5453;
  return x - Math.floor(x);
});

function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="10"
      viewBox="0 0 22 12"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M3 1h16l-2.5 4H.5L3 1Z" fill="currentColor" />
      <path
        d="M3 7h16l-2.5 4H.5L3 7Z"
        fill="currentColor"
        opacity="0.45"
      />
    </svg>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center justify-center gap-2 text-[11px] font-medium uppercase tracking-wide">
      <Mark className="text-blue-500" />
      {children}
    </p>
  );
}

function PixelBlock({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
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
              opacity:
                r > 0.5 ? 0.05 + (r - 0.5) * 0.45 : 0.05 + r * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative">{children}</div>
    </div>
  );
}

function Button({
  href,
  children,
  light = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <a
      href={href}
      className={`inline-flex h-11 items-center px-6 text-xs font-medium uppercase tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
        light
          ? "bg-white text-neutral-950 hover:bg-blue-100"
          : "bg-[color:var(--btn-bg)] text-[color:var(--btn-fg)] hover:bg-blue-700 hover:text-white"
      }`}
    >
      {children}
    </a>
  );
}

function Section({
  id,
  dark = false,
  children,
}: {
  id: string;
  dark?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-14 border-t border-[color:var(--sec-line)] ${
        dark
          ? "bg-black text-white"
          : "bg-[color:var(--bg-a)] text-[color:var(--fg-a)]"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl border-x border-dashed px-6 py-24 md:px-14 ${
          dark ? "border-white/15" : "border-[color:var(--dash-a)]"
        }`}
      >
        {children}
      </div>
    </section>
  );
}

const THEME_CSS = `
.dm-light{
  color-scheme:light;
  --bg-a:#fff;
  --fg-a:#0a0a0a;
  --mut-a:#525252;
  --mut2-a:#404040;
  --soft-a:#a3a3a3;
  --line-a:#e5e5e5;
  --dash-a:rgba(0,0,0,.1);
  --dash2:rgba(0,0,0,.15);
  --corner:rgba(0,0,0,.25);
  --accent:#2563eb;
  --bg-blur:rgba(255,255,255,.9);
  --btn-bg:#0a0a0a;
  --btn-fg:#fff;
  --card-ring:rgba(255,255,255,.3);
  --sec-line:transparent
}
.dm-dark{
  color-scheme:dark;
  --bg-a:#0b0b0f;
  --fg-a:#f4f4f5;
  --mut-a:#a1a1aa;
  --mut2-a:#d4d4d8;
  --soft-a:#63636d;
  --line-a:rgba(255,255,255,.12);
  --dash-a:rgba(255,255,255,.1);
  --dash2:rgba(255,255,255,.14);
  --corner:rgba(255,255,255,.3);
  --accent:#60a5fa;
  --bg-blur:rgba(11,11,15,.85);
  --btn-bg:#fff;
  --btn-fg:#0a0a0a;
  --card-ring:rgba(255,255,255,.14);
  --sec-line:rgba(255,255,255,.08)
}

@media (prefers-reduced-motion:no-preference){
  .dm-root *{
    transition:background-color .25s ease,border-color .25s ease,color .25s ease
  }
}
`;

const h2 =
  "mx-auto mt-6 max-w-3xl text-center text-3xl font-light leading-[1.2] tracking-tight md:text-5xl";

export default function DatamakeSite() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    try {
      const saved = localStorage.getItem("dm-theme");
      if (saved === "light" || saved === "dark") return saved;
    } catch {
      // localStorage may be unavailable.
    }
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });
  const isDark = theme === "dark";

  // Root reference scopes GSAP animations to this site.
  const rootRef = useRef<HTMLDivElement>(null);

  // ─────────────────────────── Subtle GSAP scroll animations ───────────────────────────
  useEffect(() => {
    const root = rootRef.current;

    if (!root) return;

    // Keep the original static presentation for reduced-motion users.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Reveal section headings and introductory paragraphs.
      // The approved Our process panel is deliberately excluded.
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

      // Gently reveal existing cards with a small stagger.
      // No scaling, parallax, or layout changes.
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
    }, root);

    // Clean up animations and ScrollTriggers on unmount.
    return () => {
      ctx.revert();
    };
  }, []);

  const toggle = () => {
    const next = isDark ? "light" : "dark";

    setTheme(next);

    try {
      localStorage.setItem("dm-theme", next);
    } catch {
      // The theme still changes if localStorage is unavailable.
    }
  };

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

      {/* Top bar + nav */}
      <div className="bg-black py-2 text-center text-[11px] text-neutral-400">
        Diagnostic datasets, built for your task
      </div>

      <header className="sticky top-0 z-30 border-b border-[color:var(--line-a)] bg-[color:var(--bg-blur)] backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 md:px-14">
          <a
            href="#home"
            className="flex items-center gap-2.5 text-xl"
            style={SERIF}
          >
            <span aria-hidden="true" className="grid grid-cols-3 gap-[2px]">
              {[1, 1, 0.4, 1, 0.4, 1, 0.4, 1, 1].map((o, i) => (
                <span
                  key={i}
                  className="h-[5px] w-[5px] bg-[color:var(--accent)]"
                  style={{ opacity: o }}
                />
              ))}
            </span>
            Datamake
          </a>

          <nav className="hidden gap-8 text-[13px] text-[color:var(--mut-a)] md:flex">
            <a href="#what-we-do" className="hover:text-[color:var(--fg-a)]">
              What we do
            </a>
            <a
              href="#how-it-works"
              className="hover:text-[color:var(--fg-a)]"
            >
              How it works
            </a>
            <a href="#partner" className="hover:text-[color:var(--fg-a)]">
              Partner with us
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              aria-label={
                isDark ? "Switch to light theme" : "Switch to dark theme"
              }
              title={isDark ? "Light theme" : "Dark theme"}
              className="inline-flex h-9 w-9 items-center justify-center border border-[color:var(--line-a)] text-[color:var(--fg-a)] transition-colors hover:border-[color:var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              {isDark ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z" />
                </svg>
              )}
            </button>

            <a
              href="#partner"
              className="bg-[color:var(--btn-bg)] px-4 py-2 text-[11px] font-medium uppercase tracking-wide text-[color:var(--btn-fg)] hover:bg-blue-700 hover:text-white"
            >
              Partner with us
            </a>
          </div>
        </div>
      </header>

      {/* HOME */}
      <Section id="home">
        <h1
          className="max-w-3xl pt-6 text-4xl font-light leading-[1.15] tracking-tight md:text-6xl"
          style={SERIF}
        >
          Medical AI runs on data.{" "}
          <span className="text-[color:var(--soft-a)]">
            We source it. You make it work.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[color:var(--mut2-a)]">
          Diagnostic datasets, built for your task, checked and cleaned before
          they reach you.
        </p>

        <div className="mt-8">
          <Button href="#partner">Partner with us</Button>
        </div>

        <PixelBlock className="mt-14 px-4 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-2xl rounded-sm bg-[color:var(--card-ring)] p-2 backdrop-blur-sm">
            <div className="bg-[color:var(--bg-a)] px-6 py-8 text-left md:px-8">
              <p
                className="text-xl font-light leading-snug md:text-2xl"
                style={SERIF}
              >
                Your model is only as good as what it learns from.
              </p>

              <p className="mt-4 text-[13px] leading-relaxed text-[color:var(--mut-a)]">
                A model trained on data that is mismatched, messy or out of
                date will pass that on, in every result it gives.
              </p>
            </div>
          </div>
        </PixelBlock>

        {/* Approved panel: unchanged */}
        <div className="flex justify-center">
          <DatamakeInfoPanel />
        </div>

        <p
          className="mt-14 text-center text-2xl font-light md:text-3xl"
          style={SERIF}
        >
          You run it on the model.
        </p>
      </Section>

      {/* WHAT WE DO */}
      <Section id="what-we-do" dark>
        <Label>What we do</Label>

        <h2 className={h2} style={SERIF}>
          Diagnostic datasets, built for{" "}
          <span className="text-neutral-500">
            the task your model has to do
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-center text-[15px] leading-relaxed text-neutral-400">
          A general dataset teaches a general lesson. Your model has a specific
          job, so we build the data for that job.
        </p>

        <div className="mt-14 grid divide-y divide-white/15 border border-white/15 md:grid-cols-4 md:divide-x md:divide-y-0">
          {[
            ["Source", "Partner diagnostic centers."],
            ["Fit", "Defined with you, around your task."],
            ["Currency", "Ground truths that update."],
            ["Check", "Quality verified before delivery."],
          ].map(([title, body]) => (
            <div
              key={title}
              className="flex min-h-[220px] flex-col justify-between p-7 text-left"
            >
              <Mark className="text-blue-500" />

              <div>
                <h3 className="text-xl text-white" style={SERIF}>
                  {title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-neutral-400">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section id="how-it-works">
        <Label>How it works</Label>

        <h2 className={h2} style={SERIF}>
          Four steps between your task{" "}
          <span className="text-[color:var(--soft-a)]">
            and your training data
          </span>
        </h2>

        <ol className="mt-14 grid divide-y divide-[color:var(--line-a)] border border-[color:var(--line-a)] md:grid-cols-4 md:divide-x md:divide-y-0">
          {[
            ["Define", "We agree with you exactly what the data must do."],
            [
              "Curate",
              "We build the dataset around that agreement, from our partner centers.",
            ],
            ["Check", "We test quality before anything reaches you."],
            [
              "Clean",
              "We prepare it so you can run it straight on the model.",
            ],
          ].map(([title, body], i) => (
            <li
              key={title}
              className="flex min-h-[240px] flex-col justify-between p-7 text-left"
            >
              <span
                className="text-4xl font-light text-[color:var(--accent)]"
                style={SERIF}
              >
                {i + 1}
              </span>

              <div>
                <h3 className="text-xl" style={SERIF}>
                  {title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[color:var(--mut-a)]">
                  {body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <PixelBlock className="mt-px px-6 py-12 text-center">
          <p
            className="text-xl font-light text-white md:text-2xl"
            style={SERIF}
          >
            Four steps, all ours. The running is yours.
          </p>
        </PixelBlock>
      </Section>

      {/* PARTNER WITH US */}
      <Section id="partner" dark>
        <Label>Partner with us</Label>

        <h2 className={h2} style={SERIF}>
          Partner with us
        </h2>

        <div className="mt-14 grid divide-y divide-white/15 border border-white/15 md:grid-cols-2 md:divide-x md:divide-y-0">
          <div className="flex min-h-[300px] flex-col justify-between gap-10 p-8 text-left">
            <div>
              <Mark className="text-blue-500" />

              <h3 className="mt-6 text-2xl" style={SERIF}>
                If you build medical AI
              </h3>

              <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-neutral-400">
                Tell us your task. We will tell you what data it needs and how
                we would build it.
              </p>
            </div>

            <div>
              <Button href={`mailto:${EMAIL}`} light>
                Talk to us about data
              </Button>
            </div>
          </div>

          <div className="flex min-h-[300px] flex-col justify-between gap-10 p-8 text-left">
            <div>
              <Mark className="text-blue-500" />

              <h3 className="mt-6 text-2xl" style={SERIF}>
                If you run a diagnostic center
              </h3>

              <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-neutral-400">
                The reports your center produces every day can help train AI
                that improves diagnosis.
              </p>
            </div>

            <div>
              <Button href={`mailto:${EMAIL}`} light>
                Become a partner center
              </Button>
            </div>
          </div>
        </div>

        <footer className="mt-16 border-t border-white/15 pt-8">
          <div className="flex flex-col gap-2 text-[13px] text-neutral-400 md:flex-row md:justify-between">
            <p>
              Contact Datamake, an entity of Categorical Analytics Pvt Ltd,
              Hyderabad
            </p>

            <a
              href={`mailto:${EMAIL}`}
              className="text-white underline underline-offset-4 hover:text-blue-300"
            >
              {EMAIL}
            </a>
          </div>

          {/* Big "datamake" - full width of content, half vw height */}
          <div
            className="mt-12 flex h-[50vw] w-full items-center justify-center overflow-hidden border-t border-white/10 select-none"
            aria-label="datamake"
            role="img"
          >
            <svg
              viewBox="0 0 1000 500"
              className="h-full w-full select-none"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="footer-wordmark-grad"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.75" />
                </linearGradient>
              </defs>
              <text
                x="50%"
                y="54%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="url(#footer-wordmark-grad)"
                style={{
                  ...SERIF,
                  fontSize: "215px",
                  letterSpacing: "-0.035em",
                  fontWeight: 300,
                }}
              >
                datamake
              </text>
            </svg>
          </div>
        </footer>
      </Section>
    </div>
  );
}
