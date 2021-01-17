const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types
const UserSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    mobile:{
        type: Number,
        required: true
    },
    about:{
        type:String
    },
    skills:{
        type: Array,
    },
    about:{
        type:String
    },
    shortpitch:{
        type:String
    },
    githublink:{
        type:String,
        unique:true
    },
    linkedinlink:{
        type:String,
        unique:true
    },
    profilepic:{
        type:String
    },
    role:{
        type:String,
        default:"user"
    },
    created_at:{
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model("userdata",UserSchema)

module.exports=User