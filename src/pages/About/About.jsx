import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './About.css';
import BackButton from "../../../src/assets/BackButton/BackButton";

const About = () => {
  return (

    <div className="about__center">
      <BackButton />
      <div className="about__container">

        <div className="about__profile-picture">
        <img src="/portfolio_photo.jpg" alt="Profile" className="about__profile-picture" />
        </div>
        


        <div className="about__text">
          <h1>
            Hi, I am <span className="about__name">Yu Tung Chen.</span>
          </h1>
          <h2 className="about__role">A Front End Engineer.</h2>
          <p className="about__desc">
            Enthusiastic and motivated learner seeking to expand her knowledge. 
            Eager to contribute through hard work, attention to details and people skills. 
            Clear understanding of tasks at hand and a fast learner.
          </p>

          <div className="about__contact">

            <a 
              href="/Yu_Tung_Chen_2025_v4.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              Resume
            </a>

            <div className="about__social_links">
              <a 
                href="https://github.com/cytxbv" 
                aria-label="GitHub" 
                className="link link--icon"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/yu-tung-chen-ba95b022a/" 
                aria-label="LinkedIn" 
                className="link link--icon"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
    
  
  );
};

export default About;
