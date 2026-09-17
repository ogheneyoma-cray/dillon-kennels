export default function Logo({
  className = "",
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "white";
}) {
  const wordColor = tone === "white" ? "text-linen" : "text-ink";
  const boxBg = tone === "white" ? "#F6F1E7" : "#23303A";
  const boxFg = tone === "white" ? "#23303A" : "#F6F1E7";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" className="shrink-0">
        <rect width="32" height="32" rx="6" fill={boxBg} />
        <path d="M8 20V13l8-4 8 4v7" stroke={boxFg} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <rect x="12" y="17" width="8" height="6" rx="1" fill="#C97B4A" />
      </svg>
      <span className={`font-display text-xl font-bold leading-none tracking-tight ${wordColor}`}>
        Feteframe
      </span>
    </span>
  );
}
