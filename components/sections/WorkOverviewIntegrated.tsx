import Link from "next/link";
import { ArrowRight, Check, ExternalLink } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { ProjectReveal, Reveal } from "@/components/motion/MotionSystem";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Button } from "@/components/ui/button";
import { NumberBadge } from "@/components/ui/NumberBadge";
import { ProjectMedia } from "@/components/work/ProjectMedia";
import { featuredPortfolioProjects, latestPortfolioProject } from "@/lib/projects/data";

export function WorkOverviewIntegrated() {
  return (
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
          <div className="max-w-sm lg:text-right">
            <p className="border-l border-base-cyan/35 pl-5 text-sm leading-6 text-base-text/62 lg:border-l-0 lg:border-r lg:pl-0 lg:pr-5">
              Explore the thinking behind each project, then visit the live site when you want to see it in use.
            </p>
            <Button asChild variant="outline" className="mt-5">
              <Link href="/work">
                View all work <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:mt-14 lg:grid-cols-2">
          {featuredPortfolioProjects.map((project, index) => (
            <ProjectReveal
              key={project.slug}
              className="project-feature flex h-full flex-col overflow-hidden border border-white/10 bg-base-surface/72"
            >
              <Link
                href={`/work/${project.slug}`}
                aria-label={`View the ${project.client} case study`}
                className="group/media block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-base-cyan/70"
              >
                <ProjectMedia
                  project={project}
                  className="border-0 border-b border-white/10 shadow-none transition-colors group-hover/media:border-base-cyan/30"
                />
              </Link>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <NumberBadge value={String(index + 1).padStart(2, "0")} size="compact" />
                  <p className="operational-label">{project.region ?? project.category}</p>
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-base-heading sm:text-3xl">
                  {project.client}
                </h3>
                <p className="mt-3 leading-7 text-base-text/68">{project.summary}</p>

                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-xs font-medium text-base-text/64">
                  {project.contributions.slice(0, 3).map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 shrink-0 text-base-cyan" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-base-heading transition-colors hover:text-base-cyan"
                  >
                    View case study <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-base-mute transition-colors hover:text-base-heading"
                  >
                    Live website <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </ProjectReveal>
          ))}
        </div>

        {latestPortfolioProject && (
          <ProjectReveal className="relative mt-8 overflow-hidden border border-base-cyan/20 bg-base-cyan/[0.035]">
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 h-px w-52 bg-gradient-to-r from-base-cyan via-base-cyan/45 to-transparent shadow-[0_0_20px_hsl(var(--signal-cyan)/0.42)]"
            />

            <article className="grid lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
              <div className="p-6 sm:p-8 lg:order-2 lg:p-10">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-base-cyan/25 bg-base-cyan/[0.07] px-3 py-1.5 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-base-cyan">
                    <span className="h-1.5 w-1.5 rounded-full bg-base-cyan shadow-[0_0_10px_hsl(var(--signal-cyan)/0.75)]" aria-hidden="true" />
                    Latest project
                  </span>
                  <p className="operational-label">{latestPortfolioProject.category}</p>
                </div>

                <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-base-heading sm:text-4xl">
                  {latestPortfolioProject.client}
                </h3>
                <p className="mt-4 max-w-xl text-lg leading-8 text-base-text/72">
                  {latestPortfolioProject.summary}
                </p>

                <ul className="mt-6 grid gap-2.5 border-l border-base-cyan/25 pl-5 text-sm leading-6 text-base-text/68 sm:grid-cols-2">
                  {latestPortfolioProject.contributions.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <Link
                    href={`/work/${latestPortfolioProject.slug}`}
                    className="inline-flex items-center gap-2 font-semibold text-base-cyan transition-colors hover:text-base-heading"
                  >
                    Explore the latest project <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href={latestPortfolioProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-base-mute transition-colors hover:text-base-heading"
                  >
                    Visit live website <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="lg:order-1 lg:p-6 lg:pr-0">
                <Link
                  href={`/work/${latestPortfolioProject.slug}`}
                  aria-label={`View the ${latestPortfolioProject.client} case study`}
                  className="group/media block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-base-cyan"
                >
                  <ProjectMedia
                    project={latestPortfolioProject}
                    variant="feature"
                    className="border-0 border-b border-white/10 shadow-none transition-colors group-hover/media:border-base-cyan/30 lg:border-b-0"
                  />
                </Link>
              </div>
            </article>
          </ProjectReveal>
        )}
      </Container>
    </section>
  );
}
