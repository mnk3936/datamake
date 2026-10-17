import { PanelMark } from "./ui/Mark";
import { SERIF } from "../constants/site";

const PANEL_COLS = 12;
const PANEL_ROWS = 8;

const panelPixels = Array.from(
  { length: PANEL_COLS * PANEL_ROWS },
  (_, i) => {
    const x = Math.sin((i + 1) * 12.9898) * 43758.5453;
    return x - Math.floor(x);
  }
);

function PanelPixelField() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 grid"
      style={{
        gridTemplateColumns: `repeat(${PANEL_COLS}, 1fr)`,
        gridTemplateRows: `repeat(${PANEL_ROWS}, 1fr)`,
        maskImage: "linear-gradient(to bottom, black 20%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 20%, transparent 100%)",
      }}
    >
      {panelPixels.map((r, i) => (
        <span
          key={i}
          className={r > 0.5 ? "bg-white" : "bg-blue-950"}
          style={{
            opacity: r > 0.5 ? 0.04 + (r - 0.5) * 0.4 : 0.05 + r * 0.3,
          }}
        />
      ))}
    </div>
  );
}

export function DatamakeInfoPanel() {
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
              <h3 className="text-xl leading-snug text-white" style={SERIF}>
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
