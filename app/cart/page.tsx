"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="container-page flex flex-col items-center justify-center py-24 text-center">
        <p className="eyebrow">Your Cart</p>
        <h1 className="section-heading mt-3">Your bag is empty</h1>
        <p className="mt-4 max-w-sm text-ink/70">
          You haven't added anything yet. Explore the collection and find
          something you'll love.
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
        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {items.map((item) => (
            <li key={item.id} className="flex gap-4 py-6 sm:gap-6">
              <Link
                href={`/shop/${item.slug}`}
                className="relative h-28 w-24 shrink-0 overflow-hidden bg-blush sm:h-32 sm:w-28"
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
                      className="text-sm font-semibold uppercase tracking-wide text-ink hover:text-rose"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-1 text-sm text-ink/60">
                      {formatPrice(item.price)} each
                    </p>
                  </div>
                  <p className="whitespace-nowrap font-semibold text-ink">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center rounded-full border border-ink/20">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label={`Decrease quantity of ${item.name}`}
                      className="flex h-10 w-10 items-center justify-center text-ink transition-colors hover:bg-blush"
                    >
                      −
                    </button>
                    <span className="flex h-10 w-10 items-center justify-center text-sm font-semibold">
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
                    className="min-h-[44px] px-2 text-xs font-semibold uppercase tracking-widest2 text-ink/60 hover:text-rose"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <aside className="h-fit border border-ink/10 bg-paper p-6">
          <h2 className="font-display text-xl text-ink">Order Summary</h2>
          <div className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between text-ink/70">
              <span>Subtotal</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>
            <div className="flex justify-between text-ink/70">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
          </div>
          <div className="mt-5 flex justify-between border-t border-ink/10 pt-5 font-display text-lg text-ink">
            <span>Total</span>
            <span>{formatPrice(cartTotal)}</span>
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
