// FeedbackForm.js
import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS file for styles

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log('Feedback submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="feedback-form-container">
      <form className="feedback-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Feedback"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
