import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Placeholders for pages - will be replaced with actual pages
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Products from '../pages/Products/Products';
import Certifications from '../pages/Certifications/Certifications';
import Industries from '../pages/Industries/Industries';
import Ordering from '../pages/Ordering/Ordering';
import News from '../pages/News/News';
import Contact from '../pages/Contact/Contact';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/order" element={<Ordering />} />
      <Route path="/news" element={<News />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRouter;
