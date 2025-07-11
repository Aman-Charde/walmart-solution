const express = require('express');
const router = express.Router();
const axios = require('axios');

const Product = require('../models/Product');
const PredictedData = require('../models/PredictedData');
const auth = require('../middlewares/authMiddleware');

router.post('/analyze', auth, async (req, res) => {
  try {
    const retailerId = req.session.user.id;

    const products = await Product.find({ retailerId });

    if (!products || products.length === 0) {
      return res.status(404).json({ message: 'No products found to analyze.' });
    }

    const allPredictions = [];

    for (const product of products) {
      const response = await axios.post('http://localhost:8000/predict', {
        productName: product.productName,
        category: product.category,
        location: product.location,
        currentStock: product.quantityInStock
      });

      const { predictedUnitSold, restockQty } = response.data;

      const prediction = new PredictedData({
        retailerId,
        productId: product._id,
        productName: product.productName,
        predictedQuantity: predictedUnitSold,
        actualStock: product.quantityInStock,
        restockAlert: restockQty > 0,
        restockQuantity: restockQty,
        predictedDate: new Date()
      });

      await prediction.save();
      allPredictions.push(prediction);
    }

    res.status(200).json({
      message: 'Predictions saved successfully',
      predictions: allPredictions
    });

  } catch (error) {
    console.error('Prediction error:', error.message);
    res.status(500).json({ message: 'Prediction failed', error: error.message });
  }
});

module.exports = router;
