import { SERIF, EMAIL, h2 } from "../../constants/site";
import { Section } from "../ui/Section";
import { Label } from "../ui/Label";
import { Mark } from "../ui/Mark";
import { Button } from "../ui/Button";
import { Footer } from "./Footer";

export function PartnerSection() {
  return (
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
              Tell us your task. We will tell you what data it needs and how we
              would build it.
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
              The reports your center produces every day can help train AI that
              improves diagnosis.
            </p>
          </div>

          <div>
            <Button href={`mailto:${EMAIL}`} light>
              Become a partner center
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </Section>
  );
}
