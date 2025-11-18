import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "sonner"; 
import Image from "next/image";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = { /* ...existing... */ };



//------------------------
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
    <body className="bg-[#05070B] text-base-text scroll-smooth">
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

