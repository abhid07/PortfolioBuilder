import React,{useState} from 'react'
import axios from 'axios'
export default function Signup() {


    const [userData, setUserData] = useState({
        firstname:"", lastname:"", email:"", password:"", mobile:""
    })
    const [reEnterPassword,setReEnterPassword] = useState("")

    let addUserData = (e) =>{
        e.preventDefault()
        if(userData.password!==reEnterPassword)
        {
            alert("Password not match")
        }
        axios.post('/signup',userData)
        .then(res=>{
            console.log(res.data)
        })
        .catch(err=>console.log(err))
    }
    let showPassword=(id)=>{
        let input = document.getElementById(id)
        input.type="text"
    }
    let hidePassword = (id) => {
        let input = document.getElementById(id)
        input.type = "password"
    }
    return (
        <>
            {console.log(userData , reEnterPassword)}
            <div className="signup-container">
            <form onSubmit={addUserData}>
                <h1>Signup container</h1>
                <div className="row">
                    <div className="form-floating col-md-6">
                        <input type="text" className="form-control" id="floatingInput" placeholder="First Name" onChange={(e)=>setUserData({...userData,firstname:e.target.value})}/>
                        <label htmlFor="floatingInput">FirstName</label>
                    </div>
                    <div className="form-floating col-md-6">
                            <input type="text" className="form-control" id="floatingInput1" placeholder="Last Name" onChange={(e) => setUserData({ ...userData, lastname: e.target.value })} />
                        <label htmlFor="floatingInput1">LastName</label>
                    </div>
                    <div className="form-floating col-md-12">
                            <input type="text" className="form-control" id="floatingInput2" placeholder="Mobile Number" onChange={(e) => setUserData({ ...userData, mobile: e.target.value })}/>
                            <label htmlFor="floatingInput2">Mobile Number</label>
                    </div>
                    <div className="form-floating col-md-12">
                            <input type="email" className="form-control" id="floatingEmail3" placeholder="Email" onChange={(e) => setUserData({ ...userData, email: e.target.value })}/>
                            <label htmlFor="floatingEmail3">Email</label>
                    </div>
                        <div className="form-floating col-md-12" onMouseEnter={() => showPassword("floatingPassword4")} onMouseLeave={() => hidePassword("floatingPassword4")}>
                            <input type="password" className="form-control" id="floatingPassword4" placeholder="Password" onChange={(e) => setUserData({ ...userData, password: e.target.value })}/>
                        <label htmlFor="floatingPassword4">Password</label>
                    </div>
                        <div className="form-floating col-md-12" onMouseEnter={() => showPassword("floatingPassword5")} onMouseLeave={() => hidePassword("floatingPassword5")}>
                        <input type="password" className="form-control" id="floatingPassword5" placeholder="Re-Enter Password" onChange={(e)=>setReEnterPassword(e.target.value)} />
                        <label htmlFor="floatingPassword5">Re-Enter Password</label>
                    </div>
                        <div className="col-md-6">
                            <input type="reset" className="form-control"/>
                        </div>
                        <div className="col-md-6">
                            <input type="submit" className="form-control"/>
                        </div>
                    </div>  
            </form> 
            </div>
           
        </>
    )
}
