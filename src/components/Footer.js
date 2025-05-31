import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-bar">
      <p>© 2025 Asmi Tatawar. All rights reserved.</p>
      <div className="footer-icons">
        <a href="https://github.com/AsmiTatawar" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/asmi-tatawar-3a8b11311/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="mailto:tatawar.asmi@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
        <a href="https://twitter.com/AsmiTatawar" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      </div>
    </footer>
  );
};

export default Footer;
