// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const companyAccountRoutes = require('./routes/companyAccountRoutes');
const dotenv = require('dotenv');
dotenv.config();

const databaseconnection = require('./database/index')
const app = express();


// Middleware
app.use(bodyParser.json());

// Routes
app.use('/products', productRoutes);
app.use('/companyAccounts', companyAccountRoutes);

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
