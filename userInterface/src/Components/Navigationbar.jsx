import React from 'react';
import imagesData from '../assets/images.json';
import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navigationbar = () => {
    // Find the image with id 10
    const logoImage = imagesData.images.find(image => image.id === 10);

    return (
        <div className='navbar'>
            {/* Render the logo image */}
            {logoImage && (
                <img src={new URL(`../assets/${logoImage.src}`, import.meta.url).href} alt={logoImage.name} className="navbar-logo" />
            )}
            <ul className='nav-list'>
                <NavLink to='/' className='nav-item'>
                    <p>Home</p>
                </NavLink>
                <NavLink to='/about' className='nav-item'>
                    <p>About Zulu</p>
                </NavLink>
                <NavLink to='/drinks' className='nav-item'>
                    <p>Products</p>
                </NavLink>
                <NavLink to='/order' className='nav-item'>
                    <p>Order</p>
                </NavLink>
                <NavLink to='/history' className='nav-item'>
                    <p>History</p>
                </NavLink>
                <NavLink to='/login' className='nav-item'>
                    <p>Login</p>
                </NavLink>
                {/* <NavLink to='/contact' className='nav-item'>
                    <p>Contact</p>
                </NavLink> */}
                <NavLink to='/cart' className='nav-item'>
                    <p>Cart</p>
                </NavLink>
                <NavLink to='/profile' className='nav-item'>
                    <p>Profile</p>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigationbar;
