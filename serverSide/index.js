import cors from 'cors'; // Enable Cross-Origin Resource Sharing
import connectMongo from './configuration/mongo.js'; // MongoDB connection function
import 'dotenv/config'; // Load environment variables
import express from 'express'; // Express framework
import cloudinaryConnect from './configuration/cloudinary.js'; // Cloudinary connection
import routeUser from './routes/RouteUser.js'; // User routes

const app = express(); // Initialize Express app
const port = process.env.PORT || 3000; // Set port

// Function to start the server
const startServer = async () => {
    try {
        // Connect to MongoDB and Cloudinary
        await connectMongo();
        await cloudinaryConnect();

        // Middleware to parse incoming JSON and enable CORS
        app.use(express.json());
        app.use(cors());

        // API routes
        app.use('/api/user', routeUser);

        // Basic root route
        app.get('/', (req, res) => {
            res.send("Server is up");
        });

        // Start the Express server
        app.listen(port, () => {
            console.log(`Server running on port: ${port}`);
        });
    } catch (error) {
        console.error('Error during server startup:', error);
        process.exit(1); // Exit if there's a startup failure
    }
};

startServer(); // Call function to start the server
