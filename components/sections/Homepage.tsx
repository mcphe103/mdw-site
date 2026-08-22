import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ExternalLink,
  RefreshCw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import {
  DriftShape,
  MotionArticle,
  ProjectReveal,
  Reveal,
  Stagger,
  StaggerItem,
  Timeline,
  TimelineItem,
} from "@/components/motion/MotionSystem";
import { ProjectIntakeTrigger } from "@/components/project-intake/ProjectIntake";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Button } from "@/components/ui/button";
import { NumberBadge } from "@/components/ui/NumberBadge";
import { websitePackages } from "@/lib/services";

const servicePaths = [
  {
    index: "01",
    title: "Small-Business Web Design",
    description:
      "A professional website planned around your business, your customers, and the actions you need them to take.",
    detail: "New websites · Clear positioning · Mobile-first execution",
    icon: Sparkles,
  },
  {
    index: "02",
    title: "Website Redesign",
    description:
      "A structured rebuild for an outdated or underperforming website that no longer represents the quality of your work.",
    detail: "Content structure · Visual direction · Technical renewal",
    icon: RefreshCw,
  },
  {
    index: "03",
    title: "Hosting & Care",
    description:
      "Dependable hosting, monitoring, maintenance, and a real person responsible for the website after launch.",
    detail: "Managed hosting · Monitoring · Ongoing support",
    icon: ShieldCheck,
  },
] as const;

const processSteps = [
  ["01", "Discovery", "Understand the business, audience, priorities, and project constraints."],
  ["02", "Direction", "Define the site structure, content hierarchy, and visual approach."],
  ["03", "Creation", "Design and build the approved experience with careful technical execution."],
  ["04", "Review", "Walk through the work, consolidate feedback, and refine the details."],
  ["05", "Launch & Care", "Verify the complete system, launch deliberately, and support it afterward."],
] as const;

