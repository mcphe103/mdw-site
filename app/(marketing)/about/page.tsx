import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { ProjectIntakeTrigger } from "@/components/project-intake/ProjectIntake";
import { NumberBadge } from "@/components/ui/NumberBadge";

export const metadata: Metadata = {
  title: "About Matthew McPherson | McPherson Digital Works",
  description:
    "Meet Matthew McPherson, founder of McPherson Digital Works, a veteran-owned web design studio serving Central Valley small businesses.",
  alternates: { canonical: "/about" },
};

const principles = [
  ["Clear direction", "Translate business needs into an understandable plan before design and development begin."],
  ["Direct responsibility", "Work with the person planning, designing, building, and supporting the website."],
  ["Dependable execution", "Build carefully, communicate clearly, and verify the complete system before launch."],
] as const;

export default function AboutPage() {
  return (
    <main>
      <section className="section-space overflow-hidden pt-16 sm:pt-24 lg:pt-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <p className="operational-label">About Matthew / MDW</p>
              <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.055em] text-base-heading sm:text-5xl lg:text-6xl">
                A dependable digital partner, personally accountable for the work.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-base-text/70">
                I&apos;m Matthew McPherson, founder of McPherson Digital Works. I help small-business owners turn unclear website needs into a professional, reliable online presence they can feel confident sharing.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm font-medium text-base-text/72">
                <span>Founder-led</span>
                <span>Veteran-owned</span>
                <span>Central Valley focused</span>
              </div>
            </div>

            <div className="signal-panel relative mx-auto w-full max-w-[34rem] overflow-hidden border border-base-cyan/20 bg-base-bg/60">
              <div className="relative aspect-square">
                <Image
                  src="/images/matthew-mcpherson-founder.png"
                  alt="Matthew McPherson, founder of McPherson Digital Works"
                  fill
                  priority
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base-bg/80 via-transparent to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 border-t border-base-cyan/15 bg-base-bg/72 p-6 backdrop-blur-md">
                <p className="text-xl font-semibold tracking-[-0.025em] text-base-heading">Matthew McPherson</p>
                <p className="mt-1 text-sm text-base-cyan">Founder, McPherson Digital Works</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space section-panel border-y border-white/[0.07]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <SectionTitle
              kicker="Why MDW exists"
              title="Small businesses deserve clarity before, during, and after launch."
              align="left"
            />
            <div className="space-y-6 text-base leading-8 text-base-text/72 sm:text-lg">
              <p>
                MDW began with a straightforward belief: a business owner should not have to become a designer, developer, hosting specialist, and project manager just to have a dependable website.
              </p>
              <p>
                My job is to bring those responsibilities into one organized process. That means understanding the business first, making the decisions understandable, building the approved direction carefully, and remaining available after the website goes live.
              </p>
              <p>
                The result is more than a polished launch. It is a website with a clear purpose, a responsible owner, and a foundation that can support the business as it grows.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <SectionTitle
            kicker="How I work"
            title="Professional work should feel organized from the first conversation."
            description="My Marine Corps background continues to influence the standard behind MDW: prepare carefully, communicate clearly, take responsibility, and leave the system stronger than I found it."
            align="left"
            className="max-w-4xl"
          />

          <div className="mt-12 border-y border-base-cyan/15 bg-base-bg/25">
            {principles.map(([title, description], index) => (
              <article key={title} className="grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-4 border-b border-white/10 px-6 py-8 last:border-b-0 sm:grid-cols-[3rem_0.55fr_1fr] sm:items-start sm:gap-8 sm:px-9 sm:py-10">
                <NumberBadge value={`0${index + 1}`} />
                <h2 className="text-xl font-semibold tracking-[-0.025em] text-base-heading">{title}</h2>
                <p className="col-start-2 flex gap-3 leading-7 text-base-text/70 sm:col-start-auto">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-base-cyan" aria-hidden="true" />
                  {description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container>
          <div className="signal-panel relative overflow-hidden border border-base-cyan/20 bg-[radial-gradient(circle_at_86%_18%,hsl(var(--signal-cyan)/0.17),transparent_24rem),linear-gradient(135deg,hsl(var(--surface-raised)),hsl(var(--canvas-obsidian)))] px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
            <p className="operational-label">Start a conversation</p>
            <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-[-0.045em] text-base-heading sm:text-5xl">
              Tell me what your business needs from its website.
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-base-text/70">
              You do not need to have every page, feature, or technical detail decided before reaching out.
            </p>
            <ProjectIntakeTrigger size="lg" className="mt-8">Start a Project <ArrowRight /></ProjectIntakeTrigger>
          </div>
        </Container>
      </section>
    </main>
  );
}
