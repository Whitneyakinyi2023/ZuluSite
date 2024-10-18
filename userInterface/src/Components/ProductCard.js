import React from 'react';
import { useCart } from './CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
        alert(`${product.name} added to cart!`);
    };

    return (
        <div className="product-card">
            <img src={new URL(`../assets/${product.src}`, import.meta.url).href} alt={product.name} className="product-image" />
            <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>{product.size}</p>
                <p>Ksh {product.price}</p>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;
