export default function TermsPage() {
  return (
    <section className="container-xl mx-auto max-w-4xl px-4 py-20">
      <div className="card p-8 md:p-12">
        <h1 className="text-3xl font-semibold text-base-heading">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-base-text/60">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="mt-8 space-y-8 text-base-text/80 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-base-heading">
              Services
            </h2>
            <p className="mt-2">
              McPherson Digital Works provides web design, development,
              consulting, and related digital services as agreed in writing for
              each client engagement.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-base-heading">
              Invoices & Payments
            </h2>
            <p className="mt-2">
              Payments are issued via Stripe unless otherwise agreed. Payment
              schedules, deposits, and milestones are defined within each
              project agreement or invoice.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-base-heading">
              Intellectual Property
            </h2>
            <p className="mt-2">
              Upon full payment, ownership of final deliverables transfers to
              the client unless otherwise stated. Pre-existing frameworks,
              templates, or internal tools remain the property of McPherson
              Digital Works.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-base-heading">
              Limitation of Liability
            </h2>
            <p className="mt-2">
              McPherson Digital Works shall not be liable for indirect or
              consequential damages arising from the use of this website or
              provided services, to the fullest extent permitted by law.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-base-heading">
              Governing Law
            </h2>
            <p className="mt-2">
              These terms are governed by the laws of the United States and
              the state in which the business operates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}