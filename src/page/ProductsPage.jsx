// src/pages/ProductsPage.jsx
import React from "react";
import ProductCard from "../components/ProductCard";
import "../css/ProductsPage.css";
import productsData from "../data/products"; // Import dữ liệu sản phẩm

function ProductsPage() {
  return (
    <div className="products-page">
      <div className="container">
        <h1>Tất cả sản phẩm</h1>
        <div className="product-grid">
          {productsData.map(
            (
              product // Hiển thị tất cả sản phẩm từ data
            ) => (
              <ProductCard key={product.id} product={product} />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage; /* src/pages/ProductsPage.css */
