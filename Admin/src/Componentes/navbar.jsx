import React from 'react';
import imagesData from '../assets/image.json';
import './navbar.css';

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
            {/* Logout button */}
            <button className="logout-button">Logout</button>
        </div>
    );
};

export default Navbar;
