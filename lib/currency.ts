export type CurrencyCode = "USD" | "GHS";

// Fixed demo exchange rate. In a production store this would be sourced
// from a live FX feed rather than hard-coded.
export const USD_TO_GHS_RATE = 15.6;

export function convertFromUsd(amountUsd: number, currency: CurrencyCode): number {
  if (currency === "USD") return amountUsd;
  return amountUsd * USD_TO_GHS_RATE;
}

export function formatMoney(amountUsd: number, currency: CurrencyCode): string {
  const value = convertFromUsd(amountUsd, currency);
  const locale = currency === "GHS" ? "en-GH" : "en-US";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}
