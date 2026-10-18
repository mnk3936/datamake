import { useEffect, useRef } from "react";
import { SERIF } from "../../constants/site";

const STEPS = [
  ["Define", "We agree with you exactly what the data must do."],
  [
    "Curate",
    "We build the dataset around that agreement, from our partner centers.",
  ],
  ["Check", "We test quality before anything reaches you."],
  ["Clean", "We prepare it so you can run it straight on the model."],
] as const;

const N = STEPS.length;
const STEPS_END = 0.85; // last 15% of scroll reveals the closing line

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

export function HowItWorksSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const numRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const tickRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const outroRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const desktop = window.matchMedia("(min-width: 768px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    let target = 0;
    let current = 0;
    let raf = 0;

    const getTarget = () => {
      const rect = track.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      return scrollable > 0 ? clamp(-rect.top / scrollable) : 0;
    };

    const apply = (p: number) => {
      const active = desktop.matches && !reduced.matches;

      // mobile / reduced motion: clear inline styles, show everything statically
      if (!active) {
        stepRefs.current.forEach((el) => {
          if (el) {
            el.style.opacity = "";
            el.style.transform = "";
          }
        });
        if (outroRef.current) {
          outroRef.current.style.opacity = "";
          outroRef.current.style.transform = "";
        }
        if (barRef.current) barRef.current.style.transform = "scaleX(1)";
        return;
      }

      const q = clamp(p / STEPS_END) * N; // 0..N across the steps

      stepRefs.current.forEach((el, i) => {
        if (!el) return;
        const c = i + 0.5;
        let d = q - c;
        if (i === 0 && d < 0) d = 0; // first step is visible at the start
        if (i === N - 1 && d > 0) d = 0; // last step stays until the outro
        const opacity = clamp(2 - Math.abs(d) * 4);
        el.style.opacity = String(opacity);
        el.style.transform = `translate3d(0, ${-d * 90}px, 0)`;
        el.style.pointerEvents = opacity > 0.5 ? "auto" : "none";
      });

      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${clamp(q / N)})`;
      }
      tickRefs.current.forEach((el, i) => {
        if (el) el.style.opacity = q >= i + 0.35 ? "1" : "0.35";
      });

      if (outroRef.current) {
        const o = clamp((p - STEPS_END) / (1 - STEPS_END));
        outroRef.current.style.opacity = String(o);
        outroRef.current.style.transform = `translate3d(0, ${(1 - o) * 24}px, 0)`;
      }
    };

    const tick = () => {
      current += (target - current) * 0.09; // easing: lower = smoother/slower
      if (Math.abs(target - current) < 0.0004) current = target;
      apply(current);
      raf = current !== target ? requestAnimationFrame(tick) : 0;
    };

    const onScroll = () => {
      target = getTarget();
      if (!raf) raf = requestAnimationFrame(tick);
    };

    target = current = getTarget();
    apply(current);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    desktop.addEventListener("change", onScroll);
    reduced.addEventListener("change", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      desktop.removeEventListener("change", onScroll);
      reduced.removeEventListener("change", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="how-it-works">
      {/* tall track = scroll distance */}
      <div ref={trackRef} className="relative md:h-[420vh]">
        {/* the gradient is the pinned background */}
        <div className="bg-black md:sticky md:top-0 md:h-screen">
          <div className="relative z-20 mx-auto flex w-full max-w-6xl flex-col justify-center gap-12 px-6 py-20 text-white md:h-screen md:flex-row md:items-center md:gap-16 md:py-0">
            {/* ── left: heading ── */}
            <div className="md:w-5/12">
              <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest text-white/50">
                <span className="inline-block h-px w-5 bg-white/30" />
                How it works
              </p>

              <h2
                className="mt-5 max-w-md text-3xl font-light leading-[1.15] tracking-tight md:text-5xl"
                style={SERIF}
              >
                Four steps between your task{" "}
                <span className="text-white/40">
                  and your training data
                </span>
              </h2>

              <p
                ref={outroRef}
                className="mt-8 text-lg font-light text-white/70 md:text-2xl"
                style={SERIF}
              >
                Four steps, all ours. The running is yours.
              </p>
            </div>

            {/* ── right: steps ── */}
            <div className="md:w-7/12">
              <ol className="flex flex-col gap-8 md:relative md:block md:h-[280px]">
                {STEPS.map(([title, body], i) => (
                  <li
                    key={title}
                    ref={(el) => {
                      stepRefs.current[i] = el;
                    }}
                    className="group flex items-start gap-5 border-l border-white/20 pl-6 will-change-transform md:absolute md:inset-x-0 md:top-1/2 md:-translate-y-1/2"
                    style={{ opacity: undefined }}
                  >
                    {/* step number */}
                    <span
                      ref={i === 0 ? numRef : undefined}
                      className="shrink-0 text-5xl font-extralight leading-none text-white/20 md:text-7xl"
                      style={SERIF}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="pt-1">
                      <h3
                        className="text-2xl font-normal tracking-tight md:text-3xl"
                        style={SERIF}
                      >
                        {title}
                      </h3>
                      <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/55 md:text-[15px]">
                        {body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              {/* progress rail (desktop) */}
              <div className="hidden md:block">
                <div className="mt-14 h-px w-full bg-white/15">
                  <div
                    ref={barRef}
                    className="h-full origin-left bg-white/60 will-change-transform"
                    style={{ transform: "scaleX(0)" }}
                  />
                </div>
                <div className="mt-3 flex justify-between text-[10px] uppercase tracking-widest text-white/40">
                  {STEPS.map(([title], i) => (
                    <span
                      key={title}
                      ref={(el) => {
                        tickRefs.current[i] = el;
                      }}
                      className="transition-opacity duration-300"
                      style={{ opacity: 0.35 }}
                    >
                      {title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}