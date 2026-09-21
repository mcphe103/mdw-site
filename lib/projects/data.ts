import type { PortfolioProject } from "./types";

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "chairez-fencing",
    client: "Chairez Fencing",
    category: "Fencing contractor",
    region: "East Bay / Delta",
    summary:
      "A modern website for a local fencing company, built to create a stronger first impression, organize services clearly, and give customers an easy way to request an estimate.",
    details: [
      "Choosing a fencing contractor means understanding the available services and seeing the work before reaching out.",
      "The website brings those details together with a clear route for customers to request an estimate.",
    ],
    contributions: [
      "Custom Next.js website",
      "Mobile-friendly layout",
      "Service-focused content structure",
      "Managed hosting & launch support",
    ],
    media: {
      desktopHome: {
        src: "/projects/chairez-fencing/desktop-home.png",
        alt: "Chairez Fencing website desktop homepage",
        width: 2048,
        height: 1152,
      },
      mobileHome: {
        src: "/projects/chairez-fencing/mobile-home.jpg",
        alt: "Chairez Fencing website mobile homepage",
        width: 1290,
        height: 2211,
      },
    },
    liveUrl: "https://www.chairezfencing.com/",
    featured: true,
    quote: {
      body: "Matthew delivered a fast, clean site and keeps everything running. I don’t even think about it anymore.",
      attribution: "Chairez Fencing, Small Business Owner",
    },
  },
  {
    slug: "sweet-x-indulgence",
    client: "Sweet X Indulgence",
    category: "Local food business",
    region: "Riverbank · Central Valley",
    summary:
      "A professional web presence for a local food business — presenting the brand cleanly and making it simple for customers to explore the work and get in touch.",
    details: [
      "Custom cakes start with a customer's idea, so the site gives photography enough space to build confidence before the inquiry step.",
      "The customer path pairs inspiration with a straightforward way to share a custom request and contact the business directly.",
    ],
    contributions: [
      "Small-business web design",
      "Mobile-friendly layout",
      "Inquiry-focused content structure",
      "Managed hosting & launch support",
    ],
    media: {
      desktopHome: {
        src: "/projects/sweet-x-indulgence/desktop-home.png",
        alt: "Sweet X Indulgence website desktop homepage",
        width: 2048,
        height: 1159,
      },
      mobileHome: {
        src: "/projects/sweet-x-indulgence/mobile-home.jpg",
        alt: "Sweet X Indulgence website mobile homepage",
        width: 1290,
        height: 2235,
      },
    },
    liveUrl: "https://www.sweetxindulgence.com/",
    featured: true,
  },
  {
    slug: "savory-sakura",
    client: "Savory Sakura",
    category: "Catering & food business",
    summary:
      "A focused website that lets customers explore the menu and request weekend catering while keeping availability and confirmation in the owner's control.",
    details: [
      "The site accepts preferred dates with a week's notice and gathers useful order details before the owner confirms availability.",
      "It also explains that approval and a deposit are needed before an order is confirmed, giving customers a clear next step without promising availability automatically.",
    ],
    contributions: [
      "Small-business web design",
      "Menu presentation",
      "Catering request flow",
      "Mobile-friendly layout",
    ],
    media: {
      cover: {
        src: "/portfolio/savory-sakura.webp",
        alt: "Savory Sakura website with cherry blossom branding and weekend catering request messaging",
        width: 2048,
        height: 1157,
      },
    },
    liveUrl: "https://www.savorysakura.com/",
    featured: false,
  },
];

export function getPortfolioProject(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}
