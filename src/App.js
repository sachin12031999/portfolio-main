import React, { useState } from "react";
import { Element } from "react-scroll";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavItemClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="">
      <NavBar onNavItemClick={handleNavItemClick} />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="portfolio">
        <Portfolio />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <SocialLinks />
    </div>
  );
}

export default App;
