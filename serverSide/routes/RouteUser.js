// Import the Express framework and Router utility
import express from "express";

// Import the user authentication controller functions
import { LogIn, SignUp, AdminLogs } from '../controllers/userAuth.js';

// Create an instance of an Express Router
const routeUser = express.Router();

// Route for user sign-up
// Handles POST requests to '/SignUp' and calls the SignUp controller function
routeUser.post('/SignUp', SignUp);

// Route for user login
// Handles POST requests to '/login' and calls the LogIn controller function
routeUser.post('/login', LogIn);

// Route for admin logs (e.g., admin-specific actions or logging)
// Handles POST requests to '/admin' and calls the AdminLogs controller function
routeUser.post('/admin', AdminLogs);

// Export the router to be used in the main application file
export default routeUser;
