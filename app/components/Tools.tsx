"use client";

import React, { useRef, useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";

const technologies = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Figma",
  "React Native",
  "Redux",
  "Express",
  "Vite",
  "Framer Motion",
  "D3js",
  "Threejs",
  "Prisma",
  "PostgreSQL",
  "Webpack",
  "Tanstack Query",
  "Jest",
  "Styled Components",
  "Docker",
];

const Tools = () => {
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
      id="tools"
      ref={sectionRef}
      className="min-h-screen py-24 lg:px-8 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-pixel-dark to-[#12151E] z-0"></div>

      <div className="container mx-auto relative z-10">
        <div className="mb-16">
          <SectionTitle text="TOOLS" className="mb-16" />
        </div>

        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            These are the technologies I use to bring digital experiences to
            life. My toolkit is constantly evolving as I explore new ways to
            create efficient and engaging applications.
          </p>

          <div className="overflow-hidden relative py-10">
            <div className="marquee-container">
              <div className="marquee">
                {technologies.map((tech, index) => (
                  <div key={`tech-1-${index}`} className="mx-8">
                    <div className="px-6 py-4 pixel-corners bg-neon-purple/10 backdrop-blur-sm border border-neon-purple/30">
                      <span className="pixel-text text-2xl text-neon-purple">
                        {tech}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="marquee-container mt-10">
              <div className="marquee-reverse">
                {technologies.reverse().map((tech, index) => (
                  <div key={`tech-2-${index}`} className="mx-8">
                    <div className="px-6 py-4 pixel-corners bg-neon-orange/10 backdrop-blur-sm border border-neon-orange/30">
                      <span className="pixel-text text-2xl text-neon-orange">
                        {tech}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
