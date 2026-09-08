/**
 * Standalone mark: a rounded ink-teal square with a coral roof/house
 * silhouette — reads clearly at favicon size and carries no location or
 * contact detail, per brand guidance.
 */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      <rect width="40" height="40" rx="10" fill="#14302C" />
      <path d="M20 9 8 18.5V31h9v-8h6v8h9V18.5L20 9Z" fill="#FF6B4A" />
      <circle cx="20" cy="20.5" r="2.1" fill="#14302C" />
    </svg>
  );
}

/**
 * Caribcore wordmark: the mark beside a bold wordmark — echoing the way
 * the Ejon reference pairs a dark nav with a bold display wordmark, without
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
        Caribcore
      </span>
    </span>
  );
}
