// src/pages/ProductDetailPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import hook useCart để thêm vào giỏ
import "../css/ProductDetailPage.css";
import productsData from "../data/products"; // Import dữ liệu sản phẩm

function ProductDetailPage() {
  const { id } = useParams(); // Lấy ID sản phẩm từ URL
  const { addToCart } = useCart(); // Sử dụng hàm addToCart từ context

  // Tìm sản phẩm theo ID (chuyển id từ string sang số nguyên)
  const product = productsData.find((p) => p.id === parseInt(id));

  // Xử lý khi không tìm thấy sản phẩm
  if (!product) {
    return (
      <div className="container product-not-found">
        Sản phẩm không tìm thấy.
      </div>
    );
  }

  // Hàm xử lý khi nhấn nút "Thêm vào giỏ hàng"
  const handleAddToCart = () => {
    addToCart(product);
    alert(`"${product.name}" đã được thêm vào giỏ hàng!`);
  };

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="product-detail-content">
          <div className="product-image-large">
            {/* Hiển thị ảnh chi tiết hoặc ảnh mặc định nếu không có */}
            <img
              src={product.detailImage || product.image}
              alt={product.name}
            />
          </div>
          <div className="product-info">
            <h1>{product.name}</h1>
            <p className="product-price-detail">
              {product.price.toLocaleString("vi-VN")} VNĐ
            </p>
            <p className="product-description-detail">{product.description}</p>

            {/* Hiển thị lợi ích chính nếu có */}
            {product.benefits && product.benefits.length > 0 && (
              <div className="product-benefits">
                <h3>Lợi ích chính:</h3>
                <ul>
                  {product.benefits.map((benefit, index) => (
                    <li key={index}>
                      <i className="fa-solid fa-check-circle"></i> {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Hiển thị cách dùng nếu có */}
            {product.usage && (
              <div className="product-usage">
                <h3>Cách dùng:</h3>
                <p>{product.usage}</p>
              </div>
            )}

            {/* Nút thêm vào giỏ hàng */}
            <button
              className="add-to-cart-detail-btn"
              onClick={handleAddToCart}
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
