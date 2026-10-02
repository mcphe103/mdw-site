export type ProjectQuote = {
  body: string;
  attribution: string;
};

export type MediaImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProjectMedia = {
  /** Optional single-image fallback for projects without paired captures yet. */
  cover?: MediaImage;
  /** Real desktop screenshot, rendered at its intrinsic aspect ratio. */
  desktopHome?: MediaImage;
  /** Real mobile screenshot, paired with the desktop capture when available. */
  mobileHome?: MediaImage;
  /** Optional real detail captures for future case-study galleries. */
  details?: MediaImage[];
};

export type HomepageProjectRole = "featured" | "latest" | "archive";

export type PortfolioProject = {
  slug: string;
  client: string;
  category: string;
  region?: string;
  summary: string;
  details: string[];
  contributions: string[];
  media: ProjectMedia;
  liveUrl: string;
  /** Controls homepage prominence without affecting the /work archive or case-study route. */
  homepageRole: HomepageProjectRole;
  quote?: ProjectQuote;
};
