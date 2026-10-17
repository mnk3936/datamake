import { SERIF, EMAIL } from "../constants/site";

export function PrivacyPage() {
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
          Privacy &amp; Data Ethics
        </span>
      </div>

      {/* Header */}
      <div className="mb-12">
        <span className="text-[11px] font-medium uppercase tracking-widest text-[color:var(--accent)]">
          Privacy Policy
        </span>
        <h1
          className="mt-3 text-3xl font-light tracking-tight md:text-5xl"
          style={SERIF}
        >
          Privacy and Patient Data Policy
        </h1>
        <p className="mt-4 text-[14px] leading-relaxed text-[color:var(--mut-a)]">
          At Datamake (Categorical Analytics Pvt Ltd), patient privacy and
          clinical data governance are foundational to our mission. This policy
          explains how diagnostic records are anonymized and how corporate client
          data is safeguarded.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 text-[12px] text-[color:var(--mut2-a)]">
          <span className="rounded border border-[color:var(--line-a)] bg-[color:var(--bg-blur)] px-3 py-1">
            HIPAA Safe Harbor Compliant
          </span>
          <span className="rounded border border-[color:var(--line-a)] bg-[color:var(--bg-blur)] px-3 py-1">
            DPDPA &amp; DISHA Aligned
          </span>
          <span className="rounded border border-[color:var(--line-a)] bg-[color:var(--bg-blur)] px-3 py-1">
            Updated: October 2026
          </span>
        </div>
      </div>

      {/* Content clauses */}
      <div className="space-y-12 text-[14px] leading-relaxed text-[color:var(--mut2-a)] border-t border-[color:var(--line-a)] pt-10">
        <section>
          <h2 className="text-xl font-normal text-[color:var(--fg-a)]" style={SERIF}>
            1. Zero Direct PHI Retention
          </h2>
          <p className="mt-3">
            Datamake never ingests, stores, or delivers Protected Health
            Information (PHI) or Personally Identifiable Information (PII) in
            unredacted form.
          </p>
          <p className="mt-2 text-[13px] text-[color:var(--mut-a)]">
            Before any diagnostic image, laboratory report, or time-series record
            reaches our curation pipeline, all 18 HIPAA identifiers (including
            names, geographic markers below state level, dates of birth, MRNs,
            and device serial numbers) are irreversibly purged or replaced with
            synthetic pseudo-identifiers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-normal text-[color:var(--fg-a)]" style={SERIF}>
            2. De-Identification Methodology
          </h2>
          <ul className="mt-3 list-disc space-y-2.5 pl-5">
            <li>
              <strong>Pixel-Level Masking:</strong> Optical Character Recognition
              (OCR) burn-in scrubbers remove burned-in patient names from
              ultrasound scans and legacy DICOM frames.
            </li>
            <li>
              <strong>DICOM Header Cleansing:</strong> Conforms to DICOM PS 3.15
              Annex E standards, stripping private vendor tags and patient
              attributes while preserving clinical physics parameters (slice
              thickness, kVp, magnetic field strength) required for model accuracy.
            </li>
            <li>
              <strong>Date Jittering:</strong> Longitudinal imaging dates are
              normalized via deterministic relative offsets, preserving the
              temporal intervals between scans without revealing actual clinical
              calendar dates.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-normal text-[color:var(--fg-a)]" style={SERIF}>
            3. Corporate Client Information
          </h2>
          <p className="mt-3">
            When you inquire about partnerships, request a custom dataset, or
            contact us via email or phone, we collect only necessary commercial
            details: your name, organization email, model architecture/task
            specifications, and technical data modalities.
          </p>
          <p className="mt-2 text-[13px] text-[color:var(--mut-a)]">
            We never sell, rent, or trade your model specifications or commercial
            inquiries to any advertising networks or third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-normal text-[color:var(--fg-a)]" style={SERIF}>
            4. Website Telemetry &amp; Cookies
          </h2>
          <p className="mt-3">
            Our public website operates on a privacy-first model:
          </p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[13px] text-[color:var(--mut-a)]">
            <li>No invasive third-party tracking scripts or advertising cookies.</li>
            <li>
              Local storage is utilized solely to remember your UI preference
              (light or dark theme).
            </li>
            <li>
              Standard encrypted server request logs are purged on rolling
              30-day schedules for security diagnostics.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-normal text-[color:var(--fg-a)]" style={SERIF}>
            5. Data Protection Officer &amp; Inquiries
          </h2>
          <p className="mt-3">
            For questions regarding our privacy practices, audits, or to request
            verification documentation, contact our Data Protection Office:
          </p>
          <div className="mt-4 rounded-lg border border-[color:var(--line-a)] bg-[color:var(--bg-blur)] p-5">
            <p className="text-sm font-medium text-[color:var(--fg-a)]">
              Data Protection &amp; Governance Office
            </p>
            <p className="text-xs text-[color:var(--mut-a)] mt-1">
              Categorical Analytics Pvt Ltd &bull; Hyderabad, India
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
        <a href="#/terms" className="hover:text-[color:var(--fg-a)] transition-colors">
          &larr; Read Terms of Service
        </a>
        <a href="#/security" className="hover:text-[color:var(--fg-a)] transition-colors">
          &rarr; Data Security &amp; Ethics
        </a>
        <a href="#home" className="hover:text-[color:var(--fg-a)] transition-colors">
          Back to Top &uarr;
        </a>
      </div>
    </main>
  );
}
