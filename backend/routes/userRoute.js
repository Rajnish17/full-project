const User = require("../models/UserSchema");
const express = require("express");
const router = express.Router();


//post user

router.post("/register", async(req,res) => {

    const { name, email, contact } = req.body

    try {

        if (!name || !email || !contact) {
           return res.status(401).json({error:"please fill all details"})
        }

        const newUser = new User({
            name,
            email,
            contact
        });

        await newUser.save();

        res.status(200).json({
            message:"success",
            data:newUser
        })



    } catch (error) {
        res.status(400).json(error)
    }


})


//get user data

router.get("/show", async (req, res) => {
    try {
        const data = await User.find();
        res.status(200).json({
            message: "sucess",
            data: data
        })
    } catch (error) {
        res.status(400).json(error);
    }
});


//update user Details
router.put("/update/:id", async (req, res) => {
    
    try {

      const updateUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
            
       
        await updateUser.save();
        res.status(200).json({ message: 'details successfully updated' });


    } catch (err) {
        console.log(err)
    }
})



//delete User

router.delete("/delete/:id", async (req, res) => {

    try {
        await User.findByIdAndDelete(req.params.id);

        res.status(201).json({
            message: "Successfully deleted"
        });
    } catch (err) {
        res.status(500).json(err)
    }
});


module.exports = router