"use client";

import Link from "next/link";
import BookCover from "@/components/BookCover";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { formatMoney } from "@/lib/currency";

type Errors = Record<string, string>;

// Downloads need a billing identity, not a shipping address.
const FIELDS = [
  { name: "fullName", label: "Full name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email", full: true },
  { name: "city", label: "City", type: "text", autoComplete: "address-level2" },
  { name: "country", label: "Country", type: "text", autoComplete: "country-name" },
];

export default function CheckoutPage() {
  const { items, cartTotal, clearCart } = useCart();
  const { currency } = useCurrency();
  const router = useRouter();
  const [errors, setErrors] = useState<Errors>({});

  if (items.length === 0) {
    return (
      <div className="wrap flex flex-col items-center py-28 text-center lg:py-36">
        <p className="eyebrow">Nothing to pay for</p>
        <h1 className="display-1 mt-3">Your basket is empty</h1>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-body">
          Add a title to it and the checkout will open up.
        </p>
        <Link href="/shop" className="btn-clay mt-8">
          Browse the catalogue
        </Link>
      </div>
    );
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Errors = {};

    const required = [
      ["fullName", "Enter the name for the receipt"],
      ["email", "Enter an email — this is where the download link goes"],
      ["city", "Enter a city"],
      ["country", "Enter a country"],
    ] as const;

    for (const [field, message] of required) {
      if (!String(data.get(field) ?? "").trim()) next[field] = message;
    }

    const email = String(data.get("email") ?? "");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "That email address does not look right";
    }

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // No payment processor is wired up on this build — the order is recorded
    // client-side and the basket is cleared.
    clearCart();
    router.push("/order-confirmation");
  };

  return (
    <div className="wrap py-14 lg:py-16">
      <p className="eyebrow">Final step</p>
      <h1 className="display-2 mt-3">Checkout</h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_340px]">
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            {FIELDS.map((field) => (
              <div key={field.name} className={field.full ? "sm:col-span-2" : ""}>
                <label htmlFor={field.name} className="field-label">
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  aria-invalid={Boolean(errors[field.name])}
                  aria-describedby={
                    errors[field.name] ? `${field.name}-error` : undefined
                  }
                  className="field"
                />
                {errors[field.name] && (
                  <p
                    id={`${field.name}-error`}
                    className="mt-2 text-[12px] text-clay"
                  >
                    {errors[field.name]}
                  </p>
                )}
              </div>
            ))}
          </div>

          <p className="mt-6 rounded-2xl border-l-4 border-clay bg-sand px-5 py-4 text-[13px] leading-relaxed text-body">
            This is a demonstration storefront. No payment is taken, no card
            details are collected at any point, and no download link is issued.
          </p>

          <button type="submit" className="btn-clay mt-7 w-full sm:w-auto">
            Place order
          </button>
        </form>

        <aside className="card h-fit p-7 shadow-card lg:sticky lg:top-28">
          <h2 className="font-display text-[17px] font-bold text-slate">
            Your order
            <span aria-hidden="true" className="mt-3 block h-1 w-9 rounded-full bg-clay" />
          </h2>

          <ul className="mt-6 space-y-4">
            {items.map((item) => (
              <li key={item.id} className="flex items-center gap-4">
                {/* Eager for the same reason as the basket: this list is
                    client-rendered after hydration. */}
                <BookCover
                  src={item.image}
                  alt=""
                  eager
                  className="h-16 w-11 shrink-0 rounded-r-sm object-cover shadow-card"
                />
                <span className="flex-1 text-[13px] leading-snug text-slate">
                  {item.name}
                  <span className="mt-1 block text-muted">
                    Qty {item.quantity}
                  </span>
                </span>
                <span className="text-[13px] text-slate">
                  {formatMoney(item.price * item.quantity, currency)}
                </span>
              </li>
            ))}
          </ul>

          <dl className="mt-6 space-y-3 border-t border-line pt-5 text-sm">
            <div className="flex justify-between">
              <dt className="text-body">Subtotal</dt>
              <dd className="text-slate">{formatMoney(cartTotal, currency)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-body">Delivery</dt>
              <dd className="text-slate">Free</dd>
            </div>
            <div className="flex items-baseline justify-between border-t border-line pt-4">
              <dt className="font-display text-[12px] font-semibold uppercase tracking-wide2 text-muted">
                Total
              </dt>
              <dd className="font-display text-xl font-bold text-clay">
                {formatMoney(cartTotal, currency)}
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </div>
  );
}
