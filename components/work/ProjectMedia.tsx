import Image from "next/image";

import type { PortfolioProject, ProjectImage } from "@/lib/projects/types";

function getHost(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

type ProjectMediaVariant = "card" | "feature";

export function ProjectMedia({
  project,
  priority = false,
  variant = "card",
  className = "",
}: {
  project: PortfolioProject;
  priority?: boolean;
  variant?: ProjectMediaVariant;
  className?: string;
}) {
  const host = getHost(project.liveUrl);
  const { desktop, mobile, cover } = project.media;
  const sizes =
    variant === "feature"
      ? "(min-width: 1280px) 1150px, (min-width: 1024px) 85vw, 100vw"
      : "(min-width: 1024px) 52vw, 100vw";

  if (desktop) {
    const phoneWidth = variant === "feature" ? "w-[24%] min-w-24" : "w-[22%] min-w-20";

    return (
      <div className={`relative ${mobile ? "pb-7 pr-4 sm:pb-9 sm:pr-7" : ""} ${className}`}>
        <BrowserFrame image={desktop} host={host} sizes={sizes} priority={priority} />

        {mobile ? (
          <PhoneFrame
            image={mobile}
            sizes="(min-width: 1024px) 220px, 28vw"
            className={`absolute bottom-0 right-0 ${phoneWidth}`}
          />
        ) : null}
      </div>
    );
  }

  if (cover) {
    return (
      <div className={className}>
        <BrowserFrame image={cover} host={host} sizes={sizes} priority={priority} />
      </div>
    );
  }

  return (
    <div className={`grid min-h-64 place-items-center border border-white/10 bg-base-surface/72 p-8 ${className}`}>
      <p className="max-w-sm text-center text-sm leading-6 text-base-mute">
        Project imagery is being prepared. The case study details remain available below.
      </p>
    </div>
  );
}

function BrowserFrame({
  image,
  host,
  sizes,
  priority = false,
}: {
  image: ProjectImage;
  host: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-md border border-white/10 bg-base-surface/72 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9),0_0_48px_hsl(var(--signal-cyan)/0.035)] transition-colors hover:border-base-cyan/25">
      <div className="flex items-center gap-2 border-b border-white/10 bg-base-bg/88 px-3 py-2.5 sm:px-4">
        <span className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
        </span>
        <span className="ml-1 min-w-0 flex-1 truncate rounded-sm border border-white/[0.06] bg-base-bg/65 px-3 py-1.5 text-center font-mono text-[0.625rem] tracking-[0.08em] text-base-mute">
          {host}
        </span>
      </div>

      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority={priority}
        sizes={sizes}
        className="block h-auto w-full bg-base-bg"
      />
    </div>
  );
}

function PhoneFrame({
  image,
  sizes,
  className = "",
}: {
  image: ProjectImage;
  sizes: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[1.35rem] border border-base-cyan/22 bg-base-bg p-1.5 shadow-[0_22px_48px_-22px_rgba(0,0,0,0.95),0_0_28px_hsl(var(--signal-cyan)/0.09)] ${className}`}
    >
      <div className="relative overflow-hidden rounded-[1rem] bg-base-surface">
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-1.5 z-10 h-1.5 w-8 -translate-x-1/2 rounded-full bg-base-bg/90 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
        />
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}
