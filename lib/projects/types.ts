export type ProjectMedia = {
  src: string;
  alt: string;
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
};
