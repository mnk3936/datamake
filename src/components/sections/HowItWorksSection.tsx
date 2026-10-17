import { SERIF, h2 } from "../../constants/site";
import { Section } from "../ui/Section";
import { Label } from "../ui/Label";
import { PixelBlock } from "../ui/PixelBlock";

const STEPS = [
  ["Define", "We agree with you exactly what the data must do."],
  [
    "Curate",
    "We build the dataset around that agreement, from our partner centers.",
  ],
  ["Check", "We test quality before anything reaches you."],
  ["Clean", "We prepare it so you can run it straight on the model."],
] as const;

export function HowItWorksSection() {
  return (
    <Section id="how-it-works">
      <Label>How it works</Label>

      <h2 className={h2} style={SERIF}>
        Four steps between your task{" "}
        <span className="text-[color:var(--soft-a)]">
          and your training data
        </span>
      </h2>

      <ol className="mt-14 grid divide-y divide-[color:var(--line-a)] border border-[color:var(--line-a)] md:grid-cols-4 md:divide-x md:divide-y-0">
        {STEPS.map(([title, body], i) => (
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
  );
}
