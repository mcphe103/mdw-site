import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { HeroReveal } from "@/components/motion/MotionSystem";
import { ProjectIntakeTrigger } from "@/components/project-intake/ProjectIntake";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="relative isolate min-h-[calc(100svh-4.5rem)] overflow-hidden border-b border-white/[0.08]">
      <div className="hero-art absolute inset-0 -z-20">
        <Image
          src="/images/structured-signal-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[69%_center] opacity-90 sm:object-[63%_center] lg:object-center"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,hsl(var(--canvas-obsidian))_0%,hsl(var(--canvas-obsidian)/0.97)_35%,hsl(var(--canvas-obsidian)/0.58)_64%,hsl(var(--canvas-obsidian)/0.18)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,hsl(var(--canvas-obsidian)/0.12)_0%,hsl(var(--canvas-obsidian)/0.05)_55%,hsl(var(--canvas-obsidian))_100%)]" />
      <div className="signal-mist signal-mist-hero" aria-hidden="true" />
      <div className="hero-signal-pulse absolute inset-0 -z-[7]" aria-hidden="true" />

      <Container className="flex min-h-[calc(100svh-4.5rem)] items-end pb-16 pt-24 sm:pb-20 lg:items-center lg:py-24">
        <div className="max-w-[42rem]">
          <HeroReveal delay={0.12}>
            <p className="operational-label flex items-center gap-3">
              <span className="hero-signal-line h-px w-8 origin-left bg-base-cyan/60" />
              Web design · Central Valley
            </p>
          </HeroReveal>

          <HeroReveal delay={0.24}>
            <h1 className="mt-6 text-balance text-[clamp(2.45rem,5.8vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-[hsl(var(--text-hero))]">
              A dependable website partner for the business you&apos;re building.
            </h1>
          </HeroReveal>

          <HeroReveal delay={0.38}>
            <p className="mt-7 max-w-2xl text-pretty text-base leading-7 text-base-text/76 sm:text-lg sm:leading-8">
              McPherson Digital Works plans, designs, builds, and supports professional websites for small businesses that need clarity now and dependable care after launch.
            </p>
          </HeroReveal>

          <HeroReveal delay={0.5}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ProjectIntakeTrigger size="lg">
                Start a Project
                <ArrowRight aria-hidden="true" />
              </ProjectIntakeTrigger>
              <Button asChild size="lg" variant="outline">
                <Link href="#portfolio">Explore the Work</Link>
              </Button>
            </div>
          </HeroReveal>

          <HeroReveal delay={0.62}>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-5 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-base-mute">
              <span>Founder-led</span>
              <span>Veteran-owned</span>
              <span>Projects from $999</span>
            </div>
          </HeroReveal>
        </div>
      </Container>

    </section>
  );
}
