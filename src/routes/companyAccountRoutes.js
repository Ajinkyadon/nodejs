// routes/companyAccountRoutes.js
const express = require('express');
const router = express.Router();
const companyAccountController = require('../controllers/companyAccountController');

// Create a new companyAccount
router.post('/', companyAccountController.createCompanyAccount);

//Read all companyAccount
router.get('/', companyAccountController.getAllCompanyAccount);

// Update a companyAccount
router.put('/:id', companyAccountController.updateCompanyAccount);

// Delete a companyAccount
router.delete('/:id', companyAccountController.deleteCompanyAccount);

module.exports = router;
