import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import ShoppingCart from './Pages/ShoppingCart'
import AboutZulu from './Pages/AboutZulu'
import Products from './Pages/Products'
import Placeorder from './Pages/Placeorder'
import HistoryOrder from './Pages/HistoryOrder'


const App = () => {
  return (
    <div className='Screen-Compatible'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Cart' element={<ShoppingCart />} />
        <Route path='/About' element={<AboutZulu />} />
        <Route path='/Drinks' element={<Products />} />
        <Route path='/Order' element={<Placeorder />} />
        <Route path='/History' element={<HistoryOrder />} />

      </Routes>

    </div>
  )
}

export default App