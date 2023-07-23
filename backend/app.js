const express =require("express");
const app =express();
const userRoute =require("./routes/userRoute");
const cors =require("cors");

app.use(cors());
app.use(express.json());


app.use("/user",userRoute);



module.exports =app