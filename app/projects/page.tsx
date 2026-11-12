
import type { CSSProperties } from "react";
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
};

const textFont =
  "Inter, ui-sans-serif, system-ui, sans-serif";

const compactTitle: CSSProperties = {
  margin: 0,
  color: "var(--text)",
  fontFamily: 'Georgia, "Times New Roman", serif',
  fontSize: "clamp(32px, 4.5vw, 42px)",
  fontWeight: 400,
  lineHeight: 1.15,
  letterSpacing: "-0.045em",
};

const paragraphStyle: CSSProperties = {
  margin: 0,
  maxWidth: "630px",
  color: "var(--muted)",
  fontFamily: textFont,
  fontSize: "14px",
  lineHeight: 1.75,
};

const imageFrame: CSSProperties = {
  position: "relative",
  width: "100%",
  aspectRatio: "16 / 9",
  background: "var(--panel-soft)",
  border: "1px solid var(--line)",
  borderRadius: "7px",
  overflow: "hidden",
};

export default function ProjectsPage() {
  return (
    <main
      className="shell projects-page-v2"
      style={{
        width: "min(800px, calc(100% - 40px))",
        maxWidth: "800px",
        marginInline: "auto",
        paddingTop: "65px",
        paddingBottom: "90px",
      }}
    >
      {/* PAGE INTRO */}
      <header
        style={{
          paddingBottom: "35px",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <span className="portfolio-section-kicker">
          SELECTED WORK
        </span>

        <h1 style={{
          ...compactTitle,
          fontSize: "clamp(40px, 5vw, 54px)",
        }}>
          Projects.
        </h1>

        <p
          style={{
            ...paragraphStyle,
            marginTop: "14px",
          }}
        >
          A closer look at the projects I&apos;ve built,
          the problems behind them, and the technologies
          I&apos;ve worked with.
        </p>

        <nav
          aria-label="Project navigation"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginTop: "24px",
          }}
        >
          {projectSlots.map((project) => (
            <a
              key={project.slug}
              href={`#${project.slug}`}
              style={{
                padding: "7px 11px",
                borderRadius: "5px",
                border: "1px solid var(--line)",
                background: "var(--panel)",
                color: "var(--muted)",
                fontSize: "11px",
                textDecoration: "none",
              }}
            >
              {project.title}
            </a>
          ))}
        </nav>
      </header>

      {/* PROJECTS */}
      {projectSlots.map((project, index) => (
        <article
          key={project.slug}
          id={project.slug}
          style={{
            paddingTop: "42px",
            paddingBottom: "48px",
            borderBottom: "1px solid var(--line)",
            scrollMarginTop: "90px",
          }}
        >
          {/* NUMBER AND DATE */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "20px",
              color: "var(--faint)",
              fontFamily: "var(--mono)",
              fontSize: "10px",
              letterSpacing: "0.04em",
            }}
          >
            <span>
              PROJECT {String(index + 1).padStart(2, "0")}
            </span>

            <span>{project.period}</span>
          </div>

          {/* TITLE AND CATEGORY */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              columnGap: "20px",
              rowGap: "12px",
            }}
          >
            <div>
              <span
                style={{
                  display: "block",
                  marginBottom: "9px",
                  color: "var(--green)",
                  fontFamily: "var(--mono)",
                  fontSize: "11px",
                }}
              >
                {project.label}
              </span>

              <h2 style={compactTitle}>
                {project.title}
              </h2>
            </div>

            <Link
              href="/#projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "var(--faint)",
                fontFamily: textFont,
                fontSize: "11px",
                textDecoration: "none",
              }}
            >
              Back to overview
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* DESCRIPTION */}
          <p
            style={{
              ...paragraphStyle,
              marginTop: "18px",
              marginBottom: "23px",
            }}
          >
            {project.summary}
          </p>

          {/* MAIN SCREENSHOT */}
          <figure style={{ margin: 0 }}>
            <div style={imageFrame}>
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 850px) 100vw, 800px"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                  padding: "10px",
                  filter: "none",
                }}
              />
            </div>

            <figcaption
              style={{
                marginTop: "8px",
                color: "var(--faint)",
                fontFamily: "var(--mono)",
                fontSize: "10px",
                textAlign: "center",
              }}
            >
              {project.images[0]?.caption ?? project.title}
            </figcaption>
          </figure>

          {/* TECHNICAL ACHIEVEMENTS */}
          <section
            style={{
              marginTop: "30px",
            }}
          >
            <h3
              style={{
                margin: "0 0 14px",
                color: "var(--text)",
                fontFamily: textFont,
                fontSize: "15px",
                fontWeight: 650,
              }}
            >
              What I built
            </h3>

            <ul
              style={{
                margin: 0,
                paddingLeft: "19px",
                maxWidth: "690px",
                color: "var(--muted)",
                fontFamily: textFont,
                fontSize: "13px",
                lineHeight: 1.8,
              }}
            >
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  style={{ marginBottom: "9px" }}
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </section>

          {/* TECHNOLOGIES */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "7px",
              marginTop: "22px",
            }}
          >
            {project.technologies.map((technology) => (
              <span
                key={technology}
                style={{
                  padding: "6px 9px",
                  color: "var(--muted)",
                  background: "var(--panel)",
                  border: "1px solid var(--line)",
                  borderRadius: "5px",
                  fontFamily: textFont,
                  fontSize: "11px",
                }}
              >
                {technology}
              </span>
            ))}
          </div>

          {/* REPOSITORY LINK */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                marginTop: "22px",
                color: "var(--green)",
                fontFamily: textFont,
                fontSize: "12px",
                fontWeight: 650,
                textDecoration: "none",
              }}
            >
              <GithubIcon size={17} />
              View source code
              <ArrowUpRight size={14} />
            </a>
          )}

          {/* ADDITIONAL SCREENSHOTS */}
          {project.images.length > 1 && (
            <details
              style={{
                marginTop: "29px",
                borderTop: "1px solid var(--line)",
                borderBottom: "1px solid var(--line)",
              }}
            >
              <summary
                style={{
                  padding: "17px 0",
                  color: "var(--text)",
                  fontFamily: textFont,
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                More visuals ({project.images.length - 1})
              </summary>

              <div
                style={{
                  display: "grid",
                  gap: "25px",
                  paddingBottom: "24px",
                }}
              >
                {project.images.slice(1).map((image) => (
                  <figure
                    key={image.src}
                    style={{ margin: 0 }}
                  >
                    <div style={imageFrame}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 850px) 100vw, 800px"
                        style={{
                          objectFit: "contain",
                          objectPosition: "center",
                          padding: "10px",
                          filter: "none",
                        }}
                      />
                    </div>

                    <figcaption
                      style={{
                        marginTop: "8px",
                        color: "var(--faint)",
                        fontFamily: "var(--mono)",
                        fontSize: "10px",
                        textAlign: "center",
                      }}
                    >
                      {image.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </details>
          )}
        </article>
      ))}

      {/* FOOTER */}
      <footer
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
          paddingTop: "34px",
        }}
      >
        <p
          style={{
            ...paragraphStyle,
            fontSize: "13px",
          }}
        >
          More experiments and ongoing work on GitHub.
        </p>

        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
            color: "var(--green)",
            fontSize: "12px",
            fontWeight: 650,
          }}
        >
          Visit GitHub
          <ArrowUpRight size={15} />
        </a>
      </footer>
    </main>
  );
}
