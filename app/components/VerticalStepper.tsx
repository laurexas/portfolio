"use client";

import React, { useEffect, useState } from "react";
import { Circle } from "lucide-react";

import Image from "next/image";

interface StepperItem {
  id: string;
  label: string;
}

const VerticalStepper = () => {
  const [activeSection, setActiveSection] = useState("home");

  const sections: StepperItem[] = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
    { id: "tools", label: "TOOLS" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleStepClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activeIndex = sections.findIndex(
    (section) => section.id === activeSection
  );

  return (
    <div className="fixed left-8 top-0 h-full z-40 hidden  md:flex items-center pointer-events-none">
      <div className="h-[80%] flex flex-col justify-between relative pointer-events-auto">
        <div className="absolute left-[11px] top-4 bottom-4 w-2 border-l-4 border-dashed border-neon-purple/60 -z-10"></div>

        <div
          className="flex items-center absolute -left-4 w-12 h-12 transform -translate-y-1/2 transition-all duration-300"
          style={{
            top: `${activeIndex * (100 / (sections.length - 1))}%`,
          }}
        >
          <div className="w-16 h-16">
            <div className="pixel-corners bg-transparent p-0">
              <Image
                width={80}
                height={80}
                src="/duck-indicator.png"
                alt="Duck indicator"
                className="w-full h-full object-contain"
                style={{
                  imageRendering: "pixelated",
                  height: 80,
                  width: 80,
                }}
              />
            </div>
          </div>
        </div>

        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleStepClick(section.id)}
            className={`flex items-center transition-all duration-300 group ${
              activeSection === section.id
                ? "scale-110"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <div
              className={`w-6 h-6 z-[0] relative flex items-center justify-center `}
            ></div>

            <div
              className={`ml-3 px-2 py-1 pixel-text text-xs transition-all flex items-center justify-center ${
                activeSection === section.id
                  ? "text-neon-orange bg-pixel-dark/80 pixel-corners"
                  : "text-white/60 group-hover:text-white"
              }`}
            >
              {section.label}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default VerticalStepper;
