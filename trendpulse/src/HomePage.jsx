import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/HomePage.css';
import dashboardImage from './assets/aaaa.png'; // 👈 your local image

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <header className="home-header">
        <h1>TrendPulse</h1>
        <nav>
          <button onClick={() => navigate('/login')}>Login / Sign Up</button>
        </nav>
      </header>

      <section className="home-hero">
        <div className="home-hero-text">
          <h2>Discover Trends. Make Smarter Decisions.</h2>
          <p>Welcome to TrendPulse - your intelligent dashboard for analytics, growth insights, and tracking performance in real-time.</p>
          <button className="cta-button" onClick={() => navigate('/login')}>Get Started</button>
        </div>
        <div className="home-hero-preview">
          <img src={dashboardImage}style={{ width: '100%', maxWidth: '600px', height: 'auto' }} alt="Dashboard preview" />
        </div>
      </section>

      <footer className="home-footer">
        <p>&copy; 2025 TrendPulse. All rights reserved.</p>
      </footer>
    </div>
  );
}
