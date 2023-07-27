// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Create a new product
router.post('/', productController.createProduct);

// Read all products
router.get('/', productController.getAllProducts);

// Update a product
router.put('/:productId', productController.updateProduct);

// Delete a product
router.delete('/:productId', productController.deleteProduct);

module.exports = router;
