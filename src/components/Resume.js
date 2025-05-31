import React from 'react';
import { FaFileAlt, FaClock } from 'react-icons/fa';
import resumePdf from '../assets/Asmi Tatawar Updated Resume.pdf'; // adjust path

const ResumeSection = () => {
  return (
    <section id="resume" className="resume-section">
      <h2 className="section-title">Resume</h2>

      <div className="resume-box">
        <div className="resume-icon">
          <FaFileAlt />
        </div>

        <div className="resume-content">
          <h3>My Resume</h3>
          <p className="resume-updated">
            <FaClock className="clock-icon" /> Last updated: May 2025
          </p>
        </div>

        <a className="resume-download-btn" href={resumePdf} download>
          Download Resume
        </a>
      </div>
      <div className="section-divider"></div>
    </section>
  );
};

export default ResumeSection;
