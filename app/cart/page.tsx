"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { formatMoney } from "@/lib/currency";

const FREE_SHIPPING_THRESHOLD_USD = 45;

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, cartTotal, cartCount } =
    useCart();
  const { currency } = useCurrency();

  if (items.length === 0) {
    return (
      <div className="boxed flex flex-col items-center py-28 text-center">
        <h1 className="head-xl text-pine">Your basket is empty</h1>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-mudd">
          Thirty pieces of kidswear are waiting on the other side of this
          button.
        </p>
        <Link href="/shop" className="btn-solid mt-8">
          Start shopping
        </Link>
      </div>
    );
  }

  const shortfall = FREE_SHIPPING_THRESHOLD_USD - cartTotal;

  return (
    <div className="boxed py-14">
      <h1 className="head-xl text-pine">
        Your basket · {cartCount} {cartCount === 1 ? "item" : "items"}
      </h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
        <ul className="divide-y divide-pine/10 border-y border-pine/10">
          {items.map((item) => (
            <li key={item.id} className="flex gap-5 py-6">
              <Link
                href={`/shop/${item.slug}`}
                className="relative h-32 w-24 shrink-0 overflow-hidden bg-shell sm:h-40 sm:w-32"
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
                  className="font-display text-[15px] font-bold uppercase tracking-wide text-pine transition-colors hover:text-tangerine"
                >
                  {item.name}
                </Link>
                <p className="mt-1 text-sm text-mudd">
                  {formatMoney(item.price, currency)} each
                </p>

                <div className="mt-auto flex flex-wrap items-center gap-4 pt-4">
                  <div className="flex items-center border-2 border-pine/15">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label={`Decrease quantity of ${item.name}`}
                      className="flex h-10 w-10 items-center justify-center text-pine transition-colors hover:bg-shell"
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-sm font-bold">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label={`Increase quantity of ${item.name}`}
                      className="flex h-10 w-10 items-center justify-center text-pine transition-colors hover:bg-shell"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="text-[12px] font-bold uppercase tracking-bold3 text-mudd underline underline-offset-4 transition-colors hover:text-tangerine"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <p className="text-[15px] font-extrabold text-pine">
                {formatMoney(item.price * item.quantity, currency)}
              </p>
            </li>
          ))}
        </ul>

        <aside className="h-fit border border-pine/10 bg-white p-7 lg:sticky lg:top-28">
          <h2 className="head-sm text-pine">Order summary</h2>

          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-mudd">Subtotal</dt>
              <dd className="font-bold">{formatMoney(cartTotal, currency)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-mudd">Delivery</dt>
              <dd className="font-bold">
                {shortfall <= 0 ? "Free" : "Calculated at checkout"}
              </dd>
            </div>
          </dl>

          {shortfall > 0 && (
            <p className="mt-5 border-l-4 border-sunshine bg-sunshine/15 px-4 py-3 text-[13px] leading-relaxed text-forest">
              Add {formatMoney(shortfall, currency)} more for free Ilorin
              delivery.
            </p>
          )}

          <div className="mt-6 flex justify-between border-t border-pine/10 pt-5">
            <span className="font-display text-base font-bold uppercase tracking-bold3">
              Total
            </span>
            <span className="text-lg font-extrabold">
              {formatMoney(cartTotal, currency)}
            </span>
          </div>

          <Link href="/checkout" className="btn-solid mt-7 w-full">
            Checkout
          </Link>
          <Link
            href="/shop"
            className="mt-3 block text-center text-[12px] font-bold uppercase tracking-bold3 text-mudd underline underline-offset-4 transition-colors hover:text-tangerine"
          >
            Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}
