// controllers/companyAccountController.js
const CompanyAccount = require('../models/CompanyAccount');

// Create a new CompanyAccount
const createCompanyAccount = async (req, res) => {
    try {
        let { name,registrationNumber, address, contactPerson } = req.body;

        const companyAccount = new CompanyAccount({
            name : name,
            registrationNumber :registrationNumber ,
            address: {
                city : address.city,
                state : address.state,
                street: address.street,
                postalCode : address.postalCode,
                country : address.country,
            },
            contactPerson: {
                name : contactPerson.name,
                email : contactPerson.email,
                phone : contactPerson.phone,
            }
        });
        const savedcompanyAccount = await companyAccount.save();
        res.json(savedcompanyAccount);
    } catch (error) {
      //  console.log("error", error);
        res.status(500).json({ error: 'Failed to create a new company Account', message : error });    }
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
    createCompanyAccount,
    getAllProducts,
    updateProduct,
    deleteProduct,
};
