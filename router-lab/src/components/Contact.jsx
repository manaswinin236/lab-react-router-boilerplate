import React from "react";

const Contact = () => {
  return (
    <div id="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <div id="contact-info" className="contact-section">
        <p className="contact-text">
          If you have any inquiries or need assistance, reach out to us:
        </p>
        <ul className="contact-list">
          <li>Email: info@kalvium.com</li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>Address: 123 Kalvium Street, City, Country</li>
        </ul>
      </div>
      <div id="contact-form" className="contact-section">
        {/* Create a contact form here */}
        <form className="form">
          <input type="text" className="form-input" placeholder="Your Name" />
          <input type="email" className="form-input" placeholder="Your Email" />
          <textarea
            className="form-textarea"
            placeholder="Your Message"
          ></textarea>
          <button className="form-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;