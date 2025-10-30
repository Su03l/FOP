import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import { useLanguage } from "../../context/LanguageContext";
import "./Contact.css";

const Contact: React.FC = () => {
  const { translate, language } = useLanguage();
  // Hover states for contact info section
  const [showPhoneInfo, setShowPhoneInfo] = useState(false);
  const [showEmailInfo, setShowEmailInfo] = useState(false);

  // Click states for order section
  const [showPhoneOrder, setShowPhoneOrder] = useState(false);
  const [showEmailOrder, setShowEmailOrder] = useState(false);

  const phoneNumber = "+966530005645";
  const emailAddress = "info@fop.com.sa";

  // Clean phone number for WhatsApp (remove all non-digits)
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, "");

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="container">
          <h1>{translate("orderTitle")}</h1>
          <p>{translate("orderSubtitle")}</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-content">
          {/* Contact Info Section */}
          <div className="contact-info-card">
            <h2>{translate("contactInfoTitle")}</h2>
            <div className="info-items">
              <div className="info-item">
                <LocationOnIcon className="info-icon" />
                <div>
                  <strong>{translate("contactAddressLabel")}</strong>
                  <p>{translate("contactAddressValue")}</p>
                </div>
              </div>

              {/* PHONE */}
              <div className="info-item">
                <PhoneIcon className="info-icon" />
                <div>
                  <strong>{translate("contactPhoneLabel")}</strong>
                  <div
                    className="dropdown-container"
                    onMouseEnter={() => setShowPhoneInfo(true)}
                    onMouseLeave={() => setShowPhoneInfo(false)}
                  >
                    <button className="contact-link">
                      {language === 'ar' ? (
                        <span dir="ltr" style={{ direction: 'ltr', unicodeBidi: 'embed' }}>
                          {translate("contactPhoneValue")}
                        </span>
                      ) : (
                        translate("contactPhoneValue")
                      )}
                    </button>
                    {showPhoneInfo && (
                      <div className="dropdown-content">
                        <a href={`tel:${phoneNumber}`}>{translate("callUs")}</a>
                        <a
                          href={`https://wa.me/${cleanPhoneNumber}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {translate("whatsapp")}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* EMAIL */}
              <div className="info-item">
                <EmailIcon className="info-icon" />
                <div>
                  <strong>{translate("contactEmailLabel")}</strong>
                  <div
                    className="dropdown-container"
                    onMouseEnter={() => setShowEmailInfo(true)}
                    onMouseLeave={() => setShowEmailInfo(false)}
                  >
                    <button className="contact-link">
                      {translate("contactEmailValue")}
                    </button>
                    {showEmailInfo && (
                      <div className="dropdown-content">
                        <a href={`mailto:${emailAddress}`}>
                          {translate("sendEmail")}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="info-item">
                <LanguageIcon className="info-icon" />
                <div>
                  <strong>{translate("contactWebsiteLabel")}</strong>
                  <a
                    href="http://www.fop.com.sa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    {translate("contactWebsiteValue")}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ORDER SECTION */}
          <div className="contact-form-card">
            <h2>{translate("orderNowTitle")}</h2>
            <p>{translate("orderNowSubtitle")}</p>

            <div className="order-buttons">
              {/* Phone Order */}
              <div className="dropdown-container" style={{ width: "100%" }}>
                <button
                  className="btn-submit"
                  onClick={() => setShowPhoneOrder(!showPhoneOrder)}
                >
                  {language === 'ar' ? (
                    <span dir="ltr" style={{ direction: 'ltr', unicodeBidi: 'embed' }}>
                      {translate("contactPhoneLabel")}
                    </span>
                  ) : (
                    translate("contactPhoneLabel")
                  )}
                </button>
                {showPhoneOrder && (
                  <div
                    className="dropdown-content active"
                    style={{ width: "100%" }}
                  >
                    <a href={`tel:${phoneNumber}`}>{translate("callUs")}</a>
                    <a
                      href={`https://wa.me/${cleanPhoneNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {translate("whatsapp")}
                    </a>
                  </div>
                )}
              </div>

              {/* Email Order */}
              <div
                className="dropdown-container"
                style={{ width: "100%", marginTop: "12px" }}
              >
                <button
                  className="btn-submit"
                  onClick={() => setShowEmailOrder(!showEmailOrder)}
                >
                  {translate("contactEmailLabel")}
                </button>
                {showEmailOrder && (
                  <div
                    className="dropdown-content active"
                    style={{ width: "100%" }}
                  >
                    <a href={`mailto:${emailAddress}`}>
                      {translate("sendEmail")}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
