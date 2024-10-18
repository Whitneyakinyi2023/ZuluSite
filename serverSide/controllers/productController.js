import GoodsModel from '../models/Productsdb.js'; // Import the Product model
import { v2 as cloudinary } from "cloudinary"; // Import Cloudinary

// Adding a new product
const addProduct = async (req, res) => {
    try {
        const { name, category, description, price, size } = req.body;

        // Validate required fields
        if (!name || !category || !price || !size) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        // Ensure req.files exists and contains the expected images
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({ error: 'No files uploaded.' });
        }

        const images = [];

        // Loop through the images, upload each one to Cloudinary
        for (let i = 0; i < req.files.length; i++) {
            const imageFile = req.files[i].path; // Get the image path
            const result = await cloudinary.uploader.upload(imageFile, {
                resource_type: "image"
            });
            images.push(result.secure_url); // Push the Cloudinary URL to the array
        }

        // Create a new product instance
        const newProduct = new GoodsModel({
            name,
            category,
            description,
            price,
            size,
            image: images, // Store the array of Cloudinary image URLs
            promotion: false
        });

        // Save the product to the database
        await newProduct.save();

        return res.status(201).json({ success: true, message: "Product added successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

// List products
const listProducts = async (req, res) => {
    try {
        const products = await GoodsModel.find(); // Fetch all products from the database
        return res.status(200).json(products);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to retrieve products.' });
    }
};

// Remove product
const removeProduct = async (req, res) => {
    const { id } = req.params; // Assuming product ID is sent in the URL

    try {
        const product = await GoodsModel.findByIdAndDelete(id); // Find and delete the product
        if (!product) {
            return res.status(404).json({ error: 'Product not found.' });
        }
        return res.status(200).json({ message: 'Product removed successfully.' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to remove product.' });
    }
};

// Single product info
const singleProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await GoodsModel.findById(id); // Find the product by ID
        if (!product) {
            return res.status(404).json({ error: 'Product not found.' });
        }
        return res.status(200).json(product);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to retrieve product information.' });
    }
};

// Export all functions
export { singleProduct, listProducts, addProduct, removeProduct };
