"use client";

import React, { useRef, useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import Image from "next/image";

import "@/app/styles/experience.css";

const experiences: JobExperience[] = [
  {
    company: "SolarShare",
    role: "Software Engineer",
    period: "2024 - 2025",
    logo: "./experience/solarshare.svg",
    description:
      "Took on a lead role in developing the SolarShare.io platform, a Web3-based NFT marketplace for solar panels in Brazil. Built a high-performance, SEO-optimized Next.js app with PWA support and integrated conversion tracking, heatmaps, and analytics to support growth and marketing efforts. Focused on creating polished, animated user experiences with Framer Motion, blending technical execution with strategic product thinking.",
  },
  {
    company: "GlobalPass",
    role: "Frontend Developer",
    period: "2022 - 2024",
    logo: "./experience/globalpass.svg",
    description:
      "Worked in a small agile team to redesign and improve a KYC integration widget, implementing a flexible theming system and pushing new features. Focused on debugging mobile responsiveness issues and enhancing cross-platform compatibility. Collaborated closely with design and backend teams to ensure smooth user experience and cohesive product delivery.",
  },
  {
    company: "Synternet",
    role: "Frontend Developer",
    period: "2019 - 2023",
    logo: "./experience/synternet.svg",
    description:
      "Developed robust, test-driven frontend features using React, Redux-Saga, and Jest within an agile team environment. Focused on delivering high-quality, maintainable code while creating visually engaging, data-driven interfaces with D3.js. Took ownership of user experience design, ensuring smooth, intuitive interactions and unique digital experiences across the platform.",
  },
  {
    company: "CodeAcademy",
    role: "Web Developer",
    period: "2018 - 2019",
    logo: "./experience/codeacademy.svg",
    description:
      "Guided students in building visually compelling, interactive websites using JavaScript and modern frontend technologies. Focused on teaching best practices in UI design, responsive layouts, and dynamic user experiences to help learners create strong, polished web projects.",
  },
];

interface JobExperience {
  company: string;
  role: string;
  period: string;
  logo: string;
  description: string;
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
      className="min-h-screen py-40 relative"
    >
      <div className="absolute inset-0 bg-[#1A1F2C] z-0"></div>

      <div className="container mx-auto relative z-10">
        <div className="logo-container flex flex-col lg:flex-row">
          <div className="logo-description relative lg:sticky pb-40 gap-4">
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

      <div className="flex flex-col lg:flex-row items-center gap-8 pixel-corners lg:p-8 relative z-10">
        <Image src={experience.logo} alt="logo" height={80} width={200} />

        <motion.div
          variants={{
            rest: { opacity: 1, y: 10 },
            hover: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4 }}
          className="max-w-lg rounded-md pixel-corners gap-1 flex-col items-start bg-neon-blue/20 backdrop-blur-sm border border-neon-blue/30 p-4 flex justify-center h-full"
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
