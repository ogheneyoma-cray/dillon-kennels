export default function Logo({
  className = "",
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "white";
}) {
  const wordColor = tone === "white" ? "text-paper" : "text-ink";
  const strokeColor = tone === "white" ? "#FBF8F4" : "#201C1A";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true" className="shrink-0">
        <circle cx="15" cy="15" r="14" stroke={strokeColor} strokeWidth="1.4" />
        <path d="M15 6v18M6 15h18" stroke="#D6402A" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <span className={`font-display text-2xl italic leading-none tracking-tight ${wordColor}`}>
        Spruce Savers
      </span>
    </span>
  );
}
