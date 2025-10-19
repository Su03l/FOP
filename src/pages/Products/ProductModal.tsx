import React from "react";
import type { Product } from "../../utils/productsData";
import Close from "@mui/icons-material/Close";
import "./ProductModal.css";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <Close />
        </button>
        <div className="modal-body">
          <div className="modal-product-image">
            <img src={product.image} alt={product.colour + " helmet"} />
          </div>
          <div className="modal-product-details">
            <h2>{product.productId}</h2>
            <p>
              The FOP™ Industrial Safety Helmet combines a lightweight design
              with strong protection. Made from high-density polyethylene
              (HDPE), it resists impact and provides all-day comfort through its
              adjustable suspension system. Available in multiple
              configurations, the FOP helmet is suitable for diverse working
              environments.
            </p>

            <h3>Applications:</h3>
            <ul>
              <li>Construction & Infrastructure</li>
              <li>Oil & Gas</li>
              <li>Manufacturing & Industrial Plants</li>
              <li>Utilities & Maintenance</li>
              <li>Mining & Quarrying</li>
              <li>Transport & Logistics</li>
            </ul>

            <h3>Technical Data:</h3>
            <table>
              <tbody>
                <tr>
                  <td>Material</td>
                  <td>High-Density Polyethylene (HDPE)</td>
                </tr>
                <tr>
                  <td>Suspension</td>
                  <td>4-point, {product.suspensionType}</td>
                </tr>
                <tr>
                  <td>Sweatband</td>
                  <td>{product.sweatband}</td>
                </tr>
                <tr>
                  <td>Size Range</td>
                  <td>52–64 cm</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>335 g</td>
                </tr>
                <tr>
                  <td>MOQ</td>
                  <td>{product.moq}</td>
                </tr>
                <tr>
                  <td>Origin</td>
                  <td>Made in Saudi Arabia</td>
                </tr>
              </tbody>
            </table>
            <button className="btn-add-to-quote">Add to Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
