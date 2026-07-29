export default function Logo({
  className = "",
  markClassName = "text-acid",
  wordmarkClassName = "text-bone",
}: {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 40 40"
        fill="none"
        className={`shrink-0 ${markClassName}`}
        aria-hidden="true"
      >
        <rect x="1" y="1" width="38" height="38" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M9 10 L20 30 L31 10"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
      </svg>
      <span
        className={`font-display text-2xl uppercase tracking-widest2 ${wordmarkClassName}`}
      >
        Vergemind
      </span>
    </span>
  );
}
