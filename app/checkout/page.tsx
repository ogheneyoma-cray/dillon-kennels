"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { formatMoney } from "@/lib/currency";
import { initializeCheckout } from "@/lib/payments";

type PaymentMethod = "card" | "bank";

const paymentOptions: { value: PaymentMethod; label: string; hint: string }[] = [
  { value: "card", label: "Debit / Credit Card", hint: "Visa, Mastercard and Verve." },
  { value: "bank", label: "Bank Transfer", hint: "Transfer to a one-time account. Confirmation can take a few minutes." },
];

export default function CheckoutPage() {
  const { items, cartTotal } = useCart();
  const { currency } = useCurrency();
  const [payment, setPayment] = useState<PaymentMethod>("card");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setSubmitting(true);
    setError(null);
    try {
      const result = await initializeCheckout({
        customer: {
          fullName: String(form.get("fullName") ?? ""),
          email: String(form.get("email") ?? ""),
        },
        items: items.map((item) => ({ productId: item.id, quantity: item.quantity })),
        currency,
        payment,
      });
      if (!result.ok) {
        setError(result.error);
        setSubmitting(false);
        return;
      }
      // The cart is cleared on the callback page once payment is confirmed.
      window.location.assign(result.link);
    } catch {
      setError("Something went wrong. Please check your connection and try again.");
      setSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="container-page flex flex-col items-center justify-center py-24 text-center">
        <p className="eyebrow">Checkout</p>
        <h1 className="section-heading mt-3">Your cart is empty</h1>
        <p className="mt-4 max-w-sm text-ink-soft">
          Add a course to your cart before heading to checkout.
        </p>
        <Link href="/shop" className="btn-primary mt-8">
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Checkout</p>
      <h1 className="section-heading mt-3">Complete Your Order</h1>

      <form
        onSubmit={handleSubmit}
        className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]"
      >
        <div className="space-y-10">
          <fieldset>
            <legend className="font-display text-xl text-ink">
              Contact Details
            </legend>
            <p className="mt-2 text-xs text-ink-soft">
              Course access is granted to this email immediately after payment.
            </p>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="label-text">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  autoComplete="name"
                  className="input-field"
                  placeholder="Adaeze Okonkwo"
                />
              </div>
              <div>
                <label htmlFor="email" className="label-text">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="input-field"
                  placeholder="you@example.com"
                />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="font-display text-xl text-ink">
              Payment Method
            </legend>
            <p className="mt-2 text-xs text-ink-soft">
              You&apos;ll complete payment on our secure payment partner&apos;s
              page. Card details never touch our servers.
            </p>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {paymentOptions.map((option) => (
                <label
                  key={option.value}
                  className={`flex cursor-pointer flex-col rounded-2xl border p-5 transition-colors ${
                    payment === option.value
                      ? "border-magenta bg-magenta-pale"
                      : "border-line bg-paper hover:border-magenta-light"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      value={option.value}
                      checked={payment === option.value}
                      onChange={() => setPayment(option.value)}
                      className="accent-magenta"
                    />
                    <span className="font-medium text-ink">{option.label}</span>
                  </span>
                  <span className="mt-2 pl-7 text-xs text-ink-soft">
                    {option.hint}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <aside className="h-fit rounded-2xl border border-line bg-paper p-6">
          <h2 className="font-display text-xl text-ink">Order Summary</h2>
          <ul className="mt-5 space-y-3 border-b border-line pb-5">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between text-sm">
                <span className="text-ink-soft">
                  {item.name} × {item.quantity}
                </span>
                <span className="font-medium text-ink">
                  {formatMoney(item.price * item.quantity, currency)}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex justify-between font-display text-lg text-ink">
            <span>Total</span>
            <span>{formatMoney(cartTotal, currency)}</span>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="btn-primary mt-6 w-full disabled:opacity-60"
          >
            {submitting ? "Redirecting to Payment…" : "Proceed to Payment"}
          </button>
          {error && (
            <p role="alert" className="mt-4 text-sm text-magenta">
              {error}
            </p>
          )}
        </aside>
      </form>
    </div>
  );
}
