import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "sonner"; 


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = { /* ...existing... */ };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
    <body>
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

    </body>
    </html>
    );
}
