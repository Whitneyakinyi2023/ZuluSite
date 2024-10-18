import React from 'react';
import { useCart } from '../Context/CartContext.jsx';

const OrderConfirmation = () => {
    const { cart } = useCart();

    return (
        <div className="order-confirmation">
            <h2>Thank you for your order!</h2>
            <h3>Order Summary:</h3>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        <p>{item.name} - Ksh {item.price}</p>
                    </li>
                ))}
            </ul>
            <p>Total: Ksh {cart.reduce((total, item) => total + item.price, 0)}</p>
        </div>
    );
};

export default OrderConfirmation;
