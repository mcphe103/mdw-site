import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectIntakeProvider } from "@/components/project-intake/ProjectIntake";
import { siteConfig } from "@/lib/site";
import Script from "next/script";

const siteUrl = siteConfig.url;
const analyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Modesto Web Design for Small Businesses | McPherson Digital Works",
    template: "%s | McPherson Digital Works",
  },
  description:
    "Professional web design, website redesign, and ongoing care for small businesses in Modesto and across California's Central Valley.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "McPherson Digital Works",
    title: "Modesto Web Design for Small Businesses | McPherson Digital Works",
    description:
      "Professional web design, website redesign, and ongoing care for small businesses in Modesto and across California's Central Valley.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Modesto Web Design for Small Businesses | McPherson Digital Works",
    description:
      "Professional web design, website redesign, and ongoing care for small businesses in Modesto and across California's Central Valley.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#business`,
  name: siteConfig.name,
  url: siteUrl,
  logo: `${siteUrl}/brand/mdw-lockup.png`,
  image: `${siteUrl}/brand/mdw-lockup.png`,
  email: siteConfig.email,
  telephone: siteConfig.phone.e164,
  areaServed: siteConfig.serviceAreas.map((name) => ({
    "@type": "City",
    name: `${name}, California`,
  })),
  founder: {
    "@type": "Person",
    name: "Matthew McPherson",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phone.e164,
    email: siteConfig.email,
    contactType: "sales and customer support",
    availableLanguage: "English",
  },
  description:
    "Founder-led, veteran-owned web design studio serving small businesses in Modesto and across California's Central Valley.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <ProjectIntakeProvider>
          <div className="site-frame relative min-h-screen overflow-clip">
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-base-cyan/50 to-transparent" />

            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>

            {analyticsId && (
              <>
                <Script
                  src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
                  strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                  {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    window.gtag = gtag;
                    gtag('js', new Date());
                    gtag('config', '${analyticsId}', { anonymize_ip: true });
                  `}
                </Script>
              </>
            )}
          </div>
        </ProjectIntakeProvider>
      </body>
    </html>
  );
}
