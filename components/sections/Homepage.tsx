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
  ProjectReveal,
  Reveal,
} from "@/components/motion/MotionSystem";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Button } from "@/components/ui/button";
import { NumberBadge } from "@/components/ui/NumberBadge";
import { PackageCards } from "@/components/sections/PackageCards";
import { siteConfig } from "@/lib/site";

const servicePaths = [
  { title: "Help customers understand what you do", description: "Clear services, service areas, and useful answers help people decide whether your business fits their needs.", icon: Sparkles },
  { title: "Show why your work is worth choosing", description: "Give your project photos, customer feedback, and experience a place to build confidence before someone contacts you.", icon: RefreshCw },
  { title: "Make the next step easier", description: "Give customers a straightforward way to request an estimate or share what they need, with useful details arriving in your inbox.", icon: ShieldCheck },
] as const;

const processSteps = [
  ["01", "Talk it through", "Tell me about your customers, your priorities, and what needs to work better."],
  ["02", "Agree on a plan", "Know what will be built, what it costs, and what I need from you before we begin."],
  ["03", "Build your website", "I turn the agreed plan and your business content into a working preview."],
  ["04", "Review together", "See the website before it goes live and share feedback within your included revision rounds."],
  ["05", "Launch with support", "After approval and final payment, we launch. Your chosen care plan handles the agreed ongoing support."],
] as const;

export function ServicesOverview() {
  return (
    <section id="services" className="scroll-mt-28 border-b border-white/10 py-12 sm:py-16">
      <Container>
        <SectionTitle kicker="Built around your customers" title="A website with a job to do." align="left" />
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {servicePaths.map(({ title, description, icon: Icon }) => (
            <article key={title}>
              <Icon className="h-5 w-5 text-base-cyan" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold text-base-heading">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-base-text/70">{description}</p>
            </article>
          ))}
        </div>
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
              title="Real businesses. Thoughtful website decisions."
              description="Every project starts with what customers need to understand and what the owner needs to manage."
              align="left"
              className="max-w-4xl"
            />
            <p className="max-w-sm border-l border-base-cyan/35 pl-5 text-sm leading-6 text-base-text/62">
              Explore how each website helps customers take the next step.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-2 sm:mt-14">
            <ProjectCard
              index="01"
              region="Riverbank · Central Valley"
              title="Sweet Indulgence"
              description="Custom cakes start with a customer’s idea. The website pairs cake photography with an inquiry path so visitors can explore the work and share what they have in mind."
              points={["Browse cake inspiration", "Share a custom request", "Reach the business directly"]}
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
              description="Choosing a fencing contractor means understanding the services and seeing the work. The website brings those details together with a clear route to request an estimate."
              points={["Understand available services", "See completed projects", "Request an estimate"]}
              image="/portfolio/chairez-fencing.png"
              imageAlt="Chairez Fencing website shown across desktop and mobile layouts"
              imagePosition="object-center"
              link="https://www.chairezfencing.com/"
            />
          </div>
          <article className="mt-8 border-l-2 border-base-cyan bg-base-cyan/[0.04] p-6 sm:p-8">
            <p className="operational-label">Also built by MDW / Savory Sakura</p>
            <h3 className="mt-3 text-2xl font-semibold text-base-heading">Catering requests built around the owner’s availability.</h3>
            <p className="mt-4 max-w-3xl leading-7 text-base-text/70">Savory Sakura needed customers to explore the menu and request weekend catering. The site accepts preferred dates with a week’s notice, gathers order details, and explains that approval and a deposit are needed to confirm an order.</p>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-base-text/70">Customers have a clear way to ask. The owner keeps control of availability and confirmation.</p>
            <Link href="https://www.savorysakura.com" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 font-semibold text-base-cyan">Visit Savory Sakura <ExternalLink className="h-4 w-4" aria-hidden="true" /></Link>
          </article>
        </Container>
      </section>

    </>
  );
}

export function ProcessOverview() {
  return (
    <>
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
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View the ${title} live website`}
        className="group/image relative block min-h-[18rem] overflow-hidden bg-base-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-base-cyan/70 sm:min-h-[21rem]"
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={`object-cover transition-transform duration-500 ease-out group-hover/image:scale-[1.015] ${imagePosition}`}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base-bg/55 via-transparent to-transparent transition-colors group-hover/image:from-base-bg/45" />
        <span className="pointer-events-none absolute right-4 top-4 grid h-9 w-9 place-items-center border border-white/15 bg-base-bg/78 text-base-cyan shadow-elevation backdrop-blur-sm transition-colors group-hover/image:border-base-cyan/45 group-hover/image:bg-base-bg/90">
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </span>
      </Link>
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
            title="The right starting point for your business."
            description="Choose a starting point for what your business needs. Each option shows the build price, 50% starting payment, and recommended care."
            align="left"
            className="max-w-4xl"
          />
          <Button asChild variant="outline">
            <Link href="/pricing">Compare Every Detail <ArrowRight /></Link>
          </Button>
        </Reveal>

        <div className="mt-10"><PackageCards /></div>
        <p className="mt-6 text-sm leading-6 text-base-mute">Build prices are starting points. We confirm your scope and care needs before work begins. Domain registration is separate.</p>
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
            <SectionTitle kicker="About" title="You work directly with me, Matthew." align="left" />
            <div className="mt-6 space-y-5 leading-7 text-base-text/70">
              <p>You know your business. I help turn that knowledge into a website your customers can understand and use. We agree on the priorities, scope, and cost before I start building.</p>
              <p>You review a working preview before launch, and you have a direct contact for the support included in your care plan afterward. New needs can be discussed and quoted as your business changes.</p>
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
