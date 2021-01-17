import axios from 'axios'
import React,{useContext, useState} from 'react'
import {UserContext} from '../../App'
import {useHistory} from 'react-router-dom'

export default function Signin() {

    const {state,dispatch} = useContext(UserContext)
    let history = useHistory()

    const [userData, setUserData] = useState({
        email:"", password:""
    })

    let signinUser = (e)=>{
        e.preventDefault()

        axios.post('signin',userData)
        .then(res=>{
            console.log(res.data)
            localStorage.setItem('jwt',res.data.token)
            localStorage.setItem('user',JSON.stringify(res.data.saveduser))
            dispatch({ type: "USER", payload: res.data.saveduser })
            history.push('/home')

        })
        .catch(err=>{
            console.log(err.response.data)
        })
    }
    return (
        <div className="signup-container">
        {console.log(state)}
            <form onSubmit={signinUser}>
                <h1>Signup container</h1>
                <div className="row">
                    <div className="form-floating col-md-10">
                        <input type="email" className="form-control" id="floatingsigninemail" placeholder="Email" onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                        <label htmlFor="floatingsigninemail">Email</label>
                    </div>
                    <div className="form-floating col-md-10">
                        <input type="password" className="form-control" id="floatingsigninpass" placeholder="Password" onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                        <label htmlFor="floatingsigninpass">Password</label>
                    </div>
                    <div className="col-md-5">
                        <input type="reset" className="form-control" />
                    </div>
                    <div className="col-md-5">
                        <input type="submit" className="form-control" />
                    </div>
                </div>
            </form> 
        </div>
    )
}
