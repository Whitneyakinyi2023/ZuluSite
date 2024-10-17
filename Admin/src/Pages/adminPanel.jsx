// AdminPanel.js

import React from 'react';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
    return (
        <div className="admin-panel">
            <h1>Admin Panel</h1>
            <nav>
                <ul>
                    <li><Link to="/admin/add-product">Add Product</Link></li>
                    <li><Link to="/admin/products">View Products</Link></li>
                    <li><Link to="/admin/orders">View Orders</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default AdminPanel;
