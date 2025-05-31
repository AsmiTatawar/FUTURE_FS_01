import React from "react";
import { FaGithub, FaExternalLinkAlt, FaCameraRetro, FaClock, FaDog, FaChartBar } from "react-icons/fa";

const projects = [
  {
    title: "LustreBooth",
    icon: <FaCameraRetro />,
    desc: "An interactive photo booth website with downloadable, customizable photo strips.",
    tech: "HTML, CSS, JavaScript",
    live: "https://asmitatawar.github.io/Lustrebooth/",
    github: "https://github.com/AsmiTatawar/Lustrebooth",
  },
  {
    title: "FocusFlare",
    icon: <FaClock />,
    desc: "Minimalist Pomodoro productivity app with ambient sounds and timers.",
    tech: "HTML, CSS, JavaScript, YouTube API",
    live: "https://asmitatawar.github.io/FocusFlare/",
    github: "https://github.com/AsmiTatawar/FocusFlare",
  },
  {
    title: "PawPalace",
    icon: <FaDog />,
    desc: "A pet care service marketplace with a built-in pet store and emergency vet services.",
    tech: "Node.js, HTML, Tailwind CSS, JavaScript, FireBase",
    live: "https://pawpalace-lake.vercel.app/",
    github: "https://github.com/Jidnyasa-P/PawPalace_-_A_pet_marketplace_service",
  },
  {
    title: "PlaceMate",
    icon: <FaChartBar />,
    desc: "A data analytics dashboard for visualizing student performance and placement trends.",
    tech: "HTML, CSS, JavaScript, Firebase, Excel, Tableau",
    live: "https://asmitatawar.github.io/PlaceMate/",
    github: "https://github.com/AsmiTatawar/PlaceMate",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
  {projects.map(({ title, icon, desc, tech, live, github }, idx) => (
    <div key={idx} className="project-card">
      <div className="project-card-inner">
        <div className="card-front">
          <div className="card-icon-title">
            <span className="project-icon">{icon}</span>
            <h3>{title}</h3>
          </div>
        </div>
        <div className="card-back">
          <p className="project-desc">{desc}</p>
          <p className="tech-stack">{tech}</p>
          <div className="links">
            <a href={live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
              <FaExternalLinkAlt />
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repo">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
<div className="section-divider"></div>
    </section>
  );
};

export default Projects;
