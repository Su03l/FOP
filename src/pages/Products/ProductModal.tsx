import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import type { Product } from "../../utils/productsData";
import Close from "@mui/icons-material/Close";
import "./ProductModal.css";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { translate, language } = useLanguage();

  const keyFeatures = translate("productModal.keyFeatures.features");
  const applications = translate("productModal.applications.items");

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-content ${language === "ar" ? "rtl" : "ltr"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose}>
          <Close />
        </button>

        <div className="modal-body">
          <div className="modal-product-image">
            <img src={product.image} alt={product.colour + " helmet"} />
          </div>

          <div className="modal-product-details">
            <h2>{product.productId}</h2>

            <p className="modal-section">
              {translate("productModal.shortDescription")}
            </p>

            <div className="modal-section">
              <h4>{translate("productModal.keyFeatures.title")}</h4>
              {Array.isArray(keyFeatures) && (
                <ul>
                  {keyFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              )}
            </div>

            <div className="modal-section">
              <h4>{translate("productModal.applications.title")}</h4>
              {Array.isArray(applications) && (
                <ul>
                  {applications.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>

            <h3>{translate("productModal.technicalData.title")}</h3>
            <table className="product-table">
              <tbody>
                <tr>
                  <td>{translate("productModal.technicalData.specFeatures.material")}</td>
                  <td>{translate("productModal.technicalData.specs.material")}</td>
                </tr>
                <tr>
                  <td>{translate("productModal.technicalData.specFeatures.suspensionType")}</td>
                  <td>{translate("productModal.technicalData.specs.suspensionType")}</td>
                </tr>
                <tr>
                  <td>{translate("productModal.technicalData.specFeatures.sweatband")}</td>
                  <td>{translate("productModal.technicalData.specs.sweatband")}</td>
                </tr>
                <tr>
                  <td>{translate("productModal.technicalData.specFeatures.sizeRange")}</td>
                  <td>{translate("productModal.technicalData.specs.sizeRange")}</td>
                </tr>
                <tr>
                  <td>{translate("productModal.technicalData.specFeatures.weight")}</td>
                  <td>{translate("productModal.technicalData.specs.weight")}</td>
                </tr>
                <tr>
                  <td>{translate("productModal.technicalData.specFeatures.moq")}</td>
                  <td>{product.moq}</td>
                </tr>
                <tr>
                  <td>{translate("productModal.technicalData.specFeatures.origin")}</td>
                  <td>{translate("productModal.technicalData.specs.origin")}</td>
                </tr>
              </tbody>
            </table>

            <button className="btn-add-to-quote">
              {translate("productModal.addToQuote")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
