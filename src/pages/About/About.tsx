import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FlagIcon from '@mui/icons-material/Flag';
import SecurityIcon from '@mui/icons-material/Security';
import BusinessIcon from '@mui/icons-material/Business';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import VerifiedIcon from '@mui/icons-material/Verified';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1>About FOP - Foundations of Prevention</h1>
          <p>Leading the way in industrial safety with Saudi-made innovation and uncompromising quality.</p>
        </div>
      </div>

      <div className="container">
        <section className="about-story-section">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Foundations of Prevention (FOP) is a leading Saudi manufacturer of personal protective equipment (PPE), focused on head protection solutions for industrial environments. Established to meet the growing demand for reliable safety gear in the Kingdom's fast-growing construction and industrial sectors, FOP ensures every product reflects precision engineering, comfort, and safety.
            </p>
            <p>
              With a commitment to Saudi Vision 2030, we combine local manufacturing expertise with global safety standards to create helmets that protect lives while supporting the national economy.
            </p>
          </div>
        </section>

        <section className="vision-mission-section">
          <div className="vision-mission-cards">
            <div className="vision-card">
              <VisibilityIcon className="card-icon" />
              <h3>Our Vision</h3>
              <p>To become the leading regional provider of certified industrial helmets trusted by professionals across the GCC.</p>
            </div>
            <div className="mission-card">
              <FlagIcon className="card-icon" />
              <h3>Our Mission</h3>
              <p>To deliver safety, innovation, and quality in every product we make, empowering industries to work safer.</p>
            </div>
          </div>
        </section>

        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <SecurityIcon className="value-icon" />
              <h4>Integrity & Reliability</h4>
              <p>Every design decision prioritizes maximum protection for workers in hazardous environments.</p>
            </div>
            <div className="value-card">
              <EmojiObjectsIcon className="value-icon" />
              <h4>Innovation in Protection</h4>
              <p>Continuous R&D to integrate the latest materials and technologies for superior performance.</p>
            </div>
            <div className="value-card">
              <VerifiedIcon className="value-icon" />
              <h4>Quality Without Compromise</h4>
              <p>Rigorous testing and certification ensure every helmet meets international safety standards.</p>
            </div>
            <div className="value-card">
              <BusinessIcon className="value-icon" />
              <h4>Made in Saudi Arabia – For the World</h4>
              <p>Proudly manufactured in Saudi Arabia, supporting local industry and economic growth.</p>
            </div>
          </div>
        </section>

        <section className="facilities-section">
          <div className="facilities-card">
            <div className="facilities-content">
              <h2>Facilities & Manufacturing</h2>
              <p className='facilities-content-text1'>
                Modern production plant equipped with injection molding, and testing labs.
              </p>
              <p className='facilities-content-text2'>
                In-house R&D team for material testing and design improvement.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
