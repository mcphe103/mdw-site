import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Mail, MapPin, MessageSquareText, Phone } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { ProjectIntakeTrigger } from "@/components/project-intake/ProjectIntake";
import { Contact } from "@/components/sections/Contact";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Button } from "@/components/ui/button";
import { NumberBadge } from "@/components/ui/NumberBadge";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Modesto Web Design for Small Businesses",
  description:
    "Professional web design, website redesign, managed hosting, and ongoing website care for small businesses in Modesto and California's Central Valley.",
  alternates: { canonical: "/modesto-web-design" },
  openGraph: {
    title: "Modesto Web Design for Small Businesses",
    description:
      "Professional websites and dependable ongoing care for businesses in Modesto and across California's Central Valley.",
    url: "/modesto-web-design",
  },
};

const services = [
  {
    index: "01",
    title: "New Small-Business Websites",
    description:
      "A clear, professional website built around your services, customers, and the action you want visitors to take.",
  },
  {
    index: "02",
    title: "Website Redesign",
    description:
      "A structured rebuild for a site that feels outdated, is difficult to use, or no longer represents the quality of your business.",
  },
  {
    index: "03",
    title: "Hosting & Ongoing Care",
    description:
      "Managed hosting, monitoring, maintenance, and direct support from the person responsible for your website.",
  },
] as const;

const questions = [
  {
    question: "Do you only work with businesses in Modesto?",
    answer:
      "No. MDW serves Modesto, Riverbank, Ceres, Oakdale, Turlock, Manteca, surrounding Central Valley communities, and select remote clients.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. A redesign can improve the structure, messaging, mobile experience, visual direction, performance, and path to contact while preserving what still works.",
  },
  {
    question: "How much does a small-business website cost?",
    answer:
      "MDW website packages begin at $599. Final scope and investment are confirmed after a focused discovery conversation.",
  },
  {
    question: "What happens after the website launches?",
    answer:
      "Hosting & Care plans are available for monitoring, maintenance, updates, and dependable support after launch.",
  },
] as const;

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
                Professional websites for Modesto small businesses.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-base-text/72">
                McPherson Digital Works plans, designs, builds, and supports dependable websites that help local businesses present their work clearly and make contacting them easy.
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
            title="The right website starts with what your business actually needs."
            description="Each project is planned around the business, the customer journey, and the result the website needs to support."
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
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space section-panel border-y border-white/[0.07]">
        <Container>
          <SectionTitle
            kicker="Common questions"
            title="Practical answers before you reach out."
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
