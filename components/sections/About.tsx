import { SectionTitle } from "@/components/sections/SectionTitle";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container-xl max-w-4xl mx-auto px-4">
        <SectionTitle kicker="About" title="McPherson Digital Works" />

        <div className="mt-6 space-y-4 text-sm md:text-base text-base-text/80">
          <p>
            McPherson Digital Works is a founder-led digital studio focused on building
            clean, reliable websites for small businesses. We design, build, and manage
            modern web platforms for companies that want a strong online presence
            without the chaos of DIY tools or unreliable development.
          </p>

          <p>
            Our focus is on clean design, stable infrastructure, and a structured process.
            Every project is tracked, version-controlled, and deployed with long-term
            reliability in mind—so your website isn’t just launched and forgotten, it’s
            something you can depend on.
          </p>>
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
              How We Work
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
