"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { formatMoney } from "@/lib/currency";

function generateOrderNumber(): string {
  const random = Math.floor(100000 + Math.random() * 900000);
  return `CT-${random}`;
}

export default function CheckoutPage() {
  const { items, cartTotal, clearCart } = useCart();
  const { currency } = useCurrency();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    const orderNumber = generateOrderNumber();
    window.sessionStorage.setItem(
      "cybertravellers-last-order",
      JSON.stringify({
        orderNumber,
        total: formatMoney(cartTotal, currency),
        itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
      })
    );
    clearCart();
    router.push(`/order-confirmation?order=${orderNumber}`);
  };

  if (items.length === 0) {
    return (
      <div className="container-page flex flex-col items-center justify-center py-24 text-center">
        <p className="eyebrow">Checkout</p>
        <h1 className="section-heading mt-3">Your cart is empty</h1>
        <p className="mt-4 max-w-sm text-ink-soft">
          Add a service to your cart before heading to checkout.
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
      <h1 className="section-heading mt-3">Complete Your Booking</h1>

      <form
        onSubmit={handleSubmit}
        className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]"
      >
        <div className="space-y-6">
          <fieldset className="rounded-lg border border-line bg-paper p-6 shadow-tile">
            <legend className="font-display text-xl font-bold text-ink">
              Passenger Details
            </legend>
            <p className="mt-2 text-xs text-ink-soft">
              Booking confirmation and scheduling details are sent to this email.
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
                  placeholder="Emeka Obi"
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
                  placeholder="emeka@example.com"
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="rounded-lg border border-line bg-paper p-6 shadow-tile">
            <div className="flex items-center justify-between gap-4">
              <legend className="font-display text-xl font-bold text-ink">
                Payment Details
              </legend>
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-11 items-center justify-center rounded-md border border-line bg-paper">
                  <svg width="26" height="16" viewBox="0 0 26 16" aria-hidden="true">
                    <circle cx="9" cy="8" r="8" fill="#EB001B" />
                    <circle cx="17" cy="8" r="8" fill="#F79E1B" />
                    <path d="M13 2.2a8 8 0 0 1 0 11.6 8 8 0 0 1 0-11.6Z" fill="#FF5F00" />
                  </svg>
                </span>
                <span className="flex h-7 w-11 items-center justify-center rounded-md border border-line bg-paper text-[11px] font-black italic tracking-tight text-[#1A1F71]">
                  VISA
                </span>
              </div>
            </div>
            <p className="mt-2 text-xs text-ink-soft">
              We accept Mastercard and Visa only. Card details are used
              solely to process this payment and are never stored on our
              servers.
            </p>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="cardName" className="label-text">
                  Name on Card
                </label>
                <input
                  id="cardName"
                  name="cardName"
                  type="text"
                  required
                  autoComplete="cc-name"
                  className="input-field uppercase placeholder:normal-case"
                  placeholder="EMEKA OBI"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="cardNumber" className="label-text">
                  Card Number
                </label>
                <input
                  id="cardNumber"
                  name="cardNumber"
                  type="text"
                  inputMode="numeric"
                  required
                  autoComplete="cc-number"
                  pattern="[0-9\s]{13,19}"
                  maxLength={19}
                  className="input-field"
                  placeholder="4716 2093 5581 0042"
                />
              </div>
              <div>
                <label htmlFor="expiry" className="label-text">
                  Expiry Date
                </label>
                <input
                  id="expiry"
                  name="expiry"
                  type="text"
                  required
                  autoComplete="cc-exp"
                  placeholder="11/28"
                  pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="cvv" className="label-text">
                  CVV
                </label>
                <input
                  id="cvv"
                  name="cvv"
                  type="text"
                  inputMode="numeric"
                  required
                  autoComplete="cc-csc"
                  maxLength={4}
                  pattern="[0-9]{3,4}"
                  className="input-field"
                  placeholder="•••"
                />
              </div>
            </div>
          </fieldset>
        </div>

        <aside className="h-fit rounded-lg border border-line bg-paper p-6 shadow-tile">
          <h2 className="font-display text-xl font-bold text-ink">Booking Summary</h2>
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
          <div className="mt-5 flex justify-between font-display text-lg font-bold text-ink">
            <span>Total</span>
            <span>{formatMoney(cartTotal, currency)}</span>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="btn-primary mt-6 w-full disabled:opacity-60"
          >
            {submitting ? "Confirming Booking…" : "Confirm & Pay"}
          </button>
        </aside>
      </form>
    </div>
  );
}
