/**
 * Cyber Travellers wordmark: a petrol-gate rounded-square badge holding an
 * amber flight-path glyph (a departing plane trail), beside the "Cyber
 * Travellers" wordmark set in the monospace display face with a mint dot
 * accent. No location text lives here or on the home page.
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
  const badgeFill = tone === "paper" ? "#FFFFFF" : "#0D1F1E";
  const glyphColor = tone === "paper" ? "#0D1F1E" : "#FFA630";
  const dotColor = "#4DE8C2";

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
        <rect width="34" height="34" rx="9" fill={badgeFill} />
        <path
          d="M8 20 L26 12 L24 18 L28 17.5"
          stroke={glyphColor}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 20 L14 16"
          stroke={dotColor}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeDasharray="1 3.2"
        />
      </svg>
      <span
        className={`font-display text-lg font-bold leading-none tracking-tight sm:text-xl ${wordColor} ${wordClassName}`}
      >
        Cyber<span style={{ color: dotColor }}>Travellers</span>
      </span>
    </span>
  );
}
