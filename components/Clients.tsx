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
      {/* Content */}
      <div className="relative z-10 text-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-purple-500 tracking-wide">
          Achievements & Activities
        </h2>
        <div className="max-w-6xl mx-auto grid gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Dynamically Render Accomplishments */}
          {accomplishments.map((item, index) => (
            <div
              key={index}
              className="relative group bg-neutral-900 text-white shadow-xl rounded-lg p-6 sm:p-8 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Animated Background Accent */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-10 transition duration-500"></div>

              {/* Accomplishment Content */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                {item.description}
              </p>

              {/* Accent Bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:h-2 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accomplishments;
