// database.js
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://ajinkyadon:ajinkyadon123@prft-node-session.jkagkbr.mongodb.net/node-ecom?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});