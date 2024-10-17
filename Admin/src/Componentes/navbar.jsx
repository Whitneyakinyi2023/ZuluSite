import React from 'react';
import imagesData from '../assets/image.json';
import './navbar.css';
import { NavLink, Link } from 'react-router-dom';


// Find the logo image from the JSON data
const logoImage = imagesData.images.find(image => image.id === 1);

// Define the Navbar component
const Navbar = () => {
    return (
        <div className="navbar">
            {/* Render the logo image */}
            <img
                src={new URL(`../assets/${logoImage.src}`, import.meta.url).href}
                alt={logoImage.name}
                className="logo-image"
            />

            <ul className='nav-list'>
                <NavLink to='/Add' className='nav-item'><p>Add Drinks</p></NavLink>
                <NavLink to='/List' className='nav-item'><p>List of Drinks</p></NavLink>
                <NavLink to='/Orders' className='nav-item'><p>Orders</p></NavLink>
                <NavLink to='/Stats' className='nav-item'><p>Statistics</p></NavLink>
            </ul>
            {/* Logout button */}
            <button className="logout-button">Logout</button>
        </div>
    );
};

export default Navbar;
