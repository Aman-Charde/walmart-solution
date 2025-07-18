// const HeroSection = () => (
//   <section className="hero">
//     <h1>Real-Time Retail Demand Intelligence</h1>
//     <p>
//       Detect trending products before your competitors. TrendPulse analyzes Google Trends,
//       social media, weather patterns, and local events to predict demand spikes and prevent lost sales.
//     </p>
//     <div className="hero-buttons">
//       <button className="primary">Refresh!</button>
//       <button className="secondary">Add new Item</button>

//     </div>
//   </section>
// );
// export default HeroSection;

// src/components/HeroSection.jsx

import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleAddItemClick = () => {
    navigate("/add-item"); // This navigates to the Add Item page
  };

  return (
    <section className="hero">
      <h1>Real-Time Retail Demand Intelligence</h1>
      <p>
        Detect trending products before your competitors. TrendPulse analyzes Google Trends,
        social media, weather patterns, and local events to predict demand spikes and prevent lost sales.
      </p>
      <div className="hero-buttons">
        <button className="primary">Refresh!</button>
        <button className="secondary" onClick={handleAddItemClick}>
          Add new Item
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

