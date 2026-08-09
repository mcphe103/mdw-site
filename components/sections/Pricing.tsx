import { ArrowRight, Check, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { ProjectIntakeTrigger } from "@/components/project-intake/ProjectIntake";

const websiteEngagements = [
  {
    index: "01",
    name: "Focused Launch",
    price: "$999+",
    introduction:
      "A focused, professional website for a small business that needs a credible foundation and a clear path to inquiry.",
    idealFor:
      "New or small local businesses with a focused offer, limited content, and a need to establish trust online.",
    outcomes: [
      "Up to three primary pages",
      "Custom visual direction",
      "Mobile-first responsive build",
      "Clear calls to action",
      "Secure inquiry experience",
      "Launch preparation",
    ],
    scopeNote:
      "Best for a concise website with one primary customer journey. Additional pages, complex integrations, or extensive content systems require a broader engagement.",
  },
  {
    index: "02",
    name: "Established Presence",
    price: "$1,750+",
    introduction:
      "A broader website for a business with multiple services, more content, and a more developed customer journey.",
    idealFor:
      "Established businesses ready to present several services, answer more customer questions, and strengthen their professional presence.",
    outcomes: [
      "Four to six primary pages",
      "Expanded service presentation",
      "Stronger content hierarchy",
      "Project, gallery, or proof sections",
      "Analytics and search setup",
      "Launch preparation",
    ],
    scopeNote:
      "A strong fit when the business has outgrown a compact site but does not yet need advanced integrations or an expansive content architecture.",
    featured: true,
  },
  {
    index: "03",
    name: "Growth & Visibility",
    price: "$2,750+",
    introduction:
      "A deeper engagement for substantial content, search architecture, integrations, or continued growth.",
    idealFor:
      "Businesses with a wider service footprint, stronger visibility goals, advanced forms, or a more involved digital customer journey.",
    outcomes: [
      "Expanded content system",
      "Advanced forms or integrations",
      "Local SEO foundation",
      "Stronger measurement architecture",
      "Scalable page structure",
      "Launch and growth planning",
    ],
    scopeNote:
      "E-commerce, customer portals, application functionality, advanced automation, and unusual integrations are individually proposed after discovery.",
  },
] as const;

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
          <p className="operational-label">Pricing / Project investment</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1.18fr_0.82fr] lg:items-end lg:gap-20">
            <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-base-heading sm:text-5xl lg:text-6xl">
              Clear starting points. A scope built around the business.
            </h1>
            <p className="max-w-xl text-base leading-8 text-base-text/70 sm:text-lg">
              Every project begins with discovery. These starting investments show the typical level of planning, design, development, and launch care behind each engagement.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-space section-panel relative isolate">
        <Container>
          <div className="grid gap-6 border-b border-white/10 pb-9 sm:grid-cols-[auto_1fr] sm:items-end sm:gap-10">
            <p className="operational-label">Website engagements / 01–03</p>
            <p className="max-w-2xl text-sm leading-6 text-base-mute sm:justify-self-end sm:text-right">
              Final scope and investment are confirmed after a discovery conversation.
            </p>
          </div>

          <div className="relative mt-2">
            <span className="absolute bottom-0 left-5 top-0 hidden w-px bg-gradient-to-b from-base-cyan/60 via-base-cyan/15 to-transparent md:block" aria-hidden="true" />
            {websiteEngagements.map((plan) => (
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
                  <p className="operational-label">Website engagement</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-base-heading sm:text-4xl">{plan.name}</h2>
                  <p className="mt-4 text-sm uppercase tracking-[0.12em] text-base-mute">Starting investment</p>
                  <p className="mt-1 text-4xl font-semibold tracking-[-0.05em] text-base-cyan">{plan.price}</p>
                  <p className="mt-6 max-w-md leading-7 text-base-text/70">{plan.introduction}</p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-base-heading/80">Typical outcomes</p>
                    <ul className="mt-5 grid gap-3 text-sm leading-6 text-base-text/70">
                      {plan.outcomes.map((outcome) => (
                        <li key={outcome} className="flex gap-2.5">
                          <Check className="mt-1 h-4 w-4 shrink-0 text-base-cyan" aria-hidden="true" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-base-heading/80">Best suited for</p>
                    <p className="mt-5 text-sm leading-7 text-base-text/70">{plan.idealFor}</p>
                    <div className="mt-6 border-l border-base-cyan/30 pl-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-base-mute">Scope guidance</p>
                      <p className="mt-2 text-xs leading-6 text-base-mute">{plan.scopeNote}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_42%,hsl(var(--signal-cyan)/0.1),transparent_26rem)]" aria-hidden="true" />
        <Container>
          <div className="signal-panel relative grid overflow-hidden border border-base-cyan/20 bg-base-surface/65 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="relative border-b border-base-cyan/15 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <span className="absolute -bottom-16 -left-16 h-40 w-40 rotate-45 border border-base-cyan/10" aria-hidden="true" />
              <ShieldCheck className="h-7 w-7 text-base-cyan" aria-hidden="true" />
              <p className="operational-label mt-8">After launch / Ongoing care</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-base-heading sm:text-4xl">Hosting & Care</h2>
              <p className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-base-cyan">$100 / month</p>
            </div>
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="max-w-2xl text-lg leading-8 text-base-heading/88">
                Dependable hosting and ongoing support for clients who want a real person responsible for the website after launch.
              </p>
              <ul className="mt-7 grid gap-3 text-sm leading-6 text-base-text/70 sm:grid-cols-2">
                {[
                  "Managed hosting and SSL",
                  "Performance and uptime monitoring",
                  "Backups and platform updates",
                  "Reasonable content updates",
                  "Technical support",
                  "Reliability and security checks",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-base-cyan" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-7 border-t border-white/10 pt-5 text-xs leading-6 text-base-mute">
                Major redesigns, new feature builds, and structural changes are proposed separately. Hosting & Care eligibility is confirmed with the website project.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="relative overflow-hidden border-l border-base-cyan/60 bg-[linear-gradient(90deg,hsl(var(--signal-cyan)/0.09),transparent_72%)] px-7 py-10 sm:px-10 sm:py-12">
            <span className="absolute -right-10 -top-16 h-44 w-44 rotate-45 border border-base-cyan/10" aria-hidden="true" />
            <p className="operational-label">Your next step</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-base-heading sm:text-4xl">Not sure which engagement fits?</h2>
            <p className="mt-4 max-w-2xl leading-7 text-base-text/70">
              Start with the business, the website you have now, and what needs to improve. You do not need to determine the package before reaching out.
            </p>
            <ProjectIntakeTrigger size="lg" className="mt-7">Start a Project <ArrowRight aria-hidden="true" /></ProjectIntakeTrigger>
          </div>
        </Container>
      </section>
    </main>
  );
}
