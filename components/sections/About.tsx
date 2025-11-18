import { SectionTitle } from "@/components/sections/SectionTitle";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container-xl max-w-4xl mx-auto px-4">
        <SectionTitle kicker="About" title="McPherson Digital Works" />

        <div className="mt-6 space-y-4 text-sm md:text-base text-base-text/80">
          <p>
            McPherson Digital Works is a one-person studio run by me, Matthew
            McPherson. I design, build, and manage websites for small businesses
            that want a modern online presence without the chaos of DIY tools or
            unreliable developers.
          </p>

          <p>
            My focus is on clean design, stable infrastructure, and a clear
            process. Every project is tracked, version-controlled, and deployed
            with long-term reliability in mind—so your website isn&apos;t just
            launched and forgotten, it&apos;s something you can depend on.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 text-sm md:text-base">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
            <h3 className="text-base-heading text-lg font-medium">
              What I focus on
            </h3>
            <ul className="mt-3 space-y-1.5 text-base-text/75">
              <li>• Clear, professional presentation of your business</li>
              <li>• Fast, stable Next.js builds</li>
              <li>• Reliable hosting and maintenance</li>
              <li>• Simple, predictable pricing</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
            <h3 className="text-base-heading text-lg font-medium">
              How I work
            </h3>
            <ul className="mt-3 space-y-1.5 text-base-text/75">
              <li>• One point of contact—you work directly with me</li>
              <li>• A clear, step-by-step process</li>
              <li>• Ongoing support after launch</li>
              <li>• Attention to detail in both design and infrastructure</li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-xs md:text-sm text-base-text/60 text-center">
          The goal is simple: give your business a website that looks
          professional, stays online, and is taken care of over time.
        </p>
      </div>
    </section>
  );
}
