import React from 'react';
import { Link } from 'react-router-dom';
import './products.css'
import productsData from '../assets/products.json';

const Products = () => {
  return (
    <div className="products-grid">
      {productsData.products.map((product) => (
        <Link key={product.id} to={`/products/${product.id}`} className="product-card">
          {/* Load the image from the assets folder */}
          <img
            src={new URL(`../assets/${product.src}`, import.meta.url).href}
            alt={product.name}
            className="product-image"
          />
          <div className="product-info">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.size}</p>
            <p>Ksh {product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
