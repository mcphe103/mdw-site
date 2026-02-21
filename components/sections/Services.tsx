import { SectionTitle } from "@/components/sections/SectionTitle";

export function Services() {
  const services = [
    {
      title: "Website Design",
      desc: "Clean, modern designs tailored to your brand and built for clarity. Every layout is crafted to feel professional, trustworthy, and easy for customers to navigate.",
      features: ["Modern, responsive UI", "Brand-aligned visuals", "Clear content structure"],
    },
    {
      title: "Website Development",
      desc: "Fast, stable, and reliable builds powered by Next.js. Your website is engineered for performance, long-term maintainability, and a smooth user experience.",
      features: ["Next.js + Tailwind", "Optimized performance", "Search-friendly foundation"],
    },
    {
      title: "Hosting & Ongoing Care",
      desc: "A fully managed hosting and maintenance plan that keeps your website secure, updated, monitored, and backed up—so you can focus on running your business.",
      features: ["Managed hosting & SSL", "Backups & updates", "Monitoring & priority support"],
    },
  ];

  return (
    <section id="services" className="pt-10 pb-16 md:pt-14 md:pb-24">

      <div className="container-xl max-w-5xl mx-auto px-4">
        <SectionTitle kicker="What I Do" title="Services" />

        <p className="mt-4 text-sm md:text-base text-base-text/80 max-w-2xl mx-auto text-center">
          We provide end-to-end solutions for modern small businesses—covering
          design, development, hosting, and ongoing care. Whether you need a new
          website, a redesign, or long-term maintenance, MDW keeps your online
          presence secure and reliable.
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
