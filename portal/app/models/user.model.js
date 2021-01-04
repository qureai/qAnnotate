const mongoose = require('mongoose');

// User model
const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: String,
        password: String
    })
);

module.exports = User;