"use client";

import * as React from "react";
import { SERIF } from "../../constants/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS: readonly { id: string; q: string; a: string }[] = [
  {
    id: "item-1",
    q: "Is there a free plan or consultation?",
    a: "Yes. Start for free and explore the full dataset requirements, no commitment required. Engage our team to assess your model needs.",
  },
  {
    id: "item-2",
    q: "Can I adjust dataset scopes later?",
    a: "Anytime. Scale up cohort sizes or request new modalities as your model moves from initial training to validation and clinical deployment.",
  },
  {
    id: "item-3",
    q: "How is diagnostic data kept safe?",
    a: "Everything is de-identified on-premise and encrypted in transit and at rest. Strict role-based access ensures complete data integrity.",
  },
  {
    id: "item-4",
    q: "Do you offer team access and API feeds?",
    a: "Yes. Invite researchers, set access permissions, and sync verified datasets directly to your cloud or on-prem ML infrastructure.",
  },
  {
    id: "item-5",
    q: "What if I need clinical annotation help?",
    a: "Reach out anytime. Our board-certified clinical network can assist with custom ground truth annotations and consensus labeling.",
  },
];

export default function Preview(): React.JSX.Element {
  return (
    <section data-slot="faq" className="w-full text-left">
      <div className="grid w-full grid-cols-1 border border-white/15 divide-y divide-white/15 md:grid-cols-2 md:divide-x md:divide-y-0">
        <div
          data-slot="faq-intro"
          className="flex flex-col justify-between gap-6 p-8 md:p-10 text-left bg-black/40"
        >
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-blue-400">
              faq
            </span>
            <h2
              className="mt-3 text-3xl font-light leading-[1.15] tracking-tight text-white md:text-4xl"
              style={SERIF}
            >
              Questions, answered.
            </h2>
            <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-neutral-400">
              The things people ask most often. Still stuck? Reach out and we’ll
              walk you through it.
            </p>
          </div>
        </div>

        <div
          data-slot="faq-list"
          className="flex flex-col justify-center p-6 md:p-8 bg-black/20"
        >
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full"
          >
            {FAQS.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-b border-white/15 last:border-b-0"
              >
                <AccordionTrigger className="py-4 text-left text-[14px] md:text-[15px] font-normal text-neutral-200 transition-colors hover:text-white hover:no-underline [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:text-white">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-4 pt-1 text-[13px] leading-relaxed text-neutral-400">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
