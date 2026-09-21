import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { NumberBadge } from "@/components/ui/NumberBadge";
import { ProjectMedia } from "@/components/work/ProjectMedia";
import { portfolioProjects } from "@/lib/projects/data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Web Design Work",
  description:
    "Explore website projects by McPherson Digital Works for local small businesses in Modesto and California's Central Valley.",
  alternates: {
    canonical: `${siteConfig.url}/work`,
  },
};

export default function WorkPage() {
  return (
    <div className="section-space">
      <Container>
        <div className="max-w-3xl">
          <p className="operational-label">Selected work / real businesses</p>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-base-heading sm:text-5xl lg:text-6xl">
            Websites built around how each business actually works.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-base-text/70">
            Each project starts with the business, the customer path, and the next step the website needs to make easier.
          </p>
        </div>

        <div className="mt-12 space-y-14 lg:mt-16 lg:space-y-20">
          {portfolioProjects.map((project, index) => (
            <article
              key={project.slug}
              className="grid items-center gap-7 border-t border-white/10 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12"
            >
              <Link
                href={`/work/${project.slug}`}
                aria-label={`View ${project.client} case study`}
                className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-base-cyan/70 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              >
                <ProjectMedia project={project} priority={index === 0} className="transition-colors group-hover:border-base-cyan/28" />
              </Link>

              <div>
                <div className="flex items-center gap-3">
                  <NumberBadge value={String(index + 1).padStart(2, "0")} size="compact" />
                  <p className="operational-label">{project.category}</p>
                </div>
                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-base-heading sm:text-4xl">
                  {project.client}
                </h2>
                {project.region && <p className="mt-2 text-sm font-medium text-base-cyan/80">{project.region}</p>}
                <p className="mt-4 leading-7 text-base-text/68">{project.summary}</p>

                <ul className="mt-6 space-y-2.5 border-l border-base-cyan/25 pl-5 text-sm leading-6 text-base-text/64">
                  {project.contributions.slice(0, 4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-base-heading transition-colors hover:text-base-cyan"
                  >
                    View case study <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
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
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
