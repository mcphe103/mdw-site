import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { ProjectIntakeTrigger } from "@/components/project-intake/ProjectIntake";
import { ProjectMedia } from "@/components/work/ProjectMedia";
import { portfolioProjects, getPortfolioProject } from "@/lib/projects/data";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) return {};

  return {
    title: `${project.client} Website Project`,
    description: project.summary,
    alternates: {
      canonical: `${siteConfig.url}/work/${project.slug}`,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) notFound();

  const projectIndex = portfolioProjects.findIndex((item) => item.slug === project.slug);
  const nextProject =
    portfolioProjects.length > 1
      ? portfolioProjects[(projectIndex + 1) % portfolioProjects.length]
      : undefined;

  return (
    <div className="section-space">
      <Container>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-semibold text-base-mute transition-colors hover:text-base-cyan"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to work
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-14">
          <div>
            <p className="operational-label">{project.category}</p>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.03] tracking-[-0.05em] text-base-heading sm:text-5xl lg:text-6xl">
              {project.client}
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-base-text/72">
              {project.summary}
            </p>
          </div>

          <div className="border-l border-base-cyan/30 pl-5 sm:pl-6">
            {project.region && <p className="operational-label">{project.region}</p>}
            <ul className="mt-4 space-y-3 text-sm leading-6 text-base-text/70">
              {project.contributions.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-base-cyan" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ProjectMedia project={project} priority className="project-feature mt-12 lg:mt-16" />

        <div className="mt-12 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:pt-14">
          <div>
            <p className="operational-label">Project context</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-base-heading">
              Built around the customer path.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-base-text/70">
            {project.details.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </div>
        </div>

        {project.quote && (
          <figure className="relative mt-12 overflow-hidden border border-base-cyan/20 bg-base-cyan/[0.035] p-7 sm:p-9 lg:mt-16 lg:p-11">
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 h-px w-36 bg-gradient-to-r from-base-cyan via-base-cyan/40 to-transparent shadow-[0_0_18px_hsl(var(--signal-cyan)/0.45)]"
            />
            <p className="operational-label">Client feedback / verified</p>
            <blockquote className="mt-6 max-w-4xl text-balance text-2xl font-medium leading-[1.35] tracking-[-0.025em] text-base-heading sm:text-3xl">
              “{project.quote.body}”
            </blockquote>
            <figcaption className="mt-6 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-base-mute">
              {project.quote.attribution}
            </figcaption>
          </figure>
        )}

        <div className="mt-12 border border-base-cyan/20 bg-base-cyan/[0.04] p-6 sm:p-8 lg:mt-16 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <p className="operational-label">See it in use</p>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-base-text/72">
              Visit the live website to experience the current project directly.
            </p>
          </div>
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-base-cyan px-5 py-3 text-sm font-semibold text-base-bg transition-opacity hover:opacity-90 lg:mt-0"
          >
            Visit live website <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-14 grid gap-5 border-t border-white/10 pt-10 lg:grid-cols-2 lg:gap-8 lg:pt-14">
          {nextProject && (
            <Link
              href={`/work/${nextProject.slug}`}
              className="group border border-white/10 bg-base-surface/55 p-6 transition-colors hover:border-base-cyan/30 hover:bg-base-cyan/[0.025] sm:p-8"
            >
              <p className="operational-label">Next case study</p>
              <div className="mt-4 flex items-end justify-between gap-6">
                <div>
                  <p className="text-2xl font-semibold tracking-[-0.035em] text-base-heading sm:text-3xl">
                    {nextProject.client}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-base-mute">{nextProject.category}</p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-base-cyan transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </div>
            </Link>
          )}

          <div className="border border-base-cyan/20 bg-base-cyan/[0.035] p-6 sm:p-8">
            <p className="operational-label">Your project / next step</p>
            <p className="mt-4 max-w-xl text-lg leading-7 text-base-text/72">
              If something on this project feels relevant to your business, tell me what needs to work better. We can start there.
            </p>
            <ProjectIntakeTrigger size="lg" className="mt-6">
              Start a conversation
              <ArrowRight aria-hidden="true" />
            </ProjectIntakeTrigger>
          </div>
        </div>
      </Container>
    </div>
  );
}
