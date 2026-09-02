export const profile = {
  name: "Damian Ramirez",
  shortName: "Damian",
  role: "Computer Science student at UTRGV",
  focus: "Data engineering, backend systems, and practical software.",
  location: "Texas",
  github: "https://github.com/Damianx3",
  email: "damian.ramirez.cs@gmail.com",
  resume: "/Damian_Ramirez_Resume.pdf",
};

export type Experience = {
  organization: string;
  role: string;
  period: string;
  description: string;
  bullets?: string[];
  logo: string;
  logoAlt: string;
};

export const experience: Record<"work" | "education", Experience[]> = {
  work: [
    {
      organization: "Texas Manufacturing Assistance Center",
      role: "Software Engineering Intern",
      period: "Sep 2025 - Present",
      description: "Building an internal manufacturing advisory platform from stakeholder requirements through delivery.",
      bullets: [
        "Designed and developed an internal platform with Python, FastAPI, PostgreSQL, Next.js, and TypeScript.",
        "Built a 60-question manufacturing maturity assessment across 10 operational categories with automated scoring and assessment history.",
        "Implemented JWT authentication and advisor-scoped REST APIs using FastAPI, SQLAlchemy, and PostgreSQL.",
        "Created decision-support reports with Recharts, including radar charts, category rankings, Pareto gap analysis, and AI-assisted roadmaps.",
      ],
      logo: "/logos/tmac.png",
      logoAlt: "TMAC logo",
    },
    {
      organization: "Brownsville Public Utilities Board",
      role: "Operations Analyst Intern",
      period: "May 2026 - Aug 2026",
      description: "Centralized operational performance reporting for electric, water, and wastewater leadership.",
      bullets: [
        "Consolidated 15+ Excel files, PDF reports, and Oracle sources into a Power BI application covering 16 organizational KPIs for 20+ managers and executives.",
        "Automated Power Query and DAX transformations, moving key reporting from monthly distributions to daily refreshes and reducing latency to about 24 hours.",
        "Developed 4 executive dashboards with about 15 reporting pages and 16+ interactive visualizations across affordability, workforce, customer experience, and reliability.",
      ],
      logo: "/logos/bpub-icon.png",
      logoAlt: "Brownsville Public Utilities Board logo",
    },
  ],
  education: [
    {
      organization: "The University of Texas Rio Grande Valley",
      role: "B.S. in Computer Science",
      period: "Expected Dec 2026",
      description: "Bachelor of Science in Computer Science. GPA: 3.63.",
      logo: "/logos/utrgv.png",
      logoAlt: "UTRGV logo",
    },
  ],
};

export const interests = [
  { title: "Data engineering", body: "Reliable pipelines, SQL, data modeling, and systems that make information trustworthy." },
  { title: "Backend systems", body: "Python APIs, databases, and practical services designed around clear business needs." },
  { title: "Analytics engineering", body: "Useful metrics and reporting that help teams understand performance and make decisions." },
];

export const projectSlots = [
  {
    label: "Machine learning",
    title: "SBA Loan Default Risk Predictor",
    period: "April 2026",
    summary: "An explainable XGBoost model for evaluating SBA 7(a) small-business loan default risk across roughly 8,000 Texas loans.",
    highlights: [
      "Achieved 94% accuracy, 0.964 ROC-AUC, and 81% recall on defaults.",
      "Engineered 608 features from SBA FOIA, U.S. Census ACS, County Business Patterns, and Business Dynamics Statistics data.",
      "Applied SHAP explainability and deployed the trained model with Streamlit.",
    ],
    technologies: ["Python", "XGBoost", "SHAP", "Streamlit", "Pandas"],
  },
  {
    label: "Web development",
    title: "Personal Portfolio Website",
    period: "August 2026 - Present",
    summary: "A responsive personal portfolio for presenting professional experience, projects, technical interests, and contact information.",
    highlights: [
      "Built reusable React components and responsive layouts with Next.js and TypeScript.",
      "Created a centralized content model for experience, education, and project information.",
      "Added swipeable photo cards, responsive navigation, and social sharing previews.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "CSS"],
  },
];
