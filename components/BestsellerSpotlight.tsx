"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { formatMoney } from "@/lib/currency";
import { type Product } from "@/data/products";
import BookCover from "@/components/BookCover";
import StarRating from "@/components/StarRating";

/**
 * Blush spotlight band with a giant faded "Bestseller" word behind a single
 * featured title, cycled with prev/next arrows — matching the reference's
 * pink "Best Seller" band.
 */
export default function BestsellerSpotlight({ books }: { books: Product[] }) {
  const [index, setIndex] = useState(0);
  const { addToCart } = useCart();
  const { currency } = useCurrency();
  const book = books[index % books.length];

  const go = (delta: number) => {
    setIndex((current) => (current + delta + books.length) % books.length);
  };

  return (
    <section className="relative overflow-hidden bg-blush">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 select-none text-center font-display text-[18vw] font-bold leading-none text-ink/5"
      >
        Bestseller
      </span>

      <div className="container-page relative flex flex-col items-center gap-10 py-20 lg:flex-row lg:justify-center">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous bestseller"
          className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper shadow-tile transition-transform hover:-translate-x-0.5 lg:flex"
        >
          ‹
        </button>

        <div className="w-40 shrink-0 sm:w-48">
          <BookCover src={book.image} alt={`${book.name} cover`} className="shadow-lift w-full" />
        </div>

        <div className="max-w-md text-center lg:text-left">
          <p className="eyebrow">{book.category}</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">{book.name}</h2>
          <p className="mt-2 text-sm uppercase tracking-wider text-ink/50">by {book.author}</p>
          <div className="mt-3 flex justify-center lg:justify-start">
            <StarRating rating={book.rating} />
          </div>
          <p className="mt-4 text-2xl font-bold text-ink">{formatMoney(book.price, currency)}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 lg:justify-start">
            <button type="button" onClick={() => addToCart(book, 1)} className="btn-primary">
              Add to Cart
            </button>
            <Link href={`/shop/${book.slug}`} className="btn-secondary">
              View Details
            </Link>
          </div>
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next bestseller"
          className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper shadow-tile transition-transform hover:translate-x-0.5 lg:flex"
        >
          ›
        </button>
      </div>
    </section>
  );
}
