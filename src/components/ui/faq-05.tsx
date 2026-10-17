// FAQ 5 from Hirael <https://hirael.com/blocks/faqs/faq-05>
// Adapted to blend with Datamake dark theme & diagnostic AI datasets

"use client";

import * as React from "react";
import { SERIF, EMAIL } from "../../constants/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FaqItem {
  id: string;
  q: string;
  a: string;
}

const FAQS: readonly FaqItem[] = [
  {
    id: "item-1",
    q: "Is there a free consultation or sample data?",
    a: "Yes. Tell us your task and model requirements. We will analyze what diagnostic data it needs, verify available cohorts across our partner centers, and prepare sample specifications before any commercial commitment.",
  },
  {
    id: "item-2",
    q: "How is patient data kept private and safe?",
    a: "All diagnostic scans and clinical reports are de-identified on-premise at partner centers following HIPAA Safe Harbor (all 18 PHI identifiers removed) and DISHA/DPDPA guidelines. Everything is encrypted in transit and at rest.",
  },
  {
    id: "item-3",
    q: "How is clinical ground truth verified?",
    a: "Every case is validated and annotated by board-certified radiologists and pathologists. We perform multi-reader consensus audits with cryptographic SHA-256 manifests to guarantee dataset provenance.",
  },
  {
    id: "item-4",
    q: "Can diagnostic centers partner with Datamake?",
    a: "Yes. Partner centers safely monetize archived and ongoing diagnostic scans while maintaining complete compliance and patient anonymity. We supply the local de-identification node and scrubbing pipeline.",
  },
  {
    id: "item-5",
    q: "What if I need specialized modalities or assistance?",
    a: "Reach out anytime. We support CT, MRI, Pathology (WSI), Digital X-Ray, and Ultrasound in standard DICOM or pre-processed ML tensor formats. Most inquiries receive a detailed reply within 24 hours.",
  },
];

interface Faq05Props {
  items?: readonly FaqItem[];
  className?: string;
}

const Faq05: React.FC<Faq05Props> = ({ items = FAQS, className = "" }) => {
  return (
    <section
      data-slot="faq"
      id="faq"
      className={`scroll-mt-14 w-full text-left ${className}`}
    >
      <div className="grid w-full grid-cols-1 border border-white/15 divide-y divide-white/15 md:grid-cols-2 md:divide-x md:divide-y-0">
        {/* Intro column */}
        <div
          data-slot="faq-intro"
          className="flex flex-col justify-between gap-8 p-8 md:p-10 text-left bg-black/40"
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
              The things people ask most often about our diagnostic datasets,
              clinical sourcing, and ground truth verification.
            </p>
          </div>

          <p className="text-[11px] text-neutral-500">
            Still have questions?{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="text-neutral-300 underline underline-offset-2 hover:text-white transition-colors"
            >
              Email our team &rarr;
            </a>
          </p>
        </div>

        {/* Accordion column */}
        <div
          data-slot="faq-list"
          className="flex flex-col justify-center p-6 md:p-8 bg-black/20"
        >
          <Accordion type="single" collapsible className="w-full">
            {items.map((item) => (
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
};

export default Faq05;
