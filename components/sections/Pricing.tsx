import { ArrowRight, Check, Minus, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { ProjectIntakeTrigger } from "@/components/project-intake/ProjectIntake";
import { carePlans, packageComparison, websitePackages } from "@/lib/services";

export function Pricing() {
  return (
    <main className="overflow-hidden">
      <section className="relative isolate border-b border-white/[0.07] pb-20 pt-20 sm:pb-28 sm:pt-28 lg:pb-32">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <span className="absolute -right-20 top-14 h-72 w-72 rotate-45 border border-base-cyan/10" />
          <span className="absolute right-[18%] top-0 h-40 w-px bg-gradient-to-b from-base-cyan/60 to-transparent shadow-[0_0_20px_hsl(var(--signal-cyan)/0.4)]" />
          <span className="absolute -left-28 bottom-0 h-72 w-72 rounded-full border border-base-cyan/[0.07] shadow-[0_0_90px_hsl(var(--signal-cyan)/0.05)]" />
        </div>
        <Container>
          <p className="operational-label">Services & Pricing / Project investment</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1.18fr_0.82fr] lg:items-end lg:gap-20">
            <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-base-heading sm:text-5xl lg:text-6xl">
              Clear packages. Thoughtful scope. Dependable care.
            </h1>
            <p className="max-w-xl text-base leading-8 text-base-text/70 sm:text-lg">
              Website packages begin at $599. Each offers a clear foundation while leaving room to confirm the final scope around your business.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-space section-panel relative isolate">
        <Container>
          <div className="grid gap-6 border-b border-white/10 pb-9 sm:grid-cols-[auto_1fr] sm:items-end sm:gap-10">
            <p className="operational-label">Website packages / 01–03</p>
            <p className="max-w-2xl text-sm leading-6 text-base-mute sm:justify-self-end sm:text-right">
              Prices begin at the amounts shown. Final scope and investment are confirmed after discovery.
            </p>
          </div>

          <div className="relative mt-2">
            <span className="absolute bottom-0 left-5 top-0 hidden w-px bg-gradient-to-b from-base-cyan/60 via-base-cyan/15 to-transparent md:block" aria-hidden="true" />
            {websitePackages.map((plan) => (
              <article
                key={plan.name}
                className={`relative grid gap-8 border-b border-white/10 py-12 md:grid-cols-[3rem_0.72fr_1.28fr] md:gap-10 lg:gap-16 lg:py-16 ${
                  "featured" in plan && plan.featured
                    ? "bg-[linear-gradient(90deg,hsl(var(--signal-cyan)/0.065),transparent_68%)]"
                    : ""
                }`}
              >
                <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full border border-base-cyan/55 bg-base-carbon font-mono text-[0.6875rem] text-base-cyan shadow-[0_0_0_6px_hsl(var(--canvas-carbon)),0_0_22px_hsl(var(--signal-cyan)/0.18)]">
                  {plan.index}
                </span>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="operational-label">Website package</p>
                    {"featured" in plan && plan.featured && (
                      <span className="rounded-full border border-base-cyan/40 bg-base-cyan/10 px-3 py-1 font-mono text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-base-cyan">Most Popular</span>
                    )}
                  </div>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-base-heading sm:text-4xl">{plan.name}</h2>
                  <p className="mt-4 text-sm uppercase tracking-[0.12em] text-base-mute">Starting at</p>
                  <p className="mt-1 text-4xl font-semibold tracking-[-0.05em] text-base-cyan">{plan.price}</p>
                  <p className="mt-6 max-w-md leading-7 text-base-text/70">{plan.description}</p>
                  <p className="mt-5 text-sm font-semibold text-base-heading/85">Recommended: {plan.carePlan}</p>
                  <ProjectIntakeTrigger variant="outline" className="mt-7">Start Your Project <ArrowRight aria-hidden="true" /></ProjectIntakeTrigger>
                </div>

                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                  <ScopeList title="Included" items={plan.included} included />
                  <ScopeList title={plan.name === "Growth Website" ? "Not automatically included" : "Not included"} items={plan.excluded} />
                  {"note" in plan && plan.note && (
                    <p className="border-l border-base-cyan/45 pl-4 text-xs leading-6 text-base-mute lg:col-span-2">{plan.note}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <div className="max-w-3xl">
            <p className="operational-label">After launch / Hosting & Care</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-base-heading sm:text-5xl">A responsible plan for what happens after launch.</h2>
            <p className="mt-5 max-w-2xl leading-7 text-base-text/70">Website development and Hosting & Care are priced separately. Choose the plan aligned with the size and support needs of the website.</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {carePlans.map((plan) => (
              <article key={plan.name} className={`relative overflow-hidden border p-7 sm:p-9 ${"featured" in plan && plan.featured ? "border-base-cyan/35 bg-base-cyan/[0.055]" : "border-white/10 bg-base-surface/60"}`}>
                {"featured" in plan && plan.featured && <span className="absolute inset-x-0 top-0 h-px bg-base-cyan shadow-[0_0_24px_hsl(var(--signal-cyan)/0.65)]" aria-hidden="true" />}
                <ShieldCheck className="h-6 w-6 text-base-cyan" aria-hidden="true" />
                <p className="operational-label mt-7">For {plan.intendedFor}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-base-heading sm:text-3xl">{plan.name}</h3>
                <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <p className="text-3xl font-semibold tracking-[-0.045em] text-base-cyan">{plan.monthlyPrice}</p>
                  <p className="text-sm text-base-mute">or {plan.annualPrice}</p>
                </div>
                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <ScopeList title="Included" items={plan.included} included />
                  <ScopeList title="Not included" items={plan.excluded} />
                </div>
                <p className="mt-8 border-t border-white/10 pt-5 text-xs leading-6 text-base-mute">{plan.note}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 border-l border-base-cyan/55 bg-[linear-gradient(90deg,hsl(var(--signal-cyan)/0.08),transparent)] px-6 py-7 sm:px-8">
            <p className="font-semibold text-base-heading">Out-of-plan updates</p>
            <p className="mt-2 max-w-4xl text-sm leading-6 text-base-text/70">A $100 minimum service request covers up to one hour. Additional time is $50 per 30-minute increment, with approval required before work exceeds the initial hour. Larger or non-routine work receives a separate quote.</p>
          </div>
        </Container>
      </section>

      <section className="section-space section-panel border-y border-white/[0.07]">
        <Container>
          <p className="operational-label">Package comparison</p>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-base-heading sm:text-4xl">Compare the starting points.</h2>
          <p id="comparison-help" className="mt-4 text-sm leading-6 text-base-mute">On smaller screens, scroll horizontally to view every package.</p>
          <div className="mt-9 overflow-x-auto border border-white/10" tabIndex={0} role="region" aria-label="Website package comparison" aria-describedby="comparison-help">
            <table className="w-full min-w-[48rem] border-collapse text-left text-sm">
              <thead className="bg-base-bg/70">
                <tr>
                  {['Feature', 'Quick Launch', 'Starter Website', 'Growth Website'].map((heading, index) => (
                    <th key={heading} scope="col" className={`border-b border-white/10 px-5 py-4 font-semibold text-base-heading ${index === 2 ? "bg-base-cyan/[0.07] text-base-cyan" : ""}`}>{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {packageComparison.map((row) => (
                  <tr key={row[0]} className="border-b border-white/[0.07] last:border-b-0">
                    {row.map((cell, index) => index === 0 ? (
                      <th key={cell} scope="row" className="whitespace-nowrap px-5 py-4 font-medium text-base-heading/90">{cell}</th>
                    ) : (
                      <td key={`${row[0]}-${cell}`} className={`px-5 py-4 leading-6 text-base-text/70 ${index === 2 ? "bg-base-cyan/[0.035]" : ""}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="operational-label">Good to Know</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-base-heading sm:text-4xl">Clear expectations before work begins.</h2>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                "Prices begin at the amounts shown and depend on final scope.",
                "A 50% non-refundable deposit is required to reserve the project.",
                "The remaining balance is due before public launch.",
                "Domain registration and renewal are billed separately.",
                "Clients provide finalized content and brand assets unless additional services are quoted.",
                "Advanced functionality and work outside the selected package receive a separate quote.",
                "Out-of-plan updates begin at $100 for up to one hour.",
                "Website-development costs and Hosting & Care costs are separate.",
              ].map((term) => <li key={term} className="flex gap-3 border-b border-white/10 pb-4 text-sm leading-6 text-base-text/72"><Check className="mt-1 h-4 w-4 shrink-0 text-base-cyan" aria-hidden="true" />{term}</li>)}
            </ul>
          </div>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="relative overflow-hidden border-l border-base-cyan/60 bg-[linear-gradient(90deg,hsl(var(--signal-cyan)/0.09),transparent_72%)] px-7 py-10 sm:px-10 sm:py-12">
            <span className="absolute -right-10 -top-16 h-44 w-44 rotate-45 border border-base-cyan/10" aria-hidden="true" />
            <p className="operational-label">Your next step</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-base-heading sm:text-4xl">Not sure which package fits?</h2>
            <p className="mt-4 max-w-2xl leading-7 text-base-text/70">Start with what you know about your business and what the website needs to accomplish. You do not need to select a package before reaching out.</p>
            <ProjectIntakeTrigger size="lg" className="mt-7">Start Your Project <ArrowRight aria-hidden="true" /></ProjectIntakeTrigger>
          </div>
        </Container>
      </section>
    </main>
  );
}

function ScopeList({ title, items, included = false }: { title: string; items: readonly string[]; included?: boolean }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-base-heading/80">{title}</p>
      <ul className="mt-5 grid gap-3 text-sm leading-6 text-base-text/70">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5">
            {included ? <Check className="mt-1 h-4 w-4 shrink-0 text-base-cyan" aria-hidden="true" /> : <Minus className="mt-1 h-4 w-4 shrink-0 text-base-mute" aria-hidden="true" />}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
