import { SERIF } from "../../constants/site";

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  return (
    <>
      {/* Top bar */}
      <div className="bg-black py-2 text-center text-[11px] text-neutral-400">
        Diagnostic datasets, built for your task
      </div>

      {/* Sticky header */}
      <header className="sticky top-0 z-30 border-b border-[color:var(--line-a)] bg-[color:var(--bg-blur)] backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 md:px-14">
          <a
            href="#home"
            className="flex items-center gap-2.5 text-xl"
            style={SERIF}
          >
            <span aria-hidden="true" className="grid grid-cols-3 gap-[2px]">
              {[1, 1, 0.4, 1, 0.4, 1, 0.4, 1, 1].map((o, i) => (
                <span
                  key={i}
                  className="h-[5px] w-[5px] bg-[color:var(--accent)]"
                  style={{ opacity: o }}
                />
              ))}
            </span>
            Datamake
          </a>

          <nav className="hidden gap-8 text-[13px] text-[color:var(--mut-a)] md:flex">
            <a href="#what-we-do" className="hover:text-[color:var(--fg-a)]">
              What we do
            </a>
            <a href="#how-it-works" className="hover:text-[color:var(--fg-a)]">
              How it works
            </a>
            <a href="#partner" className="hover:text-[color:var(--fg-a)]">
              Partner with us
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={
                isDark ? "Switch to light theme" : "Switch to dark theme"
              }
              title={isDark ? "Light theme" : "Dark theme"}
              className="inline-flex h-9 w-9 items-center justify-center border border-[color:var(--line-a)] text-[color:var(--fg-a)] transition-colors hover:border-[color:var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              {isDark ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z" />
                </svg>
              )}
            </button>

            <a
              href="#partner"
              className="bg-[color:var(--btn-bg)] px-4 py-2 text-[11px] font-medium uppercase tracking-wide text-[color:var(--btn-fg)] hover:bg-blue-700 hover:text-white"
            >
              Partner with us
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
