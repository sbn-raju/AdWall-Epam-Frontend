import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [walls, setWalls] = useState([
    { id: 1, name: "Wall A", location: "Downtown", price: "$500/month", image: "https://via.placeholder.com/300" },
    { id: 2, name: "Wall B", location: "City Center", price: "$700/month", image: "https://via.placeholder.com/300" },
    { id: 3, name: "Wall C", location: "Suburbs", price: "$300/month", image: "https://via.placeholder.com/300" },
    { id: 4, name: "Wall D", location: "Highway", price: "$600/month", image: "https://via.placeholder.com/300" },{ id: 1, name: "Wall A", location: "Downtown", price: "$500/month", image: "https://via.placeholder.com/300" },
    { id: 5, name: "Wall B", location: "City Center", price: "$700/month", image: "https://via.placeholder.com/300" },
    { id: 6, name: "Wall C", location: "Suburbs", price: "$300/month", image: "https://drive.google.com/file/d/1PVW28rRqk76J1-MAhptZrUl5Wm_fsmEy/view?usp=sharing" },
    // { id: 7, name: "Wall D", location: "Highway", price: "$600/month", image: "https://via.placeholder.com/300" },
  ]);

  const navigate = useNavigate();

  const handleRent = (wall) => {
    alert(`You have selected ${wall.name} for rent!`);
    navigate("/product/1");
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <h1 className="text-4xl font-bold text-center text-white mb-8">Rent a Wall</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {walls.map((wall) => (
          <div key={wall.id} className="bg-gray-800 shadow-lg rounded-lg p-4 hover:shadow-xl transition">
            <img src={wall.image} alt={wall.name} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-white mb-2">{wall.name}</h2>
              <p className="text-white">Location: {wall.location}</p>
              <p className="text-white font-bold">Price: {wall.price}</p>
              <button
                onClick={() => handleRent(wall)}
                className="mt-4 w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Rent Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
