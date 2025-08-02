import React, { useState } from 'react';
import './Contact.css'; // CSS for styling
import emailjs from '@emailjs/browser'; // EmailJS for sending emails
// Ensure you have emailjs installed: npm install @emailjs/browser

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const templateParams = {
    name: formData.name,
    email: formData.email, // Replacing 'time' with 'email'
    message: formData.message,
  };

  emailjs
    .send('service_wvacrr6', 'template_2gdcjas', templateParams, 'GPTc9rTGdBRH8NQeQ')
    .then(() => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear form
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
      alert('Failed to send message. Please try again later.');
    });
};
  // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' with your actual EmailJS credentials

  return (
    <div className="contact-page">
      <div className="contact-overlay">
        <div className="contact-container">
          <div className="contact-left">
            <img src="images/background.jpg" alt="Contact Us" className="contact-image" />
          </div>
          <div className="contact-right">
            <h2>Contact Us</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="contact-footer">
        <p>© 2025 YourCompany. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
