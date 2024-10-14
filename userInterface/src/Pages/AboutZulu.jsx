import React from 'react';
import imagesData from '../assets/images.json';
import './about.css';

const aboutImage = imagesData.images.find(image => image.id === 9);

const AboutZulu = () => {
  return (
    <div className="about-container">
      {/* About Us Section */}
      <div className="about-us-card">
        <div className="image-container">
          <img
            src={new URL(`../assets/${aboutImage.src}`, import.meta.url).href}
            alt={aboutImage.name}
            className="about-image"
          />
        </div>
        <div className="about-content">
          <h2>Welcome to Zulu Liquor Store</h2>
          <p>
            Located at the intersection of Mirema Drive and Mirema Road, Zulu Liquor Store offers an amazing selection of all your favorite liquor brands. Enjoy an atmosphere of fun and relaxation with pool games, drinking games, and live football screenings. We provide a perfect ambiance for any occasion. Come visit us and indulge in the ultimate liquor experience.
          </p>
        </div>
      </div>

      {/* Contact Us Section with Google Maps */}
      <div className="contact-us-card">
        <h2>Contact Us</h2>
        <p>📍 Address: Mirema Drive, Nairobi, Kenya</p>
        <p>📞 Phone: +254 712 345 678</p>
        <div className="map-container">
          {/* Google Maps Embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14792.282438719463!2d36.8805666!3d-1.2090117!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3fa64a65947f%3A0xa99ac04d2f90b53c!2sShakaZulu!5e1!3m2!1sen!2ske!4v1728908984117!5m2!1sen!2ske"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Zulu Liquor Store Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutZulu;
