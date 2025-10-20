import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import BusinessIcon from "@mui/icons-material/Business";
import SecurityIcon from "@mui/icons-material/Security";
import ScienceIcon from "@mui/icons-material/Science";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import whiteHelmet from "../../assets/images/helmets/helmet-white.png";
import redHelmet from "../../assets/images/helmets/red-helmet.png";
import yellowHelmet from "../../assets/images/helmets/yellow-helmet.png";
import "./Home.css";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { translate } = useLanguage();

  const featuredProducts = [
    {
      fopId: translate("product1Id"),
      productId: translate("product1Code"),
      colour: translate("product1Color"),
      specs: translate("product1Specs"),
      image: whiteHelmet,
    },
    {
      fopId: translate("product2Id"),
      productId: translate("product2Code"),
      colour: translate("product2Color"),
      specs: translate("product2Specs"),
      image: redHelmet,
    },
    {
      fopId: translate("product3Id"),
      productId: translate("product3Code"),
      colour: translate("product3Color"),
      specs: translate("product3Specs"),
      image: yellowHelmet,
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="home-hero">
        <div className="container">
          <h1>{translate("heroTitle")}</h1>
          <p>{translate("heroSubtitle")}</p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">
              {translate("browseProducts")}
            </Link>
            <button
              className="btn btn-secondary"
              onClick={() => navigate("/contact")}
            >
              {translate("requestAQuote")}
            </button>
          </div>
        </div>
      </div>

      {/* About Snapshot Section */}
      <div className="container">
        <section className="home-about-section">
          <h2>{translate("companyOverview")}</h2>
          <p>{translate("companyDescription")}</p>
          <Link to="/about" className="btn btn-primary">
            {translate("learnMore")}
          </Link>
        </section>

        {/* Featured Products Section */}
        <section className="home-products-section">
          <h2>{translate("featuredProducts")}</h2>
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
                    <p>
                      <strong>Color:</strong> {product.colour}
                    </p>
                    <p className="product-specs">{product.specs}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to="/products" className="btn btn-primary">
            {translate("viewAllProducts")}
          </Link>
        </section>

        {/* Why Choose FOP Section */}
        <section className="home-features-section">
          <h2>{translate("whyChooseFop")}</h2>
          <div className="features-grid">
            <div className="feature-item">
              <BusinessIcon className="feature-icon" />
              <div>
                <h4>{translate("saudiQuality")}</h4>
                <p>{translate("saudiQualityDesc")}</p>
              </div>
            </div>
            <div className="feature-item">
              <SecurityIcon className="feature-icon" />
              <div>
                <h4>{translate("certifiedSafety")}</h4>
                <p>{translate("certifiedSafetyDesc")}</p>
              </div>
            </div>
            <div className="feature-item">
              <ScienceIcon className="feature-icon" />
              <div>
                <h4>{translate("advancedMaterials")}</h4>
                <p>{translate("advancedMaterialsDesc")}</p>
              </div>
            </div>
            <div className="feature-item">
              <AccessibilityIcon className="feature-icon" />
              <div>
                <h4>{translate("comfortFit")}</h4>
                <p>{translate("comfortFitDesc")}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
