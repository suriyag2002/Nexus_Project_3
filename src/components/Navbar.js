import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/nexus_software_logo.jpg'; // Use default import for images
import './Navbar.css'; // Import the CSS file

const Navbar = () => (
  <nav>
    <img src={Logo} alt="Logo" width="140" height="40" />
    <Link to="/">Home</Link>
    <Link to="/about">About Us</Link>
    <Link to="/products">Products/Services</Link>
    <Link to="/contact">Contact Us</Link>
    <Link to="/feedback">Feedback</Link>
  </nav>
);

export default Navbar;
