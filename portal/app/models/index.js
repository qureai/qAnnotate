const mongoose = require('mongoose');
const user = require('./user.model.js');

const db = {};

db.mongoose = mongoose;
db.user = user

module.exports = db;