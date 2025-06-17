"use client";

import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen w-full relative overflow-hidden flex items-center justify-center px-4"
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0 "
        style={{
          backgroundImage: `url('/hero-bg.png')`,
          filter: "brightness(0.4) contrast(1.1)",
          backgroundSize: "cover",
          imageRendering: "pixelated",
        }}
      />

      <div className="absolute inset-0 z-10 pixel-bg opacity-30"></div>

      <div
        className={`relative z-20 text-center transform ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        } transition-all duration-1000 ease-out`}
      >
        <div className="mb-8">
          <h2 className="pixel-text text-neon-blue mb-2 text-2xl">
            HELLO WORLD
          </h2>
          <h1 className="pixel-text text-4xl md:text-5xl lg:text-7xl text-white mb-4">
            FRONTEND <span className="text-neon-orange">DEVELOPER</span>
          </h1>
          <p className="text-gray-300 max-w-md mx-auto mb-8">
            I craft pixel-perfect interfaces and bring digital experiences to
            life
          </p>
        </div>

        <div className="pixel-corners bg-neon-purple/20 backdrop-blur-sm border-2 border-neon-purple p-8 inline-block animate-pixel-float">
          <div className="pixel-text text-2xl md:text-3xl text-white">
            PRESS <span className="text-neon-orange">START</span>
          </div>

          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-6 px-6 py-3 pixel-corners bg-neon-purple hover:bg-neon-purple/80 text-white pixel-text text-sm transition-all duration-300 hover:translate-y-[-2px]"
          >
            EXPLORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
