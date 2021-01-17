import React, { useContext } from 'react'
import { UserContext } from '../../../App'
import PersonalDetails from './PersonalDetails'
import ProjectDetails from './ProjectDetails'
import {useParams} from  'react-router-dom'

export default function CreatePortfolio() {
    const { state } = useContext(UserContext)
    let { userid } = useParams()
    console.log(userid)
    return (
        <>
            <div className="createportfolio-container">
                <h1>Welcome Back {(state) ? state.firstname : ""}</h1>
                {console.log(state)}
                <hr/>
                <PersonalDetails userid={userid}/>
                <hr/>
                <ProjectDetails/>
            </div>
        </>
    )
}
