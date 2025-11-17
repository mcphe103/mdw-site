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
        "Perfect for small businesses that want a fast, secure website without worrying about the tech.",
      features: [
        "Managed hosting & SSL",
        "Performance & security monitoring",
        "Backups and updates",
        "Email support for site changes",
      ],
    },
    {
      name: "Launch Package",
      price: "Custom",
      highlight: false,
      description:
        "Custom design and build for new sites or full redesigns tailored to your brand.",
      features: [
        "Custom Next.js site",
        "Responsive design",
        "Basic SEO setup",
        "Deployment & launch support",
      ],
    },

    {
      name: "Ongoing Support & Changes",
    price: "Custom",
    highlight: false,
    description:
      "For businesses that need regular content updates, new pages, or ongoing improvements beyond hosting.",
    features: [
      "Content and layout updates",
      "New pages and sections as needed",
      "Consulting on improvements",
      "Prioritized support for site changes",
      ],
    },

    // You can add more plans later if you want, e.g.:
    // {
    //   name: "Launch Package",
    //   price: "Custom",
    //   highlight: false,
    //   description:
    //     "Custom design and build for new sites or full redesigns tailored to your brand.",
    //   features: [
    //     "Custom Next.js site",
    //     "Responsive design",
    //     "Basic SEO setup",
    //     "Deployment & launch support",
    //   ],
    // },
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
