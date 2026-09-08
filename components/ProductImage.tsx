import Image from "next/image";
import type { Product } from "@/data/products";

/**
 * Product cover art: the Canva-generated illustration on a solid navy
 * panel, with a slim category ribbon top-left — echoing the reference's
 * dark image cards rather than a plain product photo.
 */
export default function ProductImage({
  product,
  className = "",
}: {
  product: Pick<Product, "name" | "category" | "image">;
  className?: string;
}) {
  return (
    <div className={`relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-ink ${className}`}>
      <Image
        src={product.image}
        alt={product.name}
        fill
        sizes="(min-width: 1024px) 380px, 50vw"
        className="object-cover"
      />
      <span className="absolute left-3 top-3 rounded-full bg-panel/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest2 text-teal backdrop-blur">
        {product.category}
      </span>
    </div>
  );
}
