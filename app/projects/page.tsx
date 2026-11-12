import "../living-dots.css";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  GithubIcon,
} from "@/components/icons";

import { profile, projectSlots } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Software engineering, data engineering, embedded AI, and machine learning projects by Damian Ramirez.",
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Damian Ramirez Portfolio",
    title: "Projects — Damian Ramirez",
    description: "Software engineering, data engineering, embedded AI, and machine learning projects by Damian Ramirez.",
    url: "/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — Damian Ramirez",
    description: "Software engineering, data engineering, embedded AI, and machine learning projects by Damian Ramirez.",
  },
};

export default function ProjectsPage() {
  return (
    <main id="main-content" tabIndex={-1} className="shell projects-page-v2">
      {/* SCHOOL OF ATHENS HEADER */}
      <header className="page-art-hero page-art-hero--projects">
        <div className="artwork-extension" aria-hidden="true" />
        <div className="page-art-content">
          <span className="portfolio-section-kicker">
            SELECTED WORK
          </span>

          <h1 className="page-art-title">
            Projects.
          </h1>

          <p className="page-art-copy">
            A closer look at the software, data, and
            machine learning projects I&apos;ve been building,
            and the problems behind them.
          </p>

          <nav
            className="project-jump-links"
            aria-label="Jump to a project"
          >
            {projectSlots.map((project) => (
              <a
                key={project.slug}
                href={`#${project.slug}`}
              >
                {project.title}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* PROJECT DETAILS */}
      <div className="project-case-list">
        {projectSlots.map((project, index) => (
          <article
            className="project-case-v2"
            id={project.slug}
            key={project.slug}
          >
            {/* Number and dates */}
            <div className="project-case-meta">
              <span>
                PROJECT {String(index + 1).padStart(2, "0")}
              </span>

              <span>{project.period}</span>
            </div>

            {/* Title */}
            <div className="project-case-heading">
              <div>
                <span className="project-case-category">
                  {project.label}
                </span>

                <h2>{project.title}</h2>
              </div>

              <Link
                href="/#projects"
                className="project-back-link"
              >
                Back to overview
                <ArrowUpRight size={14} />
              </Link>
            </div>

            {/* Description */}
            <p className="project-case-intro">
              {project.summary}
            </p>

            {/* Main screenshot */}
            <figure className="project-hero-figure">
              <div className="project-hero-media">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 850px) 100vw, 760px"
                  className="project-hero-image"
                />
              </div>

              <figcaption>
                {project.images[0]?.caption ??
                  project.title}
              </figcaption>
            </figure>

            {/* What I built */}
            <div className="project-detail-layout">
              <section className="project-detail-section">
                <h3>What I built</h3>

                <ul className="project-achievements">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Technologies and source */}
              <aside className="project-detail-aside">
                <h3>Technologies</h3>

                <div className="project-tech-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github-link"
                  >
                    <GithubIcon size={17} />
                    View source code
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </aside>
            </div>

            {/* Additional project images */}
            {project.images.length > 1 && (
              <details className="project-gallery">
                <summary>
                  <span>
                    <span className="project-gallery-title">
                      More visuals
                    </span>

                    <span className="project-gallery-count">
                      {project.images.length - 1} supporting
                      {project.images.length - 1 === 1
                        ? " image"
                        : " images"}
                    </span>
                  </span>

                  <span
                    className="project-gallery-indicator"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>

                <div className="project-gallery-content">
                  {project.images.slice(1).map((image) => (
                    <figure
                      className="project-gallery-figure"
                      key={image.src}
                    >
                      <div className="project-gallery-media">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 850px) 100vw, 740px"
                          className="project-gallery-image"
                        />
                      </div>

                      <figcaption>
                        {image.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </details>
            )}
          </article>
        ))}
      </div>

      {/* GITHUB FOOTER */}
      <footer className="projects-page-footer">
        <div>
          <span className="portfolio-section-kicker">
            MORE TO EXPLORE
          </span>

          <p>
            Other experiments and ongoing work
            live on my GitHub.
          </p>
        </div>

        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit GitHub
          <ArrowUpRight size={16} />
        </a>
      </footer>
    </main>
  );
}
