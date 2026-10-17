export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="10"
      viewBox="0 0 22 12"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M3 1h16l-2.5 4H.5L3 1Z" fill="currentColor" />
      <path
        d="M3 7h16l-2.5 4H.5L3 7Z"
        fill="currentColor"
        opacity="0.45"
      />
    </svg>
  );
}

export function PanelMark({ className = "" }: { className?: string }) {
  return (
    <svg
      width="22"
      height="12"
      viewBox="0 0 22 12"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M3 1h16l-2.5 4H.5L3 1Z" fill="currentColor" />
      <path
        d="M3 7h16l-2.5 4H.5L3 7Z"
        fill="currentColor"
        opacity="0.45"
      />
    </svg>
  );
}
