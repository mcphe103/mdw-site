"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-base-bg/75 backdrop-blur border-b border-white/5">
      <div className="container-xl h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-base-heading text-lg tracking-wide">
        McPherson <span className="text-base-accent">Digital</span> Works
      </Link>
      <nav className="hidden md:flex gap-6 text-sm">
        <NavLink href="/#services" current={pathname === "/#services"}>Services</NavLink>
        <NavLink href="/pricing" current={pathname?.startsWith("/pricing")}>Pricing</NavLink>
        <NavLink href="/#process" current={pathname === "/#process"}>Process</NavLink>
        <NavLink href="/contact" current={pathname?.startsWith("/contact")}>Contact</NavLink>
      </nav>
      <div className="hidden md:block">
        <Link href="/contact"><Button>Book a free consult</Button></Link>
      </div>

    </div>
  </header>
  );
}

function NavLink({ href, current, children }: { href: string; current?: boolean; children: React.ReactNode }) {
  return (
    <Link href={href} className={`hover:text-base-heading ${current ? "text-base-heading" : "text-base-text/80"}`}>
    {children}
  </Link>
  );
}
