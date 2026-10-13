# Security Architecture (`majestikmagik.dev`)

This document maps the actual security implementation across the platform. All layers are verified against the live codebase — no assumed or aspirational controls are listed here.

---

## 1. HTTP Security Headers (`next.config.ts`)

Applied globally via `async headers()` to all routes (`/:path*`).

| Header | Value |
| :--- | :--- |
| `Content-Security-Policy` | Strict allowlist; `unsafe-eval` stripped in production |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` (2-year HSTS) |
| `X-Frame-Options` | `DENY` (clickjacking prevention) |
| `X-Content-Type-Options` | `nosniff` (MIME sniffing prevention) |
| `Cross-Origin-Opener-Policy` | `same-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), payment=(self stripe)` |

### CSP Allowlist Summary
- **Scripts:** `self`, Stripe JS, Cloudflare Insights, Trustpilot widget
- **Frames:** `self`, Stripe iframes only
- **Connections:** `self`, Stripe API, Google Vertex AI
- **Objects:** `none` (blocks Flash/plugin execution)
- **Frame ancestors:** `none` (redundant clickjacking block alongside `X-Frame-Options`)
- **Form action:** `self` (prevents cross-origin form hijacking)

---

## 2. API Route Security

All API routes run on the **V8 Edge Runtime** (`export const runtime = 'edge'`).

### `/api/contact` — Inbound Form Handler
- **Input sanitization:** All fields stripped of HTML tags (`<[^>]*>`), control characters (`\r\n\t`), and truncated to per-field byte limits (e.g., `name: 100`, `email: 254`, `projectNeed: 2000`).
- **Email validation:** Regex-gated (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`) before any processing.
- **Enum validation:** `budget` field validated against a strict `Set` of allowed values — rejects arbitrary strings.
- **File upload hardening:**
  - MIME type enforced: `application/pdf` only.
  - Max size: 5MB per file.
  - Filenames sanitized via `SAFE_FILENAME_RE` (`/[^a-zA-Z0-9._-]/g`) before attachment.
- **Log injection prevention:** `sanitizeLog()` strips `\r\n` from all error log output.
- **HTML email output:** All user-supplied values passed through `escapeHtml()` before rendering in email body.

### `/api/checkout` — Stripe Payment Intent
- **Service ID allowlist:** `serviceId` validated against a hardcoded `Set` of 7 valid service slugs — unknown IDs return `400`.
- **Name sanitization:** `serviceName` stripped of path traversal and control characters (`/\\/\r\n\t.`) before being stored in Stripe metadata.
- **Amount handling:** `price` coerced to integer cents via `Math.round(price * 100)` — no raw float passed to Stripe.

### `/api/webhooks/stripe` — Stripe Webhook Receiver
- **Signature verification:** HMAC-SHA256 computed via Web Crypto API against the raw request body and `stripe-signature` header. Requests with invalid signatures are rejected with `400` before any payload parsing.
- **JSON parse isolation:** `JSON.parse` wrapped in a `try/catch` — malformed payloads return `400` without crashing the handler.
- **Customer email re-validation:** Email regex + 254-char length check applied again before sending confirmation email — does not blindly trust Stripe billing data.
- **Field sanitization:** All string fields from Stripe metadata sanitized before Supabase writes and email rendering.

### `/api/chat` — Vertex AI Proxy
- **No direct key exposure:** Google credentials are never passed to the client. The Edge function exchanges a service account JWT (signed via Web Crypto `RSASSA-PKCS1-v1_5`) for a short-lived OAuth2 access token server-side.
- **Private key handling:** PEM key loaded from environment variable, used in-memory only, never logged or returned.
- **Error surface:** Vertex AI errors return a generic `'AI service unavailable'` message — raw error details are only written to `console.error` server-side.

---

## 3. Credential & Secret Management

| Secret | Storage | Notes |
| :--- | :--- | :--- |
| `RESEND_API_KEY` | Environment variable | Never referenced client-side |
| `STRIPE_SECRET_KEY` | Environment variable | Server/Edge only |
| `STRIPE_WEBHOOK_SECRET` | Environment variable | Used only in webhook HMAC verification |
| `SUPABASE_SERVICE_ROLE_KEY` | Environment variable | Never exposed via `NEXT_PUBLIC_` prefix |
| `GOOGLE_APPLICATION_CREDENTIALS_JSON` | Environment variable | Parsed in-memory; private key never logged |
| `VERTEX_PROJECT_ID` / `VERTEX_LOCATION` / `VERTEX_MODEL` | Environment variables | Non-secret but server-scoped |

**Rule:** No secret uses the `NEXT_PUBLIC_` prefix. `NEXT_PUBLIC_SUPABASE_URL` is the only public env var and contains no credentials.

---

## 4. Infrastructure Security

- **Edge Runtime:** All API routes run in V8 isolates (Cloudflare Pages / GCP). No Node.js process persistence between requests.
- **HTTPS enforcement:** HSTS preload with 2-year max-age + `includeSubDomains`. `www` → apex redirect enforced via `next.config.ts` redirects.
- **Deployment:** Cloudflare Pages via `wrangler.toml` with `nodejs_compat` flag. No origin server IP exposed.
- **Email routing:** Inbound mail handled by Cloudflare Email Routing (no mail server operated directly).

---

## 5. Client-Side Security Posture

- **No PHI stored client-side** in the current public-facing site. IndexedDB + AES-GCM encryption is the mandated pattern for any future local-first compliance features (see `AGENTS.md` §1.2 and `SKILLS.md` §1).
- **Cookie banner:** Consent gate implemented via `CookieBanner.tsx` before any analytics activation.
- **No `eval` in production:** CSP removes `unsafe-eval` in `NODE_ENV === 'production'`.

---

## 6. Known Gaps & Agent Directives

- `unsafe-inline` remains in the CSP `script-src` and `style-src` directives to support Next.js hydration. This cannot be removed without implementing nonce injection at the Next.js middleware layer — it is a framework constraint, not an oversight. Nonce-based CSP is the correct long-term migration path.
- Rate limiting is implemented at the application layer via in-memory IP tracking on all three API routes. Note that V8 isolate memory is not shared across edge nodes — Cloudflare WAF rules remain the recommended global enforcement layer. Verify these are active in the Cloudflare dashboard.
