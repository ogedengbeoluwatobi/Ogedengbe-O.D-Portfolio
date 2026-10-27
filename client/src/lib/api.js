// Empty in dev (Vite proxies /api to the server); set VITE_API_URL in production.
const API_URL = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");

export async function sendContactMessage(payload) {
  const res = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || `Request failed (${res.status})`);
  return data;
}
