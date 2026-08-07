# McPherson Digital Works

The McPherson Digital Works website is built with Next.js, React, TypeScript,
and Tailwind CSS. It uses `next/font` to optimize and load Inter.

## Getting started

Install the existing dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

Copy `.env.example` to `.env.local` and provide the required Resend and contact
delivery settings before testing the contact form. `.env.local` is intentionally
untracked.

## Validation and review packages

Run `pnpm lint`, `pnpm typecheck`, and `pnpm build` before review. After the
reviewed changes are committed and the working tree is clean, `pnpm
package:review` creates a ZIP from tracked Git content in `.review-packages/`.
The command refuses dirty trees and prohibited tracked filenames.

The contact endpoint includes in-memory IP throttling as a best-effort abuse
control. In serverless deployments it is per-instance and not globally durable;
a shared rate-limit service would be required for globally consistent limits.
