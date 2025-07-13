import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ProductCard = ({ product }) => {
  const chartData = product.trend.map((value, index) => ({
    name: `Day ${index + 1}`,
    value,
  }));

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", height: "300px", objectFit: "fill" }}
      />
      <p><strong>City:</strong> {product.city}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p><strong>In Stock:</strong> {product.quantity}</p>
      <p><strong>Required:</strong> {product.requiredQuantity}</p>
      <p><strong>Category:</strong> {product.category}</p>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={160}>
          <LineChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProductCard;


