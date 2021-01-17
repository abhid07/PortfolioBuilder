const express = require('express');
const router = express.Router()
const {signup, signin, deleteuser, getalluser, updateUser, getuserbyid} = require('../controller/userController')
const requiredlogin = require('../middleware/requiredLogin')
const adminLogin = require('../middleware/adminLogin')
//signup
router.post('/signup',signup)

//signin 
router.post('/signin',signin)

//delete
router.delete('/delete/:id',requiredlogin,deleteuser)

//get all user
router.get('/user', getalluser)

//update user info
router.put('/updateuser/:id',requiredlogin,updateUser)

//get user by id
router.get('/getuser/:id',getuserbyid)


module.exports = router