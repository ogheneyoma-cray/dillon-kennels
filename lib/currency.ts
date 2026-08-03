export type CurrencyCode = "USD" | "NGN";

export const CURRENCIES: {
  code: CurrencyCode;
  label: string;
  symbol: string;
}[] = [
  { code: "USD", label: "US Dollar", symbol: "$" },
  { code: "NGN", label: "Naira", symbol: "₦" },
];

// Fixed demo exchange rate. A production store would read this from a live
// FX feed rather than pinning it at build time.
export const USD_TO_NGN_RATE = 1550;

export function convertFromUsd(amountUsd: number, currency: CurrencyCode): number {
  if (currency === "USD") return amountUsd;
  return amountUsd * USD_TO_NGN_RATE;
}

export function formatMoney(amountUsd: number, currency: CurrencyCode): string {
  const value = convertFromUsd(amountUsd, currency);
  const locale = currency === "NGN" ? "en-NG" : "en-US";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: currency === "NGN" ? 0 : 2,
    maximumFractionDigits: currency === "NGN" ? 0 : 2,
  }).format(value);
}
