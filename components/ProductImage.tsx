import Image from "next/image";

/**
 * A product photo, served straight from /public rather than through
 * /_next/image, since these are static pre-sourced stock photos.
 */
export default function ProductImage({
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
      width={900}
      height={900}
      unoptimized
      priority={priority}
      loading={eager && !priority ? "eager" : undefined}
      sizes={sizes}
      className={className}
    />
  );
}
