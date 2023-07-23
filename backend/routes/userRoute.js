const User =require("../models/UserSchema");
const express =require("express");
const router =express.Router();




router.get("/register",(req,res)=>{

    res.send("hello");
})


module.exports= router