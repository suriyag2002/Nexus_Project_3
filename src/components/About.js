import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-heading">About Us</h1>
      <p className="about-us-text">Embark on a journey with Nexus Info, where innovation meets expertise. Discover how we transform ideas into impactful digital solutions for your business.</p>
      <button className="our-story-button">Our Story</button>

      <div className="additional-section">
        <h2>Journey of Nexus Info</h2>
        <p>We operate digitally, foregoing offline offices and unnecessary expenses.</p>
        <p>Nexus Info, founded by a young entrepreneur, boasts a dynamic team of enthusiastic individuals, adept at navigating the currents of the latest trends.</p>
      </div>

      <div className="additional-section">
        <h2>Our Vision</h2>
        <p>Our vision is to empower businesses to flourish in the digital realm by providing them with uniquely tailored websites.</p>
      </div>

      <div className="additional-section">
        <h2>Our Mission</h2>
        <p>To ensure that every business can establish a strong online presence by offering them personalized websites.</p>
      </div>
    </div>
  );
}

export default About;
