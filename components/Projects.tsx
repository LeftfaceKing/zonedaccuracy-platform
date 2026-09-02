const roadmapProjects = [
  {
    number: "002",
    title: "TERRAFORM CLOUD INFRASTRUCTURE",
    status: "COMPLETED",
    tech: "TERRAFORM / GCP",
    href: "https://github.com/LeftfaceKing/zonedaccuracy-terraform-cloud-infrastructure",
  },
  {
    number: "003",
    title: "CI/CD DEVOPS PIPELINE",
    status: "COMPLETED",
    tech: "GITHUB ACTIONS / DOCKER",
    href: "https://github.com/LeftfaceKing/zonedaccuracy-cicd-devops-pipeline",
  },
  {
    number: "004",
    title: "CLOUD OBSERVABILITY",
    status: "COMPLETED",
    tech: "PROMETHEUS / GRAFANA",
    href: "https://github.com/LeftfaceKing/zonedaccuracy-cloud-observability",
  },
  {
    number: "005",
    title: "ZERO TRUST CLOUD SECURITY",
    status: "COMPLETED",
    tech: "IAM / TERRAFORM / GCP",
    href: "https://github.com/LeftfaceKing/zonedaccuracy-cloud-security-zero-trust",
  },
  {
    number: "006",
    title: "GUARDIAN AGENT",
    status: "COMPLETED",
    tech: "PYTHON / CLOUD SECURITY / AI",
    href: "https://github.com/LeftfaceKing/zonedaccuracy-guardian-agent",
  },
  {
    number: "007",
    title: "MULTI-CLOUD ARCHITECTURE",
    status: "PLANNED",
    tech: "CLOUD ARCHITECTURE",
    href: null,
  },
  {
    number: "008",
    title: "FINOPS COST DASHBOARD",
    status: "PLANNED",
    tech: "FINOPS",
    href: null,
  },
];

export default function Projects() {
  return (
    <section
      className="projects-section"
      id="projects"
    >
      <div
        className="projects-grid-background"
        aria-hidden="true"
      />

      <div className="projects-header">
        <div>
          <div className="section-eyebrow">
            <span className="section-index">
              03
            </span>

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
          ZonedAccuracy projects demonstrate the
          engineering lifecycle behind modern cloud
          platforms — provisioning infrastructure,
          deploying applications, automating delivery,
          monitoring systems, enforcing security
          controls, and applying intelligent cloud
          operations.
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
              A cloud-native Kubernetes platform
              engineered on Google Cloud to demonstrate
              automated infrastructure provisioning,
              container orchestration, workload
              deployment, autoscaling, CI/CD, identity,
              and security controls in a production-style
              architecture.
            </p>

            <div className="project-tech-stack">
              <span>KUBERNETES</span>
              <span>GKE</span>
              <span>TERRAFORM</span>
              <span>DOCKER</span>
              <span>GITHUB ACTIONS</span>
              <span>GOOGLE CLOUD</span>
            </div>

            <div className="project-actions">
              <a href="#kubernetes-case-study">
                VIEW CASE STUDY
                <span aria-hidden="true">
                  →
                </span>
              </a>

              <a
                href="https://github.com/LeftfaceKing/kubernetes-cloud-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-secondary"
                aria-label="View Kubernetes Cloud Platform repository on GitHub"
              >
                VIEW REPOSITORY
                <span aria-hidden="true">
                  ↗
                </span>
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
          <span>PLATFORM SYSTEMS</span>
          <span>ZA / SYSTEMS 002—008</span>
        </div>

        {roadmapProjects.map((project) => (
          <article
            className="roadmap-project"
            key={project.number}
          >
            <span className="roadmap-number">
              {project.number}
            </span>

            <h3>{project.title}</h3>

            <span className="roadmap-tech">
              {project.tech}
            </span>

            <span
              className={`roadmap-status ${
                project.status === "COMPLETED"
                  ? "roadmap-status-development"
                  : ""
              }`}
            >
              {project.status}
            </span>

            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="roadmap-arrow"
                aria-label={`View ${project.title} repository`}
              >
                ↗
              </a>
            ) : (
              <span
                className="roadmap-arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            )}
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