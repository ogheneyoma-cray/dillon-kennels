/**
 * Hogposh wordmark: a small clay dewdrop mark beside an elegant serif
 * wordmark — distinct from every other brand's glyph. No location text
 * lives here or on the home page.
 */
export default function Logo({
  className = "",
  wordClassName = "",
  tone = "ink",
}: {
  className?: string;
  wordClassName?: string;
  tone?: "ink" | "paper";
}) {
  const wordColor = tone === "paper" ? "text-paper" : "text-ink";
  const dropColor = tone === "paper" ? "#F3E1D6" : "#C1704A";

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="20"
        height="26"
        viewBox="0 0 20 26"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M10 1C10 1 2 11.5 2 17.5C2 21.6 5.6 25 10 25C14.4 25 18 21.6 18 17.5C18 11.5 10 1 10 1Z"
          fill={dropColor}
        />
      </svg>
      <span
        className={`font-display text-2xl leading-none tracking-tight sm:text-[1.7rem] ${wordColor} ${wordClassName}`}
      >
        Hogposh
      </span>
    </span>
  );
}
