import React, { useState } from 'react';
import './contact.css';

// Reusable Input and Textarea components
const InputField = ({ label, type, id, name, value, onChange, helperText }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}:</label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required
      aria-describedby={`${id}Help`}
      className="form-control"
    />
    <small id={`${id}Help`} className="form-text">{helperText}</small>
  </div>
);

const TextareaField = ({ label, id, name, value, onChange, helperText }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}:</label>
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required
      aria-describedby={`${id}Help`}
      className="form-control"
    />
    <small id={`${id}Help`} className="form-text">{helperText}</small>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.');
      return;
    }

    console.log('Form submitted:', formData);

    setSuccessMessage('Your message has been sent successfully!');

    // Reset form after a timeout
    setTimeout(() => {
      setSuccessMessage('');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 3000); // Reset after 3 seconds
  };

  return (
    <div className="contact-container">
      {/* Add Store Logo or any other image */}
      <div className="header-image"><img src="https://img.freepik.com/premium-vector/man-clothing-store-logo_752850-817.jpg?ga=GA1.2.1385720529.1728982074&semt=ais_hybrid" alt="Store Logo" className="store-logo" />
        
      </div>

      <h2>Contact Us</h2>
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}

      <form onSubmit={handleSubmit}>
        <InputField
          label="Name"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          helperText="Please enter your full name."
        />
        
        <InputField
          label="Email"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          helperText="We'll never share your email with anyone else."
        />

        <TextareaField
          label="Message"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          helperText="Please enter your message."
        />

        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {/* Additional Image Section */}
      <div className="image-gallery">
        <h3>Our Latest Collection</h3>
        <div className="gallery">
          <img src="https://www.mrporter.com/variants/images/1647597342253438/in/w560_q60.jpg" alt="Product 1" className="gallery-image" />
          <img src="https://www.mrporter.com/variants/images/1647597354156463/in/w560_q60.jpg" alt="Product 2" className="gallery-image" />
          <img src="https://www.mrporter.com/variants/images/1647597353404618/in/w358_q60.jpg" alt="Product 3" className="gallery-image" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
