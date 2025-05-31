import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-container">
        {/* Left Side: Let's Connect */}
        <div className="connect-info">
          <h3>Let's Connect</h3>
          <p>You can find me here:</p>
          <div className="social-icons">
            <a href="https://github.com/AsmiTatawar" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/asmi-tatawar-3a8b11311/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="mailto:tatawar.asmi@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
            <a href="https://twitter.com/AsmiTatawar" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <form
  action="https://formspree.io/f/xzzgpjze"
  method="POST"
  className="contact-form">
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Send Message</button>
</form>
      </div>
    </section>
  );
};

export default ContactSection;
