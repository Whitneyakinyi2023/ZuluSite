import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { Bar } from 'react-chartjs-2'; // Example of using Chart.js

const Statistics = () => {
    const [stats, setStats] = useState({
        totalRevenue: 0,
        totalOrders: 0,
        topProducts: [],
        totalCost: 0, // Assuming cost is fetched from the backend
        lowStockDrinks: [], // Drinks running low
        outOfStockDrinks: [] // Drinks that are out of stock
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await axios.get('/api/stats');
                setStats(res.data); // Assuming the API returns the necessary stats including cost, stock, etc.
            } catch (error) {
                console.error('Error fetching statistics:', error);
            }
        };
        fetchStats();
    }, []);

    // Calculate profit (Total Revenue - Total Cost)
    const profit = stats.totalRevenue - stats.totalCost;

    // Prepare data for Chart.js (Top Selling Products)
    const chartData = {
        labels: stats.topProducts.map(product => product.name),
        datasets: [
            {
                label: 'Top Selling Products',
                data: stats.topProducts.map(product => product.sales),
                backgroundColor: 'gold'
            }
        ]
    };

    return (
        <div>
            <h1>Statistics</h1>
            <p>Total Revenue: ${stats.totalRevenue}</p>
            <p>Total Orders: {stats.totalOrders}</p>
            <p>Total Cost: ${stats.totalCost}</p>
            <p>Profit: ${profit >= 0 ? profit : `Loss of $${Math.abs(profit)}`}</p>

            {/* Top Selling Products Chart */}
            <h2>Top Selling Products</h2>
            <Bar data={chartData} />

            {/* Out-of-Stock Alerts */}
            {stats.outOfStockDrinks.length > 0 && (
                <div className="alert alert-danger">
                    <h3>Out of Stock</h3>
                    <ul>
                        {stats.outOfStockDrinks.map(drink => (
                            <li key={drink._id}>{drink.name} (Out of Stock)</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Low Stock Alerts */}
            {stats.lowStockDrinks.length > 0 && (
                <div className="alert alert-warning">
                    <h3>Low Stock</h3>
                    <ul>
                        {stats.lowStockDrinks.map(drink => (
                            <li key={drink._id}>{drink.name} (Only {drink.stock} left)</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Statistics;
