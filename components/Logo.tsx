export default function Logo({
  className = "",
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "white";
}) {
  const wordColor = tone === "white" ? "text-white" : "text-ink";
  const iconBg = tone === "white" ? "#FFFFFF" : "#1B1464";
  const iconFg = tone === "white" ? "#1B1464" : "#FFFFFF";
  const accentColor = "#7C3AED";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="36" height="36" rx="10" fill={iconBg} />
        <path
          d="M10 26V10h5.5c2.8 0 4.5 1.6 4.5 4 0 1.8-1 3.1-2.6 3.6L21 26"
          stroke={iconFg}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="26" cy="12" r="2.5" fill={accentColor} />
      </svg>
      <span
        className={`font-display text-xl font-bold leading-none tracking-tight ${wordColor}`}
      >
        Richa<span style={{ color: accentColor }}>vaid</span>
      </span>
    </span>
  );
}
