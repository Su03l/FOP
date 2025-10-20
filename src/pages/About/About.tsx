import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FlagIcon from '@mui/icons-material/Flag';
import SecurityIcon from '@mui/icons-material/Security';
import BusinessIcon from '@mui/icons-material/Business';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import VerifiedIcon from '@mui/icons-material/Verified';
import './About.css';

const About: React.FC = () => {
  const { translate } = useLanguage();

  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1>{translate('aboutHeroTitle')}</h1>
          <p>{translate('aboutHeroSubtitle')}</p>
        </div>
      </div>

      <div className="container">
        <section className="about-story-section">
          <div className="story-content">
            <h2>{translate('ourStory')}</h2>
            <p>{translate('ourStoryDesc')}</p>
          </div>
        </section>

        <section className="vision-mission-section">
          <div className="vision-mission-cards">
            <div className="vision-card">
              <VisibilityIcon className="card-icon" />
              <h3>{translate('vision')}</h3>
              <p>{translate('visionDesc')}</p>
            </div>
            <div className="mission-card">
              <FlagIcon className="card-icon" />
              <h3>{translate('mission')}</h3>
              <p>{translate('missionDesc')}</p>
            </div>
          </div>
        </section>

        <section className="values-section">
          <h2>{translate('ourValues')}</h2>
          <div className="values-grid">
            <div className="value-card">
              <SecurityIcon className="value-icon" />
              <h4>{translate('values')[0]}</h4>
              <p>{translate('integrityDesc')}</p>
            </div>
            <div className="value-card">
              <EmojiObjectsIcon className="value-icon" />
              <h4>{translate('values')[1]}</h4>
              <p>{translate('innovationDesc')}</p>
            </div>
            <div className="value-card">
              <VerifiedIcon className="value-icon" />
              <h4>{translate('values')[2]}</h4>
              <p>{translate('qualityDesc')}</p>
            </div>
            <div className="value-card">
              <BusinessIcon className="value-icon" />
              <h4>{translate('values')[3]}</h4>
              <p>{translate('manufacturingValuesDesc')}</p>
            </div>
          </div>
        </section>

        <section className="facilities-section">
          <div className="facilities-card">
            <div className="facilities-content">
              <h2>{translate('manufacturingFacilities')}</h2>
              <p className='facilities-content-text1'>{translate('facilitiesDesc')}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
