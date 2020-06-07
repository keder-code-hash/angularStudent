const db=require("../models/index");
const Sequelize=require('sequelize');
let table=db.sequelize.define("userdetails", {
      authid: {
        type: Sequelize.STRING,
        primaryKey:true,
      },
      authpass: {
        type: Sequelize.STRING
      },
      userrole:
      {
        type:Sequelize.STRING
      }
    });
let studenttable=db.sequelize.define("studentdetails",
{
  studentid:{
    type:Sequelize.STRING,
    primaryKey:true
  },
  name:{
    type:Sequelize.STRING
  },
  email:
  {
    type:Sequelize.STRING
  },
  batch:{
    type:Sequelize.STRING
  },
  subject:{
    type:Sequelize.STRING
  },
  class:
  {
    type:Sequelize.STRING
  },
  phNo:
  {
    type:Sequelize.STRING
  }
})
let paymenttable=db.sequelize.define("payments",
{
  studentid:
  {
    type:Sequelize.STRING,
    primaryKey:true
  },
  studentname:
  {
    type:Sequelize.STRING
  },
  paymentamount:
  {
    type:Sequelize.STRING
  },
  status:
  {
    type:Sequelize.STRING
  },
  paymentid:
  {
    type:Sequelize.STRING,
    primarykey:true
  },
  time:
  {
    type:Sequelize.STRING
  },
  event:
  {
    type:Sequelize.STRING
  }
})
tables={}
tables.table=table;
tables.studenttable=studenttable;
tables.paymenttable=paymenttable
module.exports=tables;