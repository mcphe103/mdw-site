export function Problems() {
  const problems = [
    {
      title: "Outdated or Unprofessional Websites",
      desc: "Your website should reflect the quality of your business. If it feels old, cluttered, or inconsistent, customers lose trust quickly. We redesign and modernize your site to match your brand.",
    },
    {
      title: "Slow or Unreliable Hosting",
      desc: "Cheap or unmanaged hosting leads to downtime, slow load times, and security risks. We provide secure, reliable hosting and monitoring so your site stays fast and available.",
    },
    {
      title: "No Ongoing Maintenance",
      desc: "Most websites go months or years without updates. This leads to broken pages, vulnerabilities, and outdated content. We handle updates, backups, and maintenance for you.",
    },
    {
      title: "No One to Turn To",
      desc: "When something breaks, most business owners don’t have a developer they can trust. MDW provides clear communication and ongoing support whenever you need help.",
    },
  ];

  return (
    <section id="problems" className="py-16 md:py-24">
      <div className="container-xl max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-base-heading">
          Problems We Solve
        </h2>

        <p className="mt-4 text-sm md:text-base text-base-text/80 max-w-2xl">
          Modern businesses often struggle with outdated websites, technical
          issues, and unreliable support. We help small businesses eliminate
          those problems so their online presence stays professional, fast, and
          trustworthy.
        </p>

        {/* GRID OF PROBLEMS */}
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5"
            >
              <h3 className="text-base-heading text-lg font-medium">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-base-text/75 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ENHANCEMENT LINE (OUTSIDE THE GRID) */}
        <p className="mt-6 text-xs md:text-sm text-base-text/60 text-center">
          If any of these problems sound familiar, the Launch or Redesign
          Package is the right starting point.
        </p>
      </div>
    </section>
  );
}
