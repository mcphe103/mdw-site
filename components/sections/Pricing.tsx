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
      "A fully managed hosting and maintenance plan designed for long-term stability. Your website stays secure, monitored, updated, and professionally maintained — without you having to think about it.",
      features: [
        "Managed Next.js hosting & SSL",
        "Performance, uptime, and security monitoring",
        "Weekly backups & platform updates",
        "Priority support for site changes",
        "Reliability & security checks",
      ],
      note:
      "Major redesigns, new feature builds, and structural changes are quoted separately.",
      cta: "Check Eligibility",
    },
    {
      name: "New Website Launch",
      price: "Starting at $1,200",
      highlight: false,
      description:
      "A professionally built website crafted around your brand and business goals. Designed for clarity, performance, and long-term reliability — not just something that looks good, but something built to last.",
      features: [
        "Custom Next.js website",
        "Modern, responsive UI",
        "Structured content strategy",
        "Light SEO setup",
        "Deployment & launch support",
        "Typical timeline: 3–5 weeks",
      ],
      cta: "Request a Quote",
    },
    {
      name: "Redesign Package",
      price: "Starting at $1,000",
      highlight: false,
      description:
      "A strategic redesign of your existing website — improving structure, performance, and visual clarity to better represent your business and increase trust with your customers.",
      features: [
        "Full UI/UX redesign",
        "Updated, modern layout",
        "Improved speed & stability",
        "Mobile-first performance",
        "Updated content structure",
        "Typical timeline: 2–4 weeks",
      ],

      
      cta: "Request a Quote",
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white/5">
      <div className="container-xl max-w-5xl mx-auto px-4">
        <SectionTitle kicker="Investment" title="Pricing" />

        <p className="mt-4 text-sm md:text-base text-base-text/80 text-center max-w-2xl mx-auto">
          Clear investment levels for businesses that value stability, performance,
          and long-term reliability. Whether you need a new launch, a redesign, or
          ongoing care — each plan is built with structure and intention.
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
                  {plan.features.map((f, idx) => (
                    <li key={`${plan.name}-${idx}`} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-base-accent/80" />
                      <span>{f}</span>
                    </li>
                    ))}
                </ul>
                {plan.note && (
  <p className="text-xs text-base-text/60 leading-relaxed">
    {plan.note}
  </p>
)}

                <div className="mt-6">
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

        <p className="mt-6 text-xs md:text-sm text-base-text/60 text-center">
          Not sure which plan fits? Reach out through the contact form and we’ll recommend the best path forward.
        </p>


      </div>
    </section>
    );
}