import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3000;
const dbConnection = process.env.MONGODB_CONNECTION;
const jwtSecret = process.env.JWT_SECRET;

// Example MongoDB connection
import mongoose from 'mongoose';

mongoose.connect(dbConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

// You can access your other variables similarly:
const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;

// Start server on the configured port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
