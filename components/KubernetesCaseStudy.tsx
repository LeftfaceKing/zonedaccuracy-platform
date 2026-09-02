const caseStudyPoints = [
  {
    label: "PROBLEM",
    title: "Scalable Cloud Deployment",
    description:
      "Design a cloud-native environment that can deploy and manage containerized workloads while demonstrating orchestration, service exposure, scalability, and infrastructure control.",
  },
  {
    label: "SOLUTION",
    title: "Google Kubernetes Engine",
    description:
      "Use Google Kubernetes Engine as the managed Kubernetes foundation, then deploy workloads, expose services, manage cluster resources, and validate the platform from the command line.",
  },
  {
    label: "VALUE",
    title: "Production-Style Cloud Platform",
    description:
      "The project demonstrates how containerized applications can move from local development into a managed cloud orchestration environment with repeatable infrastructure practices.",
  },
];

const engineeringCapabilities = [
  "Container orchestration",
  "Cluster provisioning",
  "Workload deployment",
  "Kubernetes services",
  "Application exposure",
  "Scaling concepts",
  "Cloud resource management",
  "Infrastructure validation",
];

const technologies = [
  "GOOGLE CLOUD",
  "GKE",
  "KUBERNETES",
  "DOCKER",
  "YAML",
  "KUBECTL",
];

export default function KubernetesCaseStudy() {
  return (
    <section
      className="kubernetes-case-study"
      id="kubernetes-case-study"
    >
      <div className="case-study-grid" aria-hidden="true" />

      <div className="case-study-header">
        <div>
          <div className="section-eyebrow">
            <span className="section-index">04</span>
            <span className="section-line" />
            CASE STUDY / 001
          </div>

          <h2>
            KUBERNETES
            <br />
            <span>CLOUD PLATFORM.</span>
          </h2>
        </div>

        <div className="case-study-header-meta">
          <div>
            <span>PROJECT</span>
            <strong>ZA / 001</strong>
          </div>

          <div>
            <span>PLATFORM</span>
            <strong>GOOGLE CLOUD</strong>
          </div>

          <div>
            <span>STATE</span>
            <strong className="case-study-complete">
              COMPLETED
            </strong>
          </div>
        </div>
      </div>

      <div className="case-study-intro">
        <p>
          A cloud engineering project focused on building and validating a
          Kubernetes environment on Google Cloud. The platform demonstrates
          how containerized workloads can be deployed, managed, exposed, and
          scaled through a managed Kubernetes control plane.
        </p>
      </div>

      <div className="case-study-main">
        <div className="case-study-story">
          {caseStudyPoints.map((point, index) => (
            <article className="case-study-point" key={point.label}>
              <div className="case-study-point-index">
                0{index + 1}
              </div>

              <div>
                <span className="case-study-point-label">
                  {point.label}
                </span>

                <h3>{point.title}</h3>

                <p>{point.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="case-study-architecture">
          <div className="case-study-architecture-header">
            <span>ZA / INFRASTRUCTURE MAP</span>
            <span>GKE</span>
          </div>

          <div className="case-study-flow">
            <div className="flow-node flow-cloud">
              <span>01</span>
              <small>CLOUD PROVIDER</small>
              <strong>GOOGLE CLOUD</strong>
            </div>

            <div className="flow-connector">
              <span />
            </div>

            <div className="flow-node flow-gke">
              <span>02</span>
              <small>MANAGED PLATFORM</small>
              <strong>GKE</strong>
            </div>

            <div className="flow-connector">
              <span />
            </div>

            <div className="flow-node flow-kubernetes">
              <span>03</span>
              <small>ORCHESTRATION</small>
              <strong>KUBERNETES</strong>
            </div>

            <div className="flow-connector">
              <span />
            </div>

            <div className="flow-split">
              <div className="flow-node flow-workload">
                <span>04A</span>
                <small>RESOURCE</small>
                <strong>DEPLOYMENTS</strong>
              </div>

              <div className="flow-node flow-workload">
                <span>04B</span>
                <small>RESOURCE</small>
                <strong>SERVICES</strong>
              </div>
            </div>

            <div className="flow-connector">
              <span />
            </div>

            <div className="flow-node flow-application">
              <span>05</span>
              <small>WORKLOAD</small>
              <strong>APPLICATION</strong>
            </div>
          </div>

          <div className="case-study-architecture-footer">
            <span>CONTROL PLANE</span>
            <div />
            <span>WORKLOAD LAYER</span>
          </div>
        </div>
      </div>

      <div className="case-study-details">
        <div className="case-study-capabilities">
          <div className="case-study-detail-heading">
            <span>ENGINEERING CAPABILITIES</span>
            <span>008</span>
          </div>

          <div className="capability-grid">
            {engineeringCapabilities.map((capability, index) => (
              <div className="capability-item" key={capability}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{capability}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="case-study-technology">
          <div className="case-study-detail-heading">
            <span>TECHNOLOGY STACK</span>
            <span>006</span>
          </div>

          <div className="case-study-tech-list">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <div className="case-study-result">
            <span>RESULT / 001</span>

            <p>
              Successfully built and validated a Kubernetes cloud platform,
              then removed active cloud resources after testing to prevent
              unnecessary infrastructure cost.
            </p>
          </div>
        </div>
      </div>

      <div className="case-study-footer">
        <span>ZA / CASE STUDY / KUBERNETES</span>
        <div />
        <span>PROJECT 001</span>
      </div>
    </section>
  );
}