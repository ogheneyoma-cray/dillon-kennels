import Image from "next/image";
import Link from "next/link";
import ShopSearch from "@/components/ShopSearch";

/**
 * Full-bleed hero with centred letterspaced copy, and the category/search bar
 * straddling its lower edge exactly as the reference layout does.
 */
export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[440px] w-full overflow-hidden sm:h-[540px] lg:h-[620px]">
        <Image
          src="/anikoda/hero-main.jpg"
          alt="Two children in Anikoda outfits sitting together"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-pine/55" />

        <div className="boxed relative flex h-full flex-col items-center justify-center pb-16 text-center">
          <p className="text-[11px] font-bold uppercase tracking-mega text-sunshine sm:text-sm">
            New season
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-bold3 text-canvas sm:text-5xl lg:text-6xl">
            Clothes that
            <br />
            keep up
          </h1>
          <p className="mt-5 max-w-md text-sm text-canvas/85 sm:text-base">
            Everyday kidswear made in Ilorin — built for climbing, spilling and
            growing out of far too quickly.
          </p>
          <Link href="/shop" className="btn-ghost-light mt-8">
            Shop the collection
          </Link>
        </div>
      </div>

      {/* Search bar overlapping the hero's bottom edge. */}
      <div className="boxed relative -mt-9 pb-2">
        <ShopSearch />
      </div>
    </section>
  );
}
