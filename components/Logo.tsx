/**
 * Silverpoodles wordmark: a steel-ink rounded-square badge holding two
 * offset silver pill shapes forming an abstract "S", with a single fuchsia
 * dot accent — beside the "Silverpoodles" wordmark in ink. No location
 * text lives here or on the home page.
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
  const badgeFill = tone === "paper" ? "#FFFFFF" : "#232733";
  const pillColor = tone === "paper" ? "#232733" : "#C7CCD6";
  const dotColor = "#E8148C";

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
        <rect x="8" y="10" width="15" height="5" rx="2.5" fill={pillColor} />
        <rect x="11" y="19" width="15" height="5" rx="2.5" fill={pillColor} />
        <circle cx="25.5" cy="12.5" r="2.4" fill={dotColor} />
      </svg>
      <span
        className={`font-display text-xl font-bold leading-none tracking-tight sm:text-[1.4rem] ${wordColor} ${wordClassName}`}
      >
        Silver<span style={{ color: dotColor }}>poodles</span>
      </span>
    </span>
  );
}
