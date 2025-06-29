// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import các components layout
import Header from "./components/Header"; // <-- Sửa đường dẫn nếu lỗi
import Footer from "./components/Footer"; // <-- Sửa đường dẫn nếu lỗi

// Import tất cả các trang
import HomePage from "./page/HomePage";
import ProductsPage from "./page/ProductsPage";
import ProductDetailPage from "./page/ProductDetailPage";
import CartPage from "./page/CartPage";
import AboutPage from "./page/AboutPage"; // <-- Đảm bảo có export default trong AboutPage.jsx
import ContactPage from "./page/ContactPage";
import PrivacyPolicyPage from "./page/PrivacyPolicyPage";
// import TermsOfServicePage from './pages/TermsOfServicePage'; // Nếu bạn tạo trang này

function App() {
  return (
    <Router>
      <Header /> {/* Header hiển thị trên tất cả các trang */}
      <main>
        {" "}
        {/* Thẻ main để chứa nội dung chính của từng trang */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          {/* Route động cho trang chi tiết sản phẩm, :id là tham số */}
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          {/* <Route path="/terms-of-service" element={<TermsOfServicePage />} /> */}
          {/* Bạn có thể thêm các Route khác ở đây (ví dụ: trang đăng nhập, đăng ký) */}
        </Routes>
      </main>
      <Footer /> {/* Footer hiển thị trên tất cả các trang */}
    </Router>
  );
}

export default App;
