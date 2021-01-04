const { authJwt } = require('../middleware');
const controller = require('../controllers/user.controller');

// Data service
module.exports = (app) => {
    app.use((req, res, next) => {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });

    app.get("/user", [authJwt.verifyToken], controller.userBoard);
};