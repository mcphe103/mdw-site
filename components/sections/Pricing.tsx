// components/sections/Pricing.tsx
import Link from "next/link";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Pricing() {
  const plans = [
    {
      name: "Starter Website",
      price: "Starting at $999",
      highlight: true,
      description:
        "A focused website package for small businesses that need a professional online presence without a large project scope.",
      features: [
        "Up to 5 pages",
        "Mobile-friendly design",
        "Contact form",
        "Photo or gallery section",
        "Basic SEO setup",
        "Launch support",
      ],
      bestFor: [
        "New businesses",
        "Small local businesses",
        "Businesses without a website",
        "Businesses with an outdated online presence",
      ],
      note:
        "Common pages include Home, About, Services, Gallery, and Contact.",
      cta: "Request a Quote",
    },
    {
      name: "Growth Website",
      price: "Starting at $1,499",
      highlight: false,
      description:
        "A larger website package for businesses that need more pages, more content, and a stronger way to showcase their services or past work.",
      features: [
        "Everything in Starter",
        "More than 5 pages",
        "Additional service pages",
        "Larger galleries or portfolios",
        "Testimonials or FAQ sections",
        "Expanded content structure",
      ],
      bestFor: [
        "Established businesses",
        "Businesses with multiple services",
        "Contractors or service providers with project photos",
        "Businesses that need a larger website structure",
      ],
      note:
        "Best when the site needs more information than a simple 5-page structure can comfortably hold.",
      cta: "Request a Quote",
    },
    {
      name: "Hosting & Care Plan",
      price: "$100 / mo",
      highlight: false,
      description:
        "Ongoing hosting and support for businesses that want their website maintained, monitored, and backed up after launch.",
      features: [
        "Managed hosting & SSL",
        "Performance and uptime monitoring",
        "Backups and platform updates",
        "Reasonable content updates",
        "Technical support",
        "Reliability and security checks",
      ],
      bestFor: [
        "Businesses that want support after launch",
        "Clients who do not want to manage hosting",
        "Websites that need long-term care",
      ],
      note:
        "Major redesigns, new feature builds, and structural changes are quoted separately.",
      cta: "Check Eligibility",
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white/5">
      <div className="container-xl max-w-5xl mx-auto px-4">
        <SectionTitle kicker="Investment" title="Pricing" />

        <p className="mt-4 text-sm md:text-base text-base-text/80 text-center max-w-2xl mx-auto">
          Simple website packages based on project size. Choose a focused starter site, a larger growth site, or ongoing care after launch.
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
                    Most accessible
                  </p>
                )}
              </CardHeader>

              <CardContent className="flex flex-col gap-4 flex-1">
                <p className="text-sm text-base-text/80 leading-relaxed">
                  {plan.description}
                </p>

                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-base-text/50">
                    Includes
                  </p>
                  <ul className="space-y-1.5 text-sm text-base-text/75">
                    {plan.features.map((f, idx) => (
                      <li key={`${plan.name}-${idx}`} className="flex gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-base-accent/80" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {plan.bestFor && (
                  <div>
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-base-text/50">
                      Best for
                    </p>
                    <ul className="space-y-1.5 text-sm text-base-text/70">
                      {plan.bestFor.map((f, idx) => (
                        <li key={`${plan.name}-best-${idx}`} className="flex gap-2">
                          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-white/35" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {plan.note && (
                  <p className="text-xs text-base-text/60 leading-relaxed">
                    {plan.note}
                  </p>
                )}

                <div className="mt-auto pt-2">
                  <Button
                    asChild
                    className={`w-full ${
                      plan.highlight
                        ? "bg-base-accent text-black hover:bg-base-accent/90"
                        : "bg-white/10 hover:bg-white/15 text-base-text"
                    }`}
                  >
                    <Link href="#contact">{plan.cta}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-6 text-xs md:text-sm text-base-text/60 text-center max-w-2xl mx-auto">
          “Starting at” pricing reflects standard project scope. Final investment is determined after a brief discovery conversation.
        </p>

        <p className="mt-3 text-xs md:text-sm text-base-text/60 text-center max-w-2xl mx-auto">
          Starter is a smaller-scope website. Growth is for larger websites with more pages, more content, and more organization.
        </p>
      </div>
    </section>
  );
}
