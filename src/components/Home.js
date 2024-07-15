import React from 'react';
import image from '../assets/nexus1.png';
import brand1 from '../assets/Oracle.png';
import brand2 from '../assets/Shopify.png';
import brand3 from '../assets/Swift-Logo.png';
import brand4 from '../assets/mysql.png';
import brand5 from '../assets/php.png';
import brand6 from '../assets/Google-flutter-logo.svg.png'
import './Home.css'; 

const Home = () => (
  <>
    <section id="home" className="home-section">
      <div className="content">
        <h2>Welcome to Techy Software Company Web Development and Digital Marketing Firm</h2>
        <h3>Grow your Business with Nexus Info</h3>
        <p>Get a professional website and digital marketing support for your business within your budget.</p>
        <button
        style={{
          padding: '10px 20px',
          borderRadius: '20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1rem',
          marginTop: '20px'
        }}
        className="cta-button"
      >
        Let's Talk <span className="arrow">→</span>
      </button>
      </div>
      <div className="image-container">
        <img src={image} alt="Nexus Info" />
      </div>
    </section>
    <div className="brand-logos">
      <img src={brand1} alt="Oracle" className="brand-logo" />
      <img src={brand2} alt="Shopify" className="brand-logo" />
      <img src={brand3} alt="Oracle" className="brand-logo" />
      <img src={brand4} alt="Shopify" className="brand-logo" />
      <img src={brand5} alt="Shopify" className="brand-logo" />
      <img src={brand6} alt="Shopify" className="brand-logo" />
    </div>
  </>
);

export default Home;
