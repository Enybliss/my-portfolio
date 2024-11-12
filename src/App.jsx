import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./static/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./static/Footer";

const App = () => {
  // State to track the current section (this can be used for highlighting active links in Navbar)
  const [currentSection, setCurrentSection] = useState("home");

  return (
    <Router>
      {/* Pass currentSection and setCurrentSection to Navbar */}
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />

      {/* Render all sections so scrolling works */}
      <Home setCurrentSection={setCurrentSection} />
      <About setCurrentSection={setCurrentSection} />
      <TechStack setCurrentSection={setCurrentSection} />
      <Projects setCurrentSection={setCurrentSection} />
      <Contact setCurrentSection={setCurrentSection} />

      {/* Footer */}
      <Footer />
    </Router>
  );
};

export default App;
