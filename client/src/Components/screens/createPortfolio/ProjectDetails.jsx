import React,{useState} from 'react'
import axios from 'axios'

export default function EducationDetails() {

    const [projectData, setProjectData] = useState({
        projectname:"", projectStartDate:"", 
        projectEndDate:"", projectLink:"", projectDesc:"", projectTech:""
    })

    const addProject = (e)=>{
        e.preventDefault()
        axios("/addProject",{
            method:"post",
            headers:{
                Authorization:localStorage.getItem('jwt')
            },
            data:projectData
        })
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }
    return (
        <>
             <div className="project-details">
                    <h3>Project Details</h3>
                    {console.log(projectData)}
                    <div className="flex">
                        <form onSubmit={addProject}>
                        <h4>Add new Project</h4>
                        <div className="row">
                                <div className="form-floating col-md-12">  
                                    <input type="text" className="form-control" id="projectInput" placeholder="Project Name" 
                                    onChange={(e)=>setProjectData({...projectData,projectname:e.target.value})}/>
                                    <label htmlFor="floatingInput">Project Name</label>
                                </div>
                                <div className="form-floating col-md-6">
                                    <input type="date" className="form-control" id="startDate" placeholder="Project start Date"
                                        onSelect={(e)=>setProjectData({...projectData,projectStartDate:e.target.value})}
                                    />
                                    <label htmlFor="startMonth">Project start date</label>
                                </div>
                                <div className="form-floating col-md-6">
                                <input type="date" className="form-control" id="endDate" placeholder="Project end Date" 
                                    onSelect={(e) => setProjectData({ ...projectData, projectEndDate: e.target.value })}
                                />
                                    <label htmlFor="endMonth">Project end date</label>
                                </div>
                                <div className="form-floating col-md-12">
                                    <input type="text" className="form-control" id="ProjectLink" placeholder="Project Link" 
                                    onChange={(e)=>setProjectData({ ...projectData, projectLink: e.target.value })} />
                                    <label htmlFor="ProjectLink">Project Link</label>
                                </div>
                                <div className="form-floating col-md-12">
                                <textarea className="form-control" id="projectDescription" placeholder="Project Description"
                                    onChange={(e)=>setProjectData({ ...projectData, projectDesc: e.target.value })} />
                                    <label htmlFor="projectDescription">Project Description</label>
                                </div>
                                <div className="form-floating col-md-12">
                                    <textarea className="form-control" id="projectTechnology" placeholder="Project Technology"
                                    onChange={(e)=>setProjectData({ ...projectData, projectTech: e.target.value })} />
                                    <label htmlFor="projectTechnology">Project Technology</label>
                                </div>
                                <div className="col-md-4">
                                    <input type="reset" className="form-control" />
                                </div>
                                <div className="col-md-4">
                                    <input type="submit" className="form-control" />
                                </div>
                            </div>
                        </form>
                    </div>
                 </div>
        </>
    )
}
