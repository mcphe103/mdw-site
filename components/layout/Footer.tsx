// components/layout/Footer.tsx

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/5 backdrop-blur py-10 mt-20">
      <div className="container-xl mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* LEFT SECTION */}
          <div>
            <h3 className="text-base-heading text-lg font-semibold">
              McPherson Digital Works
            </h3>
            <p className="mt-2 text-sm text-base-text/60 max-w-sm">
              Clean, reliable websites for small businesses — built with care,
              clarity, and long-term stability.
            </p>
          </div>

          {/* RIGHT SIDE: NAV + SOCIAL + LEGAL */}
          <div className="flex flex-1 md:justify-end gap-10 text-sm">
            {/* NAV COLUMNS */}
            <div className="space-y-2">
              <h4 className="text-base-heading/80 text-xs uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-1">
                <li>
                  <Link href="#process" className="text-base-text/70 hover:text-base-text">
                  Process
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-base-text/70 hover:text-base-text">
                Services
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="text-base-text/70 hover:text-base-text">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-base-text/70 hover:text-base-text">
            About
          </Link>
        </li>
      </ul>
    </div>

    <div className="space-y-2">
      <h4 className="text-base-heading/80 text-xs uppercase tracking-wider">
        Support
      </h4>
      <ul className="space-y-1">
        <li>
          <Link href="#contact" className="text-base-text/70 hover:text-base-text">
          Contact
        </Link>
      </li>
      <li>
        <Link href="#pricing" className="text-base-text/70 hover:text-base-text">
        Start a Project
      </Link>
    </li>
  </ul>
</div>

<div className="space-y-2">
  <h4 className="text-base-heading/80 text-xs uppercase tracking-wider">
    Legal
  </h4>
  <ul className="space-y-1">
    <li>
      <Link href="/privacy" className="text-base-text/70 hover:text-base-text">
      Privacy Policy
    </Link>
  </li>
  <li>
    <Link href="/terms" className="text-base-text/70 hover:text-base-text">
    Terms of Service
  </Link>
</li>
</ul>
</div>
</div>
</div>

        {/* SOCIAL + COPYRIGHT + POWERED BY */}
<div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* SOCIALS */}
  <div className="flex justify-center md:justify-start gap-3">
            {/* Replace href values with your real profiles when ready */}
{/*    <a
      href="https://github.com/mcphe103"
      target="_blank"
      rel="noreferrer"
      className="h-8 w-8 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-xs text-base-text/70 hover:border-base-accent/70 hover:text-base-accent"
    >
      GH
    </a>*/}
  </div>

  <div className="text-center md:text-right text-[11px] text-base-text/55 space-y-1">
    <div>
      © {new Date().getFullYear()} McPherson Digital Works. All rights reserved.
    </div>
    <div>
      Powered by Next.js &amp; deployed on Vercel.
    </div>
  </div>
</div>
</div>
</footer>
);
}
