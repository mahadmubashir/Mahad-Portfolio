"use client";

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  pdfLink,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  pdfLink?: string;
}) => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["VueJS", "NuxtJS", "GraphQL"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img.startsWith("/") ? img : `/${img}`}
              alt={img}
              width={500} // Set the width
              height={300} // Set the height
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <Image
              src={spareImg.startsWith("/") ? spareImg : `/${spareImg}`} // Ensure spareImg path starts with a slash if it's a relative path
              alt={spareImg} // Using spareImg as the alt text, which should be the image name or description
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {id === 3 && (
            <div className="flex flex-col gap-5 z-10">
              <h2 className="text-3xl lg:text-4xl font-bold">
                About <span className="text-purple">Me</span>
              </h2>
              <p className="text-[#C1C2D3] text-sm md:text-base lg:text-lg leading-relaxed">
                I&apos;m a Python AI Engineer with 4+ years of professional
                software engineering experience and an MSc in Artificial
                Intelligence (Distinction) from the University of Surrey. I
                build and ship LLM-powered products for clients: RAG systems
                with LangChain, FAISS and OpenAI, real-time voice agents with
                LiveKit, Twilio, Deepgram and ElevenLabs, and fine-tuned models
                with LoRA and PyTorch, served through FastAPI on AWS.
              </p>
              <p className="text-[#C1C2D3] text-sm md:text-base lg:text-lg leading-relaxed">
                Based in Guildford, UK, with full UK right to work.
              </p>
              <a
                href="/Mahad Mubashir Beg Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagicButton
                  title="View My CV"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </div>
          )}

          {id === 1 && (
            <div className="absolute bottom-4 left-0 text-white p-4 font-bold">
              <div className="text-2xl lg:text-3xl">
                MSc Artificial Intelligence (Distinction) University of Surrey
              </div>
              <Link href="/Degree.pdf" target="_blank" passHref>
                <div className="mt-2 text-xl lg:text-2xl">
                  Bachelors of Computer Science
                  <br></br> 
                  LUMS
                </div>
              </Link>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>
              <a
                href="/Mahad Mubashir Beg Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagicButton
                  title={copied ? "Redirecting..." : "View My CV"}
                  position="right"
                  otherClasses="!bg-[#161A31]"
                  icon={<FaLocationArrow />}
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
