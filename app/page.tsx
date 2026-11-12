
import Link from "next/link";
import Image from "next/image";

import {
  ArrowUpRight,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/icons";

import { ExperienceTabs } from "@/components/experience-tabs";
import { HomePortraitCarousel } from "@/components/home-portrait-carousel";
import { LivingDots } from "@/components/living-dots";

import { profile, projectSlots } from "@/data/portfolio";


export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="portfolio-v2">
      <LivingDots />

      {/* HERO */}
      <section className="hero-v2" id="home">
        <div className="hero-hands" aria-hidden="true" />

        <div className="shell hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Hello, I&apos;m</p>

            <h1>
              {profile.shortName}
              <span className="wave" aria-hidden="true">
              </span>
            </h1>

            <p className="hero-role">
              Software engineering &amp; data systems.
            </p>

            <p className="hero-intro">
              I&apos;m a Computer Science student from the
              Rio Grande Valley. I build practical software,
              work with data, and enjoy turning complex
              problems into useful solutions.
            </p>

            <div className="hero-actions">
              <a
                href={profile.resume}
                className="button button-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View my resume
                <ArrowUpRight />
              </a>
            </div>

            <div className="hero-socials">
              <a
                href={profile.linkedin}
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <LinkedinIcon size={21} />
              </a>

              <a
                href={profile.github}
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <GithubIcon size={21} />
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="icon-link"
                aria-label="Email"
                title="Email"
              >
                <MailIcon size={21} />
              </a>
            </div>
          </div>

          <div className="hero-portrait-column">
            <HomePortraitCarousel />

            <p className="hero-photo-hint">
              <span>A FACE TO THE NAME</span>
              <span>SWIPE PHOTOS ↔</span>
            </p>
          </div>
        </div>

        <div className="shell hero-bottom">
          <span>Rio Grande Valley, Texas</span>
          <a href="#projects">Scroll to explore ↓</a>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section
        className="shell section projects-section"
        id="projects"
      >
        <div className="portfolio-section-intro">
          <span className="portfolio-section-kicker">
            SELECTED WORK
          </span>

          <h2>Projects.</h2>

          <p>
            A few things I&apos;ve built across software,
            data, and machine learning.
          </p>
        </div>

        <div className="featured-project-list">
          {projectSlots.map((project) => (
            <Link
              key={project.slug}
              href={`/projects#${project.slug}`}
              className="featured-project"
              aria-label={`Explore ${project.title}`}
            >
              <div className="featured-project-image">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 650px) 100vw, 205px"
                  className="project-image"
                />
              </div>

              <div className="featured-project-info">
                <span className="featured-project-label">
                  {project.label}
                </span>

                <h3>{project.title}</h3>

                <p>{project.shortDescription}</p>

                <span className="featured-project-link">
                  Explore project
                  <ArrowUpRight size={15} />
                </span>
              </div>

              <ArrowUpRight
                size={18}
                className="featured-project-arrow"
              />
            </Link>
          ))}
        </div>

        <Link
          href="/projects"
          className="all-projects-link"
        >
          View all project details
          <ArrowUpRight size={16} />
        </Link>
      </section>

      {/* EXPERIENCE */}
      <section
        className="shell section"
        id="experience"
      >
        <div className="portfolio-section-intro">
          <span className="portfolio-section-kicker">
            WHERE I&apos;VE CONTRIBUTED
          </span>

          <h2>Experience.</h2>

          <p>
            Building software and learning from
            real teams and challenges.
          </p>
        </div>

        <ExperienceTabs />
      </section>

      {/* CONTACT */}
      <section
        className="shell section home-contact"
        id="contact"
      >
        <p className="eyebrow">Get in touch</p>

        <h2>Thanks for stopping by.</h2>

        <p>
          I&apos;m always open to connecting
          and exploring new opportunities.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="text-link"
        >
          Say hello
          <ArrowUpRight />
        </a>
      </section>
    </main>
  );
}
