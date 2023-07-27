// controllers/productController.js
const Product = require('../models/Product');

// Create a new product
const createProduct = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;
    const product = new Product({
      name,
      price,
      description,
      category,
    });
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create a new product' });
  }
};

// Read all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve products' });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.productId,
      { name, price, description, category },
      { new: true }
    );
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update the product' });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.productId);
    res.json(deletedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete the product' });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
