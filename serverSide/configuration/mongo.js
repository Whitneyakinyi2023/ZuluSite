// Importing the mongoose library, which is used to interact with MongoDB databases
import mongoose from "mongoose";

// Function to connect to MongoDB using mongoose
const connectMongo = async () => {

    // Event listener for when the MongoDB connection is established successfully
    mongoose.connection.on('Connected to business database', () => {
        console.log('Zulu Enterprise MongoDb database is connected successfully'); // Log success message
    });

    // Attempt to connect to the MongoDB database using the connection string stored in environment variables
    // The database name used here is "ShakaZulu"
    await mongoose.connect(`${process.env.MONGOSH_CONNECTION}/ShakaZulu`);
}

// Export the connectMongo function to be used in other parts of the application
export default connectMongo;
