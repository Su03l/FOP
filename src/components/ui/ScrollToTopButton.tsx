import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import './ScrollToTopButton.css';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const positionClass = language === 'ar' ? 'scroll-btn--right' : 'scroll-btn--left';

  return (
    <div className={`scroll-to-top-button ${positionClass} ${isVisible ? 'show' : ''}`}>
      <button onClick={scrollToTop}>
        <KeyboardArrowUp />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
