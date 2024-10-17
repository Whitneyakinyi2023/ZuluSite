import React, { useState } from 'react';
import axios from 'axios';

const AddDrink = () => {
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        size: '',
        description: '',
        price: '',
        image: null
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            image: e.target.files[0]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = new FormData();
            data.append('name', formData.name);
            data.append('category', formData.category);
            data.append('size', formData.size);
            data.append('description', formData.description);
            data.append('price', formData.price);
            data.append('image', formData.image);

            const res = await axios.post('/api/drinks/add', data);
            setMessage(res.data.message); // Success message from the server
        } catch (error) {
            setMessage('Error adding drink');
        }
    };

    return (
        <div>
            <h1>Add a New Drink</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Drink Name" onChange={handleChange} required />
                <input type="text" name="category" placeholder="Category" onChange={handleChange} required />
                <input type="text" name="size" placeholder="Size" onChange={handleChange} required />
                <input type="text" name="description" placeholder="Description" onChange={handleChange} />
                <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
                <input type="file" name="image" onChange={handleImageChange} required />
                <button type="submit">Add Drink</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AddDrink;
