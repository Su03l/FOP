import React, { useState } from "react";
import { productsData, type Product } from "../../utils/productsData";
import ProductModal from "./ProductModal";
import "./Products.css";

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const openModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const colors = ["All", ...Array.from(new Set(productsData.map(p => p.colour)))];

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
          <h1>Explore Our Safety Helmet Range</h1>
          <p>Discover our comprehensive collection of industrial safety helmets designed for maximum protection and comfort in demanding work environments.</p>
        </div>
      </div>

      <div className="container">
        <div className="products-layout">
          <aside className="products-sidebar">
            <h3>Filter Products</h3>

            <div className="filter-section">
              <h4>Search by Name</h4>
              <input
                type="text"
                placeholder="Search by product name or FOP ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="filter-section">
              <h4>Filter by Color</h4>
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
                    {color}
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
              Reset Filters
            </button>
          </aside>

          <section className="products-showcase">
            <h2>Our Helmet Collection ({filteredProducts.length} products)</h2>
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
                      <p><strong>FOP ID:</strong> {product.fopId}</p>
                      <p><strong>Suspension:</strong> {product.suspensionType}</p>
                      <p><strong>Sweatband:</strong> {product.sweatband}</p>
                      <p><strong>Color:</strong> {product.colour}</p>
                      <p><strong>MOQ:</strong> {product.moq}</p>
                    </div>
                    <button className="btn-view-details">View Details</button>
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
