import { SERIF, EMAIL } from "../constants/site";

export function SecurityPage() {
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
          Clinical Security &amp; Ethics
        </span>
      </div>

      {/* Header */}
      <div className="mb-12">
        <span className="text-[11px] font-medium uppercase tracking-widest text-[color:var(--accent)]">
          Trust &amp; Governance
        </span>
        <h1
          className="mt-3 text-3xl font-light tracking-tight md:text-5xl"
          style={SERIF}
        >
          Data Security and Clinical Ethics
        </h1>
        <p className="mt-4 text-[14px] leading-relaxed text-[color:var(--mut-a)]">
          How Datamake safeguards medical records, enforces algorithmic integrity,
          and guarantees data provenance across partner diagnostic centers.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 text-[12px] text-[color:var(--mut2-a)]">
          <span className="rounded border border-[color:var(--line-a)] bg-[color:var(--bg-blur)] px-3 py-1">
            AES-256 &amp; TLS 1.3 Architecture
          </span>
          <span className="rounded border border-[color:var(--line-a)] bg-[color:var(--bg-blur)] px-3 py-1">
            IRB Ethical Standards
          </span>
          <span className="rounded border border-[color:var(--line-a)] bg-[color:var(--bg-blur)] px-3 py-1">
            Immutable Audit Logging
          </span>
        </div>
      </div>

      {/* Content clauses */}
      <div className="space-y-12 text-[14px] leading-relaxed text-[color:var(--mut2-a)] border-t border-[color:var(--line-a)] pt-10">
        <section>
          <h2 className="text-xl font-normal text-[color:var(--fg-a)]" style={SERIF}>
            1. Cryptographic Data Provenance &amp; Chain-of-Custody
          </h2>
          <p className="mt-3">
            Every dataset prepared by Datamake is accompanied by a cryptographic
            manifest. Each DICOM image series and ground-truth annotation report
            is hashed using SHA-256 at the ingestion boundary.
          </p>
          <p className="mt-2 text-[13px] text-[color:var(--mut-a)]">
            This prevents silent data corruption, ensures reproducibility
            across model training runs, and guarantees that training samples have
            never been tampered with or modified outside calibrated curation rules.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-normal text-[color:var(--fg-a)]" style={SERIF}>
            2. Infrastructure Security &amp; Isolation
          </h2>
          <ul className="mt-3 list-disc space-y-2.5 pl-5">
            <li>
              <strong>Air-Gapped De-Identification Nodes:</strong> Scrubbing of
              raw diagnostic feeds is performed on dedicated, isolated compute
              clusters that do not have outbound public internet routes.
            </li>
            <li>
              <strong>Encryption at Rest &amp; Transit:</strong> Datasets are
              encrypted using AES-256 with rotating envelope encryption keys
              managed in dedicated Hardware Security Modules (HSMs). All transit
              enforces TLS 1.3.
            </li>
            <li>
              <strong>Zero-Knowledge Delivery:</strong> Delivered datasets are
              distributed via private, time-limited, signed access tokens
              restricted to authorized client CIDR ranges.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-normal text-[color:var(--fg-a)]" style={SERIF}>
            3. Clinical Ground-Truth Quality Audits
          </h2>
          <p className="mt-3">
            Poor data produces failing models. Datamake employs independent,
            board-certified radiologists and pathologists who perform blinded
            sample reconciliations on diagnostic labels:
          </p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[13px] text-[color:var(--mut-a)]">
            <li>Inter-annotator agreement scoring using Cohen&apos;s Kappa.</li>
            <li>
              Automated anomaly rejection for corrupted voxel data, contrast-delay
              mismatches, or missing DICOM acquisition tags.
            </li>
            <li>
              Continuous ground-truth updates as longitudinal clinical outcomes
              (e.g., surgical biopsy confirmations) are finalized.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-normal text-[color:var(--fg-a)]" style={SERIF}>
            4. Demographic Balance &amp; Bias Mitigation
          </h2>
          <p className="mt-3">
            Medical AI models frequently fail when deployed in varied clinical
            environments because their training cohorts lacked geographic and
            demographic balance.
          </p>
          <p className="mt-2 text-[13px] text-[color:var(--mut-a)]">
            Datamake partners with diagnostic centers distributed across varied
            regions and equipment vendors (GE, Siemens, Philips, United Imaging),
            allowing developers to test model resilience against scanner noise,
            differing slice thicknesses, and diverse patient demographics.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-normal text-[color:var(--fg-a)]" style={SERIF}>
            5. Security &amp; Compliance Inquiries
          </h2>
          <p className="mt-3">
            To request our complete Security Architecture Whitepaper or to
            schedule an enterprise security review for your institution:
          </p>
          <div className="mt-4 rounded-lg border border-[color:var(--line-a)] bg-[color:var(--bg-blur)] p-5">
            <p className="text-sm font-medium text-[color:var(--fg-a)]">
              Security &amp; Architecture Group
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
        <a href="#/privacy" className="hover:text-[color:var(--fg-a)] transition-colors">
          &larr; Read Privacy Policy
        </a>
        <a href="#home" className="hover:text-[color:var(--fg-a)] transition-colors">
          Back to Top &uarr;
        </a>
      </div>
    </main>
  );
}
