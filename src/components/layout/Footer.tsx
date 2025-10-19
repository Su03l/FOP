import React from 'react';
import { Link } from 'react-router-dom';
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3 className="footer-title">FOP</h3>
          <p>Foundations of Prevention. A leading Saudi manufacturer of personal protective equipment (PPE), focused on head protection solutions for industrial environments.</p>
        </div>
        <div className="footer-section links">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/certifications">Certifications & Quality</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3 className="footer-title">Contact Info</h3>
          <div className="contact-item">
            <LocationOnIcon className="contact-icon" />
            <span>New Industrial City, Madinah, KSA</span>
          </div>
          <div className="contact-item">
            <PhoneIcon className="contact-icon" />
            <span>+966-5-XXXXXXX</span>
          </div>
          <div className="contact-item">
            <EmailIcon className="contact-icon" />
            <span>info@fop.com.sa</span>
          </div>
        </div>
        <div className="footer-section social">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-icons">
            <a href="#"><Facebook /></a>
            <a href="#"><Twitter /></a>
            <a href="#"><LinkedIn /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © FOP 2025. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
