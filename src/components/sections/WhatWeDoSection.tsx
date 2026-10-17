import { SERIF, h2 } from "../../constants/site";
import { Section } from "../ui/Section";
import { Label } from "../ui/Label";
import { Mark } from "../ui/Mark";

const WHAT_WE_DO_CARDS = [
  ["Source", "Partner diagnostic centers."],
  ["Fit", "Defined with you, around your task."],
  ["Currency", "Ground truths that update."],
  ["Check", "Quality verified before delivery."],
] as const;

export function WhatWeDoSection() {
  return (
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
        {WHAT_WE_DO_CARDS.map(([title, body]) => (
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
  );
}
