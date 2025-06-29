// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import hook useCart để hiển thị số lượng sản phẩm
import "./Header.css";

function Header() {
  const { getTotalItems } = useCart(); // Lấy tổng số lượng sản phẩm trong giỏ

  return (
    <header className="main-header">
      <div className="container">
        <div className="logo">
          <Link to="/">HealthyShop</Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/products">Sản phẩm</Link>
            </li>
            <li>
              <Link to="/about">Giới thiệu</Link>
            </li>
            <li>
              <Link to="/contact">Liên hệ</Link>
            </li>
            <li>
              <Link to="/cart" className="cart-icon">
                <i className="fa-solid fa-shopping-cart"></i> Giỏ hàng (
                {getTotalItems()})
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
