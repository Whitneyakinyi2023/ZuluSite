import React, { useEffect, useState } from 'react';
import productsData from '../assets/products.json'; // Import the JSON data

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

    return (
        <div className="promotion-section">
            <h2>Featured Promotions</h2>
            <div className="promotion-products">
                {promotedProducts.map(product => (
                    <div key={product.id} className="promotion-product">
                        <h3>{product.name}</h3>
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
