import React, { useState } from 'react';
import { useCart } from '../Context/CartContext';

const Checkout = () => {
    const { cart, clearCart } = useCart();
    const [customerDetails, setCustomerDetails] = useState({
        name: '',
        email: '',
        address: '',
        cardNumber: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomerDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally handle payment processing and order confirmation
        alert(`Order placed successfully!`);
        clearCart(); // Clear the cart after order
    };

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={customerDetails.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={customerDetails.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Address</label>
                    <input type="text" name="address" value={customerDetails.address} onChange={handleChange} required />
                </div>
                <div>
                    <label>Card Number</label>
                    <input type="text" name="cardNumber" value={customerDetails.cardNumber} onChange={handleChange} required />
                </div>
                <button type="submit">Place Order</button>
            </form>
        </div>
    );
};

export default Checkout;
