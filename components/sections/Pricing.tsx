// components/sections/Pricing.tsx
import Link from "next/link";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Pricing() {
  const plans = [
  {
    name: "Hosting & Care Plan",
    price: "$100 / mo",
    highlight: true,
    description:
      "A fully managed hosting and maintenance plan that keeps your website secure, backed up, and running around the clock. Available for websites built through MDW or for approved existing websites after an initial evaluation.",
    features: [
      "Managed Next.js hosting & SSL",
      "Performance, uptime, and security monitoring",
      "Weekly backups & platform updates",
      "Priority support for site changes",
      "Reliability & security checks",
    ],
    cta: "Check Eligibility",
  },
  {
    name: "Launch Package (New Builds)",
    price: "Custom",
    highlight: false,
    description:
      "A custom-built website designed around your brand, goals, and industry — built with clean design, modern performance, and long-term stability.",
    features: [
      "Custom Next.js website",
      "Modern, responsive UI",
      "Structured content strategy",
      "Light SEO setup",
      "Deployment & launch support",
    ],
    cta: "Request a Quote",
  },
  {
    name: "Redesign Package",
    price: "Custom",
    highlight: false,
    description:
      "A complete redesign of your existing website — improving visuals, structure, and performance for a more modern, professional, and reliable online presence.",
    features: [
      "Full UI/UX redesign",
      "Updated, modern layout",
      "Improved speed & stability",
      "Mobile-first performance",
      "Updated content structure",
    ],
    cta: "Request a Quote",
  },
];


  return (
    <section id="pricing" className="py-16 md:py-24 bg-white/5">
      <div className="container-xl max-w-5xl mx-auto px-4">
        <SectionTitle kicker="Investment" title="Pricing" />

        <p className="mt-4 text-sm md:text-base text-base-text/80 text-center max-w-2xl mx-auto">
          Simple, predictable pricing. No hidden fees, no surprise add-ons—
          just a clear monthly plan for keeping your website healthy and
          running smoothly.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`rounded-2xl border-white/10 bg-white/5 backdrop-blur flex flex-col h-full ${
                plan.highlight
                  ? "border-base-accent/70 shadow-[0_0_25px_rgba(73,194,199,0.35)]"
                  : ""
              }`}
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-base-heading text-lg md:text-xl">
                  {plan.name}
                </CardTitle>
                <div className="mt-2 text-base md:text-lg font-semibold text-base-accent">
                  {plan.price}
                </div>
                {plan.highlight && (
                  <p className="mt-1 inline-flex items-center rounded-full bg-base-accent/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-base-accent">
                    Recommended
                  </p>
                )}
              </CardHeader>
              <CardContent className="flex flex-col gap-4 flex-1">
                <p className="text-sm text-base-text/80 leading-relaxed">
                  {plan.description}
                </p>
                <ul className="space-y-1.5 text-sm text-base-text/75">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-base-accent/80" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Button
                    asChild
                    className={`w-full ${
                      plan.highlight
                        ? "bg-base-accent text-black hover:bg-base-accent/90"
                        : "bg-white/10 hover:bg-white/15 text-base-text"
                    }`}
                  >
                    <Link href="#contact">Start with this plan</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>


          ))}
        </div>

        <p className="mt-6 text-xs md:text-sm text-base-text/60 text-center">
          Need something more custom, like a full redesign or a new build?
          Reach out through the contact form and we’ll shape a plan around
          your project.
        </p>
      </div>
    </section>
  );
}
