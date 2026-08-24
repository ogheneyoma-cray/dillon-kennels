import type { Product } from "@/data/products";

const COVER_STYLES: Record<Product["coverColor"], { bg: string; ribbon: string; spine: string }> = {
  sky: { bg: "bg-sky", ribbon: "bg-white/25", spine: "bg-sky-dark" },
  gold: { bg: "bg-gold", ribbon: "bg-white/25", spine: "bg-gold-dark" },
  teal: { bg: "bg-teal", ribbon: "bg-white/25", spine: "bg-[#2C8A7F]" },
  rose: { bg: "bg-rose", ribbon: "bg-white/25", spine: "bg-[#B85B4E]" },
  ink: { bg: "bg-ink", ribbon: "bg-white/15", spine: "bg-[#151b26]" },
};

/**
 * A CSS-rendered ebook cover standing in for cover art: a flat color field,
 * two thin ribbon rules top and bottom (echoing the reference's book-cover
 * mockup), the title set in the display serif, and a slim spine down the
 * left edge to suggest a bound book rather than a flat image.
 */
export default function EbookCover({
  product,
  className = "",
}: {
  product: Pick<Product, "name" | "author" | "coverColor" | "category">;
  className?: string;
}) {
  const style = COVER_STYLES[product.coverColor];

  return (
    <div className={`relative flex h-full w-full overflow-hidden rounded-2xl ${style.bg} ${className}`}>
      <span aria-hidden="true" className={`w-[7%] shrink-0 ${style.spine}`} />
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <span className={`block h-[3px] w-10 rounded-full ${style.ribbon}`} />
          <p className="mt-2 text-[10px] font-bold uppercase tracking-widest2 text-white/70">
            {product.category}
          </p>
        </div>
        <div>
          <p className="font-display text-lg font-semibold leading-tight text-white sm:text-xl">
            {product.name}
          </p>
          <span className={`mt-3 block h-[3px] w-10 rounded-full ${style.ribbon}`} />
          <p className="mt-3 font-display text-xs italic text-white/75">{product.author}</p>
        </div>
      </div>
    </div>
  );
}
