const mongoose = require('mongoose')

const db = async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/crud_db")
        console.log("Mongo DB Connected!!");
        
    }catch(err){
        console.error(err);

        
    }
}

module.exports=db