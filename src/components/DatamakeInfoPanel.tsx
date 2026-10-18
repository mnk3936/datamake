import { PanelMark } from "./ui/Mark";
import { PixelBlock } from "./ui/PixelBlock";
import { SERIF } from "../constants/site";

export function DatamakeInfoPanel() {
  return (
    <div className="relative z-10 mt-20 w-full max-w-5xl">
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
          <PixelBlock
            className="p-7 text-left md:p-8"
            contentClassName="flex min-h-[260px] h-full flex-col justify-between gap-10"
          >
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
                  <dt className="mt-1 text-xs text-white/80">
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
                  <dt className="mt-1 text-xs text-white/80">
                    Verified records
                  </dt>
                </div>
              </dl>
            </div>
          </PixelBlock>

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
  );
}
