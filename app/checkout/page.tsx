"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { formatMoney } from "@/lib/currency";

const FREE_SHIPPING_THRESHOLD_USD = 45;
const DELIVERY_FEE_USD = 4;

type Errors = Record<string, string>;

const FIELDS = [
  { name: "fullName", label: "Full name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  {
    name: "address",
    label: "Street address",
    type: "text",
    autoComplete: "street-address",
    full: true,
  },
  { name: "city", label: "City", type: "text", autoComplete: "address-level2" },
  { name: "state", label: "State", type: "text", autoComplete: "address-level1" },
];

export default function CheckoutPage() {
  const { items, cartTotal, clearCart } = useCart();
  const { currency } = useCurrency();
  const router = useRouter();
  const [errors, setErrors] = useState<Errors>({});

  const delivery =
    cartTotal >= FREE_SHIPPING_THRESHOLD_USD ? 0 : DELIVERY_FEE_USD;
  const total = cartTotal + delivery;

  if (items.length === 0) {
    return (
      <div className="wrap flex flex-col items-start py-32">
        <p className="eyebrow">Nothing to pay for</p>
        <h1 className="display-1 mt-5">Your bag is empty</h1>
        <p className="mt-5 max-w-md text-[15px] font-light text-smoke">
          Add a piece to it and the checkout will open up.
        </p>
        <Link href="/shop" className="btn-brass mt-9">
          Open the collection
        </Link>
      </div>
    );
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Errors = {};

    const required = [
      ["fullName", "Enter the name for the delivery"],
      ["email", "Enter an email so we can send the confirmation"],
      ["phone", "Enter a phone number for the courier"],
      ["address", "Enter a street address"],
      ["city", "Enter a city"],
      ["state", "Enter a state"],
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
    // client-side and the bag is cleared.
    clearCart();
    router.push("/order-confirmation");
  };

  return (
    <div className="ruled">
      <div className="wrap py-14">
        <p className="eyebrow">Final step</p>
        <h1 className="display-2 mt-4">Checkout</h1>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_360px]">
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid gap-6 sm:grid-cols-2">
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
                      className="mt-2 text-[12px] text-brass"
                    >
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}

              <div className="sm:col-span-2">
                <label htmlFor="notes" className="field-label">
                  Delivery notes <span className="normal-case">(optional)</span>
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  placeholder="Landmarks, gate colours, or a preferred delivery window."
                  className="field resize-y py-3"
                />
              </div>
            </div>

            <p className="mt-7 border-l border-brass bg-panel px-5 py-4 text-[13px] font-light leading-relaxed text-smoke">
              This is a demonstration storefront. No payment is taken and no card
              details are collected at any point.
            </p>

            <button type="submit" className="btn-brass mt-8 w-full sm:w-auto">
              Place order
            </button>
          </form>

          <aside className="card h-fit p-8 lg:sticky lg:top-32">
            <h2 className="text-[11px] uppercase tracking-micro text-brass">
              Your order
            </h2>

            <ul className="mt-7 space-y-5">
              {items.map((item) => (
                <li key={item.id} className="flex items-center gap-4">
                  <span className="relative h-[68px] w-[52px] shrink-0 overflow-hidden border border-rule bg-raised">
                    {/* Eager for the same reason as the bag: this list is
                        client-rendered after hydration. */}
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      loading="eager"
                      sizes="52px"
                      className="object-cover opacity-90"
                    />
                  </span>
                  <span className="flex-1 text-[13px] font-light leading-snug text-bone">
                    {item.name}
                    <span className="mt-1 block text-slate">
                      Qty {item.quantity}
                    </span>
                  </span>
                  <span className="text-[13px] text-bone">
                    {formatMoney(item.price * item.quantity, currency)}
                  </span>
                </li>
              ))}
            </ul>

            <dl className="mt-7 space-y-3 border-t border-rule pt-6 text-sm font-light">
              <div className="flex justify-between">
                <dt className="text-smoke">Subtotal</dt>
                <dd className="text-bone">{formatMoney(cartTotal, currency)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-smoke">Delivery</dt>
                <dd className="text-bone">
                  {delivery === 0 ? "Free" : formatMoney(delivery, currency)}
                </dd>
              </div>
              <div className="flex items-baseline justify-between border-t border-rule pt-4">
                <dt className="text-[11px] uppercase tracking-micro text-slate">
                  Total
                </dt>
                <dd className="text-xl text-brass">
                  {formatMoney(total, currency)}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </div>
  );
}
