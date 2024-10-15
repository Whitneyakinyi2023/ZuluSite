import UserModel from '../models/userDb.js'; // Import the User model for database operations
import validator from 'validator'; // Import validator for validating user input
import bcrypt from 'bcrypt'; // Import bcrypt for password hashing
import jwt from 'jsonwebtoken'; // Import jsonwebtoken for token generation

// Token Generation
const genToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET, { expiresIn: '1d' }); // Token expiration set to 1 day
};

// Function to handle user login
const LogIn = async (req, res) => {
    try {
        const { email, password } = req.body; // Extract email and password from the request body

        // Check if the user exists in the database
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Compare the provided password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid password" });
        }

        // Successful login, generate and send token
        const token = genToken(user._id); // Generate token using user ID
        return res.status(200).json({ success: true, token }); // Send response with token
    } catch (error) {
        // Handle errors during login process
        console.error("Login error:", error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
};

// Function to handle user registration (sign up)
const SignUp = async (req, res) => {
    try {
        const { name, email, password } = req.body; // Extract user details from the request body

        // Check if the email already exists
        const userExists = await UserModel.findOne({ email });
        if (userExists) {
            return res.status(400).json({ success: false, message: "Email already in use" });
        }

        // Validate email format
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Please provide a valid email address" });
        }

        // Validate password length
        if (password.length < 6) { // Minimum password length of 6 characters
            return res.status(400).json({ success: false, message: "Password should be at least 6 characters" });
        }

        // Hash the password before saving to the database
        const hashedPassword = await bcrypt.hash(password, 10); // Hash with 10 salt rounds

        // Create a new user record in the database
        const newUser = new UserModel({
            name,
            email,
            password: hashedPassword // Store the hashed password
        });

        await newUser.save(); // Save the new user to the database

        const token = genToken(newUser._id); // Generate token for the new user
        return res.status(201).json({ success: true, token }); // Send response with token
    } catch (error) {
        // Handle errors during signup process
        console.error("Signup error:", error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
};

// Function to handle admin logs (for monitoring or administrative purposes)
const AdminLogs = async (req, res) => {
    // Placeholder for admin logging logic (e.g., fetch logs, return log data)
    return res.status(200).json({ success: true, message: "Admin logs retrieval logic here" });
};

// Exporting the functions for use in other parts of the application
export { LogIn, SignUp, AdminLogs };
