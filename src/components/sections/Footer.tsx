import { EMAIL } from "../../constants/site";
import Faq05 from "../ui/faq-05";


/**
 * Minimal footer for the black "Partner with us" section.
 * Small info row on top, then a giant half-hidden "Datamake" wordmark
 * that sits on the bottom edge of the page.
 * Uses the site's existing `dm-nav` hover underline (from THEME_CSS).
 */

function Mark({ className = "" }: { className?: string }) {
  return (
    <svg width="18" height="10" viewBox="0 0 22 12" fill="none" aria-hidden className={className}>
      <path d="M3 1h16l-2.5 4H.5L3 1Z" fill="currentColor" />
      <path d="M3 7h16l-2.5 4H.5L3 7Z" fill="currentColor" opacity="0.45" />
    </svg>
  );
}

const label = "text-[10px] font-medium uppercase tracking-[0.14em] text-neutral-600";
const link = "text-[12px] text-neutral-400 transition-colors hover:text-white";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/15 pt-16 text-left">
      {/* Embedded FAQ */}

      {/* Small, minimal info row */}
      <div className="border-t border-white/15 pt-14 grid gap-10 md:grid-cols-12">
        <div className="flex flex-col justify-between gap-8 md:col-span-5">
          <div>
            <Mark className="text-blue-500" />
            <p className="mt-4 max-w-[18rem] text-[14px] leading-snug text-neutral-200">
              Medical AI runs on data.
              <br />
              We source it. You make it work.
            </p>
          </div>
          
          <p className="text-[10px] uppercase tracking-[0.14em] text-neutral-600">
            &copy; 2026 Datamake. All rights reserved.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7 md:pl-8">
          <nav aria-label="Footer">
            <p className={label}>Explore</p>
            <ul className="dm-nav mt-3 space-y-1.5">
              {[
                ["Home", "#home"],
                ["What we do", "#what-we-do"],
                ["How it works", "#how-it-works"],
                ["Partner with us", "#partner"],
                ["FAQ", "#faq"],
              ].map(([text, href]) => (
                <li key={href}>
                  <a href={href} className={link}>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className={label}>Contact</p>
            <ul className="dm-nav mt-3 space-y-1.5">
              <li>
                <a href={`mailto:${EMAIL}`} className={`${link} break-all`}>
                  {EMAIL}
                </a>
              </li>
              <li className="text-[12px] text-neutral-400">Hyderabad, India</li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <p className={label}>Legal &amp; Trust</p>
            <ul className="dm-nav mt-3 space-y-1.5">
              <li>
                <a href="#/terms" className={link}>
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#/privacy" className={link}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#/security" className={link}>
                  Security &amp; Ethics
                </a>
              </li>
            </ul>
            <p className="mt-4 text-[11px] leading-relaxed text-neutral-500">
              Datamake, an entity of Categorical Analytics Pvt Ltd
            </p>
          </div>
        </div>
      </div>

      <div className="mb-30 mt-20">
        <Faq05 />
      </div>


      {/* Giant wordmark, top half only, resting on the bottom edge of the page */}
<div className="-mb-24 mt-[10vw] [container-type:inline-size]" aria-label="Datamake">        <div className="h-[9cqw] overflow-hidden">
          <span
            aria-hidden
            className="block select-none whitespace-nowrap bg-gradient-to-b from-neutral-200 via-neutral-500 to-neutral-800 bg-clip-text text-[20cqw] font-light leading-[0.8] tracking-tighter text-transparent"
            
          >
            DATAMAKE
          </span>
        </div>
      </div>
    </footer>
  );
}
