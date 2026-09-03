"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { formatMoney } from "@/lib/currency";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, cartTotal } = useCart();
  const { currency } = useCurrency();

  if (items.length === 0) {
    return (
      <div className="container-page flex flex-col items-center justify-center py-24 text-center">
        <p className="eyebrow">Your Cart</p>
        <h1 className="section-heading mt-3">It&apos;s looking empty in here</h1>
        <p className="mt-4 max-w-sm text-ink-soft">
          You haven&apos;t added anything to your cart yet. Explore the
          collection and find something useful.
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
                className="relative h-24 w-24 shrink-0 overflow-hidden bg-cream sm:h-32 sm:w-32"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </Link>

              <div className="flex flex-1 flex-col justify-between">
                <div className="flex justify-between gap-3">
                  <div>
                    <Link
                      href={`/shop/${item.slug}`}
                      className="font-display text-base font-medium leading-snug text-navy hover:text-rust"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-1 text-sm text-ink-soft">
                      {formatMoney(item.price, currency)} each
                    </p>
                  </div>
                  <p className="whitespace-nowrap font-bold text-ink">
                    {formatMoney(item.price * item.quantity, currency)}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center border border-navy/20">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label={`Decrease quantity of ${item.name}`}
                      className="flex h-10 w-10 items-center justify-center text-navy transition-colors hover:bg-cream"
                    >
                      −
                    </button>
                    <span className="flex h-10 w-10 items-center justify-center border-x border-navy/20 text-sm font-bold">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label={`Increase quantity of ${item.name}`}
                      className="flex h-10 w-10 items-center justify-center text-navy transition-colors hover:bg-cream"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="min-h-[44px] px-2 text-sm font-semibold text-ink-soft underline underline-offset-4 hover:text-rust"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <aside className="h-fit border border-line bg-cream p-6">
          <h2 className="font-display text-xl font-medium text-navy">Order Summary</h2>
          <div className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between text-ink-soft">
              <span>Subtotal</span>
              <span>{formatMoney(cartTotal, currency)}</span>
            </div>
            <div className="flex justify-between text-ink-soft">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
          </div>
          <div className="mt-5 flex justify-between border-t border-line pt-5 font-display text-lg font-medium text-navy">
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
