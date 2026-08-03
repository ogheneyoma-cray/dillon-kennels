/** Five-star row used on product cards and list rows. */
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
    <span
      className={`inline-flex items-center gap-1 ${className}`}
      aria-label={`Rated ${rating} out of 5${
        reviews === undefined ? "" : ` from ${reviews} reviews`
      }`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          width="12"
          height="12"
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={index < rating ? "text-camel" : "text-line"}
        >
          <path
            d="m10 1.6 2.5 5.1 5.6.8-4.05 3.95.96 5.55L10 14.4l-5.01 2.6.96-5.55L1.9 7.5l5.6-.8L10 1.6Z"
            fill="currentColor"
          />
        </svg>
      ))}
      {reviews !== undefined && (
        <span className="ml-1 text-[11px] text-mist">({reviews})</span>
      )}
    </span>
  );
}
