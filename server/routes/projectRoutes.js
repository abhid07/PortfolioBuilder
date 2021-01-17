const express = require('express');
const { addProject, getUserProject } = require('../controller/ProjectController');
const router = express.Router()
const requiredLogin = require('../middleware/requiredLogin');


//add new project
router.post('/addProject',requiredLogin,addProject)

//get list of user projects
router.get('/getProject',requiredLogin,getUserProject)

module.exports = router