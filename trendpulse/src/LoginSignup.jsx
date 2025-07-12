import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/LoginSignup.css';

export default function LoginSignUp() {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const toggleMode = () => setIsSignup(!isSignup);

  const handleSubmit = () => {
    navigate('/dashboard');
  };

  return (
    <div className={`auth-container ${isSignup ? 'signup-mode' : ''}`}>
      <div className="auth-flip-box">
        <div className="auth-card auth-front">
          <h2>Welcome Back</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="auth-submit" onClick={handleSubmit}>
            Login
          </button>
          <p>Don't have an account? <span className="toggle-link" onClick={toggleMode}>Sign up</span></p>
        </div>

        <div className="auth-card auth-back">
          <h2>Create Account</h2>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="text" placeholder="Location" />
          <input type="text" placeholder="Shop Name" />
          <button className="auth-submit" onClick={handleSubmit}>
            Sign Up
          </button>
          <p>Already have an account? <span className="toggle-link" onClick={toggleMode}>Login</span></p>
        </div>
      </div>
    </div>
  );
}
