import React, { useEffect, useState } from 'react';
import productsData from '../assets/products.json';
import imagesData from '../assets/images.json'; // Import your images JSON
import 'pro'
const Promotion = () => {
    const [promotedProducts, setPromotedProducts] = useState([]);

    useEffect(() => {
        // Function to get three random products
        const getRandomProducts = () => {
            const productsArray = productsData.products; // Access the products array
            const shuffledProducts = [...productsArray].sort(() => 0.5 - Math.random());
            return shuffledProducts.slice(0, 3); // Get the first three products
        };

        // Set promoted products in the state
        setPromotedProducts(getRandomProducts());
    }, []);

    // Function to find the image by product ID
    const findImageByProductId = (id) => {
        const image = imagesData.images.find(img => img.id === id);
        return image ? new URL(`../assets/${image.src}`, import.meta.url).href : null;
    };

    return (
        <div className="promotion-section">
            <h2>Featured Promotions</h2>
            <div className="promotion-products">
                {promotedProducts.map(product => (
                    <div key={product.id} className="promotion-product">
                        <h3>{product.name}</h3>
                        <img
                            src={findImageByProductId(product.id)}
                            alt={product.name}
                            className="promotion-image"
                        />
                        <p>{product.description}</p>
                        <p>Price: Ksh {product.price}</p>
                        <p>Size: {product.size}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Promotion;
