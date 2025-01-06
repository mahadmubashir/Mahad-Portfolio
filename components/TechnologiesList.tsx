"use client";

import React from "react";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiFastapi,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import { FaBrain } from "react-icons/fa";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const technologies = [
  { name: "ReactJS", icon: <FaReact color="#61DAFB" /> },
  { name: "Next.js", icon: <SiNextdotjs color="#000000" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
  { name: "Python", icon: <FaPython color="#3776AB" /> },
  { name: "FastAPI", icon: <SiFastapi color="#009688" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "RESTful APIs", icon: <FaNodeJs color="#00ADD8" /> },
  { name: "Express.js", icon: <FaNodeJs color="#000000" /> },
  { name: "Three.js", icon: <SiJavascript color="#000000" /> },
  { name: "Open AI", icon: <FaBrain color="#E535AB" /> },
];

const TechnologiesList = () => {
  return (
    <div className="py-20" id="technologies">
      <h1 className="heading text-center mb-10">
        <span className="text-purple">Technologies</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 w-32 h-32 border bg-slate-800  dark:border-slate-8000 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl mb-3">{tech.icon}</div>
            <p className="text-center text-sm font-medium text-white">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesList;
