// src/pages/ContactPage.jsx
import React, { useState } from "react";
import "../css/ContactPage.css";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Để hiển thị thông báo thành công/thất bại

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Đây là nơi bạn sẽ gửi dữ liệu form đến backend API hoặc dịch vụ email
    // Ví dụ đơn giản: hiển thị dữ liệu ra console và một thông báo
    console.log("Dữ liệu form đã gửi:", formData);
    setStatus(
      "Tin nhắn của bạn đã được gửi thành công! Chúng tôi sẽ liên hệ lại sớm."
    );
    setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form

    // Trong thực tế, bạn sẽ dùng fetch/axios để gửi dữ liệu:
    /*
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            setStatus('Tin nhắn của bạn đã được gửi thành công!');
            setFormData({ name: '', email: '', phone: '', message: '' });
        })
        .catch((error) => {
            console.error('Error:', error);
            setStatus('Đã có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại.');
        });
        */
  };

  return (
    <div className="contact-page">
      <div className="container">
        <h1>Liên hệ với chúng tôi</h1>
        <p className="contact-intro-text">
          Chúng tôi luôn sẵn lòng lắng nghe bạn. Vui lòng điền vào mẫu dưới đây
          hoặc liên hệ trực tiếp qua thông tin được cung cấp.
        </p>

        <div className="contact-content">
          <form onSubmit={handleSubmit} className="contact-form">
            <h2>Gửi tin nhắn cho chúng tôi</h2>
            {status && (
              <p
                className={`form-status ${
                  status.includes("thành công") ? "success" : "error"
                }`}
              >
                {status}
              </p>
            )}
            <div className="form-group">
              <label htmlFor="name">Họ và tên:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Số điện thoại (Tùy chọn):</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Tin nhắn của bạn:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Gửi tin nhắn</button>
          </form>

          <div className="contact-info">
            <h2>Thông tin liên hệ</h2>
            <p>
              <i className="fa-solid fa-location-dot"></i> Địa chỉ: 123 Đường
              Sức Khỏe, Quận Bình An, TP. Hồ Chí Minh
            </p>
            <p>
              <i className="fa-solid fa-phone"></i> Điện thoại: (028) 1234 5678
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i> Email:{" "}
              <a href="mailto:info@healthyshop.com">info@healthyshop.com</a>
            </p>
            <p>
              <i className="fa-solid fa-clock"></i> Giờ làm việc: Thứ Hai - Thứ
              Bảy: 8:00 - 18:00
            </p>

            <div className="social-media">
              <h3>Kết nối với chúng tôi:</h3>
              <a
                href="https://facebook.com/healthyshop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://instagram.com/healthyshop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com/healthyshop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
