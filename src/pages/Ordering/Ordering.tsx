import React from "react";
import "./Ordering.css";

const Ordering: React.FC = () => {
  const steps = [
    { emoji: "1️⃣", text: "Choose your product from our catalog." },
    { emoji: "2️⃣", text: "Email your order or RFQ to info@fop.com.sa" },
    {
      emoji: "3️⃣",
      text: "Our sales team will send you a quotation and delivery timeline.",
    },
    { emoji: "4️⃣", text: "Confirm your order and arrange payment." },
    {
      emoji: "5️⃣",
      text: "Shipment from our Madinah facility within agreed schedule.",
    },
  ];

  return (
    <div className="ordering-page">
      <div className="container">
        <div className="page-header">
          <h1>ORDERING INFORMATION</h1>
        </div>

        <div className="ordering-steps">
          <h2>How to Order</h2>
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <span className="step-number">{step.emoji}</span>
              <p className="step-description">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="ordering-details">
          <h2>Additional Information</h2>
          <div className="details-grid">
            <div className="detail-card">
              <h3>Delivery</h3>
              <p>All over KSA & GCC.</p>
            </div>
            <div className="detail-card">
              <h3>Minimum Order</h3>
              <p>20 helmets per model.</p>
            </div>
            <div className="detail-card">
              <h3>Packaging</h3>
              <p>20 pcs/carton, labeled and batch coded.</p>
            </div>
            <div className="detail-card">
              <h3>Customization</h3>
              <p>Logo printing, color options, labeling available.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ordering;
