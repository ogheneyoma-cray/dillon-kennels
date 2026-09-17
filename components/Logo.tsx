export default function Logo({
  className = "",
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "white";
}) {
  const wordColor = tone === "white" ? "text-white" : "text-ink";
  const ringColor = tone === "white" ? "#FFFFFF" : "#2451C4";
  const dotColor = "#FF5470";

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
        <circle cx="12" cy="17" r="3" fill={dotColor} />
        <path
          d="M18 17a6 6 0 0 1-6 6"
          stroke={ringColor}
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />
        <path
          d="M23 17a11 11 0 0 1-11 11"
          stroke={ringColor}
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
          opacity="0.55"
        />
        <path
          d="M28 17A16 16 0 0 1 12 33"
          stroke={ringColor}
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
          opacity="0.25"
        />
      </svg>
      <span
        className={`font-display text-xl font-bold leading-none tracking-tight ${wordColor}`}
      >
        Echo <span style={{ color: dotColor }}>E-Rom</span>
      </span>
    </span>
  );
}
