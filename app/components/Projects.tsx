"use client";

import React, { useRef, useState } from "react";
import SectionTitle from "./SectionTitle";

import Image from "next/image";
import { motion, useScroll } from "framer-motion";

import "@/app/styles/projects.css";
import { MoreHorizontal, Plus } from "lucide-react";

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

  const projects: Project[] = [
    {
      id: "1",
      title: "SolarShare Landing Page",
      status: "Done",
      type: "NextJs",
      image: "/projects/overview.png",
      url: "https://solarshare.io",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, shopping cart, and payment integration.",
    },
    {
      id: "2",
      title: "Solarshare Dashboard UI Page",
      status: "Done",
      type: "NextJS / NodeJS / Web3",
      image: "/projects/overview.png",
      url: "https://dashboard.solarshare.io/",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, shopping cart, and payment integration.",
    },
    {
      id: "2",
      title: "Compete2Earn Mobile App",
      status: "In progress",
      type: "React Native",
      image: "/projects/overview.png",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, shopping cart, and payment integration.",
    },
  ];

  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="flex flex-col min-h-screen py-24 px-8 relative gap-32 overflow-clip"
    >
      <SectionTitle text="PROJECTS" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#12151E] to-pixel-dark z-0"></div>

      <div className="container mx-auto relative z-10">
        <div className="mb-16">
          <SectionTitle text="MY PROJECTS" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="pixel-corners bg-pixel-dark/80 backdrop-blur-sm border-2 border-neon-purple/30 p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="pixel-text text-neon-purple text-lg">
                PROJECT DASHBOARD
              </h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="pixel-corners bg-neon-blue/20 border border-neon-blue/50 px-4 py-2 flex items-center gap-2 hover:bg-neon-blue/30 transition-colors"
              >
                <Plus className="h-4 w-4 text-neon-blue" />
                <span className="pixel-text text-xs text-neon-blue">
                  ADD PROJECT
                </span>
              </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative pixel-corners h-80 bg-neon-purple/10 border-2 border-dashed border-neon-purple/40 p-6 flex flex-col items-center justify-center  cursor-pointer hover:bg-neon-purple/20 transition-colors group"
              >
                {hoveredProject && (
                  <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="absolute inset-0 z-10"
                  >
                    <img
                      src={hoveredProject}
                      alt={"cover picture"}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )}
              </motion.div>

              {projects.map((project, index) => (
                <a
                  href={project.url ? project.url : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    onHoverStart={() =>
                      setHoveredProject(project?.image || null)
                    }
                    onHoverEnd={() => setHoveredProject(null)}
                    className="pixel-corners bg-neon-blue/10 border border-neon-blue/30 p-6 cursor-pointer hover:bg-neon-blue/20 transition-colors relative group h-80"
                  >
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreHorizontal className="h-4 w-4 text-gray-400" />
                    </div>

                    <div className="pixel-corners w-full h-40 bg-neon-orange/20 flex items-center justify-center mb-4 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover pixel-corners"
                        style={{ imageRendering: "pixelated" }}
                      />
                    </div>

                    <div className="space-y-2">
                      <h4 className="pixel-text text-sm text-white font-bold">
                        {project.title.toUpperCase()}
                      </h4>
                      <p className="pixel-text text-xs text-gray-400">
                        {project.type.toUpperCase()}
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

                    {hoveredProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 pixel-corners bg-neon-blue/5 border border-neon-blue/50"
                      />
                    )}
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
