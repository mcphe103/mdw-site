import Image from "next/image";

import type { MediaImage, PortfolioProject } from "@/lib/projects/types";

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
  const { desktopHome, mobileHome, cover } = project.media;
  const sizes =
    variant === "feature"
      ? "(min-width: 1280px) 1150px, (min-width: 1024px) 85vw, 100vw"
      : "(min-width: 1024px) 52vw, 100vw";

  if (desktopHome) {
    const phoneWidth = variant === "feature" ? "w-[24%] min-w-24" : "w-[22%] min-w-20";

    return (
      <div className={`relative ${mobileHome ? "pb-7 pr-4 sm:pb-9 sm:pr-7" : ""} ${className}`}>
        <BrowserFrame image={desktopHome} host={host} sizes={sizes} priority={priority} />

        {mobileHome ? (
          <PhoneFrame
            image={mobileHome}
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
  image: MediaImage;
  host: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div className="isolate overflow-hidden rounded-md border border-white/[0.18] bg-base-raised shadow-[0_30px_80px_-34px_rgba(0,0,0,0.95),0_0_0_1px_rgba(0,0,0,0.72),0_0_48px_hsl(var(--signal-cyan)/0.035)] transition-colors hover:border-white/25">
      <div className="flex items-center gap-2 border-b border-white/[0.14] bg-base-raised px-3 py-2.5 sm:px-4">
        <span className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
        </span>
        <span className="ml-1 min-w-0 flex-1 truncate rounded-sm border border-white/[0.11] bg-base-bg px-3 py-1.5 text-center font-mono text-[0.625rem] tracking-[0.08em] text-base-mute shadow-inner">
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
        className="block h-auto w-full bg-white"
      />

      <div aria-hidden="true" className="h-1 border-t border-white/[0.12] bg-base-raised" />
    </div>
  );
}

function PhoneFrame({
  image,
  sizes,
  className = "",
}: {
  image: MediaImage;
  sizes: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[1.35rem] border-2 border-white/[0.18] bg-base-raised p-1.5 shadow-[0_22px_48px_-18px_rgba(0,0,0,0.98),0_0_0_1px_rgba(0,0,0,0.8),0_0_28px_hsl(var(--signal-cyan)/0.07)] ${className}`}
    >
      <div className="relative overflow-hidden rounded-[1rem] bg-base-bg ring-1 ring-black/80">
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
