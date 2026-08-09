# McPherson Digital Works

Production-ready marketing site for McPherson Digital Works, built with Next.js 16, React 19, TypeScript, Tailwind CSS, Framer Motion, Resend, and GA4.

## Local development

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Copy `.env.example` to `.env.local` and supply development-safe values when testing email delivery. Never commit `.env.local` or real credentials.

## Validation

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Production configuration

The contact system requires `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL`. `CONTACT_ALLOWED_ORIGINS` permits additional cross-origin callers; the deployment's own origin is always allowed. `NEXT_PUBLIC_GA_MEASUREMENT_ID` enables GA4 and the privacy-safe `generate_lead` event after a successful inquiry.

See `docs/PRODUCTION_READINESS.md` for the deployment gate and verification checklist.
