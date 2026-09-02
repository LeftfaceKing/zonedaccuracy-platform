"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Line, OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

type ArchitectureNode = {
  id: string;
  title: string;
  subtitle: string;
  status: string;
  position: [number, number, number];
  accent?: "green" | "red";
};

const architectureNodes: ArchitectureNode[] = [
  {
    id: "observability",
    title: "OBSERVABILITY",
    subtitle: "PROMETHEUS / GRAFANA",
    status: "READY",
    position: [0, 3.1, -0.7],
  },
  {
    id: "security",
    title: "SECURITY",
    subtitle: "IAM / ZERO TRUST",
    status: "READY",
    position: [-4.1, 0.4, 0.6],
  },
  {
    id: "guardian",
    title: "GUARDIAN",
    subtitle: "AI OPERATIONS",
    status: "DEVELOPMENT",
    position: [4.1, 0.5, 0.7],
    accent: "red",
  },
  {
    id: "terraform",
    title: "TERRAFORM",
    subtitle: "INFRASTRUCTURE AS CODE",
    status: "DEVELOPMENT",
    position: [0, -3.1, -0.4],
  },
  {
    id: "cicd",
    title: "CI / CD",
    subtitle: "AUTOMATION PIPELINE",
    status: "PLANNED",
    position: [-3.2, -2.2, -1.7],
  },
  {
    id: "finops",
    title: "FINOPS",
    subtitle: "CLOUD COST",
    status: "PLANNED",
    position: [3.25, -2.15, -1.5],
  },
];

function KubernetesCore() {
  const group = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.12;
      group.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.7) * 0.06;
    }

    if (ring.current) {
      ring.current.rotation.z += delta * 0.12;
    }
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.15, 2]} />

        <meshPhysicalMaterial
          color="#071007"
          transparent
          opacity={0.55}
          roughness={0.3}
          metalness={0.35}
          transmission={0.08}
        />
      </mesh>

      <mesh scale={1.012}>
        <icosahedronGeometry args={[1.15, 2]} />

        <meshBasicMaterial
          color="#98ff3d"
          wireframe
          transparent
          opacity={0.45}
        />
      </mesh>

      <mesh
        ref={ring}
        rotation={[Math.PI / 2.2, 0.2, 0]}
      >
        <torusGeometry args={[1.42, 0.014, 10, 130]} />

        <meshBasicMaterial
          color="#98ff3d"
          transparent
          opacity={0.7}
        />
      </mesh>

      <mesh rotation={[0.45, 0.25, 0.15]}>
        <torusGeometry args={[1.58, 0.012, 10, 130]} />

        <meshBasicMaterial
          color="#ff2a1f"
          transparent
          opacity={0.72}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[0.075, 18, 18]} />
        <meshBasicMaterial color="#ff2a1f" />
      </mesh>

      <Html
        center
        position={[0, 0, 1.3]}
        distanceFactor={7}
        style={{
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        <div className="za3d-core-label">
          <span>CONTROL PLANE</span>
          <strong>KUBERNETES</strong>
          <small>PROJECT / 001</small>
        </div>
      </Html>
    </group>
  );
}

