const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const ProjectSchema = new mongoose.Schema({
    projectname:{
        type:String,
        required:true
    },
    projectStartDate:{
        type:Date
    },
    projectEndDate:{
        type:Date
    },
    projectLink:{
        type:String
    },
    projectDesc:{
        type:String,
        required:true
    },
    projectTech:{
        type:String,
        required:true
    },
    postedBy:{
        type:ObjectId,
        ref:'UserData'
    }
})

const Project = mongoose.model("projectData",ProjectSchema)

module.exports = Project

