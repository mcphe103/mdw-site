import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { Container } from "@/components/layout/Container";
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

        <div className="project-feature mt-12 overflow-hidden border border-white/10 bg-base-surface/72 lg:mt-16">
          <div className="flex items-center gap-2 border-b border-white/10 bg-base-bg/70 px-4 py-3">
            <span className="h-2 w-2 rounded-full bg-white/15" aria-hidden="true" />
            <span className="h-2 w-2 rounded-full bg-white/15" aria-hidden="true" />
            <span className="h-2 w-2 rounded-full bg-white/15" aria-hidden="true" />
            <span className="ml-2 truncate font-mono text-[0.625rem] uppercase tracking-[0.14em] text-base-mute">
              {project.client}
            </span>
          </div>
          <div className="relative aspect-[16/10] bg-base-bg">
            <Image
              src={project.media.src}
              alt={project.media.alt}
              fill
              priority
              sizes="(min-width: 1280px) 1150px, 100vw"
              className="object-cover object-top"
            />
          </div>
        </div>

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
      </Container>
    </div>
  );
}
