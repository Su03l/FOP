import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import AppRouter from './router/AppRouter';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import ScrollToTop from './components/common/ScrollToTop';

import ScrollToTopButton from './components/ui/ScrollToTopButton';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <Navbar />
          <main>
            <AppRouter />
          </main>
          <Footer />
          <ScrollToTopButton />
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
