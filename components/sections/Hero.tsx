import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="pt-16 md:pt-24 pb-16 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(73,194,199,0.08),transparent_60%)]" />
      <div className="container-xl text-center">
        <h1 className="text-4xl md:text-6xl font-semibold text-base-heading tracking-tight">
          Build once. Stay fast. Sleep easy.
        </h1>
        <p className="mt-5 text-base-text/80 max-w-2xl mx-auto">
          McPherson Digital Works designs, hosts, and maintains websites for small businesses — with uptime, speed, and support included.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link href="/contact"><Button className="bg-base-accent/90 text-black hover:bg-base-accent shadow-glow">
            Book a free consult
          </Button>
        </Link>
        <Link href="/pricing">
        <button className="px-4 py-2 rounded-2xl border border-white/10 hover:border-white/20 text-base-heading">
          See pricing
        </button>
      </Link>
    </div>
    <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-base-text/70">
      <Pill>Managed Hosting</Pill>
      <Pill>SSL</Pill>
      <Pill>Backups</Pill>
      <Pill>Performance</Pill>
      <Pill>Support</Pill>
    </div>
  </div>
</section>
);
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">{children}</span>
    );
}


