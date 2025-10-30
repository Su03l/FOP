import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import LightMode from '@mui/icons-material/LightMode';
import DarkMode from '@mui/icons-material/DarkMode';
import Language from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Navbar.css';
import LogoSrc from '../../assets/images/banners/LOGO-13.png'
import LogoDark from '../../assets/images/banners/logo-dark.png'


const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, translate } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

 

  const navLinks = [
    { path: '/', key: 'home' },
    { path: '/about', key: 'about' },
    { path: '/products', key: 'products' },
    { path: '/order', key: 'ordering' },
    { path: '/certifications', key: 'certifications' },
    { path: '/industries', key: 'industries' },
    { path: '/news', key: 'news' },
    { path: '/contact', key: 'contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => navigate('/')}>
          <img src={theme === 'light' ? LogoSrc : LogoDark} alt="FOP Logo" />
        </div>

        <div className={`nav-menu ${mobileMenuOpen ? 'nav-menu--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path} className="nav-item">
              <NavLink
                to={link.path}
                className={({ isActive }) => `nav-links ${isActive ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {translate(link.key)}
              </NavLink>
            </li>
          ))}
          <div className="mobile-menu-actions">
            <button onClick={() => { toggleTheme(); setMobileMenuOpen(false); }} className="mobile-theme-toggle">
              {theme === 'light' ? <DarkMode /> : <LightMode />}
              <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
            </button>
            <button onClick={() => { toggleLanguage(); setMobileMenuOpen(false); }} className="mobile-language-toggle">
              <Language />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>
          </div>
        </div>

        <div className="nav-actions">
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {theme === 'light' ? <DarkMode /> : <LightMode />}
          </button>
          <button onClick={toggleLanguage} className="language-toggle-btn">
            <Language />
            <span>{language === 'en' ? 'AR' : 'EN'}</span>
          </button>
          <button className="quote-btn" onClick={() => navigate('/contact')}>{translate('getAQuote')}</button>

          <button className="hamburger-btn" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;