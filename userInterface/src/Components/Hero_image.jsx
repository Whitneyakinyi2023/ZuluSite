import React from 'react';
import imagesData from '../assets/images.json';
import './hero.css';

const introImage = imagesData.images.find(image => image.id === 9);

const Hero_image = () => {
    return (
        <div className='hero'>
            {/* Left section of the hero section */}
            <div className='introduction'>
                <p>Indulge with Us</p>
                <br />
            </div>
            {/* <div className='tag-line'>
                <p>Indulge</p>
            </div> */}

            {/* Right section of the hero section */}
            {introImage && (
                <div className='hero-image'>
                    <img
                        src={new URL(`../assets/${introImage.src}`, import.meta.url).href}
                        alt={introImage.name}
                        className="intro"
                    />
                </div>
            )}
        </div>
    );
}

export default Hero_image;
