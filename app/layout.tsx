import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "sonner"; 
import Image from "next/image";
import Script from "next/script";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "McPherson Digital Works",
    template: "%s | McPherson Digital Works",
  },
  description:
  "Clean, reliable websites for small businesses — built with care, clarity, and long-term stability.",
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "McPherson Digital Works",
  url: "https://mcphersondigitalworks.com",
  email: "contact@mcphersondigitalworks.com",
  // phone: "+12094841674", // optional, add if you want
  areaServed: "United States", // or narrow to your real service area
  description:
  "Clean, reliable websites for small businesses — built with care, clarity, and long-term stability.",
};



//------------------------
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
    <body className="bg-[#05070B] text-base-text scroll-smooth">
      <Script
        id="mdw-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative min-h-screen">
          {/* GLOBAL DNA BACKGROUND */}
        <div className="pointer-events-none fixed inset-0 -z-20">
          <Image
            src="/images/dna-hero-bg.png"
            alt="Digital mesh background"
            fill
            priority
            className="object-cover object-top md:object-center opacity-20 md:opacity-[0.15]"
          />
        </div>

          {/* OPTIONAL DARK GRADIENT OVERLAY FOR READABILITY */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-black/20 via-black/10 to-black/25" />

          {/* MAIN PAGE STRUCTURE */}
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>

        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#121821",
              color: "#E9EEF5",
              border: "1px solid rgba(73, 194, 199, 0.3)",
              boxShadow: "0 0 12px rgba(73, 194, 199, 0.25)",
              transform: "translateX(20px)",
              transition: "all 0.4s ease",
            },
            className: "rounded-2xl",
          }}
        />
      </div>
    </body>
    </html>
    );
}

