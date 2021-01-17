const User = require('../model/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv/config')


// signup

exports.signup=((req,res)=>{
    const {email,password} = req.body
   
    User.findOne({email:email})
        .then((user)=>{
            if(user)
            {
                return res.send("email exists")
            }
    
        let newuser= new User(req.body)
        newuser.password = bcrypt.hashSync(password,bcrypt.genSaltSync(10),null)
        newuser.save()
        .then(data=>res.send(data))
        .catch(err=>console.log(err))
        })
        .catch(err => console.log(err))
    })

//signin

exports.signin = ((req,res)=>{
    const {email,password} = req.body
    if (!email, !password) {
        return res.status(422).json({ error: "All fields are necessary" })
    }
    User.findOne({ email: email })
        .exec((err, user) => {
            if (err) {
                return res.status(422).json({ error: "Something went wrong" })
            }
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    let {_id,firstname,lastname,mobile,email,role} = user
                    const token = jwt.sign({ id: _id }, process.env.JWT_SECRET)
                    res.json({ token, saveduser:{ _id,firstname,lastname, mobile, email,role},message:"signin success"})
                }
                else {
                    return res.status(422).json({ error: "Invalid Password" })
                }
            }
            else {
                return res.status(422).json({ error: "Email id dont exist" })
            }
        })
})

//delete user

exports.deleteuser = ((req,res)=>{
    User.findByIdAndDelete({_id:req.params.id})
    .then(user=>{
        res.json({message:"user deleted",user})
    })
    .catch(err=>res.send(err))
})

//get all user

exports.getalluser = ((req,res)=>{
    User.find((err,user)=>{
        if(user)
        {
            res.send(user)
        }
        else
        {
            res.send(err)
        }
    })
})

//update user details

exports.updateUser = ((req,res)=>{
    User.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
    .then((user)=>{
        return res.json(user)
    })
    .catch(err=>res.json({error:"No user found with specified ID"}))
})

//get one user by id

exports.getuserbyid = ((req,res)=>{
    User.findById({_id:req.params.id})
    .then(user=>res.json({user}))
    .catch(err=>{
        console.log(err)
        res.json({
            error: "No user found with specified ID"})
    })
})

