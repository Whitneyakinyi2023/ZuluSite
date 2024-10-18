import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCart();

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };

    const generateWhatsAppLink = () => {
        const orderDetails = cart
            .map(item => `${item.name} (Ksh ${item.price})`)
            .join('%0A'); // New line for each item

        const total = cart.reduce((total, item) => total + item.price, 0);
        const message = `Order Details:%0A${orderDetails}%0ATotal: Ksh ${total}%0APlease contact me for payment and support.`;

        const phoneNumber = 'YOUR_PHONE_NUMBER'; // Replace with your WhatsApp number
        return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                <img src={new URL(`../assets/${item.src}`, import.meta.url).href} alt={item.name} />
                                <p>{item.name}</p>
                                <p>Ksh {item.price}</p>
                                <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <p>Total: Ksh {cart.reduce((total, item) => total + item.price, 0)}</p>
                    <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                        <button>Send Order via WhatsApp</button>
                    </a>
                    <button onClick={clearCart}>Clear Cart</button>
                </>
            )}
        </div>
    );
};

export default Cart;
