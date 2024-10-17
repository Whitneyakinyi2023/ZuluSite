import React, { useState } from 'react';
import imagesData from '../assets/image.json';
import './add.css'

// Find the default image for upload from the JSON data
const uploadImage = imagesData.images.find(image => image.id === 2);

const AddDrink = () => {
    // State to hold the preview URLs of uploaded images
    const [imagePreviews, setImagePreviews] = useState([uploadImage.src, '', '', '', '']);

    // Function to handle file selection and update image previews
    const handleImageUpload = (index) => (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const updatedPreviews = [...imagePreviews];
                updatedPreviews[index] = reader.result; // Set the new preview URL
                setImagePreviews(updatedPreviews);
            };
            reader.readAsDataURL(file); // Read the file as a data URL
        }
    };

    return (
        <form className="add-drink-form">
            <h2>Add a New Drink</h2>
            <div className="upload-container">
                <p>Upload Images:</p>
                <div className="image-upload-grid">
                    {/* Loop through the image previews to create upload inputs */}
                    {imagePreviews.map((src, index) => (
                        <label key={index} htmlFor={`image${index + 1}`} className="image-upload-label">
                            {/* Show image preview if available, otherwise show default upload image */}
                            <img
                                src={src ? src : new URL(`../assets/${uploadImage.src}`, import.meta.url).href}
                                alt={`Drink Preview ${index + 1}`}
                                className="upload-image"
                            />
                            <input
                                type="file"
                                id={`image${index + 1}`}
                                hidden
                                accept="image/*"
                                onChange={handleImageUpload(index)} // Update preview on file selection
                            />
                        </label>
                    ))}
                </div>
            </div>
            {/* Submit button (to be implemented with actual logic) */}
            <button type="submit" className="submit-button">Add Drink</button>
        </form>
    );
};

export default AddDrink;
