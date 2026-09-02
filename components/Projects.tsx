const roadmapProjects = [
  {
    number: "002",
    title: "TERRAFORM INFRASTRUCTURE",
    status: "IN DEVELOPMENT",
    tech: "TERRAFORM",
  },
  {
    number: "003",
    title: "CI/CD PIPELINE",
    status: "PLANNED",
    tech: "DEVOPS",
  },
  {
    number: "004",
    title: "OBSERVABILITY PLATFORM",
    status: "PLANNED",
    tech: "SRE",
  },
  {
    number: "005",
    title: "ZERO TRUST SECURITY",
    status: "PLANNED",
    tech: "SECURITY",
  },
  {
    number: "006",
    title: "GUARDIAN AI",
    status: "PLANNED",
    tech: "AI OPERATIONS",
  },
  {
    number: "007",
    title: "MULTI-CLOUD ARCHITECTURE",
    status: "PLANNED",
    tech: "CLOUD ARCHITECTURE",
  },
  {
    number: "008",
    title: "FINOPS DASHBOARD",
    status: "PLANNED",
    tech: "FINOPS",
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-grid-background" aria-hidden="true" />

      <div className="projects-header">
        <div>
          <div className="section-eyebrow">
            <span className="section-index">03</span>
            <span className="section-line" />
            ENGINEERING PROJECTS
          </div>

          <h2>
            BUILT SYSTEMS.
            <br />
            <span>REAL INFRASTRUCTURE.</span>
          </h2>
        </div>

        <p>
          ZonedAccuracy projects are designed around practical cloud
          engineering problems: deployment, automation, security,
          observability, reliability, cost control, and intelligent operations.
        </p>
      </div>

      <div className="featured-project">
        <div className="featured-project-top">
          <div className="project-identity">
            <span>001</span>
            FEATURED INFRASTRUCTURE
          </div>

          <div className="project-live-status">
            <span />
            COMPLETED
          </div>
        </div>

        <div className="featured-project-content">
          <div className="featured-project-copy">
            <span className="project-category">
              CLOUD PLATFORM / GOOGLE CLOUD
            </span>

            <h3>
              KUBERNETES
              <br />
              <span>CLOUD PLATFORM</span>
            </h3>

            <p>
              A production-style container orchestration environment built
              around Kubernetes on Google Cloud, demonstrating cluster
              deployment, workload management, service exposure, scalability,
              and cloud-native infrastructure practices.
            </p>

            <div className="project-tech-stack">
              <span>KUBERNETES</span>
              <span>GKE</span>
              <span>GOOGLE CLOUD</span>
              <span>DOCKER</span>
              <span>YAML</span>
            </div>

            <div className="project-actions">
              <a href="#kubernetes-case-study">
                VIEW CASE STUDY
                <span aria-hidden="true">→</span>
              </a>

             <a
  href="https://github.com/LeftfaceKing/kubernetes-cloud-platform"
  target="_blank"
  rel="noopener noreferrer"
  className="project-action-secondary"
  aria-label="View Kubernetes Cloud Platform repository on GitHub"
>
  VIEW REPOSITORY
  <span aria-hidden="true">↗</span>
</a>
            </div>
          </div>

          <div className="featured-project-system">
            <div className="system-corner system-corner-tl" />
            <div className="system-corner system-corner-tr" />
            <div className="system-corner system-corner-bl" />
            <div className="system-corner system-corner-br" />

            <div className="system-header">
              <span>ZA / K8S / 001</span>
              <span>CONTROL PLANE</span>
            </div>

            <div className="cluster-visual">
              <div className="cluster-line cluster-line-horizontal" />
              <div className="cluster-line cluster-line-left" />
              <div className="cluster-line cluster-line-right" />

              <div className="cluster-node cluster-control">
                <span className="cluster-node-status" />
                <small>CONTROL</small>
                <strong>K8S</strong>
              </div>

              <div className="cluster-node cluster-worker-one">
                <span className="cluster-node-status" />
                <small>WORKER</small>
                <strong>01</strong>
              </div>

              <div className="cluster-node cluster-worker-two">
                <span className="cluster-node-status" />
                <small>WORKER</small>
                <strong>02</strong>
              </div>

              <div className="cluster-node cluster-worker-three">
                <span className="cluster-node-status" />
                <small>WORKER</small>
                <strong>03</strong>
              </div>
            </div>

            <div className="system-metrics">
              <div>
                <span>PLATFORM</span>
                <strong>GKE</strong>
              </div>

              <div>
                <span>ORCHESTRATION</span>
                <strong>KUBERNETES</strong>
              </div>

              <div>
                <span>STATE</span>
                <strong>ARCHIVED</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="projects-roadmap">
        <div className="projects-roadmap-header">
          <span>PLATFORM ROADMAP</span>
          <span>ZA / SYSTEMS 002—008</span>
        </div>

        {roadmapProjects.map((project) => (
          <article className="roadmap-project" key={project.number}>
            <span className="roadmap-number">{project.number}</span>

            <h3>{project.title}</h3>

            <span className="roadmap-tech">{project.tech}</span>

            <span
              className={`roadmap-status ${
                project.status === "IN DEVELOPMENT"
                  ? "roadmap-status-development"
                  : ""
              }`}
            >
              {project.status}
            </span>

            <span className="roadmap-arrow">↗</span>
          </article>
        ))}
      </div>

      <div className="projects-footer">
        <span>ZA / ENGINEERING SYSTEMS</span>
        <div />
        <span>001—008</span>
      </div>
    </section>
  );
}