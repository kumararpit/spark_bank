const mongoose=require('mongoose');
const{schema}=mongoose;

const userschema= new mongoose.Schema({
    name:{
        type:String,
        require:true,
        minlenght: 4,
        maxlength: 50
    },
    email:{
        type:String,
        require:true,
        minlenght: 4,
        maxlength: 50
    },
    phone:{
        type:Number,
        require:true,
        minlenght: 10,
        maxlength: 10
    },
    current_balance:{
        type:Number,
        require:true,
        minlenght:1
    }
});
const user=mongoose.model('user',userschema);
module.exports=user;