"use client";

import { useState } from "react";

const platformNodes = [
  {
    number: "01",
    title: "DEPLOY",
    description:
      "Containerized applications deployed through Kubernetes infrastructure.",
    technology: "KUBERNETES",
    tools: ["Docker", "Kubernetes", "GitHub Actions"],
    className: "platform-node-deploy",
  },
  {
    number: "02",
    title: "AUTOMATE",
    description:
      "Infrastructure provisioning and delivery automated through declarative workflows.",
    technology: "TERRAFORM + CI/CD",
    tools: ["Terraform", "Infrastructure as Code", "CI/CD"],
    className: "platform-node-automate",
  },
  {
    number: "03",
    title: "OBSERVE",
    description:
      "Infrastructure health, application telemetry, logs, and operational signals.",
    technology: "OBSERVABILITY",
    tools: ["Prometheus", "Grafana", "Metrics"],
    className: "platform-node-observe",
  },
  {
    number: "04",
    title: "SECURE",
    description:
      "Identity, policy, workload protection, and Zero Trust cloud controls.",
    technology: "CLOUD SECURITY",
    tools: ["IAM", "RBAC", "Secrets", "Policy"],
    className: "platform-node-secure",
  },
  {
    number: "05",
    title: "OPTIMIZE",
    description:
      "Cloud usage and infrastructure cost visibility designed around FinOps.",
    technology: "FINOPS",
    tools: ["Budgets", "Cost Analysis", "Resource Optimization"],
    className: "platform-node-optimize",
  },
  {
    number: "06",
    title: "GUARDIAN",
    description:
      "AI-assisted operational intelligence for detecting and responding to cloud events.",
    technology: "AI OPERATIONS",
    tools: ["AI Operations", "MCP", "Cloud Events", "Diagnostics"],
    className: "platform-node-guardian",
  },
];

export default function PlatformOverview() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section className="platform-overview" id="architecture">
      <div className="platform-background-grid" aria-hidden="true" />

      <div className="platform-section-header">
        <div>
          <div className="section-eyebrow">
            <span className="section-index">02</span>
            <span className="section-line" />
            PLATFORM ARCHITECTURE
          </div>

          <h2>
            ONE PLATFORM.
            <br />
            <span>FULL CLOUD LIFECYCLE.</span>
          </h2>
        </div>

        <p>
          ZonedAccuracy brings infrastructure, automation, observability,
          security, cost intelligence, and AI-assisted operations into one
          cloud engineering architecture.
        </p>
      </div>

      <div
        className={`architecture-system ${
          activeNode ? "architecture-active" : ""
        }`}
      >
        <div className="architecture-axis architecture-axis-horizontal" />
        <div className="architecture-axis architecture-axis-vertical" />

        <div className="architecture-ring architecture-ring-one" />
        <div className="architecture-ring architecture-ring-two" />
        <div className="architecture-ring architecture-ring-three" />

        <div className="architecture-pulse architecture-pulse-one" />
        <div className="architecture-pulse architecture-pulse-two" />

        <div
          className={`platform-core ${
            activeNode ? "platform-core-active" : ""
          }`}
        >
          <div className="core-status">
            <span />
            SYSTEM ONLINE
          </div>

          <div className="core-globe" aria-hidden="true">
            <span className="core-latitude core-latitude-one" />
            <span className="core-latitude core-latitude-two" />
            <span className="core-latitude core-latitude-three" />

            <span className="core-longitude core-longitude-one" />
            <span className="core-longitude core-longitude-two" />

            <span className="core-axis-horizontal" />
            <span className="core-axis-vertical" />
          </div>

          <span className="core-label">ZONEDACCURACY</span>

          <strong>KUBERNETES</strong>

          <span className="core-subtitle">
            CLOUD CONTROL PLANE
          </span>
        </div>

        {platformNodes.map((node) => {
          const isActive = activeNode === node.title;

          return (
            <article
              className={`platform-node ${node.className} ${
                isActive ? "platform-node-active" : ""
              }`}
              key={node.title}
              onMouseEnter={() => setActiveNode(node.title)}
              onMouseLeave={() => setActiveNode(null)}
              onFocus={() => setActiveNode(node.title)}
              onBlur={() => setActiveNode(null)}
              tabIndex={0}
            >
              <div className="platform-node-top">
                <span className="platform-node-number">
                  {node.number}
                </span>

                <span className="platform-node-status">
                  {isActive ? "LINKED" : "ACTIVE"}
                </span>
              </div>

              <h3>{node.title}</h3>

              <p>{node.description}</p>

              <div className="platform-node-tools">
                {node.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>

              <div className="platform-node-footer">
                <span className="node-indicator" />
                {node.technology}
              </div>
            </article>
          );
        })}
      </div>

      <div className="platform-section-footer">
        <span>ZA / PLATFORM ARCHITECTURE</span>

        <div />

        <span>006 SYSTEMS</span>
      </div>
    </section>
  );
}