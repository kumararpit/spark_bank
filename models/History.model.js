const mongoose=require('mongoose');
const{schema}=mongoose;

const Historychema= new mongoose.Schema({
    sender:{
        type:String,
        require:true,
        minlenght: 4,
        maxlength: 50
    },
    reciver:{
        type:String,
        require:true,
        minlenght: 4,
        maxlength: 50
    },
    Transfer_amount:{
        type:Number,
        require:true,
        minlenght: 1,
    }
});
const History=mongoose.model('History',Historychema);
module.exports=History;