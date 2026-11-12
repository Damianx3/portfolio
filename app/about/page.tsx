
import type { Metadata } from "next";
import Image from "next/image";

import {
  ArrowUpRight,
  CatIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/icons";

import { interests, profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Damian Ramirez, his background, interests, and life outside of programming.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Damian Ramirez Portfolio",
    title: "About — Damian Ramirez",
    description: "Learn more about Damian Ramirez, his background, interests, and life outside of programming.",
    url: "/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Damian Ramirez",
    description: "Learn more about Damian Ramirez, his background, interests, and life outside of programming.",
  },
};

const hazelPhotos = [
  {
    src: "/images/hazel-portrait.webp",
    alt: "Hazel looking at the camera with her tongue out",
  },
  {
    src: "/images/hazel-closeup.webp",
    alt: "Close-up portrait of Hazel relaxing",
  },
  {
    src: "/images/hazel-sleepy.webp",
    alt: "Hazel sleeping comfortably",
  },
  {
    src: "/images/hazel-curious.webp",
    alt: "Hazel sitting on a bed and looking curiously at the camera",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1} className="shell about-page about-page-refined">
      {/* ABOUT HEADER — WANDERER HALFTONE */}
      <header className="about-art-header">
        <div className="artwork-extension" aria-hidden="true" />
        <div className="about-art-header-content">
          <p className="eyebrow">A LITTLE CONTEXT</p>

          <h1 className="page-title">
            About Me<span>.</span>
          </h1>

          <p className="about-header-subtitle">
            A little about who I am, what I enjoy building,
            and life outside of code.
          </p>
        </div>
      </header>

      {/* PERSONAL INTRODUCTION */}
      <section className="about-intro">
        <figure className="profile-photo about-photo">
          <Image
            src="/images/damian-speaking.webp"
            alt="Damian Ramirez speaking at a podium"
            fill
            priority
            sizes="(max-width: 620px) 100vw, 290px"
          />
        </figure>

        <div className="about-copy">
          <p>
            <strong>Hey! I&apos;m Damian Ramirez.</strong>
            {" "}I&apos;m a first-generation Computer Science
            student at the University of Texas Rio Grande
            Valley, born and raised in the Rio Grande Valley,
            Texas.
          </p>

          <p>
            I&apos;ve always enjoyed learning how things work
            and finding ways to make them better. That
            curiosity has led me to explore software
            engineering, data analytics, and building
            tools that solve real problems.
          </p>

          <p>
            My experience has taken me across different
            industries and environments. At Brownsville
            Public Utilities Board, I worked with operational
            data and built dashboards to help leadership
            track organizational performance. At TMAC,
            I&apos;ve been developing a full-stack platform
            to support manufacturing advisors and their clients.
          </p>

          <p>
            What I enjoy most is taking something complicated,
            understanding the problem behind it, and turning
            it into something practical and useful.
            I&apos;m always looking for opportunities to
            learn, improve, and challenge myself.
          </p>

          <div className="about-links">
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
              <ArrowUpRight size={13} />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon size={16} />
              GitHub
              <ArrowUpRight size={13} />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon size={16} />
              LinkedIn
              <ArrowUpRight size={13} />
            </a>

            <a href={`mailto:${profile.email}`}>
              <MailIcon size={16} />
              Email
            </a>
          </div>
        </div>
      </section>

      {/* HAZEL PHOTO GALLERY */}
      <section className="personal-section">
        <h2>
          <CatIcon />
          My cat <span>(Hazel!)</span>
        </h2>

        <p className="section-note">
          Resident debugging companion and expert
          keyboard inspector.
        </p>

        <div className="photo-gallery">
          {hazelPhotos.map((photo) => (
            <figure
              className="hazel-photo"
              key={photo.src}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 620px) 50vw, (max-width: 820px) 50vw, 190px"
              />
            </figure>
          ))}
        </div>
      </section>

      {/* TECHNICAL INTERESTS */}
      <section className="interests-section">
        <h2>
          What I&apos;m
          <span> interested in.</span>
        </h2>

        <div className="interest-grid">
          {interests.map((interest) => (
            <article key={interest.title}>
              <h3>{interest.title}</h3>
              <p>{interest.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
