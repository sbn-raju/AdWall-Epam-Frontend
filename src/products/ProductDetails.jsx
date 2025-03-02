import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = {
    id: 1,
    name: "Wall A",
    location: "Downtown",
    price: "$500/month",
    description: "A prime advertising wall in a high-traffic downtown area. Perfect for maximum visibility.",
    dimensions: "20ft x 30ft",
    availability: "Available",
    image: "/images/images1.jpg",
  };

  return (
    <div className="min-h-screen bg-gray-900 p-12 flex justify-center">
      <div className="bg-gray-800 shadow-lg rounded-lg max-w-5xl w-full flex flex-col md:flex-row">
        {/* Left Container - Product Images */}
        <div className="md:w-1/2 p-6 flex justify-center items-center">
          <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded-lg" />
        </div>

        {/* Right Container - Product Details */}
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
          <p className="text-white text-lg mb-4">{product.description}</p>
          <p className="text-white"><strong>Location:</strong> {product.location}</p>
          <p className="text-white"><strong>Dimensions:</strong> {product.dimensions}</p>
          <p className="text-white"><strong>Availability:</strong> {product.availability}</p>
          <p className="text-white font-bold text-2xl mt-4">{product.price}</p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full"
          onClick={() => navigate(`/checkout/${product.id}`)}>
            Rent This Wall
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
