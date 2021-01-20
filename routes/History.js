const History=require('../models/History.model');
const user =require('../models/user.model')
const express= require('express');
const mongoose=require('mongoose');
const router= express.Router();

router
.get('/',async(req,res)=>{
     await History.find()
    .then(History=>{
        res.json({History});
    });
   
})
router.post('/:id1/:id2',async(req,res)=>{
    const transfer_amount=req.body.transfer_amount;
    const send= await user.find({ _id:req.params.id1});
    const recive= await user.find({ _id:req.params.id2});
    let history= new History({
        sender:send[0].name,
        reciver:recive[0].name,
        Transfer_amount:transfer_amount
    });
    history=await history.save().then(
        res.send(history)
    )
}) 
.put('/:id1/sendto/:id2',(req,res)=>{
    const transfer_amount=req.body.transfer_amount;
    user.find({_id:req.params.id1}).then((users)=>{
     const balance1=users[0].current_balance;
     let nill=null;
     if(balance1==0) return res.json(nill);
     if(balance1>=transfer_amount)
     { 
         let flag=true
        //  history[0].status=success;
         users[0].current_balance=(balance1-transfer_amount);
         users[0].save()
         .then(res.json(flag));
       user.find({_id:req.params.id2}).then((users)=>{
           const balance2=users.current_balance;
           users.current_balance+=Number(transfer_amount);
           users[0].save() 
       })
      
     }
     if(balance1<transfer_amount)
     {  
         const unsufficent=12;
         res.json(unsufficent);
     }
   })
   .catch(err=>{
          res.status(404).send('error'+err);
   }); 
      
})
module.exports=router;