/**
 * Placeholder Shams Light wordmark: a graphite badge holding a small
 * sunburst-and-circuit glyph in electric blue and sunbeam gold, beside the
 * "Shams Light" wordmark. Swap the SVG here once the client-supplied logo
 * artwork is ready — every other component reads the logo only through
 * this component. No location text lives here or on the home page.
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
  const wordColor = tone === "paper" ? "text-paper" : "text-dusk";
  const badgeFill = tone === "paper" ? "#FFFFFF" : "#0E1420";
  const sunColor = tone === "paper" ? "#0E1420" : "#F5B942";

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
        <circle cx="17" cy="17" r="5.5" fill={sunColor} />
        <path
          d="M17 6v3.5M17 24.5V28M6 17h3.5M24.5 17H28M9.6 9.6l2.4 2.4M22 22l2.4 2.4M24.4 9.6 22 12M12 22l-2.4 2.4"
          stroke="#2F6FED"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={`font-display text-2xl font-semibold leading-none tracking-tight sm:text-[1.6rem] ${wordColor} ${wordClassName}`}
      >
        Shams<span style={{ color: "#2F6FED" }}>Light</span>
      </span>
    </span>
  );
}
