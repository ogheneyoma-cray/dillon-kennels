export default function Logo({
  className = "",
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "white";
}) {
  const wordColor = tone === "white" ? "text-oat" : "text-aubergine";
  const ringColor = tone === "white" ? "#FAF4EC" : "#3D2436";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true" className="shrink-0">
        <rect x="1" y="1" width="28" height="28" rx="14" stroke={ringColor} strokeWidth="1.4" />
        <path d="M15 7L21 15L15 23L9 15L15 7Z" fill="#E8A57C" />
      </svg>
      <span className={`font-display text-xl italic leading-none tracking-tight ${wordColor}`}>
        Evintat
      </span>
    </span>
  );
}
