import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Mail, MapPin, MessageSquareText, Phone } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { ProjectIntakeTrigger } from "@/components/project-intake/ProjectIntake";
import { Contact } from "@/components/sections/Contact";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Button } from "@/components/ui/button";
import { NumberBadge } from "@/components/ui/NumberBadge";
import { ProjectMedia } from "@/components/work/ProjectMedia";
import { portfolioProjects } from "@/lib/projects/data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Modesto Web Design & Website Redesign",
  description:
    "Need a website or redesign in Modesto? MDW builds mobile-friendly small-business websites, makes contacting you simple, and offers ongoing support.",
  alternates: { canonical: "/modesto-web-design" },
  openGraph: {
    title: "Modesto Web Design & Website Redesign",
    description:
      "Mobile-friendly websites, redesigns, and ongoing care for Modesto and Central Valley small businesses.",
    url: "/modesto-web-design",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "McPherson Digital Works — dependable websites for Modesto and Central Valley small businesses",
      },
    ],
  },
};

const services = [
  {
    index: "01",
    title: "New Small-Business Websites",
    description:
      "Give your business a professional online home where people can explore your services, understand what makes you different, and contact you easily.",
  },
  {
    index: "02",
    title: "Website Redesign",
    description:
      "Already have a website? We can review what is working, identify what is getting in the way, and create an updated experience that better reflects your business.",
  },
  {
    index: "03",
    title: "Hosting & Ongoing Care",
    description:
      "Your website should not become another technical responsibility on your plate. MDW offers ongoing hosting, maintenance, and support to help keep everything running after launch.",
  },
] as const;

const questions = [
  { question: "How much does a small-business website cost?", answer: "MDW website packages begin at $600. Pricing depends on the pages, features, and other requirements of your project. We'll discuss the scope before you commit." },
  { question: "Can you improve my existing website?", answer: "Yes. Depending on its condition and technology, we can discuss improvements or a full redesign." },
  { question: "Do you only serve Modesto?", answer: "No. MDW works with businesses throughout the surrounding Central Valley and considers select remote projects." },
  { question: "What happens after my website launches?", answer: "You can choose an ongoing Hosting & Care plan for maintenance, updates, and support, based on your needs." },
  { question: "How do I get started?", answer: "Tell MDW a little about your business and what you'd like your website to accomplish. We'll discuss the project and recommend an appropriate next step." },
] as const;

const localCaseStudies = portfolioProjects.filter(
  (project) => project.slug === "chairez-fencing" || project.slug === "sweet-x-indulgence",
);

