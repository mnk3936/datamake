import { Fragment, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { SERIF } from "../../constants/site";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { PixelBlock } from "../ui/PixelBlock";
import { DatamakeInfoPanel } from "../DatamakeInfoPanel";

/* npm i gsap */

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* ───────── small decorative pieces (no new copy) ───────── */

const CSS = `
@keyframes hs-twinkle{0%,100%{opacity:.12}50%{opacity:1}}
.hs-px{animation:hs-twinkle var(--d,4s) ease-in-out var(--l,0s) infinite}
@keyframes hs-marquee{to{transform:translateX(-50%)}}
.hs-marquee-track{display:flex;width:max-content;animation:hs-marquee 36s linear infinite}
.hs-marquee:hover .hs-marquee-track{animation-play-state:paused}
@media (prefers-reduced-motion:reduce){.hs-px{animation:none;opacity:.6}.hs-marquee-track{animation:none}}
`;

// 8x8 "data matrix": a few cells softly pulse in the accent colour, like records being verified
const N = 8;
const cells = Array.from({ length: N * N }, (_, i) => {
  const x = Math.sin((i + 5) * 91.7) * 43758.5453;
  return x - Math.floor(x);
});

function DataMatrix() {
  const mask = "radial-gradient(circle at 65% 35%, black 25%, transparent 78%)";
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute right-0 top-2 hidden lg:grid"
      style={{
        gridTemplateColumns: `repeat(${N}, 10px)`,
        gap: 6,
        maskImage: mask,
        WebkitMaskImage: mask,
      }}
    >
      {cells.map((r, i) =>
        r > 0.7 ? (
          <span
            key={i}
            className="hs-px h-[10px] w-[10px] bg-[color:var(--accent)]"
            style={{ ["--d" as string]: `${3 + r * 3}s`, ["--l" as string]: `-${(r * 5).toFixed(2)}s` }}
          />
        ) : r > 0.4 ? (
          <span key={i} className="h-[10px] w-[10px] bg-[color:var(--line-a)]" />
        ) : (
          <span key={i} className="h-[10px] w-[10px] border border-[color:var(--line-a)]" />
        )
      )}
    </div>
  );
}

function Mark({ className = "" }: { className?: string }) {
  return (
    <svg width="18" height="10" viewBox="0 0 22 12" fill="none" aria-hidden className={className}>
      <path d="M3 1h16l-2.5 4H.5L3 1Z" fill="currentColor" />
      <path d="M3 7h16l-2.5 4H.5L3 7Z" fill="currentColor" opacity="0.45" />
    </svg>
  );
}

/** Slow ticker between the hero text and the blue block. Reuses the four step names already on the site. */
const STEPS = ["Define", "Curate", "Check", "Clean"];

function Ticker() {
  const group = (hidden: boolean) => (
    <div aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {[...STEPS, ...STEPS, ...STEPS].map((s, i) => (
        <span key={i} className="flex items-center">
          <span className="text-lg font-light text-[color:var(--mut-a)]" style={SERIF}>
            {s}
          </span>
          <Mark className="mx-10 text-[color:var(--accent)]" />
        </span>
      ))}
    </div>
  );
  const mask = "linear-gradient(to right, transparent, black 12%, black 88%, transparent)";
  return (
    <div
      className="hs-marquee mt-14 overflow-hidden border-y border-[color:var(--line-a)] py-4"
      style={{ maskImage: mask, WebkitMaskImage: mask }}
    >
      <div className="hs-marquee-track">
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="[.dm-btn:hover_&]:translate-x-[3px]"
      style={{ transition: "transform .3s ease" }}
    >
      <path d="M2 8h11M9 4l4 4-4 4" />
    </svg>
  );
}

/** Each word sits in its own mask so GSAP can slide it up into view. */
function Words({ text, cls }: { text: string; cls: string }) {
  const list = text.split(" ");
  return (
    <>
      {list.map((w, i) => (
        <Fragment key={i}>
          <span className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]">
            <span className={`${cls} inline-block will-change-transform`}>{w}</span>
          </span>
          {i < list.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}

/* ───────── section ───────── */

export function HomeSection() {
  const hero = useRef<HTMLDivElement>(null);

  // GSAP: headline words rise out of their masks, then the grey sentence, then subhead + button
  useIsoLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const from = { yPercent: 115, opacity: 0, filter: "blur(6px)", duration: 1, clearProps: "transform,filter" };
      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .from(".hs-w1", { ...from, stagger: 0.07 })
        .from(".hs-w2", { ...from, stagger: 0.05 }, "-=0.6")
        .from(".hs-fade", { y: 16, opacity: 0, duration: 0.8, stagger: 0.12, clearProps: "transform" }, "-=0.6");
    }, hero);
    return () => ctx.revert();
  }, []);

  return (
    <Section id="home">
      <style>{CSS}</style>

      <div ref={hero} className="relative">
        <DataMatrix />

        <h1
          className="max-w-3xl pt-6 text-4xl font-light leading-[1.15] tracking-tight md:text-6xl"
          style={SERIF}
        >
          <span className="sr-only">Medical AI runs on data. We source it. You make it work.</span>
          <span aria-hidden="true">
            <Words text="Medical AI runs on data." cls="hs-w1" />{" "}
            <span className="text-[color:var(--soft-a)]">
              <Words text="We source it. You make it work." cls="hs-w2" />
            </span>
          </span>
        </h1>

        <p className="hs-fade mt-6 max-w-xl text-[15px] leading-relaxed text-[color:var(--mut2-a)]">
          Diagnostic datasets, built for your task, checked and cleaned before
          they reach you.
        </p>


      </div>
        <div className="hs-fade mt-8">
          <Button href="#partner">
            <span className="inline-flex items-center gap-2">
              Partner with us
              <Arrow />
            </span>
          </Button>
        </div>

      <PixelBlock className="mt-10 px-4 py-16 md:px-10 md:py-24">
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

      <Ticker />

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
  );
}
