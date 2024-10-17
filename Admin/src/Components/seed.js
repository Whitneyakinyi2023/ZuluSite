import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import UserModel from './UserDb.js';
import dotenv from 'dotenv';
dotenv.config();

const seedAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        const existingAdmin = await UserModel.findOne({ email: adminEmail });

        if (!existingAdmin) {
            const hashedPassword = await bcrypt.hash(adminPassword, 10); // Hash password

            const adminUser = new UserModel({
                name: 'Admin User',
                email: adminEmail,
                password: hashedPassword,
            });

            await adminUser.save();
            console.log('Admin user created successfully!');
        } else {
            console.log('Admin user already exists.');
        }

    } catch (error) {
        console.error('Error seeding admin:', error);
    } finally {
        mongoose.connection.close();
    }
};

seedAdmin();
