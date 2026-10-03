// Server-only Cray API client. Required env: CRAY_SECRET_KEY, CRAY_BASE_URL, CRAY_SUBACCOUNT_TOKEN.

export class CrayError extends Error {
  constructor(message: string, readonly httpStatus: number) {
    super(message);
  }
}

function config() {
  const secretKey = process.env.CRAY_SECRET_KEY;
  const baseUrl = process.env.CRAY_BASE_URL?.replace(/\/+$/, "");
  if (!secretKey || !baseUrl) throw new Error("Payments are not configured (CRAY_SECRET_KEY / CRAY_BASE_URL missing)");
  return { secretKey, baseUrl };
}

export async function cray<T>(path: string, init: RequestInit = {}): Promise<T> {
  const { secretKey, baseUrl } = config();
  const res = await fetch(`${baseUrl}${path}`, {
    ...init,
    headers: { Authorization: `Bearer ${secretKey}`, "Content-Type": "application/json", Accept: "application/json", ...init.headers },
    signal: AbortSignal.timeout(30_000),
    cache: "no-store",
  });
  const body = (await res.json().catch(() => null)) as { status?: boolean; message?: string; data?: T } | null;
  if (!res.ok || !body?.status) {
    // 404 is routine for checkouts the customer hasn't opened yet; don't flood the logs on every reconcile pass.
    if (res.status !== 404) console.error(`Cray ${path} failed`, res.status, body);
    throw new CrayError(body?.message || `Payment provider error (${res.status})`, res.status);
  }
  return body.data as T;
}

// Pinned explicitly: one secret key can own many subaccounts, so never guess which one to collect into.
export function getSubaccountToken() {
  const token = process.env.CRAY_SUBACCOUNT_TOKEN;
  if (!token) throw new Error("CRAY_SUBACCOUNT_TOKEN is not set");
  return token;
}

export type CrayPayment = {
  status: string;
  reference: string;
  provider_reference?: string;
  amount?: number;
  currency?: string;
  payment_channel?: string;
  customer?: { name: string; email: string };
};

export const queryCrayPayment = (reference: string) =>
  cray<CrayPayment>(`/api/checkout/query/${encodeURIComponent(reference)}`);
