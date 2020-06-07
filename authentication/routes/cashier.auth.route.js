const controller=require("../controller/user.controller")
module.exports=function(app)
{
    app.post("/cashierlogin",controller.cashierlogin);
}