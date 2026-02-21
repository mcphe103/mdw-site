export default function PrivacyPage() {
  return (
    <section className="container-xl mx-auto max-w-4xl px-4 py-20">
      <div className="card p-8 md:p-12">
        <h1 className="text-3xl font-semibold text-base-heading">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-base-text/60">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="mt-8 space-y-8 text-base-text/80 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-base-heading">
              Information We Collect
            </h2>
            <p className="mt-2">
              We may collect information you provide such as your name, email
              address, company information, and project details when you
              contact us or engage our services.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-base-heading">
              How We Use Information
            </h2>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>To communicate about projects and support requests</li>
              <li>To issue invoices and manage billing</li>
              <li>To improve website performance and services</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-base-heading">
              Third-Party Services
            </h2>
            <p className="mt-2">
              We use trusted third-party providers to operate our website and services,
              such as Vercel (hosting and content delivery), Stripe (invoicing and payment
                processing), Google Workspace (business email), and Resend (transactional
                communications). These providers process data according to their own privacy
                policies.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-base-heading">
                Data Protection
              </h2>
              <p className="mt-2">
                We do not sell or rent your personal information. Reasonable
                security measures are taken to protect business communications
                and client data.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-base-heading">
                Contact
              </h2>
              <p className="mt-2">
                If you have questions regarding this Privacy Policy, please use
                the Contact section of this website.
              </p>
            </div>
          </div>
        </div>
      </section>
      );
}