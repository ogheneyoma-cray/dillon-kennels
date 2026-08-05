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
      <div className="wrap flex flex-col items-start py-32">
        <p className="eyebrow">Empty</p>
        <h1 className="display-1 mt-5">Your bag is empty</h1>
        <p className="mt-5 max-w-md text-[15px] font-light leading-relaxed text-smoke">
          Twenty jackets are sitting on the other side of this button.
        </p>
        <Link href="/shop" className="btn-brass mt-9">
          Open the collection
        </Link>
      </div>
    );
  }

  const shortfall = FREE_SHIPPING_THRESHOLD_USD - cartTotal;

  return (
    <div className="ruled">
      <div className="wrap py-14">
        <p className="eyebrow">Your bag</p>
        <h1 className="display-2 mt-4">
          {cartCount} {cartCount === 1 ? "piece" : "pieces"} held
        </h1>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_360px]">
          <ul className="divide-y divide-rule border-y border-rule">
            {items.map((item) => (
              <li key={item.id} className="flex gap-5 py-7">
                <Link
                  href={`/shop/${item.slug}`}
                  className="relative h-36 w-28 shrink-0 overflow-hidden border border-rule bg-panel sm:h-44 sm:w-32"
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
                    className="object-cover opacity-90"
                  />
                </Link>

                <div className="flex flex-1 flex-col">
                  <Link
                    href={`/shop/${item.slug}`}
                    className="text-base font-light text-bone transition-colors hover:text-brass"
                  >
                    {item.name}
                  </Link>
                  <p className="mt-1.5 text-sm font-light text-slate">
                    {formatMoney(item.price, currency)} each
                  </p>

                  <div className="mt-auto flex flex-wrap items-center gap-4 pt-4">
                    <div className="flex items-center border border-rule">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label={`Decrease quantity of ${item.name}`}
                        className="flex h-11 w-11 items-center justify-center text-bone transition-colors hover:text-brass"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm text-bone">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label={`Increase quantity of ${item.name}`}
                        className="flex h-11 w-11 items-center justify-center text-bone transition-colors hover:text-brass"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="text-[11px] uppercase tracking-micro text-slate underline underline-offset-4 transition-colors hover:text-brass"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <p className="text-[15px] text-bone">
                  {formatMoney(item.price * item.quantity, currency)}
                </p>
              </li>
            ))}
          </ul>

          <aside className="card h-fit p-8 lg:sticky lg:top-32">
            <h2 className="text-[11px] uppercase tracking-micro text-brass">
              Order summary
            </h2>

            <dl className="mt-7 space-y-4 text-sm font-light">
              <div className="flex justify-between">
                <dt className="text-smoke">Subtotal</dt>
                <dd className="text-bone">{formatMoney(cartTotal, currency)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-smoke">Delivery</dt>
                <dd className="text-bone">
                  {shortfall <= 0 ? "Free" : "Calculated at checkout"}
                </dd>
              </div>
            </dl>

            {shortfall > 0 && (
              <p className="mt-6 border-l border-brass bg-raised px-5 py-4 text-[13px] font-light leading-relaxed text-smoke">
                Add {formatMoney(shortfall, currency)} more and delivery is on
                us.
              </p>
            )}

            <div className="mt-7 flex items-baseline justify-between border-t border-rule pt-6">
              <span className="text-[11px] uppercase tracking-micro text-slate">
                Total
              </span>
              <span className="text-2xl font-light text-brass">
                {formatMoney(cartTotal, currency)}
              </span>
            </div>

            <Link href="/checkout" className="btn-brass mt-8 w-full">
              Checkout
            </Link>
            <Link
              href="/shop"
              className="mt-4 block text-center text-[11px] uppercase tracking-micro text-slate underline underline-offset-4 transition-colors hover:text-brass"
            >
              Keep looking
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
