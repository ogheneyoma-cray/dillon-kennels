export type CurrencyCode = "NGN" | "USD";

// Fixed demo exchange rate. In a production store this would be sourced
// from a live FX feed rather than hard-coded.
export const USD_TO_NGN_RATE = 1550;

export function convertFromUsd(amountUsd: number, currency: CurrencyCode): number {
  if (currency === "USD") return amountUsd;
  return amountUsd * USD_TO_NGN_RATE;
}

function format(value: number, currency: CurrencyCode): string {
  const locale = currency === "NGN" ? "en-NG" : "en-US";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: currency === "NGN" ? 0 : 2,
    maximumFractionDigits: currency === "NGN" ? 0 : 2,
  }).format(value);
}

export function formatMoney(amountUsd: number, currency: CurrencyCode): string {
  return format(convertFromUsd(amountUsd, currency), currency);
}

/**
 * A handful of products are priced with a fixed NGN figure that doesn't
 * round-trip cleanly through the USD conversion rate (e.g. promo pricing
 * agreed in Naira). `ngnOverride`, when present, is shown verbatim in NGN;
 * the USD price still comes from the regular conversion.
 */
export function formatProductMoney(
  product: { price: number; ngnOverride?: number },
  currency: CurrencyCode
): string {
  if (currency === "NGN" && product.ngnOverride !== undefined) {
    return format(product.ngnOverride, "NGN");
  }
  return formatMoney(product.price, currency);
}

/**
 * Sums a list of cart-like line items, honoring each item's ngnOverride when
 * the display currency is NGN, and returns the formatted total.
 */
export function formatLineItemsTotal(
  items: { price: number; ngnOverride?: number; quantity: number }[],
  currency: CurrencyCode
): string {
  const total = items.reduce((sum, item) => {
    const unit =
      currency === "NGN" && item.ngnOverride !== undefined
        ? item.ngnOverride
        : convertFromUsd(item.price, currency);
    return sum + unit * item.quantity;
  }, 0);
  return format(total, currency);
}
