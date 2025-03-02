import React, { useState } from "react";

export default function WallForm() {
  const [formData, setFormData] = useState({
    wallName: "",
    description: "",
    location: "",
    image: null,
    dimensions: "",
    dimensionType: "ft",
    availability: true,
    price: "",
    priceType: "daily",
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="w-xl mx-auto p-6 bg-gray-800 shadow-lg text-white rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Wall Listing Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Wall Name */}
        <div>
          <label className="block text-white font-medium">Name of Wall</label>
          <input 
            type="text" 
            name="wallName" 
            value={formData.wallName} 
            onChange={handleChange} 
            className="w-full p-2 border rounded-md" 
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-white font-medium">Description</label>
          <textarea 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
            className="w-full p-2 border rounded-md" 
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-white font-medium">Location</label>
          <input 
            type="text" 
            name="location"
            placeholder="City" 
            value={formData.location} 
            onChange={handleChange} 
            className="w-full p-2 border rounded-md" 
            required
          />
        </div>

        {/* Wall Image */}
        <div>
          <label className="block text-white font-medium">Upload Wall Image</label>
          <input 
            type="file" 
            name="image" 
            onChange={handleChange} 
            className="w-full p-2 border rounded-md"
            accept="image/*"
            required
          />
        </div>

        {/* Dimensions */}
        <div className="flex space-x-2">
          <div className="flex-1">
            <label className="block text-white font-medium">Dimensions</label>
            <input 
              type="text" 
              name="dimensions" 
              placeholder="Height * Breath"
              value={formData.dimensions} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-md" 
              required
            />
          </div>
          <div>
            <label className="block text-white font-medium">Unit</label>
            <select 
              name="dimensionType" 
              value={formData.dimensionType} 
              onChange={handleChange} 
              className="w-full bg-gray-800 p-2 border rounded-md text-white"
            >
              <option value="ft">Feet</option>
              <option value="meter">Meters</option>
            </select>
          </div>
        </div>

        {/* Availability Toggle */}
        <div className="flex items-center space-x-2">
          <input 
            type="checkbox" 
            name="availability" 
            checked={formData.availability} 
            onChange={handleChange} 
            className="w-5 h-5"
          />
          <label className="text-whitefont-medium">Available</label>
        </div>

        {/* Price & Price Type */}
        <div className="flex space-x-2">
          <div className="flex-1">
            <label className="block text-white font-medium">Price</label>
            <input 
              type="number" 
              name="price" 
              value={formData.price} 
              onChange={handleChange}
              placeholder="In Rs." 
              className="w-full  p-2 border rounded-md" 
              required
            />
          </div>
          <div>
            <label className="block text-white font-medium">Price Type</label>
            <select 
              name="priceType" 
              value={formData.priceType} 
              onChange={handleChange} 
              className="w-full bg-gray-800 p-2 border rounded-md"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
        >
          Submit Wall Listing
        </button>
      </form>
    </div>
  );
}
