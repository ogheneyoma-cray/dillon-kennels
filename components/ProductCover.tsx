import Image from "next/image";

/**
 * A product photo, filling its parent's aspect-ratio box. Callers control
 * the box (aspect ratio, rounding) and pass `sizes` for responsive grids.
 */
export default function ProductCover({
  src,
  alt,
  className = "",
  priority = false,
  sizes,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}
