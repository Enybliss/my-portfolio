import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./static/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./static/Footer";

const App = () => {
  // State to track the current section
  const [currentSection, setCurrentSection] = useState("hero");

  return (
    <Router>
      {/* Pass setCurrentSection to Navbar so it can update the visible section */}
      <Navbar setCurrentSection={setCurrentSection} />
      
      {/* Conditionally render components based on the current section */}
      {currentSection === "hero" && <Hero />}
      {currentSection === "about" && <About />}
      {currentSection === "techstack" && <TechStack />}
      {currentSection === "projects" && <Projects />}
      {currentSection === "contact" && <Contact />}
      
      {/* Footer is outside of conditional rendering */}
      <Footer />
    </Router>
  );
};

export default App;
