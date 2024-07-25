const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const uploadRoutes = require('./routes/uploadRoutes');

// MongoDB bağlantısını başlat
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/api', uploadRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});