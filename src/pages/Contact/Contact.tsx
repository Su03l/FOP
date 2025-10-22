import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import { useLanguage } from "../../context/LanguageContext";
import "./Contact.css";

const Contact: React.FC = () => {
  const { translate } = useLanguage();

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1>{translate("contactTitle")}</h1>
          <p>{translate("contactSubtitle")}</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-content">
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
              <div className="info-item">
                <PhoneIcon className="info-icon" />
                <div>
                  <strong>{translate("contactPhoneLabel")}</strong>
                  <div className="dropdown-container">
                    <p className="contact-link">
                      {translate("contactPhoneValue")}
                    </p>
                    <div className="dropdown-content">
                      <a href="tel:+9665XXXXXXX">{translate("callUs")}</a>
                      <a
                        href="https://wa.me/9665XXXXXXX"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {translate("whatsapp")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="info-item">
                <EmailIcon className="info-icon" />
                <div>
                  <strong>{translate("contactEmailLabel")}</strong>
                  <div className="dropdown-container">
                    <p className="contact-link">
                      {translate("contactEmailValue")}
                    </p>
                    <div className="dropdown-content">
                      <a href="mailto:info@fop.com.sa">
                        {translate("sendEmail")}
                      </a>
                    </div>
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

          <div className="contact-form-card">
            <h2>{translate("contactFormTitle")}</h2>
            <p>{translate("contactFormSubtitle")}</p>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{translate("formFullName")}</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="company">{translate("formCompany")}</label>
                  <input type="text" id="company" name="company" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">{translate("formEmail")}</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">{translate("formPhone")}</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">{translate("formMessage")}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder={translate("formPlaceholder")}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-submit">
                {translate("formSubmit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
