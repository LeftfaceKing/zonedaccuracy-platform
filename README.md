# ZonedAccuracy

**Cloud Infrastructure. Engineered with Precision.**

ZonedAccuracy is a cloud engineering platform and technical portfolio focused on cloud infrastructure, Kubernetes, DevOps automation, observability, security, SRE, and AI-assisted infrastructure.

The platform is built with Next.js and is containerized with Docker for deployment across local and cloud Kubernetes environments.

Production site: https://zonedaccuracy.com

---

## Platform Overview

ZonedAccuracy serves as both a cloud engineering portfolio and an evolving platform for demonstrating production-oriented infrastructure concepts.

Current areas of focus include:

- Cloud Infrastructure
- Kubernetes
- Docker
- Infrastructure as Code
- CI/CD
- Cloud Security
- Observability
- Site Reliability Engineering
- Multi-Cloud Architecture
- AI-Assisted Infrastructure
- FinOps

---

## Application Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 16 |
| Language | TypeScript |
| Styling | CSS / Tailwind CSS |
| 3D Visualization | Three.js / React Three Fiber |
| Containerization | Docker |
| Container Registry | Google Artifact Registry |
| Orchestration | Kubernetes |
| Cloud Kubernetes | Google Kubernetes Engine (GKE) |
| Production Web Hosting | Vercel |
| DNS / Domain | Cloudflare |
| Source Control | GitHub |

---

## Deployment Architecture

The ZonedAccuracy application supports multiple execution environments.

```text
Development
    |
    v
Next.js
npm run dev
    |
    v
Local Development Server
```

```text
Containerized Application
    |
    v
Docker
    |
    v
ZonedAccuracy Container Image
```

```text
Cloud Kubernetes Deployment
    |
    v
Docker Multi-Architecture Image
    |
    v
Google Artifact Registry
    |
    v
Google Kubernetes Engine
    |
    v
Kubernetes Deployment
    |
    v
ZonedAccuracy Pod
    |
    v
Kubernetes Service
```

The public production website currently remains deployed through Vercel, while GKE is used as a cloud Kubernetes deployment environment for infrastructure engineering and validation.

---

## Docker

Build the application container locally:

```bash
docker build -t zonedaccuracy-platform .
```

Run the container:

```bash
docker run --name zonedaccuracy-web -p 3001:3000 zonedaccuracy-platform
```

Then access:

```text
http://localhost:3001
```

The Docker image contains the production Next.js build and exposes the application on container port `3000`.

---

## Multi-Architecture Container Build

ZonedAccuracy is developed on Apple Silicon while the GKE deployment uses AMD64 infrastructure.

A multi-platform image can be built with Docker Buildx:

```bash
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t us-central1-docker.pkg.dev/PROJECT_ID/zonedaccuracy/zonedaccuracy-platform:latest \
  --push .
```

This allows the same application image to support both:

- `linux/arm64`
- `linux/amd64`

---

## Kubernetes

Kubernetes manifests are located in:

```text
k8s/
├── deployment.yaml
└── service.yaml
```

The Deployment includes:

- Kubernetes-managed application pods
- Container health checks
- Readiness probes
- Liveness probes
- CPU requests and limits
- Memory requests and limits
- Artifact Registry container image
- Controlled image pull behavior

Deploy the application:

```bash
kubectl apply -f k8s/
```

Check the workload:

```bash
kubectl get pods
kubectl get deployments
kubectl get services
```

---

## Google Kubernetes Engine

ZonedAccuracy has been successfully deployed to a Google Kubernetes Engine cluster.

The deployment workflow is:

```text
Source Code
    |
    v
Docker Buildx
    |
    v
Multi-Architecture Container
    |
    v
Google Artifact Registry
    |
    v
GKE Cluster
    |
    v
Kubernetes Deployment
    |
    v
Application Pod
    |
    v
Kubernetes Service
```

During deployment, the GKE node uses IAM authorization to retrieve the application image from Google Artifact Registry.

The deployment was validated with the application pod reaching:

```text
READY   STATUS
1/1     Running
```

For development/testing, the Kubernetes service can be forwarded locally:

```bash
kubectl port-forward service/zonedaccuracy-web-service 8080:80
```

Then access:

```text
http://localhost:8080
```

---

## Kubernetes Resource Management

The current GKE deployment is intentionally lightweight:

```yaml
resources:
  requests:
    memory: "128Mi"
    cpu: "50m"
  limits:
    memory: "512Mi"
    cpu: "500m"
```

This configuration allows the application to operate on a small Kubernetes environment while maintaining explicit resource controls.

---

## Health Monitoring

Kubernetes monitors the Next.js application with readiness and liveness probes.

### Readiness Probe

Determines when the application is ready to receive traffic.

```yaml
readinessProbe:
  httpGet:
    path: /
    port: 3000
```

### Liveness Probe

Determines whether the application remains healthy and should continue running.

```yaml
livenessProbe:
  httpGet:
    path: /
    port: 3000
```

---

## Deployment Troubleshooting

Building the GKE deployment required resolving several real infrastructure issues.

### Container Architecture

The initial local container was built on Apple Silicon as ARM64, while the GKE node architecture required AMD64 compatibility.

Resolution:

```text
Docker Buildx
→ linux/amd64
→ linux/arm64
→ Multi-platform manifest
```

### Kubernetes Scheduling

The initial workload could not schedule because the small GKE node had limited allocatable CPU after Kubernetes system workloads.

The application resource request was adjusted while maintaining explicit CPU and memory limits.

### Artifact Registry Authentication

GKE initially received a `403 Forbidden` response while attempting to retrieve the container image.

The GKE node service account was granted:

```text
roles/artifactregistry.reader
```

This allowed the Kubernetes node to securely retrieve the application image from Artifact Registry.

### Image Pull Configuration

The local Kubernetes deployment originally used:

```yaml
imagePullPolicy: Never
```

The GKE deployment requires the image to be retrieved from Artifact Registry:

```yaml
imagePullPolicy: Always
```

---

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## Cloud Engineering Projects

ZonedAccuracy is being developed alongside a series of cloud engineering projects covering:

1. Kubernetes Cloud Platform
2. Terraform Cloud Infrastructure
3. CI/CD DevOps Pipeline
4. Cloud Observability Platform
5. Cloud Security / Zero Trust
6. Guardian AI Infrastructure Agent
7. Multi-Cloud Architecture
8. FinOps Cloud Cost Management

These projects are designed to demonstrate the engineering practices used to build, secure, automate, observe, and operate modern cloud infrastructure.

---

## Repository Structure

```text
zonedaccuracy-platform/
├── app/
├── components/
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
├── public/
├── .dockerignore
├── .gitignore
├── Dockerfile
├── README.md
├── package.json
└── tsconfig.json
```

---

## Engineering Focus

ZonedAccuracy is built around a practical cloud engineering lifecycle:

```text
DESIGN
  ↓
BUILD
  ↓
CONTAINERIZE
  ↓
DEPLOY
  ↓
SECURE
  ↓
OBSERVE
  ↓
OPERATE
  ↓
IMPROVE
```

The objective is to demonstrate infrastructure engineering through working implementations rather than architecture diagrams alone.

---

## Author

**Philip Hebert III**

Cloud Engineering • DevOps • Kubernetes • Infrastructure Automation

GitHub: https://github.com/LeftfaceKing

Website: https://zonedaccuracy.com