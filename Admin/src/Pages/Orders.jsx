import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await axios.get('/api/orders');
                setOrders(res.data.orders); // Assuming the API returns { orders: [...] }
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };
        fetchOrders();
    }, []);

    const updateOrderStatus = async (id, newStatus) => {
        try {
            await axios.put(`/api/orders/${id}`, { status: newStatus });
            // Refresh the orders after updating status
            const updatedOrders = orders.map(order =>
                order._id === id ? { ...order, status: newStatus } : order
            );
            setOrders(updatedOrders);
        } catch (error) {
            console.error('Error updating order status:', error);
        }
    };

    return (
        <div>
            <h1>Orders</h1>
            <ul>
                {orders.map(order => (
                    <li key={order._id}>
                        <p>{order.customerName}</p>
                        <p>{order.items.map(item => item.name).join(', ')}</p>
                        <p>{order.totalPrice}</p>
                        <p>{order.status}</p>
                        <button onClick={() => updateOrderStatus(order._id, 'Shipped')}>Mark as Shipped</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Orders;
