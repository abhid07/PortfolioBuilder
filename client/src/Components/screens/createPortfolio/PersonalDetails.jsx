import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function PersonalDetails(props) {

    const [userDetails, setUserDetails] = useState({
        firstname: "", lastname: "", about: "", shortpitch:"", skills:[],githublink:"", linkedinlink:""
    })
    let id = props.userid

      const editDetails = (e,id)=>{
        e.preventDefault()
        axios.get(`/getuser/${id}`)
        .then(res=>{
                console.log(res.data)
                setUserDetails({
                    firstname: res.data.user.firstname, 
                    lastname:res.data.user.lastname, 
                    about: res.data.user.about, 
                    shortpitch: res.data.user.shortpitch, 
                    skills: res.data.user.skills, 
                    githublink: res.data.user.githublink, 
                    linkedinlink: res.data.user.linkedinlink
                })
            })
        .catch(err=>console.log(err))
        }

    const updateUserDetails = (e,id) =>{
        e.preventDefault()
        axios(`/updateuser/${id}`,{
            method:"put",
            headers:{
                Authorization:localStorage.getItem('jwt')
            },
            data:userDetails
        })
        .then(res=>{
            console.log(res.data)
            setUserDetails({
                firstname:"",
                lastname:"",
                about: "", 
                shortpitch: "", 
                skills: [], 
                githublink: "", 
                linkedinlink: ""
            })
        })
        .catch(err=>console.log(err))
    }
    let resetData = ()=> {
        setUserDetails({
            firstname: "",
            lastname: "",
            about: "",
            shortpitch: "",
            skills: [],
            githublink: "",
            linkedinlink: ""
        })
    }
    return (
        <div>
            <div className="personal-details">
                <h3>Personal Details</h3>
                <div className="flex">
                    <form onSubmit={(e)=>updateUserDetails(e,id)}>
                        <div className="personal-header">
                            <h4>Add Personal Details</h4>
                            <button onClick={(e)=>editDetails(e,id)}>Edit details</button>
                        </div>
                        <div className="row">
                            <div className="form-floating col-md-6">
                                <input type="text" className="form-control" value={userDetails.firstname} id="fisrtname" placeholder="First Name" onChange={(e)=>{
                                    setUserDetails({...userDetails,firstname:e.target.value})
                                }} />
                                <label htmlFor="firstname">First Name</label>
                            </div>
                            <div className="form-floating col-md-6">
                                <input type="text" className="form-control" id="lastname" value={userDetails.lastname} placeholder="Last Name" onChange={(e) => {
                                    setUserDetails({ ...userDetails, lastname: e.target.value })
                                }} />
                                <label htmlFor="lastname">Last Name</label>
                            </div>
                            <div className="form-floating col-md-12">
                                <textarea className="form-control" id="pitch" value={userDetails.shortpitch} placeholder="Short and engaging pitch about yourself" onChange={(e) => {
                                    setUserDetails({ ...userDetails, shortpitch:e.target.value })
                                }}/>
                                <label htmlFor="pitch">Short and engaging pitch about yourself</label>
                            </div>
                            <div className="form-floating col-md-12">
                                <textarea className="form-control" id="about" value={userDetails.about} placeholder="Write about yourself" onChange={(e) => {
                                    setUserDetails({ ...userDetails, about: e.target.value })
                                }}/>
                                <label htmlFor="about">Write about yourself</label>
                            </div>
                            <div className="form-floating col-md-10">
                                <textarea className="form-control" id="skills" value={userDetails.skills} placeholder="Add your skills" onChange={(e) => {
                                    setUserDetails({ ...userDetails, skills: e.target.value })
                                }}/>
                                <label htmlFor="skills">Add your skills</label>
                            </div>
                            <div className="col-md-9">
                                <label htmlFor="photo">Add your photo</label>
                                <input type="file" className="form-control" id="photo"/>
                            </div>
                            <div className="form-floating col-md-6">
                                <input type="text" className="form-control" id="gitlink" value={userDetails.githublink} placeholder="Github Link" onChange={(e) => {
                                    setUserDetails({ ...userDetails, githublink: e.target.value })
                                }} />
                                <label htmlFor="gitlink">Github profile Link</label>
                            </div>
                            <div className="form-floating col-md-6">
                                <input type="text" className="form-control" id="linkedinlink" value={userDetails.linkedinlink} placeholder="Linkedin profile link" onChange={(e) => {
                                    setUserDetails({ ...userDetails, linkedinlink: e.target.value })
                                }}/>
                                <label htmlFor="linkedinlink">Linkedin profile link</label>
                            </div>
                            <div className="col-md-4">
                                <input type="reset" onClick={resetData} className="form-control" />
                            </div>
                            <div className="col-md-4">
                                <input type="submit" className="form-control" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
