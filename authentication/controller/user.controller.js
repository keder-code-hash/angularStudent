const config = require("../config/auth.config");
const User = require("../models/user.model");
const jwt_decode=require("jwt-decode");
const {QueryTypes}=require("sequelize");
const Sequelize=require('sequelize');
const {or, and, gt, lt} = Sequelize.Op;
var decode;
var token;
var jwt = require("jsonwebtoken");
var time=new Date();
exports.signin = (req, res,next) => {
  User.table.findOne({
    where: {
      authid:req.body.username

    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      if(req.body.password==user.authpass)
      {
          var passwordIsValid=true;
          token = jwt.sign({ id: user.authid }, config.secret, {
            expiresIn: 86400
          })
          if(user.userrole=="student")
          {
            res.send({token});
          }
      }
      else{
        var passwordIsValid=false;
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      };

      /*if (passwordIsValid==false) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      token = jwt.sign({ id: user.authid }, config.secret, {
        expiresIn: 86400
      })
      
      next()
      {
          if(user.userrole=="student")
          {
            res.send({token});
          }
      }*/
    });
};

exports.studentprofile=(req,res,next)=>
{
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }
  decode=jwt_decode(token)
  User.studenttable.findOne({
    where:{
      studentid:decode.id
    }
  }).then(user=>
    {
      if(user)
      {
        res.json(user)
      }
      else{
        res.send('user does not exist');
      }
    }).catch(err=>
      {
        res.send('error: '+err);
      })
}
exports.studentpayment=(req,res,next)=>
{
  let token=req.headers["x-access-token"];
  if(!token)
  {
    res.status(403).send({
      message:"no token provided!"
    })
  };
  decode=jwt_decode(token);
  User.paymenttable.findAll({
    where:
    {studentid:decode.id}
  }).then(user=>
    {
      if(user)
      {
        res.send(user)
      }
      else{
        res.send("user doesnot exist")
      }
    }).catch(err=>
      {
        res.send("error: "+err)
      })
}
exports.allStudent=(req,res,next)=>
{
  User.studenttable.findAll().then(user=>
    {
      if(user)
      {
        res.send(user);
      }
      else{
        res.send("user does not exist");
      }
    }).catch(err=>
      {
        res.ststus(403).send(err);
      })
}
exports.adminLogin=(req,res,next)=>
{
  User.table.findOne({
    where: {
      authid:req.body.username

    }
  }).then(user=>
    {
      if(!user){
        res.send("user does not exist!!");
      }
      if(req.body.password==user.authpass)
      {
        var passwordIsValid=true;
        var token=jwt.sign({id:user.authid},config.secret,{
          expiresIn:86400
        })
        if(user.userrole=="admin")
        {
          res.send({token})
        }
        else
        {
          res.send("please check yoy credential");
        }

      }
      else{
        var passwordIsValid=fasle;
        res.status(401).send({message:"password is invalid"})
      }
      /*var token=jwt.sign({id:user.authid},config.secret,{
        expiresIn:86400
      })

      next()
      {
        if(user.userrole=="admin")
        {
          res.send({token})
        }
        else
        {
          res.send("please check yoy credential");
        }
      }*/
    })
}
exports.allpayments=(req,res,next)=>
{
  User.paymenttable.findAll().then(user=>
    {
      if(user)
      {
        res.send(user);
      }
      else{
        res.status(403).send({messege:"user does not exist"});
      }
    }).catch(err=>
      {
        res.send("error:"+err);
      })
}
exports.updatePayment=(req,res,next)=>
  {
    let paymentid=req.body.paymentid;
    let transid=req.body.transid;
    let status=req.body.status;
    User.paymenttable.update({status:status},{where:{paymentid:paymentid}}).then(()=>
      {
        res.send("updated successfully");
      }).catch(err=>
        {
          res.status(403).send("error:"+err);
        })
  }
exports.studentbyId=(req,res,next)=>
  {
    let studentId=req.headers["id"];
    User.studenttable.findOne({
      where:
      {studentid:studentId}
    }).then(data=>
      {
        if(data)
        {
          res.send(data);
        }else{
          res.status(404).send({messege:"user not found!!!"})
        }
      }).catch(err=>
        {
          res.send("Error:"+err);
        })
}
exports.insertPayment=(req,res,next)=>
{
  var ctime=time.getHours()+":"+time.getMinutes()+":"+time.getSeconds()
  User.paymenttable.create(
    {
      studentid:req.body.id,
      studentname:req.body.name,
      paymentamount:req.body.amount,
      status:req.body.status,
      paymentid:req.body.paymentid,
      time:req.body.time,
      event:req.body.issue,
      createdAt:ctime,
      updatedAt:req.body.utime
    }
  ).then(()=>
  {
    res.send("success!!");
  })
}
exports.cashierlogin=(req,res,next)=>
{
  User.table.findOne({
    where: {
      authid:req.body.username

    }
  }).then(user=>
    {
      if(!user)
      {
        res.send({messege:"user does not exist"})
      }
      if(user.authpass==req.body.password)
      {
        var passwordIsValid=true;
        var token=jwt.sign({ id: user.authid },config.secret,{
          expiresIn:86400
        })
        if(user.userrole=="cashier")
          {res.send({token})}
        else{
          res.status(404).send({messege:"check your credential"});
        }
      }
      else{
        var passwordIsValid=false;
        res.status(401).send({message:"password is invalid"});
      }
    })
}

exports.conPayment=(req,res,next)=>
{
  User.paymenttable.findAll({
    where:
    {
      [or]:[{status:"awaiting"},{status:"pending"}]
    }
  }).then(user=>
    {
      if(user)
      {
        res.send(user)
      }
      else{
        res.status(404).send({message:"not found!"})
      }
    }).catch(err=>
      {
        res.send(err)
      })
}
exports.cashierHist=(req,res,next)=>
{
  var cashierid=jwt_decode(req.body.cashierid)
  User.cashiertable.create({
    paymentid:req.body.paymentid,
    transid:req.body.transid,
    cashierid:cashierid.id,
    studentid:req.body.studentid,
    studentname:req.body.studentname
  }).then((user)=>
  {
    res.send({message:"successfully inserted"})
  }).catch(err=>
    {
      res.status(400).send(err)
    })
}
exports.getcashier=(req,res,next)=>
{
  User.cashiertable.findAll().then((user)=>
  {
    if(user)
    {
      res.send(user)
    }
    else{
      res.status(400).send(user)
    }
  }).catch(err=>
    {
      res.send(err);
    })
}