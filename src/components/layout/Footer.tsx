import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import './Footer.css';

const Footer: React.FC = () => {
  const { translate } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3 className="footer-title">{translate('footerAboutTitle')}</h3>
          <p>{translate('footerAboutDesc')}</p>
        </div>
        <div className="footer-section links">
          <h3 className="footer-title">{translate('footerQuickLinks')}</h3>
          <ul>
            <li><Link to="/about">{translate('about')}</Link></li>
            <li><Link to="/products">{translate('products')}</Link></li>
            <li><Link to="/certifications">{translate('certifications')}</Link></li>
            <li><Link to="/contact">{translate('contact')}</Link></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3 className="footer-title">{translate('footerContactTitle')}</h3>
          <div className="contact-item">
            <LocationOnIcon className="contact-icon" />
            <span>{translate('footerAddress')}</span>
          </div>
          <div className="contact-item">
            <PhoneIcon className="contact-icon" />
            <span>{translate('footerPhone')}</span>
          </div>
          <div className="contact-item">
            <EmailIcon className="contact-icon" />
            <span>{translate('footerEmail')}</span>
          </div>
        </div>
        <div className="footer-section social">
          <h3 className="footer-title">{translate('footerFollowUs')}</h3>
          <div className="social-icons">
            <a href="#"><Facebook /></a>
            <a href="#"><Twitter /></a>
            <a href="#"><LinkedIn /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{translate('footerRights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
