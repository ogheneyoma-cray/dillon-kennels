/**
 * Webreid wordmark: a rounded navy badge holding a chevron "W" built from
 * two overlapping strokes in magenta and lime — distinct from every other
 * brand's glyph — beside the "Webreid" wordmark in navy with a single
 * magenta dot accent. No location text lives here or on the home page.
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
  const wordColor = tone === "paper" ? "text-paper" : "text-navy";
  const badgeFill = tone === "paper" ? "#FFFFFF" : "#1B1A3B";
  const dotColor = tone === "paper" ? "#8FBF3F" : "#A8408A";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="34" height="34" rx="10" fill={badgeFill} />
        <path
          d="M7 10l4.2 14 3.3-9.5L17.8 24 22 10"
          stroke="#A8408A"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 10l5 14"
          stroke="#8FBF3F"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className={`font-display text-2xl font-semibold leading-none tracking-tight sm:text-[1.7rem] ${wordColor} ${wordClassName}`}
      >
        Webreid<span style={{ color: dotColor }}>.</span>
      </span>
    </span>
  );
}
