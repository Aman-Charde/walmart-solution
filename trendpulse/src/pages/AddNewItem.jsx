// src/pages/AddNewItem.jsx
import React, { useState } from "react";
import "./AddNewItem.css";

export default function AddNewItem() {
  const [formData, setFormData] = useState({
    productName: "",
    city: "",
    category: "",
    spikeDetected: false,
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

            <label >
                Urgency Level
                <select  name="urgency" value={formData.urgency} onChange={handleChange} required>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select> 
            </label>         
    
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="spikeDetected"
                checked={formData.spikeDetected}
                onChange={handleChange}
              />
              Critical Spike Detected
            </label>
    
            <button type="submit">Add Item</button>
          </form>
        </div>
    </div>
  );
}
