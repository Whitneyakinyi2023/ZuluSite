// Importing necessary dependencies
import cors from 'cors'; // Middleware for enabling CORS (Cross-Origin Resource Sharing)
import 'dotenv/config'; // Loading environment variables from a .env file
import express from 'express'; // Import the Express framework

// Initialize an Express application
const app = express();

// Set the port for the server to listen on, using an environment variable or defaulting to 3000
const port = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Enable CORS to allow cross-origin requests
app.use(cors());

// Define a route for the root URL ("/")
// This route sends a simple response when accessed
app.get('/', (req, res) => {
    res.send("Server is up"); // Respond with a message indicating the server is running
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log('We are running on this port: ' + port); // Log the port to the console
});
