import Link from "next/link";
import { ArrowRight, Check, ExternalLink } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { ProjectReveal, Reveal } from "@/components/motion/MotionSystem";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Button } from "@/components/ui/button";
import { NumberBadge } from "@/components/ui/NumberBadge";
import { ProjectMedia } from "@/components/work/ProjectMedia";
import { portfolioProjects } from "@/lib/projects/data";

export function WorkOverviewIntegrated() {
  const featuredProjects = portfolioProjects.filter((project) => project.featured);
  const additionalProjects = portfolioProjects.filter((project) => !project.featured);

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
          {featuredProjects.map((project, index) => (
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

        {additionalProjects.length > 0 && (
          <div className="mt-8 border border-base-cyan/20 bg-base-cyan/[0.04]">
            {additionalProjects.map((project) => (
              <article key={project.slug} className="grid lg:grid-cols-2">
                <Link
                  href={`/work/${project.slug}`}
                  aria-label={`View the ${project.client} case study`}
                  className="group/media block self-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-base-cyan"
                >
                  <ProjectMedia
                    project={project}
                    className="border-0 border-b border-white/10 shadow-none transition-colors group-hover/media:border-base-cyan/30 lg:border-b-0 lg:border-r"
                  />
                </Link>
                <div className="p-6 sm:p-8">
                  <p className="operational-label">Also built by MDW / {project.client}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-base-heading">
                    {project.summary}
                  </h3>
                  <p className="mt-4 max-w-3xl leading-7 text-base-text/70">{project.details[0]}</p>
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-2 font-semibold text-base-cyan"
                    >
                      Read the case study <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-base-mute transition-colors hover:text-base-heading"
                    >
                      Visit live website <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
