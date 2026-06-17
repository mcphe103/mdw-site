import { SectionTitle } from "@/components/sections/SectionTitle";

export function Services() {
  const services = [
    {
      title: "New Website Builds",
      desc: "Professional websites for small businesses that need to look credible online and make it easy for customers to understand their services and get in touch.",
      features: ["Starter and growth website packages", "Mobile-friendly layouts", "Clear calls to action"],
    },
    {
      title: "Modern Development",
      desc: "Fast, stable, and reliable builds powered by Next.js. Your website is built for performance, maintainability, and a smooth customer experience.",
      features: ["Next.js + Tailwind", "Optimized performance", "Search-friendly foundation"],
    },
    {
      title: "Hosting & Ongoing Care",
      desc: "Managed hosting and maintenance that keeps your website secure, monitored, backed up, and supported after launch.",
      features: ["Managed hosting & SSL", "Backups & updates", "Monitoring & support"],
    },
  ];

  return (
    <section id="services" className="pt-10 pb-16 md:pt-14 md:pb-24">
      <div className="container-xl max-w-5xl mx-auto px-4">
        <SectionTitle kicker="What I Do" title="Services" />

        <p className="mt-4 text-sm md:text-base text-base-text/80 max-w-2xl mx-auto text-center">
          MDW helps local businesses launch clean, modern websites with clear service information, strong first impressions, and ongoing support after launch.
        </p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 flex flex-col"
            >
              <h3 className="text-lg font-medium text-base-heading">{s.title}</h3>

              <p className="mt-2 text-sm text-base-text/75">{s.desc}</p>

              <ul className="mt-4 space-y-1.5 text-sm text-base-text/70">
                {s.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-base-accent/80" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
