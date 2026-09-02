const metrics = [
  {
    label: "CLUSTER STATE",
    value: "ARCHIVED",
    detail: "GKE / PROJECT 001",
  },
  {
    label: "DEPLOYMENTS",
    value: "03",
    detail: "VALIDATED WORKLOADS",
  },
  {
    label: "SERVICES",
    value: "03",
    detail: "KUBERNETES SERVICES",
  },
  {
    label: "INFRA COST",
    value: "$0.00",
    detail: "ACTIVE RESOURCES",
  },
];

const activity = [
  {
    time: "00:01",
    type: "SYSTEM",
    message: "Cloud Lab interface initialized",
  },
  {
    time: "00:02",
    type: "K8S",
    message: "Kubernetes project metadata loaded",
  },
  {
    time: "00:03",
    type: "SECURITY",
    message: "Infrastructure state verified",
  },
  {
    time: "00:04",
    type: "FINOPS",
    message: "No active billable cluster resources",
  },
];

export default function CloudLab() {
  return (
    <section className="cloud-lab" id="cloud-lab">
      <div className="cloud-lab-grid" aria-hidden="true" />

      <div className="cloud-lab-header">
        <div>
          <div className="section-eyebrow">
            <span className="section-index">05</span>
            <span className="section-line" />
            CLOUD LAB
          </div>

          <h2>
            INFRASTRUCTURE
            <br />
            <span>CONTROL CENTER.</span>
          </h2>
        </div>

        <div className="cloud-lab-description">
          <span className="lab-mode">
            <span />
            DEMO MODE
          </span>

          <p>
            An operations interface for visualizing infrastructure state,
            deployments, observability, security, and cloud cost signals
            across the ZonedAccuracy platform.
          </p>
        </div>
      </div>

      <div className="cloud-console">
        <div className="console-topbar">
          <div className="console-title">
            <span className="console-status-light" />

            <span>ZONEDACCURACY / CLOUD LAB</span>
          </div>

          <div className="console-topbar-meta">
            <span>REGION / US</span>
            <span>ENV / LAB</span>
            <span>MODE / DEMO</span>
          </div>
        </div>

        <div className="console-metrics">
          {metrics.map((metric) => (
            <article className="console-metric" key={metric.label}>
              <span>{metric.label}</span>

              <strong>{metric.value}</strong>

              <small>{metric.detail}</small>
            </article>
          ))}
        </div>

        <div className="console-main">
          <div className="console-infrastructure">
            <div className="console-panel-header">
              <span>INFRASTRUCTURE TOPOLOGY</span>
              <span>ZA / LAB / 001</span>
            </div>

            <div className="lab-topology">
              <div className="lab-orbit lab-orbit-one" />
              <div className="lab-orbit lab-orbit-two" />

              <div className="lab-connection lab-connection-left" />
              <div className="lab-connection lab-connection-right" />
              <div className="lab-connection lab-connection-bottom" />

              <div className="lab-node lab-node-core">
                <span className="lab-node-light" />
                <small>CONTROL PLANE</small>
                <strong>K8S</strong>
                <span>ARCHIVED</span>
              </div>

              <div className="lab-node lab-node-deploy">
                <span className="lab-node-light" />
                <small>WORKLOAD</small>
                <strong>DEPLOY</strong>
                <span>VALIDATED</span>
              </div>

              <div className="lab-node lab-node-observe">
                <span className="lab-node-light" />
                <small>TELEMETRY</small>
                <strong>OBSERVE</strong>
                <span>READY</span>
              </div>

              <div className="lab-node lab-node-security">
                <span className="lab-node-light" />
                <small>POLICY</small>
                <strong>SECURE</strong>
                <span>READY</span>
              </div>
            </div>

            <div className="topology-legend">
              <span>
                <i className="legend-green" />
                VALIDATED
              </span>

              <span>
                <i className="legend-gray" />
                ARCHIVED
              </span>

              <span>
                <i className="legend-red" />
                SIGNAL
              </span>
            </div>
          </div>

          <div className="console-side">
            <div className="console-activity">
              <div className="console-panel-header">
                <span>ACTIVITY STREAM</span>
                <span>004 EVENTS</span>
              </div>

              <div className="activity-list">
                {activity.map((event) => (
                  <div
                    className="activity-event"
                    key={`${event.time}-${event.type}`}
                  >
                    <span className="activity-time">
                      {event.time}
                    </span>

                    <span className="activity-type">
                      {event.type}
                    </span>

                    <p>{event.message}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="console-security">
              <div className="console-panel-header">
                <span>PLATFORM SIGNALS</span>
                <span>STATUS</span>
              </div>

              <div className="signal-row">
                <span>INFRASTRUCTURE</span>
                <strong>VALIDATED</strong>
              </div>

              <div className="signal-row">
                <span>SECURITY</span>
                <strong>READY</strong>
              </div>

              <div className="signal-row">
                <span>OBSERVABILITY</span>
                <strong>READY</strong>
              </div>

              <div className="signal-row">
                <span>GUARDIAN</span>
                <strong className="signal-development">
                  DEVELOPMENT
                </strong>
              </div>
            </div>
          </div>
        </div>

        <div className="console-command">
          <span className="command-prefix">ZA@CLOUD-LAB:~$</span>

          <span className="command-text">
            platform status --project 001
          </span>

          <span className="command-cursor" />
        </div>
      </div>

      <div className="cloud-lab-footer">
        <span>ZA / CLOUD LAB</span>
        <div />
        <span>DEMO INTERFACE / 001</span>
      </div>
    </section>
  );
}