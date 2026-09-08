/**
 * Standalone mark: a navy rounded square with a gold open-book glyph and a
 * small rose bookmark ribbon dropped through the spine — reads clearly at
 * favicon size and carries no location or contact detail.
 */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      <rect width="40" height="40" rx="10" fill="#0B1F3A" />
      <path
        d="M20 14c-2.6-1.7-5.8-2.3-9-1.8v13.6c3.2-.5 6.4.1 9 1.8V14Z"
        fill="#F7D046"
      />
      <path
        d="M20 14c2.6-1.7 5.8-2.3 9-1.8v13.6c-3.2-.5-6.4.1-9 1.8V14Z"
        fill="#F7D046"
        fillOpacity="0.85"
      />
      <path d="M18.5 9h3v8h-3z" fill="#D14D72" />
    </svg>
  );
}

/**
 * Acegga wordmark: the mark beside a bold navy wordmark — echoing the way
 * the Bookworm reference pairs a navy nav with a yellow accent, without
 * reusing its glyphs. No location text lives here or on the home page.
 */
export default function Logo({
  className = "",
  wordClassName = "",
  markClassName = "h-9 w-9",
  tone = "ink",
}: {
  className?: string;
  wordClassName?: string;
  markClassName?: string;
  tone?: "ink" | "cream";
}) {
  const wordColor = tone === "cream" ? "text-cream" : "text-ink";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={`${markClassName} shrink-0`} />
      <span
        className={`font-display text-2xl font-bold leading-none tracking-tight sm:text-3xl ${wordColor} ${wordClassName}`}
      >
        Acegga
      </span>
    </span>
  );
}
