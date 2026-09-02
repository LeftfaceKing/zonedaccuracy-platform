const guardianEvents = [
  {
    time: "00:01",
    source: "K8S",
    message: "Workload health signal received",
  },
  {
    time: "00:02",
    source: "SECURITY",
    message: "Identity policy context attached",
  },
  {
    time: "00:03",
    source: "COST",
    message: "Resource usage pattern evaluated",
  },
  {
    time: "00:04",
    source: "GUARDIAN",
    message: "Diagnostic recommendation generated",
  },
];

const guardianCapabilities = [
  "Infrastructure diagnostics",
  "Cloud event analysis",
  "Kubernetes troubleshooting",
  "Security signal review",
  "Cost anomaly analysis",
  "MCP / tool integration",
];

export default function Guardian() {
  return (
    <section className="guardian-section" id="guardian">
      <div className="guardian-grid" aria-hidden="true" />

      <div className="guardian-header">
        <div>
          <div className="section-eyebrow">
            <span className="section-index">06</span>
            <span className="section-line" />
            GUARDIAN
          </div>

          <h2>
            AI OPERATIONS.
            <br />
            <span>INFRASTRUCTURE AWARE.</span>
          </h2>
        </div>

        <div className="guardian-header-copy">
          <span className="guardian-development-status">
            <span />
            IN DEVELOPMENT
          </span>

          <p>
            Guardian is the planned intelligent operations layer for
            ZonedAccuracy, designed to analyze infrastructure signals,
            correlate cloud context, assist with diagnostics, and recommend
            operational actions.
          </p>
        </div>
      </div>

      <div className="guardian-console">
        <div className="guardian-console-topbar">
          <div className="guardian-console-title">
            <span className="guardian-red-light" />
            ZA / GUARDIAN / OPERATIONS INTERFACE
          </div>

          <div className="guardian-console-meta">
            <span>MODE / DEVELOPMENT</span>
            <span>AGENT / GUARDIAN</span>
            <span>STATE / STANDBY</span>
          </div>
        </div>

        <div className="guardian-workspace">
          <div className="guardian-events-panel">
            <div className="guardian-panel-header">
              <span>EVENT STREAM</span>
              <span>004 SIGNALS</span>
            </div>

            <div className="guardian-events">
              {guardianEvents.map((event) => (
                <article
                  className="guardian-event"
                  key={`${event.time}-${event.source}`}
                >
                  <span className="guardian-event-time">
                    {event.time}
                  </span>

                  <span className="guardian-event-source">
                    {event.source}
                  </span>

                  <p>{event.message}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="guardian-core-panel">
            <div className="guardian-panel-header">
              <span>INTELLIGENCE CORE</span>
              <span>ZA / AI / 001</span>
            </div>

            <div className="guardian-core">
              <div className="guardian-orbit guardian-orbit-one" />
              <div className="guardian-orbit guardian-orbit-two" />
              <div className="guardian-orbit guardian-orbit-three" />

              <div className="guardian-core-node">
                <span className="guardian-core-status">
                  ANALYSIS READY
                </span>

                <strong>GUARDIAN</strong>

                <small>
                  AI OPERATIONS AGENT
                </small>
              </div>

              <div className="guardian-signal guardian-signal-top">
                EVENT
              </div>

              <div className="guardian-signal guardian-signal-right">
                CONTEXT
              </div>

              <div className="guardian-signal guardian-signal-bottom">
                ACTION
              </div>

              <div className="guardian-signal guardian-signal-left">
                DIAGNOSE
              </div>
            </div>

            <div className="guardian-pipeline">
              <span>EVENT</span>
              <i>→</i>
              <span>ANALYZE</span>
              <i>→</i>
              <span>DIAGNOSE</span>
              <i>→</i>
              <span>RECOMMEND</span>
            </div>
          </div>

          <div className="guardian-action-panel">
            <div className="guardian-panel-header">
              <span>RECOMMENDED ACTION</span>
              <span>PREVIEW</span>
            </div>

            <div className="guardian-recommendation">
              <span className="guardian-recommendation-label">
                INCIDENT / 001
              </span>

              <h3>
                Review workload health before scaling.
              </h3>

              <p>
                Guardian would combine Kubernetes health, recent deployment
                events, policy context, and cost signals before recommending
                an operational response.
              </p>

              <div className="guardian-confidence">
                <span>CONFIDENCE</span>

                <div className="guardian-confidence-bar">
                  <span />
                </div>

                <strong>DEMO</strong>
              </div>
            </div>

            <div className="guardian-action-list">
              <div>
                <span>01</span>
                <strong>Inspect workload state</strong>
              </div>

              <div>
                <span>02</span>
                <strong>Check recent deployment events</strong>
              </div>

              <div>
                <span>03</span>
                <strong>Review policy context</strong>
              </div>

              <div>
                <span>04</span>
                <strong>Recommend response</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="guardian-command-line">
          <span className="guardian-command-prefix">
            ZA@GUARDIAN:~$
          </span>

          <span>
            analyze infrastructure --context project-001
          </span>

          <span className="guardian-command-cursor" />
        </div>
      </div>

      <div className="guardian-capabilities">
        <div className="guardian-capabilities-header">
          <span>PLANNED CAPABILITIES</span>
          <span>006</span>
        </div>

        <div className="guardian-capability-grid">
          {guardianCapabilities.map((capability, index) => (
            <div
              className="guardian-capability"
              key={capability}
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <strong>{capability}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className="guardian-footer">
        <span>ZA / GUARDIAN</span>
        <div />
        <span>AI OPERATIONS / DEVELOPMENT</span>
      </div>
    </section>
  );
}