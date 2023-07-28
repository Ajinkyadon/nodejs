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

// Read all company Account
const getAllCompanyAccount = async (req, res) => {
    try {
        const companyAccount = await CompanyAccount.find();
        res.json(companyAccount);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve company account' });
    }
};

// Update a company account
const updateCompanyAccount = async (req, res) => {
    try {
        const {name,registrationNumber, address, contactPerson } = req.body;
        const updatedCompanyAccount = await CompanyAccount.findByIdAndUpdate(
            req.params.id,
            {
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
            },
            { new: true }
        );
        res.json(updatedCompanyAccount);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update the CompanyAccount', messsage : error });
    }
};

// Delete a companyAccount
const deleteCompanyAccount = async (req, res) => {
    try {
        const deletedCompanyAccount = await CompanyAccount.findByIdAndDelete(req.params.id);
        res.json(deletedCompanyAccount);
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete the CompanyAccount' });
    }
};

module.exports = {
    createCompanyAccount,
    getAllCompanyAccount,
    updateCompanyAccount,
    deleteCompanyAccount,
};
