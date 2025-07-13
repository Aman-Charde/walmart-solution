import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles/LoginSignup.css';

export default function LoginSignUp() {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    location: '',
    shopName: '',
  });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const navigate = useNavigate();

  const toggleMode = () => {
    setMessage('');
    setMessageType('');
    setIsSignup(!isSignup);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      if (isSignup) {
        const { name, email, password, location, shopName } = formData;
        if (!name || !email || !password || !location || !shopName) {
          setMessage('All fields are required for signup.');
          setMessageType('error');
          return;
        }

        const res = await axios.post('http://localhost:5000/api/retailers/register', formData, {
          withCredentials: true,
        });

        setMessage(res.data.message);
        setMessageType('success');

        // Clear password and switch to login form
        setFormData(prev => ({
          ...prev,
          password: '',
        }));
        setIsSignup(false);
      } else {
        if (!formData.email || !formData.password) {
          setMessage('Email and password are required.');
          setMessageType('error');
          return;
        }

        const res = await axios.post('http://localhost:5000/api/retailers/login', {
          email: formData.email,
          password: formData.password,
        }, {
          withCredentials: true,
        });

        setMessage(res.data.message);
        setMessageType('success');

        // Navigate to dashboard after login
        navigate('/dashboard');
      }
    } catch (err) {
      setMessage(err?.response?.data?.message || 'Something went wrong');
      setMessageType('error');
    }
  };

  return (
    <div className={`auth-container ${isSignup ? 'signup-mode' : ''}`}>
      {message && (
        <div className={`auth-message ${messageType}`}>
          {message}
        </div>
      )}

      <div className="auth-flip-box">
        {/* LOGIN */}
        <div className="auth-card auth-front">
          <h2>Welcome Back</h2>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} />
          <button className="auth-submit" onClick={handleSubmit}>Login</button>
          <p>Don't have an account? <span className="toggle-link" onClick={toggleMode}>Sign up</span></p>
        </div>

        {/* SIGNUP */}
        <div className="auth-card auth-back">
          <h2>Create Account</h2>
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} />
          <input type="text" name="location" placeholder="Location" onChange={handleChange} />
          <input type="text" name="shopName" placeholder="Shop Name" onChange={handleChange} />
          <button className="auth-submit" onClick={handleSubmit}>Sign Up</button>
          <p>Already have an account? <span className="toggle-link" onClick={toggleMode}>Login</span></p>
        </div>
      </div>
    </div>
  );
}
