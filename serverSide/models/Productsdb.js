import mongoose from "mongoose"; // Import the Mongoose library for MongoDB object modeling

// Define the schema for the products in the liquor store
const ZulugoodsSchema = new mongoose.Schema({
    name: {
        type: String, // The name of the product
        required: true // Name is required
    },
    category: {
        type: String, // The category the product belongs to (e.g., wine, beer, spirits)
        required: true // Category is required
    },
    size: {
        type: String, // The size of the product (e.g., 750ml, 1L)
        required: true // Size is required
    },
    description: {
        type: String, // A brief description of the product
        required: false // Description is optional
    },
    price: {
        type: Number, // The price of the product
        required: true // Price is required
    },
    image: {
        type: Array, // An array to hold image URLs or paths
        required: true // Images are required
    },
    promotion: {
        type: Boolean, // Flag to indicate if the product is under promotion
        default: false // Default value is false
    },
    date: {
        type: Date, // Timestamp or date for when the product was added
        default: Date.now // Set to current date by default
    }
});

// Create a Mongoose model for the product, using ZulugoodsSchema
const GoodsModel = mongoose.models.Product || mongoose.model("Product", ZulugoodsSchema);

export default GoodsModel;
