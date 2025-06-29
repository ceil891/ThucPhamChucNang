// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom"; // Dùng Link để điều hướng đến trang chi tiết
import { useCart } from "../context/CartContext"; // Import hook useCart để thêm vào giỏ
import "./ProductCard.css";

function ProductCard({ product }) {
  const { addToCart } = useCart(); // Sử dụng hàm addToCart từ context

  // Hàm xử lý khi nhấn nút "Thêm vào giỏ"
  const handleAddToCart = (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của Link (điều hướng)
    e.stopPropagation(); // Ngăn chặn sự kiện nổi bọt lên Link cha
    addToCart(product);
    alert(`"${product.name}" đã được thêm vào giỏ hàng!`);
  };

  return (
    // Bọc toàn bộ card bằng Link để click vào bất cứ đâu trên card sẽ điều hướng
    <Link to={`/products/${product.id}`} className="product-card-link">
      <div className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">
          {product.description.substring(0, 80)}...
        </p>{" "}
        {/* Cắt bớt mô tả */}
        <p className="product-price">
          {product.price.toLocaleString("vi-VN")} VNĐ
        </p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Thêm vào giỏ
        </button>
      </div>
    </Link>
  );
}

export default ProductCard;
