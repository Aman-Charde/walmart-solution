import React, { useState } from "react";
import EmptyCartMessage from "./EmptyCartMessage";
import ProductCard from "./ProductCard";
import sampleProducts from "../data/sampleProducts";
import "../styles/dashboard.css";

const Ddashboard = () => {
  const [products, setProducts] = useState(sampleProducts); // Empty array to test empty: []

  return (
    <div className="dashboard-wrapper">
      <h1 className="dashboard-heading">Your TrendPulse Cart</h1>

      {products.length === 0 ? (
        <EmptyCartMessage />
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Ddashboard;

