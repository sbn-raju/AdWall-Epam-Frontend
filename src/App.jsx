import React, { useState } from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./components/Loader";
import { IKContext } from "imagekitio-react";

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
import { Layout } from "./layouts/Layout";
import DashboardLayout from "./layouts/DashboardLayout";
import WallForm from "./pages/seller/WallForm";
import Transaction from "./pages/seller/Transactions";
import BASE_URI from "./utils/base_uri";
import Testing from "./pages/Testing";
import Payments from "./Payments";
const Profile = lazy(() => import("./Profile"));

const App = () => {
  //Loading states for the verification.
  const [isLoading, setIsLoading] = useState(false);

  const role = sessionStorage.getItem("userRole");

  //Getting the creadintials for imageKit authentication.
  const urlEndpoint = import.meta.env.VITE_REACT_IMAGE_KIT_API_URL;
  const publicKey = import.meta.env.VITE_REACT_IMAGE_KIT_PUBLIC_KEY;

  //Getting the signature and the authentication token from the backend.
  const authenticator = async () => {
    //Active the loading state when we hit on this URL for the signature and token.
    setIsLoading(true);

    try {
      const response = await fetch(`${BASE_URI}/third-party/auth/image-kit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`
        );
      }

      const data = await response.json();

      //Extracting the signature and token from the data.
      const { signature, expire, token } = data;
      return { signature, expire, token };

    } catch (error) {
      toast.error(`Authentication request failed: ${error.message}`);
      throw new Error(`Authentication request failed: ${error.message}`);
    } finally {
      //Pausing the Loading state.
      setIsLoading(false);
    }
  };

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route path="/register" element={<Register />} />

          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/products-list" element={<Product />} />
            <Route path="/product/:id" element={<ProductDetails />} />

            <Route
              path="/checkout/:id"
              element={
                <PrivateRoute>
                  <CheckoutPage />
                </PrivateRoute>
              }
            />
          </Route>

          <Route
            path="/"
            element={
              <PrivateRoute>
                <DashboardLayout />
              </PrivateRoute>
            }
          >
            <Route path="/buyer/dashboard" element={<BuyerDashboard />} />

            <Route path="/seller/dashboard" element={<SellerDashboard />} />

            <Route path={`${role}/dashboard/profile/`} element={<Profile />} />

            <Route
              path="/seller/dashboard/add/wall"
              element={
                <IKContext
                  urlEndpoint={urlEndpoint}
                  publicKey={publicKey}
                  authenticator={authenticator}
                >
                  <WallForm/>
                </IKContext>
              }
            />

            <Route
              path={`${role}/dashboard/tansactions`}
              element={<Transaction />}
            />


          </Route>

            <Route
              path={`/payment`}
              element={<Payments />}
            />
          
          

          {/* Other routes */}
          <Route path="*" element={<Error />} />
        </Routes>

        <Toaster position="top-center" />
      </Suspense>
    </Router>
  );
};

export default App;
