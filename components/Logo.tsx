/**
 * Acegga wordmark: a small open-book ribbon mark in bright yellow ahead of
 * a bold navy wordmark — echoing the way the Bookworm reference pairs a
 * navy nav with a yellow accent, without reusing its glyphs. No location
 * text lives here or on the home page.
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
  const ribbonColor = tone === "cream" ? "text-gold" : "text-gold-dark";

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
      </svg>
      <span
        className={`font-display text-2xl font-bold leading-none tracking-tight sm:text-3xl ${wordColor} ${wordClassName}`}
      >
        Acegga
      </span>
    </span>
  );
}
