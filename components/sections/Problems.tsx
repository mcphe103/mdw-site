export function Problems() {
  const items = [
    "Your website is slow or outdated.",
    "You don’t want to wrangle hosting, domains, or updates.",
    "You need a clean site that brings leads.",
    "You want a partner who answers.",
  ];
  return (
    <section id="problems" className="py-10">
      <div className="container-xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-base-heading">Problems we solve</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it) => (
            <div key={it} className="card p-5 text-sm">{it}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
