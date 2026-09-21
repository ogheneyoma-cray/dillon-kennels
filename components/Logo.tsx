export default function Logo({
  className = "",
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "white";
}) {
  const wordColor = tone === "white" ? "text-white" : "text-ink";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true" className="shrink-0">
        <rect width="34" height="34" rx="10" fill="#12181F" />
        <path d="M10 22c0-3.5 3-4.5 7-4.5s7-1 7-4.5" stroke="#2F6FED" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M24 12c0 3.5-3 4.5-7 4.5s-7 1-7 4.5" stroke="#F2A93B" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
      <span className={`font-display text-xl font-bold leading-none tracking-tight ${wordColor}`}>
        Spruce Savers
      </span>
    </span>
  );
}
