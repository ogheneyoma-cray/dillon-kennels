/**
 * alcopip wordmark: a small bookmark-ribbon mark ahead of a two-weight
 * wordmark, "alco" set in ink, "pip" in wine italic — echoing the way the
 * Booklovers reference splits its own mark across two colors, without
 * reusing its glyphs. No location text lives here or on the home page.
 */
export default function Logo({
  className = "",
  wordClassName = "",
  tone = "ink",
}: {
  className?: string;
  wordClassName?: string;
  tone?: "ink" | "cream";
}) {
  const wordColor = tone === "cream" ? "text-cream" : "text-ink";
  const accentColor = tone === "cream" ? "text-gold" : "text-wine";
  const ribbonColor = tone === "cream" ? "text-gold" : "text-wine";
  const bandColor = tone === "cream" ? "text-cream" : "text-ink";

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="26"
        height="30"
        viewBox="0 0 26 30"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M2 2h22v26l-11-6-11 6V2Z"
          fill="currentColor"
          className={ribbonColor}
        />
        <path d="M2 2h22v6H2V2Z" fill="currentColor" className={bandColor} />
      </svg>
      <span
        className={`font-display text-2xl leading-none tracking-tight sm:text-3xl ${wordColor} ${wordClassName}`}
      >
        alco<em className={`font-semibold italic ${accentColor}`}>pip</em>
      </span>
    </span>
  );
}
