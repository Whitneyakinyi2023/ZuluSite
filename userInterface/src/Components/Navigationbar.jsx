import React from 'react';
import imagesData from '../assets/images.json';
import './navbar.css';


const Navigationbar = () => {
    // Find the image with id 10
    const logoImage = imagesData.images.find(image => image.id === 10);

    return (
        <div className='navbar'>
            {/* Render the image */}
            {logoImage && (
                <img src={new URL(`../assets/${logoImage.src}`, import.meta.url).href} alt={logoImage.name} className="navbar-logo" />
            )}
        </div>
    );
};

export default Navigationbar;
