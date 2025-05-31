import React, { useState } from 'react';
import { FaAward, FaChalkboardTeacher, FaTrophy } from 'react-icons/fa';

const certifications = [
  { icon: <FaAward />, title: "SQL Basics Course", org: "Newton School (Distinction)", year: "2025" },
  { icon: <FaAward />, title: "Developer & Technology Job Simulation", org: "Accenture on Forage", year: "2024" },
  { icon: <FaAward />, title: "Solutions Architecture Job Simulation", org: "AWS on Forage", year: "2024" },
  { icon: <FaAward />, title: "Data Visualization: Empowering Business with Effective Insights", org: "Tata on Forage", year: "2025" },
  { icon: <FaAward />, title: "IITB Certified Placement Preparation Program", org: "IIT Bombay", year: "2024" },
  
];

const workshops = [
  { icon: <FaChalkboardTeacher />, title: "AI for Students: Build Your Own Generative AI Model", org: "NxtWave", year: "2025" },
  { icon: <FaChalkboardTeacher />, title: "4-Day SQL Basics Course", org: "Newton School", year: "2025" },
  { icon: <FaChalkboardTeacher />, title: "AI Workshop with Abhinav Devaguptapu", org: "NxtWave", year: "2025" },
  { icon: <FaChalkboardTeacher />, title: "Freedom with AI Masterclass", org: "Freedom with AI", year: "2025" },
  { icon: <FaChalkboardTeacher />, title: "ChatGPT & AI Tools Masterclass", org: "GrowAlth Academy", year: "2025" },
  { icon: <FaChalkboardTeacher />, title: "MATLAB Onramp Certificate", org: "MATLAB", year: "2024" },
  { icon: <FaChalkboardTeacher />, title: "Data Analytics Essentials", org: "Cisco Networking Academy", year: "2025" },
  { icon: <FaChalkboardTeacher />, title: "Introduction to Cybersecurity", org: "Cisco Networking Academy", year: "2025" },
  { icon: <FaChalkboardTeacher />, title: "Introduction to Packet Tracer", org: "Cisco Networking Academy", year: "2025" },
  { icon: <FaChalkboardTeacher />, title: "Python Programming - Abdul Bari", org: "Udemy", year: "2025" },
];

const competitions = [
  { icon: <FaTrophy />, title: "1st Place - Technophilia 2k25 (Tech, Trivia & Brain Teasers)", org: "MMCOE", year: "2025" },
  { icon: <FaTrophy />, title: "Gold Medalist - School Level", org: "India Spelling Bee", year: "2020" },
  { icon: <FaTrophy />, title: "Silver Medalist - International English Olympiad (IEO)", org: "SOF", year: "2015" },
  { icon: <FaTrophy />, title: "HackSprint v6.0 (24-hour hackathon)", org: "MMCOE", year: "2025" },
  { icon: <FaTrophy />, title: "Guinness World Record Badge", org: " Microsoft AI Skills Fest", year: "2025" },
];

const Achievements = () => {
  const [activeTab, setActiveTab] = useState('certifications');

  const getAchievements = () => {
    switch (activeTab) {
      case 'certifications':
        return certifications;
      case 'workshops':
        return workshops;
      case 'competitions':
        return competitions;
      default:
        return [];
    }
  };

  return (
    <section id="achievements" className="achievements-section">
      <h2 className="section-title">Achievements</h2>

      <div className="tab-buttons">
        <button
          className={activeTab === 'certifications' ? 'active' : ''}
          onClick={() => setActiveTab('certifications')}
        >
          Certifications
        </button>
        <button
          className={activeTab === 'workshops' ? 'active' : ''}
          onClick={() => setActiveTab('workshops')}
        >
          Courses/Workshops
        </button>
        <button
          className={activeTab === 'competitions' ? 'active' : ''}
          onClick={() => setActiveTab('competitions')}
        >
          Hackathons/Competitions
        </button>
      </div>

      <div className="achievements-grid">
        {getAchievements().map((item, idx) => (
          <div className="achievement-card" key={idx}>
            <div className="achievement-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.org}</p>
            <span className="year">{item.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
