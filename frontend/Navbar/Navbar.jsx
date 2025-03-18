import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink, BrowserRouter, Link } from "react-router-dom";
import axios from 'axios';
import "../Navbar/Navbar.css";
import Home from '../Pages/Home';
import Jobs from "../Pages/Jobs";
import Services from "../Pages/Services";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Profile from '../Pages/Profile';

function Navbar() {
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true); 

  
    useEffect(() => {
     
        const fetchUserProfile = () => {
            axios.get('http://localhost:3000/api/v1/user/profile', { withCredentials: true })
                .then(response => {
                    setUser(response.data.user);
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    setLoading(false);
                });
        };
        fetchUserProfile();
    }, []);

useEffect(
    ()=>{
        <Navbar />
    },[<Login />]
);
    // Handle Logout
    const handleLogout = () => {
        axios.get('http://localhost:3000/api/v1/user/logout', { withCredentials: true })
            .then(() => {
                setUser(null); 
                window.location.href = '/login'; 
            })
            .catch(err => console.error(err));
    };

    return (
        <BrowserRouter>
            <div className="navbar">
                <div>
                    <Link to="/" id="logo">Rojgaar.com</Link>
                </div>
                <div className="links">
                    <NavLink to="/" className="Home">Home</NavLink>
                    <NavLink to="/jobs" className="jobs">Jobs</NavLink>
                    <NavLink to="/services" className="services">Services</NavLink>
                </div>
                <div className="nav-buttons">
                    {loading ? (
                        <button className="logout" disabled>Loading...</button>
                    ) : user ? (
                        <>
                            <span>{user.fullname}</span> {/* Show user’s full name */}
                            <Link to="/profile"><img className='userProfile' src={user.profile.profilePhoto}/></Link>
                            <button className="logout" onClick={handleLogout}>Logout</button> {/* Logout Button */}
                        </>
                    ) : (
                        <>
                            <NavLink to="/login" id="login">
                                <button className="btn1">Login</button>
                            </NavLink>
                            <NavLink to="/register" id="signup">
                                <button className="btn2">Register</button>
                            </NavLink>
                        </>
                    )}
                </div>
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/services" element={<Services />} />
                <Route path="/profile" element={<Profile />} />

            </Routes>
        </BrowserRouter>
    );
}

export default Navbar;
