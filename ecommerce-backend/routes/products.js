const express = require('express');
const router = express.Router();
const Product = require('../models/products'); // Make sure the path to the model is correct

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
});

// Add a new product
router.post('/', async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.json(savedProduct);
    } catch (error) {
        console.error('Error details:', error);  // Log the error details
        res.status(400).json({ message: 'Error saving product', error: error.message });
    }
});


module.exports = router;
