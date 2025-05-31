import React, { useState, useEffect } from 'react';
import profilePic from '../assets/Asmi.png';

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={profilePic} alt="Asmi Tatawar" className="nav-photo" />
        <span className="nav-name">Asmi Tatawar</span>
      </div>
      <ul className="nav-right">
        <li><a href="#intro">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
