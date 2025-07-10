const express = require('express');
const router = express.Router();
const Retailer = require('../models/RetailerModel');

// 👤 Register (with or without bcrypt)
router.post('/register', async (req, res) => {
  const { name, email, password, shopName, location } = req.body;

  const existing = await Retailer.findOne({ email });
  if (existing) return res.status(400).json({ message: 'Email already in use' });

  const newRetailer = new Retailer({
    name, email, password, shopName, location
  });

  await newRetailer.save();
  res.status(201).json({ message: 'Retailer registered' });
});

// 🔑 Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const retailer = await Retailer.findOne({ email });
  if (!retailer) return res.status(400).json({ message: 'Retailer not found' });

  // Manual password check (if you used bcrypt, compare with bcrypt.compare)
  if (retailer.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Save user info in session
  req.session.user = {
    id: retailer._id,
    name: retailer.name,
    email: retailer.email
  };

  res.json({ message: 'Login successful', user: req.session.user });
});

// 🧠 Check if logged in
router.get('/profile', (req, res) => {
  if (req.session.user) {
    res.json({ loggedIn: true, user: req.session.user });
  } else {
    res.status(401).json({ loggedIn: false });
  }
});

// 🚪 Logout
router.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).json({ message: 'Logout failed' });
    res.json({ message: 'Logged out successfully' });
  });
});

module.exports = router;
