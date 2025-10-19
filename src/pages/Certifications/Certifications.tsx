import React from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';
import SecurityIcon from '@mui/icons-material/Security';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import './Certifications.css';

const Certifications: React.FC = () => {
  return (
    <div className="certifications-page">
      <div className="certifications-hero">
        <div className="container">
          <h1>Certified Safety. Proven Performance.</h1>
          <p>International standards meet Saudi excellence. Every FOP helmet is rigorously tested and certified for unmatched protection.</p>
        </div>
      </div>

      <div className="container">
        <section className="certifications-intro">
          <div className="intro-content">
            <SecurityIcon className="intro-icon" />
            <p>
              At FOP, quality is at the core of everything we do. Each helmet is designed and tested to meet international and regional standards, ensuring reliable protection in demanding environments.
            </p>
          </div>
        </section>

        <section className="certifications-showcase">
          <h2>Our Prestigious Certifications</h2>
          <div className="cert-grid">
            <div className="cert-card">
              <VerifiedIcon className="cert-icon" />
              <h3>EN 397:2012 + A1:2012</h3>
              <p>European standard for industrial safety helmets, ensuring protection against impacts, penetration, and extreme temperatures.</p>
            </div>
            <div className="cert-card">
              <AssessmentIcon className="cert-icon" />
              <h3>ANSI/ISEA Z89.1-2014</h3>
              <p>American National Standard for industrial head protection, covering Type I and Type II helmets with various impact ratings.</p>
            </div>
            <div className="cert-card">
              <CheckCircleIcon className="cert-icon" />
              <h3>ISO 9001:2015</h3>
              <p>International quality management standard ensuring consistent product quality and continuous improvement processes.</p>
            </div>
            <div className="cert-card">
              <EmojiObjectsIcon className="cert-icon" />
              <h3>SASO</h3>
              <p>Saudi Arabian Standards Organization certification, meeting local regulatory requirements for product safety and quality.</p>
            </div>
          </div>
        </section>

        <section className="quality-commitment">
          <div className="commitment-content">
            <h2>Our Unwavering Quality Commitment</h2>
            <p>
              We are committed to producing helmets that exceed customer expectations in quality, safety, and durability while continuously improving our systems and technologies. Every step of our manufacturing process is designed to deliver excellence.
            </p>
            <div className="commitment-features">
              <div className="feature-item">
                <strong>Rigorous Testing</strong>
                <p>Multi-stage testing including impact resistance, penetration protection, and environmental durability assessments.</p>
              </div>
              <div className="feature-item">
                <strong>Quality Control</strong>
                <p>100% inspection of finished products with comprehensive quality management systems in place.</p>
              </div>
              <div className="feature-item">
                <strong>Continuous Improvement</strong>
                <p>Ongoing R&D to enhance materials, design, and manufacturing processes for superior performance.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Certifications;
