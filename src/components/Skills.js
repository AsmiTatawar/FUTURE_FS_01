import React, { useState } from "react";
import {
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaTools,
  FaLanguage,
  FaPaintBrush,
  FaUsers,
  FaHandsHelping,
  FaComments,
  FaBrain,
  FaLightbulb,
  FaClock,
} from "react-icons/fa";

const technicalSkills = [
  { icon: <FaCode />, title: "Programming", desc: "C, C++, Python, PHP" },
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    desc: "React, CSS, JavaScript, HTML, Tailwind CSS",
  },
  {
    icon: <FaDatabase />,
    title: "Data Analytics",
    desc: "Excel, MySQL, Tableau, Data Analysis",
  },
  {
    icon: <FaTools />,
    title: "Tools",
    desc: "Git, GitHub, VS Code, MATLAB, Firebase, API",
  },
  { icon: <FaLanguage />, title: "Languages", desc: "English, Hindi, Marathi, Korean" },
  { icon: <FaPaintBrush />, title: "UI/UX Design", desc: "Canva, Adobe XD" },
];

const softSkills = [
  { icon: <FaUsers />, title: "Leadership", desc: "Inspiring and guiding teams" },
  { icon: <FaHandsHelping />, title: "Teamwork & Collaboration", desc: "Working well with others" },
  { icon: <FaComments />, title: "Communication", desc: "Clear and effective exchange" },
  { icon: <FaBrain />, title: "Analytical & Critical Thinking", desc: "Solving complex problems" },
  { icon: <FaLightbulb />, title: "Problem Solving", desc: "Finding effective solutions" },
  { icon: <FaClock />, title: "Time Management", desc: "Organizing and prioritizing tasks" },
];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("technical");

  const skillsToShow = activeTab === "technical" ? technicalSkills : softSkills;

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>

      <div className="tab-buttons">
        <button
          className={activeTab === "technical" ? "active" : ""}
          onClick={() => setActiveTab("technical")}
        >
          Technical Skills
        </button>
        <button
          className={activeTab === "soft" ? "active" : ""}
          onClick={() => setActiveTab("soft")}
        >
          Soft Skills
        </button>
      </div>

      <div className="skills-grid">
        {skillsToShow.map(({ icon, title, desc }, idx) => (
          <div key={idx} className="skill-card">
            <div className="skill-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
      <div className="section-divider"></div>
    </section>
  );
};

export default SkillsSection;
