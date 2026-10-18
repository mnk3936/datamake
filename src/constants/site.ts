import type { CSSProperties } from "react";

export const EMAIL = "adeel@categoricalanalytics.com";
export const PHONE = "+91 98765 43210";
export const PHONE_TEL = "+919876543210";

export const SERIF: CSSProperties = {
  fontFamily: "'Garet', 'Merriweather', Georgia, serif",
  letterSpacing: "-0.015em",
};

export const h2 =
  "mx-auto mt-6 max-w-3xl text-center text-3xl font-light leading-[1.2] tracking-tight md:text-5xl";

export const THEME_CSS = `
.dm-light{
  color-scheme:light;
  --bg-a:#fff;
  --fg-a:#0a0a0a;
  --mut-a:#525252;
  --mut2-a:#404040;
  --soft-a:#a3a3a3;
  --line-a:#e5e5e5;
  --dash-a:rgba(0,0,0,.1);
  --dash2:rgba(0,0,0,.15);
  --corner:rgba(0,0,0,.25);
  --accent:#2563eb;
  --bg-blur:rgba(255,255,255,.9);
  --btn-bg:#0a0a0a;
  --btn-fg:#fff;
  --card-ring:rgba(255,255,255,.3);
  --sec-line:transparent
}
.dm-dark{
  color-scheme:dark;
  --bg-a:#000000;
  --fg-a:#f4f4f5;
  --mut-a:#a1a1aa;
  --mut2-a:#d4d4d8;
  --soft-a:#63636d;
  --line-a:rgba(255,255,255,.12);
  --dash-a:rgba(255,255,255,.1);
  --dash2:rgba(255,255,255,.14);
  --corner:rgba(255,255,255,.3);
  --accent:#60a5fa;
  --bg-blur:rgba(0,0,0,.85);
  --btn-bg:#fff;
  --btn-fg:#0a0a0a;
  --card-ring:rgba(255,255,255,.14);
  --sec-line:rgba(255,255,255,.08)
}

@media (prefers-reduced-motion:no-preference){
  .dm-root *{
    transition:background-color .25s ease,border-color .25s ease,color .25s ease
  }
}
`;
