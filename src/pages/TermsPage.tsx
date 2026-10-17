import { SERIF, EMAIL } from "../constants/site";

export function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-left md:px-12 md:py-24">
      {/* Breadcrumb / Back Navigation */}
      <div className="mb-10 flex items-center justify-between border-b border-[color:var(--line-a)] pb-6 text-xs text-[color:var(--mut-a)]">
        <a
          href="#home"
          className="inline-flex items-center gap-2 hover:text-[color:var(--fg-a)] transition-colors"
        >
          <span aria-hidden="true">&larr;</span> Back to Datamake Home
        </a>
        <span className="font-mono text-[11px] uppercase tracking-wider text-[color:var(--mut-a)]">
          Legal / Document Ref: DM-TOS-2026
        </span>
      </div>

      {/* Header */}
      <div className="mb-12">
        <span className="text-[11px] font-medium uppercase tracking-widest text-[color:var(--accent)]">
          Legal Agreement
        </span>
        <h1
          className="mt-3 text-3xl font-light tracking-tight md:text-5xl"
          style={SERIF}
        >
          Terms and Conditions
        </h1>
        <p className="mt-4 text-[14px] leading-relaxed text-[color:var(--mut-a)]">
          These Terms and Conditions (&quot;Terms&quot;) govern the acquisition,
          curation, licensing, and usage of diagnostic datasets and ground truth
          verification services provided by Datamake, an entity of Categorical
          Analytics Pvt Ltd (&quot;Datamake&quot;, &quot;we&quot;, &quot;us&quot;,
          or &quot;our&quot;).
        </p>

        <div className="mt-6 flex flex-wrap gap-4 text-[12px] text-[color:var(--mut2-a)]">
          <span className="rounded border border-[color:var(--line-a)] bg-[color:var(--bg-blur)] px-3 py-1">
            Effective Date: October 2026
          </span>
          <span className="rounded border border-[color:var(--line-a)] bg-[color:var(--bg-blur)] px-3 py-1">
            Jurisdiction: Hyderabad, Telangana, India
          </span>
          <span className="rounded border border-[color:var(--line-a)] bg-[color:var(--bg-blur)] px-3 py-1">
            Version 2.1
          </span>
        </div>
      </div>

      {/* Content clauses */}
      <div className="space-y-12 text-[14px] leading-relaxed text-[color:var(--mut2-a)] border-t border-[color:var(--line-a)] pt-10">
        <section>
          <h2 className="text-xl font-normal text-[color:var(--fg-a)]" style={SERIF}>
            1. Scope of Services & Diagnostic Datasets
          </h2>
          <p className="mt-3">
            Datamake partners with accredited diagnostic laboratories, imaging
            centers, and medical institutions to curate, clean, de-identify, and
            benchmark diagnostic datasets specifically tailored for medical AI
            model training, validation, and benchmarking.
          </p>
          <p className="mt-2 text-[13px] text-[color:var(--mut-a)]">
            By commissioning a custom dataset, accessing curated cohorts, or
            partnering as a diagnostic center, you (&quot;Client&quot; or
            &quot;Partner&quot;) agree to be legally bound by these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-normal text-[color:var(--fg-a)]" style={SERIF}>
            2. Dataset Licensing & Model Training Rights
          </h2>
          <ul className="mt-3 list-disc space-y-2.5 pl-5">
            <li>
              <strong>Internal AI Model Training:</strong> Datamake grants the
              Client a non-exclusive, perpetual, worldwide, non-transferable
              license to ingest, process, and train machine learning and deep
              learning models using the delivered datasets.
            </li>
            <li>
              <strong>Weights & Derivative Models:</strong> Weights, embeddings,
              and inference outputs produced by models trained on Datamake
              datasets remain the sole and exclusive intellectual property of the
              Client.
            </li>
            <li>
              <strong>No Raw Data Redistribution:</strong> The Client shall not
              resell, sub-license, publicly publish, or redistribute the raw
              delivered DICOM files, radiological annotations, or structured
              pathology records in unaggregated form.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-normal text-[color:var(--fg-a)]" style={SERIF}>
            3. De-Identification & Clinical Compliance
          </h2>
          <p className="mt-3">
            All diagnostic data delivered by Datamake undergoes rigorous,
            multi-stage de-identification in strict accordance with HIPAA Safe
            Harbor regulations (45 CFR § 164.514(b)), India&apos;s Digital
            Personal Data Protection Act (DPDPA), and DISHA standards.
          </p>
          <p className="mt-2 text-[13px] text-[color:var(--mut-a)]">
            Any attempt by the Client, directly or through third parties, to
            re-identify patients, cross-reference cryptographic hashes with
            external registries, or deanonymize individual records is strictly
            prohibited and constitutes an immediate material breach.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-normal text-[color:var(--fg-a)]" style={SERIF}>
            4. Diagnostic Center Partnerships
          </h2>
          <p className="mt-3">
            Diagnostic centers and clinical facilities that partner with
            Datamake certify that all shared historical studies have been
            lawfully sourced, stripped of direct personal identifiers, and
            contributed pursuant to applicable patient notification frameworks
            and institutional review board (IRB) ethics protocols.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-normal text-[color:var(--fg-a)]" style={SERIF}>
            5. Disclaimers & Medical AI Use
          </h2>
          <p className="mt-3">
            Datamake datasets are prepared as high-fidelity inputs for training
            and algorithmic benchmarking. Datamake does not provide medical
            diagnoses, medical advice, or physician consultations. The Client
            bears sole legal and regulatory responsibility for clinical trials,
            FDA/CE/CDSCO regulatory clearances, and deployment safety of their
            resulting AI models.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-normal text-[color:var(--fg-a)]" style={SERIF}>
            6. Governing Law & Contact
          </h2>
          <p className="mt-3">
            These Terms shall be governed by and construed in accordance with the
            laws of India, with exclusive jurisdiction resting in the courts of
            Hyderabad, Telangana.
          </p>
          <div className="mt-6 rounded-lg border border-[color:var(--line-a)] bg-[color:var(--bg-blur)] p-5">
            <p className="text-sm font-medium text-[color:var(--fg-a)]">
              Questions regarding these Terms?
            </p>
            <p className="mt-1 text-xs text-[color:var(--mut-a)]">
              Direct legal and compliance inquiries to Categorical Analytics Pvt
              Ltd:
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-2 inline-block text-xs font-medium text-[color:var(--accent)] underline underline-offset-4 hover:opacity-80"
            >
              {EMAIL}
            </a>
          </div>
        </section>
      </div>

      {/* Cross-page Navigation */}
      <div className="mt-16 flex flex-wrap items-center justify-between border-t border-[color:var(--line-a)] pt-8 text-xs text-[color:var(--mut-a)]">
        <a href="#/privacy" className="hover:text-[color:var(--fg-a)] transition-colors">
          &rarr; Read Privacy Policy
        </a>
        <a href="#/security" className="hover:text-[color:var(--fg-a)] transition-colors">
          &rarr; Data Security & Ethics
        </a>
        <a href="#home" className="hover:text-[color:var(--fg-a)] transition-colors">
          Back to Top &uarr;
        </a>
      </div>
    </main>
  );
}
