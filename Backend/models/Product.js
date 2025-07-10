// models/Product.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  retailerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Retailer',
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  quantityInStock: {
    type: Number,
    required: true,
  },
  pricePerUnit: {
    type: Number,
    required : false,
  },
  location: {
    type: String,
    required: true,
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
