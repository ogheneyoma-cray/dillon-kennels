/**
 * zenpulse digital wordmark: a rounded indigo badge holding a small pulse
 * (heartbeat) line — a literal "digital pulse" mark distinct from every
 * other brand's glyphs — beside a two-part wordmark: "zenpulse" set bold in
 * ink, "digital" set smaller and lighter in sage. No location text lives
 * here or on the home page.
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
  const subColor = tone === "paper" ? "text-sage-pale" : "text-sage-dark";
  const badgeFill = tone === "paper" ? "#F5F3FC" : "#4C3FA0";
  const pulseStroke = tone === "paper" ? "#4C3FA0" : "#F5F3FC";

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
          d="M6 18h4l2.4-6 3.2 12 2.4-9 1.8 3H28"
          stroke={pulseStroke}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className={`flex items-baseline gap-1.5 font-display leading-none ${wordClassName}`}
      >
        <span className={`text-2xl font-bold tracking-tight sm:text-[1.7rem] ${wordColor}`}>
          zenpulse
        </span>
        <span className={`text-sm font-medium tracking-wide ${subColor}`}>
          digital
        </span>
      </span>
    </span>
  );
}
