const { useState } = React;

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "4+", label: "Years experience" },
  { value: "18", label: "Projects shipped" },
  { value: "96%", label: "Client satisfaction" },
];

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "TypeScript",
  "Node.js",
  "UI/UX",
  "REST APIs",
  "Git",
  "Figma",
  "Responsive Design",
  "Testing",
];

const projects = [
  {
    title: "FinTrack Dashboard",
    category: "Web App",
    description:
      "A sleek dashboard for tracking budgets and financial goals with interactive charts and reusable components.",
    link: "#",
  },
  {
    title: "Portfolio Studio",
    category: "Branding",
    description:
      "A personal portfolio builder focused on content-first storytelling, motion, and conversion-friendly UI.",
    link: "#",
  },
  {
    title: "Travel Planner",
    category: "Mobile UI",
    description:
      "A responsive trip planner with itinerary views, booking cards, and location-based recommendations.",
    link: "#",
  },
  {
    title: "E-commerce Landing Page",
    category: "Marketing",
    description:
      "A conversion-driven landing page with product highlights, testimonials, and promotional sections.",
    link: "#",
  },
  {
    title: "TaskFlow App",
    category: "Productivity",
    description:
      "A lightweight task manager built around a clean design system and keyboard-friendly interactions.",
    link: "#",
  },
  {
    title: "Community Platform",
    category: "Community",
    description:
      "A modern social platform concept with forum cards, member profiles, and event discovery flows.",
    link: "#",
  },
];

const experience = [
  {
    title: "Frontend Developer",
    company: "PixelForge Studio",
    period: "2023 - Present",
    description:
      "Crafted interfaces for SaaS products, worked closely with product teams, and improved performance across several client projects.",
  },
  {
    title: "UI Engineer",
    company: "Northstar Labs",
    period: "2021 - 2023",
    description:
      "Designed reusable components, built responsive landing pages, and improved visual consistency across multiple product lines.",
  },
  {
    title: "Web Designer",
    company: "Freelance",
    period: "2019 - 2021",
    description:
      "Delivered custom portfolios, marketing sites, and small business websites with a focus on clean UX and accessibility.",
  },
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function SkillPill({ label }) {
  return <span className="skill-pill">{label}</span>;
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <span className="project-tag">{project.category}</span>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-meta">
        <span>Case study</span>
        <a href={project.link}>View project</a>
      </div>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web App", "Branding", "Mobile UI", "Marketing", "Productivity", "Community"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <a href="#home" className="brand">
            Karthik
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            Menu
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="nav-cta">
              Let’s Talk
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-inner">
            <div>
              <p className="eyebrow">Frontend Developer</p>
              <h1>I build thoughtful digital experiences.</h1>
              <p className="lead">
                I’m Karthik, a frontend developer focused on creating beautiful, user-friendly web
                products that balance design and performance.
              </p>

              <div className="cta-row">
                <a href="#projects" className="primary-btn">
                  View Projects
                </a>
                <a href="#contact" className="secondary-btn">
                  Contact Me
                </a>
              </div>

              <div className="hero-metrics">
                {stats.map((stat) => (
                  <div className="metric" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="profile-card">
              <div className="profile-visual">
                <div className="avatar">KB</div>
                <div className="badge">Available for freelance work</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <SectionTitle
              eyebrow="About"
              title="Designing interfaces with clarity and purpose."
              description="I enjoy turning ideas into polished products that feel intuitive and memorable."
            />

            <div className="about-grid">
              <div className="about-copy card">
                <p>
                  I’m a developer who enjoys combining strong visual design with clean code. My
                  work focuses on accessible interfaces, scalable components, and smooth user
                  experiences across devices.
                </p>
                <p>
                  Whether it’s a portfolio, SaaS platform, or landing page, I care about creating
                  experiences that are useful, elegant, and easy to navigate.
                </p>
              </div>

              <div className="card">
                <div className="info-list">
                  <div className="info-item">
                    <span>Name</span>
                    <strong>Karthik Balu</strong>
                  </div>
                  <div className="info-item">
                    <span>Email</span>
                    <strong>hello@karthikbalu.dev</strong>
                  </div>
                  <div className="info-item">
                    <span>Location</span>
                    <strong>Bengaluru, India</strong>
                  </div>
                  <div className="info-item">
                    <span>Focus</span>
                    <strong>Frontend + UX</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <SectionTitle
              eyebrow="Skills"
              title="Tools and technologies I use."
              description="I work across design, interaction, and front-end implementation."
            />

            <div className="skills-wrap">
              {skills.map((skill) => (
                <SkillPill key={skill} label={skill} />
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <SectionTitle
              eyebrow="Portfolio"
              title="Selected work and experiments."
              description="A mix of product work, design concepts, and interface systems."
            />

            <div className="filter-bar" aria-label="Project filters">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="project-grid">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <SectionTitle
              eyebrow="Experience"
              title="My career journey."
              description="A quick snapshot of the roles and projects that shaped my work."
            />

            <div className="timeline">
              {experience.map((role) => (
                <div className="experience-card" key={role.title}>
                  <h3>{role.title}</h3>
                  <div className="role-meta">
                    <span>{role.company}</span>
                    <span>{role.period}</span>
                  </div>
                  <p>{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <SectionTitle
              eyebrow="Contact"
              title="Let’s build something meaningful."
              description="I’m open to freelance work, product collaborations, and full-time opportunities."
            />

            <div className="contact-grid">
              <div className="contact-copy card">
                <p>
                  I enjoy partnering with teams that care about design quality, product strategy,
                  and user experience.
                </p>
                <div className="contact-list">
                  <div className="contact-item">
                    <span className="contact-dot" aria-hidden="true"></span>
                    <span>Email: hello@karthikbalu.dev</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-dot" aria-hidden="true"></span>
                    <span>LinkedIn: /in/karthikbalu</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-dot" aria-hidden="true"></span>
                    <span>GitHub: github.com/Kartheekbalu</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="cta-row">
                  <a href="mailto:hello@karthikbalu.dev" className="primary-btn">
                    Send an Email
                  </a>
                  <a href="#home" className="secondary-btn">
                    Back to Top
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">© 2026 Karthik Balu. Built with HTML, CSS, JavaScript, and React.</div>
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

