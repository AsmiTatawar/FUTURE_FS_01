import React from 'react';
import yourPhoto from '../assets/Asmi.png';

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro-section">
        <div className="intro-text">
          <h1>Hello, I'm Asmi Tatawar</h1>
          <h3>A Computer Science Student and Aspiring Full Stack Web Developer</h3>
          <p>
            Passionate about creating innovative solutions and exploring cutting-edge technologies.<br />
            Recently Developed LustreBooth, a virtual photo booth platform.<br />
            Welcome to my portfolio.
          </p>

          <div className="intro-buttons">
            <a href="#resume" className="btn resume-btn">
              See My Resume
            </a>

            <a href="#contact" className="btn message-btn">
              Message Me
            </a>
          </div>
        </div>

        <div className="intro-photo">
          <img src={yourPhoto} alt="Asmi" />
        </div>
      </div>

      <div className="section-divider"></div>
    </section>
  );
};

export default Intro;
