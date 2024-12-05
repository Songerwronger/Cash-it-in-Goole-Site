const express = require('express');
const cors = require('cors'); // Import CORS middleware
const mongoose = require('mongoose');
const productRoutes = require('./routes/products'); // Import products route
require('dotenv').config(); // Load environment variables

const app = express();

// Use CORS middleware (place it before the routes)
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Mount products route
app.use('/api/products', productRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
