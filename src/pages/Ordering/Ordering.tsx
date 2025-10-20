import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./Ordering.css";

const Ordering: React.FC = () => {
  const { translate } = useLanguage();

  const steps = [
    { emoji: "1️⃣", text: translate("orderingStep1") },
    { emoji: "2️⃣", text: translate("orderingStep2") },
    { emoji: "3️⃣", text: translate("orderingStep3") },
    { emoji: "4️⃣", text: translate("orderingStep4") },
    { emoji: "5️⃣", text: translate("orderingStep5") },
  ];

  return (
    <div className="ordering-page">
      <div className="container">
        <div className="page-header">
          <h1>{translate("orderingTitle")}</h1>
        </div>

        <div className="ordering-steps">
          <h2>{translate("howToOrderTitle")}</h2>
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <span className="step-number">{step.emoji}</span>
              <p className="step-description">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="ordering-details">
          <h2>{translate("additionalInfoTitle")}</h2>
          <div className="details-grid">
            <div className="detail-card">
              <h3>{translate("deliveryTitle")}</h3>
              <p>{translate("deliveryText")}</p>
            </div>
            <div className="detail-card">
              <h3>{translate("minOrderTitle")}</h3>
              <p>{translate("minOrderText")}</p>
            </div>
            <div className="detail-card">
              <h3>{translate("packagingTitle")}</h3>
              <p>{translate("packagingText")}</p>
            </div>
            <div className="detail-card">
              <h3>{translate("customizationTitle")}</h3>
              <p>{translate("customizationText")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ordering;
