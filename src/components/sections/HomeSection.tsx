import { SERIF } from "../../constants/site";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { PixelBlock } from "../ui/PixelBlock";
import { DatamakeInfoPanel } from "../DatamakeInfoPanel";

export function HomeSection() {
  return (
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
  );
}
