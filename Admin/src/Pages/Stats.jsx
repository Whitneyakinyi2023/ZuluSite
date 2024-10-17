import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2'; // Example of using Chart.js

const Statistics = () => {
    const [stats, setStats] = useState({
        totalRevenue: 0,
        totalOrders: 0,
        topProducts: []
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await axios.get('/api/stats');
                setStats(res.data); // Assuming the API returns the necessary stats
            } catch (error) {
                console.error('Error fetching statistics:', error);
            }
        };
        fetchStats();
    }, []);

    // Prepare data for Chart.js
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

            <h2>Top Selling Products</h2>
            <Bar data={chartData} />
        </div>
    );
};

export default Statistics;
