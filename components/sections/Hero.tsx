// components/sections/Hero.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";


export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden py-20 md:py-28"
    >
      
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-base-accent/20 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative container-xl max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-base-text/60 mb-3">
            McPherson Digital Works
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-base-heading leading-tight">
            Clean, modern websites
            <span className="block text-base-accent">
              engineered to stay online.
            </span>
          </h1>
          <p className="mt-4 text-sm md:text-base text-base-text/80 max-w-lg">
            I design, build, and maintain sites for small businesses that need
            reliability first—fast hosting, secure infrastructure, and ongoing
            care without the technical headaches.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              asChild
              className="bg-base-accent text-black hover:bg-base-accent/90"
            >
              <Link href="#contact">Start a project</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-white/20 bg-transparent hover:bg-white/5"
            >
              <Link href="#services">View services</Link>
            </Button>

            <span className="text-xs md:text-sm text-base-text/60 ml-1">
              Hosting & Care Plan from <span className="text-base-accent">$100/mo</span>
            </span>
          </div>
        </div>

        <div className="flex-1 max-w-md w-full">
          <div className="rounded-3xl border border-white/10 bg-white/5/5 backdrop-blur p-5 md:p-6 shadow-lg">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-base-text/60 mb-3">
              What you get
            </p>
            <ul className="space-y-3 text-sm text-base-text/80">
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-base-accent/90" />
                <span>Modern Next.js build with clean, responsive design.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-base-accent/90" />
                <span>Managed hosting, SSL, and performance monitoring.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-base-accent/90" />
                <span>Ongoing updates and support through a simple care plan.</span>
              </li>
            </ul>

            <div className="mt-5 border-t border-white/10 pt-4 text-xs md:text-sm text-base-text/70">
              <p>
                Built with attention to detail, version control, and a clear
                process—so you always know what&apos;s going on with your site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}
