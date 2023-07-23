require('dotenv').config();
const express =require("express");
const port =process.env.PORT || 8090
const app =require("./app");
const mongoose =require("mongoose");




mongoose.connect( process.env.MONGO_URL).then(() => {
    console.log("connected");
  });



app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})