export default function ModestoWebDesignPage() {
  return (
    <main>
      <section className="section-space overflow-hidden pt-16 sm:pt-24 lg:pt-28">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_28%,hsl(var(--signal-cyan)/0.13),transparent_28rem)]" />
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
            <div>
              <p className="operational-label">Modesto web design · Central Valley</p>
              <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.055em] text-base-heading sm:text-5xl lg:text-6xl">
                Modesto Web Design Built Around Your Business
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-base-text/80">
                Your website should do more than look professional. It should help customers understand what you offer, see the quality of your work, and know how to take the next step.
              </p>
              <p className="mt-4 max-w-2xl leading-7 text-base-text/68">
                McPherson Digital Works designs and builds mobile-friendly websites for small businesses in Modesto and surrounding communities. Whether you&apos;re launching a new business or improving an existing website, you&apos;ll work directly with the person planning and building your project.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ProjectIntakeTrigger size="lg">
                  Start a Project
                  <ArrowRight aria-hidden="true" />
                </ProjectIntakeTrigger>
                <Button asChild size="lg" variant="outline">
                  <a href={siteConfig.phone.href}>
                    <Phone aria-hidden="true" />
                    Call {siteConfig.phone.display}
                  </a>
                </Button>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm font-medium text-base-text/72">
                <span>Founder-led</span>
                <span>Veteran-owned</span>
                <span>Based in Modesto</span>
              </div>
            </div>

            <aside className="signal-panel border border-base-cyan/18 bg-base-bg/55 p-6 sm:p-8" aria-label="Contact McPherson Digital Works">
              <div className="flex items-center gap-3 border-b border-white/10 pb-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-base-cyan/30 bg-base-cyan/10 text-base-cyan">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-base-heading">Local, direct, and by appointment</p>
                  <p className="mt-1 text-sm text-base-mute">Serving Modesto and the Central Valley</p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <ContactLink href={siteConfig.phone.href} icon={Phone} label="Call" value={siteConfig.phone.display} />
                <ContactLink href={siteConfig.phone.smsHref} icon={MessageSquareText} label="Text" value={siteConfig.phone.display} />
                <ContactLink href={`mailto:${siteConfig.email}`} icon={Mail} label="Email" value={siteConfig.email} />
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="section-space section-panel border-y border-white/[0.07]">
        <Container>
          <SectionTitle
            kicker="Website services"
            title="A website that works for your business."
            description="Every business has different needs. The goal is to build something useful for your customers—not add features you don’t need."
            align="left"
            className="max-w-4xl"
          />
          <div className="mt-12 border-y border-base-cyan/15 bg-base-bg/25">
            {services.map((service) => (
              <article
                key={service.title}
                className="grid grid-cols-[2.5rem_1fr] gap-x-5 gap-y-4 border-b border-white/10 px-6 py-8 last:border-b-0 sm:grid-cols-[3rem_0.72fr_1.28fr] sm:items-start sm:gap-8 sm:px-9 sm:py-10"
              >
                <NumberBadge value={service.index} />
                <h2 className="text-xl font-semibold tracking-[-0.025em] text-base-heading sm:text-2xl">
                  {service.title}
                </h2>
                <p className="col-start-2 leading-7 text-base-text/70 sm:col-start-auto">{service.description}</p>
              </article>
            ))}
          </div>
          <Button asChild variant="outline" className="mt-8">
            <Link href="/pricing">
              Compare Website Packages
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </Container>
      </section>

      <section className="section-space border-b border-white/[0.07]">
        <Container>
          <SectionTitle
            kicker="Real work / small businesses"
            title="Real websites. Real small businesses."
            description="A website is easier to evaluate when you can see actual work. Explore a few small-business projects built by MDW."
            align="left"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {localCaseStudies.map((project) => (
              <article key={project.slug} className="flex h-full flex-col overflow-hidden border border-white/10 bg-base-surface/72">
                <Link href={`/work/${project.slug}`} aria-label={`View the ${project.client} case study`} className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-base-cyan/70">
                  <ProjectMedia project={project} className="border-0 border-b border-white/10 shadow-none transition-colors group-hover:border-base-cyan/30" />
                </Link>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <p className="operational-label">{project.region ?? project.category}</p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.035em] text-base-heading">{project.client}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-base-text/70 sm:text-base">{project.summary}</p>
                  <Link href={`/work/${project.slug}`} className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-base-heading transition-colors hover:text-base-cyan">
                    View case study <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <Button asChild variant="outline" className="mt-8">
            <Link href="/work">Explore All Projects <ArrowRight aria-hidden="true" /></Link>
          </Button>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <SectionTitle
              kicker="Service area"
              title="Based in Modesto and built to serve the region."
              description="MDW works with businesses throughout the Central Valley and remains available for select remote projects."
              align="left"
            />
            <div>
              <div className="grid gap-3 sm:grid-cols-2">
                {siteConfig.serviceAreas.map((city) => (
                  <div key={city} className="flex items-center gap-3 border border-white/10 bg-white/[0.018] px-5 py-4 text-base-text/78">
                    <Check className="h-4 w-4 shrink-0 text-base-cyan" aria-hidden="true" />
                    {city}, California
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-6 text-base-mute">
                Don&apos;t see your community listed? Reach out—nearby Central Valley locations and select remote projects can still be considered.
              </p>
              <div className="mt-8 border-l border-base-cyan/30 pl-5">
                <h3 className="text-lg font-semibold text-base-heading">Local web design with a direct point of contact.</h3>
                <p className="mt-3 leading-7 text-base-text/70">
                  When you reach out, we&apos;ll discuss your business, what your customers need, and what your website should accomplish. You&apos;ll receive a defined project scope before work begins.
                </p>
                <p className="mt-3 text-sm leading-6 text-base-mute">
                  No unnecessary complexity. Just a website planned around your needs, with ongoing support available after launch.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space section-panel border-y border-white/[0.07]">
        <Container>
          <SectionTitle
            kicker="Common questions"
            title="Common questions about web design in Modesto."
            align="left"
          />
          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
            {questions.map((item) => (
              <article key={item.question} className="bg-base-bg p-6 sm:p-8">
                <h2 className="text-lg font-semibold tracking-[-0.02em] text-base-heading">{item.question}</h2>
                <p className="mt-4 text-sm leading-7 text-base-text/70 sm:text-base">{item.answer}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <Contact />
    </main>
  );
}

function ContactLink({
  href,
  icon: Icon,
  label,
  value,
}: {
  href: string;
  icon: typeof Phone;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      className="flex min-w-0 items-center gap-4 border border-white/10 bg-white/[0.018] px-4 py-3 transition-colors hover:border-base-cyan/30 hover:bg-base-cyan/[0.04]"
    >
      <Icon className="h-4 w-4 shrink-0 text-base-cyan" aria-hidden="true" />
      <span className="min-w-0">
        <span className="block font-mono text-[0.625rem] uppercase tracking-[0.14em] text-base-mute">{label}</span>
        <span className="mt-1 block truncate text-sm font-medium text-base-heading">{value}</span>
      </span>
    </a>
  );
}
