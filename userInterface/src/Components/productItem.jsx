import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';

// Define the ProductItem component, which displays individual product details
const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext); // Get currency from the context

    return (
        <Link className="product-item" to={`/products/${id}`}>
            <div className='product-image-container'>
                {/* Display the first image in the image array */}
                <img className="product-image" src={image[0]} alt={name} />
            </div>
            <div className="product-details">
                <p className='product-name'>{name}</p>
                <p className='product-price'>
                    {currency} {price.toLocaleString()} {/* Format the price nicely */}
                </p>
            </div>
        </Link>
    );
};

export default ProductItem;
