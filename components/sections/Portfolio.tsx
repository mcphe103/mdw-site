// components/sections/Portfolio.tsx
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

import { SectionTitle } from "@/components/sections/SectionTitle";
import { Button } from "@/components/ui/button";

const projects = [
  {
    client: "Chairez Fencing",
    industry: "Fencing Contractor",
    url: "https://www.chairezfencing.com/",
    image: "/portfolio/chairez-fencing.png",
    imageAlt: "Chairez Fencing website preview",
    description:
      "A modern website for a local fencing company built to create a stronger first impression, organize services clearly, and give customers an easy way to request an estimate.",
    highlights: [
      "Custom Next.js website",
      "Mobile-friendly layout",
      "Service-focused content structure",
      "Managed hosting and launch support",
    ],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="container-xl max-w-5xl mx-auto px-4">
        <SectionTitle kicker="Recent Work" title="Featured Projects" />

        <p className="mt-4 text-sm md:text-base text-base-text/80 text-center max-w-2xl mx-auto">
          A growing collection of real websites built for small businesses that
          need a professional online presence, clear messaging, and dependable
          long-term support.
        </p>

        <div className="mt-10 grid gap-6">
          {projects.map((project) => (
            <article
              key={project.client}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="relative min-h-[260px] border-b border-white/10 bg-base-bg/70 lg:border-b-0 lg:border-r">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 54vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-6 md:p-8 flex flex-col">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-base-accent">
                    {project.industry}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold text-base-heading">
                    {project.client}
                  </h3>

                  <p className="mt-4 text-sm text-base-text/80 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="mt-5 space-y-2 text-sm text-base-text/75">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-base-accent/80" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7">
                    <Button
                      asChild
                      className="bg-base-accent text-black hover:bg-base-accent/90"
                    >
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Live Site
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
