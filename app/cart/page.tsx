"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { formatMoney } from "@/lib/currency";

const FREE_SHIPPING_THRESHOLD_USD = 60;

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, cartTotal, cartCount } =
    useCart();
  const { currency } = useCurrency();

  if (items.length === 0) {
    return (
      <div className="wrap flex flex-col items-center py-28 text-center lg:py-36">
        <p className="script-line">Nothing here yet</p>
        <h1 className="display-1 mt-2">Your bag is empty</h1>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-body">
          Twenty pairs are sitting on the other side of this button.
        </p>
        <Link href="/shop" className="btn-rose mt-8">
          Open the shop
        </Link>
      </div>
    );
  }

  const shortfall = FREE_SHIPPING_THRESHOLD_USD - cartTotal;

  return (
    <div className="wrap py-14 lg:py-16">
      <p className="script-line">Your bag</p>
      <h1 className="display-2 mt-2">
        {cartCount} {cartCount === 1 ? "pair" : "pairs"} held
      </h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_340px]">
        <ul className="divide-y divide-line border-y border-line">
          {items.map((item) => (
            <li key={item.id} className="flex gap-5 py-6">
              <Link
                href={`/shop/${item.slug}`}
                className="relative h-28 w-28 shrink-0 overflow-hidden border border-line bg-mist sm:h-32 sm:w-32"
              >
                {/* The bag renders only after hydration, and a lazy image
                    inserted at that point does not load until the first
                    scroll — so these thumbnails are eager. */}
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  loading="eager"
                  sizes="130px"
                  className="object-cover"
                />
              </Link>

              <div className="flex flex-1 flex-col">
                <Link
                  href={`/shop/${item.slug}`}
                  className="font-display text-[13px] font-semibold uppercase tracking-wide2 text-ink transition-colors hover:text-rose"
                >
                  {item.name}
                </Link>
                <p className="mt-1.5 text-sm text-muted">
                  {formatMoney(item.price, currency)} each
                </p>

                <div className="mt-auto flex flex-wrap items-center gap-4 pt-4">
                  <div className="flex items-center border border-line">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label={`Decrease quantity of ${item.name}`}
                      className="flex h-10 w-10 items-center justify-center text-ink transition-colors hover:text-rose"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-display text-sm font-semibold text-ink">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label={`Increase quantity of ${item.name}`}
                      className="flex h-10 w-10 items-center justify-center text-ink transition-colors hover:text-rose"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="font-display text-[11px] font-semibold uppercase tracking-wide2 text-muted underline underline-offset-4 transition-colors hover:text-rose"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <p className="font-display text-[15px] font-bold text-rose">
                {formatMoney(item.price * item.quantity, currency)}
              </p>
            </li>
          ))}
        </ul>

        <aside className="h-fit border border-line p-7 lg:sticky lg:top-24">
          <h2 className="font-display text-[12px] font-bold uppercase tracking-wide2 text-ink">
            Order summary
            <span aria-hidden="true" className="mt-3 block h-0.5 w-8 bg-rose" />
          </h2>

          <dl className="mt-6 space-y-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-body">Subtotal</dt>
              <dd className="text-ink">{formatMoney(cartTotal, currency)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-body">Delivery</dt>
              <dd className="text-ink">
                {shortfall <= 0 ? "Free" : "Calculated at checkout"}
              </dd>
            </div>
          </dl>

          {shortfall > 0 && (
            <p className="mt-5 border-l-2 border-rose bg-mist px-4 py-3 text-[13px] leading-relaxed text-body">
              Add {formatMoney(shortfall, currency)} more and delivery is on us.
            </p>
          )}

          <div className="mt-6 flex items-baseline justify-between border-t border-line pt-5">
            <span className="font-display text-[11px] font-semibold uppercase tracking-wide2 text-muted">
              Total
            </span>
            <span className="font-display text-2xl font-bold text-rose">
              {formatMoney(cartTotal, currency)}
            </span>
          </div>

          <Link href="/checkout" className="btn-rose mt-7 w-full">
            Checkout
          </Link>
          <Link
            href="/shop"
            className="mt-4 block text-center font-display text-[11px] font-semibold uppercase tracking-wide2 text-muted underline underline-offset-4 transition-colors hover:text-rose"
          >
            Keep looking
          </Link>
        </aside>
      </div>
    </div>
  );
}
