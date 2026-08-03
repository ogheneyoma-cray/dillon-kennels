"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { formatMoney } from "@/lib/currency";

const FREE_SHIPPING_THRESHOLD_USD = 48;
const DELIVERY_FEE_USD = 4;

type Errors = Record<string, string>;

export default function CheckoutPage() {
  const { items, cartTotal, clearCart } = useCart();
  const { currency } = useCurrency();
  const router = useRouter();
  const [errors, setErrors] = useState<Errors>({});

  const delivery = cartTotal >= FREE_SHIPPING_THRESHOLD_USD ? 0 : DELIVERY_FEE_USD;
  const total = cartTotal + delivery;

  if (items.length === 0) {
    return (
      <div className="shell flex flex-col items-center py-28 text-center">
        <h1 className="display-lg">Your bag is empty</h1>
        <p className="mt-4 max-w-md text-[15px] text-slate">
          Add something to it and the checkout will open up.
        </p>
        <Link href="/shop" className="pill-dark mt-8">
          Browse sleepwear
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

  const fields = [
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
    {
      name: "city",
      label: "City",
      type: "text",
      autoComplete: "address-level2",
    },
    {
      name: "state",
      label: "State",
      type: "text",
      autoComplete: "address-level1",
    },
  ];

  return (
    <div className="shell py-14 lg:py-20">
      <p className="kicker">Checkout</p>
      <h1 className="display-lg mt-3">Where are we sending it?</h1>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_380px]">
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            {fields.map((field) => (
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
                  className="field-box"
                />
                {errors[field.name] && (
                  <p
                    id={`${field.name}-error`}
                    className="mt-1.5 text-[12px] text-orchid-dark"
                  >
                    {errors[field.name]}
                  </p>
                )}
              </div>
            ))}

            <div className="sm:col-span-2">
              <label htmlFor="notes" className="field-label">
                Delivery notes <span className="text-slate/60">(optional)</span>
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                placeholder="Landmarks, gate codes, or a preferred delivery window."
                className="field-box resize-y"
              />
            </div>
          </div>

          <p className="mt-6 rounded-xl border border-midnight/10 bg-linen px-4 py-3.5 text-[13px] leading-relaxed text-slate">
            This is a demonstration storefront. No payment is taken and no card
            details are collected at any point.
          </p>

          <button type="submit" className="pill-dark mt-7 w-full sm:w-auto">
            Place order
          </button>
        </form>

        <aside className="h-fit rounded-2xl border border-midnight/10 bg-linen p-7 lg:sticky lg:top-32">
          <h2 className="font-display text-2xl font-light">Your order</h2>

          <ul className="mt-6 space-y-4">
            {items.map((item) => (
              <li key={item.id} className="flex items-center gap-3">
                <span className="relative h-16 w-13 shrink-0 overflow-hidden rounded-lg bg-mist">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </span>
                <span className="flex-1 text-[13px] leading-snug text-midnight">
                  {item.name}
                  <span className="mt-0.5 block text-slate">
                    Qty {item.quantity}
                  </span>
                </span>
                <span className="text-[13px] font-medium">
                  {formatMoney(item.price * item.quantity, currency)}
                </span>
              </li>
            ))}
          </ul>

          <dl className="mt-6 space-y-3 border-t border-midnight/10 pt-5 text-sm">
            <div className="flex justify-between">
              <dt className="text-slate">Subtotal</dt>
              <dd>{formatMoney(cartTotal, currency)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate">Delivery</dt>
              <dd>{delivery === 0 ? "Free" : formatMoney(delivery, currency)}</dd>
            </div>
            <div className="flex justify-between border-t border-midnight/10 pt-3 text-base font-semibold">
              <dt>Total</dt>
              <dd>{formatMoney(total, currency)}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </div>
  );
}
