import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from '../src/Context/CartContext';
import Navigationbar from '../src/Components/Navigationbar';
import Search from './Components/Search';
import Home from './Pages/Home';
import Profile from '../src/Pages/Profile';
import Contact from '../src/Pages/Contact';
import Login from '../src/Pages/Login';
import ShoppingCart from './Pages/ShoppingCart';
import AboutZulu from './Pages/AboutZulu';
import Products from './Pages/Products';
import Placeorder from './Pages/Placeorder';
import HistoryOrder from './Pages/HistoryOrder';
import NotFound from './Pages/NotFound';
import Checkout from './Pages/Checkout'; // Ensure you have this page
import OrderConfirmation from './Pages/OrderConfirmation'; // Ensure you have this page

const App = () => {
  return (
    <CartProvider>
      <div className='screen-compatible'>
        <Navigationbar />
        <Search />
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
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/order-confirmation' element={<OrderConfirmation />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;
