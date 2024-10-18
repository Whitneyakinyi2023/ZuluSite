import React, { useState } from 'react';
import imagesData from '../assets/images.json';
import './navbar.css';
import { NavLink, Link } from 'react-router-dom';

const Navigationbar = () => {
    const logoImage = imagesData.images.find(image => image.id === 10);
    const searchImage = imagesData.images.find(image => image.id === 12);
    const profileImage = imagesData.images.find(image => image.id === 13);
    const cartImage = imagesData.images.find(image => image.id === 14);
    const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility

    // Toggle dropdown menu
    const toggleDropdown = () => {
        setDropdownOpen(prevState => !prevState);
    };

    return (
        <div className='navbar'>
            {logoImage && (
                <img
                    src={new URL(`../assets/${logoImage.src}`, import.meta.url).href}
                    alt={logoImage.name}
                    className="navbar-logo"
                />
            )}
            <ul className='nav-list'>
                <NavLink to='/' className='nav-item'><p>Home</p></NavLink>
                <NavLink to='/about' className='nav-item'><p>About Zulu</p></NavLink>
                <NavLink to='/drinks' className='nav-item'><p>Products</p></NavLink>
                <NavLink to='/ShoppingCart' className='nav-item'><p>Order</p></NavLink>
            </ul>
            <div className='profile' onClick={toggleDropdown}>
                {/* Render the profile image */}
                {profileImage && (
                    <img
                        src={new URL(`../assets/${profileImage.src}`, import.meta.url).href}
                        alt={profileImage.name}
                        className="profile-icon"
                    />
                )}
                {dropdownOpen && (
                    <div className='dropdown-menu'>
                        <NavLink to='/profile' className='dropdown-item'>Profile</NavLink>
                        <Link to='/cart' className='dropdown-item'>
                            {/* Render the cart icon */}
                            {cartImage && (
                                <img
                                    src={new URL(`../assets/${cartImage.src}`, import.meta.url).href}
                                    alt={cartImage.name}
                                    className="cart-icon"
                                />
                            )}
                            Cart
                        </Link>
                        <NavLink to='/login' className='dropdown-item'>Login/Logout</NavLink>
                        <NavLink to='/history' className='dropdown-item'>History</NavLink>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navigationbar;
