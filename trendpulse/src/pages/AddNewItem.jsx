// src/pages/AddNewItem.jsx
import React, { useState } from "react";
import "./AddNewItem.css";

export default function AddNewItem() {
  const [formData, setFormData] = useState({
    productName: "",
    city: "",
    category: "",
    quantity: "",
    price: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Item Added:\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="authcontainer">
        <div className="add-item-container">
          <h2>Add New Trending Item</h2>
          <p>Fill in the form to register a new product trend.</p>
          <form onSubmit={handleSubmit} className="add-item-form">
            <label>
              Product Name
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                required
              />
            </label>
    
            <label>
              City
              <select name="city" value={formData.city} onChange={handleChange} required>
                <option value="">Select City</option>
                <option value="Indore">Indore</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
              </select>
            </label>
    
            <label>
              Category
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Quantity In Stock
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                required min="0"
              />
            </label>

            <label>
              Price Per Unit (₹)
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                min="0"
                step="0.01"
              />
            </label>
    
            <button type="submit">Add Item</button>
          </form>
        </div>
    </div>
  );
}