function ArchitectureNode({
  node,
}: {
  node: ArchitectureNode;
}) {
  const [hovered, setHovered] = useState(false);
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;

    const floating =
      Math.sin(
        state.clock.elapsedTime * 0.8 +
          node.position[0] +
          node.position[1],
      ) * 0.045;

    group.current.position.y =
      node.position[1] + floating;

    const targetScale = hovered ? 1.16 : 1;

    group.current.scale.lerp(
      new THREE.Vector3(
        targetScale,
        targetScale,
        targetScale,
      ),
      0.09,
    );
  });

  const nodeColor =
    node.accent === "red"
      ? "#ff2a1f"
      : "#98ff3d";

  return (
    <group
      ref={group}
      position={node.position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <mesh>
        <sphereGeometry
          args={[
            hovered ? 0.19 : 0.15,
            20,
            20,
          ]}
        />

        <meshBasicMaterial color={nodeColor} />
      </mesh>

      <mesh scale={1.8}>
        <sphereGeometry args={[0.17, 18, 18]} />

        <meshBasicMaterial
          color={nodeColor}
          transparent
          opacity={hovered ? 0.1 : 0.035}
        />
      </mesh>

      <Html
        center
        position={[
          node.position[0] < 0
            ? -1.25
            : node.position[0] > 0
              ? 1.25
              : 0,
          node.position[0] === 0
            ? node.position[1] > 0
              ? 0.55
              : -0.65
            : 0,
          0,
        ]}
        distanceFactor={8}
        style={{
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        <div
          className={
            hovered
              ? "za3d-node-label za3d-node-label-active"
              : "za3d-node-label"
          }
        >
          <span>{node.subtitle}</span>

          <strong>{node.title}</strong>

          <small
            className={
              node.accent === "red"
                ? "za3d-status-red"
                : ""
            }
          >
            {hovered ? "LINKED" : node.status}
          </small>
        </div>
      </Html>
    </group>
  );
}

function NetworkConnections() {
  return (
    <>
      {architectureNodes.map((node) => (
        <Line
          key={node.id}
          points={[
            [0, 0, 0],
            node.position,
          ]}
          color={
            node.accent === "red"
              ? "#ff2a1f"
              : "#98ff3d"
          }
          lineWidth={0.7}
          transparent
          opacity={
            node.accent === "red"
              ? 0.25
              : 0.22
          }
        />
      ))}

      <Line
        points={[
          architectureNodes[0].position,
          architectureNodes[1].position,
        ]}
        color="#98ff3d"
        lineWidth={0.35}
        transparent
        opacity={0.1}
      />

      <Line
        points={[
          architectureNodes[0].position,
          architectureNodes[2].position,
        ]}
        color="#98ff3d"
        lineWidth={0.35}
        transparent
        opacity={0.1}
      />

      <Line
        points={[
          architectureNodes[3].position,
          architectureNodes[4].position,
        ]}
        color="#98ff3d"
        lineWidth={0.35}
        transparent
        opacity={0.1}
      />

      <Line
        points={[
          architectureNodes[3].position,
          architectureNodes[5].position,
        ]}
        color="#98ff3d"
        lineWidth={0.35}
        transparent
        opacity={0.1}
      />
    </>
  );
}

function DataPacket({
  start,
  end,
  delay,
  color = "#ff2a1f",
}: {
  start: THREE.Vector3;
  end: THREE.Vector3;
  delay: number;
  color?: string;
}) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;

    const duration = 3.2;

    const progress =
      ((state.clock.elapsedTime + delay) %
        duration) /
      duration;

    mesh.current.position.lerpVectors(
      start,
      end,
      progress,
    );
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[0.045, 12, 12]} />

      <meshBasicMaterial color={color} />
    </mesh>
  );
}

