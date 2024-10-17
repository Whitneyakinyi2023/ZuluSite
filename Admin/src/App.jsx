import React, { useEffect, useState } from 'react';
import Navbar from './Components/navbar';
import { Route, Routes } from 'react-router-dom';
import AddDrink from './Pages/Add';
import ListOfDrinks from './Pages/List';
import Orders from './Pages/Orders';
import Statistics from './Pages/Stats';
import Login from './Components/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const backendUrl = import.meta.env.VITE_BACKEND_URL; // Ensure correct env variable
const App = () => {
  // State to manage user token
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    }
  }, [token]);

  return (
    <>
      <ToastContainer />
      {
        // If token is empty, show the Login component
        token === '' ? (
          <Login setToken={setToken} />
        ) : (
          // Else, show the Navbar and other routes
          <>
            <Navbar setToken={setToken} />
            <Routes>
              <Route path='/' element={<ListOfDrinks token={token} />} />
              <Route path='/Add' element={<AddDrink token={token} />} />
              <Route path='/List' element={<ListOfDrinks token={token} />} />
              <Route path='/Orders' element={<Orders token={token} />} />
              <Route path='/Stats' element={<Statistics token={token} />} />
            </Routes>
          </>
        )
      }
    </>
  );
};

export default App;
