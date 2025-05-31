import React, { useEffect, useRef, useState } from 'react';
import { FaUserAlt, FaGraduationCap, FaHeart } from 'react-icons/fa';

const AboutMe = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <h2 className="section-title">About Me</h2>
      <div className="about-cards">
        <div className={`about-card ${isVisible ? 'animate-fade' : ''}`}>
          <FaUserAlt className="about-icon" />
          <h3>What I Do</h3>
          <p>
          Computer Engineering student passionate about full-stack web development and 
          creative problem-solving. I enjoy learning new skills and am currently building 
          interactive websites while exploring UI/UX, Python, AI and cybersecurity. 
          I strive to create meaningful tech solutions that make a positive impact.
          </p>
        </div>

        <div className={`about-card ${isVisible ? 'animate-fade-delay' : ''}`}>
  <FaGraduationCap className="about-icon" />
  <h3>Education</h3>
  <ul className="education-list">
    <li>
      <strong>MMCOE, Pune</strong> – BTech (CSE), 8.77 SGPA  
      <span className="year">2024–2028</span>
    </li>
    <li>
      <strong>Sant Mai Junior College</strong> – HSC (Science), 82%  
      <span className="year">2022–2024</span>
    </li>
    <li>
      <strong>New India School</strong> – SSC, 92%
      <span className="year">2008–2022</span>
    </li>
  </ul>
</div>

        <div className={`about-card ${isVisible ? 'animate-fade-delay-long' : ''}`}>
          <FaHeart className="about-icon" />
          <h3>My Interests</h3>
<ul className="left-align-list">
  <li>Web development</li>
  <li>UI/UX design</li>
  <li>Basics of Python</li>
  <li>Basics of C programming</li>
  <li>Exploring new tools and technologies</li>
  <li>Understanding of databases (basic SQL)</li>
  <li>Version control with Git & GitHub</li>
  <li>Introduction to APIs</li>
</ul>
        </div>
      </div>
      <div className="section-divider"></div>
    </section>
    
  );
};

export default AboutMe;