function Scene() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.y =
      THREE.MathUtils.lerp(
        group.current.rotation.y,
        state.pointer.x * 0.12,
        0.025,
      );

    group.current.rotation.x =
      THREE.MathUtils.lerp(
        group.current.rotation.x,
        -state.pointer.y * 0.065,
        0.025,
      );
  });

  return (
    <>
      <ambientLight intensity={1.2} />

      <pointLight
        position={[0, 4, 6]}
        color="#98ff3d"
        intensity={12}
      />

      <pointLight
        position={[4, 0, 5]}
        color="#ff2a1f"
        intensity={7}
      />

      <group ref={group}>
        <NetworkConnections />

        <KubernetesCore />

        {architectureNodes.map((node) => (
          <ArchitectureNode
            key={node.id}
            node={node}
          />
        ))}
      <DataPacket
        start={new THREE.Vector3(0, 0, 0)}
        end={
          new THREE.Vector3(
            ...architectureNodes[0].position,
          )
        }
        delay={0}
        color="#98ff3d"
      />

      <DataPacket
        start={new THREE.Vector3(0, 0, 0)}
        end={
          new THREE.Vector3(
            ...architectureNodes[1].position,
          )
        }
        delay={0.7}
        color="#98ff3d"
      />

      <DataPacket
        start={new THREE.Vector3(0, 0, 0)}
        end={
          new THREE.Vector3(
            ...architectureNodes[3].position,
          )
        }
        delay={1.4}
        color="#98ff3d"
      />

      <DataPacket
        start={new THREE.Vector3(0, 0, 0)}
        end={
          new THREE.Vector3(
            ...architectureNodes[4].position,
          )
        }
        delay={2.1}
        color="#98ff3d"
      />

      <DataPacket
        start={new THREE.Vector3(0, 0, 0)}
        end={
          new THREE.Vector3(
            ...architectureNodes[5].position,
          )
        }
        delay={2.8}
        color="#98ff3d"
      />

      <DataPacket
        start={new THREE.Vector3(0, 0, 0)}
        end={
          new THREE.Vector3(
            ...architectureNodes[2].position,
          )
        }
        delay={0}
        color="#ff2a1f"
      />

      <DataPacket
        start={new THREE.Vector3(0, 0, 0)}
        end={
          new THREE.Vector3(
            ...architectureNodes[2].position,
          )
        }
        delay={0.35}
        color="#ff2a1f"
      />
      </group>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        rotateSpeed={0.28}
        minPolarAngle={Math.PI / 2.3}
        maxPolarAngle={Math.PI / 1.75}
      />
    </>
  );
}

export default function Platform3D() {
  return (
    <section
      className="za3d-section"
      id="architecture"
    >
      <div
        className="za3d-grid"
        aria-hidden="true"
      />

      <div className="za3d-header">
        <div>
          <div className="section-eyebrow">
            <span className="section-index">
              07
            </span>

            <span className="section-line" />

            3D ARCHITECTURE
          </div>

          <h2>
            INFRASTRUCTURE.
            <br />

            <span>CONNECTED IN SPACE.</span>
          </h2>
        </div>

        <div className="za3d-description">
          <span className="za3d-status">
            <span />
            INTERACTIVE MODEL
          </span>

          <p>
            A three-dimensional view of the
            ZonedAccuracy cloud architecture.
            Kubernetes operates as the central
            control plane, connected to automation,
            observability, security, FinOps, and
            Guardian AI operations.
          </p>
        </div>
      </div>

      <div className="za3d-stage">
        <div className="za3d-topbar">
          <div>
            <span className="za3d-green-dot" />
            ZA / ARCHITECTURE / 001
          </div>

          <div className="za3d-controls">
            <span>MOVE / PARALLAX</span>
            <span>DRAG / ROTATE</span>
            <span>HOVER / INSPECT</span>
          </div>
        </div>

        <div className="za3d-canvas">
          <Canvas
            camera={{
              position: [0, 0.15, 10.7],
              fov: 45,
            }}
            dpr={[1, 1.7]}
          >
            <Scene />
          </Canvas>

          <div
            className="za3d-crosshair"
            aria-hidden="true"
          >
            <span />
          </div>

          <div className="za3d-coordinate za3d-coordinate-left">
            X / -04.72
            <br />
            Y / +01.33
            <br />
            Z / -00.91
          </div>

          <div className="za3d-coordinate za3d-coordinate-right">
            MODEL / CLOUD
            <br />
            CONTROL / K8S
            <br />
            STATE / DEMO
          </div>
        </div>

        <div className="za3d-bottom">
          <span>
            CENTRAL NODE / KUBERNETES
          </span>

          <div />

          <span>
            ZA / CLOUD SYSTEM / 3D
          </span>
        </div>
      </div>
    </section>
  );
}