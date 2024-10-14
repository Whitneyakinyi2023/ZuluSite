import React, { useContext } from 'react';
{/*import { ShopContext } from './path/to/ShopContext';*/ }
import productsData from '../assets/products.json'
const ProductList = () => {
    const { products } = useContext(ShopContext);

    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-item">
                    <h3>{product.name}</h3>
                    <br />
                    <p>{product.description}</p>
                    <br />
                    <p>Price: KSH {product.price}</p>
                    <br />
                    <p>Size: {product.size}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
