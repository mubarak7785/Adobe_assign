const express=require("express")
const cors = require("cors")

const app = express ()
app.use(cors())
const port=process.env.PORT || 2089
app.use(express.json())

const connect=require("./configs/db")

const userController=require("./controllers/user.controller")
app.use("/users",userController)

const postController=require("./controllers/post.controller")
app.use("/posts",postController)




app.listen(port,async function (req,res){
    try{
        await connect();
        console.log ("Listening Port 2089")
    }catch(err){
        console.log(err.message)
    }
})

