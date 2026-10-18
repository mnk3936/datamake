import { useState, useEffect } from "react";
import { EMAIL, PHONE, PHONE_TEL, SERIF } from "../../constants/site";

export function ContactDock() {
  const [consultOpen, setConsultOpen] = useState(false);
  const [callOpen, setCallOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Form state for consultation
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [task, setTask] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setConsultOpen(false);
        setCallOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PHONE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard fallback
    }
  };

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Free Consultation Request - ${name || "Medical AI Builder"}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nTask / Model Requirements:\n${task}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setConsultOpen(false);
      setName("");
      setEmail("");
      setTask("");
    }, 2500);
  };

  return (
    <>
      {/* Floating dock at bottom center */}
      <aside
        aria-label="Contact options"
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 p-1.5 rounded-full bg-black/80 text-white border border-white/20 shadow-2xl backdrop-blur-md transition-transform hover:scale-[1.02]"
      >
        {/* Get free consultation button */}
        <button
          type="button"
          onClick={() => {
            setCallOpen(false);
            setConsultOpen(true);
          }}
          className="group relative overflow-hidden text-white px-4 py-2 rounded-full font-medium text-xs tracking-tight transition-all duration-300 bg-white/15 border border-white/25 hover:border-[#C0BEF4]/60 hover:text-[#C0BEF4] flex items-center gap-1.5 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0BEF4]"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Get free consultation
        </button>

        {/* Call button */}
        <button
          type="button"
          onClick={() => {
            setConsultOpen(false);
            setCallOpen(true);
          }}
          className="bg-white/15 hover:bg-white/25 text-white px-3.5 py-2 rounded-full font-medium text-xs tracking-tight transition-all border border-white/20 flex items-center gap-1.5 whitespace-nowrap backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Call
        </button>
      </aside>

      {/* Free Consultation Modal */}
      {consultOpen && (
        <div
          data-lenis-prevent
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setConsultOpen(false)}
        >
          <div
            data-lenis-prevent
            className="relative w-full max-w-lg rounded-xl border border-white/15 bg-black p-6 sm:p-8 text-white shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="consult-title"
          >
            <button
              type="button"
              onClick={() => setConsultOpen(false)}
              aria-label="Close dialog"
              className="absolute right-4 top-4 text-neutral-400 hover:text-white p-1 rounded-md transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Datamake"
                className="h-4 w-auto invert object-contain"
              />
              <span className="text-[11px] font-medium uppercase tracking-widest text-[#C0BEF4]">
                Datamake Consultation
              </span>
            </div>
            <h2
              id="consult-title"
              className="mt-2 text-2xl font-light text-white"
              style={SERIF}
            >
              Get a Free Consultation
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-neutral-400">
              Tell us your task. We will tell you what diagnostic data it needs
              and how we curate, test, and prepare it for your model.
            </p>

            {submitted ? (
              <div className="mt-6 rounded-lg bg-emerald-950/60 border border-emerald-500/40 p-4 text-center">
                <p className="text-emerald-300 text-sm font-medium">
                  Opening your email client...
                </p>
                <p className="text-emerald-400/80 text-xs mt-1">
                  We look forward to reviewing your task requirements.
                </p>
              </div>
            ) : (
              <form onSubmit={handleConsultSubmit} className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="consult-name"
                    className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    id="consult-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Dr. Jane Smith / ML Engineer"
                    className="w-full rounded-md border border-white/15 bg-black/50 px-3 py-2 text-xs text-white placeholder-neutral-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="consult-email"
                    className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1"
                  >
                    Work Email
                  </label>
                  <input
                    id="consult-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@organization.com"
                    className="w-full rounded-md border border-white/15 bg-black/50 px-3 py-2 text-xs text-white placeholder-neutral-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="consult-task"
                    className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1"
                  >
                    Model Task / Dataset Needs
                  </label>
                  <textarea
                    id="consult-task"
                    rows={3}
                    required
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="What specific diagnostic data or modalities (CT, MRI, Pathology) does your model require?"
                    className="w-full rounded-md border border-white/15 bg-black/50 px-3 py-2 text-xs text-white placeholder-neutral-500 focus:border-blue-500 focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex-1 rounded-md bg-white px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-neutral-950 transition-all duration-300 hover:bg-[#C0BEF4] active:scale-[0.99]"
                  >
                    Request Consultation
                  </button>

                  <a
                    href="#partner"
                    onClick={() => setConsultOpen(false)}
                    className="w-full sm:w-auto text-center text-xs text-neutral-400 hover:text-white transition-colors py-2"
                  >
                    View Partner Details &rarr;
                  </a>
                </div>
              </form>
            )}

            <div className="mt-6 pt-4 border-t border-white/10 text-center text-[11px] text-neutral-500">
              Direct email:{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="text-neutral-300 underline underline-offset-2 hover:text-white"
              >
                {EMAIL}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Call Dialog */}
      {callOpen && (
        <div
          data-lenis-prevent
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setCallOpen(false)}
        >
          <div
            data-lenis-prevent
            className="relative w-full max-w-sm rounded-xl border border-white/15 bg-black p-6 text-white shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="call-title"
          >
            <button
              type="button"
              onClick={() => setCallOpen(false)}
              aria-label="Close dialog"
              className="absolute right-4 top-4 text-neutral-400 hover:text-white p-1 rounded-md transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div>
                <span className="text-[10px] font-medium uppercase tracking-widest text-neutral-400">
                  Direct Line
                </span>
                <h3
                  id="call-title"
                  className="text-lg font-light text-white"
                  style={SERIF}
                >
                  Speak with our team
                </h3>
              </div>
            </div>

            <div className="mt-5 rounded-lg border border-white/10 bg-black/40 p-4 text-center">
              <p className="text-xl font-light tracking-wide text-white">
                {PHONE}
              </p>
              <p className="mt-1 text-[11px] text-neutral-400">
                Mon – Sat, 9:00 AM – 7:00 PM IST
              </p>
            </div>

            <div className="mt-5 space-y-2.5">
              <a
                href={`tel:${PHONE_TEL}`}
                className="w-full flex items-center justify-center gap-2 rounded-md bg-white py-2.5 text-xs font-medium uppercase tracking-wider text-black hover:bg-neutral-200 transition-colors"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Now
              </a>

              <button
                type="button"
                onClick={handleCopyPhone}
                className="w-full flex items-center justify-center gap-1.5 rounded-md border border-white/15 py-2.5 text-xs font-medium uppercase tracking-wider text-neutral-300 hover:text-white hover:border-white/30 transition-colors"
              >
                {copied ? "Copied to clipboard!" : "Copy Number"}
              </button>
            </div>

            <p className="mt-4 text-center text-[11px] text-neutral-500">
              Hyderabad, India • Categorical Analytics
            </p>
          </div>
        </div>
      )}
    </>
  );
}
