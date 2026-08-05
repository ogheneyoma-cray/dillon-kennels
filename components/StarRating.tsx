/**
 * Amber five-star row. The reference prints filled and empty stars in the same
 * amber, with the empty ones dropped to a pale grey — never a half star.
 */
export default function StarRating({
  rating,
  reviews,
  className = "",
}: {
  rating: number;
  reviews?: number;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <span
        className="inline-flex items-center gap-0.5"
        aria-label={`Rated ${rating} out of 5`}
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            width="12"
            height="12"
            viewBox="0 0 20 20"
            aria-hidden="true"
            className={star <= rating ? "text-amber" : "text-line-firm"}
            fill="currentColor"
          >
            <path d="m10 1.6 2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L1.6 7.7l5.8-.8L10 1.6Z" />
          </svg>
        ))}
      </span>
      {reviews !== undefined && (
        <span className="text-[11px] text-muted">({reviews})</span>
      )}
    </span>
  );
}
