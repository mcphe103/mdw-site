# Operation Signal — Phase 2.5 Production Readiness

## Integrated baseline

- Approved Phase 2.3-R5-R2 visual and motion system.
- Secured inquiry endpoint from the hardened MDW repository.
- One shared inquiry form for the overlay and direct `/contact` route.
- Existing Privacy and Terms content preserved.
- Canonical production host standardized on `https://www.mcphersondigitalworks.com`.

## Required Vercel environment variables

| Variable | Scope | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | Preview and Production | Authenticates transactional email delivery. |
| `CONTACT_FROM_EMAIL` | Preview and Production | Verified Resend sender used for both messages. |
| `CONTACT_TO_EMAIL` | Preview and Production | Private MDW inbox that receives inquiries. |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Preview and Production | Public Cloudflare Turnstile widget key. |
| `TURNSTILE_SECRET_KEY` | Preview and Production | Private key used by the contact API for server-side token validation. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Production | Loads GA4 and records a `generate_lead` event only after accepted submission. |
| `CONTACT_ALLOWED_ORIGINS` | Only when needed | Adds explicitly trusted cross-origin form callers. Same-origin deployments work without it. |

Use separate Resend credentials for preview when practical. Do not place secrets in source, build logs, screenshots, or review archives.

## Inquiry security contract

- Strict JSON schema and field length limits.
- Server-enforced consent.
- Same-origin or allowlisted-origin enforcement.
- 16 KiB streamed request-body limit.
- Three-second minimum completion time and 24-hour expiry.
- Honeypot handling.
- Cloudflare Turnstile with explicit client rendering and mandatory server-side verification.
- Single-use, time-limited Turnstile tokens reset after rejected delivery attempts.
- Best-effort per-instance throttling: five requests per IP per ten minutes.
- HTML escaping and plain-text email alternatives.
- Sequential primary delivery before acknowledgement.
- Generic visitor-facing errors and logs without submitted personal data.

The in-memory throttle is intentionally an additional first layer, not a globally durable serverless rate limiter. Turnstile remains mandatory for accepted inquiry submissions.

## Preview deployment gate

1. Deploy this exact source to a Vercel preview without assigning the production domain.
2. Confirm all required preview variables are present by name and scope; never expose their values.
3. Verify `/`, `/about`, `/pricing`, `/contact`, `/privacy`, `/terms`, `/robots.txt`, and `/sitemap.xml`.
4. Confirm security headers on both a page route and `/api/contact`.
5. Test the Start a Project overlay from desktop navigation, mobile navigation, hero, About, and Pricing.
6. Submit one authorized test inquiry and confirm both the MDW notification and visitor acknowledgement arrive.
7. Confirm the Turnstile widget renders in both the direct contact form and Start a Project overlay, and that missing, invalid, expired, and replayed tokens are rejected by the API.
8. Confirm an accepted inquiry records one GA4 `generate_lead` event without personal data.
9. Confirm malformed JSON, wrong content type, invalid origin, missing consent, oversized fields, and rapid completion are rejected without internal details.
10. Review desktop and mobile behavior, reduced motion, focus trapping, Escape closure, and focus restoration.
11. Record the preview URL and deployment identifier for Matthew's approval.

## Local verification completed

- Dependency lockfile installation and approved native build scripts.
- ESLint and strict TypeScript.
- Complete Next.js production build and static generation.
- HTTP 200 for every public route, robots, and sitemap.
- CSP, HSTS, referrer, permissions, content-type, and frame-protection headers.
- Rejection tests for invalid origin, wrong content type, malformed JSON, missing consent, rapid completion, oversized requests, and missing delivery configuration.
- Honeypot acceptance behavior and throttling response.
- Credential-pattern and archive-containment scans.

Actual Turnstile verification, Resend delivery, GA4 DebugView, and Vercel environment-variable presence require the credentialed preview deployment and remain preview-gate checks.

## Phase 2.5 release boundary

Do not promote, alias, or assign the production domain during Phase 2.5. Production merge and release require Matthew's separate authorization after protected Preview verification.
