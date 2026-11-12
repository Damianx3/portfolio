
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ArrowUpRight } from "@/components/icons";
import { profile } from "@/data/portfolio";
import { readStoredTheme, storeTheme, type Theme } from "@/lib/theme";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export function Header() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<Theme>("dark");

  const location =
    pathname === "/about"
      ? "about"
      : pathname === "/projects"
        ? "projects"
        : "home";

  useEffect(() => {
    const initial = readStoredTheme();
    document.documentElement.dataset.theme = initial;
    setTheme(initial);
  }, []);

  function toggleTheme() {
    const next: Theme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    setTheme(next);
    storeTheme(next);
  }

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link
          href="/"
          className="terminal-mark"
          aria-label="Damian Ramirez, home"
        >
          <span>~/</span>
          {location}/
          <i aria-hidden="true" />
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={
                pathname === link.href ? "active" : undefined
              }
            >
              {link.label}
            </Link>
          ))}

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-github"
          >
            GitHub <ArrowUpRight size={13} />
          </a>

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            aria-pressed={theme === "light"}
            title={
              theme === "dark" ? "Light mode" : "Dark mode"
            }
          >
            <span aria-hidden="true">
              {theme === "dark" ? "☀" : "☾"}
            </span>

            <span className="theme-toggle-label">
              {theme === "dark" ? "Light" : "Dark"}
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
