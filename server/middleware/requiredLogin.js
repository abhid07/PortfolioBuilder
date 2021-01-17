const jwt = require('jsonwebtoken')
require('dotenv/config')
const User = require('../model/UserModel')

module.exports = (req,res,next)=>{
    const {authorization} = req.headers
    if(!authorization)
    {
        res.json({message:"You are not logged in"})
    }
    const token = authorization
    // const token = authorization.replace("Bearear "," ")
    jwt.verify(token,process.env.JWT_SECRET,(err,payload)=>{
        if(err)
        {
            res.json({ message: "You are not logged in" })
        }
        const {id} = payload
        
        User.findById({_id:id})
        .then(user=>{
            const{firstname,lastname,email,mobile,_id,role} = user
            req.loggeduser = { firstname, lastname, email, mobile, _id,role}
            next()
        })
    })
}