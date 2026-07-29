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
        <h1 className="section-heading mt-3">It's Empty In Here</h1>
        <p className="mt-4 max-w-sm text-bone/70">
          You haven't added anything to your cart yet. Explore the
          collection and find something to wear.
        </p>
        <Link href="/shop" className="btn-primary mt-8">
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow text-center">Your Cart</p>
      <h1 className="section-heading mt-3 text-center">Shopping Bag</h1>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
        <ul className="divide-y divide-bone/10 border-y border-bone/10">
          {items.map((item) => (
            <li key={item.id} className="flex gap-4 py-6 sm:gap-6">
              <Link
                href={`/shop/${item.slug}`}
                className="relative h-28 w-24 shrink-0 overflow-hidden bg-graphite sm:h-32 sm:w-28"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </Link>

              <div className="flex flex-1 flex-col justify-between">
                <div className="flex justify-between gap-3">
                  <div>
                    <Link
                      href={`/shop/${item.slug}`}
                      className="text-sm font-bold uppercase tracking-wide text-bone hover:text-acid"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-1 text-sm text-bone/60">
                      {formatMoney(item.price, currency)} each
                    </p>
                  </div>
                  <p className="whitespace-nowrap font-semibold text-bone">
                    {formatMoney(item.price * item.quantity, currency)}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center border border-bone/25">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label={`Decrease quantity of ${item.name}`}
                      className="flex h-10 w-10 items-center justify-center text-bone transition-colors hover:bg-graphite"
                    >
                      −
                    </button>
                    <span className="flex h-10 w-10 items-center justify-center border-x border-bone/25 text-sm font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label={`Increase quantity of ${item.name}`}
                      className="flex h-10 w-10 items-center justify-center text-bone transition-colors hover:bg-graphite"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="min-h-[44px] px-2 text-xs font-bold uppercase tracking-widest2 text-bone/60 hover:text-ember"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <aside className="h-fit border border-bone/10 bg-graphite p-6">
          <h2 className="font-display text-xl text-bone">Order Summary</h2>
          <div className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between text-bone/70">
              <span>Subtotal</span>
              <span>{formatMoney(cartTotal, currency)}</span>
            </div>
            <div className="flex justify-between text-bone/70">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
          </div>
          <div className="mt-5 flex justify-between border-t border-bone/10 pt-5 font-display text-lg text-bone">
            <span>Total</span>
            <span>{formatMoney(cartTotal, currency)}</span>
          </div>
          <Link href="/checkout" className="btn-primary mt-6 w-full">
            Proceed to Checkout
          </Link>
          <Link href="/shop" className="btn-ghost mt-4 flex w-full justify-center">
            Continue Shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}
