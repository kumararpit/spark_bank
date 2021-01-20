const user= require('../models/user.model');
const History=require('../models/History.model');
const express= require('express');
const mongoose=require('mongoose');
const router= express.Router();
router
.get('/',async(req,res)=>{
     await user.find()
    .then(users=>{
        res.send(users);
    });
   
})
.post('/',async(req,res)=>{
    let users= new user({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        current_balance:req.body.current_balance 
    });
    users=await users.save();
    res.send(users);
})



module.exports=router;