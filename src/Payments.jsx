import React, { useEffect, useState } from 'react'
import Loader from './components/Loader';
import BASE_URI from './utils/base_uri';
import toast from 'react-hot-toast';
import Razorpay from 'razorpay';
import { useLocation } from 'react-router-dom';
;

const Payments = () => {
  //Making States for the operations.
  const[isLoading, setIsLoading] = useState(false);
  const[order, setOrder] = useState(null);

  //Getting the location from the states.
  const location = useLocation();
  const { name, email, phone} = location.state || {};
  const amount = 500;//For Testing


  //This Page will create order on the load of this page or on th call of the button.
  const createOrderFunction = async() => {
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URI}/payment/create-order`,{
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body:JSON.stringify({name, email, amount, phone})
      });

      const result = await response.json();
      if(result.success){
        console.log(result);
        setOrder(result.data);
      }else{
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error(`${error.message || error || "Something went wrong"}`);
    }finally{
      setIsLoading(false);
    }
  }


  //Razory Pay Options.
  const razorpayOptions = {
    key: import.meta.env.VITE_REACT_RAZORPAY_ID,
    amount: order?.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: `${order?.currency}`,
    name: "AdWall",
    description: "Renting a Wall for advertising.",
    image: "/images/AdWall.png",
    order_id: `${order?.id}`, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    callback_url: `${BASE_URI}/`,//This is a base success url where the razorpay will call after the successfull payment.
    prefill: {
        name: `${order?.notes?.name}`,
        email: `${order?.notes?.email}`,
        contact: `${order?.notes?.phone}`
    },
    notes: {
        address: `Razorpay`
    },
    theme: {
        "color": "#3399cc"
    } 
  }

 

   //Calling the razorpay object to get the popup.
   const openPopup = ()=>{
    
    //Creating the instance of the razorpay for payment.
    let razorpay = new window.Razorpay(razorpayOptions);

    //Firstly getting the order from
    razorpay.open();
   }

   //Open on the mounting the component.
   useEffect(()=>{
    createOrderFunction();
   },[]);

  if(isLoading){
    return (
      <Loader/>
    )
  }


  return (
    <div className='w-full h-lvh bg-gray-900'>Payments
      <button onClick={openPopup} className='bg-amber-500 p-4'>
        Pay
      </button>
    </div>
  )
}

export default Payments