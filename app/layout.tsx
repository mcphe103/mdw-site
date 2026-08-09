import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectIntakeProvider } from "@/components/project-intake/ProjectIntake";
import Script from "next/script";

const siteUrl = "https://www.mcphersondigitalworks.com";
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
    default: "McPherson Digital Works",
    template: "%s | McPherson Digital Works",
  },
  description:
  "Clean, reliable websites for small businesses — built with care, clarity, and long-term stability.",
  openGraph: {
    type: "website",
    siteName: "McPherson Digital Works",
    title: "McPherson Digital Works",
    description:
      "Clean, reliable websites for small businesses — built with care, clarity, and long-term stability.",
    url: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "McPherson Digital Works",
  url: siteUrl,
  email: "contact@mcphersondigitalworks.com",
  areaServed: "United States",
  description:
  "Clean, reliable websites for small businesses — built with care, clarity, and long-term stability.",
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
