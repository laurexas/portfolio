import React from "react";
import VerticalStepper from "../../portfolio-2/app/components/VerticalStepper";
import Hero from "../../portfolio-2/app/components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import Footer from "./components/Footer";

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
