// routes/productRoutes.js

const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const auth = require('../middlewares/authMiddleware');

// 📦 Add New Product
router.post('/add', auth, async (req, res) => {
  try {
    const { productName, category, quantityInStock, pricePerUnit, location } = req.body;

    const product = new Product({
      retailerId: req.session.user.id,
      productName,
      category,
      quantityInStock,
      pricePerUnit,
      location,
    });

    await product.save();
    res.status(201).json({ message: 'Product added successfully', product });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add product', error: err.message });
  }
});

// 📋 Get All Products of Logged-In Retailer
router.get('/my-products', auth, async (req, res) => {
  try {
    const products = await Product.find({ retailerId: req.session.user.id }).sort({ updatedAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch products', error: err.message });
  }
});

// 🛠️ Update a Product
router.put('/update/:id', auth, async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id, retailerId: req.session.user.id });

    if (!product) return res.status(404).json({ message: 'Product not found' });

    Object.assign(product, req.body); // update fields
    product.lastUpdated = Date.now();

    await product.save();
    res.json({ message: 'Product updated', product });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update product', error: err.message });
  }
});

// 🗑️ Delete a Product
router.delete('/delete/:id', auth, async (req, res) => {
  try {
    const result = await Product.findOneAndDelete({
      _id: req.params.id,
      retailerId: req.session.user.id,
    });

    if (!result) return res.status(404).json({ message: 'Product not found or already deleted' });

    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete product', error: err.message });
  }
});

module.exports = router;
