const express =require('express')
const mongoose=require('mongoose')
const user= require('./routes/user');
const History =require('./routes/History')
const cors =require('cors')
const path =require('path');
require('dotenv').config();
const app=express();
const port=process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
app.use('/users',user);
app.use('/History',History);
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});