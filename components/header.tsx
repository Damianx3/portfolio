
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ArrowUpRight } from "@/components/icons";
import { profile } from "@/data/portfolio";

type Theme = "dark" | "light";

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
    // Read the previously selected theme.
    const saved = localStorage.getItem("portfolio-theme");

    const initial: Theme =
      saved === "light" ? "light" : "dark";

    // Apply it to the entire document.
    document.documentElement.setAttribute(
      "data-theme",
      initial
    );

    // Synchronize the button after the first render.
    requestAnimationFrame(() => {
      setTheme(initial);
    });
  }, []);

  function toggleTheme() {
    const next: Theme =
      theme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute(
      "data-theme",
      next
    );

    localStorage.setItem("portfolio-theme", next);
    setTheme(next);
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
