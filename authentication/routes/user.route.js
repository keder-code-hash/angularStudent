const controller = require("../controller/user.controller");
const authJwt=require("../middlewire/authJwt")
module.exports=function(app)
{
    app.use(function(res,req,next)
    {
        res.header(
                "Access-Control-Allow-Headers",
                "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.get("/studentdetails",controller.studentprofile);
    app.get("/studentpayment",controller.studentpayment);
    app.get("/allStudents",controller.allStudent);
    app.get("/allPayments",controller.allpayments);
    app.put("/updatePayment",controller.updatePayment);
    app.get("/getStudentsById",controller.studentbyId);
    app.put("/insertpayment",controller.insertPayment);
    app.get("/cashierPay",controller.conPayment);
    app.put("/cashierHist",controller.cashierHist);
    app.get("/getcashier",controller.getcashier)
};
