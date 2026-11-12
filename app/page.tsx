
import Link from "next/link";

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

import "./living-dots.css";

const linkedinUrl = "https://www.linkedin.com/in/damianram/";

export default function Home() {
  return (
    <main className="portfolio-v2">
      {/* Interactive dots outside the centered column */}
      <LivingDots />

      {/* HERO */}
      <section className="hero-v2" id="home">
        <div className="hero-hands" aria-hidden="true" />

        <div className="shell hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">
              Hello, I&apos;m
            </p>

            <h1>
              {profile.shortName}
              <span className="wave" aria-hidden="true">
                .
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

            {/* Main resume button */}
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

            {/* Social links */}
            <div className="hero-socials">
              <a
                href={linkedinUrl}
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Damian's LinkedIn profile"
                title="LinkedIn"
              >
                <LinkedinIcon size={21} />
              </a>

              <a
                href={profile.github}
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Damian's GitHub profile"
                title="GitHub"
              >
                <GithubIcon size={21} />
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="icon-link"
                aria-label="Email Damian"
                title="Email"
              >
                <MailIcon size={21} />
              </a>
            </div>
          </div>

          {/* Portrait carousel */}
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

          <a href="#projects">
            Scroll to explore ↓
          </a>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        className="shell section projects-section"
        id="projects"
      >
        <div className="section-heading">
          <p className="eyebrow">
            Things I&apos;ve built
          </p>

          <h2>Selected projects.</h2>

          <p>
            Software, data, and practical problems
            I&apos;ve enjoyed working on.
          </p>
        </div>

        <div className="project-grid home-project-grid">
          {projectSlots.map((project) => (
            <Link
              href="/projects"
              className="project-card"
              key={project.title}
            >
              <div className="project-visual">
                <div
                  className="project-window"
                  aria-hidden="true"
                >
                  <i />
                  <i />
                  <i />
                  <b />
                </div>
              </div>

              <div className="project-card-copy">
                <p className="project-category">
                  {project.label}
                </p>

                <h3>{project.title}</h3>

                <span className="project-status">
                  View project details ↗
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        className="shell section"
        id="experience"
      >
        <div className="section-heading">
          <p className="eyebrow">
            Where I&apos;ve contributed
          </p>

          <h2>Experience.</h2>

          <p>
            Building useful software and learning
            from real teams and challenges.
          </p>
        </div>

        <ExperienceTabs />
      </section>

      {/* CONTACT */}
      <section
        className="shell section home-contact"
        id="contact"
      >
        <p className="eyebrow">
          Get in touch
        </p>

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
