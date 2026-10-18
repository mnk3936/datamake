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
            className="flex items-center gap-2.5"
            aria-label="Datamake Home"
          >
            <img
              src="/logo.png"
              alt="Datamake Logo"
              className={`h-6 w-auto object-contain transition-all ${
                isDark ? "invert" : ""
              }`}
            />
            <img
              src="/wordmark-white.png"
              alt="Datamake"
              className={`h-5 w-auto object-contain transition-all ${
                isDark ? "" : "invert"
              }`}
            />
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
              className="group relative inline-flex items-center border border-[color:var(--fg-a)]/20 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[color:var(--fg-a)] transition-all duration-300 hover:border-[#C0BEF4]/60 hover:text-[#C0BEF4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0BEF4]"
            >
              Partner with us
              <span
                aria-hidden="true"
                className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #12004C, #C0BEF4, #12004C)",
                }}
              />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
