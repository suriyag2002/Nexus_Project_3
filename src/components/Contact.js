// ContactForm.js
import React from 'react';
import './ContactForm.css'; // Import CSS file for styles

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend, etc.)
    alert('Form submitted!'); // Placeholder action
  };

  return (
    <div className="contact-container">
      <h2>Contact our teams</h2>
      <p>We are happy to give you a demo or answer any questions that you may have about our services.</p>
      <p>Please fill out the form below and our team will get back to you within 24 hours.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name *</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="subject">Subject *</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div>
          <label htmlFor="message">Comment or Message *</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>

      <h3>Reach Us</h3>
      <p>Get in touch</p>
      <ul>
        <li><strong>Email:</strong> contact@nexusinfo.in</li>
        <li><strong>Instagram:</strong> <a href="https://instagram.com/nexusinfo.in" target="_blank" rel="noopener noreferrer">nexusinfo.in</a></li>
        <li><strong>Phone:</strong> +91 8778993293</li>
      </ul>
    </div>
  );
};

export default ContactForm;
