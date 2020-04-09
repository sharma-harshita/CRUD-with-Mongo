const UserModel= require('../models/userModel')

const get =(req,res)=>{
    res.send("You are in user controller")
}

const post =(req,res)=>{
    UserModel.create(req.body)
    .then((user)=>{
        return res.json(user)
    })
}

module.exports.get= get
module.exports.post=post