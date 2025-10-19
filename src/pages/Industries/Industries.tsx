import React from "react";
import BusinessIcon from '@mui/icons-material/Business';
import SecurityIcon from '@mui/icons-material/Security';
import "./Industries.css";

const Industries: React.FC = () => {
  const industries = [
    {
      name: "Construction",
      description: "Reliable protection for engineers, supervisors, and workers on active job sites.",
      image: "https://via.placeholder.com/400x250/construction",
    },
    {
      name: "Oil & Gas",
      description: "Resistant to high temperatures and chemical exposure.",
      image: "https://via.placeholder.com/400x250/oilgas",
    },
    {
      name: "Manufacturing & Industrial",
      description: "Lightweight helmets for 24/7 plant operations.",
      image: "https://via.placeholder.com/400x250/manufacturing",
    },
    {
      name: "Utilities & Maintenance",
      description: "Electrical insulation and high-visibility options available.",
      image: "https://via.placeholder.com/400x250/utilities",
    },
  ];

  return (
    <div className="industries-page">
      <div className="industries-hero">
        <div className="container">
          <h1>Safety Solutions Tailored for Every Industry</h1>
          <p>Our helmets are designed to meet the specific demands of various industrial sectors, ensuring optimal protection and compliance.</p>
        </div>
      </div>

      <div className="container">
        <section className="industries-features">
          <div className="features-grid">
            <div className="feature-card">
              <BusinessIcon className="feature-icon" />
              <h3>Industry-Specific Design</h3>
              <p>Customized solutions for construction, oil & gas, manufacturing, and utilities sectors.</p>
            </div>
            <div className="feature-card">
              <SecurityIcon className="feature-icon" />
              <h3>Regulatory Compliance</h3>
              <p>Meets all relevant safety standards and certifications for your industry requirements.</p>
            </div>
          </div>
        </section>

        <section className="industries-showcase">
          <h2>Industries We Serve</h2>
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
