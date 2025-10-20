import React from "react";
import BusinessIcon from '@mui/icons-material/Business';
import SecurityIcon from '@mui/icons-material/Security';
import { useLanguage } from "../../context/LanguageContext";
import "./Industries.css";

const Industries: React.FC = () => {
  const { translate } = useLanguage();

  const industries = [
    {
      name: translate("constructionTitle"),
      description: translate("constructionDesc"),
      image: "https://via.placeholder.com/400x250/construction",
    },
    {
      name: translate("oilGasTitle"),
      description: translate("oilGasDesc"),
      image: "https://via.placeholder.com/400x250/oilgas",
    },
    {
      name: translate("manufacturingTitle"),
      description: translate("manufacturingDesc"),
      image: "https://via.placeholder.com/400x250/manufacturing",
    },
    {
      name: translate("utilitiesTitle"),
      description: translate("utilitiesDesc"),
      image: "https://via.placeholder.com/400x250/utilities",
    },
  ];

  return (
    <div className="industries-page">
      <div className="industries-hero">
        <div className="container">
          <h1>{translate("safetySolutionsTitle")}</h1>
          <p>{translate("safetySolutionsSubtitle")}</p>
        </div>
      </div>

      <div className="container">
        <section className="industries-features">
          <div className="features-grid">
            <div className="feature-card">
              <BusinessIcon className="feature-icon" />
              <h3>{translate("industryDesignTitle")}</h3>
              <p>{translate("industryDesignDesc")}</p>
            </div>
            <div className="feature-card">
              <SecurityIcon className="feature-icon" />
              <h3>{translate("regulatoryComplianceTitle")}</h3>
              <p>{translate("regulatoryComplianceDesc")}</p>
            </div>
          </div>
        </section>

        <section className="industries-showcase">
          <h2>{translate("industriesWeServeTitle")}</h2>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="industry-card">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="industry-image"
                />
                <div className="industry-info">
                  <h3>{industry.name}</h3>
                  <p>{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Industries;
