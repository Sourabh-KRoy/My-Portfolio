import React from 'react'
import './Contact.css';

const Contact = () => {
    return (
         <div className="contact">
      <div className="container">
        <h1 className="sub-title">
          Get in <span>Touch</span>
        </h1>
        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>If you have any questions, feel free to reach out through any of the following methods:</p>
            <ul>
              <li><i className="bx bx-phone"></i> +1 (234) 567-890</li>
              <li><i className="bx bx-mail-send"></i> email@example.com</li>
              <li><i className="bx bx-map"></i> 1234 Street Name, City, Country</li>
            </ul>
          </div>
          <div className="contact-form">
            <h2>Send a Message</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="6" required></textarea>
              <button type="submit" className="send-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Contact
