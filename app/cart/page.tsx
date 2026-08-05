"use client";

import Link from "next/link";
import BookCover from "@/components/BookCover";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { formatMoney } from "@/lib/currency";

export default function CartPage() {
  const { items, removeFromCart, cartTotal, cartCount } = useCart();
  const { currency } = useCurrency();

  if (items.length === 0) {
    return (
      <div className="wrap flex flex-col items-center py-28 text-center lg:py-36">
        <p className="eyebrow">Nothing here yet</p>
        <h1 className="display-1 mt-3">Your basket is empty</h1>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-body">
          Twenty books are sitting on the other side of this button.
        </p>
        <Link href="/shop" className="btn-clay mt-8">
          Browse the catalogue
        </Link>
      </div>
    );
  }

  return (
    <div className="wrap py-14 lg:py-16">
      <p className="eyebrow">Your basket</p>
      <h1 className="display-2 mt-3">
        {cartCount} {cartCount === 1 ? "title" : "titles"} held
      </h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_340px]">
        <ul className="divide-y divide-line border-y border-line">
          {items.map((item) => (
            <li key={item.id} className="flex items-center gap-5 py-6">
              <Link href={`/shop/${item.slug}`} className="shrink-0">
                {/* The basket renders only after hydration, and a lazy image
                    inserted at that point does not load until the first
                    scroll — so these jackets are eager. */}
                <BookCover
                  src={item.image}
                  alt={item.name}
                  eager
                  className="h-32 w-[86px] rounded-r-sm object-cover shadow-card"
                />
              </Link>

              <div className="flex flex-1 flex-col">
                <Link
                  href={`/shop/${item.slug}`}
                  className="font-display text-[17px] font-bold text-slate transition-colors hover:text-clay"
                >
                  {item.name}
                </Link>
                <p className="mt-1.5 text-sm text-muted">
                  {formatMoney(item.price, currency)} · EPUB, MOBI and PDF
                </p>

                <button
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                  className="mt-auto w-fit pt-4 font-display text-[12px] font-semibold uppercase tracking-wide2 text-muted underline underline-offset-4 transition-colors hover:text-clay"
                >
                  Remove
                </button>
              </div>

              <p className="font-display text-[17px] font-bold text-clay">
                {formatMoney(item.price * item.quantity, currency)}
              </p>
            </li>
          ))}
        </ul>

        <aside className="card h-fit p-7 shadow-card lg:sticky lg:top-28">
          <h2 className="font-display text-[17px] font-bold text-slate">
            Order summary
            <span aria-hidden="true" className="mt-3 block h-1 w-9 rounded-full bg-clay" />
          </h2>

          <dl className="mt-6 space-y-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-body">Subtotal</dt>
              <dd className="text-slate">{formatMoney(cartTotal, currency)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-body">Delivery</dt>
              <dd className="text-slate">Free — instant download</dd>
            </div>
          </dl>

          <p className="mt-5 rounded-2xl bg-sand px-5 py-4 text-[13px] leading-relaxed text-body">
            Every title is a download. Nothing ships, so there is no delivery
            charge and no address needed beyond a billing one.
          </p>

          <div className="mt-6 flex items-baseline justify-between border-t border-line pt-5">
            <span className="font-display text-[12px] font-semibold uppercase tracking-wide2 text-muted">
              Total
            </span>
            <span className="font-display text-2xl font-bold text-clay">
              {formatMoney(cartTotal, currency)}
            </span>
          </div>

          <Link href="/checkout" className="btn-clay mt-7 w-full">
            Checkout
          </Link>
          <Link
            href="/shop"
            className="mt-4 block text-center font-display text-[12px] font-semibold uppercase tracking-wide2 text-muted underline underline-offset-4 transition-colors hover:text-clay"
          >
            Keep looking
          </Link>
        </aside>
      </div>
    </div>
  );
}
