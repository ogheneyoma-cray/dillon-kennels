import Image from "next/image";

/**
 * A book jacket, served straight from /public rather than through
 * /_next/image, since these are static pre-rendered covers.
 */
export default function BookCover({
  src,
  alt,
  className = "",
  priority = false,
  eager = false,
  sizes,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  eager?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={600}
      height={900}
      unoptimized
      priority={priority}
      loading={eager && !priority ? "eager" : undefined}
      sizes={sizes}
      className={className}
    />
  );
}
