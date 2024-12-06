import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./About.css";

function About() {
  return (
    <div className="about-me-card">
      <div className="about-me-group">
        <h1 className="about-me-title">About Me</h1>
        <div className="about-me-profile-section">
          <img
            className="about-me-profile-picture"
            
            
          />
          <div className="about-me-greetings">
            <span className="about-me-hi">Hi, I am </span>
            <span className="about-me-name"></span>

          </div>
        </div>
        <div className="about-me-description">
          <p>
            nblahsblashhlsda
          </p>
        </div>

        <div className="about-me-skills">
          <h2 className="skills-title">My Skills</h2>
          <div className="skills-wrapper">

          </div>
        </div>
      </div>
      <div className="about-canvas-container">
        <Canvas
          className="react-three-canvas"
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />

        </Canvas>
      </div>
    </div>
  );
}

export default About;
