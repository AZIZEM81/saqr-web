"use client";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { useMemo, useRef } from "react";

function Drone() {
  const group = useRef<THREE.Group>(null);

  const matBody = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#0f1210",
        metalness: 0.45,
        roughness: 0.35,
      }),
    []
  );

  const matAccent = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#6B8E23",
        emissive: new THREE.Color("#6B8E23"),
        emissiveIntensity: 0.25,
        metalness: 0.2,
        roughness: 0.35,
      }),
    []
  );

  const matGold = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#D4A84B",
        metalness: 0.65,
        roughness: 0.25,
      }),
    []
  );

  // Always follow cursor via state.pointer (reliable)
  useFrame((state, delta) => {
    if (!group.current) return;

    const tx = state.pointer.x; // [-1..1]
    const ty = state.pointer.y;

    const s = 1 - Math.pow(0.001, delta);

    //“flat” base rotation (top-down vibe)
    const baseX = -0.35; // tilt forward a bit
    const baseY = 0.55;  // slight yaw so it looks dynamic

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      baseY + tx * 0.55,
      s
    );

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      baseX + -ty * 0.35,
      s
    );

    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      tx * 0.10,
      s
    );

    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, tx * 0.25, s);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, ty * 0.18, s);
  });

  return (
    <group ref={group} scale={1.1}>
      {/* Body */}
      <mesh material={matBody}>
        <boxGeometry args={[1.4, 0.22, 0.6]} />
      </mesh>

      {/* Top */}
      <mesh position={[0, 0.16, 0]} material={matBody}>
        <boxGeometry args={[0.95, 0.14, 0.42]} />
      </mesh>

      {/* Front accent */}
      <mesh position={[0.66, 0.02, 0]} material={matAccent}>
        <boxGeometry args={[0.18, 0.11, 0.32]} />
      </mesh>

      {/* Camera */}
      <mesh position={[0.55, -0.1, 0]} material={matGold}>
        <sphereGeometry args={[0.12, 24, 24]} />
      </mesh>

      {/* Arms */}
      {[
        [0.55, 0, 0.33],
        [0.55, 0, -0.33],
        [-0.55, 0, 0.33],
        [-0.55, 0, -0.33],
      ].map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]} material={matBody}>
          <boxGeometry args={[0.7, 0.08, 0.12]} />
        </mesh>
      ))}

      {/* Motors */}
      {[
        [0.95, 0.06, 0.33],
        [0.95, 0.06, -0.33],
        [-0.95, 0.06, 0.33],
        [-0.95, 0.06, -0.33],
      ].map(([x, y, z], i) => (
        <group key={i} position={[x, y, z]}>
          <mesh material={matAccent}>
            <cylinderGeometry args={[0.08, 0.08, 0.12, 18]} />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.08, 0]} material={matGold}>
            <torusGeometry args={[0.18, 0.014, 12, 42]} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export default function DroneScene() {
  return (
    <div className="relative h-[520px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
      <div className="pointer-events-none absolute inset-0 opacity-[0.10] grid-background-fine" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#6B8E23]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#D4A84B]/12 blur-3xl" />
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.06]" />
<div
  className="absolute inset-0 opacity-[0.08]"
  style={{
    backgroundImage:
      "radial-gradient(circle at center, rgba(107,142,35,0.5) 1px, transparent 1px)",
    backgroundSize: "28px 28px",
  }}
/>
      <Canvas camera={{ position: [0, 0.35, 3.2], fov: 45 }}>
        <ambientLight intensity={0.55} />
        <directionalLight position={[3, 3, 2]} intensity={1.1} />
        <pointLight position={[-2, 1.5, 2]} intensity={0.6} color={"#D4A84B"} />

        <Float speed={1.4} rotationIntensity={0.12} floatIntensity={0.35}>
          <Drone />
        </Float>

        <Environment preset="city" />
      </Canvas>
      

      <div className="pointer-events-none absolute left-6 top-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-[#6B8E23]" />
          Interactive 3D • Move your cursor
        </div>
        <h2 className="mt-3 text-2xl font-semibold">Drone Simulation Technology</h2>
        <p className="mt-1 max-w-md text-sm text-white/60">
        </p>
      </div>
    </div>
  );
}