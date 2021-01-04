const db = require('../models');
const User = db.user;

// Check if user exists
checkDuplicateUsername = (req, res, next) => {
    User.findOne({
        username: req.body.username
    }).exec((error, user) => {
        if(error) {
            res.status(500).send({ message: error });
        }

        if(user) {
            res.status(400).send({ message: "Failed. Username already exists." });
            return;
        }

        next();
    });
};

const verifyAddUser = {
    checkDuplicateUsername
};

module.exports = verifyAddUser;