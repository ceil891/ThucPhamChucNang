// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css"; // Import global CSS
import { CartProvider } from "./context/CartContext"; // Import CartProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      {" "}
      {/* Bọc App với CartProvider để toàn bộ ứng dụng có thể truy cập giỏ hàng */}
      <App />
    </CartProvider>
  </React.StrictMode>
);
