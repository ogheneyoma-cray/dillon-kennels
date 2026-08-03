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
      <div className="frame flex flex-col items-center py-28 text-center">
        <h1 className="display-1">Your bag is empty</h1>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ash">
          Twenty pieces are waiting on the other side of this button.
        </p>
        <Link href="/shop" className="btn-camel mt-8">
          Start shopping
        </Link>
      </div>
    );
  }

  const shortfall = FREE_SHIPPING_THRESHOLD_USD - cartTotal;

  return (
    <div className="frame py-14">
      <h1 className="display-2">
        Your bag · {cartCount} {cartCount === 1 ? "item" : "items"}
      </h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_340px]">
        <ul className="divide-y divide-line border-y border-line">
          {items.map((item) => (
            <li key={item.id} className="flex gap-5 py-6">
              <Link
                href={`/shop/${item.slug}`}
                className="relative h-32 w-24 shrink-0 overflow-hidden bg-haze sm:h-40 sm:w-32"
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
                  className="text-[13px] font-semibold uppercase tracking-wide2 text-onyx transition-colors hover:text-camel"
                >
                  {item.name}
                </Link>
                <p className="mt-1 text-sm text-ash">
                  {formatMoney(item.price, currency)} each
                </p>

                <div className="mt-auto flex flex-wrap items-center gap-4 pt-4">
                  <div className="flex items-center border border-line">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label={`Decrease quantity of ${item.name}`}
                      className="flex h-10 w-10 items-center justify-center text-onyx transition-colors hover:bg-haze"
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-sm font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label={`Increase quantity of ${item.name}`}
                      className="flex h-10 w-10 items-center justify-center text-onyx transition-colors hover:bg-haze"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="text-[11px] font-bold uppercase tracking-wide2 text-ash underline underline-offset-4 transition-colors hover:text-camel"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <p className="text-[15px] font-semibold text-onyx">
                {formatMoney(item.price * item.quantity, currency)}
              </p>
            </li>
          ))}
        </ul>

        <aside className="h-fit border border-line p-7 lg:sticky lg:top-32">
          <h2 className="text-[13px] font-bold uppercase tracking-wide2 text-onyx">
            Order summary
          </h2>

          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-ash">Subtotal</dt>
              <dd className="font-semibold">
                {formatMoney(cartTotal, currency)}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-ash">Delivery</dt>
              <dd className="font-semibold">
                {shortfall <= 0 ? "Free" : "Calculated at checkout"}
              </dd>
            </div>
          </dl>

          {shortfall > 0 && (
            <p className="mt-5 border-l-2 border-camel bg-blush px-4 py-3 text-[13px] leading-relaxed text-onyx">
              Add {formatMoney(shortfall, currency)} more for free delivery.
            </p>
          )}

          <div className="mt-6 flex justify-between border-t border-line pt-5">
            <span className="text-[13px] font-bold uppercase tracking-wide2">
              Total
            </span>
            <span className="text-lg font-semibold text-camel">
              {formatMoney(cartTotal, currency)}
            </span>
          </div>

          <Link href="/checkout" className="btn-dark mt-7 w-full">
            Checkout
          </Link>
          <Link
            href="/shop"
            className="mt-3 block text-center text-[11px] font-bold uppercase tracking-wide2 text-ash underline underline-offset-4 transition-colors hover:text-camel"
          >
            Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}
