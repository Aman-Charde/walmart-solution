// models/PredictedData.js

const mongoose = require('mongoose');

const predictedDataSchema = new mongoose.Schema({
  retailerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Retailer',
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  predictedQuantity: {
    type: Number,
    required: true,
  },
  actualStock: {
    type: Number,
    required: true,
  },
  restockAlert: {
    type: Boolean,
    default: false,
  },
  restockQuantity: {
    type: Number,
  },
  predictedDate: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

module.exports = mongoose.model('PredictedData', predictedDataSchema);
