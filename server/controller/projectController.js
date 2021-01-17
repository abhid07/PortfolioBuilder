const User = require('../model/UserModel')
const Project = require('../model/ProjectModel')


//add new porject
exports.addProject = ((req,res)=>{

    const { projectname,projectStartDate,projectEndDate,projectLink,projectDesc,projectTech}=req.body
    const project = new Project({
        projectname, 
        projectStartDate, 
        projectEndDate, 
        projectLink, 
        projectDesc, 
        projectTech,
        postedBy: req.loggeduser
    })
    console.log(req.loggeduser)
    project.save()
    .then(result=>{
        res.json({project:result,message:"Project added successfully"})
    })
    .catch(err=>{
        console.log(err)
    })
})

//get all project added by user

exports.getUserProject = ((req,res)=>{
    Project.find({postedBy:req.loggeduser._id})
    .populate("postedBy","name email")
    .then(project=>{
        res.send(project)
    })
    .catch(err=>console.log(err))
})