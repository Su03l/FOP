import React from "react";
import BusinessIcon from "@mui/icons-material/Business";
import SecurityIcon from "@mui/icons-material/Security";
import { useLanguage } from "../../context/LanguageContext";
import "./Industries.css";

const Industries: React.FC = () => {
  const { translate } = useLanguage();

  const industries = [
    {
      name: translate("constructionTitle"),
      description: translate("constructionDesc"),
      image:
        "https://vid.alarabiya.net/images/2021/03/13/038b64c8-0dab-474c-9bb4-5b93d714cdb6/038b64c8-0dab-474c-9bb4-5b93d714cdb6_16x9_1200x676.jpg?width=555&format=jpg",
    },
    {
      name: translate("oilGasTitle"),
      description: translate("oilGasDesc"),
      image:
        "https://www.g4s.com/ar-sa/-/media/g4s/saudiarabia/images/oil--gas.ashx",
    },
    {
      name: translate("manufacturingTitle"),
      description: translate("manufacturingDesc"),
      image:
        "https://cdn.arabsstock.com/uploads/images/166441/engineering-professions-and-jobs-productive-thumbnail-166441.webp",
    },
    {
      name: translate("utilitiesTitle"),
      description: translate("utilitiesDesc"),
      image:
        "https://esi.edu.sa/wp-content/uploads/2021/12/7336bc23d9822d68fa4c08d4de41c80b0fff38de.jpg",
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
