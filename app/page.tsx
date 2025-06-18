import React from "react";
import VerticalStepper from "./components/VerticalStepper";
import Hero from "./components/VerticalStepper";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

import Footer from "./components/Footer";
import dynamic from "next/dynamic";

const Tools = dynamic(() => import("@/app/components/Tools"), {
  ssr: false,
});

const Home = () => {
  return (
    <div className="bg-pixel-dark text-white">
      <VerticalStepper />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="tools">
        <Tools />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
