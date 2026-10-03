// Shared by the client UI and the server-side payment initializer so the
// amount charged always matches what the customer sees at checkout.
import { products } from "@/data/products";
import { convertFromUsd, type CurrencyCode } from "@/lib/currency";

/** Total in the active currency, priced from the course catalogue (never from client-sent prices). */
export function computeOrderTotal(lines: { productId: number; quantity: number }[], currency: CurrencyCode) {
  const totalUSD = lines.reduce((sum, l) => {
    const product = products.find((p) => p.id === l.productId);
    if (!product) throw new Error(`Unknown course: ${l.productId}`);
    return sum + product.price * l.quantity;
  }, 0);
  const total = convertFromUsd(totalUSD, currency);
  return currency === "USD" ? Math.round(total * 100) / 100 : Math.round(total);
}
