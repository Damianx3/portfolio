"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "@/components/icons";
import { profile } from "@/data/portfolio";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export function Header() {
  const pathname = usePathname();
  const location = pathname === "/about" ? "about" : pathname === "/projects" ? "projects" : "home";

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="terminal-mark" aria-label="Damian Ramirez, home">
          <span>~/</span>{location}/<i aria-hidden="true" />
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={pathname === link.href ? "active" : undefined}>{link.label}</Link>
          ))}
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a>
        </nav>
      </div>
    </header>
  );
}
