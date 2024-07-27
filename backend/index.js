require('dotenv').config(); // Bu satır en üstte olmalı
const express = require('express');
const path = require('path');
const cors = require('cors');
const connectDB = require('./config/db');
const uploadRoutes = require('./routes/uploadRoutes');

// MongoDB bağlantısını başlat
connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

// CORS'u etkinleştirin
const corsOptions = {
  origin: 'http://localhost:3000', // İzin verilecek köken
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use('/api', uploadRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});