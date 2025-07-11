import React from "react";
import "./Experiences.css";
import BackButton from "../../../src/assets/BackButton/BackButton"

const ExperienceCard = ({ dateRange, title, company, description, tags, links }) => {
  return (
    <div className="experience-card">
      
      <div className="experience-card__columns">
        <div className="date-range">{dateRange}</div>
        <div className="details">
          <h2 className="title">
            {title} <span className="company">&middot; {company}</span>
          </h2>
          <p className="description">{description}</p>
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          {links && (
            <div className="links">
              {links.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


const Experiences = () => {
  const experiences = [
    {
      dateRange: "Jul 2024 — Aug 2024",
      title: "Data Analytics Intern, Summer Internship Program",
      company: "UMC",
      description:
        "Applied data analytics to optimize semiconductor processes and collaborating on real-world projects to drive data-driven decision-making and innovation.",
      tags: ["Python", "Google Colab"],
    },
    {
      dateRange: "Jun 2023 — Aug 2023",
      title: "Software Engineer",
      company: "Sharker Technology",
      description: `
        • Offered experience with JavaScript, Flutter, and Node-Red.
        • Consistently met project deadlines by effectively managing time and prioritizing tasks.
        • Tuned IoT devices to boost performance.
      `,
      tags: [
        "JavaScript",
        "HTML & SCSS",
        "React",
        "Flutter",
        "Android Studio"
      ],
    },
    
    {
      dateRange: "Aug 2021 — Dec 2021 ",
      title: "HR",
      company: " Singapore Exchange SGX",
      description:`
        • Extensive experience in handling complex queries and managing communications within the HR
department
        • Leveraging strong problem-solving skills, attention to detail, and a foundation in information technology
        • Develop strong background in data management, process optimization, and technical support.
      `,
      tags: [],
      // links: [
      //   { name: "MusicKit.js", url: "#" },
      //   { name: "9to5Mac", url: "#" },
      //   { name: "The Verge", url: "#" },
      // ],
    },
  ];

  return (
    <div className="experiences">
      <h1 className="experience-title">My Experiences</h1>
      {experiences.map((experience, index) => (
        <ExperienceCard key={index} {...experience} />
      ))}
    </div>
  );
};

export default Experiences;