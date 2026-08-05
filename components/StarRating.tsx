/**
 * Rating shown as five hairline segments rather than stars — the reference
 * never uses a filled icon, so the score is carried by rule length and a
 * numeral. Falls back to a readable label for assistive technology.
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
    <span
      className={`inline-flex items-center gap-2 ${className}`}
      aria-label={`Rated ${rating} out of 5${
        reviews === undefined ? "" : ` from ${reviews} reviews`
      }`}
    >
      <span aria-hidden="true" className="flex items-center gap-[3px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className={`block h-px w-3.5 ${
              index < rating ? "bg-brass" : "bg-rule"
            }`}
          />
        ))}
      </span>
      <span aria-hidden="true" className="text-[11px] tracking-micro text-slate">
        {rating.toFixed(1)}
        {reviews !== undefined && ` · ${reviews}`}
      </span>
    </span>
  );
}
