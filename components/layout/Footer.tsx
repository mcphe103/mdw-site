import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-16">
      <div className="container-xl py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div className="space-y-2">
          <div className="font-semibold text-base-heading">McPherson Digital Works</div>
          <p className="text-base-text/70">Precision websites with managed hosting & care.</p>
        </div>
        <div className="space-y-2">
          <div className="font-medium text-base-heading">Company</div>
          <ul className="space-y-1">
            <li><Link href="/#services" className="hover:text-base-heading">Services</Link></li>
            <li><Link href="/pricing" className="hover:text-base-heading">Pricing</Link></li>
            <li><Link href="/#process" className="hover:text-base-heading">Process</Link></li>
            <li><Link href="/contact" className="hover:text-base-heading">Contact</Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <div className="font-medium text-base-heading">Legal</div>
          <ul className="space-y-1">
            <li><Link href="/privacy" className="hover:text-base-heading">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-base-heading">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="container-xl py-6 text-xs text-base-text/60 border-t border-white/5">
        © {new Date().getFullYear()} McPherson Digital Works. All rights reserved.
      </div>
    </footer>
  );
}
