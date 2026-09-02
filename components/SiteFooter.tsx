const platformLinks = [
  {
    label: "Platform",
    href: "#platform",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Cloud Lab",
    href: "#cloud-lab",
  },
  {
    label: "Guardian",
    href: "#guardian",
  },
  {
    label: "Architecture",
    href: "#architecture",
  },
];

const domains = [
  {
    label: "ZonedAccuracy.com",
    href: "https://zonedaccuracy.com",
  },
  {
    label: "ZonedAccuracy.net",
    href: "https://zonedaccuracy.net",
  },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div
        className="site-footer-grid"
        aria-hidden="true"
      />

      <div className="site-footer-main">
        <div className="site-footer-brand">
          <div className="site-footer-brandmark">
            <span className="footer-globe">
              <span className="footer-globe-latitude footer-globe-latitude-one" />
              <span className="footer-globe-latitude footer-globe-latitude-two" />

              <span className="footer-globe-longitude footer-globe-longitude-one" />
              <span className="footer-globe-longitude footer-globe-longitude-two" />

              <span className="footer-globe-horizontal" />
              <span className="footer-globe-vertical" />
            </span>

            <span className="site-footer-brand-name">
              ZONED<span>ACCURACY</span>
            </span>
          </div>

          <h2>
            ENGINEERING
            <br />
            CLOUD SYSTEMS
            <br />
            <span>WITH PRECISION.</span>
          </h2>

          <p>
            Cloud infrastructure, automation, security,
            observability, cost optimization, and
            intelligent operations presented through
            practical engineering projects.
          </p>

          <div className="site-footer-actions">
            <a
              href="https://github.com/LeftfaceKing"
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer-primary"
            >
              VIEW GITHUB
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="#engineering-profile"
              className="site-footer-secondary"
            >
              VIEW PROFILE
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="site-footer-navigation">
          <div className="site-footer-column">
            <div className="site-footer-column-header">
              <span>PLATFORM</span>
              <span>005</span>
            </div>

            <nav
              className="site-footer-links"
              aria-label="Footer navigation"
            >
              {platformLinks.map((link, index) => (
                <a
                  href={link.href}
                  key={link.label}
                >
                  <span>
                    {String(index + 1).padStart(
                      2,
                      "0",
                    )}
                  </span>

                  <strong>{link.label}</strong>

                  <i aria-hidden="true">↗</i>
                </a>
              ))}
            </nav>
          </div>

          <div className="site-footer-column">
            <div className="site-footer-column-header">
              <span>DOMAINS</span>
              <span>002</span>
            </div>

            <div className="site-footer-domains">
              {domains.map((domain) => (
                <a
                  href={domain.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={domain.label}
                >
                  <span className="site-footer-status-dot" />

                  <div>
                    <span>PRIMARY NETWORK</span>
                    <strong>{domain.label}</strong>
                  </div>

                  <i aria-hidden="true">↗</i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer-terminal">
        <span className="site-footer-terminal-prefix">
          ZA@PLATFORM:~$
        </span>

        <span>
          cloud systems --engineered-with-precision
        </span>

        <span className="site-footer-terminal-cursor" />
      </div>

      <div className="site-footer-bottom">
        <span>
          © {new Date().getFullYear()} ZONEDACCURACY
        </span>

        <div />

        <span>
          CLOUD / DEVOPS / SRE / ARCHITECTURE
        </span>

        <span>
          ZA / SYSTEM / ONLINE
        </span>
      </div>
    </footer>
  );
}