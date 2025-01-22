import React from "react";
import "./Projects.css";
import TrekAlert from "../../../public/trekalert6.png";
import StreamWave from "../../../public/streamWave4.png";
import Image2Latex from "../../../public/image2latex2.png";
import BackButton from "../../../src/assets/BackButton/BackButton";

const Projects = () => {
  const projectData = [
    {
      title: "TrekAlert",
      imgSrc: TrekAlert, 
      tags: ["Figma"],
      liveDemoLink: "https://www.figma.com/proto/OOFWMQnjmKUi2Gaol3oUVW/Hi-Fi-Prototype?page-id=0%3A1&node-id=73-136&node-type=frame&viewport=604%2C793%2C0.67&t=DCPgBevLEDIIMxTB-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=73%3A136&show-proto-sidebar=1",
    },
    {
      title: "Stream Wave",
      imgSrc: StreamWave,
      tags: ["Flutter", "Firebase"],
    },
    {
      title: "Image To LaTEX",
      imgSrc: Image2Latex,
      tags: ["YOLO", "Kaggle"],
      githubLink: "https://github.com/cytxbv/Image-to-LaTeX.git", 
    },
  ];

  return (
    <div className="projects-container">
      <BackButton />
      <h1 className="projects-title">Browse My Recent Projects</h1>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.imgSrc}
              alt={project.title}
              className="project-image"
            />
            <div className="project-details">
              <div className="details-left">
                <h2 className="project-title">{project.title}</h2>
                <div className="tags">
                  {project.tags &&
                    project.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))}
                </div>
              </div>
              <div className="details-right">
                {project.liveDemoLink && (
                  <a
                    href={project.liveDemoLink}
                    className="project-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    className="project-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
