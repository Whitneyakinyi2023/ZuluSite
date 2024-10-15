// Importing necessary dependencies
import cors from 'cors'; // Middleware to enable Cross-Origin Resource Sharing (CORS) for secure communication between different domains
import connectMongo from './configuration/mongo.js'; // Importing the function to establish a MongoDB connection
import 'dotenv/config'; // Load environment variables from a .env file (used for sensitive information like database credentials)
import express from 'express'; // Import the Express framework to build the server
import cloudinaryConnect from './configuration/cloudinary.js'

// Initialize the Express application
const app = express();

// Set the server's port, either from environment variables (process.env.PORT) or default to port 3000
const port = process.env.PORT || 3000;

// Establish a connection to MongoDB using the imported connectMongo function
connectMongo();
cloudinaryConnect();
// Middleware to parse incoming JSON payloads in the request body
app.use(express.json());

// Enable CORS middleware to allow cross-origin requests from other domains
app.use(cors());

// Define a basic route for the root URL ("/")
// This route sends a simple message when someone visits the root path
app.get('/', (req, res) => {
    res.send("Server is up"); // Respond with a message to indicate the server is running
});

// Start the Express server and listen on the specified port
// Log a message to the console indicating that the server is running and listening on the port
app.listen(port, () => {
    console.log('We are running on this port: ' + port); // Output the port number for confirmation
});
