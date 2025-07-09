import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="navbar">
        <div className="logo">TrendPulse</div>
        <nav className="nav-links">
          <a href="#" className="active">Dashboard</a>
          <a href="#">Inventory</a>
          <a href="#">Analytics</a>
          <a href="#">Alerts</a>
        </nav>
        <div className="avatar"></div>
      </header>

      <section className="hero">
        <h1>Real-Time Retail Demand Intelligence</h1>
        <p>
          Detect trending products before your competitors. TrendPulse analyzes Google Trends,
          social media, weather patterns, and local events to predict demand spikes and prevent lost sales.
        </p>
        <div className="hero-buttons">
          <button className="primary">View Live Dashboard</button>
          <button className="secondary">Learn More</button>
        </div>
      </section>

      <section className="dashboard-section">
        <div className="section-header">
          <h2>Real-Time Dashboard</h2>
          <div className="filter">
            <select>
              <option>All Cities</option>
            </select>
            <label>🔵 Live Data</label>
          </div>
        </div>

        <div className="stats-grid">
          {[
            { label: 'Active Trends', value: '30', note: '+12% vs yesterday', color: 'blue' },
            { label: 'Demand Spikes', value: '30', note: '5 critical require action', color: 'yellow' },
            { label: 'Cities Monitored', value: '3', note: '100% data coverage', color: 'green' },
            { label: 'Prevented Losses', value: '₹32L', note: 'This month estimated', color: 'cyan' },
          ].map((stat, i) => (
            <div key={i} className={`stat-card ${stat.color}`}>
              <div className="value">{stat.value}</div>
              <div className="label">{stat.label}</div>
              <div className="note">{stat.note}</div>
            </div>
          ))}
        </div>

        <div className="alerts">
          <h3>Critical Demand Alerts</h3>
          <div className="alerts-grid">
            {[
              { item: 'raincoat - Mumbai', spike: '68%', status: 'CRITICAL' },
              { item: 'umbrella - Mumbai', spike: '68%', status: 'CRITICAL' },
              { item: 'sunglasses - Mumbai', spike: '31%', status: 'CRITICAL' },
            ].map((alert, i) => (
              <div key={i} className="alert-card">
                <div className="alert-item">{alert.item}</div>
                <div className="alert-note">{alert.spike} spike in mention detected</div>
                <div className="alert-status">{alert.status}</div>
                <div className="alert-buttons">
                  <button className="red-btn">Restock Now</button>
                  <button className="outline-btn">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="trend-weather">
          <div>
            <h4>Trending Products by City</h4>
            <ul>
              {[
                ['Raincoat', '+62%'], ['Umbrella', '+68%'], ['Sunglasses', '+31%'], ['Sunscreen', '+46%'], ['Jacket', '+17%']
              ].map(([item, trend], i) => (
                <li key={i}><span>{item}</span><span className="trend">{trend}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Weather & Events Impact</h4>
            <div className="weather-placeholder"></div>
          </div>
        </div>
      </section>

      <section className="inventory-section">
        <h2>Inventory Management</h2>
        <div className="inventory-stats">
          <div className="status-card green"><h4>Well Stocked</h4><p>2 products above safety threshold</p></div>
          <div className="status-card yellow"><h4>Needs Attention</h4><p>3 products approaching reorder point</p></div>
          <div className="status-card red"><h4>Critical Stock</h4><p>1 product requires immediate restocking</p></div>
        </div>

        <table className="inventory-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Location</th>
              <th>Current Stock</th>
              <th>Status</th>
              <th>Trend Impact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Raincoats', 'Seasonal Wear', 'Pune Store', '12 / 50', 'Critical', '+287%', 'Urgent Restock'],
              ['Sunglasses', 'Accessories', 'Mumbai Store', '28 / 40', 'Warning', '+189%', 'Increase Stock'],
              ['Cotton T-Shirts', 'Clothing', 'Delhi Store', '156 / 100', 'Good', '+156%', 'Monitor'],
              ['Winter Jackets', 'Seasonal Wear', 'Delhi Store', '45 / 60', 'Warning', '+78%', 'Increase Stock'],
              ['Power Banks', 'Electronics', 'Mumbai Store', '89 / 75', 'Good', '+134%', 'Monitor'],
              ['Umbrellas', 'Accessories', 'Mumbai Store', '67 / 80', 'Warning', '+245%', 'Increase Stock']
            ].map(([prod, cat, loc, stock, status, impact, action], i) => (
              <tr key={i}>
                <td>{prod}</td>
                <td>{cat}</td>
                <td>{loc}</td>
                <td>{stock}</td>
                <td><span className={`status-label ${status.toLowerCase()}`}>{status}</span></td>
                <td className="trend">{impact}</td>
                <td><button className={`action-btn ${action.replace(/\s/g, '-').toLowerCase()}`}>{action}</button></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="ai-actions">
          <div className="ai-card red">
            <h4>Immediate Action</h4>
            <p>Transfer 50 raincoats from Delhi to Pune warehouse within 24 hours</p>
            <p className="note">Potential Loss Prevention: ₹1.2L in missed sales</p>
            <button>Execute Transfer</button>
          </div>
          <div className="ai-card yellow">
            <h4>Plan Ahead</h4>
            <p>Order 200 winter jackets for Delhi - cold wave expected next week</p>
            <p className="note">Lead Time: 3-5 days delivery available</p>
            <button>Place Order</button>
          </div>
          <div className="ai-card green">
            <h4>Optimize</h4>
            <p>Increase sunscreen stock across all stores - summer season approaching</p>
            <p className="note">Confidence: 89% based on historical trends</p>
            <button>Schedule Order</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h5>TrendPulse</h5>
            <p>Real-time retail demand intelligence platform helping retailers prevent lost sales through predictive analytics.</p>
          </div>
          <div>
            <h5>Platform</h5>
            <ul>
              <li>Dashboard</li>
              <li>Inventory Management</li>
              <li>Analytics</li>
              <li>Alerts</li>
            </ul>
          </div>
          <div>
            <h5>Data Sources</h5>
            <ul>
              <li>Google Trends</li>
              <li>Social Media</li>
              <li>Weather APIs</li>
              <li>Event Data</li>
            </ul>
          </div>
          <div>
            <h5>Support</h5>
            <ul>
              <li>Documentation</li>
              <li>API Reference</li>
              <li>Contact</li>
              <li>Status</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">© 2024 TrendPulse. Built for retailers who refuse to miss opportunities.</div>
      </footer>
    </div>
  );
};

export default Dashboard;
