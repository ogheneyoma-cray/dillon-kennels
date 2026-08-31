export type CurrencyCode = "USD" | "NGN";

// Fixed demo exchange rate. In a production store this would be sourced
// from a live FX feed rather than hard-coded.
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
