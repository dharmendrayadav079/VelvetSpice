import React, { useState } from "react";

const AddressForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can also validate here
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill all fields.");
      return;
    }

    onSubmit(formData); // Send data to parent (Cart page)
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow max-w-md mx-auto mt-6 space-y-4">
      <h2 className="text-xl font-bold mb-4 text-center">Enter Delivery Address</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        className="w-full p-2 border rounded"
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        className="w-full p-2 border rounded"
        onChange={handleChange}
      />
      <textarea
        name="address"
        placeholder="Full Address"
        className="w-full p-2 border rounded"
        onChange={handleChange}
        rows={3}
      ></textarea>

      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full">
        Proceed to Order
      </button>
    </form>
  );
};

export default AddressForm;
