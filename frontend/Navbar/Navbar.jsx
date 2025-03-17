import { Routes, Route, NavLink ,BrowserRouter,Link } from "react-router-dom"
import Home from '../Pages/Home'
import "../Navbar/Navbar.css"
import Jobs from "../Pages/Jobs"
import Services from "../Pages/Services"
import Login from "../Pages/Login"
import Register from "../Pages/Register"

function Navbar() {
    return (
        <>
            <BrowserRouter>
            <div className="navbar">
                <div>
                    <Link to ="/" id="logo">Rojgaar.com</Link>
                    
                </div>
                <div className="links">
                   
                    <NavLink to="/" className="Home">Home</NavLink>
                    <NavLink to="/jobs" className="jobs">Jobs</NavLink>
                    <NavLink to="/services" className="services">Services</NavLink>
                </div>
                <div className="nav-buttons">
                    <NavLink to="/login" id="login"> <button className="btn1" >Login</button> </NavLink>
                    <NavLink to="/register" id="signup">  <button className="btn2" >Register</button> </NavLink>
                    
                </div>
            </div>




            <Routes>
                
                <Route path="/" element={<Home />} />
                <Route path="/jobs" element={<Jobs/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/services" element={<Services/>} />

            </Routes>



            
            </BrowserRouter>
        </>
    )
}

export default Navbar