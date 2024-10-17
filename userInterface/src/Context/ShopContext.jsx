import React, { createContext } from 'react';
import products from '../assets/products'; // Import the products data

// Create a context to provide shop-related data globally
export const ShopContext = createContext();

// ShopContextProvider component to wrap around parts of the app that need access to shop data
const ShopContextProvider = ({ children }) => {
    // Define default currency for the shop
    const currency = 'Ksh'; // Kenyan Shillings

    // Prepare the value object that will be provided to components using this context
    const value = {
        products, // Array of products available in the shop
        currency, // Default currency to be used throughout the app
    };

    return (
        // Provide the context value to any children components wrapped within ShopContextProvider
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
