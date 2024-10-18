import express from 'express';
import { singleProduct, listProducts, addProduct, removeProduct } from '../controllers/productController.js';
import upload from '../middleware/multer.js'; // Assuming multer setup for file uploads

const productRouter = express.Router();

// Route for adding a product with multipart form data using multer
productRouter.post('/add', upload.fields([
    { name: 'image0', maxCount: 1 },
    { name: 'image1', maxCount: 2 },
    { name: 'image2', maxCount: 3 },
    { name: 'image3', maxCount: 4 }
]), addProduct);

// Route for removing a product
productRouter.post('/remove', removeProduct);

// Route for fetching a single product by ID
productRouter.get('/single/:id', singleProduct);

// Route for listing all products
productRouter.get('/list', listProducts);

export default productRouter;
