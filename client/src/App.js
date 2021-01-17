import React, {useReducer,useContext,useEffect, createContext} from 'react'
import Signup from './Components/screens/Signup'
import { BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom'
import Signin from './Components/screens/Signin'
import Landingpage from './Components/Landingpage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import {initialState,reducer} from './reducer/userReducer'
import Home from './Components/screens/Home'
import CreatePortfolio from './Components/screens/createPortfolio/CreatePortfolio'

export const UserContext = createContext()

const Render = () => {
    let history = useHistory();
    const { dispatch } = useContext(UserContext);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))

        if (user) {
            dispatch({ type: "USER", payload: user })
        }
        else {
            history.push('/signin')
        }
    }, [])
    return (
        <Switch>
            <Route path="/signin">
                <Signin/>
            </Route>
            <Route path="/signup">
                <Signup />
            </Route>
            <Route path="/home">
                <Home/>
            </Route>
            <Route path="/createportfolio/:userid">
                <CreatePortfolio/>
            </Route>
        </Switch>
    )

}

function App() {
    
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <UserContext.Provider value={{ state, dispatch }}>
                <Router>
                    <Route exact path="/">
                        <Landingpage/>
                    </Route>
                    <Route path={[ "/signin", "/signup","/home","/createportfolio/:userid"]}>
                        <div className="main-container">
                            <Navbar/>
                            <Render/>
                        </div>
                        <Footer/>
                    </Route>
                </Router>
            </UserContext.Provider>
        </>
    );
}

export default App;