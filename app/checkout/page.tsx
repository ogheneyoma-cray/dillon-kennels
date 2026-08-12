"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { formatMoney } from "@/lib/currency";

function generateOrderNumber(): string {
  const random = Math.floor(100000 + Math.random() * 900000);
  return `WZ-${random}`;
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
      "wazuri-last-order",
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
        <p className="mt-4 max-w-sm text-ink/70">
          Add a service to your cart before heading to checkout.
        </p>
        <Link href="/shop" className="btn-primary mt-8">
          Browse Services
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
        className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]"
      >
        <div className="space-y-10">
          <fieldset>
            <legend className="font-display text-xl font-bold text-ink">
              Contact & Service Details
            </legend>
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
                  placeholder="Ama Boateng"
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
              <div className="sm:col-span-2">
                <label htmlFor="address" className="label-text">
                  Service Address (only needed for on-site visits)
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  autoComplete="street-address"
                  className="input-field"
                  placeholder="Street address, city"
                />
              </div>
              <div>
                <label htmlFor="phone" className="label-text">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  className="input-field"
                  placeholder="+233 24 000 0000"
                />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="font-display text-xl font-bold text-ink">
              Payment Details
            </legend>
            <p className="mt-2 text-xs text-ink/50">
              Payment on this build is handled by a hosted payment partner —
              card details entered below are not stored on this site.
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
                  className="input-field"
                  placeholder="Ama Boateng"
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
                  placeholder="1234 5678 9012 3456"
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
                  placeholder="MM/YY"
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
                  placeholder="123"
                />
              </div>
            </div>
          </fieldset>
        </div>

        <aside className="h-fit rounded-2xl border border-ink/10 bg-paper p-6">
          <h2 className="font-display text-xl font-bold text-ink">Order Summary</h2>
          <ul className="mt-5 space-y-3 border-b border-ink/10 pb-5">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between text-sm">
                <span className="text-ink/70">
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
            {submitting ? "Placing Order…" : "Place Order"}
          </button>
        </aside>
      </form>
    </div>
  );
}
