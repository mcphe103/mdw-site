import Image from "next/image";

import type { PortfolioProject } from "@/lib/projects/types";

function getHost(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

export function ProjectMedia({
  project,
  priority = false,
  className = "",
}: {
  project: PortfolioProject;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden border border-white/10 bg-base-surface/72 shadow-elevation ${className}`}>
      <div className="flex items-center gap-2 border-b border-white/10 bg-base-bg/82 px-3 py-2.5 sm:px-4">
        <span className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
        </span>
        <span className="ml-1 min-w-0 flex-1 truncate border border-white/[0.06] bg-base-bg/65 px-3 py-1.5 text-center font-mono text-[0.625rem] uppercase tracking-[0.12em] text-base-mute">
          {getHost(project.liveUrl)}
        </span>
      </div>

      <div className="relative aspect-[16/10] overflow-hidden bg-base-bg">
        <Image
          src={project.media.src}
          alt={project.media.alt}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 1100px, 100vw"
          className="object-contain object-top"
        />
      </div>
    </div>
  );
}
