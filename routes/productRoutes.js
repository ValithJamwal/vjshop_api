// /routes/productRoutes.js
const express = require('express');
const router = express.Router();
const { getAllProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

// @route   GET api/product
router.get('/product', getAllProducts);

// @route   POST api/product
router.post('/product', createProduct);

// @route   PUT api/product/:id
router.put('/product/:id', updateProduct);

// @route   DELETE api/product/:id
router.delete('/product/:id', deleteProduct);

module.exports = router;
