/**
 * Aims I-Tech wordmark: a black rounded terminal-tile holding a bracket
 * glyph "< / >" in neon terminal-green, beside the "Aims I-Tech" wordmark
 * set in the monospace display face with a blinking-cursor dot. No
 * location text lives here or on the home page.
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
  const tileFill = tone === "paper" ? "#FFFFFF" : "#0A0B0D";
  const glyphColor = tone === "paper" ? "#0A0B0D" : "#22E584";

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
        <rect width="34" height="34" rx="8" fill={tileFill} />
        <path
          d="M13.5 11 8.5 17l5 6M20.5 11l5 6-5 6"
          stroke={glyphColor}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className={`font-display text-xl font-bold leading-none tracking-tight sm:text-[1.35rem] ${wordColor} ${wordClassName}`}
      >
        Aims I-<span style={{ color: "#22E584" }}>Tech</span>
        <span className="animate-pulse" style={{ color: "#22E584" }}>_</span>
      </span>
    </span>
  );
}
