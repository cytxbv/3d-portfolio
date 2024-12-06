import React from "react";
import "./Projects.css";

const Projects = () => {
  const projectData = [
    {
      
      title: "Car Showcase App",
      tech: ["React", "Node", "Express", "MongoDB"],
    },
    {
      
      title: "E-Commerce App",
      tech: ["React", "Node", "Express", "MongoDB"],
    },
    {
      
      title: "E-Commerce App",
      tech: ["React", "Node", "Express", "MongoDB"],
    },
    {
      
      title: "E-Commerce App",
      tech: ["React", "Node", "Express", "MongoDB"],
    },
    {
      
      title: "E-Commerce App",
      tech: ["React", "Node", "Express", "MongoDB"],
    },
    {
      
      title: "E-Commerce App",
      tech: ["React", "Node", "Express", "MongoDB"],
    },
  ];

  return (
    <div className="project-card-container">
      <h1 className="page-title">My Favorite Projects</h1>
      <ul className="cards">
        {projectData.map((project, index) => (
          <>
            <li>
              <div className="card">
                <img src={project.imgSrc} className="card__image" alt="" />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg
                      className="card__arc"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path />
                    </svg>
                    <img
                      className="card__thumb"
                      src={project.thumbSrc}
                      alt=""
                    />
                    <div className="card__header-text">
                      <h3 className="card__title">{project.title}</h3>
                      <div className="tech-used">
                        {project.tech.map((tech, index) => (
                          <span className="tech" key={index}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="buttons">
                    
                      
                      Link
                    
                    
                    
                    
                  </div>
                </div>
              </div>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
