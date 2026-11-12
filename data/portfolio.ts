
export const profile = {
  name: "Damian Ramirez",
  shortName: "Damian",
  role: "Computer Science student at UTRGV",
  focus: "Data engineering, backend systems, and practical software.",
  location: "Texas",
  github: "https://github.com/Damianx3",
  linkedin: "https://www.linkedin.com/in/damianram/",
  email: "damian.ramirez.cs@gmail.com",
  resume: "/Damian_Ramirez_Resume.pdf",
};

export type Experience = {
  organization: string;
  role: string;
  period: string;
  description: string;
  bullets?: string[];
  technologies?: string[];
  logo: string;
  logoAlt: string;
};

export const experience: Record<
  "work" | "education",
  Experience[]
> = {
  work: [
    {
      organization: "Texas Manufacturing Assistance Center",
      technologies: ["Next.js", "FastAPI", "PostgreSQL"],
      role: "Software Engineering Intern",
      period: "Sep 2025 - Present",
      description:
        "Building an internal manufacturing advisory platform from stakeholder requirements through delivery.",
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
      technologies: ["Power BI", "DAX", "Power Query"],
      role: "Operations Analyst Intern",
      period: "May 2026 - Aug 2026",
      description:
        "Centralized operational performance reporting for electric, water, and wastewater leadership.",
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
      description:
        "Bachelor of Science in Computer Science. GPA: 3.63.",
      logo: "/logos/utrgv.png",
      logoAlt: "UTRGV logo",
    },
  ],
};

export const interests = [
  {
    title: "Data engineering",
    body:
      "Reliable pipelines, SQL, data modeling, and systems that make information trustworthy.",
  },
  {
    title: "Backend systems",
    body:
      "Python APIs, databases, and practical services designed around clear business needs.",
  },
  {
    title: "Analytics engineering",
    body:
      "Useful metrics and reporting that help teams understand performance and make decisions.",
  },
];

export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
};

export type PortfolioProject = {
  slug: string;
  title: string;
  label: string;
  period: string;
  shortDescription: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  image: string;
  imageAlt: string;
  images: ProjectImage[];
  githubUrl?: string;
};

export const projectSlots: PortfolioProject[] = [
  // ==========================================
  // GRIDPULSE
  // ==========================================
  {
    slug: "gridpulse",
    title: "GridPulse",
    label: "Data Engineering / Machine Learning",
    period: "2026 – Present",

    shortDescription:
      "A Texas electricity intelligence platform for exploring demand, data pipelines, and forecasting performance.",

    summary:
      "GridPulse combines automated EIA data ingestion, PostgreSQL, time-series modeling, and an interactive dashboard for studying Texas electricity demand and comparing forecasting approaches.",

    highlights: [
      "Built Python pipelines for EIA electricity data ingestion, validation, and transformation.",
      "Developed PostgreSQL storage and SQL analytics for ERCOT-region time-series data.",
      "Compared historical baselines, ERCOT forecasts, and GridPulse machine learning predictions.",
      "Built an interactive dashboard with model error metrics, demand visualizations, date filters, and CSV export.",
    ],

    technologies: [
      "Python",
      "Pandas",
      "PostgreSQL",
      "SQL",
      "XGBoost",
      "Next.js",
      "TypeScript",
    ],

    image: "/images/gridpulse-cover.png",

    imageAlt:
      "GridPulse dashboard showing ERCOT electricity demand and forecasting performance metrics",

    images: [
      {
        src: "/images/gridpulse-cover.png",
        alt:
          "GridPulse dashboard showing forecast comparisons and demand patterns",
        caption:
          "GridPulse dashboard — electricity demand and forecast performance",
      },
    ],

    githubUrl: "https://github.com/Damianx3/GridPulse",
  },

  // ==========================================
  // DERECHO
  // ==========================================
  {
    slug: "derecho",
    title: "Derecho",
    label: "Embedded AI / Software Engineering",
    period: "2026 – Present",

    shortDescription:
      "An offline multilingual speech translator and privacy-focused rights assistant built for Raspberry Pi.",

    summary:
      "Derecho is a privacy-focused, multilingual speech-to-speech translation system built for Raspberry Pi 5. It performs speech recognition, translation, and audio playback locally without relying on cloud services. English and Spanish are the primary supported languages, while French, Brazilian Portuguese, and German are undergoing testing. A source-grounded immigration-rights assistant is also in development.",

    highlights: [
      "Built a local speech translation workflow combining Whisper speech recognition, Gemma translation, and Piper text-to-speech.",
      "Developed a touchscreen interface supporting multilingual language selection, transcripts, translations, and audio replay.",
      "Integrated speech processing and playback on Raspberry Pi 5 without requiring an internet connection during translation.",
      "Implemented English and Spanish legal document ingestion and BM25 retrieval for the Know Your Rights assistant; citation-based responses are still being integrated.",
    ],

    technologies: [
      "Python",
      "Raspberry Pi 5",
      "Whisper",
      "Gemma",
      "Piper",
      "FastAPI",
    ],

    // Main project image
    image: "/images/Derecho_homescreen.png",

    imageAlt:
      "Derecho touchscreen home screen with Translation Mode and Legal Rights Mode",

    // Project gallery
    images: [
      {
        src: "/images/Derecho_homescreen.png",
        alt: "Derecho touchscreen application home screen",
        caption: "Derecho — home screen",
      },
      {
        src: "/images/Translation Mode Workflow.png",
        alt: "Derecho translation mode workflow diagram",
        caption: "Translation mode workflow",
      },
      {
        src: "/images/derecho-audio-pipeline.png",
        alt: "Derecho audio-to-audio processing pipeline diagram",
        caption: "Audio-to-audio processing pipeline",
      },
    ],

    // Repository is private, so no public GitHub link.
  },

  // ==========================================
  // SBA LOAN DEFAULT RISK PREDICTOR
  // ==========================================
  {
    slug: "sba-loan-default-risk-predictor",
    title: "SBA Loan Default Risk Predictor",
    label: "Machine Learning / Explainable AI",
    period: "April 2026",

    shortDescription:
      "An explainable machine learning model for estimating small-business loan default risk.",

    summary:
      "An XGBoost-based credit-risk analysis project using SBA lending data and regional economic indicators to estimate loan defaults and explain model predictions.",

    highlights: [
      "Trained and evaluated an XGBoost model using approximately 8,000 Texas SBA 7(a) loans.",
      "Achieved 94% accuracy, 0.964 ROC-AUC, and 81% recall on defaults.",
      "Engineered 608 features from SBA data and Census economic datasets.",
      "Used SHAP for explainability and deployed the trained model with Streamlit.",
    ],

    technologies: [
      "Python",
      "XGBoost",
      "Pandas",
      "SHAP",
      "Streamlit",
    ],

    // Main project image
    image: "/images/BSP_Default_rate.png",

    imageAlt:
      "Default rate analysis from the SBA loan risk prediction project",

    // Project gallery
    images: [
      {
        src: "/images/BSP_Default_rate.png",
        alt: "SBA loan default rate analysis",
        caption: "Default rate analysis",
      },
      {
        src: "/images/BSP-Confusion_matrix.png",
        alt: "Confusion matrix for the SBA loan default risk model",
        caption: "Model confusion matrix",
      },
      {
        src: "/images/BSP_Default-rate.png",
        alt: "Additional SBA loan default rate analysis",
        caption: "Additional default rate analysis",
      },
    ],
  },
];
