const focusAreas = [
  {
    index: "01",
    title: "CLOUD ARCHITECTURE",
    text: "Designing scalable, resilient, and cost-efficient cloud architectures.",
  },
  {
    index: "02",
    title: "AUTOMATION & DEVOPS",
    text: "Infrastructure as Code, CI/CD, and automated operational workflows.",
  },
  {
    index: "03",
    title: "SECURITY & COMPLIANCE",
    text: "Implementing security best practices, IAM, encryption, and compliance controls.",
  },
  {
    index: "04",
    title: "OBSERVABILITY & SRE",
    text: "Monitoring, alerting, logging, and building reliable, observable systems.",
  },
];

const principles = [
  {
    label: "PRIMARY OBJECTIVE",
    title: "Build systems that solve real-world problems.",
  },
  {
    label: "ENGINEERING PRINCIPLE",
    title: "Automate everything. Document everything.",
  },
  {
    label: "SYSTEM APPROACH",
    title: "Secure by design. Reliable by default.",
  },
  {
    label: "DELIVERY MINDSET",
    title: "Quality over speed. Impact over metrics.",
  },
];

export default function EngineeringProfile() {
  return (
    <section
      className="engineering-profile-hud"
      id="engineering-profile"
    >
      <div
        className="engineering-profile-hud-grid"
        aria-hidden="true"
      />

      <div className="engineering-profile-hud-inner">
        <div className="engineering-profile-hud-header">
          <div className="engineering-profile-hud-number">
            08
          </div>

          <div className="engineering-profile-hud-eyebrow">
            <span>ENGINEERING PROFILE</span>
            <div />
          </div>

          <span className="engineering-profile-hud-section">
            // SECTION 08
          </span>
        </div>

        <div className="engineering-profile-hud-main">
          <div className="engineering-profile-hud-copy">
            <h2>
              ENGINEERING
              <br />
              CLOUD SYSTEMS
              <br />
              <span>WITH PRECISION.</span>
            </h2>

            <div className="engineering-profile-hud-rule" />

            <p>
              A cloud engineering profile focused on building
              secure, scalable, and observable infrastructure.
              I design, automate, and optimize systems that
              deliver reliability, performance, and measurable
              impact.
            </p>

            <div className="engineering-profile-metrics">
              <div>
                <span>{"</>"}</span>
                <strong>12+</strong>
                <small>CLOUD PROJECTS</small>
              </div>

              <div>
                <span>☁</span>
                <strong>4+</strong>
                <small>YEARS EXPERIENCE</small>
              </div>

              <div>
                <span>◇</span>
                <strong>100%</strong>
                <small>SECURITY FOCUSED</small>
              </div>

              <div>
                <span>↗</span>
                <strong>24/7</strong>
                <small>SYSTEMS MINDED</small>
              </div>
            </div>

            <div className="engineering-profile-status">
              <span className="engineering-profile-status-dot" />

              <strong>STATUS:</strong>

              <span>
                ENGINEERING · AUTOMATING · OPTIMIZING ·
                DELIVERING
              </span>
            </div>
          </div>

          <div className="engineering-profile-hud-right">
            <div className="engineering-profile-focus-panel">
              <div className="engineering-profile-panel-top">
                <span>// ENGINEERING FOCUS</span>
                <small>ZA / PROFILE / 001</small>
              </div>

              <div className="engineering-profile-focus-list">
                {focusAreas.map((item) => (
                  <article
                    key={item.index}
                    className="engineering-profile-focus-row"
                  >
                    <div className="engineering-profile-focus-icon">
                      {item.index === "01" && "☁"}
                      {item.index === "02" && ">_"}
                      {item.index === "03" && "◇"}
                      {item.index === "04" && "▥"}
                    </div>

                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.text}</p>
                    </div>

                    <span>// {item.index}</span>
                  </article>
                ))}
              </div>
            </div>

            <div className="engineering-profile-current">
              <div className="engineering-profile-current-header">
                <span>// CURRENT FOCUS</span>

                <small>
                  ZA / LIVE{" "}
                  <i className="engineering-profile-live-dot" />
                </small>
              </div>

              <div className="engineering-profile-terminal">
                <p>
                  <span>&gt;</span> Building secure cloud systems
                </p>

                <p>
                  <span>&gt;</span> Automating infrastructure
                </p>

                <p>
                  <span>&gt;</span> Optimizing performance &amp;
                  cost
                  <i className="engineering-profile-terminal-cursor" />
                </p>

                <div
                  className="engineering-profile-world"
                  aria-hidden="true"
                >
                  ░▒▓░░▒▓▒░
                  <br />
                  ▒▓░▒▓░▓▒
                  <br />
                  ░▒▓▒░▒░
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="engineering-profile-principles">
          {principles.map((item, index) => (
            <article key={item.label}>
              <span className="engineering-profile-principle-icon">
                {index === 0 && "◎"}
                {index === 1 && "⬡"}
                {index === 2 && "◇"}
                {index === 3 && "ϟ"}
              </span>

              <div>
                <strong>{item.label}</strong>
                <p>{item.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}