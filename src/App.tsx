import "./App.css";

const skillGroups = [
  {
    number: "01",
    title: "Web engineering",
    description:
      "Building full-stack products with modern interfaces, APIs, and structured data.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Zod",
    ],
  },
  {
    number: "02",
    title: "AI & computer vision",
    description:
      "Creating image-analysis workflows with explainable deep-learning predictions.",
    skills: [
      "Python",
      "PyTorch",
      "FastAPI",
      "Vite",
      "Computer Vision",
      "Transfer Learning",
      "Grad-CAM",
    ],
  },
];

type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  detailsTitle: string;
  details: string[];
  technologies: string[];
  repository: string;
  live?: string;
  note?: string;
  credit?: {
    label: string;
    url: string;
  };
  visual: string;
};

const projects: Project[] = [
  {
    number: "01",
    category: "AI / MEDICAL IMAGING",
    title: "Cancer Stage Prediction",
    description:
      "A research prototype that analyzes histopathology images and predicts both cancer stage and progression risk, with visual explanations for model predictions.",
    detailsTitle: "Model & outputs",
    details: [
      "Classifies image patches into five mapped cancer stages and estimates low, medium, or high progression risk.",
      "Uses transfer learning with ResNet50 or EfficientNet, plus focal loss to address class imbalance.",
      "Generates Grad-CAM heatmaps, confusion matrices, classification reports, and sample prediction visualizations.",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "FastAPI",
      "React",
      "Vite",
      "Tailwind CSS",
    ],
    repository:
      "https://github.com/shubhamss1018-commits/Cancer-detection-using-deep-learning-",
    note:
      "For research and education only. It is not a substitute for professional medical diagnosis.",
    visual: "cancer-visual",
  },
  {
    number: "02",
    category: "FULL-STACK / COMPENSATION DATA",
    title: "CompIntel",
    description:
      "An India-focused salary explorer designed to make cross-company compensation comparisons more meaningful by comparing normalized role levels instead of job titles alone.",
    detailsTitle: "Platform features",
    details: [
      "Search salary entries by role, company, city, and level; browse company summaries and level breakdowns.",
      "Compare companies side by side using normalized levels, mapping equivalent roles across organizations.",
      "Breaks compensation into base, bonus, and stock, with total compensation calculated on the server.",
      "Supports anonymous salary submissions without requiring an account.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "PostgreSQL",
      "Prisma",
      "Zod",
    ],
    repository: "https://github.com/shubhamss1018-commits/compintel",
    live: "https://compintel-ruby.vercel.app",
    credit: {
      label: "README credits Siddesha14",
      url: "https://github.com/Siddesha14/compintel",
    },
    visual: "compintel-visual",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M4.5 15.5 15 5m0 0H6m9 0v9" />
    </svg>
  );
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner page-width">
          <a className="brand" href="#top" aria-label="Shubham Soule, home">
            <span className="brand-mark">SS</span>
            <span className="brand-name">SHUBHAM SOULE</span>
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a className="nav-contact" href="#contact">
              Let&apos;s talk <ArrowIcon />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero page-width" id="top">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              FULL-STACK DEVELOPER · FRONT-END FOCUS
            </p>
            <h1>
              I build
              <br />
              <span className="headline-accent">useful things</span>
              <span className="headline-period">.</span>
            </h1>
            <p className="hero-summary">
              I&apos;m Shubham Soule, a full-stack developer focused on
              front-end development and thoughtful digital products.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore projects <ArrowIcon />
              </a>
              <a className="text-link" href="#contact">
                Get in touch <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-index">
              <span>BASED ON PUBLIC PROJECTS</span>
              <span className="index-line" />
              <span>01 — 02</span>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="art-ring art-ring-outer" />
            <div className="art-ring art-ring-inner" />
            <div className="art-crosshair art-crosshair-top" />
            <div className="art-crosshair art-crosshair-bottom" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="hero-orb">
              <div className="orb-core" />
              <div className="orb-glint" />
            </div>
            <div className="float-card float-card-top">
              <span className="float-card-kicker">CURRENT INTEREST</span>
              <strong>Web + AI</strong>
              <span className="float-card-meta">Interfaces · Intelligence</span>
            </div>
            <div className="float-card float-card-bottom">
              <span className="float-card-kicker">BUILD MODE</span>
              <strong>Ideas → systems</strong>
              <span className="float-card-meta">Designing with purpose</span>
            </div>
            <span className="art-coordinate coordinate-one">18° / 73°</span>
            <span className="art-coordinate coordinate-two">SS—01</span>
          </div>
        </section>

        <section className="profile-band">
          <div className="page-width profile-inner">
            <p className="eyebrow">A LITTLE ABOUT MY WORK</p>
            <p className="profile-statement">
              From polished web experiences to applied machine learning, I
              enjoy turning complex ideas into clear, useful tools.
            </p>
            <span className="profile-mark" aria-hidden="true">
              ✳
            </span>
          </div>
        </section>

        <section className="section-block page-width" id="skills">
          <div className="section-heading">
            <div>
              <p className="eyebrow">CAPABILITIES / 01</p>
              <h2>
                Skills in
                <br />
                <span>practice.</span>
              </h2>
            </div>
            <p className="section-aside">
              Technologies reflected in the projects on this page.
            </p>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.number}>
                <div className="skill-card-top">
                  <span className="card-number">{group.number}</span>
                  <span className="card-cross" aria-hidden="true">
                    +
                  </span>
                </div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul className="tag-list" aria-label={`${group.title} skills`}>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="page-width">
            <div className="section-heading projects-heading">
              <div>
                <p className="eyebrow">SELECTED WORK / 02</p>
                <h2>
                  Built with
                  <br />
                  <span>curiosity.</span>
                </h2>
              </div>
              <p className="section-aside">
                A selection of public projects from my GitHub.
              </p>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className={`project-visual ${project.visual}`}>
                    <div className="visual-topline">
                      <span>PROJECT / {project.number}</span>
                      <span className="visual-status">
                        <span className="status-dot" /> PUBLIC REPOSITORY
                      </span>
                    </div>
                    {project.visual === "cancer-visual" ? (
                      <div className="scan-graphic">
                        <div className="scan-grid" />
                        <div className="scan-image scan-image-one" />
                        <div className="scan-image scan-image-two" />
                        <div className="scan-focus">
                          <span />
                        </div>
                        <span className="scan-label">GRAD-CAM / VIEW</span>
                      </div>
                    ) : (
                      <div className="data-graphic">
                        <div className="data-label">
                          <span>LEVEL COMPARISON</span>
                          <span>IN / ₹</span>
                        </div>
                        <div className="data-chart">
                          <div className="chart-grid-line line-one" />
                          <div className="chart-grid-line line-two" />
                          <div className="chart-grid-line line-three" />
                          <div className="chart-bars">
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                          </div>
                          <svg viewBox="0 0 320 110" preserveAspectRatio="none">
                            <path d="M4 88 C48 78 47 60 91 66 S142 45 178 51 228 20 258 34 287 10 316 5" />
                          </svg>
                        </div>
                        <div className="data-legend">
                          <span><i className="legend-dot legend-cyan" /> BASE</span>
                          <span><i className="legend-dot legend-orange" /> TOTAL COMP</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="project-content">
                    <p className="project-category">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-details">
                      <p className="project-details-title">
                        {project.detailsTitle}
                      </p>
                      <ul>
                        {project.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                    {project.note && (
                      <p className="project-note">{project.note}</p>
                    )}
                    <ul
                      className="tag-list project-tags"
                      aria-label={`${project.title} technologies`}
                    >
                      {project.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                    <div className="project-links">
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub repository <ArrowIcon />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live project <ArrowIcon />
                        </a>
                      )}
                      {project.credit && (
                        <a
                          href={project.credit.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.credit.label} <ArrowIcon />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section page-width" id="contact">
          <div className="contact-panel">
            <div>
              <p className="eyebrow">HAVE A PROJECT IN MIND? / 03</p>
              <h2>
                Let&apos;s make
                <br />
                something <span>matter.</span>
              </h2>
            </div>
            <div className="contact-actions">
              <a
                className="contact-email"
                href="mailto:shubhamssoule2018@gmail.com"
              >
                shubhamssoule2018@gmail.com <ArrowIcon />
              </a>
              <a
                className="resume-link"
                href="https://docs.google.com/document/d/1Fl2AH3QsplAK9zR5KT_480BO9xbMUNOl/edit?usp=sharing&ouid=111263143980241471927&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                View resume <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer page-width">
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">SS</span>
          <span className="brand-name">SHUBHAM SOULE</span>
        </a>
        <p>Designed with intent. © {new Date().getFullYear()}</p>
        <a
          href="https://github.com/shubhamss1018-commits"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <ArrowIcon />
        </a>
      </footer>
    </div>
  );
}

export default App;
