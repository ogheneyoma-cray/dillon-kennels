/**
 * Lawin Store wordmark: a berry rounded-square badge holding a stacked "L"
 * monogram built from two offset bars in white and peach — reads like a
 * browser-window corner fold, nodding to themes/templates — beside the
 * "Lawin Store" wordmark in ink with a peach dot accent. No location text
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
  const badgeFill = tone === "paper" ? "#FFFFFF" : "#7A1F4B";
  const barColor = tone === "paper" ? "#7A1F4B" : "#FFFFFF";
  const dotColor = "#FF9466";

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
        <rect x="10" y="8" width="4.5" height="18" rx="2" fill={barColor} />
        <rect x="10" y="21.5" width="14" height="4.5" rx="2" fill={barColor} />
        <circle cx="24.5" cy="9.5" r="2.6" fill={dotColor} />
      </svg>
      <span
        className={`font-display text-2xl font-bold leading-none tracking-tight sm:text-[1.6rem] ${wordColor} ${wordClassName}`}
      >
        Lawin <span style={{ color: dotColor }}>Store</span>
      </span>
    </span>
  );
}
