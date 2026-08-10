export const websitePackages = [
  {
    index: "01",
    name: "Quick Launch",
    price: "$599",
    description:
      "A polished one-page website for businesses ready to establish a credible online presence quickly and affordably.",
    summaryPoints: [
      "One professionally structured scrolling page",
      "Responsive, brand-aligned design",
      "One inquiry form or contact action",
      "Foundational SEO",
    ],
    included: [
      "One professionally structured scrolling page",
      "Responsive MDW-designed layout customized to the client’s brand",
      "Essential business, service, trust, and contact sections",
      "One standard inquiry form or clearly defined contact action",
      "Foundational on-page and technical SEO",
      "Responsive optimization for phones, tablets, and desktops",
      "One focused revision round",
      "Client-provided finalized text, logo, brand assets, and images",
    ],
    excluded: [
      "Additional pages",
      "Custom copywriting or brand development",
      "E-commerce, payments, booking systems, memberships, accounts, dashboards, or portals",
      "Custom integrations, advanced functionality, or large content migrations",
      "Ongoing content updates",
      "Domain registration or renewal",
    ],
    carePlan: "Launch Hosting & Care",
  },
  {
    index: "02",
    name: "Starter Website",
    price: "$999",
    description:
      "A complete professional website for small businesses ready to clearly present their services, build trust, and generate inquiries.",
    summaryPoints: [
      "Up to five core pages",
      "Customized responsive design",
      "One professional inquiry form",
      "Two focused revision rounds",
    ],
    included: [
      "Up to five core pages",
      "Customized responsive design aligned with the client’s brand",
      "One professional inquiry form or defined contact action",
      "Foundational on-page and technical SEO",
      "Responsive optimization for phones, tablets, and desktops",
      "Two focused revision rounds",
      "Client-provided finalized text, logo, brand assets, and images",
    ],
    excluded: [
      "E-commerce, online payments, or advanced booking systems",
      "Memberships, accounts, dashboards, portals, or application functionality",
      "Custom third-party integrations or advanced databases",
      "Extensive copywriting, brand development, or large content migrations",
      "Ongoing SEO campaigns or work outside the selected care plan",
    ],
    note:
      "Typical pages may include Home, About, Services, Gallery or Portfolio, and Contact. Page names may vary. Unusually complex pages may affect the final scope.",
    carePlan: "Standard Hosting & Care",
    featured: true,
  },
  {
    index: "03",
    name: "Growth Website",
    price: "$1,499",
    description:
      "An expanded website for businesses that need deeper content, stronger service presentation, and additional lead-generation capabilities.",
    summaryPoints: [
      "Up to eight core pages",
      "Expanded content architecture",
      "Up to two lead-capture forms",
      "Approved simple integrations",
    ],
    included: [
      "Up to eight core pages",
      "Expanded and customized content architecture",
      "Dedicated service pages, galleries, FAQs, testimonials, and similar trust-building content as appropriate",
      "Up to two standard inquiry or lead-capture forms",
      "Simple approved integrations or embeds",
      "Foundational on-page and technical SEO",
      "Responsive optimization for phones, tablets, and desktops",
      "Three focused revision rounds",
      "Client-provided finalized text, logo, brand assets, and images",
    ],
    excluded: [
      "E-commerce or online payments",
      "Memberships, accounts, portals, dashboards, custom applications, or databases",
      "Complex booking or scheduling workflows",
      "Custom API or third-party software development",
      "Extensive copywriting, branding, content migration, or ongoing SEO campaigns",
      "Functionality not approved during discovery",
    ],
    carePlan: "Standard Hosting & Care",
  },
] as const;

export const carePlans = [
  {
    name: "Launch Hosting & Care",
    monthlyPrice: "$39/month",
    annualPrice: "$390/year",
    intendedFor: "Quick Launch websites",
    included: [
      "Managed website hosting",
      "SSL and domain connection",
      "Uptime and inquiry-form monitoring",
      "Security and dependency maintenance",
      "Deployment recovery",
      "Technical repairs when an MDW-maintained component breaks",
      "Basic technical support",
    ],
    excluded: [
      "Routine content-update allowance",
      "Domain registration or renewal",
      "New pages, functionality, redesigns, or integrations",
    ],
    note: "Content updates are billed separately.",
  },
  {
    name: "Standard Hosting & Care",
    monthlyPrice: "$100/month",
    annualPrice: "$1,000/year",
    intendedFor: "Starter and Growth websites",
    included: [
      "Managed website hosting",
      "SSL and domain connection",
      "Uptime and inquiry-form monitoring",
      "Security and dependency maintenance",
      "Deployment recovery",
      "Technical repairs and support",
      "Up to one hour of routine content updates per month",
    ],
    excluded: [
      "New pages, major sections, redesigns, functionality, or integrations",
      "Branding, copywriting, photography, or SEO campaigns",
      "E-commerce or booking work",
    ],
    note:
      "Unused update time expires each month and does not accumulate. Routine updates include supplied text or image replacements, business-hours changes, contact or staff updates, minor service or pricing changes, announcements, and small corrections.",
    featured: true,
  },
] as const;

export const packageComparison = [
  ["Starting price", "$599", "$999", "$1,499"],
  ["Website size", "One scrolling page", "Up to 5 pages", "Up to 8 pages"],
  ["Responsive design", "Included", "Included", "Included"],
  ["Client-provided content", "Required", "Required", "Required"],
  ["Foundational SEO", "Included", "Included", "Included"],
  ["Forms", "One contact form or action", "One inquiry form", "Up to two forms"],
  ["Simple integrations", "Not included", "Quoted as needed", "Approved simple integrations"],
  ["Revision rounds", "One", "Two", "Three"],
  ["Recommended care plan", "Launch Care", "Standard Care", "Standard Care"],
  ["Best suited for", "Establishing an online presence", "Complete small-business website", "Expanded content and business needs"],
] as const;

export const inquiryInterests = [
  "Quick Launch",
  "Starter Website",
  "Growth Website",
  "Hosting & Care",
  "Existing Website Support",
  "Not Sure Yet",
] as const;
