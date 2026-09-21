export type ProjectQuote = {
  body: string;
  attribution: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProjectMedia = {
  /** Optional single-image fallback for projects without paired captures yet. */
  cover?: ProjectImage;
  /** Real desktop screenshot, rendered at its intrinsic aspect ratio. */
  desktop?: ProjectImage;
  /** Real mobile screenshot, paired with the desktop capture when available. */
  mobile?: ProjectImage;
};

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
  featured: boolean;
  quote?: ProjectQuote;
};
