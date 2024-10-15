import mongoose from "mongoose"; // Import the Mongoose library for MongoDB object modeling

// Define the schema for users in the system (e.g., customers, admins)
const ZuluUserSchema = new mongoose.Schema({
    name: {
        type: String, // The user's full name
        required: true // Name is required
    },
    email: {
        type: String, // The user's email address
        required: true, // Email is required
        unique: true, // Email must be unique
        match: [/.+@.+\..+/, "Please enter a valid email address"] // Regex for email validation
    },
    password: {
        type: String, // The user's hashed password
        required: true // Password is required
    },
    cartDetails: {
        type: Object, // Stores details of the user's cart (could include products, quantities, etc.)
        default: {} // Default is an empty object
    },
    dateJoined: {
        type: Date, // The date the user joined
        default: Date.now // Defaults to the current date
    },
    lastLogin: {
        type: Date, // The last time the user logged in
        default: null // Initially null, will be updated on login
    }
}, {
    minimize: false, // Prevents empty objects from being removed
    timestamps: true // Automatically adds 'createdAt' and 'updatedAt' fields
});

// Create a Mongoose model for users, using ZuluUserSchema
const UserModel = mongoose.models.User || mongoose.model("User", ZuluUserSchema);

// Export the model for use in other parts of the application
export default UserModel;
