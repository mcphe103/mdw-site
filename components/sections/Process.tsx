export function Process() {
  const steps = [
    ["Consult", "We clarify goals and scope."],
    ["Design", "Wireframe → high‑fidelity comps."],
    ["Build", "Implement in Next.js, connect domain."],
    ["Care", "Monitoring, updates, and support."],
  ];
  return (
    <section id="process" className="py-10">
      <div className="container-xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-base-heading">Process</h2>
        <ol className="mt-6 grid md:grid-cols-4 gap-4">
          {steps.map(([title, desc], i) => (
            <li key={i} className="card p-6">
              <div className="text-sm text-base-text/60">Step {i + 1}</div>
              <div className="text-lg font-medium text-base-heading">{title}</div>
              <p className="mt-1 text-sm text-base-text/80">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
