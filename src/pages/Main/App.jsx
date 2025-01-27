import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../../../src/assets/Navbar/Navbar";
import AnimatedText from "../../../src/assets/AnimatedText/AnimatedText";
import HomePage from "../../pages/Home/HomePage";
import About from "../../pages/About/About";
import Projects from "../../pages/Projects/Projects";
import Experiences from"../../pages/Experiences/Experiences";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experiences />} />
        <Route path="/" element={<HomePage />} />
        
      </Routes>
      
    </Router>
  );
}

export default App;
