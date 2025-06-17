"use client";

import React, { useRef, useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/app/components/ui/hover-card";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import Image from "next/image";

import "@/app/styles/experience.css";

const experiences: JobExperience[] = [
  {
    company: "Synternet",
    role: "Frontend Developer",
    period: "2022 - Present",
    logo: "./experience/synternet.svg",
    description:
      "Led the development of responsive web applications using React, TypeScript, and modern CSS frameworks.",
    details: {
      title: "Investment",
      content:
        "Maximize your staking and re-staking rewards while maintaining composibility for DeFi applications.",
    },
  },
  {
    company: "GlobalPass",
    role: "Frontend Developer",
    period: "2019 - 2022",
    logo: "./experience/globalpass.svg",
    description:
      "Developed and maintained client websites and web applications.",
    details: {
      title: "Development",
      content:
        "Built responsive web applications with modern frameworks and best practices.",
    },
  },
  {
    company: "SolarShare",
    role: "Web Developer",
    period: "2017 - 2019",
    logo: "./experience/solarshare.svg",
    description: "Built and maintained company website and internal tools.",
    details: {
      title: "Web Development",
      content:
        "Created and maintained web applications using modern technologies.",
    },
  },
  {
    company: "CodeAcademy",
    role: "Web Developer",
    period: "2017 - 2019",
    logo: "./experience/codeacademy.svg",
    description: "Built and maintained company website and internal tools.",
    details: {
      title: "Web Development",
      content:
        "Created and maintained web applications using modern technologies.",
    },
  },
];

interface JobExperience {
  company: string;
  role: string;
  period: string;
  logo: string;
  description: string;
  details: {
    title: string;
    content: string;
  };
}

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="min-h-screen py-40 px-8 relative"
    >
      <div className="absolute inset-0 bg-[#1A1F2C] z-0"></div>

      <div className="container mx-auto relative z-10">
        <div className="logo-container">
          <div className="logo-description gap-4">
            <SectionTitle text="EXPERIENCE" />
            <p className="text-neon-purple/80 pixel-text text-sm leading-6">
              Debugging life through code, one job at a time.
            </p>
          </div>
          <div className="space-y-40 overflow-y-auto">
            {experiences.map((experience, index) => (
              <LogoItem key={index} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

function LogoItem({ experience }: { experience: JobExperience }) {
  const logoRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: logoRef,
    offset: ["start 0.6", "end 0.1"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1, 1, 0.8]
  );

  return (
    <motion.div
      className="relative"
      ref={logoRef}
      initial="rest"
      whileHover="hover"
      animate="rest"
      style={{ opacity, scale }}
    >
      <motion.div
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 z-0 rounded-md"
        style={{
          backgroundImage: "linear-gradient(90deg, #1A1F2C, #33C3F01A)",
        }}
      />

      <div className="flex items-center gap-8 pixel-corners p-8 relative z-10">
        <Image src={experience.logo} alt="logo" height={80} width={200} />

        <motion.div
          variants={{
            rest: { opacity: 0, y: 10 },
            hover: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4 }}
          className="max-w-sm rounded-md pixel-corners gap-1 flex-col items-start bg-neon-blue/20 backdrop-blur-sm border border-neon-blue/30 p-4 flex justify-center h-full"
        >
          <h2 className="text-[#76EEC6] pixel-text text-[10px] mb-2">
            PERIOD: {experience.period}
          </h2>
          <h3 className="text-[#76EEC6] pixel-text text-[10px] mb-2">
            ROLE: {experience.role}
          </h3>
          <p className="text-gray-300 text-xs pixel-text">
            {experience.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
