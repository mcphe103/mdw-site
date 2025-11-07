export function About() {
  return (
    <section id="about" className="py-10">
      <div className="container-xl grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-base-heading">About</h2>
          <p className="mt-3 text-base-text/80">
            I’m <strong>Matthew McPherson</strong>. I build dependable websites with a security‑first mindset and
            straightforward support. No fluff — just solid systems.
          </p>
        </div>
        <div className="card p-6 text-sm text-base-text/80">
          <div className="font-medium text-base-heading">Highlights</div>
          <ul className="mt-2 space-y-1">
            <li>• Next.js + Tailwind expertise</li>
            <li>• Managed hosting & monitoring</li>
            <li>• Transparent, friendly support</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
