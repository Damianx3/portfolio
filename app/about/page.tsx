import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, CatIcon, GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import { interests, profile } from "@/data/portfolio";

const hazelPhotos = [
  { src: "/images/hazel-portrait.webp", alt: "Hazel looking at the camera with her tongue out" },
  { src: "/images/hazel-closeup.webp", alt: "Close-up portrait of Hazel relaxing" },
  { src: "/images/hazel-sleepy.webp", alt: "Hazel sleeping with the tip of her tongue showing" },
  { src: "/images/hazel-curious.webp", alt: "Hazel sitting on a bed and looking curiously at the camera" },
];

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Damian Ramirez and his interests in data engineering, backend systems, and analytics engineering.",
};

export default function AboutPage() {
  return (
    <main className="shell about-page">
      <p className="eyebrow reveal"><span>01</span> A little context</p>
      <h1 className="page-title reveal">About Me<span>.</span></h1>
      <section className="about-intro reveal delay-one">
        <figure className="profile-photo about-photo">
          <Image src="/images/damian-speaking.webp" alt="Damian Ramirez presenting at a podium" fill priority sizes="(max-width: 620px) 100vw, 330px" />
        </figure>
        <div className="about-copy">
          <p><strong>Hey! I&apos;m Damian Ramirez</strong> — a Computer Science student at UTRGV focused on data engineering, backend systems, and practical software.</p>
          <p>My experience crosses data analytics, software engineering, and operations. At Brownsville PUB, I worked on executive reporting and organizational KPIs. At TMAC, I contributed to a full-stack software platform using modern web technologies, APIs, and databases.</p>
          <p>I enjoy taking messy information, understanding the business problem behind it, and turning it into something reliable and useful. I&apos;m especially interested in roles where Python, SQL, APIs, and thoughtful data systems come together.</p>
          <div className="about-links">
            <a href={profile.resume} target="_blank" rel="noreferrer">Resume <ArrowUpRight size={13} /></a>
            <a href={profile.github} target="_blank" rel="noreferrer"><GithubIcon /> GitHub <ArrowUpRight size={13} /></a>
            <span className="placeholder-link" aria-label="LinkedIn profile coming soon"><LinkedinIcon /> LinkedIn soon</span>
            <a href={`mailto:${profile.email}`}><MailIcon /> Email</a>
          </div>
        </div>
      </section>
      <section className="personal-section">
        <h2><CatIcon /> My cat <span>(Hazel!)</span></h2>
        <p className="section-note">Resident debugging companion and expert keyboard inspector.</p>
        <div className="photo-gallery">
          {hazelPhotos.map((photo) => (
            <figure className="hazel-photo" key={photo.src}>
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 620px) 50vw, (max-width: 820px) 50vw, 25vw" />
            </figure>
          ))}
        </div>
      </section>
      <section className="interests-section">
        <h2>What I&apos;m<br />interested in</h2>
        <div className="interest-grid">
          {interests.map((interest, index) => <article key={interest.title}><span>0{index + 1}</span><h3>{interest.title}</h3><p>{interest.body}</p></article>)}
        </div>
      </section>
    </main>
  );
}
