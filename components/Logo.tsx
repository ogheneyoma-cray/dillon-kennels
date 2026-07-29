export default function Logo({
  className = "",
  markClassName = "text-rose",
  wordmarkClassName = "text-ink",
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
        <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1" />
        <path
          d="M13 27V13L27 27V13"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className={`font-display text-2xl uppercase tracking-widest2 ${wordmarkClassName}`}
      >
        Nudgenic
      </span>
    </span>
  );
}
