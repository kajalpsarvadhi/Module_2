const User = require("../Models/user")

exports.createUser = async(req,res)=>{
    try{
        const user = await User.create(req.body);
        res.status(201).json(user)
    }catch(err){
        console.error(err);
        
    }
}

exports.getUsers = async(req,res)=>{
    try{
        const users = await User.find()
        res.json(users)
    }catch(err){
        console.error(err);
        
    }
}

exports.getUserById = async(req,res)=>{
    try{
        const userId = await User.findById(req.params.id)
        if(!userId)
            return res.status(404).json({message:"User not found"})
        res.json(userId)
    }catch(err){
        console.error(err);
        
    }
}


exports.updateUser = async(req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!user){
            return res.status(404).json({message:"User not found"})

        }
        res.json(user)
    }catch(err){
        console.error(err);
        
    }
}

exports.deleteUser = async(req,res) =>{
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user)
            return res.json({ message: "User already deleted" });
        res.json({ message: "User deleted" });
    }catch(err){
        console.error(err);
        
    }
}