import React, { createContext, useState } from "react";

// Create a new context called ShopContext
export const ShopContext = createContext();

// Define the ShopContextProvider component to wrap around components that need access to the shop's global state
const ShopContextProvider = (props) => {
    //  Global state (useState can be used for dynamic data)
    const [cartItems, setCartItems] = useState([]);
    const [userDetails, setUserDetails] = useState(null);

    // This is the value that will be accessible by any child components through the context
    const value = {
        cartItems,          // List of items in the user's cart
        setCartItems,       // Function to update the cart items
        userDetails,        // Details of the current user
        setUserDetails,     // Function to update user details
    };

    // Return the Provider component with the value and wrap it around the children components
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
