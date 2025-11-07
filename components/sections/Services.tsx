export function Services() {
  const services = [
    { title: "Design", desc: "Clean, modern UI that fits your brand and goals." },
    { title: "Build", desc: "Next.js + Tailwind for performance and reliability." },
    { title: "Host & Care", desc: "Managed hosting, SSL, backups, updates, and support in one plan." },
  ];
  return (
    <section id="services" className="py-10">
      <div className="container-xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-base-heading">Services</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.title} className="card p-6">
              <div className="text-lg font-medium text-base-heading">{s.title}</div>
              <p className="mt-2 text-sm text-base-text/80">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
