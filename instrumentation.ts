export async function register() {
  // Inline check so the edge build strips the Node-only database import.
  if (process.env.NEXT_RUNTIME === "nodejs") {
    // Periodically re-check unpaid orders with Cray (catches customers who paid but never returned to the site).
    const { startOrderReconciler } = await import("./lib/orders.server");
    startOrderReconciler();
  }
}
