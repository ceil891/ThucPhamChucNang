// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom"; // Dùng Link để điều hướng
import "./Footer.css";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} HealthyShop. All rights reserved.
        </p>
        <div className="footer-links">
          <Link to="/privacy-policy">Chính sách bảo mật</Link>
          <Link to="/terms-of-service">Điều khoản sử dụng</Link>{" "}
          {/* Bạn có thể tạo trang này sau */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
