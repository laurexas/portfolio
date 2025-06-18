"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import "@/app/styles/about.css";

import SectionTitle from "./SectionTitle";
import { useRelativeMousePosition } from "../hooks/useMousePosition";

import dynamic from "next/dynamic";

const ModelViewer = dynamic(() => import("@/app/components/ModelViewer"), {
  ssr: false,
  loading: () => <p>Loading 3D model...</p>,
});

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
      className="h-screen flex flex-col items-center justify-center  relative"
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
                <h3 className="text-neon-purple pixel-text text-lg px-8 h-[40px] md:h-[80px] flex items-end">
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
                    className="absolute text-neon-orange p-8 left-0 pixel-text text-[12px] md:text-sm mb-4 mt-[65px]"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    I'm driven by a deep curiosity for how people interact with
                    products—combining design, marketing, and development to
                    turn ideas into reality. I love understanding the human
                    logic behind great user experiences and constantly push to
                    bring meaningful digital concepts to life. Outside of work,
                    I split my time between Thailand and Japan—either training
                    at a Muay Thai gym or enjoying ramen in Tokyo, always
                    drawing inspiration from culture, discipline, and everyday
                    experiences.
                  </p>
                </motion.div>

                <motion.div className="content">
                  <p className="pixel-text text-xs md:text-sm p-8">
                    I'm a{" "}
                    <span className=" text-neon-blue ">software engineer</span>{" "}
                    with a background in blockchain startups and full-stack
                    product development. From building clean, tested frontend
                    code at Synterneet, to redesigning and rebuilding a KYC
                    platform from scratch, I’ve focused on delivering scalable,
                    user-centered solutions. At SolarShare.io, I lead
                    development to power a solar NFT marketplace. I work closely
                    1-on-1 with designers to bring concepts to life, and I’m
                    passionate about crafting immersive web experiences using
                    Framer Motion and Three.js.
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
            <div className="hidden lg:flex pixel-corners bg-neon-blue/10 backdrop-blur-sm border border-neon-blue/30 p-8  items-center justify-center h-full">
              <div className="w-full h-64 lg:h-80 flex flex-col items-center justify-center">
                <ModelViewer />

                <p className="text-center text-gray-400 pixel-text text-xs">
                  Ramen is more than food for me – it’s a reminder of my time in
                  Japan, where I found beauty in detail, calm in craft, and joy
                  in every bowl.
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
