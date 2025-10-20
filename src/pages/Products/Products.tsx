import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { productsData, type Product } from "../../utils/productsData";
import ProductModal from "./ProductModal";
import "./Products.css";

const Products: React.FC = () => {
  const { translate } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const openModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const colors = ["All", "Orange", "Red", "Green", "Blue", "Yellow", "White"];

  const getTranslatedColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      "All": translate('colorAll'),
      "Orange": translate('colorOrange'),
      "Red": translate('colorRed'),
      "Green": translate('colorGreen'),
      "Blue": translate('colorBlue'),
      "Yellow": translate('colorYellow'),
      "White": translate('colorWhite')
    };
    return colorMap[color] || color;
  };

  const filteredProducts = productsData.filter(product => {
    const matchesColor = selectedColor === "All" || product.colour === selectedColor;
    const matchesSearch = searchTerm === "" ||
      product.productId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.fopId.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesColor && matchesSearch;
  });

  return (
    <div className="products-page">
      <div className="products-hero">
        <div className="container">
          <h1>{translate('productsHeroTitle')}</h1>
          <p>{translate('productsHeroSubtitle')}</p>
        </div>
      </div>

      <div className="container">
        <div className="products-layout">
          <aside className="products-sidebar">
            <h3>{translate('filterProducts')}</h3>

            <div className="filter-section">
              <h4>{translate('searchByName')}</h4>
              <input
                type="text"
                placeholder={translate('searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="filter-section">
              <h4>{translate('filterByColor')}</h4>
              <div className="filter-options">
                {colors.map((color) => (
                  <label key={color} className="filter-option">
                    <input
                      type="radio"
                      name="color"
                      value={color}
                      checked={selectedColor === color}
                      onChange={(e) => setSelectedColor(e.target.value)}
                    />
                    {getTranslatedColor(color)}
                  </label>
                ))}
              </div>
            </div>

            <button
              className="btn-reset"
              onClick={() => {
                setSearchTerm("");
                setSelectedColor("All");
              }}
            >
              {translate('resetFilters')}
            </button>
          </aside>

          <section className="products-showcase">
            <h2>{translate('ourHelmetCollection')} ({filteredProducts.length} )</h2>
            <div className="products-grid-container">
              {filteredProducts.map((product) => (
                <div
                  key={product.fopId}
                  className="product-card"
                  onClick={() => openModal(product)}
                >
                  <img
                    src={product.image}
                    alt={product.colour + " helmet"}
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3>{product.productId}</h3>
                    <div className="product-details">
                      <p><strong>{translate('fopNumber')}:</strong> {product.fopId}</p>
                      <p><strong>{translate('suspensionType')}:</strong> {product.suspensionType}</p>
                      <p><strong>{translate('sweatband')}:</strong> {product.sweatband}</p>
                      <p><strong>{translate('color')}:</strong> {product.colour}</p>
                      <p><strong>{translate('minOrder')}:</strong> {product.moq}</p>
                    </div>
                    <button className="btn-view-details">{translate('viewDetails')}</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
};

export default Products;
