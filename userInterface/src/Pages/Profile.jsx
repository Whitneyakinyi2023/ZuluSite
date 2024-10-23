import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'; // Make sure to import NavLink
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return (
      <div className="login-reminder">
        <p>🔑 Create an account or log in to unlock your profile 🔓✨</p>
        <NavLink to='/login'>
          <button className="login-button">Login</button>
        </NavLink>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Profile</h1>
      </div>
      <div className="profile-info">
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Member since: {new Date(user.dateJoined).toLocaleDateString()}</p> {/* Format the date */}
      </div>

      <div className="profile-orders">
        <h3>Order History</h3>
        <ul>
          <li>Whiskey - $40 (Ordered on: 2024-09-15)</li>
          <li>Vodka - $25 (Ordered on: 2024-10-01)</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
