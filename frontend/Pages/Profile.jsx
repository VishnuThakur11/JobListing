
import "./profile.css"

import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Profile = () => {

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

  const handleLogout = () => {
    axios.get('http://localhost:3000/api/v1/user/logout', { withCredentials: true })
        .then(() => {
            setUser(null); 
            window.location.href = '/login'; 
        })
        .catch(err => console.error(err));
};

  return (
    <>

      <div className="dashboard">
        <div className="profile">
          {/* <div className=""><img className="profile-image" src= {user.profile.profilePhoto}/></div> */}
          <div>
          {/* {user.fullname} */}
          </div>
          <div></div>
          <div></div>
        </div>
        
        <div className='content'>
          <div></div>
          <div></div>
        </div>
        <div className='others'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

    </>
  )

}

export default Profile