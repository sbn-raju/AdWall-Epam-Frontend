import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';
import AboutUs from './pages/About';
import BuyerDashboard from './pages/buyer/Dashboard';
import PrivateRoute from './routes/PrivateRoute';
import SellerDashboard from './pages/seller/Dashboard';
import { Layout } from './layouts/Layout';
import Product from './products/ProductsList';
import ProductDetails from './products/ProductDetails';
import CheckoutPage from './products/CheckoutPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>

        <Route path='/register' element={<Register/>}/>

        

        <Route path='/' element={<Layout/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/products-list' element={<Product/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
        </Route>

        <Route path='/checkout/:id' element={
          <PrivateRoute>
             <CheckoutPage/>
          </PrivateRoute>
        }/>

        <Route path='/buyer/dashboard' element={
          <PrivateRoute>
             <BuyerDashboard/>
          </PrivateRoute>
        }/>

        <Route path='/seller/dashboard' element={
          <PrivateRoute>
             <SellerDashboard/>
          </PrivateRoute>
        }/>
      </Routes>

    <Toaster position='top-center'/>
    </Router>
  )
}

export default App