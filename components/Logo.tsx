export default function Logo({
  className = "",
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "white";
}) {
  const wordColor = tone === "white" ? "text-white" : "text-ink";
  const boxBg = tone === "white" ? "#FFFFFF" : "#15130D";
  const boxFg = "#FFD400";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="32" height="32" fill={boxBg} />
        <path d="M16 6L24 20H8L16 6Z" fill={boxFg} />
        <circle cx="16" cy="17" r="2.4" fill={boxBg} />
      </svg>
      <span
        className={`font-display text-xl font-extrabold uppercase leading-none tracking-tight ${wordColor}`}
      >
        Site Optex
      </span>
    </span>
  );
}
