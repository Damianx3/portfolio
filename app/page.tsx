import Link from "next/link";
import { ArrowUpRight, GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import { ExperienceTabs } from "@/components/experience-tabs";
import { HomePortraitCarousel } from "@/components/home-portrait-carousel";
import { profile, projectSlots } from "@/data/portfolio";

export default function Home() {
  return (
    <main>
      <section className="shell hero">
        <div className="hero-copy">
          <p className="eyebrow"><span>01</span> Hello, I&apos;m</p>
          <h1>{profile.shortName}<span className="wave" aria-hidden="true">.</span></h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-intro">I turn messy information and practical problems into reliable data systems and useful software.</p>
          <div className="hero-actions">
            <Link href="/about" className="button button-primary">More about me <ArrowUpRight /></Link>
            <a href={profile.resume} className="button button-secondary" target="_blank" rel="noreferrer">Resume <ArrowUpRight /></a>
            <div className="social-icons" aria-label="Social and contact links">
              <span className="icon-link disabled" aria-label="LinkedIn profile coming soon" role="img"><LinkedinIcon size={20} /></span>
              <a href={profile.github} className="icon-link" target="_blank" rel="noreferrer" aria-label="Damian's GitHub profile"><GithubIcon size={20} /></a>
              <a href={`mailto:${profile.email}`} className="icon-link" aria-label={`Email ${profile.name}`}><MailIcon size={20} /></a>
            </div>
          </div>
        </div>
        <HomePortraitCarousel />
      </section>

      <section className="shell section" id="experience">
        <div className="section-heading">
          <div><p className="eyebrow"><span>02</span> Where I&apos;ve contributed</p><h2>Experience</h2></div>
          <p>Work grounded in clear reporting, useful software, and systems people can trust.</p>
        </div>
        <ExperienceTabs />
      </section>

      <section className="shell section projects-section" id="projects">
        <div className="section-heading">
          <div><p className="eyebrow"><span>03</span> Things I&apos;ve built</p><h2>Selected projects</h2></div>
          <p>A selection of work where data, software, and real-world problem solving come together.</p>
        </div>
        <div className="project-grid home-project-grid">
          {projectSlots.map((project) => (
            <Link href="/projects" className="project-card" key={project.number}>
              <div className="project-visual"><span>{project.number}</span><div className="project-window" aria-hidden="true"><i /><i /><i /><b /></div></div>
              <p>{project.label}</p><h3>{project.title}</h3><span className="project-status">View project details →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="shell contact-strip">
        <p className="eyebrow"><span>04</span> Let&apos;s connect</p>
        <div><h2>Have a problem worth<br />making simpler?</h2><a href={profile.github} target="_blank" rel="noreferrer">Find me on GitHub <ArrowUpRight /></a></div>
      </section>
    </main>
  );
}
