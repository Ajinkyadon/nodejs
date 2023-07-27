// app.js
const express = require('express');
const mongoose = require('mongoose');
const databaseconnection = require('./database/index')

const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const companyAccountRoutes = require('./routes/companyAccountRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/products', productRoutes);
app.use('/companyAccounts', companyAccountRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
