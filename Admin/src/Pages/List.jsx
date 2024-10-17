import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListOfDrinks = () => {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        const fetchDrinks = async () => {
            try {
                const res = await axios.get('/api/drinks');
                setDrinks(res.data.drinks); // Assuming the API returns { drinks: [...] }
            } catch (error) {
                console.error('Error fetching drinks:', error);
            }
        };
        fetchDrinks();
    }, []);

    return (
        <div>
            <h1>List of Drinks</h1>
            <ul>
                {drinks.map(drink => (
                    <li key={drink._id}>
                        <img src={drink.imageUrl} alt={drink.name} width="100" />
                        <p>{drink.name}</p>
                        <p>{drink.category}</p>
                        <p>{drink.size}</p>
                        <p>{drink.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListOfDrinks;
