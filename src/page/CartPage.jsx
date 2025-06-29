// src/pages/CartPage.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import "../css/CartPage.css";
import { Link } from "react-router-dom";

function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } =
    useCart();

  const handleQuantityChange = (id, e) => {
    const newQuantity = parseInt(e.target.value);
    if (isNaN(newQuantity) || newQuantity < 0) return;
    updateQuantity(id, newQuantity);
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <h1>Giỏ hàng của bạn</h1>
          <p className="empty-cart-message">
            Giỏ hàng của bạn đang trống.{" "}
            <Link to="/products">Hãy khám phá sản phẩm của chúng tôi!</Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Giỏ hàng của bạn</h1>
        <div className="cart-items-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <Link
                to={`/products/${item.id}`}
                className="cart-item-image-link"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
              </Link>
              <div className="cart-item-details">
                <Link
                  to={`/products/${item.id}`}
                  className="cart-item-name-link"
                >
                  <h3>{item.name}</h3>
                </Link>
                <p className="cart-item-price">
                  {item.price.toLocaleString("vi-VN")} VNĐ
                </p>
                <div className="cart-item-quantity-control">
                  <label htmlFor={`quantity-${item.id}`}>Số lượng:</label>
                  <input
                    type="number"
                    id={`quantity-${item.id}`}
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e)}
                  />
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="remove-item-btn"
                  >
                    Xóa
                  </button>
                </div>
                <p className="cart-item-subtotal">
                  Tổng: {(item.price * item.quantity).toLocaleString("vi-VN")}{" "}
                  VNĐ
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h2>Tổng cộng giỏ hàng</h2>
          <p>
            Tổng tiền:{" "}
            <span className="total-price">
              {getTotalPrice().toLocaleString("vi-VN")} VNĐ
            </span>
          </p>
          <button className="checkout-btn">Tiến hành thanh toán</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
