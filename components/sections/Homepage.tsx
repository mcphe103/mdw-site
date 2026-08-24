import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ExternalLink,
  MapPin,
  RefreshCw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import {
  MotionArticle,
  ProjectReveal,
  Reveal,
  Stagger,
} from "@/components/motion/MotionSystem";
import { ProjectIntakeTrigger } from "@/components/project-intake/ProjectIntake";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Button } from "@/components/ui/button";
import { NumberBadge } from "@/components/ui/NumberBadge";
import { websitePackages } from "@/lib/services";
import { siteConfig } from "@/lib/site";

const servicePaths = [
  {
    index: "01",
    problem: "The business is credible, but the website does not communicate it yet.",
    title: "Small-Business Web Design",
    description:
      "A professional website planned around your business, your customers, and the actions you need them to take.",
    detail: "New websites · Clear positioning · Mobile-first execution",
    icon: Sparkles,
  },
  {
    index: "02",
    problem: "The business moved forward while the website fell behind.",
    title: "Website Redesign",
    description:
      "A structured rebuild for an outdated or underperforming website that no longer represents the quality of your work.",
    detail: "Content structure · Visual direction · Technical renewal",
    icon: RefreshCw,
  },
  {
    index: "03",
    problem: "The website exists, but nobody is clearly responsible for it.",
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

export function ServicesOverview() {
  return (
    <section id="services" className="section-space section-panel isolate overflow-hidden border-y border-white/[0.07]">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <span className="absolute -right-24 top-20 h-64 w-64 rotate-45 border border-base-cyan/[0.08]" />
        <span className="absolute bottom-16 left-[8%] h-32 w-32 rounded-full border border-base-cyan/[0.08] shadow-[0_0_70px_hsl(var(--signal-cyan)/0.045)]" />
      </div>
      <Container>
        <Reveal className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            kicker="Problems & solutions"
            title="Start with what is not working. Build only what solves it."
            description="MDW brings design, development, launch planning, and ongoing care into one accountable process—without selling unnecessary features."
            align="left"
            className="max-w-4xl"
          />
          <div className="shrink-0">
            <Button asChild variant="outline">
              <Link href="/pricing">Services &amp; Pricing <ArrowRight /></Link>
            </Button>
          </div>
        </Reveal>

        <Stagger className="mt-10 grid overflow-hidden border border-base-cyan/15 bg-base-bg/28 shadow-[0_0_80px_hsl(var(--signal-cyan)/0.04)] md:grid-cols-3 sm:mt-14">
          {servicePaths.map((service) => {
            const Icon = service.icon;
            return (
              <MotionArticle
                key={service.title}
                className="group relative border-b border-white/10 p-6 last:border-b-0 md:border-b-0 md:border-r md:p-7 md:last:border-r-0 lg:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <NumberBadge value={service.index} />
                  <Icon className="h-5 w-5 text-base-cyan/65 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
                </div>
                <p className="mt-6 min-h-12 text-sm leading-6 text-base-mute">{service.problem}</p>
                <div className="mt-5 border-t border-white/10 pt-5">
                  <p className="operational-label">MDW response</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-base-heading">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-base-text/68">{service.description}</p>
                  <p className="mt-5 font-mono text-[0.625rem] uppercase leading-5 tracking-[0.13em] text-base-mute">{service.detail}</p>
                </div>
              </MotionArticle>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}

export function WorkOverview() {
  return (
    <>
      <section id="portfolio" className="section-space overflow-hidden pb-16 sm:pb-20 lg:pb-24">
        <Container>
          <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle
              kicker="Proof in practice"
              title="Two businesses. Two different customer journeys."
              description="The visual direction changes with the business. The standard does not: clear structure, responsive execution, secure lead capture, and dependable care."
              align="left"
              className="max-w-4xl"
            />
            <p className="max-w-sm border-l border-base-cyan/35 pl-5 text-sm leading-6 text-base-text/62">
              Built for the business in front of us—not adapted from a house style.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-2 sm:mt-14">
            <ProjectCard
              index="01"
              region="Riverbank · Central Valley"
              title="Sweet Indulgence"
              description="A visual bakery experience that guides customers from inspiration to a secure custom inquiry."
              points={["Luxury-led direction", "Responsive presentation", "Secure inquiry delivery"]}
              image="/portfolio/sweet-indulgence-homepage.webp"
              imageAlt="Sweet Indulgence homepage featuring a custom butterfly celebration cake"
              imagePosition="object-center"
              link="https://www.sweetxindulgence.com/"
              featured
            />
            <ProjectCard
              index="02"
              region="East Bay / Delta"
              title="Chairez Fencing"
              description="A focused contractor website that makes services, completed work, and estimate requests easy to find."
              points={["Clear service structure", "Project gallery", "Managed hosting"]}
              image="/portfolio/chairez-fencing.png"
              imageAlt="Chairez Fencing website shown across desktop and mobile layouts"
              imagePosition="object-center"
              link="https://www.chairezfencing.com/"
            />
          </div>
        </Container>
      </section>

      <section id="process" className="section-panel scroll-mt-28 border-y border-white/[0.07] py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-14">
              <div>
                <p className="operational-label">The project path</p>
                <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-base-heading sm:text-5xl lg:text-[3.5rem]">
                  Clear from first conversation to launch.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-base-text/68 lg:justify-self-end lg:border-l lg:border-base-cyan/30 lg:pl-6 lg:text-lg lg:leading-8">
                You know what is happening, what is needed, and what must be approved—before the work moves forward.
              </p>
            </div>

            <ol className="mt-10 grid gap-3 md:grid-cols-2 sm:mt-12 xl:grid-cols-5">
              {processSteps.map(([index, title, description]) => (
                <li
                  key={title}
                  className="relative min-h-[15rem] overflow-hidden border border-white/10 bg-base-bg/32 p-6 transition-colors hover:border-base-cyan/25 hover:bg-base-cyan/[0.025]"
                >
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-base-cyan/45 via-base-cyan/10 to-transparent" />
                  <NumberBadge value={index} />
                  <h3 className="mt-6 text-lg font-semibold tracking-[-0.025em] text-base-heading">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-base-text/64">{description}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function ProjectCard({
  index,
  region,
  title,
  description,
  points,
  image,
  imageAlt,
  imagePosition,
  link,
  featured = false,
}: {
  index: string;
  region: string;
  title: string;
  description: string;
  points: readonly string[];
  image: string;
  imageAlt: string;
  imagePosition: string;
  link: string;
  featured?: boolean;
}) {
  return (
    <ProjectReveal
      className={`project-feature flex h-full flex-col overflow-hidden border bg-base-surface/72 ${
        featured ? "border-base-cyan/18" : "border-white/10"
      }`}
    >
      <div className="relative min-h-[18rem] overflow-hidden bg-base-bg sm:min-h-[21rem]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={`object-cover ${imagePosition}`}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base-bg/55 via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <NumberBadge value={index} size="compact" />
          <p className="operational-label">{region}</p>
        </div>
        <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-base-heading sm:text-3xl">{title}</h3>
        <p className="mt-3 leading-7 text-base-text/68">{description}</p>
        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-xs font-medium text-base-text/64">
          {points.map((point) => (
            <li key={point} className="flex items-center gap-2">
              <Check className="h-3.5 w-3.5 shrink-0 text-base-cyan" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-base-heading transition-colors hover:text-base-cyan"
        >
          View live website <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </ProjectReveal>
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
        <Reveal className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            kicker="Investment snapshot"
            title="Choose a starting point. Compare the details when you are ready."
            description="Three website packages cover the most common starting scopes. Final scope and investment are confirmed after discovery."
            align="left"
            className="max-w-4xl"
          />
          <Button asChild variant="outline">
            <Link href="/pricing">Compare Every Detail <ArrowRight /></Link>
          </Button>
        </Reveal>

        <Stagger className="mt-10 grid gap-4 lg:grid-cols-3 sm:mt-14">
          {websitePackages.map((plan) => (
            <MotionArticle
              key={plan.name}
              className={`group relative flex flex-col border p-6 sm:p-7 ${
                "featured" in plan && plan.featured
                  ? "border-base-cyan/35 bg-[linear-gradient(145deg,hsl(var(--signal-cyan)/0.09),hsl(var(--canvas-obsidian)/0.72))] shadow-[0_0_50px_hsl(var(--signal-cyan)/0.06)]"
                  : "border-white/10 bg-base-bg/28 transition-colors hover:border-base-cyan/20"
              }`}
            >
              {"featured" in plan && plan.featured && (
                <span className="absolute right-5 top-5 rounded-full border border-base-cyan/40 bg-base-cyan/10 px-3 py-1 font-mono text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-base-cyan">
                  Most Popular
                </span>
              )}
              <div className="flex items-center gap-3">
                <NumberBadge value={plan.index} size="compact" />
                <p className="operational-label">Website package</p>
              </div>
              <div className="mt-6 flex items-end justify-between gap-4">
                <h3 className="text-2xl font-semibold tracking-[-0.035em] text-base-heading">{plan.name}</h3>
                <div className="text-right">
                  <p className="text-[0.625rem] font-medium uppercase tracking-[0.14em] text-base-mute">From</p>
                  <p className="mt-1 text-3xl font-semibold tracking-[-0.045em] text-base-cyan">{plan.price}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-base-text/68">{plan.description}</p>
              <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5 text-sm text-base-text/66">
                {plan.summaryPoints.slice(0, 2).map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-base-cyan/80" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <ProjectIntakeTrigger variant="link" className="h-auto px-0 text-base-cyan">
                  Start Your Project <ArrowRight />
                </ProjectIntakeTrigger>
              </div>
            </MotionArticle>
          ))}
        </Stagger>
        <div className="mt-6 flex flex-col gap-2 text-sm leading-6 text-base-mute sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <p>Hosting &amp; Care begins at $39/month and is priced separately from website development.</p>
          <Link href="/pricing" className="inline-flex items-center gap-2 font-semibold text-base-heading transition-colors hover:text-base-cyan">
            Inclusions, exclusions, and care plans <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export function AboutOverview() {
  return (
    <section id="about" className="section-space overflow-hidden bg-[radial-gradient(circle_at_18%_50%,hsl(var(--signal-cyan)/0.1),transparent_30rem),hsl(var(--canvas-obsidian)/0.72)]">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16 xl:gap-20">
          <Reveal className="signal-panel relative mx-auto w-full max-w-[29rem] overflow-hidden border border-base-cyan/20 bg-base-bg/60">
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
              <p>I started McPherson Digital Works to give small-business owners a professional online presence without leaving them alone with confusing tools or unclear technical decisions. I remain directly involved from planning and design through launch and ongoing support.</p>
              <p>The discipline behind MDW is influenced by my Marine Corps background: prepare carefully, communicate clearly, take responsibility for the work, and leave the system stronger than you found it.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm font-medium text-base-text/72">
              <span>Founder-led</span>
              <span>Veteran-owned</span>
              <span>Based in Modesto</span>
            </div>
            <aside
              aria-label="MDW local service area"
              className="mt-8 border border-base-cyan/15 bg-base-bg/38 p-5 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-base-cyan/25 bg-base-cyan/10 text-base-cyan">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="operational-label">Local service area</p>
                  <p className="mt-2 font-semibold text-base-heading">
                    Serving Modesto and Central Valley small businesses.
                  </p>
                  <p className="mt-2 text-sm leading-6 text-base-text/66">
                    Web design, website redesign, and ongoing care for businesses in {siteConfig.serviceAreas.join(", ")}, surrounding communities, and select remote locations.
                  </p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-4 text-sm font-semibold">
                <Link href="/about" className="inline-flex items-center gap-2 text-base-heading transition-colors hover:text-base-cyan">
                  Meet Matthew <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/modesto-web-design" className="inline-flex items-center gap-2 text-base-cyan transition-colors hover:text-base-heading">
                  Modesto Web Design <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </aside>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
