import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HoverFollowerBox = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    if (isHovering) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovering]);

  return (
    <div className="relative h-screen flex items-center justify-center bg-red-300 overflow-hidden">
      <div
        className="w-96 h-60 bg-white shadow-xl rounded-2xl flex items-center justify-center text-xl font-semibold relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        Hover over me
      </div>

      {isHovering && (
        <motion.div
          className="fixed z-50 pointer-events-none"
          animate={{
            x: position.x - 40,
            y: position.y - 40,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="w-20 h-20 rounded-full bg-black/70 text-white flex items-center justify-center text-xs font-medium">
            Visitor
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default HoverFollowerBox;
