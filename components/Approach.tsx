"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Approach = () => {
  const images = [
    "/AccImage1.jpeg",
    "/AccImage2.jpeg",
    "/AccImage3.jpeg",
    "/AccImage8.jpeg",
    "/AccImage17.jpeg",
    "/AccImage6.jpeg",
    "/AccImage10.jpeg",
    "/AccImage9.jpeg",
    "/MahadImage1.jpg",
  ];

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-20">
      <h1 className="text-center text-3xl md:text-5xl font-bold mb-8 md:mb-12">
        My <span className="text-purple-600">Accomplishments</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <Card key={index} src={src} />
        ))}
      </div>
    </section>
  );
};

const Card = ({ src }: { src: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative overflow-hidden rounded-lg shadow-lg group"
      style={{ aspectRatio: "16/9" }} // Enforce a fixed aspect ratio
    >
      <Image
        src={src}
        alt="Accomplishment"
        layout="fill" // Use fill to ensure the image covers the entire container
        objectFit="cover" // Maintain the image aspect ratio and cover the container
        className="group-hover:opacity-75 transition duration-300"
      />
    </motion.div>
  );
};

export default Approach;
