"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";

/* ---- Palette (kept in sync with the design tokens) ---- */
const STONE = "#57564f";
const STONE_DARK = "#3a3a33";
const MOSS = "#3d4a34";
const TEAL = "#4a6b6b";
const GROUND = "#20201d";
const FOG = "#1a1a18";

/* ---- Crumbling wall: a handful of weathered blocks (original geometry) ---- */
const WALL: Array<{ p: [number, number, number]; s: [number, number, number]; r: [number, number, number]; c?: string }> = [
  { p: [-1.5, 0.6, -0.2], s: [1.2, 1.2, 0.5], r: [0, 0, 0.03] },
  { p: [0.1, 0.9, -0.4], s: [1.6, 1.8, 0.5], r: [0, 0.05, -0.02] },
  { p: [1.5, 0.5, -0.1], s: [1.0, 1.0, 0.5], r: [0, -0.04, 0.04] },
  { p: [-0.6, 2.0, -0.3], s: [0.9, 0.5, 0.45], r: [0, 0.2, 0.05], c: STONE_DARK },
  { p: [0.8, 2.1, -0.2], s: [0.7, 0.4, 0.4], r: [0, -0.3, -0.06], c: STONE_DARK },
];

function RuinWall() {
  return (
    <group>
      {WALL.map((b, i) => (
        <mesh key={i} position={b.p} rotation={b.r}>
          <boxGeometry args={b.s} />
          <meshStandardMaterial color={b.c ?? STONE} roughness={1} metalness={0} />
        </mesh>
      ))}
      {/* moss caps on a couple of blocks */}
      <mesh position={[0.1, 1.86, -0.4]} rotation={[0, 0.05, -0.02]}>
        <boxGeometry args={[1.5, 0.12, 0.46]} />
        <meshStandardMaterial color={MOSS} roughness={1} />
      </mesh>
    </group>
  );
}

/* ---- Procedural vines draped over the wall (tube geometry along curves) ---- */
function Vines() {
  const curves = useMemo(
    () => [
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(-1.5, 1.7, -0.2),
        new THREE.Vector3(-1.1, 0.8, 0.15),
        new THREE.Vector3(-0.7, 0.15, 0.25),
      ]),
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.2, 2.6, -0.4),
        new THREE.Vector3(0.5, 1.4, 0.05),
        new THREE.Vector3(0.9, 0.25, 0.15),
      ]),
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(1.5, 1.5, -0.1),
        new THREE.Vector3(1.2, 0.7, 0.2),
        new THREE.Vector3(1.6, 0.1, 0.3),
      ]),
    ],
    [],
  );

  return (
    <group>
      {curves.map((c, i) => (
        <mesh key={i}>
          <tubeGeometry args={[c, 24, 0.03, 5, false]} />
          <meshStandardMaterial color={MOSS} roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
}

/* ---- Instanced grass blades with a subtle group sway ---- */
const GRASS_COUNT = 160;

function Grass() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useLayoutEffect(() => {
    if (!meshRef.current) return;
    const m = new THREE.Matrix4();
    const p = new THREE.Vector3();
    const q = new THREE.Quaternion();
    const s = new THREE.Vector3();
    for (let i = 0; i < GRASS_COUNT; i++) {
      const x = (Math.random() - 0.5) * 9;
      const z = Math.random() * 6 - 2.5;
      const hs = 0.6 + Math.random() * 0.8;
      p.set(x, hs * 0.5, z);
      q.setFromEuler(new THREE.Euler((Math.random() - 0.5) * 0.3, Math.random() * Math.PI, (Math.random() - 0.5) * 0.3));
      s.set(0.5 + Math.random() * 0.5, hs, 0.5 + Math.random() * 0.5);
      m.compose(p, q, s);
      meshRef.current.setMatrixAt(i, m);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.4) * 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, GRASS_COUNT]}>
        <coneGeometry args={[0.04, 1, 5]} />
        <meshStandardMaterial color={TEAL} roughness={1} />
      </instancedMesh>
    </group>
  );
}

/* ---- Slow ambient camera drift + subtle pointer parallax ---- */
function CameraRig() {
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const bx = Math.sin(t * 0.15) * 0.4 + state.pointer.x * 0.3;
    const by = 1.6 + Math.cos(t * 0.12) * 0.15 + state.pointer.y * 0.2;
    state.camera.position.set(bx, by, 5);
    state.camera.lookAt(0, 1.1, 0);
  });
  return null;
}

/**
 * The Last of Us-*inspired* hero scene: an overgrown ruin reclaimed by moss,
 * vines and grass, with drifting fireflies. All geometry is original/procedural.
 * Only mounted on desktop with motion allowed (see sections/Hero.tsx).
 */
export default function OvergrownRuin() {
  return (
    <div className="h-full w-full">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 1.6, 5], fov: 45 }} gl={{ antialias: true, powerPreference: "high-performance" }}>
        <color attach="background" args={[FOG]} />
        <fog attach="fog" args={[FOG, 6, 14]} />

        {/* Lighting: cool moss/teal ambient + warm rust key light */}
        <ambientLight color={TEAL} intensity={0.5} />
        <directionalLight position={[3, 5, 2]} color="#8b4a32" intensity={1.1} />
        <pointLight position={[-3, 2, -2]} color={MOSS} intensity={0.4} />

        <CameraRig />
        <RuinWall />
        <Vines />
        <Grass />

        {/* Ground */}
        <mesh rotation-x={-Math.PI / 2} position={[0, -0.01, 0]}>
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color={GROUND} roughness={1} />
        </mesh>

        {/* Fireflies / drifting spores */}
        <Sparkles count={70} scale={[8, 4, 6]} position={[0, 1.5, 0]} size={2.2} speed={0.3} color="#e8e4d8" opacity={0.7} />
      </Canvas>
    </div>
  );
}
