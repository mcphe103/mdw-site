# Neon Precision integration strategy

This branch integrates the strongest work from `mdw-v0-redesign-lab` into the existing production MDW codebase without replacing mature production functionality.

## Source-of-truth rule

- `mdw-site` remains the source of truth for production behavior, business data, contact handling, analytics, SEO, legal routes, accessibility behavior, and the real MDW brand assets.
- `mdw-v0-redesign-lab` is a design and presentation reference for the Neon Precision visual language, portfolio presentation, case-study structure, and selected messaging ideas.
- Production features should be preserved unless a change is intentional and reviewed.

## Preserve from the current site

- Real MDW logo and brand assets.
- Header/mobile navigation behavior and keyboard handling.
- Project intake modal and real inquiry pipeline.
- Resend delivery, acknowledgement email, Turnstile, validation, anti-abuse protections, and contact consent.
- Google Analytics integration and conversion tracking.
- Existing metadata, canonical URL, JSON-LD, sitemap, robots configuration, social images, and local SEO page.
- Privacy and Terms routes.
- Current package/pricing source of truth until pricing is intentionally revised.
- Current founder photography and verified business information.
- Existing motion system where it remains useful and accessible.

## Bring forward from Neon Precision

- More disciplined graphite/cyan visual system and typography hierarchy.
- Restrained technical grid, rules, indices, measurement details, and controlled glow.
- Stronger real-work presentation.
- Internal `/work` index and reusable case-study architecture.
- Desktop/mobile project framing once the approved real screenshot assets are migrated.
- Stronger founder-led / long-term-partner positioning where it improves existing copy.

## Integration order

1. Add scalable internal portfolio data and case-study routes without removing current homepage features.
2. Migrate approved real desktop/mobile portfolio screenshots and update homepage work presentation.
3. Reconcile Neon Precision tokens with the existing Operation Signal design system.
4. Refine homepage sections one at a time, preserving mature functionality.
5. Review pricing/business messaging against the current production source of truth.
6. Final production QA, then merge only after preview approval.

## Guardrail

Do not replace the current production site wholesale with the v0 redesign. Integrate selectively and incrementally.