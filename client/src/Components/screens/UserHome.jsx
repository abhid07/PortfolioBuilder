import axios from 'axios'
import React, { useContext } from 'react'
import { UserContext } from '../../App'

export default function User() {
    const { state } = useContext(UserContext)

    const getProject = (e) =>{
        e.preventDefault()
        axios("/getProject",{
            method:"get",
            headers:{
                Authorization:localStorage.getItem('jwt')
            }
        })
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }
    return (
        <div>
            <h1>Welcome {(state)?state.firstname:""}</h1>
            <button onClick={getProject}>Get project</button>

        </div>
    )
}
