"use client";
import React, { useEffect, useRef } from "react";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import * as THREE from "three";

const Footer = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return; // Ensure the canvas is available

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 5;

    // Add a 3D object with neon shader
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const neonMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(0x9b30ff) },
      },
      vertexShader: `
        varying vec3 vPosition;
        void main() {
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uColor;
        varying vec3 vPosition;

        void main() {
          float intensity = 0.5 + 0.5 * sin(uTime + length(vPosition.xy));
          vec3 glow = uColor * intensity;
          gl_FragColor = vec4(glow, 1.0);
        }
      `,
    });
    const sphere = new THREE.Mesh(geometry, neonMaterial);
    scene.add(sphere);

    // Lighting for subtle reflection
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const pointLight = new THREE.PointLight(0xffffff, 0.8);
    pointLight.position.set(5, 5, 5);
    scene.add(ambientLight, pointLight);

    // Animation and mouse interaction
    const mouse = { x: 0, y: 0 };
    const animate = (time: number) => {
      requestAnimationFrame(animate);

      // Update sphere rotation
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;

      // Interactive movement
      sphere.position.x = mouse.x * 0.5;
      sphere.position.y = mouse.y * 0.5;

      // Update time for shader
      neonMaterial.uniforms.uTime.value = time * 0.001;

      renderer.render(scene, camera);
    };

    animate(0);

    // Handle mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Handle resizing
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <footer className="relative w-full pb-10 mb-[100px] md:mb-5" id="contact">
      {/* Three.js Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      ></canvas>

      <div className="relative z-10 flex flex-col items-center">
        {/* <h1 className="heading lg:max-w-[45vw] text-center text-white">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1> */}
        {/* <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p> */}
        <a href="mailto:mahadlgs@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="relative z-10 flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-white-300">
          Copyright © 2025 Mahad
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a
              key={profile.id}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg border border-white hover:scale-110 transition-transform">
                <img
                  src={profile.img}
                  width={20}
                  height={20}
                  alt="Social Media Icon"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
