const mongoose = require ("mongoose")

module.exports= ()=>{
        return mongoose.connect("mongodb+srv://mubarak:mubarak_123@cluster0.pvaka.mongodb.net/adobe_assign?retryWrites=true&w=majority")
}
   
