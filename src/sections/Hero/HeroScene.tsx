// src/sections/Hero/HeroScene.tsx
import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Box } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Floating geometric shapes representing the tech ecosystem.
 * Kept minimal and elegant — not distracting from the hero content.
 */
function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Gentle group rotation
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.05;
    }

    // Torus rotation
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.3;
      torusRef.current.rotation.z = t * 0.2;
    }

    // Sphere morph
    if (sphereRef.current) {
      sphereRef.current.rotation.y = t * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central distorted sphere — represents the core tech */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
        <Sphere ref={sphereRef} args={[1.2, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#3B82F6"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.1}
            metalness={0.8}
            opacity={0.15}
            transparent
            wireframe={false}
          />
        </Sphere>
      </Float>

      {/* Wireframe sphere overlay */}
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.5}>
        <Sphere args={[1.25, 32, 32]} position={[0, 0, 0]}>
          <meshBasicMaterial
            color="#3B82F6"
            wireframe
            transparent
            opacity={0.08}
          />
        </Sphere>
      </Float>

      {/* Orbiting torus */}
      <Float speed={2} rotationIntensity={1} floatIntensity={0.3}>
        <Torus
          ref={torusRef}
          args={[2, 0.015, 8, 100]}
          position={[0, 0, 0]}
          rotation={[Math.PI / 3, 0, 0]}
        >
          <meshBasicMaterial color="#7C3AED" transparent opacity={0.4} />
        </Torus>
      </Float>

      {/* Second orbiting torus — different angle */}
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.4}>
        <Torus
          args={[2.5, 0.012, 8, 100]}
          position={[0, 0, 0]}
          rotation={[Math.PI / 6, Math.PI / 4, 0]}
        >
          <meshBasicMaterial color="#3B82F6" transparent opacity={0.25} />
        </Torus>
      </Float>

      {/* Floating cubes — representing data/API nodes */}
      {[
        { pos: [3, 1, -1] as [number, number, number], scale: 0.15, color: '#60A5FA' },
        { pos: [-3, -1, -0.5] as [number, number, number], scale: 0.12, color: '#818CF8' },
        { pos: [2, -2, 0.5] as [number, number, number], scale: 0.1, color: '#A78BFA' },
        { pos: [-2, 2, -0.3] as [number, number, number], scale: 0.18, color: '#3B82F6' },
        { pos: [0, 3, -0.8] as [number, number, number], scale: 0.1, color: '#7C3AED' },
      ].map((cube, i) => (
        <Float
          key={i}
          speed={1 + i * 0.3}
          rotationIntensity={0.5 + i * 0.1}
          floatIntensity={0.5}
        >
          <Box args={[1, 1, 1]} position={cube.pos} scale={cube.scale}>
            <meshStandardMaterial
              color={cube.color}
              metalness={0.8}
              roughness={0.2}
              transparent
              opacity={0.7}
            />
          </Box>
        </Float>
      ))}
    </group>
  );
}

/**
 * Ambient lighting setup for the hero scene.
 */
function SceneLighting() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#3B82F6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7C3AED" />
      <directionalLight position={[0, 5, 5]} intensity={0.5} />
    </>
  );
}

/**
 * Hero 3D scene — rendered in a Canvas with proper sizing.
 * Wrapped in Suspense for graceful loading.
 */
export function HeroScene() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]} // Cap pixel ratio for performance
        performance={{ min: 0.5 }} // Adaptive quality
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <SceneLighting />
          <FloatingShapes />
        </Suspense>
      </Canvas>
    </div>
  );
}
