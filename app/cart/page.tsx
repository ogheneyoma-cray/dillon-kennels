"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { formatMoney } from "@/lib/currency";

const FREE_SHIPPING_THRESHOLD_USD = 48;

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, cartTotal, cartCount } =
    useCart();
  const { currency } = useCurrency();

  if (items.length === 0) {
    return (
      <div className="shell flex flex-col items-center py-28 text-center">
        <p className="kicker">Your bag</p>
        <h1 className="display-lg mt-3">Nothing in here yet</h1>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-slate">
          Fifty pieces of nightwear are waiting on the other side of this
          button.
        </p>
        <Link href="/shop" className="pill-dark mt-8">
          Start shopping
        </Link>
      </div>
    );
  }

  const shortfall = FREE_SHIPPING_THRESHOLD_USD - cartTotal;

  return (
    <div className="shell py-14 lg:py-20">
      <p className="kicker">Your bag</p>
      <h1 className="display-lg mt-3">
        {cartCount} {cartCount === 1 ? "piece" : "pieces"}
      </h1>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_380px]">
        <ul className="divide-y divide-midnight/10 border-y border-midnight/10">
          {items.map((item) => (
            <li key={item.id} className="flex gap-5 py-6">
              <Link
                href={`/shop/${item.slug}`}
                className="relative h-32 w-24 shrink-0 overflow-hidden rounded-xl bg-mist sm:h-40 sm:w-32"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </Link>

              <div className="flex flex-1 flex-col">
                <Link
                  href={`/shop/${item.slug}`}
                  className="text-[15px] font-medium text-midnight transition-colors hover:text-orchid"
                >
                  {item.name}
                </Link>
                <p className="mt-1 text-sm text-slate">
                  {formatMoney(item.price, currency)} each
                </p>

                <div className="mt-auto flex flex-wrap items-center gap-4 pt-4">
                  <div className="flex items-center rounded-full border border-midnight/20">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="flex h-10 w-10 items-center justify-center text-midnight transition-colors hover:text-orchid"
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      −
                    </button>
                    <span className="w-7 text-center text-sm font-medium">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="flex h-10 w-10 items-center justify-center text-midnight transition-colors hover:text-orchid"
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="text-[13px] text-slate underline underline-offset-4 transition-colors hover:text-orchid"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <p className="text-[15px] font-semibold text-midnight">
                {formatMoney(item.price * item.quantity, currency)}
              </p>
            </li>
          ))}
        </ul>

        <aside className="h-fit rounded-2xl border border-midnight/10 bg-linen p-7 lg:sticky lg:top-32">
          <h2 className="font-display text-2xl font-light">Order summary</h2>

          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-slate">Subtotal</dt>
              <dd className="font-medium">{formatMoney(cartTotal, currency)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate">Delivery</dt>
              <dd className="font-medium">
                {shortfall <= 0 ? "Free" : "Calculated at checkout"}
              </dd>
            </div>
          </dl>

          {shortfall > 0 && (
            <p className="mt-5 rounded-xl bg-orchid/10 px-4 py-3 text-[13px] leading-relaxed text-orchid-dark">
              Add {formatMoney(shortfall, currency)} more to qualify for free
              Lagos delivery.
            </p>
          )}

          <div className="mt-6 flex justify-between border-t border-midnight/10 pt-5 text-base">
            <span className="font-medium">Total</span>
            <span className="font-semibold">
              {formatMoney(cartTotal, currency)}
            </span>
          </div>

          <Link href="/checkout" className="pill-dark mt-7 w-full">
            Checkout
          </Link>
          <Link
            href="/shop"
            className="mt-3 block text-center text-[13px] text-slate underline underline-offset-4 transition-colors hover:text-orchid"
          >
            Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}
