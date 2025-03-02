import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    paymentMode: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment Successful! Your wall has been rented.");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center p-6">
      <div className="bg-gray-800 shadow-lg rounded-lg p-6 max-w-3xl w-full text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Billing Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block">ZIP Code</label>
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <h3 className="text-xl font-semibold mt-6">Payment Details</h3>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="w-full text-left bg-gray-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {open ? "▼ Select Payment Mode" : "▶ Select Payment Mode"}
                </Disclosure.Button>
                <Disclosure.Panel className="p-4 bg-gray-700 mt-2 rounded-lg">
                  <div>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="paymentMode"
                        value="UPI"
                        onChange={handleChange}
                        className="text-blue-500"
                      />
                      <span>UPI</span>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center space-x-2 mt-2">
                      <input
                        type="radio"
                        name="paymentMode"
                        value="Netbanking"
                        onChange={handleChange}
                        className="text-blue-500"
                      />
                      <span>Netbanking</span>
                    </label>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Complete Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
