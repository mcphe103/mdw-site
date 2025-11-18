// components/sections/Process.tsx
import { SectionTitle } from "@/components/sections/SectionTitle";

export function Process() {
  const steps = [
    {
      title: "Discovery",
      desc: "We start with a focused conversation about your business, goals, and what you need your website to do. This keeps every decision aligned with your priorities.",
    },
    {
      title: "Design & Structure",
      desc: "I define a clean layout and content structure that matches your brand and makes it easy for customers to find what they need.",
    },
    {
      title: "Build",
      desc: "Your site is developed with Next.js and modern best practices for speed, stability, and long-term maintainability.",
    },
    {
      title: "Review & Launch",
      desc: "You review the site, request refinements, and once everything looks right, we launch it to fast, secure hosting.",
    },
    {
      title: "Hosting & Ongoing Care",
      desc: "After launch, your website stays monitored, updated, backed up, and supported through the MDW Hosting & Care Plan.",
    },
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-white/5">
      <div className="container-xl max-w-3xl mx-auto px-4">
        <SectionTitle kicker="How It Works" title="Process" />

        <p className="mt-4 text-sm md:text-base text-base-text/80 text-center">
          A clear, reliable process that takes you from first conversation to a launched,
          professionally managed website—without confusion or surprises.
        </p>

        <div className="mt-10 space-y-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative flex gap-4 md:gap-6">
              {/* LEFT: number + vertical connector */}
              <div className="flex flex-col items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-base-accent/60 bg-white/5 text-xs font-semibold text-base-accent">
                  {String(index + 1).padStart(2, "0")}
                </div>
                {index < steps.length - 1 && (
                  <div className="mt-2 flex-1 w-px bg-gradient-to-b from-base-accent/40 via-base-accent/10 to-transparent" />
                )}
              </div>

              {/* RIGHT: content */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 md:p-6">
                <h3 className="text-base-heading text-lg font-medium">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-base-text/75 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs md:text-sm text-base-text/60 text-center">
          Every project follows this same structured flow so you always know where things stand.
        </p>
      </div>
    </section>
  );
}
