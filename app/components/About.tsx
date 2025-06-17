"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import "@/app/styles/about.css";

import SectionTitle from "./SectionTitle";
import { useRelativeMousePosition } from "../hooks/useMousePosition";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  const { x, y } = useRelativeMousePosition(maskRef);

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

  const size = isHovering ? 200 : 40;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="h-screen flex flex-col items-center justify-center p-8 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-pixel-dark to-[#1A1F2C] z-0"></div>
      <div className="container mx-auto relative z-10 py-20">
        <SectionTitle text="ABOUT ME" className="mb-16" />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div
              ref={maskRef}
              className="relative pixel-corners bg-neon-purple/10 backdrop-blur-sm border border-neon-purple/30 h-full"
            >
              <div className="relative flex flex-col w-full h-full">
                <h3 className="text-neon-purple pixel-text text-lg px-8 h-[80px] flex items-center">
                  WHO AM I
                </h3>
                <motion.div
                  className="mask"
                  animate={{
                    WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
                    WebkitMaskSize: `${size}px`,
                    transition: { type: "tween", ease: "backOut" },
                  }}
                >
                  <p
                    className="absolute p-8 left-0 pixel-text text-sm mb-4 mt-[65px]"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    Hello! I'm a passionate{" "}
                    <span className="text-neon-orange">frontend developer</span>{" "}
                    with a love for creating engaging and interactive user
                    experiences. With a focus on modern web technologies, I
                    build responsive, accessible, and performant web
                    applications.
                  </p>
                </motion.div>

                <motion.div className="content">
                  <p className="pixel-text text-sm p-8">
                    My journey in web development started X years ago, and since
                    then, I've been constantly learning and evolving my skills
                    to stay at the forefront of the industry. When I'm not
                    coding, you can find me exploring new technologies,
                    contributing to open-source projects, or enjoying outdoor
                    activities.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="pixel-corners bg-neon-blue/10 backdrop-blur-sm border border-neon-blue/30 p-8 flex items-center justify-center h-full">
              <div className="w-full h-64 lg:h-80 flex flex-col items-center justify-center">
                <div className="pixel-corners w-32 h-32 bg-neon-orange/20 relative animate-pixel-float mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="pixel-text text-neon-orange text-xs">
                      3D MODEL
                    </span>
                  </div>
                </div>
                <p className="text-center text-gray-400 pixel-text text-xs">
                  3D model placeholder
                </p>
                <p className="text-center text-gray-500 text-xs mt-2">
                  Will be replaced with custom 3D model
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
