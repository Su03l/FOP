import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import SecurityIcon from "@mui/icons-material/Security";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import { useLanguage } from "../../context/LanguageContext";
import "./Certifications.css";

const Certifications: React.FC = () => {
  const { translate } = useLanguage();

  return (
    <div className="certifications-page">
      <div className="certifications-hero">
        <div className="container">
          <h1>{translate("certifiedSafetyTitle")}</h1>
          <p>{translate("certifiedSafetySubtitle")}</p>
        </div>
      </div>

      <div className="container">
        <section className="certifications-intro">
          <div className="intro-content">
            <SecurityIcon className="intro-icon" />
            <p>{translate("certifiedSafetyIntro")}</p>
          </div>
        </section>

        <section className="certifications-showcase">
          <h2>{translate("certificationsTitle")}</h2>
          <div className="cert-grid">
            <div className="cert-card">
              <VerifiedIcon className="cert-icon" />
              <h3>{translate("certEN397")}</h3>
              <p>{translate("certEN397Desc")}</p>
            </div>
            <div className="cert-card">
              <AssessmentIcon className="cert-icon" />
              <h3>{translate("certANSI")}</h3>
              <p>{translate("certANSIDesc")}</p>
            </div>
            <div className="cert-card">
              <CheckCircleIcon className="cert-icon" />
              <h3>{translate("certISO")}</h3>
              <p>{translate("certISODesc")}</p>
            </div>
            <div className="cert-card">
              <EmojiObjectsIcon className="cert-icon" />
              <h3>{translate("certSASO")}</h3>
              <p>{translate("certSASODesc")}</p>
            </div>
          </div>
        </section>

        <section className="quality-commitment">
          <div className="commitment-content">
            <h2>{translate("commitmentTitle")}</h2>
            <p>{translate("commitmentDesc")}</p>
            <div className="commitment-features">
              <div className="feature-item">
                <strong>{translate("testingTitle")}</strong>
                <p>{translate("testingDesc")}</p>
              </div>
              <div className="feature-item">
                <strong>{translate("qualityControlTitle")}</strong>
                <p>{translate("qualityControlDesc")}</p>
              </div>
              <div className="feature-item">
                <strong>{translate("improvementTitle")}</strong>
                <p>{translate("improvementDesc")}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Certifications;
