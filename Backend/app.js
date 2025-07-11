const express = require('express');
const session = require('express-session');
const cors = require('cors');
const connectDB = require('./config/db');
const retailerRoutes = require('./routes/retailerRoutes'); // ✅ CORRECT
const productRoutes = require('./routes/productRoutes');
const predictionRoutes = require('./routes/predictionRoutes');


require('dotenv').config();

const app = express();
connectDB();

app.use(cors({
  origin: 'http://localhost:3000', // frontend port
  credentials: true
}));

app.use(express.json());

app.use(session({
  secret: 'minor-project',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24
  }
}));

// ✅ Use the correct router
app.use('/api/retailers', retailerRoutes);
app.use('/api/products', productRoutes);
app.use('/api/predict', predictionRoutes);


app.get('/', (req, res) => {
  res.send('Backend is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
