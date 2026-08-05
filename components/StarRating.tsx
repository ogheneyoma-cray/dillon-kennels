/** Clay five-star row; the empty stars drop to a warm line colour. */
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
            width="13"
            height="13"
            viewBox="0 0 20 20"
            aria-hidden="true"
            className={star <= rating ? "text-clay" : "text-line"}
            fill="currentColor"
          >
            <path d="m10 1.6 2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L1.6 7.7l5.8-.8L10 1.6Z" />
          </svg>
        ))}
      </span>
      {reviews !== undefined && (
        <span className="text-[12px] text-muted">({reviews})</span>
      )}
    </span>
  );
}