export function BusinessNeeds() {
  return (
    <section id="business-needs" className="opening-sequence section-space relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <DriftShape className="absolute -left-24 top-12 h-52 w-52 rotate-45 border border-base-cyan/10 sm:left-[8%] sm:h-72 sm:w-72" distance={14} />
        <DriftShape className="absolute right-[7%] top-24 h-40 w-40 rounded-full border border-base-cyan/10 shadow-[0_0_80px_hsl(var(--signal-cyan)/0.06)] sm:h-64 sm:w-64" distance={20} />
        <span className="absolute right-[18%] top-0 h-32 w-px bg-gradient-to-b from-base-cyan/70 to-transparent shadow-[0_0_18px_hsl(var(--signal-cyan)/0.5)]" />
      </div>
      <Container>
        <div className="relative grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-24">
          <Reveal className="lg:sticky lg:top-32">
            <SectionTitle
              kicker="The website problem"
              title="A website should create confidence—not another thing to manage alone."
              align="left"
            />
            <p className="mt-7 max-w-xl text-base leading-8 text-base-text/72 sm:text-lg">
              Small-business websites often fail quietly. The information is difficult to follow, the presentation no longer matches the business, or nobody is clearly responsible when something needs attention.
            </p>
          </Reveal>

          <Stagger className="relative pt-3 lg:pt-10">
            <div className="opening-signal-line absolute bottom-8 left-[1.1875rem] top-10 w-px origin-top bg-gradient-to-b from-base-cyan/75 via-base-cyan/25 to-transparent shadow-[0_0_16px_hsl(var(--signal-cyan)/0.28)] sm:left-[1.4375rem]" aria-hidden="true" />
            <div className="space-y-3">
              {[
                ["01", "Unclear direction", "Visitors cannot quickly understand what the business offers, why it matters, or what to do next."],
                ["02", "A presence that fell behind", "The website no longer reflects the quality, credibility, or momentum the business has built."],
                ["03", "Nobody responsible after launch", "Updates, reliability, and technical decisions become another burden for the owner to carry."],
              ].map(([index, title, description]) => (
                <MotionArticle key={title} className="group relative grid grid-cols-[2.5rem_1fr] gap-5 border border-white/[0.08] bg-base-bg/45 px-5 py-6 backdrop-blur-sm transition-colors hover:border-base-cyan/20 hover:bg-base-cyan/[0.025] sm:grid-cols-[3rem_1fr] sm:px-7 sm:py-7">
                  <NumberBadge value={index} />
                  <div>
                    <h3 className="text-lg font-semibold tracking-[-0.025em] text-base-heading sm:text-xl">{title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-base-text/66 sm:text-base sm:leading-7">{description}</p>
                  </div>
                </MotionArticle>
              ))}
            </div>
            <StaggerItem className="relative mt-7 overflow-hidden border-l border-base-cyan/65 bg-[linear-gradient(90deg,hsl(var(--signal-cyan)/0.09),transparent_78%)] px-6 py-7 sm:px-8">
              <span className="absolute -right-8 -top-10 h-32 w-32 rotate-45 border border-base-cyan/10" aria-hidden="true" />
              <p className="operational-label">The MDW response</p>
              <p className="mt-3 max-w-2xl text-lg leading-8 text-base-heading/90">
                Design, development, launch planning, and ongoing care brought into one accountable process—so the website supports the business instead of adding uncertainty.
              </p>
              <div className="mt-6 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-3">
                {["Clear direction", "Professional execution", "Care after launch"].map((item) => (
                  <p key={item} className="flex items-center gap-2.5 text-sm font-semibold tracking-[-0.01em] text-base-heading/85">
                    <span className="h-1.5 w-1.5 rounded-full bg-base-cyan shadow-[0_0_12px_hsl(var(--signal-cyan)/0.72)]" />
                    {item}
                  </p>
                ))}
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </Container>
    </section>
  );
}

export function ServicesOverview() {
  return (
    <section id="services" className="section-space section-panel border-y border-white/[0.07]">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <SectionTitle kicker="Services" title="The right website starts with the right problem." align="left" />
            <p className="mt-6 max-w-xl leading-7 text-base-text/68">
              Every engagement is scoped around what the business actually needs—not around filling a template or selling unnecessary features.
            </p>
            <Button asChild variant="outline" className="mt-8">
              <Link href="/pricing">Explore Services & Pricing <ArrowRight /></Link>
            </Button>
          </Reveal>

          <Stagger className="divide-y divide-white/10 border-y border-base-cyan/15 bg-base-bg/20 px-5 shadow-[inset_1px_0_0_hsl(var(--signal-cyan)/0.12),0_0_60px_hsl(var(--signal-cyan)/0.035)] sm:px-7">
            {servicePaths.map((service) => {
              const Icon = service.icon;
              return (
                <MotionArticle key={service.title} className="group grid grid-cols-[2.5rem_1fr] gap-x-5 gap-y-4 py-7 transition-colors hover:bg-base-cyan/[0.025] sm:grid-cols-[3rem_1fr_auto] sm:items-start sm:py-9">
                  <NumberBadge value={service.index} />
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.025em] text-base-heading sm:text-2xl">{service.title}</h3>
                    <p className="mt-3 max-w-2xl leading-7 text-base-text/68">{service.description}</p>
                    <p className="mt-4 font-mono text-[0.625rem] uppercase leading-5 tracking-[0.13em] text-base-mute">{service.detail}</p>
                  </div>
                  <Icon className="hidden h-5 w-5 text-base-cyan/70 transition-transform group-hover:-translate-y-0.5 sm:block" aria-hidden="true" />
                </MotionArticle>
              );
            })}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}

export function WorkOverview() {
  return (
    <section id="portfolio" className="section-space overflow-hidden">
      <Container>
        <Reveal>
          <SectionTitle
            kicker="Selected work"
            title="Different businesses should not look like versions of the same website."
            description="The standard stays consistent: careful planning, clear communication, and dependable execution. The visual character and customer journey belong to the business."
            align="left"
          />
        </Reveal>

        <div className="mt-12 space-y-8 sm:mt-16">
          <ProjectReveal className="project-feature relative grid overflow-hidden border border-base-cyan/15 bg-base-surface/72 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative min-h-[22rem] overflow-hidden bg-base-bg sm:min-h-[30rem]">
              <Image
                src="/portfolio/sweet-indulgence-homepage.webp"
                alt="Sweet Indulgence homepage featuring a custom butterfly celebration cake"
                fill
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base-bg/45 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-base-bg/78 px-3 py-1.5 text-xs font-medium text-base-heading backdrop-blur-md sm:bottom-7 sm:left-7">
                Live homepage · Riverbank, California
              </div>
            </div>
            <ProjectCopy
              index="01"
              region="Riverbank · Central Valley"
              title="Sweet Indulgence"
              description="A highly visual bakery experience structured around custom cakes, cupcakes, cheesecakes, and a clearer path from inspiration to inquiry."
              points={["Distinct luxury-led direction", "Responsive product presentation", "Secure custom inquiry delivery", "Privacy and performance safeguards"]}
              link="https://www.sweetxindulgence.com/"
            />
          </ProjectReveal>

          <ProjectReveal className="project-feature relative grid overflow-hidden border border-white/10 bg-base-surface/72 lg:grid-cols-[0.92fr_1.08fr]" delay={0.08}>
            <ProjectCopy
              index="02"
              region="East Bay / Delta"
              title="Chairez Fencing"
              description="A focused contractor website that organizes services clearly, presents completed work, and makes estimate requests easy to find."
              points={["Service-focused structure", "Mobile-friendly presentation", "Project gallery", "Managed launch and hosting"]}
              link="https://www.chairezfencing.com/"
            />
            <div className="relative min-h-[21rem] border-t border-white/10 bg-base-bg/70 lg:order-first lg:min-h-[30rem] lg:border-r lg:border-t-0">
              <Image src="/portfolio/chairez-fencing.png" alt="Chairez Fencing website shown across desktop and mobile layouts" fill sizes="(min-width: 1024px) 54vw, 100vw" className="object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-base-bg/60 via-transparent to-transparent" />
            </div>
          </ProjectReveal>
        </div>
      </Container>
    </section>
  );
}

function ProjectCopy({ index, region, title, description, points, link }: { index: string; region: string; title: string; description: string; points: readonly string[]; link?: string }) {
  return (
    <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
      <div className="flex items-center gap-3">
        <NumberBadge value={index} size="compact" />
        <p className="operational-label">{region}</p>
      </div>
      <h3 className="mt-5 text-3xl font-semibold tracking-[-0.045em] text-base-heading sm:text-4xl">{title}</h3>
      <p className="mt-5 max-w-xl leading-7 text-base-text/70">{description}</p>
      <ul className="mt-7 grid gap-3 text-sm text-base-text/70 sm:grid-cols-2">
        {points.map((point) => <li key={point} className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-base-cyan" aria-hidden="true" />{point}</li>)}
      </ul>
      {link && (
        <Link href={link} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-base-heading transition-colors hover:text-base-cyan">
          View live website <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}

export function ProcessOverview() {
  return (
    <section id="process" className="section-space section-panel border-y border-white/[0.07]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <Reveal>
            <SectionTitle kicker="Process" title="A clear process makes better work—and a better client experience." align="left" />
            <p className="mt-6 leading-7 text-base-text/68">You know what is happening, what is needed from you, and what must be approved before the project moves forward.</p>
          </Reveal>
          <Timeline className="relative">
            {processSteps.map(([index, title, description]) => (
              <TimelineItem key={title} className="relative grid grid-cols-[2.75rem_1fr] gap-x-4 gap-y-2 border-b border-white/10 py-6 first:border-t sm:grid-cols-[3rem_10rem_1fr] sm:items-center sm:gap-x-6 sm:py-7">
                <NumberBadge value={index} className="process-node shadow-[0_0_0_5px_hsl(var(--canvas-carbon)),0_0_20px_hsl(var(--signal-cyan)/0.16)]" />
                <h3 className="font-semibold text-base-heading">{title}</h3>
                <p className="col-start-2 text-sm leading-6 text-base-text/65 sm:col-start-auto">{description}</p>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </Container>
    </section>
  );
}

export function PricingOverview() {
  return (
    <section id="pricing" className="investment-sequence section-space section-panel isolate overflow-hidden border-y border-white/[0.07]">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <span className="absolute -right-24 top-24 h-72 w-72 rotate-45 border border-base-cyan/[0.08]" />
        <span className="absolute bottom-24 left-[8%] h-36 w-36 rounded-full border border-base-cyan/[0.08] shadow-[0_0_70px_hsl(var(--signal-cyan)/0.045)]" />
      </div>
      <Container>
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle kicker="Investment" title="A clear starting point for the right-sized project." description="Choose a focused one-page launch, a complete small-business website, or an expanded build for deeper content and lead generation." align="left" className="max-w-3xl" />
          <Button asChild variant="outline"><Link href="/pricing">Full Pricing Details <ArrowRight /></Link></Button>
        </Reveal>

        <Stagger className="relative mt-12 border-y border-base-cyan/15 bg-base-bg/25 shadow-[0_0_80px_hsl(var(--signal-cyan)/0.045)] sm:mt-16">
          <span className="absolute -left-px top-0 h-20 w-px bg-base-cyan shadow-[0_0_22px_hsl(var(--signal-cyan)/0.72)]" aria-hidden="true" />
          {websitePackages.map((plan) => (
            <MotionArticle
              key={plan.name}
              className={`group relative grid gap-7 border-b border-white/10 px-6 py-9 last:border-b-0 sm:px-9 sm:py-11 lg:grid-cols-[0.72fr_1.18fr_0.48fr] lg:items-start lg:gap-12 lg:px-12 ${
                "featured" in plan && plan.featured
                  ? "bg-[linear-gradient(90deg,hsl(var(--signal-cyan)/0.07),transparent_42%,hsl(var(--signal-cyan)/0.025))]"
                  : "transition-colors hover:bg-white/[0.018]"
              }`}
            >
              {"featured" in plan && plan.featured && <>
                <span className="absolute inset-y-0 left-0 w-px bg-base-cyan shadow-[0_0_22px_hsl(var(--signal-cyan)/0.7)]" aria-hidden="true" />
                <span className="absolute right-5 top-5 rounded-full border border-base-cyan/40 bg-base-cyan/10 px-3 py-1 font-mono text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-base-cyan sm:right-8">Most Popular</span>
              </>}
              <div className="flex items-start gap-4">
                <NumberBadge value={plan.index} size="compact" />
                <div>
                  <p className="operational-label">Website package</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-base-heading sm:text-[1.75rem]">{plan.name}</h3>
                </div>
              </div>

              <div>
                <p className="max-w-2xl text-sm leading-6 text-base-text/70 sm:text-base sm:leading-7">{plan.description}</p>
                <ul className="mt-6 grid gap-x-7 gap-y-3 border-t border-white/10 pt-6 text-sm text-base-text/68 sm:grid-cols-2">
                  {plan.summaryPoints.map((point) => <li key={point} className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-base-cyan/80" aria-hidden="true" />{point}</li>)}
                </ul>
                <ProjectIntakeTrigger variant="link" className="mt-5 h-auto px-0 text-base-cyan">Start Your Project <ArrowRight /></ProjectIntakeTrigger>
              </div>

              <div className="border-t border-white/10 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-base-mute">Starting investment</p>
                <p className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-base-cyan sm:text-4xl">{plan.price}</p>
                <p className="mt-2 text-xs text-base-mute">Recommended: {plan.carePlan.replace(" Hosting & Care", " Care")}</p>
              </div>
            </MotionArticle>
          ))}
        </Stagger>
        <div className="mt-6 flex flex-col gap-3 text-sm leading-6 text-base-mute sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <p>Prices begin at the amounts shown. Final scope and investment are confirmed after discovery.</p>
          <p className="max-w-2xl sm:text-right">Hosting & Care begins at $39/month and is priced separately from website development.</p>
        </div>
      </Container>
    </section>
  );
}

export function AboutOverview() {
  return (
    <section id="about" className="section-space overflow-hidden bg-[radial-gradient(circle_at_18%_50%,hsl(var(--signal-cyan)/0.1),transparent_30rem),hsl(var(--canvas-obsidian)/0.72)]">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 xl:gap-28">
          <Reveal className="signal-panel relative mx-auto w-full max-w-[34rem] overflow-hidden border border-base-cyan/20 bg-base-bg/60">
            <div className="relative aspect-square">
              <Image
                src="/images/matthew-mcpherson-founder.png"
                alt="Matthew McPherson, founder of McPherson Digital Works"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base-bg/88 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-base-cyan/65 to-transparent shadow-[0_0_22px_hsl(var(--signal-cyan)/0.6)]" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-xl font-semibold tracking-[-0.025em] text-base-heading sm:text-2xl">Matthew McPherson</p>
              <p className="mt-1.5 text-sm font-medium text-base-cyan">Founder, McPherson Digital Works</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionTitle kicker="About" title="Your website is handled by the person whose name is on the work." align="left" />
            <div className="mt-6 space-y-5 leading-7 text-base-text/70">
              <p>I started McPherson Digital Works to help small-business owners establish a professional online presence without being left alone with confusing tools, unclear technical decisions, or a website nobody is responsible for after launch.</p>
              <p>My role does not end with selling the project. I am directly involved in planning the structure, developing the design, building the website, preparing it for launch, and supporting it afterward.</p>
              <p>The discipline behind MDW is influenced by my Marine Corps background: prepare carefully, communicate clearly, take responsibility for the work, and leave the system stronger than you found it.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm font-medium text-base-text/72">
              <span>Founder-led</span>
              <span>Veteran-owned</span>
              <span>Central Valley focused</span>
            </div>
            <Button asChild variant="outline" className="mt-8">
              <Link href="/about">Meet Matthew & Learn About MDW <ArrowRight /></Link>
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function ProjectCTA() {
  return (
    <section className="section-space pb-0">
      <Container>
        <Reveal className="signal-panel relative overflow-hidden border border-base-cyan/20 bg-[radial-gradient(circle_at_86%_18%,hsl(var(--signal-cyan)/0.17),transparent_24rem),linear-gradient(135deg,hsl(var(--surface-raised)),hsl(var(--canvas-obsidian)))] px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
          <p className="operational-label">Your next step</p>
          <h2 className="mt-5 max-w-4xl text-balance text-3xl font-semibold leading-tight tracking-[-0.045em] text-base-heading sm:text-5xl">Tell me what your business needs from its website.</h2>
          <p className="mt-5 max-w-2xl leading-7 text-base-text/70">You do not need to arrive with every page, feature, or technical detail already decided. Start with what you know now.</p>
          <ProjectIntakeTrigger size="lg" className="mt-8">Start a Project <ArrowRight /></ProjectIntakeTrigger>
        </Reveal>
      </Container>
    </section>
  );
}
