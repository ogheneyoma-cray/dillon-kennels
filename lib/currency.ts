export type CurrencyCode = "USD" | "NGN";

export const CURRENCIES: {
  code: CurrencyCode;
  label: string;
  symbol: string;
}[] = [
  { code: "USD", label: "US Dollar", symbol: "$" },
  { code: "NGN", label: "Nigerian Naira", symbol: "₦" },
];

// Fixed demo exchange rate. A production store would read this from a live
// FX feed rather than pinning it at build time.
export const USD_TO_NGN_RATE = 1550;

export function convertFromUsd(
  amountUsd: number,
  currency: CurrencyCode
): number {
  if (currency === "USD") return amountUsd;
  return amountUsd * USD_TO_NGN_RATE;
}

export function convertToUsd(amount: number, currency: CurrencyCode): number {
  if (currency === "USD") return amount;
  return amount / USD_TO_NGN_RATE;
}

/** Convert directly between the two supported currencies. */
export function convert(
  amount: number,
  from: CurrencyCode,
  to: CurrencyCode
): number {
  return convertFromUsd(convertToUsd(amount, from), to);
}

export function formatMoney(amountUsd: number, currency: CurrencyCode): string {
  return formatAmount(convertFromUsd(amountUsd, currency), currency);
}

/** Format an amount that is already expressed in `currency`. */
export function formatAmount(amount: number, currency: CurrencyCode): string {
  const locale = currency === "NGN" ? "en-NG" : "en-US";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: currency === "NGN" ? 0 : 2,
    maximumFractionDigits: currency === "NGN" ? 0 : 2,
  }).format(amount);
}

export function currencyMeta(code: CurrencyCode) {
  return CURRENCIES.find((entry) => entry.code === code) ?? CURRENCIES[0];
}
