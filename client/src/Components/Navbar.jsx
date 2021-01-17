import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'


export default function Navbar() {
    const { state } = useContext(UserContext)
    return (
        <div>
            {/* {console.log(state._id)} */}
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Logo</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/signin" className="navbar-brand">Signin</Link>
                            <Link to="/signup" className="navbar-brand">Signup</Link>
                            <Link to="/home" className="navbar-brand">Home</Link>
                            <Link to={`/createportfolio/${state?state._id:<></>}`} className="navbar-brand">Create Portfolio</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
