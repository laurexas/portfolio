"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface SectionTitleProps {
  text: string;
  className?: string;
}

const SectionTitle = ({ text, className }: SectionTitleProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );

  return (
    <div ref={containerRef} className={`relative ${className} `}>
      <h2 className="pixel-text text-3xl md:text-4xl lg:text-5xl text-neon-purple opacity-30 text-center">
        {text}
      </h2>

      <motion.h2
        style={{ clipPath }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 20,
          mass: 1,
        }}
        className="pixel-text text-3xl md:text-4xl lg:text-5xl text-neon-purple absolute top-0 left-0 w-full text-center will-change-[clip-path]"
      >
        {text}
      </motion.h2>
    </div>
  );
};

export default SectionTitle;
