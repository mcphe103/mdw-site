export function Pricing({ condensed = false }: { condensed?: boolean }) {
  const tiers = [
    {
      name: "Starter Site",
      price: "From $699",
      features: ["1–3 pages", "Responsive", "Basic SEO", "Contact form"],
    },
    {
      name: "Pro Site",
      price: "From $1,499",
      features: ["5–8 pages", "Tailored design", "SEO baseline", "Analytics", "Optional CMS"],
    },
    {
      name: "Care Plan",
      price: "$100/mo",
      features: ["Managed hosting", "SSL", "Backups", "Updates", "Performance monitoring", "30 min/mo support"],
    },
  ];

  return (
    <section id="pricing" className="py-10">
      <div className="container-xl">
        {!condensed && <h2 className="text-2xl md:text-3xl font-semibold text-base-heading">Pricing</h2>}
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {tiers.map((t) => (
            <div key={t.name} className="card p-6">
              <div className="text-lg font-medium text-base-heading">{t.name}</div>
              <div className="mt-1 text-base-accent font-semibold">{t.price}</div>
              <ul className="mt-3 text-sm text-base-text/80 space-y-1">
                {t.features.map((f) => <li key={f}>• {f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
