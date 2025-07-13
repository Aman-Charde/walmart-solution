import React from "react";
import "./../styles/dashboard.css";

const EmptyCartMessage = () => {
  return (
    <div className="empty-cart">
      <img src="/empty-cart.jpg" alt="Empty cart" />
      <h2>Oops! Your cart is empty</h2>
      <p>Explore trending items and add them to your cart to view analytics here.</p>
    </div>
  );
};

export default EmptyCartMessage;
