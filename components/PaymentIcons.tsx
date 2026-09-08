/**
 * Small card-network indicators for the footer and checkout page. These are
 * simplified, generic renderings used only to signal accepted payment
 * networks — not a reproduction of either brand's official artwork.
 */
export function MastercardMark({ className = "h-6 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 24" fill="none" aria-label="Mastercard" role="img" className={className}>
      <rect width="40" height="24" rx="4" fill="#14302C" />
      <circle cx="17" cy="12" r="7" fill="#EB5B2C" />
      <circle cx="25" cy="12" r="7" fill="#F2A93B" fillOpacity="0.9" />
    </svg>
  );
}

export function VisaMark({ className = "h-6 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 24" fill="none" aria-label="Visa" role="img" className={className}>
      <rect width="40" height="24" rx="4" fill="#14302C" />
      <text
        x="20"
        y="16.5"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontStyle="italic"
        fontWeight="bold"
        fontSize="11"
        fill="#FFFFFF"
      >
        VISA
      </text>
    </svg>
  );
}
