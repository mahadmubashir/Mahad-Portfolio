"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { Mesh } from "three";
import { accomplishments } from "@/data"; // Import accomplishments array

// Custom 3D Rotating Shape Component
const RotatingCube = () => {
  const meshRef = useRef<Mesh>(null);
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -2]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial
        color={"#CBACF9"}
        emissive="#cbacf9"
        emissiveIntensity={0.8}
        roughness={0.1}
      />
    </mesh>
  );
};

const Accomplishments = () => {
  return (
    <div
      id="accomplishments"
      className="relative py-16 px-6 sm:py-20 sm:px-12 text-white mt-20 rounded-3xl shadow-2xl overflow-hidden"
    >
      {/* Three.js Canvas Background */}
      {/* <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 10, 5]} intensity={1} />
          <Suspense fallback={null}>
            <RotatingCube />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Suspense>
        </Canvas>
      </div> */}

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-purple">
          Achievements & Activities
        </h2>
        <div className="max-w-4xl mx-auto grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2">
          {/* Dynamically Render Accomplishments */}
          {accomplishments.map((item, index) => (
            <div
              key={index}
              className="space-y-3 sm:space-y-6 text-base sm:text-lg leading-relaxed sm:leading-loose"
            >
              <li>
                <span className="font-semibold">{item.title}:</span>{" "}
                {item.description}
              </li>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accomplishments;
