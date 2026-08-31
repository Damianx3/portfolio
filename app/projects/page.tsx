import type { Metadata } from "next";
import { ArrowUpRight } from "@/components/icons";
import { profile, projectSlots } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected data, machine-learning, and software projects by Damian Ramirez.",
};

export default function ProjectsPage() {
  return (
    <main className="shell projects-page">
      <p className="eyebrow reveal"><span>01</span> Selected work</p>
      <div className="projects-intro reveal">
        <h1 className="page-title">Projects<span>.</span></h1>
        <p>Practical work across machine learning, data analysis, and software engineering—built around real questions and measurable outcomes.</p>
      </div>

      <div className="project-list reveal delay-one">
        {projectSlots.map((project) => (
          <article className="project-case" key={project.number}>
            <aside>
              <span>{project.number}</span>
              <p>{project.label}</p>
              <time>{project.period}</time>
            </aside>
            <div className="project-case-copy">
              <h2>{project.title}</h2>
              <p className="project-summary">{project.summary}</p>
              <ul>
                {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
              <div className="technology-list" aria-label={`${project.title} technologies`}>
                {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="projects-contact">
        <p>Explore more of my code, experiments, and ongoing work.</p>
        <a href={profile.github} target="_blank" rel="noreferrer">Visit my GitHub <ArrowUpRight /></a>
      </section>
    </main>
  );
}
