// src/pages/HomePage.jsx
import React from "react";
import ProductCard from "../components/ProductCard";
import "../css/HomePage.css";
import productsData from "../data/products"; // Import dữ liệu sản phẩm

function HomePage() {
  // Lấy 6 sản phẩm đầu tiên hoặc sản phẩm nổi bật nếu có flag trong data
  const featuredProducts = productsData.slice(0, 6);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <h1>Sức khỏe của bạn là ưu tiên hàng đầu của chúng tôi!</h1>
          <p>
            Khám phá các sản phẩm thực phẩm chức năng chất lượng cao, an toàn và
            hiệu quả.
          </p>
          <button className="hero-button">Xem sản phẩm ngay</button>
        </div>
      </section>

      <section className="featured-products">
        <div className="container">
          <h2>Sản phẩm nổi bật</h2>
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <div className="container">
          <h2>Tại sao chọn HealthyShop?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <i className="fa-solid fa-medal"></i>
              <h3>Sản phẩm chất lượng cao</h3>
              <p>
                Được tuyển chọn kỹ lưỡng từ các thương hiệu uy tín hàng đầu thế
                giới.
              </p>
            </div>
            <div className="feature-item">
              <i className="fa-solid fa-truck-fast"></i>
              <h3>Giao hàng nhanh chóng</h3>
              <p>
                Vận chuyển toàn quốc, đảm bảo sản phẩm đến tay bạn trong thời
                gian sớm nhất.
              </p>
            </div>
            <div className="feature-item">
              <i className="fa-solid fa-headset"></i>
              <h3>Tư vấn chuyên nghiệp</h3>
              <p>Đội ngũ chuyên gia sẵn sàng hỗ trợ bạn 24/7.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
