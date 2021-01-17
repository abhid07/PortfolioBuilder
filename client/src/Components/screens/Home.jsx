import React, { useContext } from 'react'
import { UserContext } from '../../App'
import AdminHome from './AdminHome'
import UserHome from './UserHome'

 
export default function Home() {
    const { state } = useContext(UserContext)
    
    return (
        <>
            {
                state?state.role==="user"   
                ?
                <UserHome/>
                :
                <AdminHome/>
                :<></>
            }
        </>
    )
}
