import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="platform">
      <div className="hero-grid" aria-hidden="true" />

      <div
        className="hero-glow hero-glow-green"
        aria-hidden="true"
      />

      <div
        className="hero-glow hero-glow-red"
        aria-hidden="true"
      />

      <div className="hero-content">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />

            <span>Developer Cloud Platform</span>
          </div>

          <h1>
            CLOUD
            <br />
            INFRASTRUCTURE.
            <br />
            <span>ENGINEERED WITH PRECISION.</span>
          </h1>

          <p className="hero-description">
            Deploy, automate, secure, observe, and scale cloud-native
            applications through a developer platform engineered around
            Kubernetes, infrastructure automation, observability, security,
            and intelligent cloud operations.
          </p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href="#architecture"
            >
              Explore Platform
              <span aria-hidden="true">→</span>
            </a>

            <a
              className="button button-secondary"
              href="#projects"
            >
              View Projects
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="hero-capabilities">
            <span>Kubernetes</span>
            <span>Terraform</span>
            <span>CI/CD</span>
            <span>Observability</span>
            <span>Security</span>
            <span>FinOps</span>
            <span>AI Operations</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-coordinate top-coordinate">
            ZA / CONTROL PLANE
          </div>

          <div className="visual-coordinate bottom-coordinate">
            INFRASTRUCTURE / 001
          </div>

          <div className="radar-frame">
            <span className="radar-corner radar-corner-tl" />
            <span className="radar-corner radar-corner-tr" />
            <span className="radar-corner radar-corner-bl" />
            <span className="radar-corner radar-corner-br" />

            <div className="radar-scan" aria-hidden="true" />

            <div className="logo-orbit orbit-one" aria-hidden="true" />
            <div className="logo-orbit orbit-two" aria-hidden="true" />

            <Image
              src="/logos/zonedaccuracy-primary.png"
              alt="ZonedAccuracy radar globe"
              width={1200}
              height={1200}
              priority
              className="hero-logo"
            />

            <div
              className="platform-target"
              aria-hidden="true"
            >
              <span className="target-ring target-ring-one" />
              <span className="target-ring target-ring-two" />

              <span className="target-line target-line-top" />
              <span className="target-line target-line-right" />
              <span className="target-line target-line-bottom" />
              <span className="target-line target-line-left" />

              <span className="target-dot" />
            </div>

            <div className="platform-label label-kubernetes">
              <span className="label-indicator" />
              Kubernetes
            </div>

            <div className="platform-label label-guardian">
              <span className="label-indicator" />
              Guardian
            </div>

            <div className="platform-label label-observe">
              <span className="label-indicator" />
              Observe
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <span>SCROLL TO EXPLORE</span>

        <div className="hero-bottom-line" />

        <span>ZA / 001</span>
      </div>

      <div
        id="projects"
        className="anchor-target"
        aria-hidden="true"
      />

      <div
        id="architecture"
        className="anchor-target"
        aria-hidden="true"
      />

      <div
        id="cloud-lab"
        className="anchor-target"
        aria-hidden="true"
      />

      <div
        id="guardian"
        className="anchor-target"
        aria-hidden="true"
      />
    </section>
  );
}