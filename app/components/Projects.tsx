"use client";

import React, { useRef } from "react";
import { MoreHorizontal } from "lucide-react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";

import SectionTitle from "./SectionTitle";

import "@/app/styles/projects.css";

interface Project {
  id: string;
  title: string;
  status: string;
  type: string;
  image: string;
  url?: string;
  description: string;
}

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const projects: Project[] = [
    {
      id: "1",
      title: "SolarShare Landing Page",
      status: "Done",
      type: "NextJs / NodeJs / Framer Motion",
      image: "/projects/hero.png",
      url: "https://solarshare.io",
      description:
        "Developed a high-converting, mobile-responsive landing page for SolarShare.io using React, Framer Motion, and Node.js—integrating animations, SEO, analytics, and heatmaps to enhance visual storytelling, track user behavior, and align UI/UX with business goals for scalable performance.",
    },
    {
      id: "2",
      title: "Solarshare Dashboard Page",
      status: "Done",
      type: "NextJS / NodeJS / Web3",
      image: "/projects/overview.png",
      url: "https://dashboard.solarshare.io/",
      description:
        "Developed a responsive Web3-enabled dashboard for SolarShare.io using React and Node.js, focusing on a seamless NFT purchase flow via MetaMask, with polished UI/UX, real-time charts, and backend logic to support secure and user-friendly solar NFT transactions.",
    },
    {
      id: "2",
      title: "Compete2Earn Mobile App",
      status: "In progress",
      type: "React Native / NodeJs / AdMob",
      image: "/projects/leaderboards.png",
      description:
        "Currently developing a cross-platform mobile app using React Native for iOS and Android, where users can join competitive game rooms, climb leaderboards, and earn passive income through integrated AdMob revenue sharing.",
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="flex flex-col min-h-screen py-24 lg:px-8 relative gap-32 overflow-clip"
    >
      <SectionTitle text="PROJECTS" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#12151E] to-pixel-dark z-0"></div>

      <motion.div
        style={{ y }}
        className="absolute top-10 left-10 w-16 h-16 bg-neon-orange/20 pixel-corners animate-pixel-float"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 150]) }}
        className="absolute top-32 right-20 w-12 h-12 bg-neon-purple/20 pixel-corners animate-pixel-float"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [80, -80]) }}
        className="absolute bottom-20 left-20 w-20 h-20 bg-neon-blue/20 pixel-corners animate-pixel-float"
      />

      <div className="container mx-auto relative z-10">
        <div className="mb-16">
          <SectionTitle text="PROJECTS" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="lg:pixel-corners lg:bg-pixel-dark/80 lg:backdrop-blur-sm lg:border-2 lg:border-neon-purple/30 lg:p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="pixel-text text-neon-purple text-lg">
                PROJECT DASHBOARD
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {projects.map((project, index) => (
                <a
                  key={project.id}
                  href={project.url ? project.url : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="pixel-corners bg-neon-blue/10 border border-neon-blue/30 p-4 cursor-pointer hover:bg-neon-blue/20 transition-colors relative group h-[500px]"
                  >
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreHorizontal className="h-4 w-4 text-gray-400" />
                    </div>

                    <div className="pixel-corners w-full h-72 bg-neon-orange/20 flex items-center justify-center mb-4 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover pixel-corners"
                        style={{ height: 500 }}
                      />
                    </div>

                    <div className="space-y-2">
                      <h4 className="pixel-text text-sm text-neon-orange font-bold">
                        {project.title.toUpperCase()}
                      </h4>
                      <p className="pixel-text text-xs text-gray-400">
                        {project.type.toUpperCase()}
                      </p>

                      <p className="pixel-text text-xs text-gray-300 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      <div className="mt-4">
                        <span
                          className={`pixel-text text-xs px-2 py-1 pixel-corners ${
                            project.status === "Completed"
                              ? "bg-green-500/20 text-green-400 border border-green-500/30"
                              : "bg-neon-orange/20 text-neon-orange border border-neon-orange/30"
                          }`}
                        >
                          {project.status.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
