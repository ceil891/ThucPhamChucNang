// src/context/CartContext.jsx
import React, { createContext, useState, useContext, useEffect } from "react";

// 1. Tạo Context
const CartContext = createContext();

// 2. Custom Hook để sử dụng Cart Context dễ dàng trong các components
export const useCart = () => {
  return useContext(CartContext);
};

// 3. Provider Component để bao bọc ứng dụng và cung cấp state giỏ hàng
export const CartProvider = ({ children }) => {
  // State giỏ hàng, khởi tạo từ Local Storage hoặc mảng rỗng
  const [cartItems, setCartItems] = useState(() => {
    try {
      const localData = localStorage.getItem("cartItems");
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Failed to parse cart items from localStorage:", error);
      return []; // Trả về mảng rỗng nếu có lỗi parse
    }
  });

  // Effect để lưu giỏ hàng vào Local Storage mỗi khi cartItems thay đổi
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // Nếu sản phẩm đã có, tăng số lượng
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Nếu sản phẩm chưa có, thêm mới với số lượng là 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Hàm cập nhật số lượng sản phẩm trong giỏ hàng
  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) => {
      if (quantity <= 0) {
        // Nếu số lượng <= 0, xóa sản phẩm khỏi giỏ
        return prevItems.filter((item) => item.id !== id);
      }
      // Cập nhật số lượng cho sản phẩm có ID tương ứng
      return prevItems.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      );
    });
  };

  // Hàm tính tổng số lượng sản phẩm trong giỏ hàng
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Hàm tính tổng giá trị giỏ hàng
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Giá trị sẽ được cung cấp cho các components con
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
