"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { formatMoney } from "@/lib/currency";
import ProductCover from "@/components/ProductCover";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, cartTotal } = useCart();
  const { currency } = useCurrency();

  if (items.length === 0) {
    return (
      <div className="container-page flex flex-col items-center justify-center py-24 text-center">
        <p className="eyebrow">Your Cart</p>
        <h1 className="section-heading mt-3">It&apos;s looking empty in here</h1>
        <p className="mt-4 max-w-sm text-ink-soft">
          You haven&apos;t added any courses to your cart yet. Explore the
          catalogue and find something to learn.
        </p>
        <Link href="/shop" className="btn-primary mt-8">
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Your Cart</p>
      <h1 className="section-heading mt-3">Shopping Cart</h1>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
        <ul className="divide-y divide-line border-y border-line">
          {items.map((item) => (
            <li key={item.id} className="flex gap-4 py-6 sm:gap-6">
              <Link
                href={`/shop/${item.slug}`}
                className="relative aspect-[4/5] w-20 shrink-0 overflow-hidden rounded-xl bg-blush sm:w-28"
              >
                <ProductCover
                  src={item.image}
                  alt={`${item.name} cover`}
                  className="h-full w-full object-cover"
                />
              </Link>

              <div className="flex flex-1 flex-col justify-between">
                <div className="flex justify-between gap-3">
                  <div>
                    <Link
                      href={`/shop/${item.slug}`}
                      className="font-display text-base leading-snug text-ink hover:text-magenta sm:text-lg"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-1 text-sm text-ink-soft">
                      {formatMoney(item.price, currency)} each
                    </p>
                  </div>
                  <p className="whitespace-nowrap font-semibold text-ink">
                    {formatMoney(item.price * item.quantity, currency)}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center rounded-full border border-ink/15">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label={`Decrease quantity of ${item.name}`}
                      className="flex h-10 w-10 items-center justify-center text-ink transition-colors hover:bg-blush"
                    >
                      −
                    </button>
                    <span className="flex h-10 w-10 items-center justify-center border-x border-ink/15 text-sm font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label={`Increase quantity of ${item.name}`}
                      className="flex h-10 w-10 items-center justify-center text-ink transition-colors hover:bg-blush"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="min-h-[44px] px-2 text-sm font-medium text-ink-soft underline underline-offset-4 hover:text-magenta"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <aside className="h-fit rounded-2xl border border-line bg-paper p-6">
          <h2 className="font-display text-xl text-ink">Order Summary</h2>
          <div className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between text-ink-soft">
              <span>Subtotal</span>
              <span>{formatMoney(cartTotal, currency)}</span>
            </div>
            <div className="flex justify-between text-ink-soft">
              <span>Access</span>
              <span>Instant, after payment</span>
            </div>
          </div>
          <div className="mt-5 flex justify-between border-t border-line pt-5 font-display text-lg text-ink">
            <span>Total</span>
            <span>{formatMoney(cartTotal, currency)}</span>
          </div>
          <Link href="/checkout" className="btn-primary mt-6 w-full">
            Proceed to Checkout
          </Link>
          <Link href="/shop" className="btn-ghost mt-3 w-full">
            Continue Shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}
