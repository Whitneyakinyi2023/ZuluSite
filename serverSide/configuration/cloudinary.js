import { v2 as cloudinary } from "cloudinary";

/**
 * Configures Cloudinary connection with credentials from environment variables.
 * @throws {Error} Will throw an error if required environment variables are not set.
 */
const cloudinaryConnect = async () => {
    // Check if required environment variables are set
    const { Cloudinary_Name, Cloudinary_API_KEY, Cloudinary_Secret_Key } = process.env;

    if (!Cloudinary_Name || !Cloudinary_API_KEY || !Cloudinary_Secret_Key) {
        throw new Error('Missing Cloudinary configuration in environment variables.');
    }

    try {
        // Set up Cloudinary configuration
        cloudinary.config({
            cloud_name: Cloudinary_Name,
            apiKey: Cloudinary_API_KEY,
            apiSecret: Cloudinary_Secret_Key
        });

        console.log('Cloudinary connected successfully'); // Log success message
    } catch (error) {
        console.error('Error connecting to Cloudinary:', error); // Log any errors
        throw error; // Rethrow error for further handling if needed
    }
};

// Export the connection function for use in other parts of the application
export default cloudinaryConnect;