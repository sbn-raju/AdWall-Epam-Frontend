import React from 'react'
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Loader from './components/Loader';

// Lazy-loaded components
const LoginPage = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/About"));
const BuyerDashboard = lazy(() => import("./pages/buyer/Dashboard"));
const PrivateRoute = lazy(() => import("./routes/PrivateRoute"));
const SellerDashboard = lazy(() => import("./pages/seller/Dashboard"));
const Product = lazy(() => import("./products/ProductsList"));
const ProductDetails = lazy(() => import("./products/ProductDetails"));
const CheckoutPage = lazy(() => import("./products/CheckoutPage"));
const Error = lazy(() => import("./components/Error"));
import { Layout } from './layouts/Layout'; 
import DashboardLayout from './layouts/DashboardLayout';
import WallForm from './pages/seller/WallForm';
import Transaction from './pages/seller/Transactions';
const Profile = lazy(() => import("./Profile"));

const App = () => {

  const role = sessionStorage.getItem('userRole');
  return (
    <Router>
      <Suspense fallback={<Loader/>}>

     
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>

        <Route path='/register' element={<Register/>}/>

        

        <Route path='/' element={<Layout/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/products-list' element={<Product/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>

          <Route path='/checkout/:id' element={
          <PrivateRoute>
             <CheckoutPage/>
          </PrivateRoute>
        }/>
        </Route>


        <Route path='/' element={
          <PrivateRoute>
            <DashboardLayout/>
          </PrivateRoute>
        }>  
          <Route path='/buyer/dashboard' element={
              <BuyerDashboard/>
          }/>

          <Route path='/seller/dashboard' element={
            <SellerDashboard/>
          }/>

          <Route path={ `${role}/dashboard/profile/`} element={
            <Profile/>
          }/>

          <Route path='/seller/dashboard/add/wall' element={
            <WallForm/>
          }/>

          <Route path={`${role}/dashboard/tansactions`} element={
            <Transaction/>
          }/>

        </Route>


        

        

      

        

         {/* Other routes */}
         <Route path="*" element={<Error />} />
      </Routes>

    <Toaster position='top-center'/>
    </Suspense>
    </Router>
  )
}

export default App