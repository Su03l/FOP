import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BusinessIcon from '@mui/icons-material/Business';
import SecurityIcon from '@mui/icons-material/Security';
import ScienceIcon from '@mui/icons-material/Science';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import whiteHelmet from '../../assets/images/helmets/helmet-white.png';
import redHelmet from '../../assets/images/helmets/red-helmet.png';
import yellowHelmet from '../../assets/images/helmets/yellow-helmet.png';
import './Home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const featuredProducts = [
    {
      fopId: 'FOP1001',
      productId: 'FOP–H100–OR',
      colour: 'White',
      specs: '6-point suspension, HDPE shell, adjustable fit',
      image: whiteHelmet
    },
    {
      fopId: 'FOP1002',
      productId: 'FOP–H100–RD',
      colour: 'Red',
      specs: 'Impact-resistant ABS, ventilation slots, ratchet adjustment',
      image: redHelmet
    },
    {
      fopId: 'FOP1008',
      productId: 'FOP–H100–PL',
      colour: 'Yellow',
      specs: 'High-visibility thermoplastic, comfort padding, universal size',
      image: yellowHelmet
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="home-hero">
        <div className="container">
          <h1>Protecting Lives. Empowering Industry.</h1>
          <p>Saudi-made industrial safety helmets designed to meet international standards.</p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">Explore Products</Link>
            <button className="btn btn-secondary" onClick={() => navigate('/contact')}>Request a Quote</button>
          </div>
        </div>
      </div>

      {/* About Snapshot Section */}
      <div className="container">
        <section className="home-about-section">
          <h2>FOP – Foundations of Prevention</h2>
          <p>
            Based in the Kingdom of Saudi Arabia, FOP specializes in the manufacturing of high-performance safety helmets that combine durability, comfort, and modern design. Proudly serving construction, oil & gas, and industrial sectors with world-class head protection solutions.
          </p>
          <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
        </section>

        {/* Featured Products Section */}
        <section className="home-products-section">
          <h2>Featured Products</h2>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <div key={product.fopId} className="product-card">
                <img
                  src={product.image}
                  alt={`${product.colour} helmet`}
                  className="product-image"
                />
                <div className="product-content">
                  <div className="product-header">
                    <h3>{product.fopId}</h3>
                    <p className="product-id">{product.productId}</p>
                  </div>
                  <div className="product-details">
                    <p><strong>Color:</strong> {product.colour}</p>
                    <p className="product-specs">{product.specs}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to="/products" className="btn btn-primary">View All Products</Link>
        </section>

        {/* Why Choose FOP Section */}
        <section className="home-features-section">
          <h2>Why Choose FOP?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <BusinessIcon className="feature-icon" />
              <div>
                <h4>Saudi Manufacturing Excellence</h4>
                <p>Locally produced with global standards.</p>
              </div>
            </div>
            <div className="feature-item">
              <SecurityIcon className="feature-icon" />
              <div>
                <h4>Certified Safety</h4>
                <p>Compliant with SASO, EN397 and ANSI standards.</p>
              </div>
            </div>
            <div className="feature-item">
              <ScienceIcon className="feature-icon" />
              <div>
                <h4>Advanced Materials</h4>
                <p>Lightweight, impact-resistant thermoplastic shells.</p>
              </div>
            </div>
            <div className="feature-item">
              <AccessibilityIcon className="feature-icon" />
              <div>
                <h4>Comfort & Fit</h4>
                <p>Adjustable ratchet suspension systems for superior fit.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
