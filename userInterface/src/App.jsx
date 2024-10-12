import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import ShoppingCart from './Pages/ShoppingCart';
import AboutZulu from './Pages/AboutZulu';
import Products from './Pages/Products';
import Placeorder from './Pages/Placeorder';
import HistoryOrder from './Pages/HistoryOrder';
import NotFound from './Pages/NotFound';
import Navigationbar from './Components/Navigationbar';

const App = () => {
  return (
    <div className='screen-compatible'>
      <Navigationbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<ShoppingCart />} />
        <Route path='/about' element={<AboutZulu />} />
        <Route path='/drinks' element={<Products />} />
        <Route path='/order' element={<Placeorder />} />
        <Route path='/history' element={<HistoryOrder />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
