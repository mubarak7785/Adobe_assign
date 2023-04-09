const express=require("express")
const cors = require("cors")

const app = express ()
app.use(cors())
const port=process.env.PORT || 2089
app.use(express.json())

const connect=require("./configs/db")

const registerController=require("./controllers/register.controller")
app.use("/register",registerController)


app.listen(port,async function (req,res){
    try{
        await connect();
        console.log ("Listening Port 2124")
    }catch(err){
        console.log(err.message)
    }
})

