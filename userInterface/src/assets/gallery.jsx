import React from 'react';
import imagesData from './images.json'; // Import the JSON file containing image data (adjust path if necessary)

const Gallery = () => {
    return (
        <div className="gallery"> {/* Main container for the gallery */}
            {imagesData.images.map((image) => (  // Loop through the images array in images.json
                <div key={image.id} className="image-item"> {/* Each image gets a unique key based on its ID */}
                    <h3>{image.name}</h3> {/* Display the name of the image */}
                    <img src={image.src} alt={image.name} /> {/* Display the image using the source path from the JSON file */}
                </div>
            ))}
        </div>
    );
};

export default Gallery;