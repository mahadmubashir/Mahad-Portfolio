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
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiCplusplus,
  SiFlask,
  SiDjango,
  SiWebrtc,
  SiTwilio,
  SiAmazonaws,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiRedis,
  SiApachekafka,
  SiRabbitmq,
  SiAwslambda,
  SiAmazonec2,
  SiAmazonrds,
  SiAmazons3,
  SiSolidity,
  SiEthereum,
  SiMeta,
} from "react-icons/si";
import {
  FaBrain,
  FaLink,
  FaSmile,
  FaSearch,
  FaProjectDiagram,
  FaObjectGroup,
  FaChartBar,
  FaLightbulb,
  FaVideo,
  FaPhoneAlt,
  FaServer,
  FaMicrophone,
  FaVolumeUp,
  FaInfinity,
  FaCogs,
  FaTools,
  FaHdd,
  FaBookOpen,
  FaCommentDots,
  FaSearchengin,
  FaSlidersH,
  FaEye,
  FaLanguage,
  FaLayerGroup,
} from "react-icons/fa";
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
  // AI/ML (brands without a react-icons logo use a generic icon)
  { name: "LangChain", icon: <FaLink color="#1DB954" /> },
  { name: "Hugging Face", icon: <FaSmile color="#FFD21E" /> },
  { name: "Groq LLaMA", icon: <SiMeta color="#0668E1" /> },
  { name: "PyTorch", icon: <SiPytorch color="#EE4C2C" /> },
  { name: "TensorFlow", icon: <SiTensorflow color="#FF6F00" /> },
  { name: "FAISS", icon: <FaSearch color="#0467DF" /> },
  { name: "scikit-learn", icon: <SiScikitlearn color="#F7931E" /> },
  { name: "UMAP", icon: <FaProjectDiagram color="#A78BFA" /> },
  { name: "HDBSCAN", icon: <FaObjectGroup color="#38BDF8" /> },
  { name: "SHAP", icon: <FaChartBar color="#FF0D57" /> },
  { name: "LIME", icon: <FaLightbulb color="#84CC16" /> },
  // Programming
  { name: "C/C++", icon: <SiCplusplus color="#00599C" /> },
  { name: "Flask", icon: <SiFlask color="#FFFFFF" /> },
  { name: "Django", icon: <SiDjango color="#44B78B" /> },
  { name: "Solidity", icon: <SiSolidity color="#FFFFFF" /> },
  { name: "Web3.js", icon: <SiEthereum color="#A6A9F5" /> },
  // Voice and telephony
  { name: "LiveKit", icon: <FaVideo color="#FFFFFF" /> },
  { name: "WebRTC", icon: <SiWebrtc color="#FFFFFF" /> },
  { name: "Twilio", icon: <SiTwilio color="#F22F46" /> },
  { name: "FreeSWITCH", icon: <FaPhoneAlt color="#2E9BD6" /> },
  { name: "FusionPBX", icon: <FaServer color="#4FA3D1" /> },
  { name: "Deepgram", icon: <FaMicrophone color="#13EF93" /> },
  { name: "ElevenLabs", icon: <FaVolumeUp color="#FFFFFF" /> },
  // Cloud and deployment
  { name: "AWS", icon: <SiAmazonaws color="#FF9900" /> },
  { name: "AWS Lambda", icon: <SiAwslambda color="#FF9900" /> },
  { name: "AWS EC2", icon: <SiAmazonec2 color="#FF9900" /> },
  { name: "AWS RDS", icon: <SiAmazonrds color="#527FFF" /> },
  { name: "AWS CodeBuild", icon: <FaTools color="#FF9900" /> },
  { name: "AWS EBS", icon: <FaHdd color="#FF9900" /> },
  { name: "AWS S3", icon: <SiAmazons3 color="#569A31" /> },
  { name: "CI/CD", icon: <FaInfinity color="#A78BFA" /> },
  { name: "Docker", icon: <SiDocker color="#2496ED" /> },
  { name: "Kubernetes", icon: <SiKubernetes color="#326CE5" /> },
  { name: "Gradio", icon: <FaCogs color="#F97316" /> },
  // Databases and messaging
  { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
  { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
  { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
  { name: "Redis", icon: <SiRedis color="#DC382D" /> },
  { name: "Kafka", icon: <SiApachekafka color="#FFFFFF" /> },
  { name: "RabbitMQ", icon: <SiRabbitmq color="#FF6600" /> },
  // AI specialisations
  { name: "RAG", icon: <FaBookOpen color="#A78BFA" /> },
  { name: "Prompt Engineering", icon: <FaCommentDots color="#38BDF8" /> },
  { name: "Vector Search", icon: <FaSearchengin color="#22D3EE" /> },
  { name: "LoRA Fine-Tuning", icon: <FaSlidersH color="#F472B6" /> },
  { name: "Computer Vision", icon: <FaEye color="#34D399" /> },
  { name: "NLP", icon: <FaLanguage color="#FBBF24" /> },
  { name: "Explainable AI", icon: <FaLayerGroup color="#F87171" /> },
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
