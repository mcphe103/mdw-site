import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { NumberBadge } from "@/components/ui/NumberBadge";
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

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2">
          {portfolioProjects.map((project, index) => (
            <article
              key={project.slug}
              className="project-feature overflow-hidden border border-white/10 bg-base-surface/72"
            >
              <Link
                href={`/work/${project.slug}`}
                aria-label={`View ${project.client} case study`}
                className="group relative block aspect-[16/10] overflow-hidden bg-base-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-base-cyan/70"
              >
                <Image
                  src={project.media.src}
                  alt={project.media.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base-bg/55 via-transparent to-transparent" />
              </Link>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <NumberBadge value={String(index + 1).padStart(2, "0")} size="compact" />
                  <p className="operational-label">{project.category}</p>
                </div>
                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-base-heading">
                  {project.client}
                </h2>
                <p className="mt-4 leading-7 text-base-text/68">{project.summary}</p>
                <Link
                  href={`/work/${project.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-base-heading transition-colors hover:text-base-cyan"
                >
                  View case study <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
