//const { verifySignUp } = require("../middleware");
const controller = require("../controller/user.controller");

module.exports = function(app) {
  /*app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });*/
  //app.post("/adminLogin",controller.adminLogin)
  app.post("/api/auth/signin",controller.signin);
  //app.post("/cashierlogin",controller.cashierlogin);
};