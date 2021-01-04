const config = require('../config/auth.config');
const db = require('../models');
const User = db.user;

let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');

exports.signin = (req, res) => {
    User.findOne({
        username: req.body.username
    })
        .exec((error, user) => {
            if(error) {
                res.status(500).send({ message: error });
                return;
            }

            if(!user) {
                return res.status(404).send({ message: "User not found." });
            }

            // Uncomment later to hash password
            // let passwordIsValid = bcrypt.compareSync(
            //     req.body.password,
            //     user.password
            // );

            let passwordIsValid = req.body.password === user.password ? true : false;

            if(!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid password"
                });
            }

            let token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400 // 24 hours
            });

            res.status(200).send({
                id: user.id,
                username: user.username,
                accessToken: token
            });
        });
};