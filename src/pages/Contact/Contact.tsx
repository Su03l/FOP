import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1>Get In Touch With FOP</h1>
          <p>Ready to enhance your safety standards? Contact us today for premium industrial helmets and expert consultation.</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-content">
          <div className="contact-info-card">
            <h2>Contact Information</h2>
            <div className="info-items">
              <div className="info-item">
                <LocationOnIcon className="info-icon" />
                <div>
                  <strong>Address</strong>
                  <p>New Industrial City, Madinah<br />Kingdom of Saudi Arabia</p>
                </div>
              </div>
              <div className="info-item">
                <PhoneIcon className="info-icon" />
                <div>
                  <strong>Phone</strong>
                  <p>+966-5-XXXXXXX</p>
                </div>
              </div>
              <div className="info-item">
                <EmailIcon className="info-icon" />
                <div>
                  <strong>Email</strong>
                  <p>info@fop.com.sa</p>
                </div>
              </div>
              <div className="info-item">
                <LanguageIcon className="info-icon" />
                <div>
                  <strong>Website</strong>
                  <p>www.fop.com.sa</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we'll get back to you within 24 hours.</p>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows={6} placeholder="Tell us about your safety requirements..." required></textarea>
              </div>
              <button type="submit" className="btn-submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
